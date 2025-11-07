import os
from flask import Flask, request, jsonify, send_from_directory
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

db.init_app(app)


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


@app.route('/')
def index():
    """Serve the main HTML file"""
    response = send_from_directory('.', 'index.html')
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'
    return response


@app.route('/api/survey-data', methods=['GET'])
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


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
