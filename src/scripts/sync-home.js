import fs from 'fs';
import path from 'path';

// PLACE YOUR GOOGLE DOC ID HERE for Home Page
const GOOGLE_DOC_ID = 'YOUR_HOME_GOOGLE_DOC_ID_HERE';

export async function syncHomeContent(shouldWrite = true) {
    const rootDir = process.cwd();
    const JSON_FILE = path.join(rootDir, 'src/data/homeContent.json');

    if (!GOOGLE_DOC_ID || GOOGLE_DOC_ID === 'YOUR_HOME_GOOGLE_DOC_ID_HERE') {
        console.log('[HomeSync] No valid Doc ID provided.');
        return null;
    }

    console.log('[HomeSync] Starting sync for:', GOOGLE_DOC_ID);

    const url = `https://docs.google.com/document/d/${GOOGLE_DOC_ID}/export?format=txt`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch Google Doc');

        const text = await response.text();
        // Normalize line endings and split
        const lines = text.replace(/\r\n/g, '\n').split('\n').map(l => l.trim()).filter(l => l.length > 0);

        const data = {
            hero: {},
            carousel: {},
            whyVR: { boards: [] },
            stats: []
        };

        let currentSection = '';

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('--- HERO ---')) currentSection = 'hero';
            else if (line.includes('--- CAROUSEL ---')) currentSection = 'carousel';
            else if (line.includes('--- WHY VR ---')) currentSection = 'whyVR';
            else if (line.includes('--- STATS ---')) currentSection = 'stats';
            else if (line.includes(':')) {
                const [key, ...valParts] = line.split(':');
                const k = key.trim().toLowerCase();
                const v = valParts.join(':').trim();

                if (currentSection === 'hero') {
                    if (k === 'title') data.hero.title = v;
                    if (k === 'subtitle') data.hero.subtitle = v;
                    if (k === 'primarybtn') data.hero.primaryBtn = v;
                    if (k === 'secondarybtn') data.hero.secondaryBtn = v;
                } else if (currentSection === 'carousel') {
                    if (k === 'title') data.carousel.title = v;
                } else if (currentSection === 'whyVR') {
                    if (k === 'title') data.whyVR.title = v;
                    if (k === 'subtitle') data.whyVR.subtitle = v;
                    if (k === 'boards') {
                        data.whyVR.boards = v.split(',').map(s => s.trim());
                    }
                } else if (currentSection === 'stats') {
                    if (k.startsWith('stat')) {
                        const parts = v.split('|');
                        if (parts.length >= 3) {
                            data.stats.push({
                                value: parts[0].trim(),
                                suffix: parts[1].trim(),
                                label: parts[2].trim()
                            });
                        }
                    }
                }
            }
        }

        if (shouldWrite && Object.keys(data.hero).length > 0) {
            fs.writeFileSync(JSON_FILE, JSON.stringify(data, null, 2));
            console.log('[HomeSync] Data saved to:', JSON_FILE);
        }
        return Object.keys(data.hero).length > 0 ? data : null;
    } catch (err) {
        console.error('[HomeSync] Error:', err.message);
        return null;
    }
}
