import fs from 'fs';
import path from 'path';

// PLACE YOUR GOOGLE DOC ID HERE
// Open your Google Doc -> File -> Share -> Publish to web (optional, but standard ID works too if shared publicly)
// OR just get the ID from the URL: docs.google.com/document/d/THIS_IS_THE_ID/edit
const GOOGLE_DOC_ID = '1Hcd0d8LP8ECRDeyelrzgbX2fA26zwZcv2B_iyThwWWY';

export async function syncHomeContent(shouldWrite = true) {
    const rootDir = process.cwd();
    const JSON_FILE = path.join(rootDir, 'src/data/homeContent.json');

    // If no ID is set, return default/fallback structure so the app doesn't crash
    if (!GOOGLE_DOC_ID || GOOGLE_DOC_ID === 'YOUR_GOOGLE_DOC_ID_HERE') {
        if (shouldWrite) console.warn('Google Doc ID not set for Home Page.');
        // Return existing file content if available to avoid breaking existing data
        if (fs.existsSync(JSON_FILE)) {
            return JSON.parse(fs.readFileSync(JSON_FILE, 'utf-8'));
        }
        return null;
    }

    const url = `https://docs.google.com/document/d/${GOOGLE_DOC_ID}/export?format=txt`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch Google Doc');

        const text = await response.text();
        const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

        const data = {
            hero: {},
            whyVr: {}
        };

        let currentSection = '';

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('--- HERO ---')) currentSection = 'hero';
            else if (line.includes('--- WHY_VR ---')) currentSection = 'whyVr';
            else if (line.includes(':')) {
                // Split by first colon only
                const splitIndex = line.indexOf(':');
                const key = line.substring(0, splitIndex).trim().toLowerCase(); // Normalize key
                // Keep the rest of the line as value, spaces included if needed (though we trim)
                const val = line.substring(splitIndex + 1).trim();

                if (currentSection === 'hero') {
                    if (key === 'titleline1') data.hero.titleLine1 = val;
                    if (key === 'titlehighlight') data.hero.titleHighlight = val;
                    if (key === 'description') data.hero.description = val;
                    if (key === 'primarybtn') data.hero.primaryBtn = val;
                    if (key === 'secondarybtn') data.hero.secondaryBtn = val;
                } else if (currentSection === 'whyVr') {
                    if (key === 'titleline1') data.whyVr.titleLine1 = val;
                    if (key === 'titlehighlight') data.whyVr.titleHighlight = val;
                    if (key === 'description') data.whyVr.description = val;
                }
            }
        }

        // Validate basic data presence
        if (Object.keys(data.hero).length > 0) {
            if (shouldWrite) {
                // Create dir if not exists
                const dir = path.dirname(JSON_FILE);
                if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

                fs.writeFileSync(JSON_FILE, JSON.stringify(data, null, 2));
                console.log('Successfully synced Home content from Google Doc.');
            }
            return data;
        } else {
            if (shouldWrite) console.warn('Parsed data was empty. Check Google Doc format.');
            // Return existing if parse failed
            if (fs.existsSync(JSON_FILE)) {
                return JSON.parse(fs.readFileSync(JSON_FILE, 'utf-8'));
            }
            return null;
        }

    } catch (err) {
        console.error('[Sync-Home] Error:', err.message);
        // Fallback to local file
        if (fs.existsSync(JSON_FILE)) {
            return JSON.parse(fs.readFileSync(JSON_FILE, 'utf-8'));
        }
        return null;
    }
}
