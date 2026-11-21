# Trader Insight — Design System

The complete design documentation for the Trader Insight MVP: a modern,
minimal, premium SaaS UI for an AI-ready trading journal platform.

> Reference aesthetic: **Stripe · Linear · Vercel · Notion** — dark, quiet,
> content-first. No colorful dashboards. No decorative animation.

---

## 1. Design principles

| Principle | How it shows up |
|---|---|
| **Monochrome discipline** | Black, white and gray carry 95% of the UI. One blue accent, used only for primary actions, active states and key data points. |
| **Content first** | Cards, generous whitespace, tight tracking on headings, tabular numerals for all data. |
| **Quiet surfaces** | Depth comes from 1px borders and subtle background shifts (`canvas → surface → elevated`), never from heavy shadows. |
| **Motion restraint** | Only functional transitions: hover color shifts, focus rings. No entrance animations. |
| **Future-ready structure** | Navigation, routes and settings for AI/agents/brokers exist now as reserved slots showing "Coming Soon" — nothing gets redesigned when they ship. |

---

## 2. Color palette

**Rule: at most three colors — black, white, gray — plus one optional accent (blue `#3B82F6`).**

### Semantic tokens (defined in `src/app/globals.css`)

| Token | Value | Usage |
|---|---|---|
| `canvas` | `#09090B` | App/page background (near-black) |
| `surface` | `#0E0E11` | Cards, panels, sidebar |
| `elevated` | `#16161A` | Dialogs, inputs, raised elements |
| `accent` | `#3B82F6` | Primary buttons, active nav, links, chart line, highlights |
| `accent-strong` | `#2563EB` | Accent hover state |

### Grays (Tailwind `zinc` scale)

| Usage | Class |
|---|---|
| Primary text | `text-zinc-50` / `text-zinc-100` |
| Secondary text | `text-zinc-400` |
| Muted / meta text | `text-zinc-500` / `text-zinc-600` |
| Hairline borders | `border-white/6` → `border-white/15` |
| Subtle fills | `bg-white/5` → `bg-white/10` |
| Accent soft fill | `bg-accent/15` (badges, deltas, glow) |

**Status language** stays within the palette: "Active" = accent soft badge,
"Invited" = outline badge, "Suspended" = neutral badge. Destructive
confirmations are communicated through copy + an inverted (white) button,
not red.

---

## 3. Typography

**Family:** [Geist Sans](https://vercel.com/font) (UI) · Geist Mono (IDs, usernames, IPs, code) — bundled locally via the `geist` package, no external font requests.

| Style | Classes | Where |
|---|---|---|
| Display | `text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter` | Hero title |
| Section title | `text-3xl md:text-4xl font-semibold tracking-tight` | Landing sections |
| Page title | `text-2xl font-semibold tracking-tight` | Dashboard page headers |
| Card title | `text-sm font-semibold` | Cards, dialogs |
| Body | `text-sm` / `text-base text-zinc-400` | Paragraphs |
| Meta / label | `text-xs text-zinc-500`, uppercase `tracking-wider` | Table headers, eyebrows, groups |
| Data value | `text-3xl font-semibold tabular-nums` | Stat cards |
| Mono | `font-mono text-xs` | IDs (`TI-1001`), `@usernames`, IPs, `kbd` |

Rules: headings always `tracking-tight(er)`; every numeric column/value uses
`tabular-nums`; eyebrow labels are `text-xs uppercase tracking-widest text-accent`.

---

## 4. Iconography

**Library: [lucide-react](https://lucide.dev)** — 1.5–2px stroke line icons,
consistent geometric grid. Brand icons (GitHub, X, LinkedIn) are inline SVGs
in `src/components/ui/brand-icons.tsx`.

| Size | Usage |
|---|---|
| `size-3.5` | Inline in text/badges |
| `size-4` | Buttons, nav items, table actions, list items |
| `size-5` | Feature cards, section icon chips |
| `size-6` | Coming Soon hero icon |

**Canonical icon map** (single source of truth in `src/lib/navigation.ts`):

| Concept | Icon |
|---|---|
| Dashboard | `LayoutDashboard` |
| Users | `Users` |
| Website Analytics | `Activity` |
| Settings | `Settings` |
| Logout | `LogOut` |
| Trading Journal | `BookOpen` |
| Performance Analytics | `TrendingUp` |
| Statement Upload | `FileUp` |
| AI Assistant / AI Ready | `Sparkles` |
| Trading Memory | `Brain` |
| Price Alerts | `Bell` |
| Trading Agent | `Bot` |
| Broker Connections | `Plug` |
| Sign-in events | `LogIn` · New user | `UserPlus` |

---

## 5. Shape, spacing, elevation

- **Spacing grid:** 4px base; sections `py-24 md:py-32`; card padding `p-5/p-6`; card gaps `gap-4`.
- **Radius:** cards `rounded-2xl` (16px), inputs/buttons `rounded-lg` (8px), chips/badges/dots `rounded-full`, feature icon chips `rounded-xl`.
- **Borders over shadows:** `border border-white/8 bg-surface` is the standard card; elevation = one step lighter surface (`elevated`) + `shadow-2xl` only on dialogs.
- **Focus:** `focus-visible:ring-2 ring-accent/60 ring-offset-canvas` everywhere.
- **Container:** `max-w-6xl` (public site), `max-w-7xl` (dashboard) with `px-6`.

---

## 6. Responsive layout

Breakpoints: mobile-first, `sm 640 · md 768 · lg 1024 · xl 1280`.

| Surface | Mobile | Tablet (md) | Desktop (lg) |
|---|---|---|---|
| Header | Logo + hamburger → dropdown panel | inline nav | inline nav |
| Hero | single column | single column | single column + dashboard preview |
| Features | 1 col | 2 col | 3 col |
| Pricing | 1 col | 3 col | 3 col |
| Roadmap | vertical timeline | 4-col with connector line | 4-col with connector line |
| Dashboard sidebar | hidden → drawer overlay | hidden → drawer | fixed 264px rail |
| Stat cards | 1 col | 2 col | 4 col |
| Charts row | 1 col | 1 col | 2/3 + 1/3 split |
| Users table | horizontal scroll | full table | full table |

---

## 7. Page hierarchy

```
/                          Public landing page
├─ #home       Hero        title, subtitle, CTA "Get Started", dashboard preview
├─ #features   Features    6 cards (3 with "Coming soon"/"Future" badges)
├─ #pricing    Pricing     Starter / Pro (featured) / Enterprise
├─ #roadmap    Roadmap     Version 1 → 4 timeline
├─ #about      About       mission + 3 principles
└─ #contact    Contact     email CTA + social links

/login                     Username · Password · Remember me · Login
                           (no registration in MVP; default admin account)

/dashboard                 ⛨ protected by middleware (HMAC session cookie)
├─ /dashboard                    Stat cards · visits chart · recent activity
├─ /dashboard/users              Table · search · filters · pagination · CRUD dialogs
├─ /dashboard/analytics          Traffic cards · line chart · weekday bars · top pages · recent visitors
├─ /dashboard/settings           General · maintenance mode · future features (disabled)
├─ /dashboard/ai-assistant       Coming Soon (V2)
├─ /dashboard/trading-memory     Coming Soon (V2)
├─ /dashboard/price-alerts       Coming Soon (V3)
├─ /dashboard/trading-agent      Coming Soon (V4)
└─ /dashboard/broker-connections Coming Soon (V4)

/api/auth/logout           POST — clears session, redirects to /login
```

---

## 8. Component hierarchy

Organized for React + Next.js (App Router). Layers: **primitives → composites → features**.

```
src/components/
├─ ui/                        ← design-system primitives
│  ├─ button.tsx              Button + buttonClasses() (primary/secondary/outline/ghost/danger × sm/md/lg)
│  ├─ card.tsx                Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
│  ├─ input.tsx               Input, PasswordInput, Field, Select, Checkbox, inputClasses
│  ├─ switch.tsx              Accessible toggle (role="switch")
│  ├─ dialog.tsx              Modal (Escape close, backdrop click, scroll lock, footer slot)
│  ├─ badge.tsx               Badge (neutral/accent/outline/soon) + StatusBadge
│  ├─ table.tsx               Table, Th, Tr, Td (hover, hairline rows)
│  ├─ pagination.tsx          Ranged pagination ("Showing 1–8 of 24")
│  ├─ avatar.tsx              Deterministic initials avatar
│  ├─ stat-card.tsx           Icon chip + label + value + delta + sparkline slot
│  ├─ logo.tsx                LogoMark + Logo wordmark
│  └─ brand-icons.tsx         GitHub / X / LinkedIn inline SVGs
├─ charts/                    ← dependency-free SVG charts
│  ├─ line-chart.tsx          Area + line + gridlines + end-dot (7/30-day ranges)
│  ├─ bar-chart.tsx           Weekday bars, accent highlight on peak
│  └─ sparkline.tsx           Tiny trendline for stat cards
├─ site/                      ← landing page sections
│  ├─ site-header.tsx         Sticky glass header · nav · Login · mobile menu
│  ├─ hero.tsx                Badge · H1 · subtitle · CTAs · glow
│  ├─ dashboard-preview.tsx   Hand-built miniature dashboard (hero visual)
│  ├─ section-heading.tsx     Eyebrow + title + lede
│  ├─ features.tsx  pricing.tsx  roadmap.tsx  about.tsx  contact.tsx
│  └─ site-footer.tsx         Link columns · socials · copyright
└─ dashboard/                 ← admin app
   ├─ shell.tsx               Sidebar + topbar + main; mobile drawer state
   ├─ sidebar.tsx             Nav groups incl. reserved future modules; user card; logout
   ├─ page-header.tsx         Title + description + actions slot
   ├─ visits-chart-card.tsx   Chart card with 7d/30d tabs
   └─ coming-soon.tsx         Shared placeholder for reserved modules
```

Data & logic live in `src/lib/`:

```
src/lib/
├─ auth.ts         Edge-safe session primitives (HMAC via Web Crypto), admin credentials
├─ session.ts      Server-side getSession() for layouts/pages
├─ navigation.ts   Single source of truth for dashboard nav (+ "soon" flags)
├─ data.ts         Mock data layer — the contract a real backend must satisfy
└─ utils.ts        cn(), formatters (deterministic, SSR-safe)
```

---

## 9. Wireframes

### Landing — Hero + Features

```
┌──────────────────────────────────────────────────────────────┐
│ ◆ Trader Insight   Home Features Pricing Roadmap About  [Login] │
├──────────────────────────────────────────────────────────────┤
│                    [ AI-ready · Version 1 ]                  │
│            Analyze Your Trading Like a Professional          │
│        A personal trading journal platform for traders.      │
│              Track. Understand. Improve.                     │
│            [ Get Started → ]  [ Explore features ]           │
│  ┌────────────────────────────────────────────────────┐      │
│  │ ⬤ ⬤ ⬤        traderinsight.app/dashboard          │      │
│  │ ├──────┬───────────────────────────────────────┤   │      │
│  │ │nav   │  [Users 24] [Visits 1,249] [Stmts 342]│   │      │
│  │ │      │  ╭────────── area chart ──────────╮   │   │      │
│  │ │Soon  │  ╰──────────────────────────────────╯  │   │      │
│  │ └──────┴───────────────────────────────────────┘   │      │
│  └──────────────────── (bottom fade) ─────────────────┘      │
└──────────────────────────────────────────────────────────────┘
```

### Login

```
        ← Back to site
            ◆ Trader Insight
        Sign in to Trader Insight
   ┌─────────────────────────────────┐
   │ Username  [ ▤ admin          ]  │
   │ Password  [ ▩ ••••••••   👁 ]   │
   │ ☐ Remember me                   │
   │ [           Sign in           ] │
   └─────────────────────────────────┘
   ┊ Default credentials (env-config)┊
```

### Dashboard shell

```
┌───────────────┬───────────────────────────────────────────┐
│ ◆ Trader      │ ☰  Dashboard        [⌕ Search ⌘K] ↗ ◉     │
├───────────────┼───────────────────────────────────────────┤
│ OVERVIEW      │ ┌─────────┬─────────┬─────────┬─────────┐ │
│ ▣ Dashboard   │ │Users 24 │Visits   │Statements│ System │ │
│  Users        │ │+3 spark │18,452   │342       │  ✓ Oper│ │
│  Analytics    │ └─────────┴─────────┴─────────┴─────────┘ │
│ MANAGEMENT    │ ┌───────────────────────┬───────────────┐ │
│  Settings     │ │ Visits   [7d] [30d]   │ Recent        │ │
│ FUTURE        │ │  ╱╲    area chart     │ ○ activity    │ │
│  AI Asst Soon │ │ ╱  ╲__╱               │ ○ list        │ │
│  Memory  Soon │ └───────────────────────┴───────────────┘ │
│  Alerts  Soon │                                           │
│  Agent   Soon │                                           │
│  Broker  Soon │                                           │
├───────────────┤                                           │
│ ◉ Admin  ⎋    │                                           │
└───────────────┴───────────────────────────────────────────┘
```

### Users

```
┌──────────────────────────────────────────────────────────────┐
│ Users                                   [All statuses] [+ Add User] │
├──────────────────────────────────────────────────────────────┤
│ [⌕ Search name, username, email…]                            │
├──────────────────────────────────────────────────────────────┤
│ ID      NAME        USERNAME      EMAIL      STATUS CREATED ⚙│
│ TI-1001 ◉ Kenji W.  @kenji.w…     k…@gmail  ●Active Nov 19 👁✎🗑│
│ TI-1004 ◉ Sofia R.  @sofia.rossi  s…@gmail  ◌Invited Nov 12 👁✎🗑│
├──────────────────────────────────────────────────────────────┤
│ Showing 1–8 of 24 users          [‹] 1 2 3 [›]              │
└──────────────────────────────────────────────────────────────┘
   Delete → ┌──────────────────────────────┐
            │ Delete user            ✕    │
            │ ⚠ This action cannot be …    │
            │           [Cancel] [Delete]  │
            └──────────────────────────────┘
```

### Analytics / Settings / Coming Soon

```
ANALYTICS                          SETTINGS                 COMING SOON
[Total][Today][Week][Month]        ┌ General ───────────┐      (⌾)
┌ Visits [7d|30d] area ┐           │ Name  [Trader Ins.]│     Coming Soon
└──────────────────────┘           │ Logo  [▣][Upload]  │     V2 · On the roadmap
┌ Weekday bars ┐┌ Top pages ┐     │ Theme [Dark ▾]     │     description text
└──────────────┘└───────────┘     ├ Availability ──────┤     ✓ capability 1
┌ Recent visitors table ┐         │ Maintenance    [⬤] │     ✓ capability 2
└───────────────────────┘         ├ Future (disabled) ─┤     [View the roadmap →]
                                  │ AI Module   [⬤]🔒  │
                                  │ Price Alerts[⬤]🔒  │
                                  │ Trading Agent[⬤]🔒 │
                                  │            [Save ✓]│
                                  └────────────────────┘
```

---

## 10. Future-ready architecture

**Reserved navigation** — `src/lib/navigation.ts` already lists AI Assistant,
Trading Memory, Price Alerts, Trading Agent and Broker Connections, each
flagged `soon: true` with its roadmap version. The sidebar renders them with a
"Soon" chip pointing at "Coming Soon" pages.

**Swap-in path per module** — when a module ships:
1. Create the real page at the reserved route (`/dashboard/<module>`).
2. Flip `soon: false` in `navigation.ts`.
3. Delete the `ComingSoon` placeholder. No layout, shell or route changes.

**Settings parity** — Settings already renders AI Module, Price Alerts and
Trading Agent switches (disabled, "Coming soon"), so enabling a module
features = flipping one switch in the UI.

**Data layer** — every page reads from `src/lib/data.ts`. Its exported types
(`AdminUser`, `VisitorRow`, `ActivityItem`, `analytics`, `visitsLast30Days`)
are the contract a real backend must satisfy. Recommended next step:
Supabase (the project already has a Supabase connection configured in this
workspace) — replace `data.ts` exports with queries/RLS-protected tables:
`app_users`, `visits_daily`, `activity_log`, `visitors`, `site_settings`.
Auth: keep the current HMAC session cookie, or move to Supabase Auth with the
admin account seeded from `ADMIN_USERNAME`/`ADMIN_PASSWORD`.

---

## 11. Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack) + React 19 + TypeScript |
| Styling | Tailwind CSS v4 (CSS-first tokens in `globals.css`) |
| Fonts | Geist Sans / Mono via `geist` (bundled, no CDN) |
| Icons | lucide-react + inline brand SVGs |
| Charts | Hand-rolled SVG (`components/charts`) — zero chart dependencies |
| State | React hooks only; dialogs/forms are native primitives |
| Auth | HMAC-signed httpOnly session cookie, Edge middleware guard |
