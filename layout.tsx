/**
 * layout.tsx — Next.js Root Layout
 * src/app/layout.tsx
 *
 * Sets up:
 *   - Global fonts (Space Grotesk + JetBrains Mono via next/font)
 *   - Document metadata (title, description, OG)
 *   - Atmospheric DOM overlays (noise, scanlines)
 *   - Global CSS import
 */

import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'

/* ── FONTS ── */
const spaceGrotesk = Space_Grotesk({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600', '700'],
  variable: '--font-space',
  display:  'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets:  ['latin'],
  weight:   ['400', '500', '700'],
  variable: '--font-jetbrains',
  display:  'swap',
})

/* ── METADATA ── */
export const metadata: Metadata = {
  title:       '$VOID — The memecoin from the end of the internet.',
  description: 'A memecoin born from abandoned servers, corrupted AI models, and the final moments of the old web.',
  keywords:    ['VOID', 'memecoin', 'crypto', 'web3', 'DeFi', 'token'],
  openGraph: {
    title:       '$VOID',
    description: 'The memecoin from the end of the internet.',
    type:        'website',
  },
  twitter: {
    card:  'summary_large_image',
    title: '$VOID — The memecoin from the end of the internet.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor:  '#050505',
  colorScheme: 'dark',
}

/* ── ROOT LAYOUT ── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {/* Atmospheric overlays — rendered outside main so they stack over everything */}
        <div className="noise-overlay"    aria-hidden="true" />
        <div className="scanlines-overlay" aria-hidden="true" />

        {children}
      </body>
    </html>
  )
}
