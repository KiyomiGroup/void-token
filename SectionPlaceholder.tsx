/**
 * SectionPlaceholder.tsx — Reusable future-sprint skeleton
 * src/sections/SectionPlaceholder.tsx
 *
 * Used for Sprint 2-5 sections that don't exist yet.
 * Fades in on scroll via IntersectionObserver.
 *
 * Props:
 *   id      — anchor ID for navbar links
 *   sprint  — sprint number label (e.g. 2)
 *   title   — placeholder section name
 */

'use client'

import React, { useEffect, useRef, useState } from 'react'
import './SectionPlaceholder.css'

interface SectionPlaceholderProps {
  id:     string
  sprint: number
  title:  string
}

export default function SectionPlaceholder({ id, sprint, title }: SectionPlaceholderProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`placeholder section ${visible ? 'placeholder--visible' : ''}`}
      aria-label={`${title} — coming in Sprint ${sprint}`}
    >
      {/* Radial ambient */}
      <div className="placeholder__bg" aria-hidden="true" />

      {/* Grid decoration */}
      <div className="placeholder__grid" aria-hidden="true" />

      <div className="placeholder__content">
        <div className="placeholder__badge">
          SPRINT {sprint} — COMING SOON
        </div>
        <h2 className="placeholder__title">{title}</h2>
        <p className="placeholder__hint">This section will be built in Sprint {sprint}.</p>
      </div>
    </section>
  )
}
