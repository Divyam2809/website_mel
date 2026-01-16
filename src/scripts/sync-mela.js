import fs from 'fs';
import path from 'path';

// PLACE YOUR GOOGLE DOC ID HERE
const GOOGLE_DOC_ID = '1IHsmVU-18EI43b-nq6Py3FXASzgp8eqA84--oZAdEJw';

export async function syncMelaContent(shouldWrite = true) {
    const rootDir = process.cwd();
    const JSON_FILE = path.join(rootDir, 'src/data/vrIndustrialContent.json');

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
            industrialSuite: { features: [] },
            applications: { features: [] },
            stats: { items: [] }
        };

        let currentSection = '';

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('--- HERO ---')) currentSection = 'hero';
            else if (line.includes('--- SUITE ---')) currentSection = 'suite';
            else if (line.includes('--- APPLICATIONS ---')) currentSection = 'apps';
            else if (line.includes('--- STATS ---')) currentSection = 'stats';
            else if (line.includes(':')) {
                const [key, ...valParts] = line.split(':');
                const k = key.trim().toLowerCase();
                const v = valParts.join(':').trim();

                if (currentSection === 'hero') {
                    if (k === 'badge') data.hero.badge = v;
                    if (k === 'title') data.hero.title = v;
                    if (k === 'subtitle') data.hero.subtitle = v;
                    if (k === 'primarybtn') data.hero.primaryBtn = v;
                    if (k === 'secondarybtn') data.hero.secondaryBtn = v;
                } else if (currentSection === 'suite') {
                    if (k === 'title') data.industrialSuite.title = v;
                    if (k === 'subtitle') data.industrialSuite.subtitle = v;
                    if (k.startsWith('feature')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.industrialSuite.features.push({
                                number: parts[0].trim(),
                                title: parts[1].trim(),
                                desc: parts.slice(2).join('|').trim()
                            });
                        }
                    }
                } else if (currentSection === 'apps') {
                    if (k === 'title') data.applications.title = v;
                    if (k.startsWith('app')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.applications.features.push({
                                focus: parts[0].trim(),
                                audience: parts[1].trim(),
                                benefit: parts.slice(2).join('|').trim()
                            });
                        }
                    }
                } else if (currentSection === 'stats') {
                    if (k === 'title') data.stats.title = v;
                    if (k === 'subtitle') data.stats.subtitle = v;
                    if (k === 'cta') data.stats.cta = v;
                    if (k.startsWith('stat')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.stats.items.push({
                                value: parts[0].trim(),
                                label: parts.slice(1).join('|').trim()
                            });
                        }
                    }
                }
            }
        }

        if (shouldWrite && Object.keys(data.hero).length > 0) {
            fs.writeFileSync(JSON_FILE, JSON.stringify(data, null, 2));
            console.log('[MelaSync] Data saved to:', JSON_FILE);

            // Push to Backend API
            try {
                const apiRes = await fetch('http://localhost:3000/api/page-content/vrIndustrial_live', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                if (apiRes.ok) console.log('[MelaSync] Live content updated in database via API.');
                else console.error('[MelaSync] API Error:', await apiRes.text());
            } catch (apiErr) {
                console.error('[MelaSync] Failed to push to API:', apiErr.message);
                console.log('Ensure backend server is running on port 3000');
            }
        }
        return Object.keys(data.hero).length > 0 ? data : null;
    } catch (err) {
        console.error('[Auto-Sync] Error:', err.message);
        return null;
    }
}
