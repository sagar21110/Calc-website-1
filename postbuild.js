// Post-build script: ensures SPA fallback 404.html is in the dist/ folder
// Vite copies files from public/ to dist/ but adds a base path to 404.html
// references. We need a 404.html at the root for GitHub Pages SPA routing.
import { readFileSync, writeFileSync, existsSync, copyFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, '..');
const dist = join(root, 'dist');
const publicDir = join(root, 'public');

if (!existsSync(dist)) {
  console.error('dist/ folder not found. Run npm run build first.');
  process.exit(1);
}

console.log('Running post-build tasks...');

// 1. Ensure 404.html is at the dist root (untouched by Vite's base path rewriting)
const src404 = join(publicDir, '404.html');
const dist404 = join(dist, '404.html');
if (existsSync(src404)) {
  copyFileSync(src404, dist404);
  console.log('  ✓ Copied 404.html to dist/');
} else {
  // If Vite already built a 404.html inside dist/ via public/, leave it.
  if (existsSync(dist404)) {
    console.log('  ✓ dist/404.html already exists');
  } else {
    console.warn('  ⚠ No 404.html found in public/');
  }
}

// 2. Add a .nojekyll file so GitHub Pages serves files starting with underscores
//    (Vite generates files like /assets/, no need for _ in filenames, but this is safe)
const nojekyll = join(dist, '.nojekyll');
if (!existsSync(nojekyll)) {
  writeFileSync(nojekyll, '');
  console.log('  ✓ Created .nojekyll');
}

console.log('Post-build complete.');
