# Arnavutköy Belediyesi - JD-R Anket Değerlendirme Sistemi

## Overview
This is a comprehensive institutional analysis report for Arnavutköy Municipality's JD-R (Job Demands-Resources) survey. The application serves a static HTML report presenting detailed analysis findings from employee satisfaction surveys.

**Current State:** Static HTML report page serving as main dashboard with detailed methodology and analysis findings

## Recent Changes
- 2025-11-04: **Dashboard Replaced with Static Report**
  - **New Main Page:** Replaced interactive dashboard with static HTML report (Kurumsal Raporu - Metodoloji ve Analiz Bulguları)
  - **Report Structure:** Comprehensive 8-section analysis including methodology, satisfaction scores, priority areas, and departmental breakdowns
  - **Backup Created:** Original interactive dashboard saved as index_old_backup.html for archival purposes
  - **Database Backend:** Flask API (PostgreSQL) remains functional for potential future data integration needs

- 2025-11-04: **Database Architecture Fixed** - Flask app context issue resolved
  - **Unified Model Structure:** Moved SurveyData model from separate models.py into main.py to fix circular import
  - **Fixed 500 Error:** Resolved "Flask app is not registered with SQLAlchemy instance" runtime error
  - **Simplified Codebase:** Removed models.py file, all database models now in main.py
  - **Status:** API endpoints (GET/POST /api/survey-data) working correctly

## Project Architecture

### Technology Stack
- **Frontend:** Static HTML report with embedded CSS
- **Backend:** Flask with PostgreSQL (currently inactive, available for future integration)
- **Server:** Python 3.11 Flask server on port 5000
- **Deployment:** Static report hosting via Flask

### File Structure
```
.
├── index.html                      # Main static report page
├── index_old_backup.html          # Archived interactive dashboard
├── main.py                        # Flask server with PostgreSQL integration
├── attached_assets/               # Report assets
├── .replit                        # Replit configuration
└── replit.md                      # This documentation file
```

### Report Content (8 Sections)

The static HTML report presents a comprehensive institutional analysis:

1. **Methodology and Scope**
   - Survey coverage: 2125 personnel, 1470 responses (68.7% participation)
   - Data validation: 219 invalid responses excluded
   - Multi-dimensional analysis combining quantitative scores and qualitative comments

2. **General Satisfaction & Engagement (Section 1)**
   - Overall satisfaction metrics (3.63/4.00)
   - Institutional belonging and sense of purpose
   - Team collaboration and horizontal relationships

3. **Priority Area 1: Cafeteria, Transportation & Salary (Section 2)**
   - Cafeteria services analysis (2.29/4.00)
   - Transportation services evaluation (2.71/4.00)
   - Salary perception analysis (2.76/4.00)

4. **Priority Area 2: Operational Workload (Section 3)**
   - Workload theme analysis (2.23/4.00)
   - Department-specific stress indicators
   - Critical departments with highest workload

5. **Priority Area 3: Physical Conditions (Section 4)**
   - Common areas adequacy assessment (2.81/4.00)
   - Specific facility issues by department
   - Critical focus: Cleaning Services Department facilities

6. **Specific Departmental Analyses (Section 5)**
   - Cleaning Services Department (Code 126) detailed profile
   - Traffic Enforcement Department (Code 130) detailed profile
   - Correlation between workload, stress, and engagement

7. **Mental Health Screening (Section 6)**
   - PHQ-2 and GAD-2 adapted screening results
   - Correlation between workload and psychological wellbeing
   - High-risk departments identification

8. **Health & Communication Indicators (Sections 7-8)**
   - Smoking usage rates (45.7%) and departmental variations
   - Social media engagement tracking
   - Communication gap analysis by department

### Backend Status (Inactive)

The Flask/PostgreSQL backend exists but is currently unused:
- **Database:** PostgreSQL (Neon-backed) configured and accessible
- **API Endpoints:** GET/POST `/api/survey-data` functional
- **Status:** Available for future dynamic features or data collection
- **Configuration:** Environment variables (DATABASE_URL, etc.) properly set

### Configuration
- **Port:** 5000 (Flask server)
- **Host:** 0.0.0.0 (accepts proxy connections)
- **Python Version:** 3.11
- **Database:** PostgreSQL via DATABASE_URL environment variable

## Development Notes
- Current implementation is a **static report** - no interactive features
- Flask server only serves the static HTML file
- PostgreSQL database backend available but not actively used
- Previous interactive dashboard archived in `index_old_backup.html`
- Report contains pre-analyzed data and findings (not dynamically generated)

## User Preferences
- Report-first approach (comprehensive analysis presentation)
- Focus on institutional diagnostics and priority areas
- Emphasis on data synthesis combining quantitative and qualitative findings
- Professional report formatting suitable for executive review
- Turkish language throughout
