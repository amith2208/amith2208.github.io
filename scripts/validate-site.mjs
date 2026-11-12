import { existsSync, readFileSync } from 'node:fs';
import { resolve, sep } from 'node:path';

const outputDirectory = resolve('dist');
const htmlPath = resolve(outputDirectory, 'index.html');
const errors = [];

if (!existsSync(htmlPath)) {
  console.error('Missing dist/index.html. Run the production build first.');
  process.exit(1);
}

const html = readFileSync(htmlPath, 'utf8');
const requiredIds = ['home', 'about', 'experience', 'skills', 'projects', 'certifications', 'education', 'contact'];
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));

for (const id of requiredIds) {
  if (!ids.has(id)) errors.push(`Missing page section: #${id}`);
}

for (const match of html.matchAll(/\bhref="#([^"\s]+)"/g)) {
  if (!ids.has(match[1])) errors.push(`Broken section link: #${match[1]}`);
}

for (const match of html.matchAll(/\b(?:href|src)="(\/[^"#?]*)"/g)) {
  const urlPath = match[1];
  const relativePath = urlPath.replace(/^\//, '');
  const target = resolve(outputDirectory, relativePath || 'index.html');
  if (!target.startsWith(outputDirectory + sep) && target !== htmlPath) {
    errors.push(`Unsafe local path: ${urlPath}`);
  } else if (!existsSync(target)) {
    errors.push(`Missing local asset: ${urlPath}`);
  }
}

const requiredStrings = ['Amith HB', 'Albertsons Companies', 'Shell India Private Limited', 'Download resume'];
for (const value of requiredStrings) {
  if (!html.includes(value)) errors.push(`Missing expected content: ${value}`);
}

if (errors.length) {
  console.error(`Site validation failed (${errors.length} issue${errors.length === 1 ? '' : 's'}):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log('Static output validation passed: required sections, internal anchors, and local assets are present.');
