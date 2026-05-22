# CLAUDE.md — Web Portfolio

## Project Overview

Personal developer portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Deployed as a static site to GitHub Pages at the `/web-portfolio/` base path.

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 14.2.5 | Framework (App Router, static export) |
| TypeScript | ^5 | Strict mode enabled |
| Tailwind CSS | ^3.4 | Styling with custom config |
| Framer Motion | ^11 | Animations and drag interactions |
| tailwind-merge | ^2 | Safe className merging |
| @svgr/webpack | ^8 | SVG-as-React-component imports |

## Directory Structure

```
web-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout: fonts (Inter/Calistoga), global bg
│   │   ├── page.tsx          # Home page: section composition
│   │   └── globals.css       # Base styles: .nav-item, .hero-ring, container override
│   ├── sections/             # Full-page sections (server components by default)
│   │   ├── Header.tsx        # Fixed pill-nav, "use client"
│   │   ├── Hero.tsx          # Hero with orbiting icons, "use client"
│   │   ├── Projects.tsx      # Sticky-stacked project cards
│   │   ├── Tape.tsx          # Infinite marquee of keywords
│   │   ├── About.tsx         # Toolbox, hobbies drag board, map, "use client"
│   │   ├── Contact.tsx       # CTA banner
│   │   ├── Footer.tsx        # Social links
│   │   └── WorkExperience.tsx # Work history, used in src/app/about/page.tsx
│   ├── components/           # Reusable UI primitives
│   │   ├── Card.tsx          # Dark card with grain texture + outline ring
│   │   ├── CardHeader.tsx    # Star icon + title + description header
│   │   ├── SectionHeader.tsx # Eyebrow + h2 title + description
│   │   ├── HeroOrbit.tsx     # Orbital animation wrapper
│   │   ├── ToolboxItems.tsx  # Infinite-scroll tech icon strip
│   │   └── TechIcon.tsx      # SVG icon with emerald→sky gradient fill
│   └── assets/
│       ├── images/           # PNG/JPG assets (projects, memojis, map, grain)
│       └── icons/            # SVG icons (imported as React components)
├── utils/
│   └── motion.ts             # Framer Motion variant helpers (slide in/out)
├── public/                   # Static files served at root
├── .github/workflows/
│   └── nextjs.yml            # CI/CD: build + deploy to GitHub Pages on push to main
├── next.config.mjs           # SVG handling via @svgr/webpack
├── tailwind.config.ts        # Custom breakpoints, animations, fonts
├── tsconfig.json             # Strict TS, @/* path alias
└── postcss.config.mjs
```

## Path Aliases

`@/*` maps to `./src/*`. Always use this alias for imports inside `src/`.

```ts
import { Card } from "@/components/Card";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
```

## SVG Imports

SVGs are handled by `@svgr/webpack`. There are two import modes:

```ts
// As a React component (default) — use for inline SVGs with className/style props
import StarIcon from "@/assets/icons/star.svg";
<StarIcon className="size-6 text-emerald-300" />

// As a URL string — append ?url suffix
import grainImage from "@/assets/images/grain.jpg?url";
```

## Fonts

Two Google Fonts are loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables:

- `--font-sans` → Inter (used for body text, `font-sans`)
- `--font-serif` → Calistoga (used for headings, `font-serif`)

## Tailwind Configuration

### Custom Breakpoints (override Tailwind defaults)

```
sm  → 375px
md  → 768px
lg  → 1200px
```

### Custom Animations

| Class | Description |
|---|---|
| `animate-ping-large` | Scale-to-3x ping for status indicator |
| `animate-move-left` | Continuous left scroll (1s — use inline `animation-duration` to override) |
| `animate-move-right` | Continuous right scroll |
| `animate-move-left-image` | Slow left scroll (30s built-in) |
| `animate-move-right-image` | Slow right scroll (30s built-in) |
| `animate-move-to-top` | Slide out upward |

Override duration inline: `animate-move-left [animation-duration:30s]`

### Global CSS Classes

- `.hero-ring` — centered absolute circle with emerald glow shadow
- `.nav-item` — pill nav item with hover state
- `.container` — capped at `lg:max-w-5xl` (overrides Tailwind default)

## Design Conventions

### Color Palette

- Background: `bg-gray-900` (body), `bg-gray-800` (cards), `bg-gray-950` (accents)
- Accent gradient: `from-emerald-300 to-sky-400` (used on eyebrows, CTAs, tags)
- Text: `text-white`, `text-white/60` (muted), `text-white/40` (subtle)
- Borders: `border-white/15`, `outline-white/20`

### Component Patterns

**Card** — use for all content panels. Includes grain texture overlay and inset outline ring automatically. Pass `className` to override padding/sizing:
```tsx
<Card className="px-8 pt-8 pb-0">...</Card>
```

**SectionHeader** — standard section intro. Always takes `eyebrow`, `title`, `description`:
```tsx
<SectionHeader eyebrow="Label" title="Main Heading" description="..." />
```

**CardHeader** — for cards with a star icon + title block:
```tsx
<CardHeader title="My Reads" description="Short description" />
```

**TechIcon** — renders an SVG component with the emerald→sky gradient fill. Wrap any icon component:
```tsx
<TechIcon component={JavascriptIcon} />
```

### Client vs Server Components

- Add `"use client"` only when needed: `useState`, `useRef`, `useRouter`, Framer Motion `motion.*`, drag interactions.
- `Hero.tsx` and `About.tsx` are client components. `Projects.tsx`, `Tape.tsx`, `Contact.tsx`, `Footer.tsx` are server components.

## Development Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build (static export)
npm run start     # Start production server
npm run lint      # ESLint (next/core-web-vitals config)
```

## Deployment

- **Platform**: GitHub Pages
- **Trigger**: Push to `main` branch
- **Workflow**: `.github/workflows/nextjs.yml` — builds with `next build`, uploads `./out` artifact, deploys via `actions/deploy-pages`
- **Base path**: The site is served under `/web-portfolio/`. Navigation links in `Header.tsx` hard-code this prefix.

## Navigation / Routing

The Header uses hash-based anchor links for in-page navigation. Sections declare `id` attributes:

| Section | id |
|---|---|
| HeroSection | `home` |
| ProjectsSection | `projects` |
| AboutSection | (none currently) |
| ContactSection | `contact` |

The "Resume" nav item links to an external Google Drive PDF.

## Additional Pages

Besides the main portfolio (`src/app/page.tsx`), there is an About page:

- `src/app/about/page.tsx` — personal bio, work experience, and photo gallery; uses `WorkExperience` section

## Framer Motion Utilities (`utils/motion.ts`)

Pre-built animation variants for page elements:

```ts
slideInFromLeft(delay)   // x: -100 → 0
slideInFromRight(delay)  // x: 100 → 0
slideInFromTop           // y: -100 → 0
slideInFromBottom        // y: 100 → 0
```

Use with `motion` elements:
```tsx
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/../../utils/motion";

<motion.div variants={slideInFromLeft(0.2)} initial="hidden" animate="visible">
```

Note: `utils/motion.ts` is outside `src/`, so it cannot use the `@/` alias. Import with a relative path.

## Assets Reference

**Images** (`src/assets/images/`): `memoji-computer.png`, `memoji-smile.png`, `memoji-avatar-1..5.png`, `grain.jpg`, `map.png`, `book-cover.png`, `vdental.png`, `lothashop.png`, `psa.png`, and additional project/bg images.

**Icons** (`src/assets/icons/`): `star.svg`, `sparkle.svg`, `arrow-down.svg`, `arrow-up-right.svg`, `check-circle.svg`, `square-js.svg`, `html5.svg`, `css3.svg`, `react.svg`, `chrome.svg`, `github.svg`.

## Key Constraints

- No test suite — validate changes visually via `npm run dev`
- TypeScript strict mode is on; no implicit `any`
- `tailwind-merge` (`twMerge`) must be used whenever merging classNames to avoid conflicts
- The `container` class is overridden to `lg:max-w-5xl` — do not use raw `max-w-*` on container divs
- SVG files must not be placed in `public/` if they need to be used as React components — keep them in `src/assets/icons/`
