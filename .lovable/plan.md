
# AuraLink by iBloov — Enterprise Landing Rebuild

Replace the current neon blue/purple "AuraLink Enterprise" landing with a premium, warm-dark, hospitality-grade page branded **AuraLink by iBloov**. AuraLink stays visually dominant; "by iBloov" is a small endorsement.

## Visual system overhaul (warm dark, no neon)

Update `src/index.css` and `tailwind.config.ts` to add an Enterprise-only palette and helpers (scoped via custom utility classes — won't affect dashboard/microsite):

- Background: espresso/near-black warm `#0B0907`, surfaces `#141110`/`#1B1714`
- Text: ivory `#F5EFE6`, warm stone `#A89B8C`
- Accent 1 (CTA, premium): brass/champagne gradient `#C9A35B` → `#E8C886`
- Accent 2 (AI / live status only): deep teal `#2C8A86`
- Success: muted sage `#7E9B6A`
- Borders: warm taupe `#2A2320`
- Subtle architectural grid texture utility `.bg-grid-warm` (very low opacity)
- Typography: keep Plus Jakarta Sans for UI, swap display headings to **Fraunces** (editorial serif) — already pairs well; add Google Font import. Add `.font-fraunces` utility.
- Remove `.glow-blue` / `.bg-aura-gradient` usage on this page; replace with `.bg-brass-gradient` and a soft warm `.glow-brass` shadow.
- One CTA style sitewide on this page: solid brass gradient pill, ivory text, soft brass glow. Secondary: ghost ivory border.

## Page structure (replaces current /enterprise composition)

Edit `src/pages/Index.tsx` to render the new sections in order. Keep `LandingSegmentNav` directly under the nav.

```text
NavBar (AuraLink | by iBloov)
LandingSegmentNav
1. Hero
2. TrustBar
3. ProblemContrast (Escape the ghost economy)
4. StrategicBenefits (4 blocks, asymmetric)
5. ProductArchitecture (15-card OS reveal)
6. UseCases (Restaurants / Hotels / Tourism+Enterprise)
7. EcosystemMap (AuraLink center → 5 iBloov products)
8. ProofMetrics (KPIs + 3 testimonials)
9. SecurityEnterprise
10. Faq
11. FinalCta
Footer (AuraLink by iBloov)
```

### 1. NavBar (rewrite `src/components/enterprise/v2/NavBar.tsx`)
- Lockup: bold "AuraLink" + smaller italic "by iBloov" beside a small brass mark.
- Links: Features, Use Cases, Ecosystem, Security, FAQ (all smooth-scroll anchors).
- Right: ghost "Sign In" → `/login`, primary brass "Book Enterprise Demo" → `/signup`.
- Sticky, espresso-blur background, taupe bottom border.

### 2. Hero (rewrite `src/components/enterprise/v2/Hero.tsx`)
- Eyebrow chip: `BY IBLOOV` in brass small caps.
- H1 (Fraunces serif): "AuraLink is the hospitality operating system for modern venues."
- Sub: "Replace six disconnected guest tools with one mobile-first hub for direct bookings, gift cards, multilingual AI concierge, loyalty, analytics, and affiliate growth."
- CTAs: **Book Enterprise Demo** (primary brass) / **See Live Demo** (ghost → `/microsite`).
- Trust row beneath: SOC 2 Compliant · 99.9% Uptime · GDPR Ready · Live in Under 3 Minutes.
- Right side: replace neon dashboard mockup with a **realistic mobile phone frame** showing a 15-card grid (CSS-built mini cards labelled Gift Cards, Menu, Reviews, AI Concierge, Events, etc.) with 2 floating brass KPI chips ("312% engagement", "80% auto-replied").
- Backdrop: warm hospitality image at low opacity + espresso gradient overlay (no purple/blue glow blobs — replace with brass radial glow).

### 3. TrustBar (new `v2/TrustBar.tsx`)
- Slim strip under hero: "Used by modern venues · Live in under 3 minutes · 40+ languages · Enterprise SLA available · Stripe-powered payments". Muted dividers.

### 4. ProblemContrast (rewrite `v2/ProblemSolution.tsx`)
- Title (serif): "Escape the ghost economy."
- Two warm panels side-by-side. Left "The old way" — taupe with subtle red-bronze tint, X icons: 6 tools, 6 subscriptions, third-party booking & delivery fees, scattered guest data, manual repetitive replies, disconnected loyalty.
- Right "The AuraLink way" — graphite with brass accents, check icons: one OS, direct revenue, owned customer data, AI concierge in 40+ languages, one guest-facing mobile hub, built-in referral & affiliate growth.
- Center divider with brass "VS" badge (small, refined).

### 5. StrategicBenefits (rewrite `v2/FeatureGrid.tsx` → asymmetric layout, not 2×2 equal grid)
- Title (serif): "Everything your venue needs. Nothing it doesn't."
- 4 blocks in an editorial layout (e.g., one large left + three stacked right):
  1. **Zero-fee commerce** — sell digital gift cards & event access directly. Proof: "Direct-to-bank settlement via Stripe."
  2. **24/7 multilingual AI concierge** — 40+ languages. Proof: "80% of guest questions automated."
  3. **Go live in minutes** — no devs, no IT bottlenecks. Proof: "Avg launch: 3 minutes."
  4. **Growth engine built in** — loyalty, referrals, gamification, TribeMint affiliates. Proof: "312% avg engagement lift."
- Icons: Lucide in brass-tinted rounded squares (no neon gradients).

### 6. ProductArchitecture (new `v2/ProductArchitecture.tsx`)
- Title (serif): "A 15-card operating system built for hospitality."
- Three labelled tiers with mini card chips:
  - **Core**: Gift Cards · Menu · Social Links · Reviews · FAQs
  - **Maverick**: Photo Gallery · Staff · Awards · Events · Popular Dishes
  - **Supernova**: AI Concierge · Private Dining & Ticketing · Freebie Game · Refer a Friend · Affiliate / TribeMint
- Each chip: small icon + name in warm card style. Note: "Activate the cards that fit your model — without rebuilding the experience."

### 7. UseCases (new `v2/UseCases.tsx`)
- Title (serif): "Built for every hospitality operator."
- Tabs (shadcn Tabs) — Restaurant Groups / Hotels & Resorts / Tourism Boards & Enterprise Venues. Each pane: short paragraph + 3 bullet outcomes (per the prompt) + a small inline mockup or icon row.

### 8. EcosystemMap (new `v2/EcosystemMap.tsx`)
- Title (serif): "More than a link. An entire operating system."
- Sub: "AuraLink connects your venue directly to the iBloov ecosystem…"
- Visual: AuraLink logo orb in the center, 5 brass-bordered nodes around it connected by thin SVG lines: VibesGigs (staffing), Flex-it (digital tipping), PicPop (UGC walls), TribeMint (affiliate), iBloov Insight (analytics). Each node: name + 1-line value prop. Responsive: collapses to vertical list on mobile.

### 9. ProofMetrics (rewrite `v2/Testimonials.tsx` → renamed file kept, content expanded)
- Title (serif): "Growth you can measure."
- KPI strip: 312% engagement · 80% tasks automated · 3-min time to value · direct gift card revenue · multi-location ready.
- 3 testimonial cards (warm graphite, brass accent line): Executive Chef · Hotel GM · Venue Owner. Outcome-led quotes.

### 10. SecurityEnterprise (new `v2/SecurityEnterprise.tsx`)
- Title (serif): "Enterprise-ready from day one."
- Two-column compact list with shield/lock/check icons: SOC 2 · 99.9% uptime SLA · GDPR & CCPA · Stripe Connect · PWA performance · Mobile-first architecture · Schema-ready for AI search.

### 11. Faq (edit `v2/FaqAccordion.tsx`)
- Replace items with the 6 specified: POS replacement, time to launch, multi-venue support, vs link-in-bio/booking tools, AI concierge mechanics, enterprise support. First item open by default.

### 12. FinalCta (rewrite `v2/FinalCta.tsx`)
- Premium dark card with brass border and soft warm glow (no purple/pink).
- H2 (serif): "One operating system for direct revenue, better guest experiences, and full data ownership."
- Sub: as specified.
- CTAs: **Book Enterprise Demo** (primary) + **See Live Demo** (ghost → `/microsite`).
- Reassurance line: "No coding required. Fast launch. Enterprise support available."

### 13. Footer (edit `v2/Footer.tsx`)
- Lockup: "AuraLink" bold + "by iBloov" smaller. Copy: "© 2026 iBloov Inc. The hospitality operating system." Add small links: Privacy · Terms · Contact (anchor `#`).

## Files to change

- Edit: `src/index.css` (add Fraunces import, warm tokens, `.bg-brass-gradient`, `.glow-brass`, `.bg-grid-warm`, `.font-fraunces`)
- Edit: `tailwind.config.ts` (add `fontFamily.fraunces`, brass color tokens)
- Edit: `src/pages/Index.tsx` (new section composition, swap bg color)
- Edit: `v2/NavBar.tsx`, `v2/Hero.tsx`, `v2/ProblemSolution.tsx`, `v2/FeatureGrid.tsx`, `v2/Testimonials.tsx`, `v2/FaqAccordion.tsx`, `v2/FinalCta.tsx`, `v2/Footer.tsx`
- Create: `v2/TrustBar.tsx`, `v2/ProductArchitecture.tsx`, `v2/UseCases.tsx`, `v2/EcosystemMap.tsx`, `v2/SecurityEnterprise.tsx`

## CTA + link behavior

- "Book Enterprise Demo" → `/signup` (single primary across page)
- "See Live Demo" → `/microsite`
- Nav links → smooth-scroll to `#features`, `#use-cases`, `#ecosystem`, `#security`, `#faq`
- Sign In → `/login`

## Out of scope

- No backend, no demo-booking form wiring (CTA routes to /signup for now).
- No changes to `/`, `/tourism`, dashboard, microsite, or onboarding pages.
- Old `EnterpriseHero/...` legacy components left untouched in repo.
