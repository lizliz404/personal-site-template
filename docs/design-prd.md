# Personal Site Template Design PRD

## Current Version

V8 Flare System Index

## Purpose

Build a personal-site preview that borrows the mechanism of `haoqi.design`, not just its surface tokens.

The page should feel like a live system surface: visible GPU interaction, proof-bearing artifact links, dense interface rhythm, and fast access to Liz's real work.

## Core Judgment

The earlier V3 failed because it copied interface flavor without reproducing either the rendering mechanism or the proof logic.

V3-style failures to avoid:

- fake water: weak FBM fog or decorative canvas instead of pointer-coupled fluid response;
- fake work: placeholders, copied benchmark project names, or `href="#"` links;
- fake controls: UI labels that do not map to real state or identity;
- fake verification: checks that only assert marker strings instead of runtime behavior and layout constraints.

## Reference Truth Model

Use evidence labels from the `web-shader-extractor` workflow.

### SOURCE

Direct target-bound evidence from public source, runtime capture, shader capture, frame capture, source maps, or network body.

Current SOURCE/PARTIAL evidence already available locally:

- `docs/haoqi-rendering-extract/`
- `docs/reference-haoqi-maxime-study.md`
- `app/references/personal-site-benchmark-haoqi-maxime.md`

### PARTIAL

Useful but incomplete evidence. Shader names, uniforms, bundle slices, and pass names live here until wiring, timing, input coupling, and output composite are verified.

Current PARTIAL facts:

- haoqi uses `three.js`, `@react-three/fiber`, `Lenis`, `EffectComposer`, `RenderPass`, custom `FluidPushPass`, custom `LensFlarePass`, and pointer trail uniforms.
- Fluid pipeline shape: `curl -> vorticity -> divergence -> pressure -> gradient -> advect -> display`.
- Pointer trail uses 16 points and pixel-cell overlay logic.
- Lens flare evidence includes `flareTarget`, `uStarRays`, `uIntensity`, `uThreshold`, `uStreakScale`, `uHotspotPower`, `uGate`, `uTailColor`, and `tBase + tFlare` composite.

### GUESS

Implementation values fitted or rebuilt without full source wiring. These must not be presented as source replay.

Current GUESS facts:

- V8 `LensFlare-lite` constants and shader math.
- V8 base scene shader used as a procedural substitute for haoqi's real scene/refraction material.
- V8 post-processing order beyond `display -> flare -> composite`.

## Target Experience

### First Viewport

- A full-viewport system interface, not a generic hero plus portfolio cards.
- Canvas is visible immediately and participates in the visual identity.
- Left side: identity/status/proof thesis.
- Right side: selected artifact index with real links.
- Bottom: large headline that fits within viewport without clipping.
- Fixed diagnostic overlay uses sparse grid/corner/center lines with `mix-blend-mode: difference`.

### Rendering

Minimum accepted pipeline:

```text
baseSceneTarget
-> FluidPush display displacement
-> fluidDisplayTarget
-> LensFlare-lite extraction
-> flareTarget
-> composite to screen
```

Fluid simulation baseline:

```text
curl -> vorticity + pointer force -> divergence -> clear pressure
-> pressure Jacobi iterations -> gradient subtraction -> advect
```

### Content / Proof

- Work cards and hero index must point to real routes or live URLs.
- Writing links must point to real article slugs.
- No `href="#"` in primary content or footer.
- Capability clusters should explain what the artifacts prove, not merely list projects.

## Acceptance Criteria

Static checks must pass:

- `npm run check` in `/home/ubuntu/projects/personal-site-template`.
- Must include `baseSceneFS`, `baseSceneTarget`, `getFluidDisplayColor`, and `const int samples = 4`.
- Must include `const flareFS`, `const compositeFS`, `fluidDisplayTarget`, `flareTarget`, `uStarRays`, `tBase`, and `tFlare`.
- Must include `renderTo(fluidDisplayTarget, displayMat)`, `renderTo(flareTarget, flareMat)`, and `mesh.material = compositeMat`.
- Must include `.hero-work-index` and `.hero-index-row`.
- Must include real project and article links.
- Must reject `href="#"`.

Runtime checks must pass on local template and `/preview` route:

```js
{
  fluidError: null,
  webglContext: true,
  canvas: { width: >0, height: >0, opacity: visible },
  themeSequence: ['THEME[D]', 'THEME[L]', 'THEME[A]'],
  heroIndexRows: 5,
  fakeLinks: 0,
  heroBottomOverflowY: false
}
```

Deployment checks must pass after push:

- cache-busted `https://lizliz.xyz/preview/?audit=<commit>` contains V8 markers;
- bare `https://lizliz.xyz/preview/` eventually contains V8 markers;
- live runtime has no `window.__fluidError`.

## Current Known Gaps

- V8 is not full `SOURCE_REPLAY`; it is a pipeline replay / behavior rebuild hybrid.
- No complete R3F scene graph reconstruction.
- No real haoqi refraction material yet.
- No complete `EffectComposer` chain for `ChromaticAberration`, `Vignette`, `ToneMapping`, `Bloom`, `GodRays`, and `SMAA`.
- `LensFlare-lite` is structurally correct but not source-equivalent.
- Visual comparison against haoqi has not been recorded as screenshot/crop evidence.
- Mobile viewport QA still needs explicit browser metrics and screenshot evidence before calling the design finished.

## Version Log

### V8 Flare System Index

- Added full-viewport hero system index.
- Increased canvas prominence.
- Added `fluidDisplayTarget -> flareTarget -> composite` render chain.
- Added LensFlare-lite shader with source-evidence marker uniforms.
- Removed fake footer links.
- Tightened artifact checks against marker-only regressions.

### V7 Fluid Display Baseline

- Added `baseSceneFS` and `baseSceneTarget`.
- Display pass refracts a base scene texture using velocity field.
- Added 4-sample chromatic reconstruction and pointer pixel trail overlay.
- Added proof archive content structure.

### V6 / Earlier

- Added haoqi-style overlay, theme labels, HSST-style char fade, proof-bearing cards, and system strip.

### V3 Failure Baseline

- Had surface tokens but not the correct mechanism.
- Used weak FBM/noise-like visual language.
- Contained fake or placeholder content and links.

## Next Moves

1. Finish V8 deployment verification on `lizliz.xyz/preview`.
2. Capture desktop and mobile screenshots plus bounding-box metrics.
3. Decide whether the next iteration optimizes rendering fidelity or information architecture.
4. If rendering fidelity continues, extract or reconstruct the next pass in this order:
   - real refraction/base scene material;
   - stronger LensFlarePass parity;
   - Bloom/Vignette/ToneMapping;
   - GodRays/SMAA only if the prior passes create visible value.
5. Update this PRD before each new implementation pass.
