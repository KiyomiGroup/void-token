/**
 * Navbar.tsx — Fixed responsive navigation
 * src/components/Navbar.tsx
 *
 * Features:
 *   - Glassmorphism backdrop blur
 *   - Scroll-aware background opacity
 *   - Mobile hamburger with animated lines
 *   - Hover underline on nav links
 *   - BUY $VOID ghost CTA
 */

'use client'

import React, { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Lore',        href: '#lore'        },
  { label: 'Tokenomics',  href: '#tokenomics'  },
  { label: 'Roadmap',     href: '#roadmap'      },
  { label: 'Community',   href: '#community'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Detect scroll for background opacity change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on link click
  const handleLinkClick = () => setMobileOpen(false)

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <a href="#" className="navbar__logo" aria-label="$VOID home">
        $<span className="navbar__logo-accent">VOID</span>
      </a>

      {/* Desktop links */}
      <ul
        className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}
        role="list"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="navbar__link"
              onClick={handleLinkClick}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#" className="navbar__cta" aria-label="Buy $VOID token">
        BUY $VOID
      </a>

      {/* Mobile hamburger */}
      <button
        className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
        onClick={() => setMobileOpen(prev => !prev)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </nav>
  )
}
