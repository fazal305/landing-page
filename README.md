# Fazal Abbas — Landing Page

Personal credibility and freelance-services landing page for Fazal Abbas — React + Vite, built from real projects only.

No fabricated testimonials, clients, statistics, or screenshots. Selected Work links to real repositories and, where available, real live deployments; where a project isn't publicly reachable, the site says so instead of pretending it works.

## Stack

- React 19 + Vite (plain JavaScript/JSX, no TypeScript)
- Plain CSS with CSS Modules — no UI framework
- Content lives in `src/data/*.js`, separate from components

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # serve the production build locally
```

## Project structure

```
src/
├── components/   # UI components + their CSS Modules
├── data/         # site content (services, projects, FAQ, experience, etc.)
├── hooks/        # small reusable hooks (scroll state, active-section tracking)
├── utils/        # helpers derived from data (e.g. unique tech stack list)
├── assets/       # real photo + real project screenshots
└── styles/       # design tokens, reset, global styles
```

## Deployment

Deployed via Netlify (GitHub → Netlify CI), falling back to Vercel if Netlify's free-tier limits are hit.
