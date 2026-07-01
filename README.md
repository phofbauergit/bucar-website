# Arztpraxis Dr. Bucar — Homepage Redesign

Three homepage concepts for [arztpraxis-bucar.de](https://arztpraxis-bucar.de/), inspired by modern holistic medicine practice sites.

## Routes

| Path | Concept |
|------|---------|
| `/` | Concept picker — choose between all three designs |
| `/v1` | **Curth Calm** — calm editorial layout, warm naturals |
| `/v2` | **Alpine Meridian** — bold TCM editorial, bento grid |
| `/v3` | **Pulse Editorial** — clinical editorial, vital readouts, pulse line |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy on Netlify

This repo includes a `netlify.toml` that configures the [Netlify Next.js plugin](https://docs.netlify.com/frameworks/next-js/overview/) for automatic builds.

### One-time setup

1. Push this repo to GitHub.
2. In [Netlify](https://app.netlify.com/), click **Add new site → Import an existing project**.
3. Choose **GitHub**, authorize Netlify, and select this repository.
4. Netlify reads `netlify.toml` automatically — no manual build settings needed.
5. Click **Deploy site**.

Every push to `main` triggers a new production deploy.

### Manual deploy (optional)

```bash
npx netlify-cli deploy --prod
```

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Self-hosted fonts via `next/font` (DSGVO-friendly)

## Notes

- Concept preview only — not a live production site.
- Content scraped from the existing arztpraxis-bucar.de homepage.
- Legal pages (Impressum, Datenschutz) are stubs.
