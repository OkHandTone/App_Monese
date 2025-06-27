const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('./assets/csvjson.json', 'utf8'));
let template = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');


template = template.replace('href="style.css"', 'href="../style.css"');

const pagesDir = path.join(__dirname, 'pages');
if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir);
}

data.forEach((entry, i) => {
    if (!entry.word) return;

    let stars = '';
    for (let j = 0; j < entry.difficulty; j++) {
        stars += '<span class="five-pointed-star"></span>';
    }

    const prev = i > 0 ? data[i - 1].word : null;
    const next = i < data.length - 1 ? data[i + 1].word : null;
    let nav = '<div class="navigation">';
    if (prev) nav += `<a href="${prev.toLowerCase().replace(/\s+/g, '-')}.html">← ${prev}</a> `;
    if (next) nav += `<a href="${next.toLowerCase().replace(/\s+/g, '-')}.html">${next} →</a>`;
    nav += '</div>';

    let html = template
        .replace(/{{word}}/g, entry.word)
        .replace(/{{type}}/g, entry.type)
        .replace(/{{definition}}/g, entry.definition)
        .replace(/{{example}}/g, entry.example)
        .replace(/{{stars}}/g, stars)
        .replace(/{{navigation}}/g, nav);

    const filename = path.join(pagesDir, `${entry.word.toLowerCase().replace(/\s+/g, '-')}.html`);
    fs.writeFileSync(filename, html, 'utf8');
});