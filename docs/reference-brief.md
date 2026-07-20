# Reference Brief

This brief extracts the three selected inputs for the Personal Site Template project.

## 1. haoqi.design

Source analysis: `/home/ubuntu/notes/2026-05-04-personal-website-design-benchmark.md`, case 7.

### What matters

- **Positioning**: interactive design-engineering demo, not a resume site.
- **Stack signals**: Next.js App Router / RSC, Vercel, Turbopack chunks, Tailwind v4 output, custom tokens.
- **Motion/graphics**: `three`, `shader`, `canvas`, `webgl`, `gsap`, `lenis`, `r3f` signals from JS chunks.
- **Interface language**: `THEME[A]`, `SOUND[|]`, GMT+8, cursor coordinates, loading progress, pointer overlay.
- **Visual system**: large typography, 12-column grid, mix-blend modes, radial gradients, reduced-motion support.
- **Signature effects**: canvas/WebGL atmosphere, char reveal, SVG-like drawing, dotted hover, panel controls.

### Design judgment

Haoqi works because the interaction itself proves the creator's identity: design engineering, systems, craft, taste. For Liz, steal the language and density of feedback, not the whole heavy stack as decoration.

## 2. maximeheckel.com

Source analysis: `/home/ubuntu/notes/2026-05-04-personal-website-design-benchmark.md`, case 8.

### What matters

- **Positioning**: creative frontend engineer craft archive.
- **Stack signals**: Next.js Pages Router, Vercel, runtime CSS-in-JS/Stitches-like tokens, self-hosted font preload.
- **Motion/graphics**: `framer-motion`, `three`, `shader`, `webgl`, `matter`, `r3f`.
- **Content architecture**: work is organized by capability themes, not only project chronology.
- **Themes**: shader light effects, post-processing, raymarching, whimsical interaction patterns.
- **Infrastructure**: strong metadata, OG/Twitter cards, canonical/social readiness, security headers.

### Design judgment

Maxime's strongest lesson is not “add WebGL”. It is turning a learning curve into a browseable proof archive. Liz's equivalent clusters should be `AI agents`, `writing systems`, `tiny tools`, and `product experiments`.

## 3. Vercel Geist / design.md

Source file: `/home/ubuntu/projects/_templates/design/vercel-geist.md`.

### What matters

- **Visual discipline**: neutral surfaces, strict contrast, high whitespace, restrained color.
- **Typography**: clean product typography, readable hierarchy, precise sizing.
- **Color role**: color signals hierarchy/state, not decoration.
- **Interaction states**: hover, active, focus, disabled, loading, success, warning, error states should be explicit.
- **Accessibility**: reduced motion, focus visibility, contrast, predictable controls.
- **System behavior**: reusable tokens and primitives over one-off styling chaos.

### Design judgment

Geist is the stabilizer. Haoqi and Maxime provide expressive craft; Geist keeps the artifact from becoming an unreadable effects cave.

## Combined Direction

The Personal Site Template should feel like:

> A living interface for Liz's work: interactive enough to prove taste, structured enough to prove judgment, fast enough to respect attention.

## Non-negotiables

- Keep WebGL/canvas, but the first content must remain visible and understandable.
- Keep char reveal, but do not make reading slow.
- Keep system-panel language, but every control needs a reason.
- Use capability clusters for work.
- Make writing visible as proof.
- Add share/metadata polish before production.

## Current V3 Gap List

- Work cards are placeholders, not proof-bearing project entries.
- Writing rows exist but need real content and metadata.
- WebGL exists, but shader taste still needs visual tuning against real screenshots.
- The current implementation is a static HTML artifact, not yet integrated into the production Next.js architecture.
- Metadata/social cards are not production-grade yet.
