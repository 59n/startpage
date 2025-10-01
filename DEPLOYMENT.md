# 🚀 Deployment Guide for Netlify

## Quick Start

Your Next.js portfolio is ready to deploy! Here are multiple ways to get it live on Netlify.

## Method 1: GitHub + Netlify (Recommended)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Next.js portfolio"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click "New site from Git"
3. Choose "GitHub" and authorize
4. Select your repository
5. **Build settings are automatic!** (configured in `netlify.toml`)
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy site"

🎉 Your site will be live in 1-2 minutes!

## Method 2: Netlify CLI (Direct Deploy)

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build your site
npm run build

# Login to Netlify
netlify login

# Deploy to Netlify
netlify deploy --prod

# Follow the prompts:
# - Create & configure a new site: Yes
# - Choose a site name (or use random)
# - Publish directory: out
```

## Method 3: Drag & Drop (Fastest for Testing)

```bash
# Build the site
npm run build

# The /out folder will be created
```

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `out` folder onto the page
3. Your site is live instantly!

## 🔧 Configuration

All configuration is in `netlify.toml`:

```toml
[[plugins]]
  package = "@netlify/plugin-nextjs"

[build]
  command = "npm run build"
  publish = "out"
```

## ⚙️ Environment Variables

No environment variables needed! Everything works out of the box.

## 🌐 Custom Domain

After deployment on Netlify:

1. Go to **Site settings** > **Domain management**
2. Click **Add custom domain**
3. Follow the DNS configuration instructions

## 📊 Features on Netlify

✅ Automatic HTTPS
✅ Global CDN
✅ Instant rollbacks
✅ Deploy previews for branches
✅ Form handling (if needed)
✅ Serverless functions support

## 🔄 Continuous Deployment

Once connected to GitHub:

- Every push to `main` → Automatic deploy
- Pull requests → Deploy preview
- No manual builds needed!

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild locally
rm -rf .next out node_modules
npm install
npm run build
```

### Site Not Loading Correctly

- Check that `next.config.js` has `output: 'export'`
- Verify `netlify.toml` publish directory is `out`

### Images Not Working

For optimized images on static export, use:
```javascript
// next.config.js
images: {
  unoptimized: true,
}
```
(Already configured!)

## 📝 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All three pages work (Portfolio, Bookmarks, Stats)
- [ ] Navigation works
- [ ] Search functionality works
- [ ] Stats are updating
- [ ] Responsive on mobile

## 🎯 Next Steps

1. **Custom Domain**: Add your own domain
2. **Analytics**: Enable Netlify Analytics or add Google Analytics
3. **Performance**: Use Netlify's Lighthouse plugin
4. **Monitoring**: Set up uptime monitoring

## 💡 Tips

- **Preview Deploys**: Push to a branch to test changes
- **Rollback**: Use Netlify dashboard to rollback to any previous deploy
- **Split Testing**: A/B test different versions
- **Password Protection**: Protect your site during development

---

Need help? Check out [Netlify Docs](https://docs.netlify.com/) or [Next.js Docs](https://nextjs.org/docs)
