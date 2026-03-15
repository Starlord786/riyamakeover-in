/**
 * Converts all large PNG images in src/assets to WebP format using sharp.
 * Also handles public/ folder images.
 * Run with: node scripts/convert-to-webp.mjs
 */
import { createRequire } from 'module';
import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ASSET_DIRS = [
    path.join(__dirname, '../src/assets'),
    path.join(__dirname, '../public'),
];

const MIN_SIZE_BYTES = 50 * 1024; // Only convert images > 50 KB
const WEBP_QUALITY = 82; // 80-85 is a great balance of quality vs size

async function convertDir(dir) {
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) continue;

        const ext = path.extname(entry).toLowerCase();
        if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
        if (stat.size < MIN_SIZE_BYTES) continue;

        const baseName = path.basename(entry, ext);
        const outPath = path.join(dir, baseName + '.webp');

        if (fs.existsSync(outPath)) {
            console.log(`⏭  Already exists: ${outPath}`);
            continue;
        }

        try {
            await sharp(fullPath)
                .webp({ quality: WEBP_QUALITY })
                .toFile(outPath);

            const originalSize = (stat.size / 1024).toFixed(1);
            const newSize = (fs.statSync(outPath).size / 1024).toFixed(1);
            const saving = (((stat.size - fs.statSync(outPath).size) / stat.size) * 100).toFixed(0);
            console.log(`✅ ${entry} → ${baseName}.webp  [${originalSize} KB → ${newSize} KB, saved ${saving}%]`);
        } catch (err) {
            console.error(`❌ Failed: ${entry}`, err.message);
        }
    }
}

(async () => {
    console.log('🔄 Converting images to WebP...\n');
    for (const dir of ASSET_DIRS) {
        if (fs.existsSync(dir)) {
            console.log(`📁 Processing: ${dir}`);
            await convertDir(dir);
        }
    }
    console.log('\n✨ Done! Now update your imports to use .webp files.');
})();
