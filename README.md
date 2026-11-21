# Trader Insight

**An AI-ready trading journal platform.** Track your performance. Understand
your mistakes. Improve consistently.

این نسخه (MVP) دارای **رابط کاربری کاملاً فارسی و راست‌به‌چپ (RTL)** است —
هم وب‌سایت عمومی و هم پنل مدیریت، با فونت [وزیرمتن](https://github.com/rastikerdar/vazirmatn)،
اعداد فارسی و تاریخ شمسی (جلالی).

This repository contains the complete MVP (Version 1): the public marketing
website, administrator authentication, and the full admin dashboard — built
with a design system that already reserves space for the future modules
(AI Assistant, Trading Memory, Price Alerts, Trading Agent, Broker
Connections) without any redesign.

## Stack

- **Next.js 15** (App Router) · React 19 · TypeScript
- **Tailwind CSS v4** — design tokens in `src/app/globals.css`
- **Vazirmatn** (Persian/RTL UI) + **Geist Mono** for code — bundled locally
- **lucide-react** icons
- Zero chart dependencies — SVG charts are hand-built in `src/components/charts`

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build && npm start
```

### Default administrator account

There is **no registration in the MVP** — one default administrator exists.
Credentials are configurable from backend settings (environment variables,
see `.env.example`):

| Setting | Default |
|---|---|
| `ADMIN_USERNAME` | `admin` |
| `ADMIN_PASSWORD` | `admin123` |
| `SESSION_SECRET` | dev placeholder — set a random 32-byte value in production |

Copy `.env.example` to `.env.local` to override them. Sign in at `/login`.

**ورود به پنل:** به آدرس `http://localhost:3000/login` بروید و با نام کاربری
`admin` و رمز `admin123` وارد شوید (یا مقادیر دلخواه از `.env.local`).

## Routes

| Route | Description |
|---|---|
| `/` | Landing page — Hero, Features, Pricing, Roadmap, About, Contact |
| `/login` | Admin sign-in (username · password · remember me) |
| `/dashboard` | Overview — stat cards, visits chart, recent activity |
| `/dashboard/users` | User table — search, filter, pagination, view/edit/delete dialogs, add user |
| `/dashboard/analytics` | Traffic stats, charts, top pages, recent visitors |
| `/dashboard/settings` | Website name, logo, theme, maintenance mode, future features (disabled) |
| `/dashboard/ai-assistant` … `/dashboard/broker-connections` | Reserved modules — "Coming Soon" |

All `/dashboard/*` routes are protected by Edge middleware that verifies an
HMAC-signed, httpOnly session cookie ("Remember me" = 30 days, otherwise
8 hours).

## Project structure

```
src/
├─ app/                    routes (landing, login, dashboard, api)
│  └─ dashboard/           admin pages incl. 5 reserved "Coming Soon" pages
├─ components/
│  ├─ ui/                  design-system primitives (button, card, dialog, table…)
│  ├─ charts/              dependency-free SVG charts (line, bar, sparkline)
│  ├─ site/                landing page sections
│  └─ dashboard/           shell, sidebar, page header, coming-soon
├─ lib/                    auth, session, navigation, data layer, utils
└─ middleware.ts           /dashboard route guard
docs/
└─ DESIGN_SYSTEM.md        full design documentation (palette, type, wireframes…)
```

## Design

The full design system — color palette, typography scale, iconography,
component inventory, page hierarchy, responsive rules and ASCII wireframes —
is documented in **[docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md)**.

### Data layer note

All dashboard pages read from `src/lib/data.ts` (mock data). Its exported
types are the contract a real backend must satisfy — e.g. swap the exports
for Supabase queries (`app_users`, `visits_daily`, `activity_log`,
`visitors`, `site_settings`) and the UI is unchanged.

## Roadmap alignment

| Version | Scope | Status |
|---|---|---|
| V1 | Trading Journal · Statement Upload · Dashboard (this MVP) | ✅ this repo |
| V2 | AI Analysis (AI Assistant, Trading Memory) | reserved in nav + settings |
| V3 | Price Monitoring (Price Alerts) | reserved in nav + settings |
| V4 | Trading Agent, Broker Connections | reserved in nav + settings |
