# Arnavutköy Belediyesi - JD-R Anket Değerlendirme Sistemi

## Overview
This is a survey evaluation system for Arnavutköy Municipality's JD-R (Job Demands-Resources) survey analysis. The application is a single-page static HTML application that allows users to:
- Input survey data
- View and analyze results
- Export data to Excel format
- Perform statistical analysis on survey responses

**Current State:** Fully functional static web application running on Python HTTP server

## Recent Changes
- 2025-10-11: Initial setup in Replit environment
  - Configured Python 3.11 for static file serving
  - Set up workflow to serve on port 5000
  - Created project documentation

## Project Architecture
### Technology Stack
- **Frontend:** Pure HTML, CSS, JavaScript (no frameworks)
- **Server:** Python 3.11 HTTP server (for static file serving)
- **Deployment:** Static file hosting

### File Structure
```
.
├── index.html          # Main application file (contains all HTML, CSS, JS)
├── .replit             # Replit configuration
└── replit.md          # This documentation file
```

### Key Features
1. **Survey Data Entry:** Excel-like interface for entering survey responses
2. **Data Analysis:** Statistical analysis of survey results
3. **Question Management:** View and analyze individual questions
4. **Excel Export:** Export data to Excel format
5. **Turkish Language Support:** Fully localized for Turkish users

### Configuration
- **Port:** 5000 (required for Replit)
- **Host:** 0.0.0.0 (to accept proxy connections)
- **Module:** Python 3.11

### Survey Details
- 49 questions per survey
- 8 social media columns
- Likert scale (1-4)
- Validation and consistency checks built-in
- Support for open-ended questions with keyword analysis

## Development Notes
- This is a client-side only application with no backend required
- All data is stored in browser localStorage
- The application uses modern JavaScript (ES6+)
- Responsive design optimized for desktop use

## User Preferences
None recorded yet.
