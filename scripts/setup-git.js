const { execSync } = require('child_process');
const path = require('path');

// Helper function to run git commands
function runGitCommand(command) {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to run command: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
}

console.log('🔧 Setting up Git configuration...');

// Set commit message template
const templatePath = path.resolve(__dirname, '../.gitmessage');
runGitCommand(`git config --local commit.template ${templatePath}`);

// Set up Git hooks path
runGitCommand('git config --local core.hooksPath .husky');

// Configure line endings
runGitCommand('git config --local core.autocrlf false');
runGitCommand('git config --local core.eol lf');

// Set up merge strategy
runGitCommand('git config --local pull.rebase true');

// Set up diff tool for package-lock.json
runGitCommand('git config --local diff.lockb.textconv node -p "JSON.stringify(JSON.parse(require(\'fs\').readFileSync(process.argv[1])), null, 2)"');
runGitCommand('git config --local diff.lockb.binary true');
runGitCommand('git config --local diff.lockb.cachetextconv true');

// Add common file attributes
const gitattributesContent = `
* text=auto eol=lf
*.{cmd,[cC][mM][dD]} text eol=crlf
*.{bat,[bB][aA][tT]} text eol=crlf
*.lock binary
package-lock.json lockb
yarn.lock lockb
pnpm-lock.yaml lockb
`;

const fs = require('fs');
fs.writeFileSync(path.resolve(__dirname, '../.gitattributes'), gitattributesContent.trim());

// Initialize husky
runGitCommand('npx husky install');

// Make pre-commit hook executable
const preCommitPath = path.resolve(__dirname, '../.husky/pre-commit');
fs.chmodSync(preCommitPath, '755');

console.log('✅ Git configuration completed successfully!');
console.log('');
console.log('The following configurations have been set:');
console.log('- Commit message template');
console.log('- Git hooks path');
console.log('- Line ending handling');
console.log('- Merge strategy (rebase)');
console.log('- Lock file diff handling');
console.log('- File attributes');
console.log('- Husky hooks');