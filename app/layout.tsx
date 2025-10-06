import type { Metadata } from 'next'
import './globals.css'
import { config } from '@/config'

export const metadata: Metadata = {
  title: '~',
  description: 'Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --bg-primary: ${config.theme.bgPrimary};
              --bg-secondary: ${config.theme.bgSecondary};
              --text-primary: ${config.theme.textPrimary};
              --text-secondary: ${config.theme.textSecondary};
              --text-dim: ${config.theme.textDim};
              --accent: ${config.theme.accent};
              --border: ${config.theme.border};
              --font-family: ${config.typography.fontFamily};
              --clock-size: ${config.typography.clockSize};
              --date-size: ${config.typography.dateSize};
              --stat-label-size: ${config.typography.statLabelSize};
              --stat-value-size: ${config.typography.statValueSize};
              --link-size: ${config.typography.linkSize};
              --container-max-width: ${config.spacing.containerMaxWidth};
              --section-gap: ${config.spacing.sectionGap};
              --stat-grid-columns: ${config.spacing.statGridColumns};
              --stat-box-padding: ${config.spacing.statBoxPadding};
              --link-box-padding: ${config.spacing.linkBoxPadding};
              --link-grid-columns: ${config.spacing.linkGridColumns};
              --link-gap-vertical: ${config.spacing.linkGapVertical};
              --link-gap-horizontal: ${config.spacing.linkGapHorizontal};
              --border-radius: ${config.borderRadius.boxes};
              --transition-speed: ${config.animations.transitionSpeed};
              --spinner-color: ${config.loader.spinnerColor};
            }
          `
        }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
