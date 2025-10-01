# Personal Dashboard / Startpage

A modern, minimal personal dashboard built with **Next.js 14**, featuring real-time stats, customizable links, and a clean design. Fully customizable through a single config file.

![Dashboard Preview](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)

## ✨ Features

- 🕐 **Live Clock** - Real-time clock with customizable 12/24-hour format
- 📊 **System Stats** - Session tracking, display info, performance metrics, system details
- 🔗 **Quick Links** - Customizable bookmarks with icons
- 🎨 **Fully Customizable** - Single `config.ts` file to control everything
- 🌙 **Dark Theme** - Clean, minimal dark design
- 📱 **Responsive** - Works on desktop, tablet, and mobile
- ⚡ **Fast Loading** - Optimized Next.js static export
- 🎯 **No Database** - Purely static, no backend required

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/59n/startpage.git
cd startpage

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your dashboard.

## ⚙️ Configuration

Everything is customizable through `/config.ts`:

### 🎨 Theme Colors
```typescript
theme: {
  bgPrimary: '#0a0a0a',      // Main background
  bgSecondary: '#141414',    // Box backgrounds
  textPrimary: '#e5e5e5',    // Primary text
  textSecondary: '#888888',  // Secondary text
  accent: '#4ade80',         // Accent color
}
```

### 🔗 Links
```typescript
links: [
  { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
  { name: 'GitHub', url: 'https://github.com', icon: 'file' },
  // Add your own links here
]
```

### 📊 Stats Visibility
```typescript
stats: {
  showSession: true,      // Time on page, clicks, keypresses
  showDisplay: true,      // Resolution, viewport, DPR
  showPerformance: true,  // Load time, DOM ready
  showSystem: true,       // Browser, platform, CPU cores
}
```

### 🕐 Clock Options
```typescript
clock: {
  format24Hour: true,    // 24-hour or 12-hour format
  showSeconds: true,     // Show/hide seconds
  dateFormat: 'full',    // 'full', 'short', or 'none'
}
```

### 📐 Layout & Spacing
```typescript
spacing: {
  containerMaxWidth: '1000px',
  statGridColumns: 4,        // Number of stat columns
  linkGridColumns: 3,        // Number of link columns
  linkGapHorizontal: '5rem', // Space between links
}
```

**See [CONFIG.md](./CONFIG.md) for complete documentation.**

## 🌐 Deployment

### Deploy to Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/59n/startpage)

### Deploy to Netlify
1. Push to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Settings are auto-detected via `netlify.toml`
6. Deploy!

### Manual Build
```bash
# Build static files
npm run build

# Output will be in ./out directory
# Upload the out/ folder to any static host
```

## 📁 Project Structure

```
startpage/
├── app/
│   ├── layout.tsx       # Root layout with config injection
│   ├── page.tsx         # Main dashboard page
│   └── globals.css      # Global styles
├── components/
│   ├── Clock.tsx        # Live clock component
│   ├── SimpleStats.tsx  # Stats display component
│   └── SimpleBookmarks.tsx # Links component
├── config.ts            # 🎯 Main configuration file
├── CONFIG.md            # Configuration documentation
└── package.json
```

## 🛠️ Built With

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [React 18](https://react.dev/) - UI library
- CSS Variables - Dynamic theming

## 📝 Available Icons

- `youtube` - YouTube
- `twitter` - Twitter/X
- `chart` - Trading/Analytics
- `file` - Files/Notes
- `mail` - Email
- `drive` - Google Drive
- `calendar` - Calendar
- `docs` - Documents
- `film` - Movies/Media

## 🎨 Customization Examples

### Minimal Dashboard
```typescript
stats: { showSession: true, showDisplay: false, showPerformance: false, showSystem: false }
spacing: { statGridColumns: 1 }
```

### Blue Theme
```typescript
theme: { accent: '#3b82f6' }
```

### Compact Layout
```typescript
spacing: { linkGridColumns: 5, linkGapHorizontal: '2rem' }
```

## 📄 License

MIT License - feel free to use this for your own startpage!

## 🤝 Contributing

Feel free to open issues or submit PRs if you have improvements!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Made with ❤️ using Next.js
