# AI agent guidelines for Modern Portfolio

Single-page resume portfolio for Vikas Kumar Singh. Next.js 16 (App Router),
TypeScript, React 19, Tailwind CSS v4, shadcn/ui + Base UI, Vitest, pnpm.

## Project structure

| Directory                              | Purpose                                           |
| -------------------------------------- | ------------------------------------------------- |
| `src/app/`                             | App Router pages, layouts, metadata routes        |
| `src/components/`                      | Shared UI components                              |
| `src/features/portfolio/`              | Portfolio sections: `components`, `data`, `types` |
| `src/config/`                          | Site metadata and JSON-LD config                  |
| `src/hooks/`, `src/lib/`, `src/utils/` | Hooks, libraries, utilities                       |
| `src/assets/`                          | Static fonts and phone metadata                   |
| `src/styles/`                          | Global / typeset CSS                              |

**Key files**: `src/features/portfolio/data/` (all personal content), `src/features/portfolio/types/` (data types), `src/config/site.ts`, `next.config.ts`, `.env.example`

## Content system

All personal data lives in `src/features/portfolio/data/` as typed modules, one
per section (`user`, `social-links`, `tech-stack`, `experiences`, `education`,
`projects`, `awards`, `certifications`, `github-contributions`). Types live in
`src/features/portfolio/types/`. There is no MDX and no blog.

## Coding guidelines

- TypeScript strict mode; explicit types when necessary
- kebab-case file naming
- Descriptive names; comments only for "why", not "what"
- No emojis in code, comments, or commit messages
- Tailwind CSS v4 syntax; support dark/light modes (`dark:` variant)
- Follow SOLID principles

## Commands

```bash
pnpm dev                # Dev server (Turbopack)
pnpm build              # Production build
pnpm test               # Vitest (watch)
pnpm test:run           # Vitest (single run)
pnpm lint               # ESLint
pnpm lint:fix           # ESLint with --fix
pnpm format:write       # Prettier
pnpm check-types        # Type checking (tsc --noEmit)
```

### Local dev URL

A dev server is usually already running behind `https://vikasksingh05.localhost`
(see `allowedDevOrigins` in `next.config.ts` and `portless.json`). Use that
origin to test pages and routes, never a raw port. It also makes generated
absolute URLs match what the code produces.

### Env vars

Defined in `.env.example`. `NEXT_PUBLIC_APP_URL` drives absolute URLs;
`GITHUB_CONTRIBUTIONS_API_URL` overrides the GitHub contributions API base.

### Verification before pushing

CI runs lint, format check, test, build, and type-check. Run them locally
first: `pnpm lint`, `pnpm format:check`, `pnpm test:run`, `pnpm build`,
`pnpm check-types`.

These commands are run from the repo root. When staging changes with many files
at once, husky's lint-staged can be slow — that is expected, not a hang.
