import fs from 'fs';
import path from 'path';

// PLACE YOUR GOOGLE DOC ID HERE
// Example: '1-abcdefg...'
const GOOGLE_DOC_ID = '1urTa4_5_G0n707dLp2UWdiAzPz2DS9sCUcF-j4He-Nw';

export async function syncNineDChairContent(shouldWrite = true) {
    const rootDir = process.cwd();
    const JSON_FILE = path.join(rootDir, 'src/data/nineDChairContent.json');

    // If no ID is set, return default/fallback structure so the app doesn't crash
    if (!GOOGLE_DOC_ID || GOOGLE_DOC_ID === 'YOUR_GOOGLE_DOC_ID_HERE') {
        if (shouldWrite) console.warn('Google Doc ID not set for 9D Chair.');
        // Return existing file content if available
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
            hardwareTrio: { items: [] },
            corePillars: { items: [] },
            audience: { items: [] },
            stats: { items: [] }
        };

        let currentSection = '';

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('--- HERO ---')) currentSection = 'hero';
            else if (line.includes('--- HARDWARE ---')) currentSection = 'hardware';
            else if (line.includes('--- PILLARS ---')) currentSection = 'pillars';
            else if (line.includes('--- AUDIENCE ---')) currentSection = 'audience';
            else if (line.includes('--- STATS ---')) currentSection = 'stats';
            else if (line.includes(':')) {
                const splitIndex = line.indexOf(':');
                const key = line.substring(0, splitIndex).trim().toLowerCase();
                const val = line.substring(splitIndex + 1).trim();

                if (currentSection === 'hero') {
                    if (key === 'badge') data.hero.badge = val;
                    if (key === 'titleline1') data.hero.titleLine1 = val;
                    if (key === 'titlehighlight') data.hero.titleHighlight = val;
                    if (key === 'description') data.hero.description = val;
                    if (key === 'primarybtn') data.hero.primaryBtn = val;
                    if (key === 'secondarybtn') data.hero.secondaryBtn = val;
                } else if (currentSection === 'hardware') {
                    if (key === 'title') data.hardwareTrio.title = val;
                    if (key.startsWith('item')) {
                        // Expected format: item: Number | Title | Description
                        const parts = val.split('|');
                        if (parts.length >= 3) {
                            data.hardwareTrio.items.push({
                                number: parts[0].trim(),
                                title: parts[1].trim(),
                                desc: parts[2].trim()
                            });
                        }
                    }
                } else if (currentSection === 'pillars') {
                    if (key === 'label') data.corePillars.label = val;
                    if (key === 'title') data.corePillars.title = val;
                    if (key.startsWith('pillar')) {
                        // Expected format: pillar: Title | Description
                        const parts = val.split('|');
                        if (parts.length >= 2) {
                            data.corePillars.items.push({
                                title: parts[0].trim(),
                                desc: parts[1].trim()
                            });
                        }
                    }
                } else if (currentSection === 'audience') {
                    if (key === 'title') data.audience.title = val;
                    if (key.startsWith('segment')) {
                        // Expected format: segment: Title | Description
                        const parts = val.split('|');
                        if (parts.length >= 2) {
                            data.audience.items.push({
                                title: parts[0].trim(),
                                text: parts[1].trim()
                            });
                        }
                    }
                } else if (currentSection === 'stats') {
                    if (key === 'title') data.stats.title = val;
                    if (key === 'description') data.stats.description = val;
                    if (key.startsWith('stat')) {
                        // Expected format: stat: Value | Label
                        const parts = val.split('|');
                        if (parts.length >= 2) {
                            data.stats.items.push({
                                value: parts[0].trim(),
                                label: parts[1].trim()
                            });
                        }
                    }
                }
            }
        }

        if (shouldWrite && Object.keys(data.hero).length > 0) {
            // Create dir if not exists
            const dir = path.dirname(JSON_FILE);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

            fs.writeFileSync(JSON_FILE, JSON.stringify(data, null, 2));
            console.log('Successfully synced 9D Chair content.');
        }

        return Object.keys(data.hero).length > 0 ? data : null;

    } catch (err) {
        if (shouldWrite) console.error('[Sync-9D] Error:', err.message);
        // Fallback
        if (fs.existsSync(JSON_FILE)) {
            return JSON.parse(fs.readFileSync(JSON_FILE, 'utf-8'));
        }
        return null;
    }
}
