# Modern Portfolio

<div align="center">

[![GitHub Repo Stars](https://shieldcn.dev/github/stars/VikasKSingh05/ModernPortfolio.svg?font=geist&mode=light)](https://github.com/VikasKSingh05/ModernPortfolio)

</div>

A modern single-page résumé portfolio for **Vikas Kumar Singh**, built with
Next.js, Tailwind CSS, shadcn/ui, and MDX — forked and customized from
[ChanHDai.com](https://github.com/ncdai/chanhdai.com) by **Ncdai**.

## Features

- Single-page résumé (Overview · Socials · Stack · Experience · Education ·
  Projects · Awards · Certifications)
- Light / dark themes
- Flip sentences, avatar, and theme toggle
- `/vcard` — downloadable vCard
- PWA manifest, RSS, sitemap, robots.txt, JSON-LD

## Stack

- Next.js 16 (App Router · Turbopack)
- Tailwind CSS v4
- shadcn/ui + Motion (React)
- MDX
- TypeScript
- Vitest

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script           | Description                              |
| ---------------- | ---------------------------------------- |
| `pnpm dev`       | Start the dev server (Turbopack)         |
| `pnpm build`     | Production build                         |
| `pnpm start`     | Run the production server                |
| `pnpm preview`   | Build then start                         |
| `pnpm lint`      | Run ESLint                               |
| `pnpm check-types` | TypeScript type-check                   |
| `pnpm format:write` | Prettier format all files              |
| `pnpm test:run`  | Run Vitest once                          |

## Customization

Edit these files to make it yours:

- `src/config/site.ts` — site metadata, URL, theme
- `src/config/user.ts` — your personal info (name, phone, email, socials,
  jobs, projects)
- `src/features/portfolio/data/*` — experiences, projects, awards, certs

## Credits

This project is a rewritten, customized fork of
**[ChanHDai.com](https://github.com/ncdai/chanhdai.com)** by **Chanh Dai
(ncdai)**, released under the MIT license. The original design, component
architecture, and registry system are the work of Chanh Dai. Vikas Kumar Singh
customized the content and branding.

## License

[MIT](./LICENSE) — see the license file for full terms. The original author's
credit is retained above.
