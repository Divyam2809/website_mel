import fs from 'fs';
import path from 'path';

// PLACE YOUR GOOGLE DOC ID HERE for 360 City Guide
const GOOGLE_DOC_ID = '1FUJpMHjYe1ILqkDA2XwS3eND9EwEFIN36O1m2DVVVR8';

export async function syncCityGuideContent(shouldWrite = true) {
    const rootDir = process.cwd();
    const JSON_FILE = path.join(rootDir, 'src/data/cityGuideContent.json');

    if (!GOOGLE_DOC_ID || GOOGLE_DOC_ID === 'YOUR_CITY_GUIDE_GOOGLE_DOC_ID_HERE') {
        console.log('[CitySync] No valid Doc ID provided.');
        return null;
    }

    console.log('[CitySync] Starting sync for:', GOOGLE_DOC_ID);

    const url = `https://docs.google.com/document/d/${GOOGLE_DOC_ID}/export?format=txt`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch Google Doc');

        const text = await response.text();
        const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

        const data = {
            hero: {},
            experience: { features: [] },
            stakeholders: { items: [] },
            whyMelzo: { stats: [] }
        };

        let currentSection = '';

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('--- HERO ---')) currentSection = 'hero';
            else if (line.includes('--- EXPERIENCE ---')) currentSection = 'experience';
            else if (line.includes('--- STAKEHOLDERS ---')) currentSection = 'stakeholders';
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
                } else if (currentSection === 'experience') {
                    if (k === 'title') data.experience.title = v;
                    if (k === 'subtitle') data.experience.subtitle = v;
                    if (k.startsWith('feature')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.experience.features.push({
                                number: parts[0].trim(),
                                title: parts[1].trim(),
                                desc: parts.slice(2).join('|').trim()
                            });
                        }
                    }
                } else if (currentSection === 'stakeholders') {
                    if (k === 'title') data.stakeholders.title = v;
                    if (k === 'subtitle') data.stakeholders.subtitle = v;
                    if (k.startsWith('item')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.stakeholders.items.push({
                                audience: parts[0].trim(),
                                focus: parts[1].trim(),
                                benefit: parts.slice(2).join('|').trim()
                            });
                        }
                    }
                } else if (currentSection === 'why') {
                    if (k === 'title') data.whyMelzo.title = v;
                    if (k === 'subtitle') data.whyMelzo.subtitle = v;
                    if (k === 'cta') data.whyMelzo.cta = v;
                    if (k.startsWith('stat')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.whyMelzo.stats.push({
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
            console.log('[CitySync] Data saved to:', JSON_FILE);
        }
        return Object.keys(data.hero).length > 0 ? data : null;
    } catch (err) {
        console.error('[Auto-Sync-CityGuide] Error:', err.message);
        return null;
    }
}
