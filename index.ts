/**
 * index.ts — Shared TypeScript types
 * src/types/index.ts
 *
 * Global type definitions used across the project.
 * Import with: import type { NavLink, TickerItem } from '@/types'
 */

/* ── NAV ── */
export interface NavLink {
  label: string
  href:  string
}

/* ── TICKER ── */
export interface TickerItem {
  symbol: string
  price:  string
  delta:  string
  up:     boolean
}

/* ── STATS ── */
export interface StatItem {
  value:    number
  prefix?:  string
  suffix?:  string
  label:    string
  display?: string
}

/* ── SECTION PLACEHOLDER ── */
export interface PlaceholderSection {
  id:     string
  sprint: number
  title:  string
}

/* ── PARTICLE ── */
export interface Particle {
  x:        number
  size:     number
  color:    string
  opacity:  number
  duration: number
  delay:    number
}

/* ── BUTTON ── */
export type ButtonVariant = 'primary' | 'outline' | 'ghost'
export type ButtonSize    = 'sm' | 'md' | 'lg'
