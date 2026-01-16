import fs from 'fs';
import path from 'path';

// PLACE YOUR GOOGLE DOC ID HERE for VR Real Estate
const GOOGLE_DOC_ID = '1JXWlD0zt83kdsssZrDHEvg_k_UOpQGwaa32kOid4ro4';

export async function syncVRRealEstateContent(shouldWrite = true) {
    const rootDir = process.cwd();
    const JSON_FILE = path.join(rootDir, 'src/data/vrRealEstateContent.json');

    if (!GOOGLE_DOC_ID || GOOGLE_DOC_ID === 'YOUR_VR_REALESTATE_GOOGLE_DOC_ID_HERE') {
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
            interactiveFeatures: { features: [] },
            stakeholders: { items: [] },
            salesGallery: { items: [] }
        };

        let currentSection = '';

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('--- HERO ---')) currentSection = 'hero';
            else if (line.includes('--- INTERACTIVE ---')) currentSection = 'interactive';
            else if (line.includes('--- STAKEHOLDERS ---')) currentSection = 'stakeholders';
            else if (line.includes('--- GALLERY ---')) currentSection = 'gallery';
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
                } else if (currentSection === 'interactive') {
                    if (k.startsWith('feature')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.interactiveFeatures.features.push({
                                title: parts[0].trim(),
                                desc: parts.slice(1).join('|').trim()
                            });
                        }
                    }
                } else if (currentSection === 'stakeholders') {
                    if (k === 'title') data.stakeholders.title = v;
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
                } else if (currentSection === 'gallery') {
                    if (k === 'title') data.salesGallery.title = v;
                    if (k === 'subtitle') data.salesGallery.subtitle = v;
                    if (k === 'cta') data.salesGallery.cta = v;
                    if (k.startsWith('stat') || k.startsWith('item')) {
                        const parts = v.split('|');
                        if (parts.length >= 2) {
                            data.salesGallery.items.push({
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
        console.error('[Auto-Sync-VRRealEstate] Error:', err.message);
        return null;
    }
}
