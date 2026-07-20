import { readFileSync, existsSync } from 'node:fs';

const html = readFileSync(new URL('../app/index.html', import.meta.url), 'utf8');

const checks = [
  ['WebGL fluid canvas', html.includes('id="bg-canvas"') && html.includes('new THREE.WebGLRenderer') && html.includes('WebGLRenderTarget')],
  ['source-like display pass', html.includes('baseSceneFS') && html.includes('baseSceneTarget') && html.includes('getFluidDisplayColor') && html.includes('const int samples = 4')],
  ['LensFlare-lite composite pass', html.includes('const flareFS') && html.includes('const compositeFS') && html.includes('flareTarget') && html.includes('fluidDisplayTarget') && html.includes('uStarRays') && html.includes('tBase') && html.includes('tFlare')],
  ['render chain order', html.includes('renderTo(fluidDisplayTarget, displayMat)') && html.includes('renderTo(flareTarget, flareMat)') && html.includes('mesh.material = compositeMat')],
  ['full-viewport system index', html.includes('hero-work-index') && html.includes('hero-index-row') && html.includes('Agent Loop Engineering') && html.includes('Bitcoin Whitepaper CN')],
  ['char reveal', html.includes('hsst-char') && html.includes('data-reveal="char"') && html.includes('@keyframes hsstFadeIn')],
  ['SVG stroke drawing', html.includes('svg-sign__path') && html.includes('stroke-dashoffset')],
  ['3D tilt', html.includes('data-tilt') && html.includes('rotateX') && html.includes('rotateY')],
  ['system panel', html.includes('themeBtn') && html.includes('clockLabel') && html.includes('coords') && html.includes('THEME[L]') && html.includes('THEME[D]') && html.includes('THEME[A]') && html.includes('AGENTS[3]') && html.includes('WRITING[30+]')],
  ['haoqi fixed overlay', html.includes('class="hq-overlay"') && html.includes('mix-blend-mode: difference') && html.includes('shape-rendering: crispEdges')],
  ['identity system strip', html.includes('AGENT INFRA FOR AUTONOMOUS COMMERCE') && html.includes('BRAINRUSH + PEP WORDS') && html.includes('EXTERNAL SIGNAL BEATS INTERNAL COHERENCE')],
  ['capability clusters', html.includes('cluster-head') && html.includes('AI Agent Systems') && html.includes('Shipped Tools')],
  ['real project links', html.includes('https://brainrush.run/') && html.includes('https://pep-words.brainrush.run/') && html.includes('https://bitcoin-whitepaper.lizliz.xyz/')],
  ['real article links', html.includes('/articles/nash-equilibrium') && html.includes('/articles/loneliness-narrative-systematic-review') && html.includes('/articles/agent-loop')],
  ['no fake primary links', !html.includes('href="#"')],
  ['work card scan grid', html.includes('work-card-visual::after') && html.includes('mask-image: radial-gradient')],
  ['reference brief', existsSync(new URL('../docs/reference-brief.md', import.meta.url))],
  ['design PRD', existsSync(new URL('../docs/design-prd.md', import.meta.url)) && html.includes('V8 Flare System Index')],
  ['haoqi/maxime reference', existsSync(new URL('../app/references/personal-site-benchmark-haoqi-maxime.md', import.meta.url))],
  ['vercel reference', existsSync(new URL('../app/references/vercel-geist.md', import.meta.url))],
];

let failed = false;
for (const [name, ok] of checks) {
  console.log(`${ok ? '✓' : '✗'} ${name}`);
  if (!ok) failed = true;
}

if (failed) {
  process.exit(1);
}
