# Configuration Guide

This dashboard is fully customizable through the `config.ts` file. Below is a complete guide to all available options.

## 📍 Location
`/config.ts` in the root of your project

## 🎨 Theme Colors

```typescript
theme: {
  bgPrimary: '#0a0a0a',      // Main background color
  bgSecondary: '#141414',    // Box background color
  textPrimary: '#e5e5e5',    // Primary text color
  textSecondary: '#888888',  // Secondary text color (links, stats)
  textDim: '#555555',        // Dimmed text (labels)
  accent: '#4ade80',         // Accent color (hover, loader)
  border: 'rgba(255, 255, 255, 0.06)', // Border color
}
```

**Examples:**
- Blue theme: `accent: '#3b82f6'`
- Purple theme: `accent: '#a855f7'`
- Red theme: `accent: '#ef4444'`

## ✏️ Typography

```typescript
typography: {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", sans-serif',
  clockSize: '3.5rem',       // Size of the clock time
  dateSize: '1rem',          // Size of the date text
  statLabelSize: '0.7rem',   // Size of stat box labels
  statValueSize: '0.85rem',  // Size of stat values
  linkSize: '0.875rem',      // Size of link text
}
```

## 📐 Layout Spacing

```typescript
spacing: {
  containerMaxWidth: '1000px',  // Maximum width of the entire page
  sectionGap: '1rem',           // Gap between sections
  statGridColumns: 4,           // Number of stat columns (1-4)
  statBoxPadding: '1.25rem',    // Padding inside stat boxes
  linkBoxPadding: '2rem 3rem',  // Padding inside links box
  linkGridColumns: 3,           // Number of link columns (1-3)
  linkGapVertical: '1rem',      // Vertical gap between links
  linkGapHorizontal: '5rem',    // Horizontal gap between links
}
```

**Layout Examples:**
- Compact layout: `statGridColumns: 2`, `linkGridColumns: 2`
- Wide layout: `containerMaxWidth: '1400px'`
- Tight spacing: `sectionGap: '0.5rem'`

## 🔗 Links Configuration

```typescript
links: [
  { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
  { name: 'Trading', url: 'https://tradingview.com', icon: 'chart' },
  // Add more links here...
]
```

**Available Icons:**
- `youtube` - YouTube icon
- `chart` - Trading/chart icon
- `twitter` - Twitter/X icon
- `file` - File/notes icon
- `mail` - Email icon
- `drive` - Google Drive icon
- `calendar` - Calendar icon
- `docs` - Documents icon
- `film` - Movies/film icon

**To add/remove links:**
```typescript
// Add a new link
{ name: 'GitHub', url: 'https://github.com', icon: 'file' },

// Remove a link - just delete the entire line
```

## 📊 Stats Configuration

```typescript
stats: {
  showSession: true,      // Show session stats (time, clicks, keys)
  showDisplay: true,      // Show display stats (resolution, viewport, dpr)
  showPerformance: true,  // Show performance stats (load, dom ready, ping)
  showSystem: true,       // Show system stats (browser, platform, cores)
  
  // Customize labels
  labels: {
    session: 'session',
    display: 'display',
    performance: 'performance',
    system: 'system',
    datetime: 'datetime',
    links: 'links',
  },
}
```

**To hide a stat box:** Set to `false`
```typescript
showPerformance: false,  // Hides the performance box
```

## 🕐 Clock Configuration

```typescript
clock: {
  format24Hour: true,    // true = 24-hour (19:31:27), false = 12-hour (7:31:27 PM)
  showSeconds: true,     // Show/hide seconds
  dateFormat: 'full',    // 'full', 'short', or 'none'
}
```

**Date Format Examples:**
- `'full'`: "wednesday, october 1, 2025"
- `'short'`: "october 1, 2025"
- `'none'`: No date shown

## ⏳ Loader Configuration

```typescript
loader: {
  enabled: true,              // Enable/disable loading screen
  text: 'loading...',         // Loading text
  spinnerColor: '#4ade80',    // Spinner color (usually matches accent)
}
```

## 🎬 Animation Configuration

```typescript
animations: {
  enableHoverEffects: true,   // Enable hover color changes
  transitionSpeed: '0.15s',   // Speed of transitions
}
```

## 📱 Responsive Breakpoints

```typescript
responsive: {
  tablet: '1024px',  // Tablet breakpoint
  mobile: '640px',   // Mobile breakpoint
}
```

---

## 🔥 Quick Customization Examples

### Minimal Dashboard
```typescript
stats: {
  showSession: true,
  showDisplay: false,
  showPerformance: false,
  showSystem: false,
}
spacing: {
  statGridColumns: 1,
}
```

### Dark Purple Theme
```typescript
theme: {
  bgPrimary: '#0a0a0a',
  bgSecondary: '#1a1a2e',
  accent: '#a855f7',
}
```

### 12-Hour Clock, No Seconds
```typescript
clock: {
  format24Hour: false,
  showSeconds: false,
  dateFormat: 'short',
}
```

### Compact Link Bar
```typescript
spacing: {
  linkBoxPadding: '1rem 2rem',
  linkGridColumns: 5,
  linkGapHorizontal: '2rem',
}
```

---

## 💡 Tips

1. **After changing config.ts**, the page will auto-reload
2. **Color picker**: Use browser dev tools to find color codes
3. **Font sizes**: Use `rem` units (1rem ≈ 16px)
4. **Test responsive**: Resize your browser to test breakpoints
5. **Icons**: If you need a custom icon, you can add SVG code in `SimpleBookmarks.tsx`

## 🚀 Need More Customization?

- **Add custom stats**: Edit `components/SimpleStats.tsx`
- **Change layout**: Edit `app/globals.css`
- **Add new pages**: Create files in `app/` directory
