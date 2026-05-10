/**
 * layout.tsx — Next.js Root Layout
 * src/app/layout.tsx
 *
 * Sets up:
<<<<<<< HEAD
 * - Global fonts (Inter + JetBrains Mono via next/font)
 * - Document metadata (title, description, OG)
 * - Atmospheric DOM overlays (noise, scanlines)
 * - Global CSS import
 */

import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'

/* ── FONTS ── */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
=======
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
>>>>>>> 4d2cf55cc4b66638d12c55d6a580a4460179c09f
})

/* ── METADATA ── */
export const metadata: Metadata = {
<<<<<<< HEAD
  title: '$VOID — The memecoin from the end of the internet.',
  description:
    'A memecoin born from abandoned servers, corrupted AI models, and the final moments of the old web.',
  keywords: ['VOID', 'memecoin', 'crypto', 'web3', 'DeFi', 'token'],
  openGraph: {
    title: '$VOID',
    description: 'The memecoin from the end of the internet.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '$VOID — The memecoin from the end of the internet.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

/* ── VIEWPORT ── */
export const viewport: Viewport = {
  themeColor: '#050505',
=======
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
>>>>>>> 4d2cf55cc4b66638d12c55d6a580a4460179c09f
  colorScheme: 'dark',
}

/* ── ROOT LAYOUT ── */
<<<<<<< HEAD
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-black text-white antialiased">
        {/* Atmospheric overlays */}
        <div className="noise-overlay" aria-hidden="true" />
=======
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {/* Atmospheric overlays — rendered outside main so they stack over everything */}
        <div className="noise-overlay"    aria-hidden="true" />
>>>>>>> 4d2cf55cc4b66638d12c55d6a580a4460179c09f
        <div className="scanlines-overlay" aria-hidden="true" />

        {children}
      </body>
    </html>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> 4d2cf55cc4b66638d12c55d6a580a4460179c09f
