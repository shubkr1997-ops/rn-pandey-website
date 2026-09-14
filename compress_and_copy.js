const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const srcDir = '/home/shubham-kumar/Pictures/rnn pandey/google page image';
const destDir = '/home/shubham-kumar/antigravity/rn pndey website/public/gallery';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

async function processImages() {
    const files = fs.readdirSync(srcDir).filter(f => f.match(/\.(png|jpe?g)$/i));
    let imagesCode = [];
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const srcPath = path.join(srcDir, file);
        // Rename to a safe filename without spaces or parentheses for URL
        const safeFilename = `gallery_${i}${path.extname(file)}`;
        const destPath = path.join(destDir, safeFilename);
        try {
            console.log(`Processing ${file}...`);
            const image = await Jimp.read(srcPath);
            if (image.bitmap.width > 1200) {
                image.resize(1200, Jimp.AUTO);
            }
            image.quality(80);
            await image.writeAsync(destPath);
            imagesCode.push(`  {\n    src: "/gallery/${safeFilename}",\n    alt: "RN Pandey Image ${i + 1}",\n    caption: "RN Pandey Image ${i + 1}"\n  }`);
        } catch (e) {
            console.error(`Error processing ${file}:`, e);
        }
    }
    console.log('--- ARRAY CODE ---');
    console.log(imagesCode.join(',\n'));
}

processImages();
