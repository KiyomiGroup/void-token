/**
 * variants.ts — Framer Motion animation variants
 * src/animations/variants.ts
 *
 * Import these into any component that uses <motion.*> elements.
 * Keeps animation logic centralized and consistent.
 *
 * Usage:
 *   import { fadeUp, stagger } from '@/animations/variants'
 *   <motion.div variants={fadeUp} initial="hidden" animate="visible" />
 */

import type { Variants } from 'framer-motion'

/* ── FADE UP ── */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity:    1,
    y:          0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/* ── FADE IN ── */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity:    1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

/* ── STAGGER CONTAINER ── */
export const stagger: Variants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

/* ── STAGGER ITEM (use as child of stagger) ── */
export const staggerItem: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity:    1,
    y:          0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/* ── SCALE IN ── */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: {
    opacity:    1,
    scale:      1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/* ── SLIDE LEFT ── */
export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: {
    opacity:    1,
    x:          0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/* ── GLOW PULSE (for orb / ambient elements) ── */
export const glowPulse = {
  animate: {
    scale:      [1, 1.06, 1],
    opacity:    [0.7, 1, 0.7],
    transition: { duration: 6, ease: 'easeInOut', repeat: Infinity },
  },
}
