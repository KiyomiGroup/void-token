/**
 * Ticker.tsx — Scrolling price ticker bar
 * src/components/Ticker.tsx
 *
 * Features:
 *   - Infinite horizontal scroll (items duplicated)
 *   - Color-coded delta (green = up, red = down)
 *   - Pauses on hover
 */

import React from 'react'
import './Ticker.css'

interface TickerItem {
  symbol: string
  price:  string
  delta:  string
  up:     boolean
}

const ITEMS: TickerItem[] = [
  { symbol: '$VOID', price: '0.0042',        delta: '+420%',  up: true  },
  { symbol: '$BTC',  price: '98,241.00',     delta: '+1.2%',  up: true  },
  { symbol: '$ETH',  price: '3,142.55',      delta: '-0.8%',  up: false },
  { symbol: '$DOGE', price: '0.3401',        delta: '+12.4%', up: true  },
  { symbol: '$PEPE', price: '0.0000124',     delta: '+69.0%', up: true  },
  { symbol: '$SOL',  price: '175.22',        delta: '-2.1%',  up: false },
  { symbol: '$VOID', price: '0.0042',        delta: 'TO THE VOID ∞', up: true },
]

export default function Ticker() {
  // Duplicate items to create seamless infinite loop
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="ticker" aria-label="Live price ticker" role="marquee">
      <div className="ticker__track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker__item">
            <span className="ticker__symbol">{item.symbol}</span>
            <span className="ticker__price">${item.price}</span>
            <span className={`ticker__delta ${item.up ? 'ticker__delta--up' : 'ticker__delta--down'}`}>
              {item.delta}
            </span>
            <span className="ticker__sep" aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
