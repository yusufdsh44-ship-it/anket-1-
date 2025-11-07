# Arnavutköy Belediyesi - JD-R Anket Değerlendirme Sistemi

## Overview
This is a comprehensive JD-R (Job Demands-Resources) survey evaluation dashboard for Arnavutköy Municipality analyzing employee satisfaction across departments through 49 questions covering 10 themes, with PostgreSQL database persistence for multi-user access.

**Current State:** React-based web application with professional 6-section report dashboard

## Recent Changes
- 2025-11-07: **React Migration Complete** - Transitioned to modern React architecture
  - **React + TypeScript + Vite:** Modern frontend stack with hot module replacement
  - **Shadcn/ui Components:** Professional UI components (Button, Card, Badge)
  - **Tailwind CSS v3:** Responsive styling with custom theme colors
  - **6-Section Report:** Complete standalone report component with all sections:
    1. Methodology and Data Reliability
    2. Organizational Strengths and Engagement
    3. Priority Development Areas (Cafeteria, Transportation, Workload, Physical Conditions)
    4. Critical Departments Profile (Cleaning, Municipal Police)
    5. Mental Health Screening Results (WHO-5 Well-being Index)
    6. Social Media Engagement Metrics
  - **Data Visualizations:** Metrics cards, progress bars, score displays, data tables
  - **Print-Ready:** Professional print layout with print button

- 2025-11-04: **Database Architecture Fixed** - Flask app context issue resolved
  - **Unified Model Structure:** Moved SurveyData model from separate models.py into main.py to fix circular import
  - **Fixed 500 Error:** Resolved "Flask app is not registered with SQLAlchemy instance" runtime error
  - **Simplified Codebase:** Removed models.py file, all database models now in main.py
  - **Status:** API endpoints (GET/POST /api/survey-data) working correctly

## Project Architecture

### Technology Stack
- **Frontend:** React 18 + TypeScript + Vite with Tailwind CSS v3
- **UI Components:** Shadcn/ui (Button, Card, Badge) + Lucide React icons
- **Backend:** Flask with PostgreSQL (Neon-backed) - Legacy support
- **Server:** Vite dev server on port 5000
- **Database:** PostgreSQL for persistent data storage
- **Deployment:** React SPA with static report data

### File Structure
```
.
├── client/                         # React application
│   ├── src/
│   │   ├── pages/
│   │   │   └── Report.tsx         # Main 6-section survey report (816 lines)
│   │   ├── components/ui/         # Shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── badge.tsx
│   │   ├── lib/
│   │   │   └── utils.ts           # Utility functions (cn)
│   │   ├── App.tsx                # Main app component
│   │   ├── index.css              # Tailwind + theme CSS variables
│   │   └── main.tsx               # React entry point
│   ├── vite.config.ts             # Vite configuration
│   ├── tailwind.config.js         # Tailwind CSS configuration
│   ├── tsconfig.app.json          # TypeScript configuration
│   └── package.json               # Dependencies
├── index.html                     # Legacy HTML dashboard (backup)
├── main.py                        # Flask server (legacy)
├── attached_assets/               # Application assets
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
- **Port:** 5000 (Vite dev server)
- **Host:** 0.0.0.0 (accepts proxy connections)
- **Node.js Version:** 20
- **React Version:** 18
- **TypeScript:** Enabled with strict mode
- **Database:** PostgreSQL via DATABASE_URL environment variable (legacy)

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
