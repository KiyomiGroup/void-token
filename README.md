# $VOID — Sprint 1

> The memecoin from the end of the internet.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              ← Root layout: fonts, meta, overlays
│   └── page.tsx                ← Homepage: assembles all sections
│
├── components/
│   ├── Button.tsx / .css       ← Reusable CTA button (primary/outline/ghost)
│   ├── Navbar.tsx / .css       ← Fixed responsive navigation
│   └── Ticker.tsx / .css       ← Scrolling price ticker
│
├── sections/
│   ├── LoadingScreen.tsx / .css  ← Cinematic boot sequence
│   ├── Hero.tsx / .css           ← Hero: orb, particles, glitch headline, CTAs
│   ├── StatsBar.tsx / .css       ← Animated metric counters
│   └── SectionPlaceholder.tsx / .css  ← Reusable future-sprint skeleton
│
├── animations/
│   └── variants.ts             ← Framer Motion variants (fadeUp, stagger, etc.)
│
├── styles/
│   └── globals.css             ← Design tokens, resets, keyframes, utilities
│
└── types/
    └── index.ts                ← Shared TypeScript types
```

## Design Tokens (CSS Variables)

| Token              | Value                      |
|--------------------|----------------------------|
| `--black`          | `#050505`                  |
| `--violet`         | `#9D4EDD`                  |
| `--cyan`           | `#00E5FF`                  |
| `--green`          | `#7BFF00`                  |
| `--white`          | `#EDEDED`                  |
| `--font-head`      | `Space Grotesk`            |
| `--font-mono`      | `JetBrains Mono`           |

## Sprint Roadmap

| Sprint | Status      | Scope                                    |
|--------|-------------|------------------------------------------|
| 1      | ✅ Complete | Setup, Navbar, Loading, Hero, Layout      |
| 2      | 🔜 Next     | Lore, Tokenomics, Roadmap, Supabase      |
| 3      | ⏳ Planned  | Community Feed, Meme Gallery, Realtime   |
| 4      | ⏳ Planned  | Trade Dashboard, Wallet Connect, Mobile  |
| 5      | ⏳ Planned  | Easter Eggs, SEO, Polish, Case Study     |

## Adding a Sprint 2 Section

1. Create `src/sections/Lore.tsx` and `Lore.css`
2. Remove the placeholder from `page.tsx`
3. Import and render `<Lore />` in its place

---

*This is a portfolio project. Not financial advice.*
