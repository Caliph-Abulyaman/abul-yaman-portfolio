# Abul Yaman — Portfolio

A multi-page portfolio built with [Astro](https://astro.build) + Tailwind CSS,
deployed to Cloudflare Pages (static site + Pages Functions).

## Pages

- `/` — Home
- `/about` — Approach, skills, languages, and a pointer to the journey
- `/projects` — Project grid (featured first); each card opens a case study
- `/projects/<slug>` — Per-project case study (problem, approach, what it does)
- `/journey` — The honest, chronological learning timeline
- `/ai-practice` — The AI-assisted methodology, real drills, and an assistant widget
- `/services` — Services offered
- `/resume` — Browser-readable résumé
- `/contact` — Contact form (posts to `/api/contact`) + direct email/WhatsApp

## Structure

```text
/
├── public/                 # Static assets
├── src/
│   ├── components/         # Astro components (cards, layout parts, assistant)
│   ├── data/               # Content data (site, projects, skills, journey…)
│   ├── layouts/            # BaseLayout used by every page
│   ├── pages/              # Routes (incl. projects/[slug].astro)
│   └── styles/global.css   # Design tokens + shared styles
├── functions/
│   └── api/
│       ├── ask.ts          # Workers AI backend for the AI Practice assistant
│       └── contact.ts      # Resend-backed contact form handler
├── wrangler.toml           # Pages + Functions bindings
└── astro.config.mjs
```

## Commands

| Command                   | Action                                       |
| :------------------------ | :------------------------------------------- |
| `npm install`             | Installs dependencies                        |
| `npm run dev`             | Starts local dev server at `localhost:4321`  |
| `npm run build`           | Builds the static site to `./dist/`          |
| `npm run preview`         | Previews the build locally                   |
| `npm run astro ...`       | Run CLI commands like `astro check`          |

## Bindings needed for the Functions (all free tier)

1. **Workers AI** (`[ai] binding = "AI"`) — enabled by default on Cloudflare
   accounts; drives `/api/ask` with a hard daily cap (150 requests/day via KV).
2. **KV namespace** — create with
   `wrangler kv namespace create ASSISTANT_KV`, then paste the printed `id`
   into `wrangler.toml`. Used only to enforce the daily cap so the assistant
   can never incur a charge; it falls back to a static client-side FAQ.
3. **Resend** (optional for the contact form) — sign up free at
   resend.com, then set `RESEND_API_KEY` as a Pages secret and confirm
   `CONTACT_TO_EMAIL` in `wrangler.toml`. Without Resend the form still works:
   it falls back to opening the visitor's email app via `mailto:`.
