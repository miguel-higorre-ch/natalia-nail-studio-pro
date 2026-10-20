# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack & Decisions Already Made
- **Stack**: Astro (static output) + React islands for interactive parts (gallery lightbox, booking form, admin) + Tailwind CSS + TypeScript (strict).
- **PWA**: `@vite-pwa/astro` (Workbox) for the manifest and service worker.
- **Backend**: Supabase (Postgres, Auth, Storage, one Edge Function if needed) via `@supabase/supabase-js`.
- **Deploy**: Cloudflare Pages via Git integration (`npm run build` → `dist/`).
- **Package manager**: npm. **Node**: LTS, pinned in `.nvmrc`.
- **Brand**: "Nails by Natalia". Spanish tagline: "Diseños únicos, hechos a mano".
- **$0 infrastructure**: Cloudflare Pages (free) + Supabase (free). No paid services.
- **No public accounts**, **no payments**. A booking is a *request*; Natalia confirms manually.
- **UI text in Spanish (es)**. Code, comments, commits, README in English.
- Natalia manages all content through a private `/admin` panel. No CMS, no code edits.

## Project Structure
```
src/
  pages/            # index, portafolio, servicios, sobre-natalia, reservar, contacto, admin/*, offline
  components/       # ui/, portfolio/, booking/, admin/, decor/
  lib/              # supabase client, slots.ts, validation (zod), seo helpers
  i18n/es.ts        # all user-facing strings in one place
  styles/           # globals.css, tokens.css, decor.css
supabase/
  migrations/       # SQL migrations (schema, RLS, functions, storage policies)
  seed.sql
```

Public pages mount the shared decorative gradient and floating SVG icons through `src/layouts/Layout.astro`; `/admin/*` uses a static gradient without floating decor. Keep decor CSS-only, reduced-motion aware, and free of external assets.

## Key Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview build locally
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm test` - Run Vitest unit tests
- `npx playwright test` - Run Playwright end-to-end tests

## Working Agreements
1. Before coding, read this whole file and keep CLAUDE.md updated.
2. Work in phases. At end of each phase: run `npm run lint`, `npm run typecheck`, and `npm run build`, fix failures, then commit.
3. Never commit secrets. Use `.env.example` with `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` only.
4. If something requires a human action, stop and list it clearly in `docs/MANUAL_STEPS.md`.
5. Prefer small, typed, tested units. Add Vitest for pure logic and Playwright for booking flow/admin login.
6. Don't add dependencies beyond what's needed. Justify each new one in commit message.

## Phases
- **Phase 0**: Scaffold (current)
- **Phase 1**: Database, RLS, Storage (Supabase)
- **Phase 2**: Public Site (Spanish UI)
- **Phase 3**: Admin Panel (`/admin`, Spanish UI, protected)
- **Phase 4**: PWA MVP
- **Phase 5**: SEO, Accessibility, Performance
- **Phase 6**: Ops, Keep-Alive, Docs