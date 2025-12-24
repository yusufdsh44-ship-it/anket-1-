# Arnavutköy Belediyesi - JD-R Anket Değerlendirme Sistemi

## Overview
This is a comprehensive JD-R (Job Demands-Resources) survey evaluation dashboard for Arnavutköy Municipality analyzing employee satisfaction across departments through 49 questions covering 10 themes, with PostgreSQL database persistence for multi-user access.

**Current State:** Interactive web application with data visualization and PostgreSQL database backend

## Recent Changes
- 2025-12-24: **Clickable Department Navigation in Summary Table**
  - **Interactive Summary Table:** All 30 department rows in Belediye Geneli report's summary table are now clickable
  - **Hover Effects:** Rows show arrow indicator (→) and gradient highlight on hover
  - **PostMessage Navigation:** Clicking a department row navigates to that department's detailed report
  - **Back Button:** Each department report includes "Özet Tabloya Dön" button to return to summary table
  - **CSS Styling:** Added cursor pointer, hover transitions, and visual feedback for clickable rows

- 2025-12-11: **Major UI Redesign with Warm Minimal Aesthetic**
  - **New Design System:** Tailwind CSS + custom CSS with cream/terracotta color palette
    - Background: #FBF7EF (warm cream)
    - Accent: #C86A3C (terracotta)
    - Text: #211A16 (dark brown), #7B746A (muted text)
    - Borders: #E2D9CA (warm gray)
  - **Typography:** Playfair Display (serif) for headings, Inter for body text
  - **Login Page:** Completely redesigned with new aesthetic
  - **Sidebar:** Updated with new color scheme and user profile section
  - **Password Protection:** Token-based authentication system with APP_PASSWORD secret

- 2025-11-27: **Report System Complete & UI Improvements**
  - **Menu Reorganization:** "RAPOR" category with "Rapor" menu item, "Detaylı Tablolar (tüm müdürlükler)" for analytics
  - **Default Page:** Application opens to Report page (previously analytics)
  - **Belediye Geneli Design:** Enhanced visual design with modern CSS styling
    - Gradient headers and professional table styling
    - Color-coded indicator rows (green highlights for key metrics)
    - Summary boxes with accent borders
    - Hover effects and proper spacing
  - **Content:** Municipality-wide analysis (1470 participants, 30 directorates) + 30 individual directorate reports
  - **rapor_verileri.js:** 564KB JavaScript file with all report HTML content

- 2025-11-24: **Report Section Added** - New comprehensive report view with department analysis
  - **Filtering:** Dropdown menu to filter by specific department
  - **Search:** Text search across all report content

- 2025-11-18: **Open-Ended Comments Display Enhancement** - Department names instead of codes
  - **User-Friendly Display:** Open-ended comments now show full department names (e.g., "BAŞKAN") instead of codes (e.g., "101_2")
  - **Improved Readability:** Users can immediately identify which department provided each comment

- 2025-11-10: **Default Landing Page Changed to Analytics** - Application now opens on analysis view
  - **New Default Page:** Application opens directly to "Genel Memnuniyet Oranları" (General Satisfaction Rates)
  - **Table Sorting Added:** Departments automatically sorted by highest satisfaction scores (descending)
  - **User Preference:** Analytics-first approach for immediate insights
  - **TSV Parsing Fixed:** Excel/Sheets copy-paste now correctly handles quoted fields with tabs and newlines

- 2025-11-07: **Ana Dashboard Removed** - Simplified UI by removing main dashboard
  - **Menu Updated:** Removed "Ana Dashboard" menu item from navigation
  - **Code Cleanup:** Removed dashboard template and rendering logic

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
