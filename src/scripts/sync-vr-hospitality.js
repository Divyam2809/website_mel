import fs from 'fs';
import path from 'path';

// PLACE YOUR GOOGLE DOC ID HERE for VR Hospitality
const GOOGLE_DOC_ID = '1kHlEgbLAEh7kVUnMBYm_kyU0fxmGgw5IB4GCQly31fE';

export async function syncVRHospitalityContent(shouldWrite = true) {
    const rootDir = process.cwd();
    const JSON_FILE = path.join(rootDir, 'src/data/vrHospitalityContent.json');

    if (!GOOGLE_DOC_ID || GOOGLE_DOC_ID === 'YOUR_VR_HOSPITALITY_GOOGLE_DOC_ID_HERE') {
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
            hospitalitySuite: { features: [] },
            benefits: { features: [] },
            stats: { items: [] }
        };

        let currentSection = '';

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('--- HERO ---')) currentSection = 'hero';
            else if (line.includes('--- SUITE ---')) currentSection = 'suite';
            else if (line.includes('--- BENEFITS ---')) currentSection = 'benefits';
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
                    if (k === 'title') data.hospitalitySuite.title = v;
                    if (k === 'subtitle') data.hospitalitySuite.subtitle = v;
                    if (k.startsWith('feature')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.hospitalitySuite.features.push({
                                title: parts[0].trim(),
                                desc: parts.slice(1).join('|').trim()
                            });
                        }
                    }
                } else if (currentSection === 'benefits') {
                    if (k === 'title') data.benefits.title = v;
                    if (k === 'subtitle') data.benefits.subtitle = v;
                    if (k.startsWith('benefit')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            // Order: Audience | Focus | Benefit
                            data.benefits.features.push({
                                audience: parts[0].trim(),
                                focus: parts[1].trim(),
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
        }
        return Object.keys(data.hero).length > 0 ? data : null;
    } catch (err) {
        console.error('[Auto-Sync-VRHospitality] Error:', err.message);
        return null;
    }
}
