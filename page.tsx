/**
 * page.tsx — $VOID Homepage
 * src/app/page.tsx
 *
 * Assembles all Sprint 1 sections in order:
 *   LoadingScreen → Navbar → Ticker → Hero → StatsBar
 *   → SectionPlaceholder × 5 (future sprints) → Footer
 *
 * Each section is isolated — swap, reorder, or replace independently.
 */

'use client'

import React, { useState } from 'react'

import LoadingScreen     from '../sections/LoadingScreen'
import Navbar            from '../components/Navbar'
import Ticker            from '../components/Ticker'
import Hero              from '../sections/Hero'
import StatsBar          from '../sections/StatsBar'
import SectionPlaceholder from '../sections/SectionPlaceholder'

/* Sprint 2–5 placeholder definitions */
const FUTURE_SECTIONS = [
  { id: 'lore',        sprint: 2, title: 'LORE / ORIGIN STORY'  },
  { id: 'tokenomics',  sprint: 2, title: 'TOKENOMICS'           },
  { id: 'roadmap',     sprint: 2, title: 'ROADMAP'              },
  { id: 'community',   sprint: 3, title: 'COMMUNITY FEED'       },
  { id: 'trade',       sprint: 4, title: 'TRADE $VOID'          },
]

export default function HomePage() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {/* Boot sequence — sits above everything until complete */}
      <LoadingScreen onComplete={() => setLoaded(true)} />

      {/* Main site — hidden until loader exits */}
      <div
        style={{
          opacity:    loaded ? 1 : 0,
          transition: 'opacity 0.6s ease 0.2s',
          pointerEvents: loaded ? 'auto' : 'none',
        }}
      >
        {/* Fixed navigation */}
        <Navbar />

        {/* Scrolling price ticker just below nav */}
        <div style={{ marginTop: 'var(--nav-h)' }}>
          <Ticker />
        </div>

        {/* Hero — cinematic centrepiece */}
        <main>
          <Hero />

          {/* Key metrics strip */}
          <StatsBar />

          {/* Sprint 2–5 placeholder sections */}
          {FUTURE_SECTIONS.map(sec => (
            <SectionPlaceholder
              key={sec.id}
              id={sec.id}
              sprint={sec.sprint}
              title={sec.title}
            />
          ))}
        </main>

        {/* Footer */}
        <footer
          style={{
            borderTop:      '1px solid var(--border)',
            padding:        '2rem 2.5rem',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            flexWrap:       'wrap',
            gap:            '1rem',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.2em', color: 'var(--muted)' }}>
            $<span style={{ color: 'var(--violet)' }}>VOID</span>
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.08em', color: 'rgba(102,102,128,0.45)', maxWidth: '600px', textAlign: 'right' }}>
            NOT FINANCIAL ADVICE. THIS IS A PORTFOLIO PROJECT.
            THE VOID DOES NOT PROMISE RETURNS. ONLY DARKNESS.
          </span>
        </footer>
      </div>
    </>
  )
}
