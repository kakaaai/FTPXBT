#!/bin/bash

# Print colored output
print_status() {
  echo -e "\033[1;34m==>\033[0m $1"
}

print_success() {
  echo -e "\033[1;32m==>\033[0m $1"
}

print_error() {
  echo -e "\033[1;31m==>\033[0m $1"
}

# Check if npm is installed
if ! command -v npm &> /dev/null; then
  print_error "npm is not installed. Please install Node.js and npm first."
  exit 1
fi

# Install dependencies
print_status "Installing dependencies..."
npm install

# Initialize project directories
print_status "Initializing project directories..."
npm run setup:dirs

# Setup fonts
print_status "Setting up fonts..."
npm run setup:fonts

# Generate placeholder images
print_status "Generating placeholder images..."
npm run setup:images

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
  print_status "Creating .env file..."
  cp .env.example .env
fi

print_success "Setup complete! You can now run 'npm run dev' to start the development server."
print_success "Visit http://localhost:3000 to see your website."