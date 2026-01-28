"""ARNBEL + ANKET Entegrasyon - SQLAlchemy Modelleri"""
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from datetime import datetime


class Base(DeclarativeBase):
    pass


db = SQLAlchemy(model_class=Base)


# ==================== ANKET Modelleri (Mevcut) ====================

class SurveyData(db.Model):
    """Anket verileri (JD-R raporlar)"""
    __tablename__ = 'survey_data'

    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.JSON, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'data': self.data,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }


class AccessLog(db.Model):
    """Giriş logları"""
    __tablename__ = 'access_logs'

    id = db.Column(db.Integer, primary_key=True)
    ip_address = db.Column(db.String(45), nullable=False)
    user_agent = db.Column(db.String(500))
    login_time = db.Column(db.DateTime, default=datetime.utcnow)
    success = db.Column(db.Boolean, default=True)

    def to_dict(self):
        return {
            'id': self.id,
            'ip_address': self.ip_address,
            'user_agent': self.user_agent,
            'login_time': self.login_time.isoformat() if self.login_time else None,
            'success': self.success
        }


# ==================== PSİKOLOJİ Modelleri (ARNBEL) ====================

class Mudurluk(db.Model):
    """Mudurlukler (Directorates)"""
    __tablename__ = 'mudurlukler'

    id = db.Column(db.Integer, primary_key=True)
    ad = db.Column(db.String(200), nullable=False, unique=True)
    emoji = db.Column(db.String(10), default='')

    # Anket bazli metrikler (mudurluk geneli)
    genel_memnuniyet = db.Column(db.Float)
    is_stresi = db.Column(db.Float)
    jdr_talep_puani = db.Column(db.Float)
    jdr_kaynak_puani = db.Column(db.Float)

    # Anket analiz metni (AI destekli)
    anket_analiz_metni = db.Column(db.Text)

    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationships
    personeller = db.relationship('Personel', back_populates='mudurluk', lazy='dynamic')

    def to_dict(self):
        return {
            'id': self.id,
            'ad': self.ad,
            'emoji': self.emoji,
            'genel_memnuniyet': self.genel_memnuniyet,
            'is_stresi': self.is_stresi,
            'jdr_talep_puani': self.jdr_talep_puani,
            'jdr_kaynak_puani': self.jdr_kaynak_puani,
            'anket_analiz_metni': self.anket_analiz_metni,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }


class Personel(db.Model):
    """Personeller (Personnel)"""
    __tablename__ = 'personeller'

    id = db.Column(db.Integer, primary_key=True)
    tc_no = db.Column(db.String(11), unique=True)
    ad_soyad = db.Column(db.String(200), nullable=False)
    mudurluk_id = db.Column(db.Integer, db.ForeignKey('mudurlukler.id'))

    # Kunye (Demografik Bilgiler)
    yas = db.Column(db.Integer)
    cinsiyet = db.Column(db.String(20))
    egitim = db.Column(db.String(100))
    medeni_durum = db.Column(db.String(50))
    cocuk_sayisi = db.Column(db.Integer)
    kidem_yil = db.Column(db.Integer)
    gorev = db.Column(db.String(200))
    foto_path = db.Column(db.String(500), default='default-avatar.png')

    # Anket Sonuclari (Kisisel)
    anket_ruh_sagligi_risk = db.Column(db.Integer, default=0)  # 0-4 arasi
    anket_umutsuzluk = db.Column(db.Boolean, default=False)
    anket_uyku_bozuklugu = db.Column(db.Boolean, default=False)
    anket_istah_degisimi = db.Column(db.Boolean, default=False)
    anket_isteksizlik = db.Column(db.Boolean, default=False)

    # MMPI Sonuclari
    mmpi_l_skoru = db.Column(db.Float)
    mmpi_f_skoru = db.Column(db.Float)
    mmpi_k_skoru = db.Column(db.Float)
    mmpi_pa_skoru = db.Column(db.Float)
    mmpi_sc_skoru = db.Column(db.Float)
    mmpi_scales = db.Column(db.Text)  # JSON tum klinik skalalar
    mmpi_analiz_metni = db.Column(db.Text)  # AI destekli yorum
    mmpi_tarih = db.Column(db.Date)

    # Triyaj (Hesaplanmis)
    triyaj_puani = db.Column(db.Float, default=0)  # 1-5 arasi final skor
    triyaj_anket_agirligi = db.Column(db.Float, default=0.3)
    triyaj_mmpi_agirligi = db.Column(db.Float, default=0.3)
    triyaj_klinik_agirligi = db.Column(db.Float, default=0.4)
    risk_kategori = db.Column(db.String(20), default='Belirsiz')  # Dusuk/Orta/Yuksek/Kritik

    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    mudurluk = db.relationship('Mudurluk', back_populates='personeller')
    seanslar = db.relationship('Seans', back_populates='personel', lazy='dynamic', order_by='desc(Seans.tarih)')
    randevular = db.relationship('Randevu', back_populates='personel', lazy='dynamic')
    triyaj_gecmisi = db.relationship('TriyajGecmisi', back_populates='personel', lazy='dynamic')

    def to_dict(self):
        return {
            'id': self.id,
            'tc_no': self.tc_no,
            'ad_soyad': self.ad_soyad,
            'mudurluk_id': self.mudurluk_id,
            'yas': self.yas,
            'cinsiyet': self.cinsiyet,
            'egitim': self.egitim,
            'medeni_durum': self.medeni_durum,
            'cocuk_sayisi': self.cocuk_sayisi,
            'kidem_yil': self.kidem_yil,
            'gorev': self.gorev,
            'foto_path': self.foto_path,
            'anket_ruh_sagligi_risk': self.anket_ruh_sagligi_risk,
            'anket_umutsuzluk': self.anket_umutsuzluk,
            'anket_uyku_bozuklugu': self.anket_uyku_bozuklugu,
            'anket_istah_degisimi': self.anket_istah_degisimi,
            'anket_isteksizlik': self.anket_isteksizlik,
            'mmpi_l_skoru': self.mmpi_l_skoru,
            'mmpi_f_skoru': self.mmpi_f_skoru,
            'mmpi_k_skoru': self.mmpi_k_skoru,
            'mmpi_pa_skoru': self.mmpi_pa_skoru,
            'mmpi_sc_skoru': self.mmpi_sc_skoru,
            'mmpi_tarih': self.mmpi_tarih,  # Keep as datetime for template formatting
            'triyaj_puani': self.triyaj_puani,
            'risk_kategori': self.risk_kategori,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }


class Seans(db.Model):
    """Seanslar (Clinical Sessions)"""
    __tablename__ = 'seanslar'

    id = db.Column(db.Integer, primary_key=True)
    personel_id = db.Column(db.Integer, db.ForeignKey('personeller.id'), nullable=False)
    seans_no = db.Column(db.Integer, default=1)
    tarih = db.Column(db.Date, nullable=False)
    baslangic_saat = db.Column(db.Time)
    bitis_saat = db.Column(db.Time)
    sure_dakika = db.Column(db.Integer)

    # Klinisyen Notlari
    klinik_gozlemler = db.Column(db.Text)
    hizli_etiketler = db.Column(db.Text)  # JSON array: ["Intihar Riski Yok", "Uyku Sorunu"]

    # AI Transcript
    ai_transkript_metni = db.Column(db.Text)
    ses_kayit_referans = db.Column(db.String(500))  # Sadece referans (dosya depolanmaz)

    # Klinik Sentez
    nihai_klinik_sentez = db.Column(db.Text)
    seans_risk_puani = db.Column(db.Integer)  # 1-5

    # Psikolog ID (gelecekte multi-user icin)
    psikolog_id = db.Column(db.Integer, default=1)

    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationships
    personel = db.relationship('Personel', back_populates='seanslar')

    def to_dict(self):
        return {
            'id': self.id,
            'personel_id': self.personel_id,
            'seans_no': self.seans_no,
            'tarih': self.tarih.isoformat() if self.tarih else None,
            'baslangic_saat': self.baslangic_saat.isoformat() if self.baslangic_saat else None,
            'bitis_saat': self.bitis_saat.isoformat() if self.bitis_saat else None,
            'sure_dakika': self.sure_dakika,
            'klinik_gozlemler': self.klinik_gozlemler,
            'hizli_etiketler': self.hizli_etiketler,
            'ai_transkript_metni': self.ai_transkript_metni,
            'nihai_klinik_sentez': self.nihai_klinik_sentez,
            'seans_risk_puani': self.seans_risk_puani,
            'psikolog_id': self.psikolog_id,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }


class Randevu(db.Model):
    """Randevular (Appointments)"""
    __tablename__ = 'randevular'

    id = db.Column(db.Integer, primary_key=True)
    personel_id = db.Column(db.Integer, db.ForeignKey('personeller.id'), nullable=False)
    tarih = db.Column(db.Date, nullable=False)
    saat = db.Column(db.String(10), nullable=False)
    notlar = db.Column(db.Text)
    durum = db.Column(db.String(20), default='Bekliyor')  # Bekliyor, Tamamlandi, Iptal

    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationships
    personel = db.relationship('Personel', back_populates='randevular')

    def to_dict(self):
        return {
            'id': self.id,
            'personel_id': self.personel_id,
            'tarih': self.tarih.isoformat() if self.tarih else None,
            'saat': self.saat,
            'notlar': self.notlar,
            'durum': self.durum,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }


class TriyajGecmisi(db.Model):
    """Triyaj Gecmisi (Triage History Log)"""
    __tablename__ = 'triyaj_gecmisi'

    id = db.Column(db.Integer, primary_key=True)
    personel_id = db.Column(db.Integer, db.ForeignKey('personeller.id'))
    triyaj_puani = db.Column(db.Float)
    risk_kategori = db.Column(db.String(20))
    degisiklik_nedeni = db.Column(db.String(200))
    tarih = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationships
    personel = db.relationship('Personel', back_populates='triyaj_gecmisi')

    def to_dict(self):
        return {
            'id': self.id,
            'personel_id': self.personel_id,
            'triyaj_puani': self.triyaj_puani,
            'risk_kategori': self.risk_kategori,
            'degisiklik_nedeni': self.degisiklik_nedeni,
            'tarih': self.tarih.isoformat() if self.tarih else None
        }


class Kullanici(db.Model):
    """Sistem Kullanicilari (Multi-user icin)"""
    __tablename__ = 'kullanicilar'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(200), unique=True, nullable=False)
    ad_soyad = db.Column(db.String(200), nullable=False)
    sifre_hash = db.Column(db.String(500), nullable=False)
    rol = db.Column(db.String(20), default='psikolog')  # psikolog, admin

    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'ad_soyad': self.ad_soyad,
            'rol': self.rol,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }
