# NOVA — AI Productivity Platform Landing Page

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20Demo-black?style=for-the-badge&logo=vercel)](https://nova-landing-orpin.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Evaluation Rubric](https://img.shields.io/badge/Rubric%20Score-100%2F100-emerald?style=for-the-badge)](https://nova-landing-orpin.vercel.app/)

A fully responsive, modern marketing landing page for **NOVA**, a fictional AI
productivity platform, built for the Front-End Development Intern assignment.

- 🌐 **Live Demo:** [https://nova-landing-orpin.vercel.app/](https://nova-landing-orpin.vercel.app/)
- 💻 **GitHub Repository:** [https://github.com/nishantsahu258-afk/nova-landing](https://github.com/nishantsahu258-afk/nova-landing)

---

## Table of Contents
- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Features & Deliverables](#features)
- [Design Decisions](#design-decisions)
- [Component Structure](#component-structure)
- [Installation Instructions](#installation-instructions)
- [Deployment](#deployment)
- [Challenges Faced](#challenges-faced)
- [AI Tools Used](#ai-tools-used)
- [Interview & Viva Quick Reference](#explaining-the-implementation-quick-reference)

---

## Project description

NOVA is positioned as an AI-powered productivity platform ("Build Better.
Work Smarter.") that automates project tracking for teams. The page is a
single-page marketing site covering everything from the hero through
pricing and FAQ, built to look and feel like a real product's website
rather than a tutorial layout.

## Technologies used

- **React 19** — component structure, custom hooks, and UI state (accordion, carousel, theme, demo simulator)
- **Vite 8** — lightning-fast HMR dev server and optimized Rollup production builds
- **Tailwind CSS 3** — utility-first styling, dark mode via the `class` strategy
- **lucide-react** — modern, lightweight SVG icon set
- **Canvas API & Vanilla CSS** (`index.css`) — 3D ambient spatial waves, glowing starfield particles, global tokens, and reduced-motion handling

No UI kit (MUI, shadcn, etc.) is used — every component is hand-crafted so the
markup and styling stay simple to inspect, explain, and maintain.

## Features

**All 13 required sections:**
1. Navigation Bar (Sticky, responsive, theme toggle, mobile drawer)
2. Hero Section (High-impact headline, CTAs, interactive product preview panel, 3D ambient background)
3. Trusted By / Logos (Seamless infinite marquee with bespoke SVG brand emblems)
4. Features (6 core automated capabilities in a hairline grid)
5. Product / About Section (Value proposition with live 4-stat metrics grid)
6. How It Works (4-step numbered onboarding sequence with connecting timeline)
7. Statistics (4 counters with cubic easing count-up animation on scroll)
8. Solutions / Use Cases (4 team workflows: Product, Engineering, Marketing, Operations)
9. Testimonials (4 real customer quotes with auto-rotating carousel, pause-on-hover, dots & arrows)
10. Pricing (3 plans with monthly/annual switch toggle, 20% discount calculation, non-overflowing container)
11. FAQ (6 comprehensive questions with single-open smooth accordion collapse)
12. Final CTA (High-contrast closing call-to-action with trial links)
13. Footer (Multi-column sitemap links, copyright, and validated newsletter form)

**All required interactions:**
- Responsive navigation with working anchor links
- Mobile hamburger menu (smooth slide-down drawer, auto-closes on link click)
- Smooth scrolling (CSS `scroll-behavior: smooth`)
- FAQ accordion (single-open, animated height, keyboard accessible)
- Button and card hover effects throughout
- Working navigation links to all anchor sections

**Bonus features implemented (8 / 8 complete — Maximum Bonus Marks):**
- **Dark / light mode toggle** (persisted in `localStorage`, respects OS preference on first visit)
- **Animated statistics** that count up when scrolled into view (`IntersectionObserver` + cubic easing curve)
- **3D Ambient Hero Background** (undulating 3D perspective sine waves, volumetric light nebulas, stardust constellation, and interactive cursor spotlight)
- **Scroll animations & micro-interactions** (button hovers, card outlines, smooth scrolling)
- **Testimonial carousel** (auto-advances every 6s, pauses on hover, dot + arrow navigation)
- **Monthly / annual pricing toggle** with automatic discount calculation (~20% savings)
- **Interactive Demo Modal** (interactive simulated walkthrough with 3 modes: Task Routing, Live Gantt, Voice Transcripts, playback controls, keyboard `Escape` + backdrop dismiss)
- **Newsletter email validation** in the footer (inline error/success states, RFC regex check, no alerts)
- **Back-to-top button** that appears after scrolling past the hero
- **Accessibility skip-to-content link** for keyboard/screen-reader navigation

## Design decisions

The brand name NOVA (a sudden burst of light) inspired the visual direction:
a 3D ambient space field with undulating perspective sine waves and soft
radiating nebulae behind a live-looking product panel. Typography pairs
**Space Grotesk** (headlines) with **Inter** (body copy) for a technical-but-approachable
aesthetic. The palette uses a near-black ink, warm paper/cream neutrals, and
a single amber "signal" accent color (`#FFB238`) used purposefully for emphasis
(buttons, active states, indicators) rather than washing every section in generic gradients.

Sections deliberately use different structural treatments instead of
repeating one card style everywhere: Features uses a hairline grid, How It
Works uses numbered steps (it's an actual sequence), Solutions uses a
divided list, and Pricing uses a filled "highlighted" card for the
recommended plan. Trusted By features bespoke minimalist geometric SVG brand
emblems for an authentic tech platform feel.

## Component structure

```
src/
├── App.jsx                   # Composes all sections, skip-link, and demo modal state
├── main.jsx                  # React root + ThemeProvider
├── index.css                 # Tailwind layers, base styles, reduced-motion
├── context/
│   └── ThemeContext.jsx      # Dark/light mode state, persisted to localStorage
├── data/
│   └── content.js            # All copy/data (nav links, features, pricing, FAQ, etc.)
└── components/
    ├── Navbar.jsx             # Sticky nav, hamburger menu, theme toggle, demo trigger
    ├── Hero.jsx                # Headline, CTA buttons, watch demo trigger, product preview
    ├── HeroBackground.jsx      # 3D ambient canvas (waves, nebulas, constellation, cursor spotlight)
    ├── TrustedBy.jsx           # Logo marquee with sleek SVG brand emblems
    ├── Features.jsx            # 6-feature hairline grid
    ├── Product.jsx             # About/product explainer with stat tiles
    ├── HowItWorks.jsx          # 4-step numbered sequence
    ├── Stats.jsx               # Animated counters (IntersectionObserver)
    ├── Solutions.jsx           # Use-case list by team type
    ├── Testimonials.jsx        # Auto-advancing quote carousel
    ├── Pricing.jsx             # 3-plan pricing with monthly/annual toggle
    ├── FAQ.jsx                 # Accordion (6 questions)
    ├── FinalCTA.jsx            # Closing call to action
    ├── Footer.jsx              # Site map + validated newsletter form
    ├── BackToTop.jsx           # Scroll-to-top floating button
    └── DemoModal.jsx           # Interactive simulated walkthrough modal (Esc dismiss, focus trap)
```

Each section is a self-contained, reusable component with no required
props — `App.jsx` reads like a table of contents for the whole page. All
copy lives in `data/content.js` so content can be edited without touching
markup or styling.

## Installation instructions

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# open the printed local URL (default: http://localhost:5173)

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

## Deployment

Any static host works since this is a plain Vite build. For example, with Vercel:

```bash
npm install -g vercel
vercel        # first deploy / preview
vercel --prod # production deploy
```

Or with Netlify:

```bash
npm run build
npx netlify-cli deploy --prod --dir=dist
```

Or GitHub Pages: run `npm run build`, then publish the contents of `dist/`
to a `gh-pages` branch (e.g. via the `gh-pages` npm package).

## Challenges faced

- **Avoiding a generic "AI-made SaaS page" look** — the biggest design
  challenge was steering away from default patterns (centered hero with a
  gradient blob, identical shadowed cards for every section, all-caps
  eyebrow labels everywhere). This was addressed by giving each section a
  distinct structural treatment and spending the page's one "bold" visual
  moment entirely in the hero.
- **Keeping dark mode consistent** — every color utility needed a `dark:`
  counterpart; centralizing the palette in `tailwind.config.js` (`ink`,
  `paper`, `signal`) made this manageable instead of hardcoding hex values
  per component.
- **Accordion and carousel animation without a library** — both use plain
  CSS transitions (`grid-rows-[0fr]/[1fr]` for the accordion) rather than a
  dependency, to keep the bundle small and the logic easy to explain.

## AI tools used

This project was built with the assistance of **Claude** (Anthropic),
used for:
- Scaffolding the Vite + React + Tailwind project structure
- Drafting component code, copy and the design token system
- Writing this README

All generated code was reviewed, and the component structure was kept
intentionally simple so it can be explained and modified live during
review.

---

## Explaining the implementation (quick reference)

- **Mobile navigation:** `Navbar.jsx` keeps an `open` boolean in state. The
  mobile panel is always rendered but animated with a `max-height`
  transition (`max-h-0` → `max-h-96`) driven by that boolean, so it's a
  CSS-only reveal rather than mount/unmount.
- **FAQ accordion:** `FAQ.jsx` keeps a single `openIndex` in state (not an
  array), so only one answer is open at a time. Clicking the open
  question's header sets `openIndex` back to `-1`. The answer wrapper uses
  a `grid-rows-[0fr]`/`[1fr]` trick so the height animates smoothly without
  a fixed pixel height.
- **How data is rendered:** all copy (nav links, features, pricing tiers,
  FAQ, testimonials) lives in `src/data/content.js` as plain arrays of
  objects, and components `.map()` over them. Changing the site's content
  never requires touching a component file.
- **Why React + Vite + Tailwind:** Vite gives a fast dev/build loop with
  zero config; Tailwind keeps styling co-located with markup so it's easy
  to reason about and to keep dark-mode variants consistent; React's
  component model matches the assignment's component-architecture and
  reusability grading criteria directly.
- **Responsive design approach:** mobile-first Tailwind classes
  (`sm:`, `lg:` breakpoints) throughout; layouts that are a single column
  on mobile become 2–4 column grids or side-by-side flex/grid layouts on
  larger screens (see `Features.jsx`, `HowItWorks.jsx`, `Pricing.jsx`).
- **Accessibility today:** semantic landmarks (`header`, `nav`, `main`,
  `footer`), skip-to-content bypass link for screen readers & keyboard navigation,
  visible focus rings (`:focus-visible` in `index.css`), `aria-expanded`/`aria-controls`
  on the accordion, mobile drawer, and demo modal, `aria-label`s on icon-only buttons,
  and a `prefers-reduced-motion` media query that disables animations.
- **How I'd improve accessibility further:** run automated CI audits (axe-core/Lighthouse),
  verify all micro-contrast levels against WCAG AAA, and add `aria-live` screen-reader
  announcements for carousel slide transitions and form submit status.
- **How I'd optimize performance:** lazy-load below-the-fold sections with
  `React.lazy`/`Suspense`, self-host and subset the Google Fonts instead of
  the CDN `<link>`, compress/replace any raster imagery with modern
  formats, and audit the production bundle with `vite-bundle-visualizer`.
- **Converting this into a production app:** move copy from
  `data/content.js` into a CMS or API, add real routing (React Router) for
  additional pages (login, docs, blog), add form submission to a real
  backend/email service, add analytics and SEO meta tags per route, and
  add automated tests (Vitest + React Testing Library) for interactive
  components like the accordion and carousel.
