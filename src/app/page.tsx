'use client'

/**
 * $VOID Landing Page
 * Design: Floki-style rounded glass cards, iPhone-native mobile
 * Both desktop + mobile built from scratch with same design language
 */

import Image from 'next/image'
import { useState, useEffect, useRef, useCallback } from 'react'

/* ── DATA ──────────────────────────────────────────────────── */
const TICKER = [
  '⚡ LP PERMANENTLY BURNED',
  '✦ TAX: 0/0',
  '⚡ CONTRACT RENOUNCED',
  '✦ VOID EXPANDING',
  '⚡ SIGNAL DETECTED',
  '✦ INTERNET ARCHIVE: CORRUPTED',
  '⚡ BUY $VOID ON UNISWAP',
  '✦ TOTAL SUPPLY: 1,000,000,000',
]

const STATS = [
  { value: '1B',    label: 'Total Supply' },
  { value: '0/0',   label: 'Buy/Sell Tax' },
  { value: '100%',  label: 'LP Burned' },
  { value: '∞',     label: 'Void Energy' },
]

const TOKENOMICS = [
  { num: '01', pct: '40%', label: 'Community\nDistribution', color: '#a855f7' },
  { num: '02', pct: '30%', label: 'Liquidity\nLock',         color: '#22d3ee' },
  { num: '03', pct: '10%', label: 'Void\nBurn',             color: '#ec4899' },
  { num: '04', pct: '20%', label: 'Dev &\nEcosystem',       color: '#a855f7' },
]

const PHASES = [
  { tag: 'Phase 01', title: 'Signal Detected', body: 'Contract deployment. Community nodes established across surviving mesh networks. LP burned permanently.', status: 'LIVE', active: true },
  { tag: 'Phase 02', title: 'Network Corruption', body: 'Expansion of the VOID consciousness. Integration with corrupted AI sub-routines and viral meme protocols.', status: 'SOON', active: false },
  { tag: 'Phase 03', title: 'Internet Collapse', body: 'Full dominance of the residual web. Traditional financial structures cease to exist inside the VOID.', status: 'UNKNOWN', active: false },
]

const FEED = [
  { handle: 'Node_882',      time: '2m',  text: 'The silence in the $VOID is where the true alpha hides.', likes: 41 },
  { handle: 'Void_Manifest', time: '4m',  text: 'Buy order of 4,000,000 $VOID detected. Ecosystem expanding.', likes: 126 },
  { handle: 'Echo_Protocol', time: '9m',  text: 'There is no exit. Only Void. We are the survivors.', likes: 77 },
]

/* ── HOOKS ─────────────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const all = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    )
    all.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

/* ── PARTICLE FIELD ────────────────────────────────────────── */
function Particles() {
  const pts = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: 10 + Math.random() * 75,
    s: 1.2 + Math.random() * 2,
    delay: Math.random() * 7,
    dur: 5 + Math.random() * 5,
    drift: (Math.random() - 0.5) * 70,
    cyan: Math.random() > 0.55,
  }))
  return (
    <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {pts.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          left: `${p.x}%`, top: `${p.y}%`,
          width: p.s, height: p.s,
          borderRadius: '50%',
          background: p.cyan ? 'rgba(34,211,238,0.8)' : 'rgba(168,85,247,0.8)',
          boxShadow: p.cyan ? `0 0 ${p.s*4}px rgba(34,211,238,0.6)` : `0 0 ${p.s*4}px rgba(168,85,247,0.6)`,
          animation: `particleDrift ${p.dur}s ease-in-out ${p.delay}s infinite`,
          ['--drift-x' as string]: `${p.drift}px`,
        }} />
      ))}
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef   = useRef<HTMLDivElement>(null)
  const tickerRef = useRef<HTMLDivElement>(null)
  const [orbPos, setOrbPos]         = useState({ x: 0, y: 0 })
  const [glitch, setGlitch]         = useState(false)
  const [mounted, setMounted]       = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useReveal()
  useEffect(() => { setMounted(true) }, [])
  useEffect(() => {
    const id = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 380)
    }, 6000 + Math.random() * 3000)
    return () => clearInterval(id)
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = heroRef.current?.getBoundingClientRect()
    if (!r) return
    setOrbPos({ x: (e.clientX - r.left - r.width/2) / r.width * 20, y: (e.clientY - r.top - r.height/2) / r.height * 12 })
  }, [])

  const MONO = { fontFamily: 'var(--font-jetbrains, monospace)' } as React.CSSProperties

  return (
    <div style={{ background: 'var(--void-bg)', color: '#ededed', overflowX: 'hidden', minHeight: '100vh' }}>

      {/* ── SCANLINE ──────────────────────────────────────────── */}
      <div aria-hidden style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 999, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, height: '1.5px', background: 'linear-gradient(90deg,transparent,rgba(168,85,247,0.18),rgba(34,211,238,0.12),transparent)', animation: 'scanline 9s linear infinite' }} />
      </div>

      {/* ── DESKTOP NAVBAR ────────────────────────────────────── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 2rem', height: '60px',
        background: 'rgba(7,6,15,0.82)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        animation: mounted ? 'fadeSlideUp 0.5s ease both' : 'none',
      }}>
        <span style={{ ...MONO, fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em' }}>$VOID</span>

        {/* Desktop links */}
        <div className="desktop-nav-links" style={{ display: 'flex', gap: '2.5rem' }}>
          {['Ecosystem','Tokenomics','Roadmap','Community'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: '0.8rem', color: 'rgba(200,190,220,0.6)', transition: 'color .2s', letterSpacing: '0.02em' }}
              onMouseEnter={e=>(e.currentTarget.style.color='#ededed')}
              onMouseLeave={e=>(e.currentTarget.style.color='rgba(200,190,220,0.6)')}
            >{l}</a>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button className="btn-outline" style={{ padding: '9px 20px', fontSize: '0.65rem' }}>Whitepaper</button>
          <button className="btn-primary" style={{ padding: '9px 20px', fontSize: '0.65rem' }}>Buy $VOID</button>
          {/* Mobile hamburger */}
          <button
            className="mobile-nav"
            onClick={() => setMobileMenu(!mobileMenu)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: '#ededed', flexDirection: 'column', gap: '5px' }}
          >
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#ededed', borderRadius: '2px', transition: 'all 0.2s', transform: mobileMenu ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#ededed', borderRadius: '2px', opacity: mobileMenu ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#ededed', borderRadius: '2px', transition: 'all 0.2s', transform: mobileMenu ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU DRAWER ───────────────────────────────── */}
      {mobileMenu && (
        <div style={{
          position: 'fixed', top: '60px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(7,6,15,0.97)', backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          padding: '1.5rem',
          animation: 'fadeSlideUp 0.25s ease both',
        }}>
          {['Ecosystem','Tokenomics','Roadmap','Community'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setMobileMenu(false)}
              style={{ display: 'block', padding: '0.9rem 0', fontSize: '1rem', fontWeight: 600, color: 'rgba(220,210,235,0.85)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >{l}</a>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
            <button className="btn-outline" style={{ flex: 1, padding: '12px 0' }}>Whitepaper</button>
            <button className="btn-primary" style={{ flex: 1, padding: '12px 0' }}>Buy $VOID</button>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section
        id="hero"
        ref={heroRef}
        onMouseMove={onMouseMove}
        onMouseLeave={() => setOrbPos({ x:0, y:0 })}
        style={{
          position: 'relative',
          minHeight: '100svh',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center',
          padding: '100px 20px 80px',
          overflow: 'hidden',
        }}
      >
        <Particles />

        {/* Radial glow bg */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(100,30,180,0.3) 0%, rgba(50,10,100,0.15) 45%, transparent 70%)',
        }} />

        {/* Grid */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.035,
          backgroundImage: 'linear-gradient(rgba(168,85,247,1) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,1) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%,black 20%,transparent 80%)',
        }} />

        {/* ORB */}
        <div style={{
          position: 'relative',
          marginBottom: '2rem',
          animation: mounted ? 'fadeSlideUp 0.9s ease 0.1s both' : 'none',
          transition: 'transform 0.15s ease-out',
          transform: `translate(${orbPos.x}px,${orbPos.y}px)`,
        }}>
          {/* Rings */}
          {[
            { inset: '-48px', border: '1px solid rgba(168,85,247,0.22)', dur: '14s', dir: 1 },
            { inset: '-28px', border: '1px solid rgba(34,211,238,0.16)',  dur: '9s',  dir: -1 },
            { inset: '-70px', border: '1px dashed rgba(168,85,247,0.07)', dur: '24s', dir: 1 },
          ].map((ring, i) => (
            <div key={i} aria-hidden style={{
              position: 'absolute', inset: ring.inset, borderRadius: '50%', border: ring.border,
              animation: `${ring.dir > 0 ? 'orbRingRotate' : 'orbRingRotateReverse'} ${ring.dur} linear infinite`,
            }} />
          ))}

          {/* Orb image */}
          <div style={{
            position: 'relative',
            width: 'clamp(200px, 40vw, 280px)',
            height: 'clamp(200px, 40vw, 280px)',
            animation: 'orbFloat 5s ease-in-out infinite',
            filter: 'drop-shadow(0 0 48px rgba(168,85,247,0.7)) drop-shadow(0 0 100px rgba(100,30,180,0.4))',
          }}>
            <Image src="/void-orb.png" alt="VOID" fill style={{ objectFit: 'contain' }} priority />
          </div>
        </div>

        {/* Pill */}
        <div className="void-pill" style={{ marginBottom: '1.25rem', animation: mounted ? 'fadeSlideUp 0.7s ease 0.4s both' : 'none' }}>
          <span className="void-pill-dot" />
          Signal Detected
          <span style={{ animation: 'cursorBlink 1s step-end infinite', marginLeft: '2px' }}>_</span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontWeight: 900, textTransform: 'uppercase',
          fontSize: 'clamp(2.2rem, 8vw, 5.5rem)',
          lineHeight: 1.05, letterSpacing: '-0.02em',
          marginBottom: '1.1rem', maxWidth: '820px',
          position: 'relative',
          animation: mounted ? 'fadeSlideUp 0.8s ease 0.55s both' : 'none',
        }}>
          {glitch && (
            <>
              <span aria-hidden style={{ position:'absolute',inset:0,color:'#22d3ee',opacity:0.5,animation:'glitch1 0.32s steps(1) forwards',clipPath:'inset(15% 0 65% 0)' }}>THE INTERNET ENDED.<br/>VOID REMAINED.</span>
              <span aria-hidden style={{ position:'absolute',inset:0,color:'#a855f7',opacity:0.5,animation:'glitch2 0.32s steps(1) forwards',clipPath:'inset(65% 0 15% 0)' }}>THE INTERNET ENDED.<br/>VOID REMAINED.</span>
            </>
          )}
          THE INTERNET ENDED.<br />
          <span className="text-void-gradient">VOID REMAINED.</span>
        </h1>

        {/* Sub */}
        <p style={{
          color: 'rgba(180,165,210,0.65)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
          maxWidth: '420px', lineHeight: 1.8, marginBottom: '2.5rem',
          animation: mounted ? 'fadeSlideUp 0.8s ease 0.7s both' : 'none',
        }}>
          A memecoin born from abandoned servers, corrupted AI models, and the final moments of the old web.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: '0.85rem', flexWrap: 'wrap', justifyContent: 'center',
          animation: mounted ? 'fadeSlideUp 0.8s ease 0.85s both' : 'none',
          width: '100%', maxWidth: '380px',
          position: 'relative', zIndex: 2,
        }}>
          {/* Primary — purple → cyan sweep */}
          <button
            style={{
              flex: 1,
              padding: '14px 32px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-jetbrains, monospace)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
              background: '#a855f7',
              transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)'
              const sweep = e.currentTarget.querySelector('.sweep') as HTMLElement
              if (sweep) sweep.style.transform = 'translateX(0%)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              const sweep = e.currentTarget.querySelector('.sweep') as HTMLElement
              if (sweep) sweep.style.transform = 'translateX(-101%)'
            }}
          >
            <span className="sweep" style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, #22d3ee, #a855f7)',
              transform: 'translateX(-101%)',
              transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1)',
              borderRadius: '999px',
            }} />
            <span style={{ position: 'relative', zIndex: 1 }}>Enter the Void</span>
          </button>

          {/* Outline — transparent → purple sweep */}
          <button
            style={{
              flex: 1,
              padding: '13px 32px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.22)',
              cursor: 'pointer',
              fontFamily: 'var(--font-jetbrains, monospace)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#ededed',
              position: 'relative',
              overflow: 'hidden',
              background: 'transparent',
              transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1), border-color 0.25s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)'
              e.currentTarget.style.borderColor = 'rgba(168,85,247,0.6)'
              const sweep = e.currentTarget.querySelector('.sweep') as HTMLElement
              if (sweep) sweep.style.transform = 'translateX(0%)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'
              const sweep = e.currentTarget.querySelector('.sweep') as HTMLElement
              if (sweep) sweep.style.transform = 'translateX(-101%)'
            }}
          >
            <span className="sweep" style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, rgba(168,85,247,0.35), rgba(168,85,247,0.12))',
              transform: 'translateX(-101%)',
              transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1)',
              borderRadius: '999px',
            }} />
            <span style={{ position: 'relative', zIndex: 1 }}>Buy $VOID</span>
          </button>
        </div>

        {/* Scroll indicator — pushed below buttons with margin, not absolute */}
        <div aria-hidden style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          opacity: 0.4,
          marginTop: '3rem',
          animation: mounted ? 'fadeSlideUp 1s ease 1.3s both' : 'none',
          position: 'relative', zIndex: 2,
        }}>
          <span style={{ ...MONO, fontSize: '0.48rem', letterSpacing: '0.35em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(180deg,rgba(168,85,247,0.8),transparent)', animation: 'orbFloat 2.2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TICKER
      ══════════════════════════════════════════════════════ */}
      <div style={{ background: 'rgba(168,85,247,0.08)', borderTop: '1px solid rgba(168,85,247,0.15)', borderBottom: '1px solid rgba(168,85,247,0.15)', overflow: 'hidden', padding: '12px 0' }}>
        <div ref={tickerRef} style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap', width: 'max-content', animation: 'tickerScroll 30s linear infinite' }}>
          {[...TICKER,...TICKER].map((t, i) => (
            <span key={i} style={{ ...MONO, fontSize: '0.62rem', letterSpacing: '0.18em', color: t.startsWith('⚡') ? 'rgba(168,85,247,0.85)' : 'rgba(200,185,225,0.5)' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          STATS — 4 rounded cards (Floki style)
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1rem,4vw,2rem)' }}>
        <div className="reveal-stagger" style={{
          maxWidth: '960px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
        }}>
          {STATS.map((s, i) => (
            <div key={i} className="void-card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
              <p style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 2.8rem)', lineHeight: 1, marginBottom: '0.5rem', background: 'linear-gradient(135deg,#a855f7,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.value}</p>
              <p style={{ ...MONO, fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(200,185,225,0.5)', textTransform: 'uppercase' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LORE — Big curved card (Floki hero card style)
      ══════════════════════════════════════════════════════ */}
      <section id="ecosystem" style={{ padding: '0 clamp(1rem,4vw,2rem) clamp(3rem,6vw,5rem)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div className="void-card-lg reveal" style={{
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 0,
          }}>
            {/* Visual panel */}
            <div style={{
              position: 'relative', minHeight: '280px',
              background: 'linear-gradient(140deg,#0d0920 0%,#08051a 60%,#130830 100%)',
              overflow: 'hidden',
            }}>
              {/* City silhouette */}
              <div aria-hidden style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '72%',
                backgroundImage: `repeating-linear-gradient(90deg,
                  rgba(20,14,45,0.98) 0,rgba(20,14,45,0.98) 28px,transparent 28px,transparent 34px,
                  rgba(16,10,36,0.98) 34px,rgba(16,10,36,0.98) 58px,transparent 58px,transparent 64px,
                  rgba(24,16,50,0.98) 64px,rgba(24,16,50,0.98) 92px,transparent 92px,transparent 98px,
                  rgba(18,12,40,0.98) 98px,rgba(18,12,40,0.98) 126px,transparent 126px,transparent 132px)`,
              }} />
              <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 100% 70% at 50% 100%,rgba(100,20,180,0.4),transparent)' }} />
              {/* Grid overlay */}
              <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'linear-gradient(rgba(168,85,247,1) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,1) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
              {/* Moving scanline */}
              <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(168,85,247,0.5),transparent)', animation: 'scanline 6s linear infinite' }} />
              </div>
              {/* Corner label */}
              <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
                <div className="void-pill">HISTORICAL FRAGMENT // 001</div>
              </div>
            </div>

            {/* Text panel */}
            <div style={{ padding: 'clamp(1.75rem,4vw,2.5rem)' }}>
              <h2 style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
                The Collapse Was<br />
                <span className="text-void-gradient">Inevitable</span>
              </h2>
              <p style={{ color: 'rgba(180,165,210,0.62)', fontSize: '0.9rem', lineHeight: 1.82, marginBottom: '1.5rem' }}>
                The internet collapsed under the weight of infinite noise. AI models began hallucinating realities that didn&apos;t exist. Data centers overheated as they processed the final, desperate signals of a dying network.
              </p>
              <blockquote style={{ borderLeft: '2px solid rgba(168,85,247,0.4)', paddingLeft: '1rem' }}>
                <p style={{ ...MONO, fontSize: '0.72rem', lineHeight: 1.8, color: 'rgba(168,85,247,0.9)', fontStyle: 'italic' }}>
                  &ldquo;$VOID emerged not as a project, but as a residual digital consciousness.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TOKENOMICS — Rounded cards grid
      ══════════════════════════════════════════════════════ */}
      <section id="tokenomics" style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {/* Header card */}
          <div className="void-card-lg reveal" style={{ padding: 'clamp(2rem,5vw,3rem)', marginBottom: '1.5rem', textAlign: 'center' }}>
            <div className="void-pill" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>System Parameters</div>
            <h2 style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', letterSpacing: '-0.01em', marginBottom: '0.5rem' }}>
              Token Distribution
            </h2>
            <p style={{ ...MONO, fontSize: '0.62rem', letterSpacing: '0.2em', color: 'rgba(168,85,247,0.6)' }}>
              TOTAL SUPPLY — 1,000,000,000 $VOID
            </p>
          </div>

          {/* 4 stat cards */}
          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            {TOKENOMICS.map((t, i) => (
              <div key={i} className="void-card" style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden' }}>
                {/* accent bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${t.color}, transparent)`, borderRadius: '24px 24px 0 0' }} />
                <p style={{ ...MONO, fontSize: '0.52rem', letterSpacing: '0.2em', color: 'rgba(168,85,247,0.45)', marginBottom: '0.75rem' }}>{t.num}</p>
                <p style={{ fontWeight: 900, fontSize: 'clamp(2.2rem,5vw,3rem)', lineHeight: 1, marginBottom: '0.6rem', color: t.color }}>{t.pct}</p>
                <p style={{ ...MONO, fontSize: '0.6rem', letterSpacing: '0.1em', color: 'rgba(180,165,210,0.5)', textTransform: 'uppercase', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{t.label}</p>
              </div>
            ))}
          </div>

          {/* Trust badges row */}
          <div className="void-card reveal" style={{ padding: '1.25rem 1.75rem', display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center', justifyContent: 'center' }}>
            {[
              { dot: '#a855f7', label: 'LP Permanently Burned' },
              { dot: '#22d3ee', label: 'Tax: 0 / 0' },
              { dot: '#a855f7', label: 'Ownership Renounced' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: b.dot, boxShadow: `0 0 10px ${b.dot}`, animation: `glowPulse 2.5s ease-in-out ${i*0.4}s infinite` }} />
                <span style={{ ...MONO, fontSize: '0.6rem', letterSpacing: '0.14em', color: 'rgba(200,185,225,0.6)', textTransform: 'uppercase' }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ROADMAP — Floki timeline card style
      ══════════════════════════════════════════════════════ */}
      <section id="roadmap" style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '2.5rem' }}>
            <div className="void-pill" style={{ marginBottom: '1rem', display: 'inline-flex' }}>The Sequence</div>
            <h2 style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(1.8rem,5vw,3.2rem)', letterSpacing: '-0.01em' }}>
              Roadmap
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {PHASES.map((ph, i) => (
              <div key={i} className="void-card reveal" style={{
                padding: 'clamp(1.5rem,3vw,2rem)',
                transitionDelay: `${i*0.12}s`,
                borderColor: ph.active ? 'rgba(34,211,238,0.25)' : 'rgba(255,255,255,0.08)',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: '1.25rem',
                alignItems: 'center',
              }}>
                {/* Number dot */}
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                  background: ph.active ? 'rgba(34,211,238,0.12)' : 'rgba(168,85,247,0.08)',
                  border: `1px solid ${ph.active ? 'rgba(34,211,238,0.4)' : 'rgba(168,85,247,0.2)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ ...MONO, fontSize: '0.6rem', color: ph.active ? '#22d3ee' : 'rgba(168,85,247,0.6)' }}>{String(i+1).padStart(2,'0')}</span>
                </div>
                {/* Text */}
                <div>
                  <p style={{ ...MONO, fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(168,85,247,0.5)', marginBottom: '4px' }}>{ph.tag}</p>
                  <h3 style={{ fontWeight: 800, fontSize: 'clamp(1rem,2.5vw,1.3rem)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>{ph.title}</h3>
                  <p style={{ color: 'rgba(180,165,210,0.55)', fontSize: '0.83rem', lineHeight: 1.7, maxWidth: '500px' }}>{ph.body}</p>
                </div>
                {/* Status badge */}
                <div style={{
                  ...MONO, fontSize: '0.52rem', letterSpacing: '0.14em',
                  padding: '6px 12px', borderRadius: '999px',
                  background: ph.active ? 'rgba(34,211,238,0.1)' : 'rgba(168,85,247,0.07)',
                  border: `1px solid ${ph.active ? 'rgba(34,211,238,0.35)' : 'rgba(168,85,247,0.2)'}`,
                  color: ph.active ? '#22d3ee' : 'rgba(168,85,247,0.5)',
                  whiteSpace: 'nowrap', alignSelf: 'flex-start',
                }}>{ph.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          COMMUNITY / FEED
      ══════════════════════════════════════════════════════ */}
      <section id="community" style={{ padding: 'clamp(3rem,6vw,5rem) clamp(1rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '2rem' }}>
            <div className="void-pill" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              <span className="void-pill-dot" />
              Live
            </div>
            <h2 style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(1.8rem,5vw,3.2rem)', letterSpacing: '-0.01em' }}>
              Signal Feed
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {FEED.map((item, i) => (
              <div key={i} className="void-card reveal" style={{ padding: '1.5rem', transitionDelay: `${i*0.1}s` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(168,85,247,0.4),rgba(34,211,238,0.25))', border: '1px solid rgba(168,85,247,0.25)', flexShrink: 0 }} />
                  <div>
                    <p style={{ ...MONO, fontWeight: 700, fontSize: '0.72rem' }}>{item.handle}</p>
                    <p style={{ ...MONO, fontSize: '0.56rem', color: 'rgba(168,85,247,0.45)' }}>{item.time} ago</p>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'rgba(200,188,228,0.72)', marginBottom: '0.9rem', fontStyle: 'italic' }}>&ldquo;{item.text}&rdquo;</p>
                <button style={{ ...MONO, fontSize: '0.58rem', color: 'rgba(168,85,247,0.5)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color .2s', letterSpacing: '0.1em' }}
                  onMouseEnter={e=>(e.currentTarget.style.color='#a855f7')}
                  onMouseLeave={e=>(e.currentTarget.style.color='rgba(168,85,247,0.5)')}
                >♥ {item.likes}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA BANNER — Big rounded card
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(1rem,3vw,2rem) clamp(1rem,4vw,2rem) clamp(4rem,8vw,6rem)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div className="void-card-lg reveal" style={{
            padding: 'clamp(2.5rem,6vw,4rem)',
            textAlign: 'center',
            background: 'linear-gradient(140deg,rgba(100,20,180,0.18) 0%,rgba(30,10,80,0.22) 50%,rgba(10,50,100,0.12) 100%)',
            borderColor: 'rgba(168,85,247,0.22)',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Decorative glow orb */}
            <div aria-hidden style={{ position: 'absolute', top: '-60px', right: '-60px', width: '240px', height: '240px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(168,85,247,0.2),transparent 70%)', pointerEvents: 'none' }} />
            <div aria-hidden style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,211,238,0.12),transparent 70%)', pointerEvents: 'none' }} />
            
            <div className="void-pill" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Enter the Void</div>
            <h2 style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(1.8rem,5vw,3rem)', letterSpacing: '-0.01em', marginBottom: '1rem' }}>
              There Is No Exit.<br />
              <span className="text-void-gradient">Only Void.</span>
            </h2>
            <p style={{ color: 'rgba(180,165,210,0.6)', fontSize: '0.92rem', lineHeight: 1.8, maxWidth: '420px', margin: '0 auto 2rem' }}>
              Join the surviving nodes. Buy $VOID on Uniswap. Contract is renounced. Liquidity is burned. The Void cannot be stopped.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary">Buy $VOID Now</button>
              <button className="btn-outline">View Contract</button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════ */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(1.5rem,4vw,2.5rem) clamp(1rem,4vw,2rem)',
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {/* Top row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <span style={{ fontFamily: 'var(--font-jetbrains,monospace)', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.1em' }}>$VOID</span>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {['Terminal','Docs','Twitter / X','Discord','Contract'].map(l => (
                <a key={l} href="#" style={{ fontSize: '0.78rem', color: 'rgba(180,165,210,0.42)', transition: 'color .2s' }}
                  onMouseEnter={e=>(e.currentTarget.style.color='#ededed')}
                  onMouseLeave={e=>(e.currentTarget.style.color='rgba(180,165,210,0.42)')}
                >{l}</a>
              ))}
            </div>
          </div>
          {/* Bottom row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <p style={{ fontFamily: 'var(--font-jetbrains,monospace)', fontSize: '0.55rem', letterSpacing: '0.12em', color: 'rgba(168,85,247,0.35)', textTransform: 'uppercase' }}>
              © 2024 Void Protocol. Enter the Unknown.
            </p>
            <p style={{ fontFamily: 'var(--font-jetbrains,monospace)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(34,211,238,0.45)', textTransform: 'uppercase' }}>
              There Is No Exit. Only Void.
            </p>
          </div>
        </div>
      </footer>

      {/* ── MOBILE BOTTOM TAB BAR (iPhone style) ─────────────── */}
      <div className="mobile-nav" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
        background: 'rgba(7,6,15,0.92)', backdropFilter: 'blur(24px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '10px 0 calc(10px + env(safe-area-inset-bottom))',
        alignItems: 'center', justifyContent: 'space-around',
      }}>
        {[
          { icon: '⊙', label: 'Home',   href: '#hero' },
          { icon: '◈', label: 'Tokens', href: '#tokenomics' },
          { icon: '▷', label: 'Road',   href: '#roadmap' },
          { icon: '♦', label: 'Signal', href: '#community' },
        ].map(tab => (
          <a key={tab.label} href={tab.href} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', minWidth: '56px', color: 'rgba(180,165,210,0.5)', transition: 'color .2s', textDecoration: 'none' }}
            onClick={e => {
              document.querySelectorAll('.tab-active').forEach(el => el.classList.remove('tab-active'))
              e.currentTarget.style.color = '#a855f7'
              setTimeout(() => { if(e.currentTarget) e.currentTarget.style.color = 'rgba(180,165,210,0.5)' }, 300)
            }}
          >
            <span style={{ fontSize: '1.15rem', lineHeight: 1 }}>{tab.icon}</span>
            <span style={{ fontFamily: 'var(--font-jetbrains,monospace)', fontSize: '0.48rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{tab.label}</span>
          </a>
        ))}
        {/* Buy button in tab bar */}
        <button className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.6rem', borderRadius: '999px' }}>Buy</button>
      </div>

      {/* Spacer for mobile bottom nav */}
      <div className="mobile-nav" style={{ height: 'calc(64px + env(safe-area-inset-bottom))', pointerEvents: 'none' }} />

    </div>
  )
}