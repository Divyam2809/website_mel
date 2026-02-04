import fs from 'fs';
import path from 'path';

// PLACE YOUR GOOGLE DOC ID HERE for VR Defence
const GOOGLE_DOC_ID = '1yr_DV0NpbhGAkL0lpIRhnwryOIZjI6uUynXjAapLIBA';

export async function syncVRDefenceContent(shouldWrite = true) {
    const rootDir = process.cwd();
    const JSON_FILE = path.join(rootDir, 'src/data/vrDefenceContent.json');

    if (!GOOGLE_DOC_ID || GOOGLE_DOC_ID === 'YOUR_VR_DEFENCE_GOOGLE_DOC_ID_HERE') {
        console.log('[DefenceSync] No valid Doc ID provided.');
        return null;
    }

    console.log('[DefenceSync] Starting sync for:', GOOGLE_DOC_ID);

    const url = `https://docs.google.com/document/d/${GOOGLE_DOC_ID}/export?format=txt`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch Google Doc');

        const text = await response.text();
        const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

        const data = {
            hero: {},
            suite: { features: [] },
            pillars: { items: [] },
            stakeholders: { items: [] },
            scorecard: { items: [] },
            security: { features: [] },
            whyMelzo: { stats: [] }
        };

        let currentSection = '';

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('--- HERO ---')) currentSection = 'hero';
            else if (line.includes('--- SUITE ---')) currentSection = 'suite';
            else if (line.includes('--- PILLARS ---')) currentSection = 'pillars';
            else if (line.includes('--- STAKEHOLDERS ---')) currentSection = 'stakeholders';
            else if (line.includes('--- SCORECARD ---')) currentSection = 'scorecard';
            else if (line.includes('--- SECURITY ---')) currentSection = 'security';
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
                } else if (currentSection === 'suite') {
                    if (k === 'title') data.suite.title = v;
                    if (k === 'subtitle') data.suite.subtitle = v;
                    if (k.startsWith('feature')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.suite.features.push({
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
                } else if (currentSection === 'scorecard') {
                    if (k === 'title') data.scorecard.title = v;
                    if (k === 'subtitle') data.scorecard.subtitle = v;
                    if (k.startsWith('metric')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.scorecard.items.push({
                                metric: parts[0].trim(),
                                value: parts[1].trim(),
                                desc: parts.slice(2).join('|').trim()
                            });
                        }
                    }
                } else if (currentSection === 'security') {
                    if (k === 'title') data.security.title = v;
                    if (k === 'subtitle') data.security.subtitle = v;
                    if (k.startsWith('feature')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.security.features.push({
                                number: parts[0].trim(),
                                title: parts[1].trim(),
                                desc: parts.slice(2).join('|').trim()
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
            console.log('[DefenceSync] Data saved to:', JSON_FILE);

            // Push to Backend API
            try {
                const apiRes = await fetch('http://192.168.29.253:3000/api/page-content/vrDefence_live', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                if (apiRes.ok) console.log('[DefenceSync] Live content updated in database via API.');
                else console.error('[DefenceSync] API Error:', await apiRes.text());
            } catch (apiErr) {
                console.error('[DefenceSync] Failed to push to API:', apiErr.message);
                console.log('Ensure backend server is running on port 3000');
            }
        }
        return Object.keys(data.hero).length > 0 ? data : null;
    } catch (err) {
        console.error('[Auto-Sync-VRDefence] Error:', err.message);
        return null;
    }
}
