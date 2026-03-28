

# Enterprise Landing Page — Visual Polish & Content Trim

The page has good structure but needs: real photography, less text, a "View Public Page" CTA replacing "Book a Strategy Call," and visual richness across sections.

## Changes Overview

### 1. `EnterpriseHero.tsx` — Replace "Book a Strategy Call" with "View Public Page →"
- Change the outlined CTA to navigate to `/microsite` with text "See the Public View"
- Trim the description paragraph to one short punchy line

### 2. `EnterpriseWhyCards.tsx` — Add background images, trim text
- Add real Unsplash background images to each card (subtle overlay):
  - One Link: restaurant table with QR code `photo-1559339352-11d035aa65de`
  - AI Concierge: hotel lobby `photo-1566073771259-6a8506099945`
  - Gamified Growth: busy bar scene `photo-1514933651103-005eec06c04b`
  - Analytics: dashboard/laptop `photo-1460925895917-afdab827c52f`
- Shorten `desc` text to one line each
- Remove the metric pill badge (redundant with the stat)

### 3. `EnterpriseBeforeAfter.tsx` — Trim to 4 rows, add background image
- Reduce from 6 comparisons to 4 (the strongest ones)
- Add a subtle background image of a restaurant interior with heavy dark overlay
- Shorten the before/after text to be punchier (3-5 words each)

### 4. `EnterpriseMicrositePreview.tsx` — Trim text
- Shorten the description paragraph to one line
- Keep phone mockup and "Try the Live Demo" button as-is

### 5. `EnterpriseFeatureRows.tsx` — Already has real images, trim text
- Shorten each `desc` to 1 line
- Keep the stat + image layout

### 6. `EnterpriseEcosystem.tsx` — Add background images per card, trim text
- Add subtle Unsplash images as card backgrounds with dark overlays:
  - VibeGigs: concert `photo-1514525253161-7a46d19cd819`
  - Flex-it: gym `photo-1534438327276-14e5300c3a48`
  - Gift Cards: gift wrapping `photo-1513885535751-8b9238bd345a`
  - TribeMint: crowd `photo-1529156069898-49953e39b3ac`
  - PicPop: photo booth `photo-1527529482837-4698179dc6ce`
  - AI Concierge: hotel concierge `photo-1566073771259-6a8506099945`
- Shorten `desc` to one line each

### 7. `EnterpriseGiftCards.tsx` — Add real gift card background images
- Replace emoji with real food/drink images as card backgrounds with gradient overlays
  - Coffee: `photo-1509042239860-f550ce710b93`
  - Dinner: `photo-1414235077428-338989a2e8c0`
  - VIP: `photo-1559339352-11d035aa65de`
  - Ultimate: `photo-1517248135467-4c7edcad34c4`
- Trim left-side description text

### 8. `EnterpriseChainBenefits.tsx` — Trim text, keep stats prominent
- Shorten `desc` to single phrases (3-4 words)
- Remove section sub-description

### 9. `EnterpriseCSuiteCTAs.tsx` — Add real portrait/office images, trim text
- Add background images per card:
  - GM: hotel manager `photo-1556157382-97eda2d62296`
  - CMO: marketing meeting `photo-1552664730-d307ca884978`
  - CTO: tech office `photo-1519389950473-47ba0277781c`
- Shorten descriptions to one line
- Change CMO "Book a Strategy Call" → "See the Public View" → `/microsite`

### 10. `EnterpriseVenueTypes.tsx` — Add real venue images
- Add background images per venue card:
  - Restaurants: `photo-1517248135467-4c7edcad34c4`
  - Hotels: `photo-1566073771259-6a8506099945`
  - Bars: `photo-1514933651103-005eec06c04b`
  - Clubs: `photo-1514525253161-7a46d19cd819`
  - Events: `photo-1540575467063-178a50c2df87`
- Shorten descriptions to one line each

### 11. `EnterpriseCTA.tsx` — Add "View Public Page" button
- Replace "Book a Demo" outlined button with "See the Public View →" linking to `/microsite`
- Trim description text

### 12. `EnterpriseVideoDemo.tsx` — Trim text
- Shorten heading to one line

## Design Principles Applied
- Every section gets a real high-quality Unsplash image (hospitality/food/venue photography)
- Text trimmed to ~50% of current — punchy, scannable, no paragraphs
- "Book a Strategy Call" replaced with "See the Public View" (→ `/microsite`) across Hero, CSuite, and CTA sections
- Keep the dark theme, colors, and animation system exactly as-is

