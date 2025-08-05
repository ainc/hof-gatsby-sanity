#!/usr/bin/env node

// Set environment variable to skip Netlify adapter
process.env.GATSBY_CONTINUE_BUILD_ON_MISSING_ADAPTER = "true";

// Run the build
const { execSync } = require('child_process');

try {
  console.log('🚀 Starting Gatsby build...');
  execSync('gatsby build', { 
    stdio: 'inherit',
    cwd: __dirname 
  });
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 