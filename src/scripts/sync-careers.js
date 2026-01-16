import fs from 'fs';
import path from 'path';

// PLACE YOUR GOOGLE DOC ID HERE
const GOOGLE_DOC_ID = '1tET4e4E9s00o0CuBoTrjJv4wy6Wd8PYBiwTkWrXGREU';

export async function syncCareersContent(shouldWrite = true) {
    const rootDir = process.cwd();
    const JSON_FILE = path.join(rootDir, 'src/data/careersContent.json');

    if (!GOOGLE_DOC_ID || GOOGLE_DOC_ID === 'YOUR_GOOGLE_DOC_ID_HERE') {
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
            values: { items: [] },
            perks: { items: [] }
        };

        let currentSection = '';

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('--- HERO ---')) currentSection = 'hero';
            else if (line.includes('--- VALUES ---')) currentSection = 'values';
            else if (line.includes('--- PERKS ---')) currentSection = 'perks';
            else if (line.includes(':')) {
                const [key, ...valParts] = line.split(':');
                const k = key.trim().toLowerCase();
                const v = valParts.join(':').trim();

                if (currentSection === 'hero') {
                    if (k === 'title') data.hero.title = v;
                    if (k === 'subtitle') data.hero.subtitle = v;
                    if (k === 'button') data.hero.button = v;
                } else if (currentSection === 'values') {
                    if (k === 'title') data.values.title = v;
                    if (k === 'subtitle') data.values.subtitle = v;
                    if (k.startsWith('value')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.values.items.push({
                                title: parts[0].trim(),
                                desc: parts.slice(1).join('|').trim()
                            });
                        }
                    }
                } else if (currentSection === 'perks') {
                    if (k === 'title') data.perks.title = v;
                    if (k.startsWith('perk')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.perks.items.push({
                                title: parts[0].trim(),
                                desc: parts.slice(1).join('|').trim()
                            });
                        }
                    }
                }
            }
        }

        if (shouldWrite && Object.keys(data.hero).length > 0) {
            fs.writeFileSync(JSON_FILE, JSON.stringify(data, null, 2));
        }
        return Object.keys(data.hero).length > 0 ? data : null;
    } catch (err) {
        console.error('[Auto-Sync] Error:', err.message);
        return null;
    }
}
