# Modern Portfolio

<div align="center">

[![GitHub Repo Stars](https://shieldcn.dev/github/stars/VikasKSingh05/ModernPortfolio.svg?font=geist&mode=light)](https://github.com/VikasKSingh05/ModernPortfolio)

</div>

A modern single-page resume portfolio for **Vikas Kumar Singh**, built with
Next.js, Tailwind CSS, and shadcn/ui — forked and customized from
[ChanHDai.com](https://github.com/ncdai/chanhdai.com) by **Ncdai**.

## Features

- Single-page resume (Overview · Socials · GitHub contributions · Stack ·
  Experience · Education · Projects · Awards · Certifications)
- Light / dark themes with animated theme toggle
- Flip sentences, command menu, and a name-pronunciation button
- `/vcard` — downloadable vCard
- PWA manifest, sitemap, robots.txt, JSON-LD

## Stack

- Next.js 16 (App Router · Turbopack)
- Tailwind CSS v4
- shadcn/ui + Base UI + Motion (React)
- TypeScript
- Vitest

## Getting Started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 (or the portless URL, see `DEVELOPMENT.md`).

| Script              | Description                      |
| ------------------- | -------------------------------- |
| `pnpm dev`          | Start the dev server (Turbopack) |
| `pnpm build`        | Production build                 |
| `pnpm start`        | Run the production server        |
| `pnpm preview`      | Build then start                 |
| `pnpm lint`         | Run ESLint                       |
| `pnpm check-types`  | TypeScript type-check            |
| `pnpm format:write` | Prettier format all files        |
| `pnpm test:run`     | Run Vitest once                  |

## Configuring a live URL

`src/config/site.ts` reads `NEXT_PUBLIC_APP_URL` for absolute URLs and falls
back to a placeholder. Set it (e.g. in Vercel) to your real domain.

## Customization

All personal data lives in `src/features/portfolio/data/`:

- `user.ts` — name, bio, phone/email (base64), about, avatar, keywords
- `experiences.tsx`, `projects.tsx`, `education.ts`, `awards.tsx`,
  `certifications.ts`, `tech-stack.tsx`, `social-links.ts` — content sections
- `src/config/site.ts` — site metadata and theme colors

## Credits

This project is a rewritten, customized fork of
**[ChanHDai.com](https://github.com/ncdai/chanhdai.com)** by **Chanh Dai
(ncdai)**, released under the MIT license. The original design and component
architecture are the work of Chanh Dai. Vikas Kumar Singh customized the
content, data layer, and branding.

## License

[MIT](./LICENSE) — see the license file for full terms. The original author's
credit is retained above.
