/**
 * StatsBar.tsx — Key metrics strip below hero
 * src/sections/StatsBar.tsx
 *
 * Features:
 *   - 4 stat tiles: Market Cap, Supply, Holders, Vibes
 *   - Count-up animation triggered by IntersectionObserver
 */

'use client'

import React, { useEffect, useRef, useState } from 'react'
import './StatsBar.css'

interface Stat {
  value:    number
  prefix?:  string
  suffix?:  string
  label:    string
  display?: string   // if set, shows this string instead of counting
}

const STATS: Stat[] = [
  { value: 4200000, prefix: '$', label: 'Market Cap'    },
  { value: 0,       display: '1B',  label: 'Total Supply' },
  { value: 12847,   label: 'Holders'                     },
  { value: 0,       display: '∞',  label: 'Vibes'        },
]

/* Eased count-up hook */
function useCountUp(target: number, duration = 2000, active = false) {
  const [val, setVal] = useState(0)
  const raf = useRef<number>(0)

  useEffect(() => {
    if (!active || target === 0) return
    let start: number | null = null

    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setVal(Math.floor(ease * target))
      if (progress < 1) raf.current = requestAnimationFrame(step)
    }

    raf.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf.current)
  }, [active, target, duration])

  return val
}

function StatTile({ stat }: { stat: Stat }) {
  const [active, setActive] = useState(false)
  const ref   = useRef<HTMLDivElement>(null)
  const count = useCountUp(stat.value, 2200, active)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setActive(true); io.disconnect() }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const displayValue = stat.display
    ? stat.display
    : `${stat.prefix ?? ''}${count.toLocaleString()}${stat.suffix ?? ''}`

  return (
    <div className="stat" ref={ref}>
      <span className="stat__value">{displayValue}</span>
      <span className="stat__label">{stat.label}</span>
    </div>
  )
}

export default function StatsBar() {
  return (
    <div className="stats-bar" role="region" aria-label="Key statistics">
      {STATS.map(stat => (
        <StatTile key={stat.label} stat={stat} />
      ))}
    </div>
  )
}
