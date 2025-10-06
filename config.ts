export const config = {
  // Theme Colors
  theme: {
    bgPrimary: '#0a0a0a',
    bgSecondary: '#141414',
    textPrimary: '#e5e5e5',
    textSecondary: '#888888',
    textDim: '#555555',
    accent: '#4ade80',
    border: 'rgba(255, 255, 255, 0.06)',
  },

  // Typography
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", sans-serif',
    clockSize: '6.5rem',
    dateSize: '1.5rem',
    statLabelSize: '0.7rem',
    statValueSize: '0.85rem',
    linkSize: '0.875rem',
  },

  // Layout Spacing
  spacing: {
    containerMaxWidth: '1000px',
    sectionGap: '1rem',
    statGridColumns: 4,
    statBoxPadding: '1.25rem',
    linkBoxPadding: '2rem 3rem',
    linkGridColumns: 3,
    linkGapVertical: '1.5rem',
    linkGapHorizontal: '10rem',
  },

  // Border Radius
  borderRadius: {
    boxes: '12px',
  },

  // Links Configuration
  links: [
    { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
    { name: 'Trading', url: 'https://alphaticks.projectx.com', icon: 'chart' },
    { name: 'Twitter', url: 'https://x.com', icon: 'twitter' },
    { name: 'Notes', url: 'https://app.standardnotes.com', icon: 'file' },
    { name: 'Mail', url: 'https://mail.proton.me', icon: 'mail' },
    { name: 'Drive', url: 'https://drive.proton.me', icon: 'drive' },
    { name: 'Calendar', url: 'https://calendar.proton.me', icon: 'calendar' },
    { name: 'Docs', url: 'https://docs.proton.me', icon: 'docs' },
    { name: 'Movies', url: 'http://movieboxpro.app', icon: 'film' },
  ],

  // Link Behavior
  linkBehavior: {
    openInNewTab: false, // true = open in new tab, false = open in same page
  },

  // Stats Configuration
  stats: {
    showSession: true,
    showDisplay: true,
    showPerformance: true,
    showSystem: true,
    
    // Custom labels
    labels: {
      session: 'session',
      display: 'display',
      performance: 'performance',
      system: 'system',
      datetime: 'datetime',
      links: 'links',
    },
  },

  // Clock Configuration
  clock: {
    format24Hour: true, // true for 24-hour, false for 12-hour
    showSeconds: true,
    dateFormat: 'full', // 'full', 'short', or 'none'
  },

  // Loader Configuration
  loader: {
    enabled: true,
    text: 'loading...',
    spinnerColor: '#4ade80',
  },

  // Animation Configuration
  animations: {
    enableHoverEffects: true,
    transitionSpeed: '0.15s',
  },

  // Responsive Breakpoints
  responsive: {
    tablet: '1024px',
    mobile: '640px',
  },
};

export type Config = typeof config;
