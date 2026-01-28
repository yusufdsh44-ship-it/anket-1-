"""ARNBEL + ANKET Entegrasyon - Ana Flask Uygulamasi"""
import os
import hashlib
import tempfile
from datetime import datetime, date, timedelta
from functools import wraps
from flask import Flask, request, jsonify, make_response, session, redirect, url_for, render_template
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

# Import models from models.py
from models import db, SurveyData, AccessLog, Mudurluk, Personel, Seans, Randevu, TriyajGecmisi, Kullanici
from utils import calculate_triage, recalculate_all_triage, get_risk_distribution, get_mudurluk_stats, get_week_dates
from importers import import_kunye_excel, import_mmpi_excel, import_anket_excel, create_sample_mudurlukler


app = Flask(__name__, static_folder='.', static_url_path='', template_folder='templates')
CORS(app)

app.secret_key = os.environ.get("FLASK_SECRET_KEY", "jdr-survey-secret-key-2025")
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL", "sqlite:///arnavutkoy.db")
app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {
    "pool_recycle": 300,
    "pool_pre_ping": True,
}
app.config["SESSION_TYPE"] = "filesystem"

APP_PASSWORD = os.environ.get("APP_PASSWORD", "")
PSIKOLOJI_PASSWORD = os.environ.get("PSIKOLOJI_PASSWORD", "arnv2024")

db.init_app(app)

with app.app_context():
    db.create_all()
    # Create sample mudurlukler if empty
    if Mudurluk.query.count() == 0:
        create_sample_mudurlukler()


# ==================== AUTH HELPERS ====================

def generate_token(password):
    return hashlib.sha256((password + app.secret_key).encode()).hexdigest()[:32]


def check_auth(req):
    """Check ANKET auth (token-based)"""
    if not APP_PASSWORD:
        return True
    token = req.headers.get('X-Auth-Token') or req.args.get('token')
    if token and token == generate_token(APP_PASSWORD):
        return True
    return False


def psikoloji_login_required(f):
    """Decorator disabled - no login required"""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        # Login kontrolü kaldırıldı - direkt erişim
        return f(*args, **kwargs)
    return decorated_function


# ==================== ANKET LOGIN PAGE ====================

LOGIN_PAGE = '''<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giris - Arnavutkoy Belediyesi</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #FBF7EF;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .login-container {
            background: white;
            padding: 48px;
            border-radius: 24px;
            box-shadow: 0 4px 20px -2px rgba(226, 217, 202, 0.5);
            border: 1px solid #E2D9CA;
            width: 100%;
            max-width: 420px;
        }
        .logo {
            text-align: center;
            margin-bottom: 40px;
        }
        .logo h1 {
            font-family: 'Playfair Display', serif;
            color: #211A16;
            font-size: 28px;
            font-weight: 600;
            line-height: 1.2;
        }
        .logo p {
            color: #7B746A;
            font-size: 11px;
            margin-top: 12px;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-weight: 500;
        }
        .form-group {
            margin-bottom: 24px;
        }
        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #2F2A24;
            font-weight: 500;
            font-size: 14px;
        }
        .form-group input {
            width: 100%;
            padding: 14px 18px;
            border: 2px solid #E2D9CA;
            border-radius: 12px;
            font-size: 16px;
            transition: all 0.2s;
            background: #FDFCFA;
        }
        .form-group input:focus {
            outline: none;
            border-color: #C86A3C;
            background: white;
        }
        .btn {
            width: 100%;
            padding: 16px;
            background: #C86A3C;
            color: #FFF9F3;
            border: none;
            border-radius: 999px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
        }
        .btn:hover {
            background: #B55D33;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(200, 106, 60, 0.3);
        }
        .error {
            background: rgba(199, 80, 80, 0.1);
            color: #C75050;
            padding: 14px;
            border-radius: 12px;
            margin-bottom: 20px;
            text-align: center;
            font-size: 14px;
            display: none;
            border: 1px solid rgba(199, 80, 80, 0.2);
        }
        .module-links {
            margin-top: 24px;
            padding-top: 24px;
            border-top: 1px solid #E2D9CA;
            text-align: center;
        }
        .module-links a {
            color: #7B746A;
            font-size: 13px;
            text-decoration: none;
        }
        .module-links a:hover {
            color: #C86A3C;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="logo">
            <h1>Arnavutkoy<br>Belediyesi</h1>
            <p>Anket Degerlendirme Sistemi</p>
        </div>
        <div class="error" id="error">Yanlis sifre. Lutfen tekrar deneyin.</div>
        <form id="loginForm">
            <div class="form-group">
                <label for="password">Sifre</label>
                <input type="password" id="password" name="password" placeholder="Sifrenizi girin" required autofocus>
            </div>
            <button type="submit" class="btn">Giris Yap</button>
        </form>
        <div class="module-links">
            <a href="/psikoloji/">Psikoloji Modulu Girisi</a>
        </div>
    </div>
    <script>
        document.getElementById('loginForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            const password = document.getElementById('password').value;
            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ password })
                });
                const data = await response.json();
                if (data.success) {
                    localStorage.setItem('authToken', data.token);
                    window.location.href = '/app?token=' + data.token;
                } else {
                    document.getElementById('error').style.display = 'block';
                }
            } catch (err) {
                document.getElementById('error').style.display = 'block';
            }
        });

        const token = localStorage.getItem('authToken');
        if (token) {
            window.location.href = '/app?token=' + token;
        }
    </script>
</body>
</html>'''


# ==================== ANKET ROUTES ====================

@app.route('/')
def home():
    if not APP_PASSWORD:
        return serve_app()
    token = request.args.get('token')
    if token and token == generate_token(APP_PASSWORD):
        return serve_app()
    return LOGIN_PAGE


@app.route('/app')
def serve_app():
    if APP_PASSWORD and not check_auth(request):
        return LOGIN_PAGE

    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    response = make_response(content)
    response.headers['Content-Type'] = 'text/html; charset=utf-8'
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate, max-age=0'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '-1'
    return response


@app.route('/api/login', methods=['POST'])
def api_login():
    data = request.get_json()
    password = data.get('password', '') if data else ''

    ip_address = request.headers.get('X-Forwarded-For', request.remote_addr)
    if ip_address and ',' in ip_address:
        ip_address = ip_address.split(',')[0].strip()
    user_agent = request.headers.get('User-Agent', '')[:500]

    if password == APP_PASSWORD:
        token = generate_token(APP_PASSWORD)
        log = AccessLog(ip_address=ip_address, user_agent=user_agent, success=True)
        db.session.add(log)
        db.session.commit()
        return jsonify({'success': True, 'token': token})

    log = AccessLog(ip_address=ip_address, user_agent=user_agent, success=False)
    db.session.add(log)
    db.session.commit()
    return jsonify({'success': False, 'error': 'Invalid password'}), 401


@app.route('/api/access-logs', methods=['GET'])
def get_access_logs():
    if APP_PASSWORD and not check_auth(request):
        return jsonify({'success': False, 'error': 'Unauthorized'}), 401

    logs = AccessLog.query.order_by(AccessLog.login_time.desc()).limit(100).all()
    return jsonify({
        'success': True,
        'logs': [log.to_dict() for log in logs]
    })


@app.route('/api/check-auth')
def check_auth_status():
    if not APP_PASSWORD:
        return jsonify({'authenticated': True, 'required': False})
    return jsonify({'authenticated': check_auth(request), 'required': True})


@app.route('/api/survey-data', methods=['GET'])
def get_survey_data():
    if APP_PASSWORD and not check_auth(request):
        return jsonify({'success': False, 'error': 'Unauthorized'}), 401

    survey_record = SurveyData.query.first()

    if survey_record:
        return jsonify({
            'success': True,
            'data': survey_record.data
        })
    else:
        return jsonify({
            'success': True,
            'data': None
        })


@app.route('/api/survey-data', methods=['POST'])
def save_survey_data():
    if APP_PASSWORD and not check_auth(request):
        return jsonify({'success': False, 'error': 'Unauthorized'}), 401

    data = request.get_json()

    if not data:
        return jsonify({'success': False, 'error': 'No data provided'}), 400

    survey_record = SurveyData.query.first()

    if survey_record:
        survey_record.data = data
    else:
        survey_record = SurveyData(data=data)
        db.session.add(survey_record)

    db.session.commit()

    return jsonify({
        'success': True,
        'message': 'Data saved successfully'
    })


@app.route('/rapor_verileri.js')
def serve_rapor_verileri():
    with open('rapor_verileri.js', 'r', encoding='utf-8') as f:
        content = f.read()
    response = make_response(content)
    response.headers['Content-Type'] = 'application/javascript; charset=utf-8'
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    return response


# ==================== PSIKOLOJI MODULE ROUTES ====================

@app.route('/psikoloji/')
def psikoloji_index():
    """Redirect directly to dashboard - no login required"""
    return redirect(url_for('psikoloji_dashboard'))


@app.route('/psikoloji/login', methods=['GET', 'POST'])
def psikoloji_login():
    """Psikoloji module login page"""
    error = None
    if request.method == 'POST':
        email = request.form.get('email', '')
        password = request.form.get('password', '')

        if password == PSIKOLOJI_PASSWORD:
            session['psikoloji_logged_in'] = True
            session['user_name'] = email.split('@')[0].title() if '@' in email else 'Dr. Kullanici'
            return redirect(url_for('psikoloji_dashboard'))
        else:
            error = 'Gecersiz sifre'

    return render_template('psikoloji/login.html', error=error) if os.path.exists('templates/psikoloji/login.html') else f'''
    <!DOCTYPE html>
    <html lang="tr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Psikoloji Modulu - Giris</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    </head>
    <body class="bg-[#F4EFE6] min-h-screen flex items-center justify-center">
        <div class="bg-white p-12 rounded-2xl shadow-lg max-w-md w-full border border-[#E2D9CA]">
            <h1 class="font-serif text-3xl font-bold text-[#2F2A24] mb-2">Psikoloji Modulu</h1>
            <p class="text-[#7B746A] text-sm mb-8">Arnavutkoy Belediyesi</p>
            {'<div class="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">' + error + '</div>' if error else ''}
            <form method="POST">
                <div class="mb-4">
                    <label class="block text-sm font-medium text-[#2F2A24] mb-2">Email</label>
                    <input type="text" name="email" class="w-full px-4 py-3 border border-[#E2D9CA] rounded-lg" placeholder="email@belediye.gov.tr">
                </div>
                <div class="mb-6">
                    <label class="block text-sm font-medium text-[#2F2A24] mb-2">Sifre</label>
                    <input type="password" name="password" class="w-full px-4 py-3 border border-[#E2D9CA] rounded-lg" placeholder="Sifreniz">
                </div>
                <button type="submit" class="w-full bg-[#2F2A24] text-white py-3 rounded-lg font-medium hover:bg-[#1e1b17] transition-colors">Giris Yap</button>
            </form>
            <div class="mt-6 text-center">
                <a href="/" class="text-sm text-[#7B746A] hover:text-[#C86A3C]">Anket Sistemine Don</a>
            </div>
        </div>
    </body>
    </html>
    '''


@app.route('/psikoloji/logout')
def psikoloji_logout():
    """Logout from psikoloji module"""
    session.pop('psikoloji_logged_in', None)
    session.pop('user_name', None)
    return redirect(url_for('psikoloji_login'))


@app.route('/psikoloji/dashboard')
@psikoloji_login_required
def psikoloji_dashboard():
    """Dashboard - Main overview page"""
    from sqlalchemy import func

    # Get stats
    stats = {
        'toplam_personel': Personel.query.count(),
        'mmpi_tamamlanan': Personel.query.filter(Personel.mmpi_tarih.isnot(None)).count(),
        'gorusme_yapilan': db.session.query(func.count(func.distinct(Seans.personel_id))).scalar() or 0,
        'riskli_personel': Personel.query.filter(Personel.risk_kategori.in_(['Kritik', 'Yuksek'])).count()
    }

    # Get risk distribution
    risk_dagilim = get_risk_distribution()

    # Get today's appointments
    today = date.today()
    today_appointments = db.session.query(
        Randevu, Personel.ad_soyad, Personel.risk_kategori
    ).select_from(Randevu).join(
        Personel, Randevu.personel_id == Personel.id
    ).filter(Randevu.tarih == today).order_by(Randevu.saat).all()

    today_appointments = [{
        'id': apt[0].id,
        'saat': apt[0].saat,
        'ad_soyad': apt[1],
        'personel_id': apt[0].personel_id,
        'risk_kategori': apt[2],
        'durum': apt[0].durum
    } for apt in today_appointments]

    # Get mudurlukler with stats
    mudurlukler_raw = db.session.query(
        Mudurluk.id, Mudurluk.ad, Mudurluk.emoji,
        func.count(Personel.id).label('personel_sayisi'),
        func.avg(Personel.triyaj_puani).label('ort_risk')
    ).select_from(Mudurluk).outerjoin(
        Personel, Personel.mudurluk_id == Mudurluk.id
    ).group_by(Mudurluk.id).all()

    mudurlukler = [{
        'id': m[0],
        'ad': m[1],
        'emoji': m[2] or '',
        'personel_sayisi': m[3] or 0,
        'ort_risk': m[4]
    } for m in mudurlukler_raw]

    return render_template('psikoloji/dashboard.html',
                           stats=stats,
                           risk_dagilim=risk_dagilim,
                           today_appointments=today_appointments,
                           mudurlukler=mudurlukler)


@app.route('/psikoloji/triyaj')
@psikoloji_login_required
def psikoloji_triyaj():
    """Personnel triage list"""
    from sqlalchemy import func

    mudurluk_filter = request.args.get('mudurluk', '')
    risk_filter = request.args.get('risk', '')

    query = db.session.query(
        Personel,
        Mudurluk.ad.label('mudurluk_adi'),
        Mudurluk.emoji.label('mudurluk_emoji'),
        func.count(Seans.id).label('seans_sayisi')
    ).select_from(Personel).outerjoin(
        Mudurluk, Personel.mudurluk_id == Mudurluk.id
    ).outerjoin(
        Seans, Seans.personel_id == Personel.id
    ).group_by(Personel.id)

    if mudurluk_filter:
        query = query.filter(Personel.mudurluk_id == int(mudurluk_filter))
    if risk_filter:
        query = query.filter(Personel.risk_kategori == risk_filter)

    query = query.order_by(Personel.triyaj_puani.desc().nullslast())
    results = query.all()

    personeller = [{
        'id': r[0].id,
        'ad_soyad': r[0].ad_soyad,
        'yas': r[0].yas,
        'cinsiyet': r[0].cinsiyet,
        'mudurluk_adi': r[1],
        'mudurluk_emoji': r[2],
        'gorev': r[0].gorev,
        'mmpi_tarih': r[0].mmpi_tarih,
        'anket_ruh_sagligi_risk': r[0].anket_ruh_sagligi_risk or 0,
        'seans_sayisi': r[3] or 0,
        'risk_kategori': r[0].risk_kategori,
        'triyaj_puani': r[0].triyaj_puani
    } for r in results]

    mudurlukler = Mudurluk.query.all()

    # Calculate stats for the filtered results
    stats = {
        'toplam': len(personeller),
        'kritik': sum(1 for p in personeller if p['risk_kategori'] == 'Kritik'),
        'yuksek': sum(1 for p in personeller if p['risk_kategori'] == 'Yuksek'),
        'orta': sum(1 for p in personeller if p['risk_kategori'] == 'Orta'),
        'dusuk': sum(1 for p in personeller if p['risk_kategori'] == 'Dusuk' or p['risk_kategori'] is None)
    }

    return render_template('psikoloji/triyaj.html',
                           personeller=personeller,
                           mudurlukler=mudurlukler,
                           stats=stats,
                           current_mudurluk=mudurluk_filter,
                           current_risk=risk_filter)


@app.route('/psikoloji/takvim')
@psikoloji_login_required
def psikoloji_takvim():
    """Appointment calendar"""
    week_offset = int(request.args.get('week', 0))
    week_days, start_of_week = get_week_dates(week_offset)
    today = date.today()

    # Get appointments for the week
    start_date = start_of_week
    end_date = start_of_week + timedelta(days=5)

    appointments_raw = db.session.query(
        Randevu, Personel.ad_soyad, Personel.risk_kategori, Mudurluk.ad.label('mudurluk_adi')
    ).select_from(Randevu).join(
        Personel, Randevu.personel_id == Personel.id
    ).outerjoin(
        Mudurluk, Personel.mudurluk_id == Mudurluk.id
    ).filter(
        Randevu.tarih >= start_date,
        Randevu.tarih < end_date
    ).all()

    appointments = [{
        'id': apt[0].id,
        'personel_id': apt[0].personel_id,
        'tarih': apt[0].tarih.strftime('%Y-%m-%d'),
        'saat': apt[0].saat,
        'durum': apt[0].durum,
        'ad_soyad': apt[1],
        'risk_kategori': apt[2],
        'mudurluk_adi': apt[3]
    } for apt in appointments_raw]

    personeller = Personel.query.order_by(Personel.ad_soyad).all()

    return render_template('psikoloji/takvim.html',
                           week_days=week_days,
                           start_of_week=start_of_week,
                           week_offset=week_offset,
                           appointments=appointments,
                           personeller=personeller,
                           today=today)


@app.route('/psikoloji/personel/<int:personel_id>')
@psikoloji_login_required
def psikoloji_personel_detail(personel_id):
    """Personnel detail page"""
    personel = db.session.get(Personel, personel_id)
    if not personel:
        return redirect(url_for('psikoloji_triyaj'))

    mudurluk = db.session.get(Mudurluk, personel.mudurluk_id) if personel.mudurluk_id else None
    seanslar = Seans.query.filter_by(personel_id=personel_id).order_by(Seans.tarih.desc()).all()

    personel_dict = personel.to_dict()
    personel_dict['mudurluk_adi'] = mudurluk.ad if mudurluk else None

    return render_template('psikoloji/personel_detail.html',
                           personel=type('Personel', (), personel_dict)(),
                           mudurluk=mudurluk,
                           seanslar=seanslar)


@app.route('/psikoloji/seans/<int:personel_id>', methods=['GET', 'POST'])
@psikoloji_login_required
def psikoloji_seans(personel_id):
    """Session recording page - Professional clinical session interface"""
    from datetime import datetime as dt
    import json

    personel = db.session.get(Personel, personel_id)
    if not personel:
        return redirect(url_for('psikoloji_triyaj'))

    # Get previous sessions for history
    onceki_seanslar = Seans.query.filter_by(personel_id=personel_id).order_by(Seans.seans_no.desc()).all()

    # Get next session number
    seans_no = (onceki_seanslar[0].seans_no + 1) if onceki_seanslar else 1

    if request.method == 'POST':
        # Parse start/end times
        baslangic = None
        bitis = None
        try:
            baslangic_str = request.form.get('baslangic_saat', '')
            bitis_str = request.form.get('bitis_saat', '')
            if baslangic_str:
                baslangic = dt.strptime(baslangic_str, '%H:%M:%S').time()
            if bitis_str:
                bitis = dt.strptime(bitis_str, '%H:%M:%S').time()
        except:
            pass

        # Collect MSE data
        mse_data = {
            'gorunum': request.form.get('mse_gorunum', ''),
            'konusma': request.form.get('mse_konusma', ''),
            'duygudurum': request.form.get('mse_duygudurum', ''),
            'duygulanim': request.form.get('mse_duygulanim', ''),
            'dusunce_sureci': request.form.get('mse_dusunce_sureci', ''),
            'dusunce_icerik': request.form.get('mse_dusunce_icerik', ''),
            'algi': request.form.get('mse_algi', ''),
            'bilis': request.form.get('mse_bilis', ''),
            'icgoru': request.form.get('mse_icgoru', ''),
            'yargi': request.form.get('mse_yargi', ''),
            'notlar': request.form.get('mse_notlar', ''),
            'ruh_hali_puan': request.form.get('ruh_hali_puan', '5')
        }

        # Combine clinical observations with MSE
        klinik_notlar = request.form.get('klinik_gozlemler', '')
        tani_izlenimi = request.form.get('tani_izlenimi', '')
        ev_odevi = request.form.get('ev_odevi', '')
        onemli_notlar = request.form.get('onemli_notlar', '')

        # Build comprehensive notes
        full_notes = klinik_notlar
        if tani_izlenimi:
            full_notes += f"\n\n## TANI IZLENIMI\n{tani_izlenimi}"
        if ev_odevi:
            full_notes += f"\n\n## EV ODEVI\n{ev_odevi}"
        if onemli_notlar:
            full_notes += f"\n\n## ONEMLI NOTLAR\n{onemli_notlar}"

        # Combine hizli etiketler with MSE
        hizli_etiketler = request.form.get('hizli_etiketler', '{}')
        try:
            etiketler_dict = json.loads(hizli_etiketler)
            etiketler_dict['mse'] = mse_data
            hizli_etiketler = json.dumps(etiketler_dict, ensure_ascii=False)
        except:
            pass

        # Save the session
        seans = Seans(
            personel_id=personel_id,
            seans_no=int(request.form.get('seans_no', seans_no)),
            tarih=date.today(),
            baslangic_saat=baslangic,
            bitis_saat=bitis,
            sure_dakika=int(request.form.get('sure_dakika', 45)),
            klinik_gozlemler=full_notes,
            hizli_etiketler=hizli_etiketler,
            ai_transkript_metni=request.form.get('ai_transkript', ''),
            nihai_klinik_sentez=request.form.get('nihai_sentez', ''),
            seans_risk_puani=int(request.form.get('risk_puani', 3))
        )
        db.session.add(seans)
        db.session.commit()

        # Create follow-up appointment if requested
        if request.form.get('takip_gerekli') and request.form.get('sonraki_randevu_tarih'):
            try:
                from datetime import datetime
                randevu_tarih = datetime.strptime(request.form.get('sonraki_randevu_tarih'), '%Y-%m-%d').date()
                randevu_saat = request.form.get('sonraki_randevu_saat', '10:00')
                yeni_randevu = Randevu(
                    personel_id=personel_id,
                    tarih=randevu_tarih,
                    saat=randevu_saat,
                    durum='Planli',
                    notlar=request.form.get('sonraki_randevu_not', '')
                )
                db.session.add(yeni_randevu)
                db.session.commit()
            except:
                pass

        # Recalculate triage
        calculate_triage(personel_id)

        return redirect(url_for('psikoloji_personel_detail', personel_id=personel_id))

    mudurluk = db.session.get(Mudurluk, personel.mudurluk_id) if personel.mudurluk_id else None
    personel_dict = personel.to_dict()
    personel_dict['mudurluk_adi'] = mudurluk.ad if mudurluk else None

    return render_template('psikoloji/seans.html',
                           personel=type('Personel', (), personel_dict)(),
                           mudurluk=mudurluk,
                           seans_no=seans_no,
                           onceki_seanslar=onceki_seanslar)


@app.route('/psikoloji/analiz')
@psikoloji_login_required
def psikoloji_analiz():
    """Analysis overview - all directorates"""
    from sqlalchemy import func

    mudurlukler_raw = db.session.query(
        Mudurluk.id, Mudurluk.ad, Mudurluk.emoji,
        func.count(Personel.id).label('personel_sayisi'),
        func.avg(Personel.triyaj_puani).label('ort_triyaj'),
        func.sum(db.case((Personel.risk_kategori.in_(['Kritik', 'Yuksek']), 1), else_=0)).label('riskli_sayi'),
        func.sum(db.case((Personel.mmpi_tarih.isnot(None), 1), else_=0)).label('mmpi_tamamlanan')
    ).select_from(Mudurluk).outerjoin(
        Personel, Personel.mudurluk_id == Mudurluk.id
    ).group_by(Mudurluk.id).all()

    # Get seans counts per mudurluk
    seans_counts = db.session.query(
        Personel.mudurluk_id,
        func.count(Seans.id).label('seans_count')
    ).select_from(Personel).join(
        Seans, Seans.personel_id == Personel.id
    ).group_by(Personel.mudurluk_id).all()
    seans_dict = {s[0]: s[1] for s in seans_counts}

    mudurlukler = [{
        'id': m[0],
        'ad': m[1],
        'emoji': m[2] or '',
        'personel_sayisi': m[3] or 0,
        'ort_triyaj': m[4],
        'riskli_sayi': m[5] or 0,
        'mmpi_tamamlanan': m[6] or 0,
        'seans_yapilan': seans_dict.get(m[0], 0)
    } for m in mudurlukler_raw]

    return render_template('psikoloji/analiz.html', mudurlukler=mudurlukler)


@app.route('/psikoloji/analiz/<int:mudurluk_id>')
@psikoloji_login_required
def psikoloji_mudurluk_analiz(mudurluk_id):
    """Detailed analysis for a specific directorate"""
    from sqlalchemy import func

    mudurluk = db.session.get(Mudurluk, mudurluk_id)
    if not mudurluk:
        return redirect(url_for('psikoloji_analiz'))

    stats = get_mudurluk_stats(mudurluk_id) or {
        'toplam': 0, 'ort_triyaj': None, 'kritik': 0, 'yuksek': 0, 'orta': 0, 'dusuk': 0, 'mmpi_count': 0
    }

    # Get personnel with session counts
    personeller_raw = db.session.query(
        Personel,
        func.count(Seans.id).label('seans_sayisi')
    ).select_from(Personel).outerjoin(
        Seans, Seans.personel_id == Personel.id
    ).filter(
        Personel.mudurluk_id == mudurluk_id
    ).group_by(Personel.id).order_by(Personel.triyaj_puani.desc().nullslast()).all()

    personeller = [{
        'id': p[0].id,
        'ad_soyad': p[0].ad_soyad,
        'triyaj_puani': p[0].triyaj_puani,
        'risk_kategori': p[0].risk_kategori,
        'mmpi_tarih': p[0].mmpi_tarih,
        'seans_sayisi': p[1] or 0
    } for p in personeller_raw]

    return render_template('psikoloji/mudurluk_analiz.html',
                           mudurluk=mudurluk,
                           stats=stats,
                           personeller=personeller)


@app.route('/psikoloji/import')
@psikoloji_login_required
def psikoloji_import():
    """Data import page"""
    stats = {
        'toplam_personel': Personel.query.count(),
        'mmpi_tamamlanan': Personel.query.filter(Personel.mmpi_tarih.isnot(None)).count()
    }

    message = request.args.get('message')
    message_type = request.args.get('type', 'success')

    return render_template('psikoloji/import.html',
                           stats=stats,
                           message=message,
                           message_type=message_type)


@app.route('/psikoloji/upload/kunye', methods=['POST'])
@psikoloji_login_required
def psikoloji_upload_kunye():
    """Upload kunye (demographic) data"""
    if 'file' not in request.files:
        return redirect(url_for('psikoloji_import', message='Dosya secilmedi', type='error'))

    file = request.files['file']
    if file.filename == '':
        return redirect(url_for('psikoloji_import', message='Dosya secilmedi', type='error'))

    # Save to temp file
    with tempfile.NamedTemporaryFile(delete=False, suffix='.xlsx') as tmp:
        file.save(tmp.name)
        result = import_kunye_excel(tmp.name)
        os.unlink(tmp.name)

    if result['success']:
        return redirect(url_for('psikoloji_import', message=f"{result['imported']} kayit basariyla yuklendi", type='success'))
    return redirect(url_for('psikoloji_import', message='Yukleme sirasinda hata olustu', type='error'))


@app.route('/psikoloji/upload/mmpi', methods=['POST'])
@psikoloji_login_required
def psikoloji_upload_mmpi():
    """Upload MMPI data"""
    if 'file' not in request.files:
        return redirect(url_for('psikoloji_import', message='Dosya secilmedi', type='error'))

    file = request.files['file']
    if file.filename == '':
        return redirect(url_for('psikoloji_import', message='Dosya secilmedi', type='error'))

    with tempfile.NamedTemporaryFile(delete=False, suffix='.xlsx') as tmp:
        file.save(tmp.name)
        result = import_mmpi_excel(tmp.name)
        os.unlink(tmp.name)

    if result['success']:
        return redirect(url_for('psikoloji_import', message=f"{result['imported']} MMPI kaydi yuklendi", type='success'))
    return redirect(url_for('psikoloji_import', message='Yukleme sirasinda hata olustu', type='error'))


@app.route('/psikoloji/upload/anket', methods=['POST'])
@psikoloji_login_required
def psikoloji_upload_anket():
    """Upload survey data"""
    if 'file' not in request.files:
        return redirect(url_for('psikoloji_import', message='Dosya secilmedi', type='error'))

    file = request.files['file']
    if file.filename == '':
        return redirect(url_for('psikoloji_import', message='Dosya secilmedi', type='error'))

    with tempfile.NamedTemporaryFile(delete=False, suffix='.xlsx') as tmp:
        file.save(tmp.name)
        result = import_anket_excel(tmp.name)
        os.unlink(tmp.name)

    if result['success']:
        return redirect(url_for('psikoloji_import', message=f"{result['imported']} anket kaydi yuklendi", type='success'))
    return redirect(url_for('psikoloji_import', message='Yukleme sirasinda hata olustu', type='error'))


# ==================== PSIKOLOJI API ROUTES ====================

@app.route('/api/psikoloji/search')
@psikoloji_login_required
def api_psikoloji_search():
    """Search personnel"""
    query = request.args.get('q', '')
    if len(query) < 2:
        return jsonify([])

    results = db.session.query(
        Personel, Mudurluk.ad.label('mudurluk_adi')
    ).select_from(Personel).outerjoin(
        Mudurluk, Personel.mudurluk_id == Mudurluk.id
    ).filter(
        Personel.ad_soyad.ilike(f'%{query}%')
    ).limit(10).all()

    return jsonify([{
        'id': r[0].id,
        'ad_soyad': r[0].ad_soyad,
        'mudurluk_adi': r[1],
        'risk_kategori': r[0].risk_kategori
    } for r in results])


@app.route('/api/psikoloji/stats')
@psikoloji_login_required
def api_psikoloji_stats():
    """Get system stats"""
    from sqlalchemy import func

    stats = {
        'toplam_personel': Personel.query.count(),
        'mmpi_tamamlanan': Personel.query.filter(Personel.mmpi_tarih.isnot(None)).count(),
        'gorusme_yapilan': db.session.query(func.count(func.distinct(Seans.personel_id))).scalar() or 0,
        'riskli_personel': Personel.query.filter(Personel.risk_kategori.in_(['Kritik', 'Yuksek'])).count(),
        'risk_dagilim': get_risk_distribution()
    }
    return jsonify(stats)


@app.route('/api/psikoloji/randevu', methods=['GET', 'POST'])
@psikoloji_login_required
def api_psikoloji_randevu():
    """Appointment CRUD"""
    if request.method == 'POST':
        data = request.get_json()
        randevu = Randevu(
            personel_id=int(data['personel_id']),
            tarih=datetime.strptime(data['tarih'], '%Y-%m-%d').date(),
            saat=data['saat'],
            notlar=data.get('notlar', ''),
            durum='Bekliyor'
        )
        db.session.add(randevu)
        db.session.commit()
        return jsonify({'success': True, 'id': randevu.id})

    # GET - list appointments
    randevular = Randevu.query.order_by(Randevu.tarih.desc()).limit(50).all()
    return jsonify([r.to_dict() for r in randevular])


@app.route('/api/psikoloji/randevu/<int:randevu_id>', methods=['PUT', 'DELETE'])
@psikoloji_login_required
def api_psikoloji_randevu_detail(randevu_id):
    """Update or delete appointment"""
    randevu = db.session.get(Randevu, randevu_id)
    if not randevu:
        return jsonify({'error': 'Not found'}), 404

    if request.method == 'DELETE':
        db.session.delete(randevu)
        db.session.commit()
        return jsonify({'success': True})

    # PUT - update
    data = request.get_json()
    if 'durum' in data:
        randevu.durum = data['durum']
    if 'tarih' in data:
        randevu.tarih = datetime.strptime(data['tarih'], '%Y-%m-%d').date()
    if 'saat' in data:
        randevu.saat = data['saat']
    db.session.commit()
    return jsonify({'success': True})


@app.route('/api/psikoloji/triage/calculate/<int:personel_id>', methods=['POST'])
@psikoloji_login_required
def api_psikoloji_triage_calculate(personel_id):
    """Calculate triage for a personnel"""
    result = calculate_triage(personel_id)
    if result:
        return jsonify(result)
    return jsonify({'error': 'Personnel not found'}), 404


@app.route('/api/psikoloji/triage/recalculate-all', methods=['POST'])
@psikoloji_login_required
def api_psikoloji_triage_recalculate_all():
    """Recalculate triage for all personnel"""
    results = recalculate_all_triage()
    return jsonify({'success': True, 'count': len(results)})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
