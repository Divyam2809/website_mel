import fs from 'fs';
import path from 'path';

// PLACE YOUR GOOGLE DOC ID HERE for VR Crime Scene
const GOOGLE_DOC_ID = '127yRrYPlHJ1HGzESIT7ie_1ADlS9dAgFWFMoC-prezc';

export async function syncVRCrimeSceneContent(shouldWrite = true) {
    const rootDir = process.cwd();
    const JSON_FILE = path.join(rootDir, 'src/data/vrCrimeSceneContent.json');

    if (!GOOGLE_DOC_ID || GOOGLE_DOC_ID === 'YOUR_VR_CRIMESCENE_GOOGLE_DOC_ID_HERE') {
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
            pillars: { items: [] },
            stakeholders: { items: [] },
            metrics: { items: [] },
            whyMelzo: { stats: [] }
        };

        let currentSection = '';

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('--- HERO ---')) currentSection = 'hero';
            else if (line.includes('--- TOOLKIT ---')) currentSection = 'toolkit';
            else if (line.includes('--- PILLARS ---')) currentSection = 'pillars';
            else if (line.includes('--- STAKEHOLDERS ---')) currentSection = 'stakeholders';
            else if (line.includes('--- METRICS ---')) currentSection = 'metrics';
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
                } else if (currentSection === 'pillars') {
                    if (k === 'title') data.pillars.title = v;
                    if (k === 'subtitle') data.pillars.subtitle = v;
                    if (k.startsWith('pillar')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.pillars.items.push({
                                num: parts[0].trim(),
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
                } else if (currentSection === 'metrics') {
                    if (k === 'title') data.metrics.title = v;
                    if (k === 'subtitle') data.metrics.subtitle = v;
                    if (k.startsWith('metric')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.metrics.items.push({
                                metric: parts[0].trim(),
                                value: parts.slice(1).join('|').trim()
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
                                label: parts[0].trim(),
                                value: parts.slice(1).join('|').trim()
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
        console.error('[Auto-Sync-VRCrimeScene] Error:', err.message);
        return null;
    }
}
