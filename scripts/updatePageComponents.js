import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, '../src/pages');

function updateComponents() {
    const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));
    console.log(`Checking ${files.length} components...`);

    files.forEach(file => {
        const filePath = path.join(pagesDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Regex to find the data file import (handles single/double quotes)
        const importRegex = /import initialContent from ['"]\.\.\/data\/(\w+)Content\.json['"]/;
        const match = content.match(importRegex);

        if (match) {
            const baseName = match[1];
            const pageId = `${baseName}_live`;

            // Regex to find the fetch call inside useEffect (generic /api/...)
            // Matches fetch('/api/anything') or fetch("/api/anything")
            const fetchRegex = /fetch\(["']\/api\/[^"']+["']\)/;

            if (fetchRegex.test(content)) {
                console.log(`Updating ${file} -> pageId: ${pageId}`);
                content = content.replace(fetchRegex, `fetch('/api/page-content/${pageId}')`);
                fs.writeFileSync(filePath, content, 'utf8');
            } else {
                console.log(`Skipping ${file}: No fetch call found.`);
            }
        }
    });

    console.log('Update completed.');
}

updateComponents();
