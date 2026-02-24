# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server (host: 0.0.0.0, port: 5173)
- `npm run build` — Production build (outputs to `dist/`)
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint

No test framework is configured.

## Architecture

Single-page marketing/portfolio site for "Zae Zur" built with **React 18 + Vite + Tailwind CSS**. Pure JavaScript (no TypeScript). No routing, no backend, no state management — all content is hardcoded JSX.

### Component Layout

`App.jsx` renders sections in order: Navbar → Hero → Features → Philosophy → Protocol → GetStarted → Footer. Each component is a full-viewport section with scroll-based navigation via anchor links (`#services`, `#philosophy`, `#protocol`, `#contact`).

### Animation System

GSAP with ScrollTrigger drives all animations. Pattern used throughout:
- Register `ScrollTrigger` at component top
- Create animations inside `useEffect` wrapped in `gsap.context()` for scoping
- Return `context.revert()` in cleanup to prevent memory leaks
- Use `useRef` for DOM element references
- Target elements via class selectors (`.hero-anim`, `.split-word`, `.feature-card`)

`Features.jsx` contains three self-contained micro-interactions (shuffler, typewriter, scheduler) using `setInterval` timers — always cleaned up on unmount.

### Tailwind Theme

Custom design tokens in `tailwind.config.js`:
- **Colors**: `primary` (#2E4036 dark green), `accent` (#CC5833 burnt orange), `background` (#F2F0E9 cream), `dark` (#1A1A1A)
- **Fonts**: `font-sans` (Plus Jakarta Sans) for body, `font-drama` (Cormorant Garamond) for headlines, `font-mono` (IBM Plex Mono) for technical/label text
- **Easing**: `ease-magnetic` and `ease-bounce` custom cubic-beziers

Fonts are loaded via Google Fonts in `index.html`, which also defines a global SVG noise filter and overlay div for texture.

### Key Libraries

- **gsap** + **@gsap/react** — All scroll-triggered and timeline animations
- **lucide-react** — SVG icons
