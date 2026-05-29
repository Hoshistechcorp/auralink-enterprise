## Goal

Transform `/` (Enterprise landing) into a world-class, mobile-first SaaS page that an AI agent can scan in seconds and a busy hospitality manager can skim in under a minute. Cut text by ~60%, lead with outcomes and numbers, and surface the real in-app pricing (Spark / Maverick / Supernova).

## Direction (locked from your picks)

- Palette: Noir & Gold — `#0B0907` base, `#1B1714` surfaces, `#C9A35B → #E8C886` brass accent
- Type: Space Grotesk (display) + DM Sans (body), tight tracking, generous line-height
- Layout: Single-column focused storytelling, full-bleed on mobile, max-w-3xl on desktop centered

## New page structure (replaces current 11-section sprawl)

```text
1. NavBar (slim, sticky)              — logo · Pricing · Sign in · [Start free trial]
2. Hero                               — 1 headline, 1 sub, 2 CTAs, 1 phone mockup
3. Social proof strip                 — 5 logos + "Live in 3 min" badge
4. Problem → Solution (2 cards)       — "Before AuraLink / After AuraLink"
5. What you get (6 icon tiles)        — Gift cards · Reservations · AI Concierge · Loyalty · Analytics · QR
6. How it works (3 steps)             — Scan → Customize → Go live
7. Live preview (phone + caption)     — single screenshot, no carousel
8. Pricing (3 tiers, from app)        — Spark $0 · Maverick $79 · Supernova $149 + 20% annual toggle
9. FAQ (5 Q's, accordion)
10. Final CTA + Footer
```

Every section: one H2 (≤6 words), one sub-line (≤14 words), then visual. No paragraphs longer than 2 lines on mobile.

## Pricing section (pulled from `src/pages/dashboard/SubscriptionPage.tsx`)

Extract the canonical tier data into a new shared module so the landing page and the in-app subscription page stay in sync.

- `src/lib/plans.ts` — exports `PLANS` array: `{ id, name, price, tagline, highlights[], cards, cta, featured }`
- Spark — $0, 4 cards, "Get started free"
- Maverick — $79/mo, 11 cards, "Most popular" (featured)
- Supernova — $149/mo, all 16 cards + AI Concierge, "Go pro"
- Annual toggle shows −20% (same logic as in-app)
- Mention the 21-day Supernova trial on signup (already a core memory)

`SubscriptionPage.tsx` is refactored to import from `plans.ts` (no behavior change).

## Mobile-first / AI-scannable rules applied everywhere

- Every section has a 2-3 word eyebrow + short H2 + ≤14-word sub
- Numbers and outcomes lead (e.g. `312% engagement · 0% commission · 3 min setup`)
- Icon + label tiles instead of paragraphs
- Semantic HTML: one `<h1>`, one `<main>`, `<section aria-labelledby>` per block — improves both SEO and AI parsing
- Updated JSON-LD: add `Product` + `Offer` entries for the 3 tiers so AI agents extract pricing directly
- Touch targets ≥44px, CTAs full-width on mobile, sticky bottom CTA bar on scroll
- Test viewport: 390×844 (iPhone 14)

## Files

New
- `src/lib/plans.ts` — single source of truth for pricing
- `src/components/enterprise/v3/NavBar.tsx`
- `src/components/enterprise/v3/Hero.tsx`
- `src/components/enterprise/v3/LogoStrip.tsx`
- `src/components/enterprise/v3/BeforeAfter.tsx`
- `src/components/enterprise/v3/FeatureTiles.tsx` (6 icon tiles)
- `src/components/enterprise/v3/HowItWorks.tsx` (3 steps)
- `src/components/enterprise/v3/LivePreview.tsx`
- `src/components/enterprise/v3/Pricing.tsx` (consumes `plans.ts`)
- `src/components/enterprise/v3/Faq.tsx` (5 Q's)
- `src/components/enterprise/v3/FinalCta.tsx`
- `src/components/enterprise/v3/StickyMobileCta.tsx`

Edited
- `src/pages/Index.tsx` — swap v2 sections for v3, add Product JSON-LD with prices
- `src/pages/dashboard/SubscriptionPage.tsx` — read from `plans.ts`
- `tailwind.config.ts` / `src/index.css` — add brass-soft semantic tokens if missing (no overrides to other surfaces)

Untouched
- Tourism landing, dashboard pages other than Subscription, microsite, all libs except `plans.ts`

## Out of scope

- No backend changes (frontend-only per project memory)
- No changes to Tourism landing or microsite
- No new payment integration — pricing is presentational and routes to existing `/signup`
