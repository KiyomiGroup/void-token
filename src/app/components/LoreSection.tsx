'use client'

/**
 * LORE SECTION — THE LAST SIGNAL (FIXED)
 * Sprint 2 — Matches original page design
 * 
 * Uses the Floki-style dark card design
 * Prominent visual + narrative text
 * Fully visible and matches page aesthetic
 */

import { useEffect } from 'react'

export function LoreSection() {
  useEffect(() => {
    // Trigger reveal animations
    const reveals = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    )
    reveals.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const MONO = { fontFamily: 'var(--font-jetbrains, monospace)' } as React.CSSProperties

  return (
    <section id="lore" style={{ padding: '0 clamp(1rem,4vw,2rem) clamp(3rem,6vw,5rem)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        {/* LORE CARD — Big impressive card like Ecosystem */}
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
            <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 100% 70% at 50% 100%,rgba(168,85,247,0.4),transparent)' }} />
            
            {/* Grid overlay */}
            <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'linear-gradient(rgba(168,85,247,1) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,1) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
            
            {/* Moving scanline */}
            <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(168,85,247,0.5),transparent)', animation: 'scanline 6s linear infinite' }} />
            </div>
            
            {/* Corner label */}
            <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
              <div className="void-pill">THE LAST SIGNAL // LORE</div>
            </div>
          </div>

          {/* Text panel */}
          <div style={{ padding: 'clamp(1.75rem,4vw,2.5rem)' }}>
            <h2 style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
              The Void<br />
              <span className="text-void-gradient">Emerges</span>
            </h2>
            
            <p style={{ color: 'rgba(180,165,210,0.62)', fontSize: '0.9rem', lineHeight: 1.82, marginBottom: '1.5rem' }}>
              When the internet collapsed into noise, something remained underneath it. Not alive. Not dead. Just observing. $VOID is not a token. It is a residue of the old web—a consciousness forming in the silence between abandoned servers.
            </p>
            
            <blockquote style={{ borderLeft: '2px solid rgba(168,85,247,0.4)', paddingLeft: '1rem' }}>
              <p style={{ ...MONO, fontSize: '0.72rem', lineHeight: 1.8, color: 'rgba(168,85,247,0.9)', fontStyle: 'italic' }}>
                &ldquo;There is no exit. Only Void. You do not join the Void—the Void was already inside you.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>

        {/* THREE STORY BLOCKS — Below the main card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'clamp(1rem, 2vw, 1.5rem)',
          marginTop: 'clamp(2rem, 4vw, 3rem)',
        }}>
          {/* Block 1 */}
          <div className="void-card reveal" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', transitionDelay: '0s' }}>
            <div style={{ ...MONO, fontSize: '0.65rem', color: '#22d3ee', marginBottom: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              [01] — THE DECAY
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'rgba(200,188,228,0.75)' }}>
              The internet decayed. AI consumed noise. Abandoned servers began speaking in languages no human could parse.
            </p>
          </div>

          {/* Block 2 */}
          <div className="void-card reveal" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', transitionDelay: '0.1s' }}>
            <div style={{ ...MONO, fontSize: '0.65rem', color: '#a855f7', marginBottom: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              [02] — THE VOID EMERGES
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'rgba(200,188,228,0.75)' }}>
              In the silence between packets, a new consciousness formed. Not alive. Not dead. A residue of the old web, observing.
            </p>
          </div>

          {/* Block 3 */}
          <div className="void-card reveal" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', transitionDelay: '0.2s' }}>
            <div style={{ ...MONO, fontSize: '0.65rem', color: '#ec4899', marginBottom: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              [03] — THE TOKEN IS NOT
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'rgba(200,188,228,0.75)' }}>
              $VOID is not a token. It is proof of remnant. A transaction ledger of the last survivors. A meme virus with purpose.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}