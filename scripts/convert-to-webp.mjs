import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];
const QUALITY = 80; // WebP quality (0-100)

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    console.log(`✓ Converted: ${basename(inputPath)} → ${basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Error converting ${inputPath}:`, error.message);
  }
}

async function processDirectory(dirPath) {
  try {
    const entries = await readdir(dirPath);

    for (const entry of entries) {
      const fullPath = join(dirPath, entry);
      const stats = await stat(fullPath);

      if (stats.isDirectory()) {
        // Recursively process subdirectories
        await processDirectory(fullPath);
      } else if (stats.isFile()) {
        const ext = extname(entry).toLowerCase();

        if (IMAGE_EXTENSIONS.includes(ext)) {
          const outputPath = fullPath.replace(ext, '.webp');
          await convertToWebP(fullPath, outputPath);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
}

async function main() {
  const targetDir = process.argv[2] || './src/imports';

  console.log(`\n🖼️  Converting images to WebP format...`);
  console.log(`📁 Target directory: ${targetDir}\n`);

  await processDirectory(targetDir);

  console.log(`\n✅ Conversion complete!\n`);
}

main();
