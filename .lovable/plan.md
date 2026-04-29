# AuraLink Enterprise — Premium Dark Landing Redesign

Rebuild `/enterprise` (Index.tsx) into a sleek, dark-mode, neon-accent SaaS landing page modeled after Stripe/Vercel/Linear. The current page uses warm earth tones (#E8604C orange, #D4A853 gold) and stock food photography — both replaced with deep charcoal + electric blue / cosmic purple "Aura" glow, abstract glassmorphism UI mockups, and Plus Jakarta Sans typography.

## Visual System (new)

- **Palette**: bg `#08080B` (near-black) → `#0B0B12` panels. Neon accents: Electric Blue `#3B82F6` → Cosmic Purple `#8B5CF6` gradient. Success green `#10B981` for "solution" column. Muted red `#F87171` for "problem" column.
- **Typography**: Add Plus Jakarta Sans via Google Fonts (alongside existing Inter). Use it for all display headings on this page. Tight tracking, large H1 (clamp 48–80px).
- **Effects**: Glassmorphism (`backdrop-blur-xl`, `bg-white/[0.03]`, `border-white/[0.08]`), animated radial glows behind hero/CTA, subtle grid pattern background, glowing shadow on primary buttons (`shadow-[0_0_40px_rgba(59,130,246,0.4)]`).
- **No food photos.** Mockups are CSS/SVG-built fake dashboard cards, floating glass panes, and abstract geometric shapes.

## Page Structure (replaces current sections on /enterprise only)

1. **Top Nav** — `AuraLink Enterprise` wordmark left · center links (Features, Pricing, Use Cases, Log In) · right CTA "Get Started" (solid blue→purple gradient, glowing). Sticky, blurred.
2. **Hero (split, above-the-fold)** — Left: eyebrow chip "Hospitality OS · v2026", H1 "The All-in-One Digital Hub for Modern Hospitality.", subheadline copy as provided, two CTAs ("Claim Your Venue's AuraLink" glowing primary + "See It In Action (1-Min Video)" ghost outline), trust banner row with shield/bolt/rocket glyphs. Right: floating glassmorphism dashboard mockup — fake stats cards ("Bookings Today 142", "Gift Cards Sold $4.2K", AI chat bubble, mini bar chart), gently animated with framer-motion (float + parallax).
3. **Problem vs Solution** — Two-column split. Left dark-red tinted glass panel "The Old Way" with 4 X-icon items (delivery fees, fragmented stack OpenTable/Linktree/IG, lost guest data, manual ops). Right blue/purple-glowing panel "The AuraLink Way" with 4 Check-icon items (0% gift card commission, direct bookings, 24/7 AI, 100% data ownership). Center divider with glowing "VS" badge.
4. **Core Features (2×2 grid)** — Headline "Everything your venue needs. Nothing it doesn't." Four glassmorphism cards, each with a neon-glowing Lucide icon in a rounded square, title, description: Zero-Fee Gift Cards (Gift), Multilingual AI Concierge (Sparkles), Private Dining & Events (CalendarCheck), TribeMint Affiliate Engine (Megaphone). Hover lifts + glow.
5. **Social Proof** — "Join 500+ venues plugging the revenue leak." 3 glassmorphism testimonial cards in a row (stack on mobile): 5-star row, quote emphasizing time saved / revenue gained, avatar (initial monogram in gradient circle), name + role (Executive Chef, Hotel GM, Lounge Owner). Subtle horizontal scroll on mobile.
6. **FAQ Accordion** — Use existing shadcn `Accordion`. Three items as specified (POS replacement open by default, setup time, zero-fee commerce). Glass panel container, smooth chevron rotate.
7. **Final Footer CTA** — Large centered card with blue→purple gradient border + inner glow. H2 "Ready to become a Maverick?", sub "Build your venue's digital headquarters today.", single big glowing CTA "Claim Your Handle". Below it, slim footer with logo + © line.

Keep `LandingSegmentNav` (Guest / Enterprise / Tourism switcher) directly under the new nav so segment navigation still works.

## Files to change

- **Edit** `src/index.css` — add Plus Jakarta Sans import; add `.font-jakarta` utility and a `.bg-grid` + `.glow-blue` / `.glow-purple` helper classes (scoped, won't affect other pages).
- **Edit** `tailwind.config.ts` — extend `fontFamily.jakarta`, add `keyframes`/`animation` for `float` and `glow-pulse`.
- **Edit** `src/pages/Index.tsx` — replace the section composition with the 7 new components below; swap nav styling to neon theme; keep `LandingSegmentNav`.
- **Create** `src/components/enterprise/v2/NavBar.tsx`
- **Create** `src/components/enterprise/v2/Hero.tsx` (with inline `DashboardMockup` subcomponent — pure CSS/SVG, no images)
- **Create** `src/components/enterprise/v2/ProblemSolution.tsx`
- **Create** `src/components/enterprise/v2/FeatureGrid.tsx`
- **Create** `src/components/enterprise/v2/Testimonials.tsx`
- **Create** `src/components/enterprise/v2/FaqAccordion.tsx`
- **Create** `src/components/enterprise/v2/FinalCta.tsx`
- **Create** `src/components/enterprise/v2/Footer.tsx`

Old `EnterpriseHero`, `EnterpriseTrustBar`, `EnterpriseWhyCards`, `EnterpriseMicrositePreview`, `EnterpriseEcosystem`, `EnterpriseGiftCards`, `EnterpriseGrowthShowcase`, `EnterpriseVideoDemo`, `EnterpriseVenueTypes`, `EnterpriseBeforeAfter`, `EnterpriseCTA`, `EnterpriseFooter` — left in repo (not deleted) so other pages/components that may reference them keep working, but no longer rendered on `/enterprise`.

## Behavior & links

- "Get Started" / "Claim Your Venue's AuraLink" / "Claim Your Handle" → `/signup`
- "Log In" → `/login`
- "See It In Action" → scrolls to a video placeholder anchor inside Hero (or `/microsite` if you prefer — happy to switch).
- Features / Pricing / Use Cases nav links → smooth-scroll anchors (`#features`, `#pricing` placeholder = scroll to FAQ for now, `#use-cases` placeholder = scroll to testimonials). No new routes added.

## Responsiveness

Mobile-first: hero stacks (text → mockup), 2×2 grid → 1-col, testimonials → horizontal snap-scroll, nav collapses center links into a hamburger-free simplified header on `<sm` (Sign In + Get Started visible only).

## Out of scope

- No backend / pricing data wiring.
- No changes to `/`, `/tourism`, dashboard, or microsite pages.
- No new routes.
