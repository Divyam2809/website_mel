import fs from 'fs';
import path from 'path';

// PLACE YOUR GOOGLE DOC ID HERE
// Example: '1-abcdefg...'
const GOOGLE_DOC_ID = '1sgsJb0IE15eJ9ValqvC43Bc3sN_f7LKkkETL_e8W1q4';

export async function syncSevenDChairContent(shouldWrite = true) {
    const rootDir = process.cwd();
    const JSON_FILE = path.join(rootDir, 'src/data/sevenDChairContent.json');

    // If no ID is set, return default/fallback structure so the app doesn't crash
    if (!GOOGLE_DOC_ID || GOOGLE_DOC_ID === 'YOUR_GOOGLE_DOC_ID_HERE') {
        if (shouldWrite) console.warn('Google Doc ID not set for 7D Chair.');
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

        const newsImages = {
            "Indian Express": "/images/news_indian_express.webp",
            "News18 Gujarat": "/images/news_news18_gujarat.webp",
            "Divya Bhaskar": "/images/gujarati-newspaper-5d-lab.webp",
            "Times of India": "/images/toi-vr-chairs-smc-full.webp",
            "Education World": "/images/education-img.webp",
            "Digital Learning": "/assets/vr_elearning_hero.webp"
        };

        // Colors for news publications
        const publicationColors = {
            "Indian Express": "#D32F2F",
            "News18 Gujarat": "#FF6B00",
            "Divya Bhaskar": "#E91E63",
            "Times of India": "#000",
            "Education World": "#4CAF50",
            "Digital Learning": "#2196F3"
        };

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            // Use regex to match sections, handling -, –, — and case
            if (/[-—–]+\s*HERO\s*[-—–]+/i.test(line)) currentSection = 'hero';
            else if (/[-—–]+\s*FEATURES\s*[-—–]+/i.test(line)) currentSection = 'features';
            else if (/[-—–]+\s*STATS\s*[-—–]+/i.test(line)) currentSection = 'stats';
            else if (/[-—–]+\s*NEWS\s*[-—–]+/i.test(line)) currentSection = 'news';
            else if (/[-—–]+\s*WHY[\s-]+CHOOSE\s*[-—–]+/i.test(line)) currentSection = 'whyChoose';
            else if (/[-—–]+\s*COMPARE[\s-]+5D\s*[-—–]+/i.test(line)) currentSection = 'compare5d';
            else if (/[-—–]+\s*COMPARE[\s-]+7D\s*[-—–]+/i.test(line)) currentSection = 'compare7d';
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
                    if (key === 'btnfived') data.hero.btnFiveD = val;
                } else if (currentSection === 'features') {
                    if (key === 'title') data.features.title = val;
                    if (key === 'description') data.features.description = val;
                    if (key === 'item') {
                        // Title | Description | Size (optional)
                        const parts = val.split('|');
                        if (parts.length >= 2) {
                            const title = parts[0].trim();

                            data.features.items.push({
                                title: title,
                                description: parts[1].trim(),
                                size: parts[2] ? parts[2].trim() : 'large'
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
                            const pubName = parts[0].trim();
                            // Find matching image and color
                            const image = newsImages[pubName] || 'placeholder.webp';
                            const color = publicationColors[pubName] || '#000';

                            data.news.items.push({
                                publication: pubName,
                                date: parts[1].trim(),
                                title: parts[2].trim(),
                                description: parts[3].trim(),
                                link: parts[4] ? parts[4].trim() : '#',
                                image: image,
                                publicationColor: color
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
            console.log('Successfully synced 7D Chair content.');
        }

        return Object.keys(data.hero).length > 0 ? data : null;

    } catch (err) {
        if (shouldWrite) console.error('[Sync-7D] Error:', err.message);
        // Fallback
        if (fs.existsSync(JSON_FILE)) {
            return JSON.parse(fs.readFileSync(JSON_FILE, 'utf-8'));
        }
        return null;
    }
}
