# Nails by Natalia

A modern marketing and booking website for a professional nail studio. Built with Astro, the site delivers a fast, fully static experience with a polished, responsive design, service and pricing information, a portfolio gallery, and appointment enquiry forms.

The public-facing content is written in Spanish.

## Features

- **Static-first performance** — pre-rendered pages served as static assets.
- **Responsive design** — tailored layouts for desktop, tablet, and mobile, including a mobile navigation dock.
- **Marketing sections** — hero, services, gallery, pricing, about, and contact.
- **Appointment enquiries** — a booking form with service and scheduling details.
- **Supabase integration** — client for services, clients, bookings, portfolio, and admin data.
- **Design system** — shared CSS tokens, global styles, and decorative components.
- **Quality tooling** — ESLint, TypeScript checks, Vitest, and Playwright end-to-end tests.

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | [Astro 5](https://astro.build) |
| Styling | [Tailwind CSS](https://tailwindcss.com) and custom CSS |
| UI islands | [React 19](https://react.dev) |
| Backend services | [Supabase](https://supabase.com) |
| Unit testing | [Vitest](https://vitest.dev) |
| End-to-end testing | [Playwright](https://playwright.dev) |
| Linting | [ESLint](https://eslint.org) |

## Requirements

- **Node.js** `>= 22.22.0` (see `package.json`)
- **npm** (the repository includes a `package-lock.json`)

## Getting started

1. Install dependencies:

   ```sh
   npm install
   ```

2. Create a local environment file from the example:

   ```sh
   cp .env.example .env
   ```

   On Windows PowerShell:

   ```powershell
   Copy-Item .env.example .env
   ```

3. Fill in the Supabase values in `.env`:

   ```dotenv
   PUBLIC_SUPABASE_URL=your_supabase_url_here
   PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

   > `PUBLIC_` variables are exposed to the browser bundle by Astro. Only use the Supabase **anon** key here — never a service-role key.

4. Start the development server:

   ```sh
   npm run dev
   ```

   The site is available at `http://localhost:4321`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Astro development server |
| `npm run build` | Build the production site to `dist/` |
| `npm run preview` | Preview the production build locally (port `4322`) |
| `npm run lint` | Run ESLint over source files |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |
| `npm run test` | Run Vitest unit tests |
| `npm run test:e2e` | Run Playwright end-to-end tests |
| `npm run astro` | Access the Astro CLI directly |

## Project structure

```text
.
├── public/                  # Static assets served as-is
├── src/
│   ├── assets/              # Local images and SVGs
│   ├── components/          # Reusable Astro components
│   │   └── decor/           # Background and decorative components
│   ├── i18n/                # Localized content
│   ├── layouts/             # Page layouts
│   ├── lib/                 # Supabase client and shared utilities
│   ├── pages/               # File-based routes
│   │   ├── admin/           # Admin dashboard routes
│   │   └── dev/             # Development-only pages (noindex)
│   ├── styles/              # Tokens, globals, and decorative styles
│   └── test/                # Unit test setup
├── supabase/
│   ├── migrations/          # Database schema migrations
│   └── seed.sql             # Seed data
├── tests/                   # Playwright tests
├── astro.config.mjs
└── package.json
```

## Database setup

The Supabase schema is versioned in `supabase/migrations/`. Apply it to a Supabase project using the Supabase CLI or the SQL editor:

```sh
supabase db push
```

To load sample services, portfolio entries, and an admin user, run `supabase/seed.sql` after the migration.

> The seeded admin credentials are for local development only. Replace them with properly hashed credentials before deploying to production.

## Deployment

The site is a static Astro build and can be hosted on any static host. Step-by-step instructions for **Cloudflare Pages** are available in [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

Before deploying, confirm that:

- `site` in `astro.config.mjs` matches the production domain.
- `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` are configured in the hosting environment.
- The production build completes locally with `npm run build`.

## License

This project is proprietary software. All rights reserved.
