import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const standaloneDir = path.join(__dirname, '.next', 'standalone');
const staticSourceDir = path.join(__dirname, '.next', 'static');
const staticDestDir = path.join(standaloneDir, '_next', 'static');
const logoSource = path.join(__dirname, 'public', 'logo.svg');
const logoDest = path.join(standaloneDir, 'logo.svg');
const loaderTemplateFile = path.join(__dirname, 'templates', 'loader.cjs');
const loaderDestFile = path.join(standaloneDir, 'loader.cjs');

// Function to ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Ensure the standalone and _next directories exist
ensureDir(standaloneDir);
ensureDir(path.join(standaloneDir, '_next'));

// Copy the loader.cjs template file to the standalone directory
fs.copyFileSync(loaderTemplateFile, loaderDestFile);

// Copy the .next/static directory to .next/standalone/_next
fs.copySync(staticSourceDir, staticDestDir);

// Copy logo.svg to .next/standalone
fs.copyFileSync(logoSource, logoDest);

console.log('Post-build tasks completed successfully!');
