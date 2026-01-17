import fs from 'fs';
import path from 'path';

const GOOGLE_DOC_ID = '1W4lWXA-237DHXXJRLA98yvx4_YrORMkHovSO6zRIkGY';

async function debug() {
    const url = `https://docs.google.com/document/d/${GOOGLE_DOC_ID}/export?format=txt`;
    console.log(`Fetching ${url}...`);
    try {
        const response = await fetch(url);
        const text = await response.text();
        console.log('--- CONTENT START ---');
        console.log(text);
        console.log('--- CONTENT END ---');
    } catch (e) {
        console.error(e);
    }
}

debug();
