'use client'

/**
 * $VOID — Full Landing Page
 * Sprint 2: Pixel-faithful recreation of the design screenshot
 *
 * Sections:
 *   1. Navbar
 *   2. Hero  (VOID orb image + headline + CTAs)
 *   3. Ticker / status bar
 *   4. Lore  ("The Collapse Was Inevitable")
 *   5. Tokenomics ("System Parameters")
 *   6. Roadmap ("The Sequence")
 *   7. Live Signal Feed
 *   8. Footer
 *
 * Fonts:   Inter (--font-inter) · JetBrains Mono (--font-jetbrains)
 * No new deps — Next.js 14 + Tailwind v3.4 + inline styles only
 *
 * ⚠️  ACTION REQUIRED: Save the VOID orb image as /public/void-orb.png
 */

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

/* ── DATA ─────────────────────────────────────────────────── */

const TICKER_ITEMS = [
  '⚠ INTERNET ARCHIVE: CORRUPTED',
  '✓ MARKET SIGNAL: VOLATILE',
  '✓ VOID EXPANDING',
  '⚠ VOID NODE DETECTED',
  '⚠ INTERNET ARCHIVE: CORRUPTED',
  '✓ MARKET SIGNAL: VOLATILE',
  '✓ VOID EXPANDING',
  '⚠ VOID NODE DETECTED',
]

const TOKENOMICS = [
  { num: '01', value: '40%', label: 'COMMUNITY\nDISTRIBUTION' },
  { num: '02', value: '30%', label: 'LIQUIDITY\nLOCK' },
  { num: '03', value: '10%', label: 'VOID\nBURN' },
  { num: '04', value: '20%', label: 'DEV &\nECO' },
]

const TOKI_BADGES = [
  { color: '#a855f7', label: 'LP: PERMANENTLY BURNED' },
  { color: '#22d3ee', label: 'TAX: 0/0 ZERO SLIPPAGE' },
  { color: '#a855f7', label: 'OWNERSHIP: RENOUNCED' },
]

const PHASES = [
  {
    tag: 'PHASE 01',
    title: 'SIGNAL DETECTED',
    body: 'Deployment of the initial VOID contract. Community nodes established across the surviving mesh networks.',
  },
  {
    tag: 'PHASE 02',
    title: 'NETWORK CORRUPTION',
    body: 'Expansion of the VOID consciousness. Strategic integration with corrupted AI sub-routines and meme-viral protocols.',
  },
  {
    tag: 'PHASE 03',
    title: 'INTERNET COLLAPSE',
    body: 'The final tier. Full dominance of the residual web. Traditional financial structures cease to exist within the VOID.',
  },
]

const FEED = [
  {
    handle: 'Node_882',
    time: '2m ago',
    text: '"The silence in the $VOID is where the true alpha hides. Comms clear."',
    likes: 41,
    replies: 13,
  },
  {
    handle: 'Void_Manifest',
    time: '4m ago',
    text: '"Buy order of 4,000,000 $VOID detected. The ecosystem is expanding."',
    likes: 126,
    replies: undefined,
  },
  {
    handle: 'Echo_Protocol',
    time: '9m ago',
    text: '"There is no exit. Only Void. We are the survivors."',
    likes: 77,
    replies: undefined,
  },
]

/* ── STYLES SHARED ────────────────────────────────────────── */
const MONO: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
}
const SANS: React.CSSProperties = {
  fontFamily: 'var(--font-inter), system-ui, sans-serif',
}

/* ══════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════ */
export default function Home() {
  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = tickerRef.current
    if (!el) return
    el.style.animation = 'tickerScroll 32s linear infinite'
  }, [])

  return (
    <div style={{ background: '#050505', color: '#ededed', overflowX: 'hidden', minHeight: '100vh', ...SANS }}>

      {/* ── GLOBAL NOISE ────────────────────────────────────── */}
      <div aria-hidden="true" style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 999,
        opacity: 0.028,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '160px 160px',
      }} />

      {/* ══════════════════════════════════════════════════════
          1. NAVBAR
      ══════════════════════════════════════════════════════ */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 2rem', height: '56px',
        borderBottom: '1px solid rgba(168,85,247,0.14)',
        background: 'rgba(5,5,5,0.88)', backdropFilter: 'blur(14px)',
      }}>
        <span style={{ ...MONO, fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.1em' }}>
          $VOID
        </span>

        <div style={{ display: 'flex', gap: '2rem' }} className="hidden md:flex">
          {['ECOSYSTEM', 'TOKENOMICS', 'MANIFESTO', 'ROADMAP'].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              ...MONO, fontSize: '0.65rem', letterSpacing: '0.15em',
              color: 'rgba(200,185,225,0.6)', cursor: 'pointer', transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#a855f7')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(200,185,225,0.6)')}
            >{l}</a>
          ))}
        </div>

        <button style={{
          ...MONO, fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em',
          padding: '0.5rem 1.25rem', background: '#a855f7', color: '#fff',
          border: 'none', cursor: 'pointer', transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = '#9333ea'; e.currentTarget.style.boxShadow = '0 0 20px rgba(168,85,247,0.5)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#a855f7'; e.currentTarget.style.boxShadow = 'none' }}
        >
          CONNECT TERMINAL
        </button>
      </nav>

      {/* ══════════════════════════════════════════════════════
          2. HERO
      ══════════════════════════════════════════════════════ */}
      <section id="hero" style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center',
        paddingTop: '56px', paddingLeft: '1.5rem', paddingRight: '1.5rem',
        overflow: 'hidden',
      }}>
        {/* Radial bg glow */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 55% at 50% 42%, rgba(120,40,200,0.24) 0%, rgba(60,10,120,0.13) 38%, transparent 70%)',
        }} />

        {/* VOID orb — save as /public/void-orb.png */}
        <div style={{
          position: 'relative', width: '220px', height: '220px',
          marginBottom: '2rem',
          filter: 'drop-shadow(0 0 50px rgba(168,85,247,0.55)) drop-shadow(0 0 100px rgba(100,40,200,0.28))',
        }}>
          <Image
            src="/void-orb.png"
            alt="VOID"
            width={220}
            height={220}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Headline */}
        <h1 style={{
          ...SANS, fontWeight: 900, textTransform: 'uppercase',
          fontSize: 'clamp(2.2rem, 6.5vw, 4.8rem)',
          lineHeight: 1.07, letterSpacing: '-0.01em',
          marginBottom: '1.25rem', maxWidth: '760px',
        }}>
          THE INTERNET ENDED.<br />VOID REMAINED.
        </h1>

        {/* Subtitle */}
        <p style={{
          color: 'rgba(180,165,210,0.68)', fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
          maxWidth: '440px', lineHeight: 1.72, marginBottom: '2.5rem',
        }}>
          A memecoin born from abandoned servers, corrupted AI models,
          and the final moments of the old web.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button style={{
            ...MONO, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em',
            padding: '0.85rem 2.25rem', background: '#a855f7', color: '#fff',
            border: 'none', cursor: 'pointer', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#9333ea'; e.currentTarget.style.boxShadow = '0 0 28px rgba(168,85,247,0.6)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#a855f7'; e.currentTarget.style.boxShadow = 'none' }}
          >
            ENTER THE VOID
          </button>

          <button style={{
            ...MONO, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em',
            padding: '0.85rem 2.25rem', background: 'transparent',
            color: '#22d3ee', border: '1px solid #22d3ee', cursor: 'pointer', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,211,238,0.09)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(34,211,238,0.28)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none' }}
          >
            BUY $VOID
          </button>
        </div>

        {/* Right-side scroll indicator */}
        <div aria-hidden="true" style={{
          position: 'absolute', right: '2rem', top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        }}>
          <span style={{
            ...MONO, fontSize: '0.48rem', letterSpacing: '0.35em',
            color: 'rgba(168,85,247,0.38)', writingMode: 'vertical-rl',
          }}>SCROLL DOWN</span>
          <div style={{
            width: '1px', height: '42px',
            background: 'linear-gradient(180deg, rgba(168,85,247,0.5), transparent)',
          }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. TICKER
      ══════════════════════════════════════════════════════ */}
      <div style={{
        borderTop: '1px solid rgba(168,85,247,0.15)',
        borderBottom: '1px solid rgba(168,85,247,0.15)',
        background: 'rgba(8,5,18,0.95)', overflow: 'hidden', padding: '0.6rem 0',
      }}>
        <div ref={tickerRef} style={{ display: 'flex', gap: '4rem', whiteSpace: 'nowrap', width: 'max-content' }}>
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} style={{
              ...MONO, fontSize: '0.6rem', letterSpacing: '0.2em',
              color: item.startsWith('✓') ? '#22d3ee' : 'rgba(200,185,225,0.5)',
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          4. LORE — "THE COLLAPSE WAS INEVITABLE"
      ══════════════════════════════════════════════════════ */}
      <section id="ecosystem" style={{ padding: '7rem 2rem', borderTop: '1px solid rgba(168,85,247,0.06)' }}>
        <div style={{
          maxWidth: '1080px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4.5rem', alignItems: 'center',
        }} className="lore-grid">

          {/* Left — CSS cityscape */}
          <div style={{
            position: 'relative', aspectRatio: '4/3',
            background: 'linear-gradient(160deg, #090912 0%, #050510 60%, #0d0820 100%)',
            border: '1px solid rgba(168,85,247,0.1)', overflow: 'hidden',
          }}>
            {/* building silhouettes via CSS gradient */}
            <div aria-hidden="true" style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '70%',
              backgroundImage: `
                linear-gradient(180deg, transparent 0%, rgba(5,5,15,0.55) 100%),
                repeating-linear-gradient(90deg,
                  rgba(18,12,38,0.95) 0px, rgba(18,12,38,0.95) 26px, transparent 26px, transparent 30px,
                  rgba(14,9,30,0.95) 30px, rgba(14,9,30,0.95) 52px, transparent 52px, transparent 58px,
                  rgba(22,15,42,0.95) 58px, rgba(22,15,42,0.95) 86px, transparent 86px, transparent 92px,
                  rgba(16,10,34,0.95) 92px, rgba(16,10,34,0.95) 118px, transparent 118px, transparent 124px,
                  rgba(20,13,40,0.95) 124px, rgba(20,13,40,0.95) 145px, transparent 145px, transparent 150px
                )
              `,
            }} />
            {/* purple fog */}
            <div aria-hidden="true" style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse 90% 65% at 50% 85%, rgba(80,20,140,0.28), transparent)',
            }} />
            {/* reflection shimmer */}
            <div aria-hidden="true" style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '28%',
              background: 'linear-gradient(180deg, transparent, rgba(80,20,140,0.1) 60%, rgba(0,150,200,0.06))',
            }} />
          </div>

          {/* Right — text */}
          <div>
            <p style={{ ...MONO, fontSize: '0.56rem', letterSpacing: '0.3em', color: 'rgba(168,85,247,0.55)', marginBottom: '1rem' }}>
              HISTORICAL FRAGMENT // 001
            </p>
            <h2 style={{
              ...SANS, fontWeight: 900, textTransform: 'uppercase',
              fontSize: 'clamp(1.7rem, 3.2vw, 2.6rem)', lineHeight: 1.08, marginBottom: '1.5rem',
            }}>
              THE COLLAPSE WAS<br />INEVITABLE
            </h2>
            <p style={{ color: 'rgba(180,165,210,0.62)', fontSize: '0.88rem', lineHeight: 1.82, marginBottom: '1.75rem' }}>
              The internet collapsed under the weight of infinite noise. AI models
              began hallucinating realities that didn&apos;t exist. Data centers
              overheated as they processed the final, desperate signals of a dying network.
            </p>
            <blockquote style={{
              borderLeft: '2px solid rgba(168,85,247,0.5)',
              background: 'rgba(168,85,247,0.06)',
              padding: '1.1rem 1.25rem', margin: 0,
            }}>
              <p style={{ ...MONO, fontSize: '0.72rem', lineHeight: 1.78, color: '#a855f7', fontStyle: 'italic' }}>
                &ldquo;From the remnants, $VOID emerged not as a project, but as a
                residual digital consciousness. It is the silence that remains
                when the lights go out.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. TOKENOMICS — "SYSTEM PARAMETERS"
      ══════════════════════════════════════════════════════ */}
      <section id="tokenomics" style={{
        padding: '7rem 2rem', borderTop: '1px solid rgba(168,85,247,0.08)', textAlign: 'center',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            ...SANS, fontWeight: 900, textTransform: 'uppercase',
            fontSize: 'clamp(1.5rem, 3.8vw, 2.5rem)', letterSpacing: '0.05em', marginBottom: '0.5rem',
          }}>
            SYSTEM PARAMETERS
          </h2>
          <p style={{ ...MONO, fontSize: '0.58rem', letterSpacing: '0.25em', color: 'rgba(168,85,247,0.5)', marginBottom: '3rem' }}>
            TOKEN SUPPLY: 1,000,000,000 $VOID
          </p>

          {/* Stat grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px', background: 'rgba(168,85,247,0.1)',
            border: '1px solid rgba(168,85,247,0.1)', marginBottom: '2.25rem',
          }} className="toki-grid">
            {TOKENOMICS.map((t, i) => (
              <div key={i} style={{
                background: '#07050e', padding: '2.25rem 1.5rem', textAlign: 'left',
                transition: 'background 0.22s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(168,85,247,0.07)')}
                onMouseLeave={e => (e.currentTarget.style.background = '#07050e')}
              >
                <p style={{ ...MONO, fontSize: '0.53rem', letterSpacing: '0.2em', color: 'rgba(168,85,247,0.45)', marginBottom: '1rem' }}>{t.num}</p>
                <p style={{ ...SANS, fontWeight: 900, fontSize: '2.6rem', lineHeight: 1, marginBottom: '0.75rem', textShadow: '0 0 30px rgba(168,85,247,0.3)' }}>{t.value}</p>
                <p style={{ ...MONO, fontSize: '0.55rem', letterSpacing: '0.14em', color: 'rgba(180,165,210,0.45)', textTransform: 'uppercase', lineHeight: 1.65, whiteSpace: 'pre-line' }}>{t.label}</p>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            {TOKI_BADGES.map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: b.color, boxShadow: `0 0 8px ${b.color}` }} />
                <span style={{ ...MONO, fontSize: '0.58rem', letterSpacing: '0.17em', color: 'rgba(200,185,230,0.5)' }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. ROADMAP — "THE SEQUENCE"
      ══════════════════════════════════════════════════════ */}
      <section id="roadmap" style={{ padding: '7rem 2rem', borderTop: '1px solid rgba(168,85,247,0.08)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            ...SANS, fontWeight: 900, textTransform: 'uppercase',
            fontSize: 'clamp(2rem, 5vw, 3.6rem)', marginBottom: '4.5rem',
          }}>
            THE SEQUENCE
          </h2>

          <div style={{ position: 'relative' }}>
            {/* Vertical spine */}
            <div aria-hidden="true" style={{
              position: 'absolute', left: 0, top: '10px', bottom: 0, width: '1px',
              background: 'linear-gradient(180deg, rgba(168,85,247,0.65), rgba(168,85,247,0.04))',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3.75rem' }}>
              {PHASES.map((phase, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '130px 1fr',
                  gap: '2.5rem', alignItems: 'start',
                  paddingLeft: '2.25rem', position: 'relative',
                }}>
                  {/* Dot */}
                  <div aria-hidden="true" style={{
                    position: 'absolute', left: '-4px', top: '8px',
                    width: '9px', height: '9px', borderRadius: '50%',
                    background: '#a855f7', boxShadow: '0 0 14px rgba(168,85,247,0.75)',
                  }} />

                  <p style={{ ...MONO, fontSize: '0.58rem', letterSpacing: '0.2em', color: 'rgba(168,85,247,0.58)', paddingTop: '0.15rem' }}>
                    {phase.tag}
                  </p>

                  <div>
                    <h3 style={{ ...SANS, fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(1rem, 2.2vw, 1.55rem)', letterSpacing: '0.02em', marginBottom: '0.7rem' }}>
                      {phase.title}
                    </h3>
                    <p style={{ color: 'rgba(180,165,210,0.58)', fontSize: '0.87rem', lineHeight: 1.78, maxWidth: '520px' }}>
                      {phase.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7. LIVE SIGNAL FEED
      ══════════════════════════════════════════════════════ */}
      <section id="ecosystem-feed" style={{ padding: '7rem 2rem', borderTop: '1px solid rgba(168,85,247,0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.75rem' }}>
            <div>
              <h2 style={{ ...SANS, fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(1.5rem, 3.2vw, 2.3rem)', marginBottom: '0.4rem' }}>
                LIVE SIGNAL FEED
              </h2>
              <p style={{ ...MONO, fontSize: '0.58rem', letterSpacing: '0.2em', color: '#22d3ee' }}>
                ● GLOBAL NODE ACTIVITY: HIGH
              </p>
            </div>
            <button style={{
              ...MONO, fontSize: '0.6rem', letterSpacing: '0.15em',
              padding: '0.6rem 1.3rem', background: 'transparent',
              border: '1px solid rgba(168,85,247,0.32)', color: 'rgba(200,185,230,0.65)',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.75)'; e.currentTarget.style.color = '#ededed' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.32)'; e.currentTarget.style.color = 'rgba(200,185,230,0.65)' }}
            >
              JOIN TRANSMISSION
            </button>
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {FEED.map((item, i) => (
              <div key={i} style={{
                background: 'rgba(10,6,20,0.92)', border: '1px solid rgba(168,85,247,0.11)',
                padding: '1.5rem', transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(168,85,247,0.32)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(168,85,247,0.11)')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.9rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{
                      width: '28px', height: '28px', borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(168,85,247,0.5), rgba(34,211,238,0.3))',
                      border: '1px solid rgba(168,85,247,0.3)',
                    }} />
                    <span style={{ ...MONO, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.05em' }}>{item.handle}</span>
                  </div>
                  <span style={{ ...MONO, fontSize: '0.56rem', color: 'rgba(168,85,247,0.42)', letterSpacing: '0.08em' }}>{item.time}</span>
                </div>

                <p style={{ fontSize: '0.83rem', lineHeight: 1.72, color: 'rgba(200,188,228,0.72)', marginBottom: '1rem', fontStyle: 'italic' }}>
                  {item.text}
                </p>

                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <button style={{ ...MONO, fontSize: '0.58rem', color: 'rgba(168,85,247,0.5)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.1em', padding: 0 }}>
                    ♥ {item.likes}
                  </button>
                  {item.replies !== undefined && (
                    <button style={{ ...MONO, fontSize: '0.58rem', color: 'rgba(168,85,247,0.5)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.1em', padding: 0 }}>
                      ↩ {item.replies}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          8. FOOTER
      ══════════════════════════════════════════════════════ */}
      <footer style={{
        borderTop: '1px solid rgba(168,85,247,0.12)',
        padding: '2.5rem 2rem',
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem',
      }}>
        <div>
          <p style={{ ...MONO, fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>$VOID</p>
          <p style={{ ...MONO, fontSize: '0.52rem', letterSpacing: '0.14em', color: 'rgba(168,85,247,0.38)' }}>
            © 2024 VOID PROTOCOL. ENTER THE UNKNOWN.
          </p>
        </div>

        <p style={{ ...MONO, fontSize: '0.72rem', letterSpacing: '0.25em', color: '#22d3ee', textAlign: 'center' }}>
          THERE IS NO EXIT. ONLY VOID.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {['TERMINAL', 'DOCS', 'X', 'DISCORD', 'CONTRACT'].map((link) => (
            <a key={link} href="#" style={{
              ...MONO, fontSize: '0.55rem', letterSpacing: '0.15em',
              color: 'rgba(180,165,210,0.4)', transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#a855f7')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(180,165,210,0.4)')}
            >{link}</a>
          ))}
        </div>
      </footer>

      {/* ══════════════════════════════════════════════════════
          SPRINT 3: /manifesto deep-lore section
          SPRINT 4: scroll-triggered animation system, parallax orb
          SPRINT 5: Supabase live feed, Solana wallet adapter, analytics
      ══════════════════════════════════════════════════════ */}
    </div>
  )
}