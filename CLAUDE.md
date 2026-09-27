# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio site for Jaime Burbano ("jb.solutions_arch"), a Senior Systems Architect / Technical Product Owner working on cloud-edge, Kubernetes, and Green IT. It is a static React 18 + Vite 5 + Tailwind 3 single-page app, deployed to GitHub Pages (`https://jaimebv.github.io`).

## Commands

```bash
npm run dev       # Vite dev server
npm run build     # production build to dist/
npm run preview   # serve the built dist/ locally
npm run deploy    # builds (predeploy), then pushes dist/ to the gh-pages branch
```

There is no test suite, linter, or TypeScript checking configured. Use `npm run build` to verify changes compile.

## Architecture

- **Routing** ([src/App.jsx](src/App.jsx)): `HashRouter` (required for GitHub Pages, together with `base: './'` in [vite.config.js](vite.config.js)). All routes are nested under [Layout](src/components/Layout.jsx), which renders the top `Navigation`, the mobile-only scroll-triggered `BottomNav`, the footer, and scrolls to top on route change.
- **Case studies are data-driven**: every "Solutions" page (`/seqam`, `/wsn`, `/greenshift`, `/mape-k`, `/cea`, `/eeaa-rtos`) is the same [CaseStudy](src/pages/CaseStudy.jsx) template fed an object from [src/data/caseStudies.js](src/data/caseStudies.js). The object shape is `{ id, title, subtitle, overview, role, roleDescription, techStack[], sections[] }`, where each section has a `title` plus an optional `content` string and/or a `list` of `{ strong, text }` items.
- **Adding a case study** means touching three or four places, which must stay in sync: export the data object in `caseStudies.js`, add a `<Route>` in `App.jsx`, add an entry to `solutionLinks` in [Navigation.jsx](src/components/Navigation.jsx) (used by both the desktop dropdown and the mobile menu), and optionally a `NavItem` in [BottomNav.jsx](src/components/BottomNav.jsx).
- **Other pages** (`Home`, `TechPortfolio`, `Innovations`) keep their content in arrays defined inline at the top of the component (`bentoItems`, `projects`, `papers`) rather than in `src/data/`.
- The LinkedIn "Contact" URL is hardcoded in several places (Navigation desktop + mobile, BottomNav). `ContactForm` is visual only; it does not submit anywhere.
- Static images live in `public/img` and `public/figs`.

## Design system ("Modern Obsidian")

The visual rules come from `prompts/style.md` (git-ignored, local only). Keep new UI consistent with them:

- Strictly monochrome (`#080808` to white). No hue colors; accents use the `bg-silver-gradient` / `.text-silver` gradient. Depth comes from `border-white/10` and `backdrop-blur`, not box-shadows.
- Fonts (loaded from Google Fonts in [index.html](index.html)): `font-serif` (DM Serif Display) for headlines, always italic with `tracking-tighter` and `leading-[0.85]`; `font-mono` (Geist Mono) for labels, nav, buttons, and metadata, uppercase with wide tracking at 10–14px; `font-sans` (Inter, light weights) for body text.
- Layout containers use the custom `.container-fluid` (92vw) instead of max-width containers. Cards use `.glass-panel`. Both are defined in [src/index.css](src/index.css); the `obsidian-*` colors and fonts are defined in [tailwind.config.js](tailwind.config.js).
- The fractal-noise overlay is an inline SVG `div` in `index.html`.
- Entry animations use the `tailwindcss-animate` plugin classes (`animate-in fade-in slide-in-from-*`, `duration-*`, `fill-mode-both`), registered in `tailwind.config.js`.
- **Intentional exception to monochrome:** tech/topic tags in `TechPortfolio.jsx` and `Innovations.jsx` keep their colored `bg-<hue>-500/20 text-<hue>-200` styles. Keep them, and use the same pattern for new tags.

## Unrelated / local-only content

- `prompts/` (git-ignored) holds the original site brief (`webpages.md`) and style spec (`style.md`). Treat these as the source of intent for copy and design.
- `docs/second-brain/` is documentation for a separate "Second Brain" project and is not part of this site.

## Project agents

Subagents in `.claude/agents/`:
- `case-study-author`: adds or rewrites a case study and wires its route and nav entries
- `design-system-reviewer`: read-only audit of UI changes against Modern Obsidian
- `copy-editor`: proofreads site copy without inventing facts
