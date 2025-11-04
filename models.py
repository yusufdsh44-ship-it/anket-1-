from main import db
from datetime import datetime


class SurveyData(db.Model):
    """Stores all survey data as JSON"""
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
