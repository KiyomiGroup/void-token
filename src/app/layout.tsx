/**
 * Root Layout — VOID Project
 */

import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

/* ── FONTS ── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
  display: "swap",
})

/* ── METADATA ── */
export const metadata: Metadata = {
  title: "$VOID — The memecoin from the end of the internet.",
  description:
    "A memecoin born from abandoned servers, corrupted AI models, and the final moments of the old web.",
}

/* ── ROOT LAYOUT ── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  )
}
