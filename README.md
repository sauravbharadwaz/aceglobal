# AceGlobal

Next.js + Supabase full-stack app for AceGlobal — professional bookkeeping for trucking/logistics and agriculture.

## Stack

- Next.js 15 (App Router, TypeScript)
- Tailwind CSS 3 (route-scoped palettes via CSS variables)
- Supabase: Auth (email/password + Google + Microsoft OAuth) + Postgres with RLS
- react-hook-form + zod for the multi-step onboarding form

## Setup

```bash
cp .env.local.example .env.local   # fill in Supabase keys
npm install
npm run dev
```

### Supabase configuration

1. Create a new project at https://supabase.com.
2. Open **Project Settings → API** and copy `URL` + `anon key` into `.env.local`.
3. In **SQL Editor**, paste and run `supabase/migrations/0001_initial_schema.sql`.
4. In **Authentication → Providers**:
   - Enable **Email** (default).
   - Enable **Google**: provide a Google OAuth client ID + secret. Add `https://YOUR-PROJECT.supabase.co/auth/v1/callback` to your Google OAuth redirect URIs.
   - Enable **Azure (Microsoft)**: provide an Azure app registration client ID + secret. Add the same Supabase callback URL.
5. In **Authentication → URL Configuration**:
   - Site URL: `http://localhost:3000` (or your deployed URL).
   - Redirect URLs: include `http://localhost:3000/auth/callback`.

## Project structure

```
app/
  (marketing)/      home, trucking, agriculture
  (auth)/           login, get-started (3 steps), verify-email
  (dashboard)/      auth-gated portal, industry-branched widgets
  auth/callback/    OAuth code exchange route
lib/
  supabase/         client.ts, server.ts, middleware.ts
  validators/       zod schemas
  types/            Profile / MockFinancialMetrics
middleware.ts       session refresh + route protection
supabase/migrations/  initial SQL schema + trigger + RLS policies
```

## Theming

Three marketing palettes (`theme-homepage`, `theme-trucking`, `theme-agriculture`) are defined in `app/globals.css` as CSS variables. Each route segment opts in by wrapping its content in the appropriate class. The Tailwind config references `rgb(var(--c-*) / <alpha-value>)`, so a class like `bg-primary-container` resolves to different colors per route.

## Auth flow

- `/get-started` → step 1 → step 2 → step 3 (sets password, calls `supabase.auth.signUp` with all onboarding answers in `options.data`).
- The `handle_new_user` trigger materializes a `profiles` row from `auth.users.raw_user_meta_data` and seeds `mock_financial_metrics`.
- The user is redirected to `/verify-email` (or `/dashboard` directly if your project has email confirmation disabled).
- Verification link → `/auth/callback?code=...` → exchanges the code for a session → redirects to `/dashboard`.
- Login: `/login` runs `signInWithPassword` or OAuth (`google` / `azure`).
- Logout: server action `signOut()` clears the session and redirects to `/`.

## Dashboard

`/dashboard` reads `profile.business_type` and branches the UI:
- `trucker` → IFTA Record Engine, Per-Diem Tracker, Owner-Operator Suite, Fleet Performance.
- `farmer` → Real-Time Revenue Monitoring, Fiscal Health Gauge, Seasonal Cash Flow.
- `other` → placeholder with links to the industry marketing pages.

All values come from `mock_financial_metrics` (seeded via the signup trigger) — no real ledger ingest yet.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — eslint
- `npm run typecheck` — tsc no-emit
