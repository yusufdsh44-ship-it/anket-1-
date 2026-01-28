"""ARNBEL + ANKET Entegrasyon - Yardimci Fonksiyonlar"""
from datetime import datetime
from models import db, Personel, Seans, TriyajGecmisi


def calculate_triage(personel_id):
    """
    Personel icin triyaj puani hesapla.

    Triyaj formulu:
    - Anket riski: %30 agirlik (0-4 skalasi -> 0-5 normalize)
    - MMPI riski: %30 agirlik (PA ve SC skalalarindan hesaplama)
    - Klinik gozlem: %40 agirlik (son seans risk puani)

    Returns:
        dict: {'score': float, 'category': str} veya None
    """
    personel = db.session.get(Personel, personel_id)
    if not personel:
        return None

    # Get latest session risk score
    latest_session = Seans.query.filter_by(personel_id=personel_id)\
        .filter(Seans.seans_risk_puani.isnot(None))\
        .order_by(Seans.tarih.desc())\
        .first()

    # Calculate components
    # Anket risk: 0-4 -> 0-5 scale (multiply by 1.25)
    anket_score = (personel.anket_ruh_sagligi_risk or 0) * 1.25

    # MMPI risk (simplified: using PA and SC scales)
    # Higher values (>65) indicate more risk
    mmpi_pa = personel.mmpi_pa_skoru or 50
    mmpi_sc = personel.mmpi_sc_skoru or 50
    mmpi_risk = 1 + (max(mmpi_pa, mmpi_sc) - 50) / 10  # Rough approximation
    mmpi_score = max(1, min(5, mmpi_risk))

    # Clinical observation score (from last session, default to middle)
    klinik_score = latest_session.seans_risk_puani if latest_session else 2.5

    # Weighted average
    weights = {
        'anket': personel.triyaj_anket_agirligi or 0.3,
        'mmpi': personel.triyaj_mmpi_agirligi or 0.3,
        'klinik': personel.triyaj_klinik_agirligi or 0.4
    }

    final_score = (
        anket_score * weights['anket'] +
        mmpi_score * weights['mmpi'] +
        klinik_score * weights['klinik']
    )

    # Determine category
    if final_score >= 4:
        category = 'Kritik'
    elif final_score >= 3:
        category = 'Yuksek'
    elif final_score >= 2:
        category = 'Orta'
    else:
        category = 'Dusuk'

    # Update personnel
    personel.triyaj_puani = final_score
    personel.risk_kategori = category
    personel.updated_at = datetime.utcnow()

    # Log to history
    history = TriyajGecmisi(
        personel_id=personel_id,
        triyaj_puani=final_score,
        risk_kategori=category,
        degisiklik_nedeni='Otomatik hesaplama'
    )
    db.session.add(history)
    db.session.commit()

    return {'score': round(final_score, 2), 'category': category}


def recalculate_all_triage():
    """Tum personeller icin triyaj puanlarini yeniden hesapla."""
    personeller = Personel.query.all()
    results = []
    for personel in personeller:
        result = calculate_triage(personel.id)
        if result:
            results.append({
                'personel_id': personel.id,
                'ad_soyad': personel.ad_soyad,
                **result
            })
    return results


def get_risk_distribution():
    """Risk kategorilerine gore personel dagilimi."""
    from sqlalchemy import func

    distribution = db.session.query(
        Personel.risk_kategori,
        func.count(Personel.id).label('sayi')
    ).group_by(Personel.risk_kategori).all()

    return {row.risk_kategori: row.sayi for row in distribution}


def get_mudurluk_stats(mudurluk_id):
    """Belirli bir mudurluk icin istatistikler."""
    from sqlalchemy import func
    from models import Mudurluk

    mudurluk = db.session.get(Mudurluk, mudurluk_id)
    if not mudurluk:
        return None

    personeller = Personel.query.filter_by(mudurluk_id=mudurluk_id)

    stats = {
        'toplam': personeller.count(),
        'ort_triyaj': db.session.query(func.avg(Personel.triyaj_puani))\
            .filter(Personel.mudurluk_id == mudurluk_id).scalar(),
        'kritik': personeller.filter(Personel.risk_kategori == 'Kritik').count(),
        'yuksek': personeller.filter(Personel.risk_kategori == 'Yuksek').count(),
        'orta': personeller.filter(Personel.risk_kategori == 'Orta').count(),
        'dusuk': personeller.filter(Personel.risk_kategori == 'Dusuk').count(),
        'mmpi_count': personeller.filter(Personel.mmpi_tarih.isnot(None)).count()
    }

    return stats


def format_turkish_date(date_obj):
    """Tarihi Turkce formatta dondur."""
    if not date_obj:
        return '-'

    months = [
        'Ocak', 'Subat', 'Mart', 'Nisan', 'Mayis', 'Haziran',
        'Temmuz', 'Agustos', 'Eylul', 'Ekim', 'Kasim', 'Aralik'
    ]

    return f"{date_obj.day} {months[date_obj.month - 1]} {date_obj.year}"


def get_week_dates(week_offset=0):
    """Hafta gunlerini al (Pazartesi-Cuma)."""
    from datetime import timedelta

    today = datetime.now().date()
    start_of_week = today - timedelta(days=today.weekday()) + timedelta(weeks=week_offset)

    day_names = ['Pazartesi', 'Sali', 'Carsamba', 'Persembe', 'Cuma']
    week_days = []

    for i in range(5):
        day_date = start_of_week + timedelta(days=i)
        week_days.append({
            'name': day_names[i],
            'date': day_date,
            'date_str': day_date.strftime('%Y-%m-%d'),
            'day_num': day_date.day,
            'is_today': day_date == today
        })

    return week_days, start_of_week
