import fs from 'fs';
import path from 'path';

// PLACE YOUR GOOGLE DOC ID HERE
// Example: '1-abcdefg...'
const GOOGLE_DOC_ID = '1W4lWXA-237DHXXJRLA98yvx4_YrORMkHovSO6zRIkGY';

export async function syncFiveDChairContent(shouldWrite = true) {
    const rootDir = process.cwd();
    const JSON_FILE = path.join(rootDir, 'src/data/fiveDChairContent.json');

    // If no ID is set, return default/fallback structure so the app doesn't crash
    if (!GOOGLE_DOC_ID || GOOGLE_DOC_ID === 'YOUR_GOOGLE_DOC_ID_HERE') {
        if (shouldWrite) console.warn('Google Doc ID not set for 5D Chair.');
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
            features: { items: [] },
            stats: { items: [] },
            news: { items: [] },
            whyChoose: { items: [] },
            compare: { fiveD: { features: [] }, sevenD: { features: [] } }
        };

        let currentSection = '';

        const featureImages = {
            "5D Labs Experiment": "5d_chair/Person using VR headset_5d.webp",
            "VR Built-In": "5d_chair/VR headset and controllers.webp",
            "Virtual Tours": "5d_chair/Virtual wildlife encounter with tiger_5d.webp",
            "Premium Immersive": "5d_chair/Close-up of premium 5d chair upholstery.webp"
        };

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            // Use regex to match sections, handling -, –, — and case
            if (/[-—–]+\s*HERO\s*[-—–]+/i.test(line)) currentSection = 'hero';
            else if (/[-—–]+\s*FEATURES\s*[-—–]+/i.test(line)) currentSection = 'features';
            else if (/[-—–]+\s*STATS\s*[-—–]+/i.test(line)) currentSection = 'stats';
            else if (/[-—–]+\s*NEWS\s*[-—–]+/i.test(line)) currentSection = 'news';
            else if (/[-—–]+\s*WHY\s+CHOOSE\s*[-—–]+/i.test(line)) currentSection = 'whyChoose';
            else if (/[-—–]+\s*COMPARE\s+5D\s*[-—–]+/i.test(line)) currentSection = 'compare5d';
            else if (/[-—–]+\s*COMPARE\s+7D\s*[-—–]+/i.test(line)) currentSection = 'compare7d';
            else if (line.includes(':') || line.includes('：')) { // Handle standard and full-width colon
                let splitIndex = line.indexOf(':');
                if (splitIndex === -1) splitIndex = line.indexOf('：');

                if (splitIndex === -1) continue;

                const key = line.substring(0, splitIndex).trim().toLowerCase();
                const val = line.substring(splitIndex + 1).trim();

                if (currentSection === 'hero') {
                    if (key === 'badge') data.hero.badge = val;
                    if (key === 'titleline1') data.hero.titleLine1 = val;
                    if (key === 'titlehighlight1') data.hero.titleHighlight1 = val;
                    if (key === 'titleline2') data.hero.titleLine2 = val;
                    if (key === 'titlehighlight2') data.hero.titleHighlight2 = val;
                    if (key === 'titleline3') data.hero.titleLine3 = val;
                    if (key === 'description') data.hero.description = val;
                    if (key === 'btnbook') data.hero.btnBook = val;
                    if (key === 'btnguidelines') data.hero.btnGuidelines = val;
                    if (key === 'btnanubhav') data.hero.btnAnubhav = val;
                } else if (currentSection === 'features') {
                    if (key === 'title') data.features.title = val;
                    if (key === 'item') {
                        // Title | Description
                        const parts = val.split('|');
                        if (parts.length >= 2) {
                            const title = parts[0].trim();

                            // Find matching image by partial title match or exact
                            let image = 'placeholder.webp';
                            for (const [featTitle, imgPath] of Object.entries(featureImages)) {
                                if (title.toLowerCase().includes(featTitle.toLowerCase()) ||
                                    featTitle.toLowerCase().includes(title.toLowerCase())) {
                                    image = imgPath;
                                    break;
                                }
                            }

                            data.features.items.push({
                                title: title,
                                description: parts[1].trim(),
                                image: image
                            });
                        }
                    }
                } else if (currentSection === 'stats') {
                    if (key === 'title') data.stats.title = val;
                    if (key === 'description') data.stats.description = val;
                    if (key === 'stat') {
                        // Value | Label | Sub
                        const parts = val.split('|');
                        if (parts.length >= 2) {
                            data.stats.items.push({
                                value: parts[0].trim(),
                                label: parts[1].trim(),
                                sub: parts[2] ? parts[2].trim() : ''
                            });
                        }
                    }
                } else if (currentSection === 'news') {
                    if (key === 'title') data.news.title = val;
                    if (key === 'article') {
                        // Publication | Date | Title | Description | Link
                        const parts = val.split('|');
                        if (parts.length >= 4) {
                            data.news.items.push({
                                publication: parts[0].trim(),
                                date: parts[1].trim(),
                                title: parts[2].trim(),
                                description: parts[3].trim(),
                                link: parts[4] ? parts[4].trim() : '#'
                            });
                        }
                    }
                } else if (currentSection === 'whyChoose') {
                    if (key === 'title') data.whyChoose.title = val;
                    if (key === 'description') data.whyChoose.description = val;
                    if (key === 'item') {
                        // Title | Desc
                        const parts = val.split('|');
                        if (parts.length >= 2) {
                            data.whyChoose.items.push({
                                title: parts[0].trim(),
                                desc: parts[1].trim()
                            });
                        }
                    }
                } else if (currentSection === 'compare5d') {
                    if (key === 'title') data.compare.fiveD.title = val;
                    if (key === 'feature') {
                        // Label | Value
                        const parts = val.split('|');
                        if (parts.length >= 2) {
                            data.compare.fiveD.features.push({
                                label: parts[0].trim(),
                                value: parts[1].trim()
                            });
                        }
                    }
                } else if (currentSection === 'compare7d') {
                    if (key === 'title') data.compare.sevenD.title = val;
                    if (key === 'immersivelabel') data.compare.sevenD.immersiveLabel = val;
                    if (key === 'immersivevalue') data.compare.sevenD.immersiveValue = val;
                    if (key === 'feature') {
                        // Label | Value
                        const parts = val.split('|');
                        if (parts.length >= 2) {
                            data.compare.sevenD.features.push({
                                label: parts[0].trim(),
                                value: parts[1].trim()
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
            console.log('Successfully synced 5D Chair content.');
        }

        return Object.keys(data.hero).length > 0 ? data : null;

    } catch (err) {
        if (shouldWrite) console.error('[Sync-5D] Error:', err.message);
        // Fallback
        if (fs.existsSync(JSON_FILE)) {
            return JSON.parse(fs.readFileSync(JSON_FILE, 'utf-8'));
        }
        return null;
    }
}
