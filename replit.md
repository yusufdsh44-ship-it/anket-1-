# Arnavutköy Belediyesi - JD-R Anket Değerlendirme Sistemi

## Overview
This is a comprehensive JD-R (Job Demands-Resources) survey evaluation dashboard for Arnavutköy Municipality analyzing employee satisfaction across departments through 49 questions covering 10 themes, with PostgreSQL database persistence for multi-user access.

**Current State:** Interactive web application with data visualization and PostgreSQL database backend

## Recent Changes
- 2025-11-07: **Ana Dashboard Removed** - Simplified UI by removing main dashboard
  - **Menu Updated:** Removed "Ana Dashboard" menu item from navigation
  - **Default Page:** Application now opens directly to "Veri Girişi" (Data Entry) page
  - **Code Cleanup:** Removed dashboard template and rendering logic
  - **User Preference:** Focus on direct data entry workflow

- 2025-11-04: **Database Architecture Fixed** - Flask app context issue resolved
  - **Unified Model Structure:** Moved SurveyData model from separate models.py into main.py to fix circular import
  - **Fixed 500 Error:** Resolved "Flask app is not registered with SQLAlchemy instance" runtime error
  - **Simplified Codebase:** Removed models.py file, all database models now in main.py
  - **Status:** API endpoints (GET/POST /api/survey-data) working correctly

## Project Architecture

### Technology Stack
- **Frontend:** HTML, CSS, JavaScript with Chart.js for data visualization
- **Backend:** Flask with PostgreSQL (Neon-backed)
- **Server:** Python 3.11 Flask server on port 5000
- **Database:** PostgreSQL for persistent data storage
- **Deployment:** Flask application with database integration

### File Structure
```
.
├── index.html                      # Main interactive dashboard
├── main.py                        # Flask server with PostgreSQL integration
├── attached_assets/               # Application assets
├── .replit                        # Replit configuration
└── replit.md                      # This documentation file
```

### Key Features
1. **Interactive Dashboard:** Management control center with comprehensive analytics
   - Data visualization with charts and graphs
   - Department performance comparison
   - Theme analysis
   - Social media tracking
   - Mental health screening
   - Open-ended response analysis

2. **Data Management:**
   - Excel-like data entry interface (1600-row capacity)
   - PostgreSQL database persistence
   - Multi-user access via URL
   - Data validation and consistency checks

3. **Analysis Capabilities:**
   - Statistical analysis on survey responses
   - Department comparisons
   - Priority area identification
   - Keyword extraction from open-ended responses

### Database Configuration
- **Database:** PostgreSQL (Neon-backed) via DATABASE_URL
- **API Endpoints:** 
  - GET `/api/survey-data` - Retrieve survey data
  - POST `/api/survey-data` - Save survey data
- **Model:** SurveyData (stores JSON survey data with timestamps)

### Configuration
- **Port:** 5000 (Flask server)
- **Host:** 0.0.0.0 (accepts proxy connections)
- **Python Version:** 3.11
- **Database:** PostgreSQL via DATABASE_URL environment variable

### Survey Details
- 49 questions per survey across 10 themes
- Likert scale (1-4) for quantitative questions
- Mental health screening (4 questions)
- Smoking status tracking
- Social media engagement tracking
- Open-ended feedback field
- Validation rules:
  - Q25 and Q44 must be filled and differ by less than 2
  - Q45 must equal 3
  - Invalid surveys excluded from scoring but open-ended responses included

## Development Notes
- Application uses PostgreSQL for permanent data persistence
- Accessible via URL from multiple computers
- Data input via 1600-row table supporting Excel paste operations
- Flask backend handles API requests and database operations
- Frontend provides interactive visualizations and analytics

## User Preferences
- Dashboard-first approach with visual analytics
- Large eye-catching numbers (56px/900 weight)
- No department codes on homepage - only names
- Focus on scientifically sound analysis
- Priority system combining themes, questions, and AI-analyzed responses
- Turkish language throughout
