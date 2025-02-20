const https = require('https');
const fs = require('fs');
const path = require('path');

const FONTS_DIR = path.join(__dirname, '../public/fonts');

// Ensure fonts directory exists
if (!fs.existsSync(FONTS_DIR)) {
  fs.mkdirSync(FONTS_DIR, { recursive: true });
}

// Font URLs (using Google Fonts)
const fonts = [
  {
    name: 'Montserrat-Regular.ttf',
    url: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXp-p7K4KLg.ttf'
  },
  {
    name: 'Montserrat-Medium.ttf',
    url: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Hw5aXp-p7K4KLg.ttf'
  },
  {
    name: 'Montserrat-SemiBold.ttf',
    url: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu173w5aXp-p7K4KLg.ttf'
  },
  {
    name: 'Montserrat-Bold.ttf',
    url: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w5aXp-p7K4KLg.ttf'
  },
  {
    name: 'Montserrat-Black.ttf',
    url: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr73w5aXp-p7K4KLg.ttf'
  }
];

// Download function
function downloadFont(font) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(FONTS_DIR, font.name);
    
    // Skip if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`${font.name} already exists, skipping...`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(filePath);
    https.get(font.url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${font.name}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if download failed
      reject(err);
    });
  });
}

// Download all fonts
async function downloadAllFonts() {
  console.log('Starting font downloads...');
  try {
    await Promise.all(fonts.map(downloadFont));
    console.log('All fonts downloaded successfully!');
    
    // Generate CSS file
    const cssContent = `/* Montserrat Font Family */
${fonts.map(font => `@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/${font.name}') format('truetype');
  font-weight: ${font.name.includes('Regular') ? '400' : 
                 font.name.includes('Medium') ? '500' :
                 font.name.includes('SemiBold') ? '600' :
                 font.name.includes('Bold') ? '700' :
                 '900'};
  font-style: normal;
  font-display: swap;
}`).join('\n\n')}`;

    fs.writeFileSync(path.join(__dirname, '../src/styles/fonts.css'), cssContent);
    console.log('Generated fonts.css');
  } catch (error) {
    console.error('Error downloading fonts:', error);
    process.exit(1);
  }
}

downloadAllFonts();