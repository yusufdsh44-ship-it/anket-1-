#!/usr/bin/env python3
import re
import os

HTML_TEMPLATE = '''<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - Arnavutköy Belediyesi</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}
        
        body {{
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #FBF7EF;
            color: #211A16;
            line-height: 1.6;
            padding: 40px;
        }}
        
        .container {{
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            padding: 50px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }}
        
        h1 {{
            font-family: 'Playfair Display', serif;
            font-size: 2em;
            font-weight: 600;
            color: #2B241C;
            margin-bottom: 1.5em;
            padding-bottom: 0.5em;
            border-bottom: 3px solid #C86A3C;
        }}
        
        h2 {{
            font-family: 'Playfair Display', serif;
            font-size: 1.4em;
            font-weight: 600;
            color: #2B241C;
            margin: 1.5em 0 0.75em 0;
        }}
        
        h3 {{
            font-family: 'Playfair Display', serif;
            font-size: 1.2em;
            font-weight: 600;
            color: #2B241C;
            margin: 1.2em 0 0.6em 0;
        }}
        
        p {{
            margin-bottom: 1em;
            color: #4A4A4A;
        }}
        
        table {{
            width: 100%;
            border-collapse: collapse;
            margin: 1em 0 1.5em 0;
            font-size: 0.9em;
        }}
        
        th {{
            background: linear-gradient(135deg, #F8F4EC 0%, #EDE8DD 100%);
            padding: 12px 10px;
            text-align: left;
            font-weight: 600;
            color: #2B241C;
            border: 1px solid #E2D9CA;
        }}
        
        td {{
            padding: 10px;
            border: 1px solid #E2D9CA;
            vertical-align: top;
        }}
        
        tr:nth-child(even) {{
            background: #FDFBF7;
        }}
        
        .indicators-table th {{
            background: linear-gradient(135deg, #2B241C 0%, #3D342A 100%);
            color: white;
        }}
        
        .highlight-row {{
            background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%) !important;
        }}
        
        .highlight-critical {{
            background: #FFEBEE !important;
            color: #C62828 !important;
            font-weight: 600;
        }}
        
        .highlight-warning {{
            background: #FFF3E0 !important;
            color: #E65100 !important;
            font-weight: 600;
        }}
        
        .highlight {{
            background: #FFFDE7 !important;
            color: #F9A825 !important;
            font-weight: 600;
        }}
        
        .highlight-positive {{
            background: #E8F5E9 !important;
            color: #2E7D32 !important;
            font-weight: 600;
        }}
        
        .summary-box {{
            background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%);
            border-left: 4px solid #C86A3C;
            padding: 1.5em;
            margin: 1.5em 0;
            border-radius: 0 8px 8px 0;
        }}
        
        .label-desc {{
            display: block;
            font-size: 0.85em;
            color: #7B746A;
            font-weight: normal;
            margin-top: 4px;
        }}
        
        .header-logo {{
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #E2D9CA;
        }}
        
        .header-logo img {{
            height: 60px;
        }}
        
        .header-info {{
            flex: 1;
        }}
        
        .header-info h1 {{
            border: none;
            margin: 0;
            padding: 0;
            font-size: 1.5em;
        }}
        
        .header-info p {{
            margin: 0;
            color: #7B746A;
            font-size: 0.9em;
        }}
        
        @media print {{
            body {{
                background: white;
                padding: 0;
            }}
            
            .container {{
                box-shadow: none;
                padding: 20px;
            }}
            
            table {{
                page-break-inside: avoid;
            }}
            
            h2, h3 {{
                page-break-after: avoid;
            }}
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header-logo">
            <div class="header-info">
                <p style="font-size: 0.85em; color: #C86A3C; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Arnavutköy Belediyesi</p>
                <p style="color: #7B746A;">JD-R Çalışan Memnuniyeti Analizi - 2024</p>
            </div>
        </div>
        {content}
    </div>
</body>
</html>
'''

def extract_reports():
    with open('rapor_verileri.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    pattern = r'"([a-z_]+)":\s*\{\s*name:\s*"([^"]+)",\s*html:\s*`([^`]+)`'
    
    matches = re.findall(pattern, content, re.DOTALL)
    
    if not matches:
        print("No matches found with primary pattern, trying alternative...")
        lines = content.split('\n')
        current_key = None
        current_name = None
        current_html = []
        in_html = False
        reports = []
        
        for i, line in enumerate(lines):
            key_match = re.match(r'\s*"([a-z_]+)":\s*\{', line)
            if key_match and i > 830:
                if current_key and current_html:
                    reports.append((current_key, current_name, '\n'.join(current_html)))
                current_key = key_match.group(1)
                current_html = []
                in_html = False
                
            name_match = re.search(r'name:\s*"([^"]+)"', line)
            if name_match and current_key:
                current_name = name_match.group(1)
                
            if 'html: `' in line:
                in_html = True
                html_start = line.split('html: `', 1)
                if len(html_start) > 1:
                    current_html.append(html_start[1])
                continue
                
            if in_html:
                if '`' in line and ('},' in line or '}\n' in line.strip()):
                    html_end = line.split('`')[0]
                    current_html.append(html_end)
                    in_html = False
                else:
                    current_html.append(line)
        
        if current_key and current_html:
            reports.append((current_key, current_name, '\n'.join(current_html)))
        
        matches = reports
    
    print(f"Found {len(matches)} department reports")
    
    os.makedirs('reports', exist_ok=True)
    
    for key, name, html in matches:
        filename = f"reports/{key}.html"
        full_html = HTML_TEMPLATE.format(title=name, content=html)
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(full_html)
        
        print(f"Created: {filename} - {name}")
    
    print(f"\nTotal: {len(matches)} HTML files created in reports/ folder")

if __name__ == '__main__':
    extract_reports()
