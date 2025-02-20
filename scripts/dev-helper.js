const chokidar = require('chokidar');
const { exec } = require('child_process');
const path = require('path');

// Configuration
const config = {
  watchDirs: [
    'src/components',
    'src/pages',
    'src/styles',
    'public/images'
  ],
  ignoredPatterns: [
    /(^|[\/\\])\../,  // dotfiles
    /node_modules/,
    /.next/,
    /\*.log/
  ]
};

// Helper functions
function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error}`);
        reject(error);
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
      }
      console.log(stdout);
      resolve(stdout);
    });
  });
}

function formatTime() {
  return new Date().toLocaleTimeString();
}

// Initialize watcher
console.log('Starting development helper...');
console.log(`Watching directories: ${config.watchDirs.join(', ')}`);

const watcher = chokidar.watch(config.watchDirs, {
  ignored: config.ignoredPatterns,
  persistent: true,
  ignoreInitial: true
});

// Watch events
watcher
  .on('add', filePath => {
    console.log(`[${formatTime()}] File ${filePath} has been added`);
    
    // Handle new TypeScript/JavaScript files
    if (filePath.match(/\.(ts|tsx|js|jsx)$/)) {
      console.log('Running type check...');
      runCommand('npm run lint');
    }
    
    // Handle new style files
    if (filePath.match(/\.(css|scss)$/)) {
      console.log('Rebuilding styles...');
      runCommand('npm run build:css');
    }
  })
  .on('change', filePath => {
    console.log(`[${formatTime()}] File ${filePath} has been changed`);
    
    // Handle TypeScript/JavaScript changes
    if (filePath.match(/\.(ts|tsx|js|jsx)$/)) {
      console.log('Running type check...');
      runCommand('npm run lint');
    }
  })
  .on('unlink', filePath => {
    console.log(`[${formatTime()}] File ${filePath} has been removed`);
  })
  .on('error', error => {
    console.error(`Watcher error: ${error}`);
  });

// Handle process termination
process.on('SIGINT', () => {
  console.log('\nClosing watcher...');
  watcher.close();
  process.exit(0);
});

console.log('\nDevelopment helper is running. Press Ctrl+C to exit.');

// Additional development tasks
setInterval(() => {
  // Check for common development issues
  runCommand('npm run lint')
    .catch(error => console.error('Lint error:', error));
}, 300000); // Run every 5 minutes