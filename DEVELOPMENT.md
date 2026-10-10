# Development

This guide explains how to set up and run the project locally.

## Prerequisites

- [Node.js](https://nodejs.org/) (see `.nvmrc`)
- [pnpm](https://pnpm.io/) (see `package.json` `packageManager`)
- [Git](https://git-scm.com/)

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/VikasKSingh05/ModernPortfolio.git
cd ModernPortfolio
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

The only required value is `NEXT_PUBLIC_APP_URL`; it drives all generated
absolute URLs. `GITHUB_CONTRIBUTIONS_API_URL` overrides the public GitHub
contributions API base used to render the contribution graph.

### 4. Run the development server (optional: portless)

`portless.json` enables a stable HTTPS origin.

```bash
npm install -g portless
pnpm dev
```

The app is served at https://vikasksingh05.localhost, or at
http://localhost:3000 when portless is not installed.

## Building for production

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Before pushing

CI runs these on every pull request. Run them locally first:

```bash
pnpm lint
pnpm format:check
pnpm test:run
pnpm build
pnpm check-types
```
