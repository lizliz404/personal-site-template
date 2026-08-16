# lab

Design-engineering lab for pixel-level study/recreation of high-craft personal sites.

**Status:** Parked lab. Public on purpose. Do not iterate, refactor, or port this into lizliz.xyz unless Liz explicitly asks.

**Live:** https://lab.lizliz.xyz  
**Repo:** https://github.com/lizliz404/personal-site-template  
**Deploy:** Cloudflare Pages (GitHub-connected) → custom domain `lab.lizliz.xyz`

## Positioning

This is **not** Liz's production personal homepage, and not a `lizliz.xyz/preview` subpage.

It is a standalone lab surface whose job is to recreate the mechanism of targets like **haoqi.design** (plus reference studies of maximeheckel.com, Geist, hanzilla, and the 8-case benchmark set). Content/identity for Liz's real site is out of scope here.

## Artifact

```text
app/index.html
```

Cloudflare Pages publishes the `app/` directory as the site root (no build step).

## References in-repo

- `docs/benchmark-8-cases.md` — full 8-case personal-site design benchmark (same as notes original)
- `docs/reference-brief.md` / `docs/gap-analysis.md` / `docs/design-prd.md`
- `docs/haoqi-rendering-extract/` — FluidPush / LensFlare shader extracts
- `docs/reference-hanzilla.md`, `app/references/vercel-geist.md`

## Run locally

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:4177/app/
```

```bash
npm run check
```

## Deploy

Push to `main` on GitHub. Cloudflare Pages builds automatically:

- project name: `lab`
- production branch: `main`
- destination dir: `app`
- custom domain: `lab.lizliz.xyz`

## Scope rule

- Goal: high-fidelity recreation of haoqi-class design-engineering surfaces.
- Non-goal: mapping controls/content to Liz personal brand for production homepage use.
