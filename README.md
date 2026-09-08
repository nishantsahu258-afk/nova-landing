# NOVA — AI Productivity Platform Landing Page

A fully responsive, modern marketing landing page for **NOVA**, a fictional AI
productivity platform, built for the Front-End Development Intern assignment.

**Live demo:** [https://nova-landing-orpin.vercel.app/](https://nova-landing-orpin.vercel.app/)

**Repository:** [https://github.com/nishantsahu258-afk/nova-landing](https://github.com/nishantsahu258-afk/nova-landing)

---

## Project description

NOVA is positioned as an AI-powered productivity platform ("Build Better.
Work Smarter.") that automates project tracking for teams. The page is a
single-page marketing site covering everything from the hero through
pricing and FAQ, built to look and feel like a real product's website
rather than a tutorial layout.

## Technologies used

- **React 19** — component structure and UI state (accordion, carousel, theme, etc.)
- **Vite** — dev server and production build tooling
- **Tailwind CSS 3** — utility-first styling, dark mode via the `class` strategy
- **lucide-react** — lightweight icon set
- Plain CSS (`index.css`) for global tokens, base styles and reduced-motion handling

No UI kit (MUI, shadcn, etc.) is used — every component is hand-built so the
markup and styling stay simple to read and explain.

## Features

**All 13 required sections:** Navbar, Hero, Trusted By, Features (6),
Product/About, How It Works, Stats, Solutions, Testimonials (4), Pricing (3
plans), FAQ (6 questions), Final CTA, Footer.

**All required interactions:**
- Responsive navigation with working anchor links
- Mobile hamburger menu (slide-down panel, closes on link click)
- Smooth scrolling (CSS `scroll-behavior: smooth`)
- FAQ accordion (single-open, animated height, keyboard accessible)
- Button and card hover effects throughout

**Bonus features implemented (8 / 8 complete):**
- **Dark / light mode toggle** (persisted in `localStorage`, respects OS preference on first visit)
- **Animated statistics** that count up when scrolled into view (`IntersectionObserver` + easing curve)
- **Scroll animations & micro-interactions** (button hovers, card outlines, smooth scrolling)
- **Testimonial carousel** (auto-advances every 6s, pauses on hover, dot + arrow navigation)
- **Monthly / annual pricing toggle** with automatic discount calculation (~20% savings)
- **Interactive Demo Modal** (interactive 2-min simulated walkthrough, tabbed views, playback controls, keyboard Escape + backdrop dismiss)
- **Newsletter email validation** in the footer (inline error/success states, RFC regex check, no alerts)
- **Back-to-top button** that appears after scrolling past the hero
- **Accessibility skip-to-content link** for keyboard/screen-reader navigation

## Design decisions

The brand name NOVA (a sudden burst of light) inspired the one bold visual
moment in the hero — a soft radiating glow behind a live-looking product
panel — while every other section stays visually quiet and disciplined so
that moment stands out. Typography pairs **Space Grotesk** (headlines) with
**Inter** (body copy) for a technical-but-approachable feel. The palette is
a near-black ink, warm paper/cream neutrals, and a single amber "signal"
accent color used sparingly for emphasis (buttons, icons, active states)
rather than washing every section in gradients.

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
  `footer`), visible focus rings (`:focus-visible` in `index.css`),
  `aria-expanded`/`aria-controls` on the accordion and mobile menu button,
  `aria-label`s on icon-only buttons, and a `prefers-reduced-motion` media
  query that disables animation/transition durations.
- **How I'd improve accessibility further:** add a skip-to-content link,
  run an automated audit (axe/Lighthouse), verify color contrast in both
  themes against WCAG AA, and add live-region announcements for the
  carousel and newsletter form status.
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
