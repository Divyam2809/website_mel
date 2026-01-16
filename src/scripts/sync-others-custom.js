import fs from 'fs';
import path from 'path';

// PLACE YOUR GOOGLE DOC ID HERE for Others/Custom
const GOOGLE_DOC_ID = '1WkE7uwImh_Uv04JCX5US3ORPKNXIxuU6uINirRD4cuc';

export async function syncOthersCustomContent(shouldWrite = true) {
    const rootDir = process.cwd();
    const JSON_FILE = path.join(rootDir, 'src/data/othersCustomContent.json');

    if (!GOOGLE_DOC_ID || GOOGLE_DOC_ID === 'YOUR_OTHERS_CUSTOM_GOOGLE_DOC_ID_HERE') {
        console.log('[OthersCustomSync] No valid Doc ID provided.');
        return null;
    }

    console.log('[OthersCustomSync] Starting sync for:', GOOGLE_DOC_ID);

    const url = `https://docs.google.com/document/d/${GOOGLE_DOC_ID}/export?format=txt`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch Google Doc');

        const text = await response.text();
        const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

        const data = {
            hero: {},
            trio: { features: [] },
            pillars: { items: [] },
            audience: { items: [] },
            reach: { stats: [] },
            engagement: { items: [] },
            why: { stats: [] }
        };

        let currentSection = '';

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('--- HERO ---')) currentSection = 'hero';
            else if (line.includes('--- TRIO ---')) currentSection = 'trio';
            else if (line.includes('--- PILLARS ---')) currentSection = 'pillars';
            else if (line.includes('--- AUDIENCE ---')) currentSection = 'audience';
            else if (line.includes('--- REACH ---')) currentSection = 'reach';
            else if (line.includes('--- ENGAGEMENT ---')) currentSection = 'engagement';
            else if (line.includes('--- WHY ---')) currentSection = 'why';
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
                } else if (currentSection === 'trio') {
                    if (k === 'title') data.trio.title = v;
                    if (k === 'subtitle') data.trio.subtitle = v;
                    if (k.startsWith('feature')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.trio.features.push({
                                number: parts[0].trim(),
                                title: parts[1].trim(),
                                desc: parts.slice(2).join('|').trim()
                            });
                        }
                    }
                } else if (currentSection === 'pillars') {
                    if (k === 'title') data.pillars.title = v;
                    if (k === 'subtitle') data.pillars.subtitle = v;
                    if (k.startsWith('item')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.pillars.items.push({
                                num: parts[0].trim(),
                                title: parts[1].trim(),
                                desc: parts.slice(2).join('|').trim()
                            });
                        }
                    }
                } else if (currentSection === 'audience') {
                    if (k === 'title') data.audience.title = v;
                    if (k === 'subtitle') data.audience.subtitle = v;
                    if (k.startsWith('item')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.audience.items.push({
                                audience: parts[0].trim(),
                                focus: parts[1].trim(),
                                benefit: parts.slice(2).join('|').trim()
                            });
                        }
                    }
                } else if (currentSection === 'reach') {
                    if (k === 'title') data.reach.title = v;
                    if (k === 'subtitle') data.reach.subtitle = v;
                    if (k.startsWith('stat')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.reach.stats.push({
                                region: parts[0].trim(),
                                connections: parts[1].trim()
                            });
                        }
                    }
                } else if (currentSection === 'engagement') {
                    if (k === 'title') data.engagement.title = v;
                    if (k === 'subtitle') data.engagement.subtitle = v;
                    if (k.startsWith('item')) {
                        const parts = v.split('|');
                        if (parts.length >= 3) {
                            data.engagement.items.push({
                                metric: parts[0].trim(),
                                vr: parts[1].trim(),
                                video: parts[2].trim()
                            });
                        }
                    }
                } else if (currentSection === 'why') {
                    if (k === 'title') data.why.title = v;
                    if (k === 'subtitle') data.why.subtitle = v;
                    if (k === 'cta') data.why.cta = v;
                    if (k.startsWith('stat')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.why.stats.push({
                                label: parts[1].trim(),
                                value: parts[0].trim()
                            });
                        }
                    }
                }
            }
        }

        if (shouldWrite && Object.keys(data.hero).length > 0) {
            fs.writeFileSync(JSON_FILE, JSON.stringify(data, null, 2));
            console.log('[OthersCustomSync] Data saved to:', JSON_FILE);
        }
        return Object.keys(data.hero).length > 0 ? data : null;
    } catch (err) {
        console.error('[OthersCustom-Sync] Error:', err.message);
        return null;
    }
}
