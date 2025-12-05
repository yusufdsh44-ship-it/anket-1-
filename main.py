import os
from functools import wraps
from flask import Flask, request, jsonify, send_from_directory, make_response, session, redirect, url_for
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
app.config['SESSION_COOKIE_SECURE'] = False
app.config['SESSION_COOKIE_HTTPONLY'] = True

APP_PASSWORD = os.environ.get("APP_PASSWORD", "")

db.init_app(app)


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not APP_PASSWORD:
            return f(*args, **kwargs)
        if not session.get('authenticated'):
            if request.is_json:
                return jsonify({'success': False, 'error': 'Unauthorized'}), 401
            return redirect(url_for('login_page'))
        return f(*args, **kwargs)
    return decorated_function


class SurveyData(db.Model):
    """Stores all survey data as JSON"""
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


LOGIN_PAGE = '''
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giriş - Arnavutköy Belediyesi</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1a5276 0%, #2980b9 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .login-container {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            width: 100%;
            max-width: 400px;
        }
        .logo {
            text-align: center;
            margin-bottom: 30px;
        }
        .logo h1 {
            color: #1a5276;
            font-size: 24px;
            font-weight: 700;
        }
        .logo p {
            color: #666;
            font-size: 14px;
            margin-top: 5px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #333;
            font-weight: 500;
        }
        .form-group input {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        .form-group input:focus {
            outline: none;
            border-color: #2980b9;
        }
        .btn {
            width: 100%;
            padding: 14px;
            background: #1a5276;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s;
        }
        .btn:hover {
            background: #2980b9;
        }
        .error {
            background: #fee;
            color: #c00;
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="logo">
            <h1>ARNAVUTKÖY BELEDİYESİ</h1>
            <p>JD-R Anket Değerlendirme Sistemi</p>
        </div>
        <!-- ERROR_PLACEHOLDER -->
        <form method="POST" action="/login">
            <div class="form-group">
                <label for="password">Şifre</label>
                <input type="password" id="password" name="password" placeholder="Şifrenizi girin" required autofocus>
            </div>
            <button type="submit" class="btn">Giriş Yap</button>
        </form>
    </div>
</body>
</html>
'''


@app.route('/login', methods=['GET'])
def login_page():
    if APP_PASSWORD and session.get('authenticated'):
        return redirect(url_for('index'))
    return LOGIN_PAGE.replace('<!-- ERROR_PLACEHOLDER -->', '')


@app.route('/login', methods=['POST'])
def login():
    password = request.form.get('password', '')
    if password == APP_PASSWORD:
        session['authenticated'] = True
        return redirect(url_for('index'))
    return LOGIN_PAGE.replace('<!-- ERROR_PLACEHOLDER -->', '<div class="error">Yanlış şifre. Lütfen tekrar deneyin.</div>')


@app.route('/logout')
def logout():
    session.pop('authenticated', None)
    return redirect(url_for('login_page'))


@app.route('/')
@login_required
def index():
    """Serve the main HTML file with no caching"""
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    response = make_response(content)
    response.headers['Content-Type'] = 'text/html; charset=utf-8'
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate, max-age=0'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '-1'
    return response


@app.route('/api/survey-data', methods=['GET'])
@login_required
def get_survey_data():
    """Get all survey data from database"""
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
@login_required
def save_survey_data():
    """Save survey data to database"""
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
@login_required
def serve_rapor_verileri():
    """Serve rapor_verileri.js with authentication"""
    with open('rapor_verileri.js', 'r', encoding='utf-8') as f:
        content = f.read()
    response = make_response(content)
    response.headers['Content-Type'] = 'application/javascript; charset=utf-8'
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
