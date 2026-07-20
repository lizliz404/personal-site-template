# Personal Site Template

A standalone project for the next Liz personal site template.

This project replaces the loose `/preview/` iteration loop with a real, inspectable template project. The current runnable artifact is `app/index.html`, based on the V3 prototype.

## Source references

The template is built from three already-selected references:

1. **haoqi.design** — compressed design-engineering homepage: WebGL/canvas atmosphere, tool-panel UI, theme/sound/time/coords microcopy, char reveal, dotted hover, strong motion identity.
2. **maximeheckel.com** — creative frontend craft archive: WebGL/shader identity, capability-themed work structure, strong metadata and publication infrastructure.
3. **Vercel Geist / design.md** — restrained product-system discipline: neutral surfaces, precise typography, accessibility, state colors, consistent interaction primitives.

See `docs/reference-brief.md` for the extracted design brief.
See `docs/gap-analysis.md` for the concrete gap analysis against all three references.
See `docs/legacy-compact-design.md` for the earlier compact design system spec.
See `docs/reference-hanzilla.md` for the hanzilla.co personal site reference.

## Reference archive

`app/references/` contains source materials:
- `personal-site-benchmark-haoqi-maxime.md` — original benchmark analysis of haoqi + maxime
- `vercel-geist.md` — Vercel Geist design system full spec
- `legacy-liz-personal-compact-design.md` — earlier compact design spec
- `legacy-compact-v2.html` / `legacy-compact-v3.html` — earlier HTML iterations

## Current artifact

```text
app/index.html
```

Current V3 capabilities:

- WebGL FBM shader background
- Canvas2D particle layer
- loading sequence with progress counter
- char-by-char reveal animation
- SVG stroke drawing
- 3D tilt cards
- system panel: theme / sound / time / coords
- inner scroll container
- dotted hover affordance
- light/dark theme

## Run locally

```bash
npm run dev
```

Then open:

```text
http://127.0.0.1:4177/app/
```

No build step is required; this is intentionally static while the design direction is still being judged.

## Design rule

This template should not become a generic effects demo.

The three reference inputs are used with different weights:

| Reference | Steal | Do not steal blindly |
|---|---|---|
| haoqi.design | realtime artifact feeling, system-panel language, char reveal, WebGL atmosphere | decorative control-panel fetish, interaction that hides content |
| maximeheckel.com | capability-themed work archive, craft compounding structure | payload bloat, 3D work irrelevant to Liz's actual proof |
| Vercel Geist | precision, accessible states, spacing/typographic discipline | sterile SaaS dashboard blandness |

## Acceptance criteria for the next version

- The first screen feels alive within 1 second of load.
- Motion proves taste and engineering craft, not just “there is animation”.
- Projects are grouped by capability, not chronology only.
- Writing is visible as proof, not buried.
- Interaction remains usable with reduced motion.
- The page can be shared as a serious artifact, with metadata and OG/social polish added before production use.
