

# Enterprise Landing Page — Full Remix

The current `/enterprise` page (Index.tsx) is a minimal light-themed page with small cards and basic sections. The reference screenshots show a bold, dark-themed design with large serif typography, emoji icons, colored border accents, an iBloov ecosystem section, gift card commerce, venue types, video demo, and a powerful CTA. This remix transforms the page into a high-impact dark Enterprise landing.

## New Page Flow

1. **Nav** — Dark sticky nav: iBloov logo + "AuraLink" + "ENTERPRISE" label + coral "Get Started Free →" CTA
2. **Segment Nav** — Keep existing, styled dark
3. **Hero** — Dark bg, large serif: "Not just a page. A hospitality operating system." + description + "Claim Your AuraLink →" coral CTA + "Book a Demo" outlined + proof points
4. **Why AuraLink** — NEW — 4 benefit cards (One Link Everything, AI Concierge, Gamified Growth, Real-Time Analytics) with emoji icons and colored borders
5. **iBloov Ecosystem** — NEW — "THE IBLOOV ECOSYSTEM" label, "Not just a page. A hospitality operating system." + 6 product cards (VibeGigs, Flex-it, Gift Cards, TribeMint, PicPop, AI Concierge) each with emoji icon, subtitle, description, and 3 feature tags. Dashboard screenshot mockup floating on right side.
6. **Gift Card Commerce** — NEW — Left-aligned header "Sell digital gift cards directly from your page." + 4 pill tabs (Create & Customize, Sell & Deliver, Track & Analyze, Redeem & Manage) + 2x2 grid of gift card mockups ($50, $100, $200, $500) with emoji icons and colored gradient backgrounds
7. **Video Demo** — "SEE IT IN ACTION" + "Watch AuraLink work for a real restaurant." + video placeholder with coral play button
8. **Venue Types** — NEW — "BUILT FOR EVERY VENUE" + "Your venue type. Your AuraLink." + 5 stacked venue cards (Restaurants, Hotels & Resorts, Bars & Lounges, Clubs & Nightlife, Event Venues) each with emoji icon, colored border accent, and rich description
9. **CTA** — "READY?" + serif "Stop stitching together five apps. Use one." + description listing replaced tools + coral CTA + "Book a Demo" + proof points + warm gradient glow
10. **Footer** — Dark: "AuraLink Enterprise by iBloov Global Inc." + "The hospitality operating system. Atlanta, GA · Launching May 2026 with FIFA World Cup." + AURA ecosystem line

## Files to Create (5 new components)

### `src/components/enterprise/EnterpriseHero.tsx`
- Dark `bg-[#0D1117]`, large serif heading, coral accent, two CTAs, proof points strip

### `src/components/enterprise/EnterpriseWhyCards.tsx`
- 4 horizontal benefit cards with emoji icons and colored left borders on dark bg

### `src/components/enterprise/EnterpriseEcosystem.tsx`
- Section header + 6 stacked product cards (VibeGigs, Flex-it, Gift Cards, TribeMint, PicPop, AI Concierge) with emoji icons, subtitles, descriptions, and 3 feature tags each. Each card has a colored border glow matching its brand color. CSS dashboard mockup floating on right.

### `src/components/enterprise/EnterpriseGiftCards.tsx`
- Left-aligned text + 4 pill tabs + 2x2 grid of gift card mockups with emoji icons, dollar amounts in serif, colored gradient backgrounds, and codes

### `src/components/enterprise/EnterpriseVenueTypes.tsx`
- "BUILT FOR EVERY VENUE" + 5 stacked cards with emoji icons, colored border accents (coral, amber, teal, pink, cyan), venue names, and rich descriptions

### `src/components/enterprise/EnterpriseCTA.tsx`
- Dark bg with warm gradient glow, "READY?" label, serif heading about replacing 5 apps, description listing tools, coral + outlined CTAs, proof points

### `src/components/enterprise/EnterpriseFooter.tsx`
- Dark footer with branding, FIFA World Cup launch line, AURA ecosystem

### `src/components/enterprise/EnterpriseVideoDemo.tsx`
- "SEE IT IN ACTION" + video placeholder with coral play button

## Files to Edit

### `src/pages/Index.tsx`
- Complete rewrite: dark-themed wrapper, import and compose all new Enterprise components in order. Remove all existing light-themed sections. Keep segment nav integration.

## Design System
- Background: `#0D1117` (ink black)
- Card surfaces: `bg-white/[0.03]` with `border-white/[0.06]`
- Typography: Playfair Display serif for headings, Inter for body
- Coral accent: `#E8604C` for CTAs and highlights
- Text: `white` for headings, `white/60` for body, `white/30` for muted
- Card borders: colored accents per venue/product (coral, amber, teal, purple, cyan, pink)
- Emoji icons: 56px on dark rounded squares
- All sections use `framer-motion` scroll animations
- Proof points use colored text (teal `#1B9AAA`)

