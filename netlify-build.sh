#!/bin/bash

# Remove package-lock.json and node_modules to avoid the Rollup bug
rm -rf package-lock.json node_modules

# Clean install dependencies
npm install

# Install the specific Rollup package that's missing
npm install @rollup/rollup-linux-x64-gnu

# Run the build
npm run build
