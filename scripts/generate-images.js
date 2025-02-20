const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Ensure images directory exists
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Helper function to create gradient background
function createGradientBackground(ctx, width, height) {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#00cda0');
  gradient.addColorStop(0.5, '#00b3ff');
  gradient.addColorStop(1, '#fe00f8');
  return gradient;
}

// Generate roadmap images
function generateRoadmapImages() {
  const size = 180;
  const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];

  quarters.forEach((quarter, index) => {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    // Fill background
    ctx.fillStyle = createGradientBackground(ctx, size, size);
    ctx.fillRect(0, 0, size, size);

    // Add text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 32px Montserrat';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(quarter, size/2, size/2);

    // Save image
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join(imagesDir, `roadmap${index + 1}.jpg`), buffer);
  });
}

// Generate charity images
function generateCharityImages() {
  const size = 56;
  const charities = ['Shelter', 'Rescue'];

  charities.forEach((charity, index) => {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    // Fill background
    ctx.fillStyle = createGradientBackground(ctx, size, size);
    ctx.fillRect(0, 0, size, size);

    // Add text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 14px Montserrat';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(charity, size/2, size/2);

    // Save image
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join(imagesDir, `charity${index + 1}.jpg`), buffer);
  });
}

// Generate paw icon
function generatePawIcon() {
  const size = 24;
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Draw paw shape
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(size/2, size/2, size/4, 0, Math.PI * 2);
  ctx.fill();

  // Save image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(imagesDir, 'paw.svg'), buffer);
}

// Generate all images
console.log('Generating images...');
generateRoadmapImages();
generateCharityImages();
generatePawIcon();
console.log('Images generated successfully!');