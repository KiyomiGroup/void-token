/**
 * LoadingScreen.tsx — Cinematic boot sequence
 * src/sections/LoadingScreen.tsx
 *
 * Features:
 *   - Sequenced terminal messages with timing
 *   - Progress bar fill animation
 *   - Blinking cursor
 *   - Fades out and unmounts after complete
 *   - Calls onComplete callback so parent can react
 */

'use client'

import React, { useState, useEffect } from 'react'
import './LoadingScreen.css'

const BOOT_LINES = [
  'BOOTING NODE...',
  'SCANNING INTERNET ARCHIVES...',
  'SIGNAL FOUND.',
  'THE VOID IS ACTIVE.',
]

const LINE_DELAY_MS  = 900   // time between each line appearing
const HOLD_AFTER_MS  = 600   // hold on last line before fade

interface LoadingScreenProps {
  onComplete?: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [activeIdx,    setActiveIdx]    = useState(0)
  const [done,         setDone]         = useState(false)

  useEffect(() => {
    let lineIdx = 0

    const showNext = () => {
      if (lineIdx >= BOOT_LINES.length) {
        // All lines shown — begin exit
        setTimeout(() => {
          setDone(true)
          onComplete?.()
        }, HOLD_AFTER_MS)
        return
      }

      setVisibleLines(prev => [...prev, lineIdx])
      setActiveIdx(lineIdx)
      lineIdx++
      setTimeout(showNext, LINE_DELAY_MS)
    }

    // Small initial delay so first frame renders
    const startTimer = setTimeout(showNext, 400)
    return () => clearTimeout(startTimer)
  }, [onComplete])

  return (
    <div
      className={`loader ${done ? 'loader--done' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading $VOID"
    >
      {/* Logo mark */}
      <div className="loader__logo" aria-hidden="true">
        $VOID<span className="loader__cursor" />
      </div>

      {/* Terminal lines */}
      <div className="loader__lines">
        {BOOT_LINES.map((line, i) => (
          <div
            key={line}
            className={[
              'loader__line',
              visibleLines.includes(i) ? 'loader__line--visible' : '',
              activeIdx === i         ? 'loader__line--active'  : '',
            ].filter(Boolean).join(' ')}
            aria-hidden={!visibleLines.includes(i)}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="loader__bar" role="progressbar" aria-valuenow={visibleLines.length} aria-valuemax={BOOT_LINES.length}>
        <div
          className="loader__bar-fill"
          style={{ width: `${(visibleLines.length / BOOT_LINES.length) * 100}%` }}
        />
      </div>
    </div>
  )
}
