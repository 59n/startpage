# Personal Dashboard - Next.js

A modern, minimalist personal dashboard and portfolio built with Next.js, optimized for Netlify deployment.

## 🚀 Features

- **Portfolio Page**: Rotating profile cards with social links and quotes
- **Bookmarks Page**: Organized bookmarks with Google search integration
- **Stats Dashboard**: Real-time system stats, performance metrics, and nerd analytics

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🌐 Deployment to Netlify

### Option 1: Direct Deploy

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings are already configured in `netlify.toml`
6. Click "Deploy site"

### Option 2: CLI Deploy

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the site
npm run build

# Deploy
netlify deploy --prod
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Portfolio page
│   ├── globals.css         # Global styles
│   ├── bookmarks/
│   │   └── page.tsx        # Bookmarks page
│   └── stats/
│       └── page.tsx        # Stats dashboard
├── components/
│   ├── Navigation.tsx      # Top navigation bar
│   ├── ProfileCard.tsx     # Portfolio profile carousel
│   ├── SearchBar.tsx       # Google search bar
│   ├── BookmarkGrid.tsx    # Bookmark categories
│   ├── Clock.tsx           # Real-time clock
│   └── StatsGrid.tsx       # Stats dashboard grid
├── netlify.toml            # Netlify configuration
├── next.config.js          # Next.js configuration
└── package.json
```

## 🎨 Customization

### Update Profile Information

Edit `/components/ProfileCard.tsx` to customize profiles:

```typescript
const profiles = [
  {
    name: 'Your Name',
    title: 'Your Title',
    quote: 'Your Quote',
    avatar: 'Y',
    button: 'Button Text'
  }
]
```

### Update Bookmarks

Edit `/components/BookmarkGrid.tsx` to customize bookmarks:

```typescript
const bookmarkCategories = [
  {
    title: 'CATEGORY NAME',
    links: [
      { icon: '📌', label: 'Link Name', url: 'https://example.com' }
    ]
  }
]
```

### Update Social Links

Edit `/components/ProfileCard.tsx` to update social media links in the JSX.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS (Custom)
- **Deployment**: Netlify (Static Export)

## 📝 Environment Variables

No environment variables required! Everything works out of the box.

## 🎯 Key Features

- ✅ Static export for fast loading
- ✅ SEO optimized
- ✅ Fully responsive design
- ✅ Real-time stats and analytics
- ✅ Google search integration
- ✅ Keyboard shortcuts
- ✅ Dark theme
- ✅ Smooth animations

## 🔧 Development

```bash
# Start dev server
npm run dev

# Open http://localhost:3000
```

## 📄 License

MIT - Feel free to use this for your own portfolio!

## 👤 Author

**Jack** - Trader & Developer

---

Built with ❤️ and Next.js
