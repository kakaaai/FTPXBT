const fs = require('fs');
const path = require('path');

// Directories to create
const directories = [
  'public/images',
  'public/fonts',
  'src/components',
  'src/pages',
  'src/styles',
  'src/config'
];

// Create directories
directories.forEach(dir => {
  const fullPath = path.join(__dirname, '..', dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created directory: ${dir}`);
  } else {
    console.log(`Directory already exists: ${dir}`);
  }
});

// Create .gitkeep files in empty directories
['public/images', 'public/fonts'].forEach(dir => {
  const gitkeepPath = path.join(__dirname, '..', dir, '.gitkeep');
  if (!fs.existsSync(gitkeepPath)) {
    fs.writeFileSync(gitkeepPath, '');
    console.log(`Created .gitkeep in: ${dir}`);
  }
});

console.log('Project directories initialized successfully!');