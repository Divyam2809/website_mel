import fs from 'fs';
import path from 'path';

// PLACE YOUR GOOGLE DOC ID HERE for VR Exhibition
const GOOGLE_DOC_ID = '1IyBgn_FFiQgTiqOaJbnEvhMw5m0WXEY1WnQUuxqIyVg';

export async function syncVRExhibitionContent(shouldWrite = true) {
    const rootDir = process.cwd();
    const JSON_FILE = path.join(rootDir, 'src/data/vrExhibitionContent.json');

    if (!GOOGLE_DOC_ID || GOOGLE_DOC_ID === 'YOUR_VR_EXHIBITION_GOOGLE_DOC_ID_HERE') {
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
            toolkit: { features: [] },
            impact: { pillars: [] },
            eventTypes: { items: [] },
            logistics: { items: [] }
        };

        let currentSection = '';

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('--- HERO ---')) currentSection = 'hero';
            else if (line.includes('--- TOOLKIT ---')) currentSection = 'toolkit';
            else if (line.includes('--- IMPACT ---')) currentSection = 'impact';
            else if (line.includes('--- EVENTS ---')) currentSection = 'events';
            else if (line.includes('--- LOGISTICS ---')) currentSection = 'logistics';
            else if (line.includes(':')) {
                const [key, ...valParts] = line.split(':');
                const k = key.trim().toLowerCase();
                const v = valParts.join(':').trim();

                if (currentSection === 'hero') {
                    if (k === 'badge') data.hero.badge = v;
                    if (k === 'title') data.hero.title = v;
                    if (k === 'accent') data.hero.accent = v;
                    if (k === 'subtitle') data.hero.subtitle = v;
                    if (k === 'primarybtn') data.hero.primaryBtn = v;
                    if (k === 'secondarybtn') data.hero.secondaryBtn = v;
                } else if (currentSection === 'toolkit') {
                    if (k === 'title') data.toolkit.title = v;
                    if (k === 'subtitle') data.toolkit.subtitle = v;
                    if (k.startsWith('feature')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.toolkit.features.push({
                                number: parts[0].trim(),
                                title: parts[1].trim(),
                                desc: parts.slice(2).join('|').trim()
                            });
                        }
                    }
                } else if (currentSection === 'impact') {
                    if (k === 'title') data.impact.title = v;
                    if (k === 'subtitle') data.impact.subtitle = v;
                    if (k.startsWith('pillar')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.impact.pillars.push({
                                title: parts[0].trim(),
                                desc: parts.slice(1).join('|').trim()
                            });
                        }
                    }
                } else if (currentSection === 'events') {
                    if (k === 'title') data.eventTypes.title = v;
                    if (k.startsWith('item')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.eventTypes.items.push({
                                title: parts[0].trim(),
                                focus: parts[1].trim(),
                                text: parts.slice(2).join('|').trim()
                            });
                        }
                    }
                } else if (currentSection === 'logistics') {
                    if (k === 'title') data.logistics.title = v;
                    if (k === 'subtitle') data.logistics.subtitle = v;
                    if (k === 'cta') data.logistics.cta = v;
                    if (k.startsWith('item')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.logistics.items.push({
                                number: parts[0].trim(),
                                title: parts[1].trim(),
                                desc: parts.slice(2).join('|').trim()
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
        console.error('[Auto-Sync-VRExhibition] Error:', err.message);
        return null;
    }
}
