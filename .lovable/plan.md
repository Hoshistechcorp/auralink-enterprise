

# Enterprise Landing Page — Premium C-Suite Conversion Redesign

The current page is functional but reads like a product feature list. This redesign transforms it into a luxury hospitality conversion machine that makes CMOs, CTOs, and GMs feel like this was built for their brand.

## What Changes

### 1. Cinematic Hero with Real Photography (`EnterpriseHero.tsx` — rewrite)
- Full-bleed background using Unsplash fine dining image with dark gradient overlay
- Headline: **"Your Guests Deserve More Than a Website"** — speaks to the outcome, not the product
- Three animated stat counters: **312% more engagement**, **8 revenue streams**, **Live in 24 hours**
- Two CTAs: coral "Launch Your AuraLink →" and outlined "Book a Strategy Call"
- Subtle film-grain texture overlay for editorial luxury feel

### 2. Trust Bar — NEW component (`EnterpriseTrustBar.tsx`)
- Horizontal strip: "TRUSTED BY LEADING HOSPITALITY BRANDS"
- Aspirational brand names in a scrolling marquee: Nobu, Soho House, Zuma, Tao Group, W Hotels, Mandarin Oriental
- Muted gold text on dark bg, auto-scrolling animation

### 3. Revenue & Market Stats Strip — NEW component (`EnterpriseRevenueStrip.tsx`)
- Three large stat blocks side by side with cross-hatch texture background
- **$1.9T** global hospitality market · **73%** guests prefer mobile-first · **$4.2B** lost annually to tool fragmentation
- Gold accent numbers, white labels — CMOs speak this language

### 4. Before vs. After — NEW component (`EnterpriseBeforeAfter.tsx`)
- Two-column comparison with red "Before" and green "After"
- Six pain points vs. six AuraLink solutions side by side:
  - "5 separate tools" → "One unified platform"
  - "No guest data" → "Real-time analytics dashboard"
  - "Generic links" → "Branded microsite with 15 modules"
  - "Zero loyalty program" → "Gamified rewards & tiers"
  - "Manual gift cards" → "Digital gift card commerce"
  - "No AI support" → "24/7 multilingual AI concierge"
- This is the "holy shit, that's us" moment for any GM

### 5. Public Microsite Preview — NEW component (`EnterpriseMicrositePreview.tsx`)
- Full-width section: "See What Your Guests See"
- Interactive phone mockup showing the actual AuraLink microsite card grid (15 cards)
- Pulls the real card data from the Microsite page (Gift Cards, Menu, Reviews, AI Concierge, etc.)
- Rendered in a phone frame with dark bg, glowing border
- "Try the Live Demo →" button linking to `/microsite`

### 6. Why AuraLink Cards (`EnterpriseWhyCards.tsx` — enhanced)
- Keep 4 cards but add **hard ROI metrics** to each:
  - One Link: "Replace 5 tools, save $2,400/mo"
  - AI Concierge: "Handle 80% of guest inquiries automatically"
  - Gamified Growth: "3.2x repeat visit rate"
  - Analytics: "Know your ROI per dollar in real-time"
- Add hover glow effect matching border color

### 7. Immersive Feature Rows — NEW component (`EnterpriseFeatureRows.tsx`)
- Three full-width alternating rows with real Unsplash images:
  - **VibeGigs** — Live entertainment booking with artist marketplace image, stats: "62% faster staffing"
  - **Flex-it** — Tipping & payments with restaurant service image, stats: "$127K avg annual gift card revenue"
  - **AI Concierge** — Guest assistant with hotel concierge image, stats: "Speaks 40+ languages, 24/7"
- Each row: image on one side, text + CTA on other, alternating layout

### 8. Chain Benefits Grid — NEW component (`EnterpriseChainBenefits.tsx`)
- "BUILT FOR CHAINS & MULTI-LOCATION BRANDS"
- Six cards specifically for enterprise operators with ROI numbers:
  - 40% admin reduction across locations
  - $127K avg gift card revenue per venue
  - 62% faster staffing with VibeGigs
  - 3.2x repeat visits with gamification
  - 80% inquiry automation with AI
  - Real-time cross-location analytics
- Gold/coral gradient borders

### 9. C-Suite CTA Cards — NEW component (`EnterpriseCSuiteCTAs.tsx`)
- Three role-specific cards side by side:
  - **GM / COO**: "Streamline operations across every location" → "Get Your Venue Live"
  - **CMO**: "Turn every guest interaction into measurable revenue" → "Book a Strategy Call"
  - **CTO**: "One API, zero maintenance, enterprise-grade security" → "View Technical Docs"
- Each card has a different accent color (coral, gold, teal)

### 10. Gift Cards (`EnterpriseGiftCards.tsx` — keep as-is)

### 11. Video Demo (`EnterpriseVideoDemo.tsx` — enhanced)
- Add real restaurant background image behind play button
- Add animated glow ring around play button
- Add caption: "Watch a Michelin-starred restaurant go live in under 3 minutes"

### 12. Venue Types (`EnterpriseVenueTypes.tsx` — keep as-is)

### 13. Final CTA (`EnterpriseCTA.tsx` — rewrite)
- Headline: "Your guests don't want six apps. Give them one."
- Four trust signals underneath: "SOC 2 Compliant" · "99.9% Uptime" · "GDPR Ready" · "Enterprise SLA"
- Warm gradient glow background

### 14. Footer (`EnterpriseFooter.tsx` — keep as-is)

### 15. Segment Nav (`LandingSegmentNav.tsx` — restyle)
- Dark theme variant: `bg-white/[0.04]` background, `border-white/[0.08]` border, white text

## Files to Create (6 new)
- `src/components/enterprise/EnterpriseTrustBar.tsx`
- `src/components/enterprise/EnterpriseRevenueStrip.tsx`
- `src/components/enterprise/EnterpriseBeforeAfter.tsx`
- `src/components/enterprise/EnterpriseMicrositePreview.tsx`
- `src/components/enterprise/EnterpriseFeatureRows.tsx`
- `src/components/enterprise/EnterpriseChainBenefits.tsx`
- `src/components/enterprise/EnterpriseCSuiteCTAs.tsx`

## Files to Edit (5 existing)
- `src/pages/Index.tsx` — add new sections in order
- `src/components/enterprise/EnterpriseHero.tsx` — cinematic rewrite
- `src/components/enterprise/EnterpriseWhyCards.tsx` — add ROI metrics
- `src/components/enterprise/EnterpriseVideoDemo.tsx` — add background image + glow
- `src/components/enterprise/EnterpriseCTA.tsx` — rewrite with trust signals
- `src/components/aura/LandingSegmentNav.tsx` — dark variant styling

## New Section Order in Index.tsx
1. Nav (keep)
2. LandingSegmentNav (dark-styled)
3. EnterpriseHero (cinematic)
4. EnterpriseTrustBar (new)
5. EnterpriseRevenueStrip (new)
6. EnterpriseWhyCards (enhanced)
7. EnterpriseBeforeAfter (new)
8. EnterpriseMicrositePreview (new — the public view)
9. EnterpriseFeatureRows (new)
10. EnterpriseEcosystem (keep)
11. EnterpriseGiftCards (keep)
12. EnterpriseChainBenefits (new)
13. EnterpriseCSuiteCTAs (new)
14. EnterpriseVideoDemo (enhanced)
15. EnterpriseVenueTypes (keep)
16. EnterpriseCTA (rewritten)
17. EnterpriseFooter (keep)

## Design Notes
- Real Unsplash images via URL for hero, feature rows, and video bg
- Gold gradient system: `#D4A853` → `#E8604C` for premium feel
- Film grain CSS texture overlay on hero
- All new sections use `framer-motion` scroll animations
- Phone mockup for microsite preview uses CSS device frame

