// Checks the site's translation keys before deploying.
// Run with: node scripts/check-site.mjs
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const es = JSON.parse(readFileSync(join(root, 'locales/es.json'), 'utf8'));
const en = JSON.parse(readFileSync(join(root, 'locales/en.json'), 'utf8'));

let problems = 0;

// 1. Every Spanish key should have an English entry (English may still be missing museum keys until translated).
const missingInEnglish = Object.keys(es).filter(k => !(k in en));
if (missingInEnglish.length) {
  console.log(`Keys missing in en.json (${missingInEnglish.length}):`);
  missingInEnglish.forEach(k => console.log(`  ${k}`));
}

// 2. Every data-i18n key used in a page must exist in es.json.
function htmlFiles(dir) {
  return readdirSync(dir).flatMap(name => {
    const path = join(dir, name);
    if (name === 'node_modules' || name.startsWith('.') || name === 'visualizador') return [];
    return statSync(path).isDirectory() ? htmlFiles(path) : name.endsWith('.html') ? [path] : [];
  });
}
for (const file of htmlFiles(root)) {
  const html = readFileSync(file, 'utf8');
  const keys = [...html.matchAll(/data-i18n(?:-html|-aria)?="([^"]+)"/g)].map(m => m[1]);
  const unknown = keys.filter(k => !(k in es));
  if (unknown.length) {
    problems++;
    console.log(`${relative(root, file)} uses keys not in es.json: ${unknown.join(', ')}`);
  }
}

if (!problems && !missingInEnglish.length) console.log('OK: all translation keys are present.');
process.exit(problems ? 1 : 0);
