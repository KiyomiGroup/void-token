/**
 * Hero.tsx — Cinematic hero section
 * src/sections/Hero.tsx
 *
 * Features:
 *   - Animated glowing orb with multi-ring system
 *   - 28 floating particles (violet / cyan / green)
 *   - Glitch effect on headline
 *   - Staggered entrance animations via CSS
 *   - Scroll indicator
 *   - CTA buttons: ENTER THE VOID + BUY $VOID
 */

'use client'

import React, { useEffect, useRef } from 'react'
import Button from '../components/Button'
import './Hero.css'

/* Particle configuration */
const PARTICLE_COLORS = [
  'rgba(157,78,221,',   // violet
  'rgba(0,229,255,',    // cyan
  'rgba(123,255,0,',    // green
]

const PARTICLE_COUNT = 28

interface Particle {
  x: number       // left %
  size: number    // px
  color: string   // rgba prefix
  opacity: number
  duration: number // animation-duration s
  delay: number    // animation-delay s
}

function generateParticles(): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, () => {
    const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]
    return {
      x:        Math.random() * 100,
      size:     Math.random() * 2.5 + 1,
      color,
      opacity:  Math.random() * 0.45 + 0.1,
      duration: Math.random() * 14 + 10,
      delay:    Math.random() * 12,
    }
  })
}

// Generate once (stable — no SSR hydration mismatch if using useMemo in real app)
const PARTICLES = generateParticles()

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  // Subtle parallax on mouse move for the orb
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const orb = hero.querySelector<HTMLElement>('.hero__orb')
    if (!orb) return

    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth  - 0.5) * 18
      const y = (clientY / innerHeight - 0.5) * 12
      orb.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section className="hero section" id="hero" ref={heroRef} aria-label="Hero">

      {/* Radial background glow */}
      <div className="hero__bg" aria-hidden="true" />

      {/* Floating particles */}
      <div className="hero__particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left:            `${p.x}%`,
              width:           `${p.size}px`,
              height:          `${p.size}px`,
              background:      `${p.color}${p.opacity})`,
              boxShadow:       `0 0 ${p.size * 5}px ${p.color}0.7)`,
              animationDuration:`${p.duration}s`,
              animationDelay:   `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Orb */}
      <div className="hero__orb-wrap" aria-hidden="true">
        <div className="hero__orb-ring hero__orb-ring--1" />
        <div className="hero__orb-ring hero__orb-ring--2" />
        <div className="hero__orb-ring hero__orb-ring--3" />
        <div className="hero__orb" />
      </div>

      {/* Content */}
      <div className="hero__content">

        {/* Tag line above headline */}
        <div className="hero__tag" aria-label="Tagline">
          <span className="hero__tag-line" aria-hidden="true" />
          MEMECOIN FROM THE END OF THE INTERNET
          <span className="hero__tag-line" aria-hidden="true" />
        </div>

        {/* Headline with glitch on line 1 */}
        <h1 className="hero__headline">
          <span
            className="hero__headline-line1 glitch"
            data-text="THE INTERNET ENDED."
            aria-label="THE INTERNET ENDED."
          >
            THE INTERNET ENDED.
          </span>
          <span className="hero__headline-line2">
            VOID REMAINED.
          </span>
        </h1>

        {/* Subtext */}
        <p className="hero__sub">
          A memecoin born from abandoned servers, corrupted AI models,
          and the final moments of the old web.
        </p>

        {/* CTAs */}
        <div className="hero__ctas">
          <Button variant="primary" size="lg" href="#">
            ENTER THE VOID
          </Button>
          <Button variant="outline" size="lg" href="#">
            BUY $VOID
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <p className="hero__scroll-label">SCROLL</p>
        <div className="hero__scroll-line" />
      </div>

    </section>
  )
}
