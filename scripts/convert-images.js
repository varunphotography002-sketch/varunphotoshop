const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = 'public/raw';
const OUTPUT_DIR = 'public/optimized';
const BLUR_DIR = 'public/placeholders';

// Create output directories if they don't exist
[OUTPUT_DIR, BLUR_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
});

// Check if input directory exists
if (!fs.existsSync(INPUT_DIR)) {
  console.error(`❌ Error: Input directory "${INPUT_DIR}" does not exist.`);
  console.log(`💡 Please create "${INPUT_DIR}" and add your images there.`);
  process.exit(1);
}

const targets = [480, 800, 1200, 1600, 2560];
const files = fs.readdirSync(INPUT_DIR);
const imageFiles = files.filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png'].includes(ext);
});

if (imageFiles.length === 0) {
  console.warn(`⚠️  No image files found in "${INPUT_DIR}".`);
  console.log(`💡 Supported formats: .jpg, .jpeg, .png`);
  process.exit(0);
}

console.log(`🖼️  Found ${imageFiles.length} image(s) to process...\n`);

async function processImage(file, index, total) {
  const base = path.parse(file).name;
  const input = path.join(INPUT_DIR, file);
  
  console.log(`[${index + 1}/${total}] Processing: ${file}`);

  const promises = [];

  // Process each target width
  targets.forEach(width => {
    const outputPath = path.join(OUTPUT_DIR, `${base}-${width}.webp`);
    promises.push(
      sharp(input)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(outputPath)
        .catch(err => {
          console.error(`  ❌ Error creating ${outputPath}:`, err.message);
          throw err;
        })
    );
  });

  // Create AVIF version
  promises.push(
    sharp(input)
      .resize({ width: 1600 })
      .avif({ quality: 50 })
      .toFile(path.join(OUTPUT_DIR, `${base}-1600.avif`))
      .catch(err => {
        console.error(`  ❌ Error creating AVIF:`, err.message);
        throw err;
      })
  );

  // Create blur placeholder
  promises.push(
    sharp(input)
      .resize({ width: 32 })
      .webp({ quality: 40 })
      .toFile(path.join(BLUR_DIR, `${base}-blur.webp`))
      .catch(err => {
        console.error(`  ❌ Error creating blur placeholder:`, err.message);
        throw err;
      })
  );

  try {
    await Promise.all(promises);
    console.log(`  ✅ Completed: ${file}`);
    return { success: true };
  } catch (err) {
    return { success: false, error: err };
  }
}

(async () => {
  let processed = 0;
  let errors = 0;

  for (let i = 0; i < imageFiles.length; i++) {
    const result = await processImage(imageFiles[i], i, imageFiles.length);
    if (result.success) {
      processed++;
    } else {
      errors++;
    }
  }

  console.log(`\n✅ Conversion complete!`);
  console.log(`   Processed: ${processed} image(s)`);
  if (errors > 0) {
    console.log(`   Errors: ${errors}`);
  }
  console.log(`\n📂 Output directories:`);
  console.log(`   - Optimized images: ${OUTPUT_DIR}`);
  console.log(`   - Blur placeholders: ${BLUR_DIR}`);
})();

