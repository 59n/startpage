#!/bin/bash

# Personal Dashboard - Quick Commands
# Run with: bash commands.sh [command]

case "$1" in
  dev)
    echo "🚀 Starting development server..."
    npm run dev
    ;;
  
  build)
    echo "🔨 Building for production..."
    npm run build
    ;;
  
  deploy)
    echo "📦 Deploying to Netlify..."
    if ! command -v netlify &> /dev/null; then
      echo "Installing Netlify CLI..."
      npm install -g netlify-cli
    fi
    npm run build
    netlify deploy --prod
    ;;
  
  preview)
    echo "👀 Creating deploy preview..."
    npm run build
    netlify deploy
    ;;
  
  clean)
    echo "🧹 Cleaning build files..."
    rm -rf .next out node_modules/.cache
    echo "✓ Clean complete!"
    ;;
  
  fresh)
    echo "🆕 Fresh install..."
    rm -rf node_modules package-lock.json .next out
    npm install
    echo "✓ Fresh install complete!"
    ;;
  
  git-init)
    echo "📝 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit - Next.js personal dashboard"
    echo "✓ Git initialized!"
    echo ""
    echo "Next steps:"
    echo "1. Create a repo on GitHub"
    echo "2. Run: git remote add origin YOUR_REPO_URL"
    echo "3. Run: git push -u origin main"
    ;;
  
  open)
    echo "🌐 Opening in browser..."
    if command -v open &> /dev/null; then
      open http://localhost:3000
    elif command -v xdg-open &> /dev/null; then
      xdg-open http://localhost:3000
    else
      echo "Please open http://localhost:3000 in your browser"
    fi
    ;;
  
  *)
    echo "📋 Personal Dashboard - Available Commands"
    echo ""
    echo "Development:"
    echo "  ./commands.sh dev           Start development server"
    echo "  ./commands.sh open          Open in browser"
    echo ""
    echo "Build & Deploy:"
    echo "  ./commands.sh build         Build for production"
    echo "  ./commands.sh deploy        Deploy to Netlify (production)"
    echo "  ./commands.sh preview       Deploy preview to Netlify"
    echo ""
    echo "Maintenance:"
    echo "  ./commands.sh clean         Clean build files"
    echo "  ./commands.sh fresh         Fresh install (removes node_modules)"
    echo ""
    echo "Git:"
    echo "  ./commands.sh git-init      Initialize git repository"
    echo ""
    echo "Or use npm commands directly:"
    echo "  npm run dev                 Development server"
    echo "  npm run build               Production build"
    echo ""
    ;;
esac
