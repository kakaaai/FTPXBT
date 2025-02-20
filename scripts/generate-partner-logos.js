const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Ensure partners directory exists
const partnersDir = path.join(__dirname, '../public/images/partners');
if (!fs.existsSync(partnersDir)) {
  fs.mkdirSync(partnersDir, { recursive: true });
}

// Partner logo configurations
const partners = [
  {
    name: 'bscscan',
    text: 'BSCScan',
    color: '#F0B90B',
  },
  {
    name: 'pancakeswap',
    text: 'PancakeSwap',
    color: '#00A3FF',
  },
  {
    name: 'coingecko',
    text: 'CoinGecko',
    color: '#8DC63F',
  },
  {
    name: 'coinmarketcap',
    text: 'CoinMarketCap',
    color: '#17181B',
  },
];

// Generate placeholder logos
function generateLogo(partner) {
  const width = 200;
  const height = 80;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Clear background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = partner.color;
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(partner.text, width / 2, height / 2);

  // Save image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(partnersDir, `${partner.name}.png`), buffer);
  console.log(`Generated ${partner.name} logo`);
}

// Generate all logos
console.log('Generating partner logos...');
partners.forEach(generateLogo);
console.log('Partner logos generated successfully!');
