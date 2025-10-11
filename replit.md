# Arnavutköy Belediyesi - JD-R Anket Değerlendirme Sistemi

## Overview
This is a comprehensive survey evaluation system for Arnavutköy Municipality's JD-R (Job Demands-Resources) survey analysis. The application is a single-page static HTML application with advanced data visualization capabilities that allows users to:
- Input survey data
- View comprehensive dashboard with charts and analytics
- Compare departments side-by-side
- Perform statistical analysis on survey responses
- Export data to Excel format
- Analyze open-ended responses with keyword extraction

**Current State:** Fully functional dashboard-focused web application with data visualization running on Python HTTP server

## Recent Changes
- 2025-10-11: Dashboard and visualization features implemented
  - Added Chart.js for data visualization (bar charts, radar charts)
  - Created comprehensive dashboard as landing page with:
    - Key metrics cards (participation rate, satisfaction, work-life balance, social media)
    - Department performance comparison bar chart
    - Top 5 and bottom 5 departments display
    - Theme analysis radar chart
    - Social media tracking summary
    - Critical findings (lowest/highest scores)
    - Open-ended responses word cloud
    - Mental health and smoking analysis
  - Implemented department comparison page for side-by-side analysis
  - Updated menu structure with dashboard as primary page
  - Added dashboardManager and comparisonManager modules
  - Integrated jsPDF library for future PDF export capability

- 2025-10-11: Initial setup in Replit environment
  - Configured Python 3.11 for static file serving
  - Set up workflow to serve on port 5000
  - Created project documentation

## Project Architecture
### Technology Stack
- **Frontend:** Pure HTML, CSS, JavaScript (no frameworks)
- **Visualization:** Chart.js for charts, wordcloud2.js for word clouds
- **Export:** jsPDF for PDF reports (future feature)
- **Server:** Python 3.11 HTTP server (for static file serving)
- **Deployment:** Static file hosting

### File Structure
```
.
├── index.html          # Main application file (contains all HTML, CSS, JS)
├── attached_assets/    # Stock images and assets
├── .replit             # Replit configuration
└── replit.md          # This documentation file
```

### Key Features
1. **Dashboard (Landing Page):** Comprehensive analytics overview with visualizations
   - Key performance metrics
   - Department comparison charts
   - Theme analysis
   - Social media tracking
   - Critical findings identification
   - Word cloud for open responses
   
2. **Department Comparison:** Side-by-side detailed comparison of two departments
   - Overall satisfaction comparison
   - Theme-by-theme breakdown
   - Difference analysis

3. **Detailed Analysis Pages:**
   - General satisfaction by department
   - Theme analysis
   - Social media tracking
   - Mental health screening
   - Question-level analysis
   - Department-specific deep dive
   - Open-ended response analysis

4. **Data Management:**
   - Excel-like data entry interface
   - Data validation and consistency checks
   - Excel export functionality
   - Browser localStorage persistence

5. **Turkish Language Support:** Fully localized for Turkish users

### Technical Implementation
#### JavaScript Modules
- `dashboardManager`: Handles dashboard rendering, metrics calculation, and chart initialization
- `comparisonManager`: Manages department comparison functionality
- `dataProcessor`: Processes survey data and calculates statistics
- `tableRenderer`: Renders analysis tables
- `dataInput`: Handles data entry interface
- `exportManager`: Manages Excel export
- `utils`: Utility functions for calculations and formatting

#### Chart Types
- **Bar Charts:** Department performance comparison
- **Radar Charts:** Theme analysis visualization
- **Word Clouds:** Open-ended response keyword visualization

### Configuration
- **Port:** 5000 (required for Replit)
- **Host:** 0.0.0.0 (to accept proxy connections)
- **Module:** Python 3.11
- **External Libraries:** Chart.js v4.4.1, jsPDF v2.5.1, wordcloud2.js

### Survey Details
- 49 questions per survey across 10 themes
- 8 social media tracking columns
- Likert scale (1-4) for quantitative questions
- Mental health screening (4 questions)
- Smoking status tracking
- Open-ended feedback field
- Validation and consistency checks built-in

### Data Analysis Capabilities
1. **Participation Analysis:** Track survey completion rates by department
2. **Satisfaction Metrics:** Overall and theme-based satisfaction scores
3. **Work-Life Balance:** Job demands vs. resources analysis
4. **Social Media:** Tracking of municipal and mayoral social media accounts
5. **Mental Health:** Risk assessment based on standardized questions
6. **Keyword Analysis:** Automatic extraction of themes from open responses

## Development Notes
- This is a client-side only application with no backend required
- All data is stored in browser localStorage
- The application uses modern JavaScript (ES6+)
- Responsive design optimized for desktop use
- Charts are dynamically generated using Chart.js
- All calculations performed in real-time on the client side

## User Preferences
- Dashboard-first approach (landing page)
- Focus on department vs. general municipality comparisons
- Emphasis on visual analytics and charts
- One-time survey analysis (no time series needed)
- Social media tracking is a strategic priority
