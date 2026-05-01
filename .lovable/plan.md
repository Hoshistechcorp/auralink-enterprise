# AuraLink Tourism — Premium Public-Sector Redesign

Transform `/tourism` from the current warm-light coral aesthetic into a **premium dark, institutional destination-OS** landing page targeting tourism boards, cities, states, and national tourism authorities. Anchor concept: **"the city as an interface"** — QR codes everywhere, one mobile destination hub, real analytics.

## Visual Direction

**Palette (replaces coral/cream system):**
- Base: `#0A0F1C` midnight, `#0F1626` graphite, `#141B2E` panel
- Text: `#F4F1EA` ivory, `#9BA5B7` slate
- Accents: brass `#C9A35B → #E8C886` (prestige), teal `#3FA7A0` (analytics/guidance), sage `#8FA888` (performance)
- Dividers: `#1F2638`

**Type:** Fraunces serif (already loaded) for hero + section titles; Plus Jakarta Sans for body/UI.

**Motifs:** Faint topographic/transit-line grid overlays, soft civic-light glows, subtle aerial-city imagery at low opacity behind the hero and a few section bands. No purple AI gradients, no neon, no cartoon travel art.

## Section-by-Section Plan (12 sections)

1. **Nav (rework)** — Dark glass header. Lockup: "AuraLink — by iBloov" with brass dot. Links: How It Works, Cards, Analytics, Use Cases, FAQ. Primary CTA: **Book a Tourism Demo**. Keep `LandingSegmentNav` below.

2. **Hero (rebuild)** — Headline: *"Turn your city into a digital destination."* Subhead about QR-powered hub. CTAs: Book a Tourism Demo / See a Destination Demo. Visual: premium phone mockup of a destination hub (15 cards) surrounded by 4 floating QR-touchpoint chips (Airport, Hotel Lobby, Landmark, Visitor Kiosk). Backdrop: dark twilight aerial-city image at ~12% opacity + transit-grid overlay + brass/teal radial glows. Below hero: 4 metric chips ($1.9T, 73%, 15 cards, 48hr).

3. **Problem (rebuild dark)** — Title: *"Your digital tourism presence is scattered, outdated, and invisible."* Three pain blocks: Fragmented Marketing / Zero Visibility / Slow & Expensive Platforms. Dark cards with brass icon wells.

4. **Solution + Phone Mockup (rebuild dark)** — Title: *"One destination hub. Everything a visitor needs."* Premium phone mockup on dark canvas with brass header band ("Visit Atlanta"), 15 modular tiles, surrounded by faint QR signage glyphs.

5. **How It Works** — Three steps on dark band: Claim Your Destination → Activate Your Cards → Deploy & Measure (QR rollout). Brass numbered nodes connected by a teal line.

6. **The 15 Cards (refresh)** — Title: *"15 cards. One destination. Zero friction."* Restyle existing card grid with brass/teal/sage palette in place of orange/gold/cyan; remove emoji-coded vibe, keep icon system; tighter institutional feel.

7. **NEW — Why QR Wins** — Title: *"Why QR codes outperform forgotten tourism websites."* Split layout: left column lists deployment surfaces (airport, train/bus, landmarks, museums, hotels, events, restaurant tables, posters) each with a small QR glyph; right column shows "Old model vs AuraLink model" comparison strip, then 5 outcome bullets (Faster discovery / Better mobile engagement / No app friction / Multilingual / Campaign ROI).

8. **NEW — Content Depth** — Title: *"Everything visitors search for, already organized."* Twelve category clusters as compact chip-cards (attractions, events, food, hotels, neighborhoods, itineraries, parking, family, free events, local guides, LGBTQ travel, seasonal campaigns) on dark canvas with sage hover.

9. **Tourism Analytics Dashboard (rebuild dark)** — Title: *"Know exactly what drives your visitors."* Dark institutional dashboard mockup (page views, unique visitors, avg engagement, top attraction, seasonal trends, traveler origin, campaign QR scans, citywide engagement). Teal bars + brass KPIs.

10. **Built for Scale (refresh)** — Title: *"From city bureaus to national tourism authorities."* Four audience cards (City / State & Provincial / National / Economic Development & Convention) on dark cards with brass borders.

11. **Three Pillars (refresh)** — Title: *"The government sell-in, in three outcomes."* Drive Visitors / Extend Stays / Measure Impact — restyle existing TourismCapabilities to brass/teal/sage instead of orange/gold/cyan.

12. **Final CTA (rebuild)** — Headline: *"Your destination deserves more than a brochure."* Dark gradient panel with brass border glow. CTAs: Book a Tourism Demo / See a Destination Demo. Reassurance line: "Fast launch. No app download. QR-ready. Built for modern tourism teams."

13. **Footer** — Refresh to dark institutional palette with iBloov endorsement.

## File Changes

**Rebuild (dark institutional):**
- `src/components/tourism/TourismHero.tsx`
- `src/components/tourism/TourismProblem.tsx`
- `src/components/tourism/TourismPhoneMockup.tsx`
- `src/components/tourism/TourismHowItWorks.tsx`
- `src/components/tourism/TourismDashboard.tsx`
- `src/components/tourism/TourismBuyerTiers.tsx`
- `src/components/tourism/TourismCTA.tsx`
- `src/components/tourism/TourismStatsStrip.tsx`
- `src/components/tourism/TourismFooter.tsx`

**Refresh palette:**
- `src/components/tourism/TourismCardShowcase.tsx`
- `src/components/tourism/TourismCapabilities.tsx`

**Create:**
- `src/components/tourism/TourismWhyQR.tsx` (Section 7)
- `src/components/tourism/TourismContentDepth.tsx` (Section 8)

**Restructure:**
- `src/pages/TourismLanding.tsx` — dark base (`bg-[#0A0F1C]`), reworked nav, new section order; remove the bright parallax city band, the buyer-tiers + capabilities will be reordered, drop `TourismImageGrid` and `TourismLandmarkMosaic` from the main flow (they don't fit the new institutional tone) or keep one tasteful global-examples band — see Section 11 below.

**Tailwind/CSS:**
- `tailwind.config.ts` + `src/index.css` — add tourism-scoped tokens (`--tourism-midnight`, `--tourism-brass`, `--tourism-teal`, `--tourism-sage`) and a `.bg-grid-transit` utility for the topographic overlay.

## Out of Scope
No backend, no real analytics wiring, no QR generation logic — visuals only. Existing routes (`/signup`, `/login`, `/microsite`) remain the CTA targets.
