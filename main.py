import os
import hashlib
from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass


db = SQLAlchemy(model_class=Base)

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

app.secret_key = os.environ.get("FLASK_SECRET_KEY", "jdr-survey-secret-key-2025")
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL")
app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {
    "pool_recycle": 300,
    "pool_pre_ping": True,
}

APP_PASSWORD = os.environ.get("APP_PASSWORD", "")

db.init_app(app)


class SurveyData(db.Model):
    __tablename__ = 'survey_data'
    
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.JSON, nullable=False)
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())
    
    def to_dict(self):
        return {
            'id': self.id,
            'data': self.data,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }


with app.app_context():
    db.create_all()


def generate_token(password):
    return hashlib.sha256((password + app.secret_key).encode()).hexdigest()[:32]


def check_auth(req):
    if not APP_PASSWORD:
        return True
    token = req.headers.get('X-Auth-Token') or req.args.get('token')
    if token and token == generate_token(APP_PASSWORD):
        return True
    return False


LOGIN_PAGE = '''<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giriş - Arnavutköy Belediyesi</title>
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
    </style>
</head>
<body>
    <div class="login-container">
        <div class="logo">
            <h1>Arnavutköy<br>Belediyesi</h1>
            <p>Anket Değerlendirme Sistemi</p>
        </div>
        <div class="error" id="error">Yanlış şifre. Lütfen tekrar deneyin.</div>
        <form id="loginForm">
            <div class="form-group">
                <label for="password">Şifre</label>
                <input type="password" id="password" name="password" placeholder="Şifrenizi girin" required autofocus>
            </div>
            <button type="submit" class="btn">Giriş Yap</button>
        </form>
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
        
        // Check if already logged in
        const token = localStorage.getItem('authToken');
        if (token) {
            window.location.href = '/app?token=' + token;
        }
    </script>
</body>
</html>'''


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
    
    if password == APP_PASSWORD:
        token = generate_token(APP_PASSWORD)
        return jsonify({'success': True, 'token': token})
    return jsonify({'success': False, 'error': 'Invalid password'}), 401


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


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
