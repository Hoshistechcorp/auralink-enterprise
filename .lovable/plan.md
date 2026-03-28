

# Tourism Board Landing Page — Full Remix

The screenshots show a warm, light-themed design from the Claude HTML reference. The current page is dark-themed. This remix adds the 6 missing sections from the reference while keeping the existing dark sections that work well (15-card showcase, category grid, landmark mosaic).

## New Page Flow

1. **Nav** (warm light theme — `#FAFAF8` background, coral CTA, "AuraLink Tourism" serif branding)
2. **Segment Nav** (keep existing)
3. **Hero** — Warm theme: "Turn Your City Into a *Digital Destination*" with coral/cream palette, proof points
4. **Stats Strip** — NEW — Dark band with 4 gold stats ($1.9T, 73%, 15, 48hr)
5. **Problem Section** — NEW — Light `#FAFAF8` bg, 3 pain cards (Fragmented Marketing, Zero Visibility, Expensive & Slow)
6. **Solution + Phone Mockup** — NEW — Warm `#F5F0E8` bg, centered phone frame showing "Visit Atlanta" with all 15 card icons
7. **How It Works** — NEW — Light bg, 3-step flow (Claim, Activate, Share & Measure) with coral/teal/gold circles
8. **15-Card Showcase** — Keep existing (dark theme, already built)
9. **Category Deep-Dive** — Keep existing (dark theme)
10. **Dashboard Preview** — NEW — Light bg left column (feature bullets) + dark mockup panel right column with metrics & bar chart
11. **Buyer Tiers** — NEW — Warm `#F5F0E8` bg, 4 cards (City, State, National, Economic Dev) with budget ranges
12. **Image Grid** — Keep existing
13. **Parallax City Band** — Keep existing
14. **Capabilities** — Keep existing (3 pillars, dark)
15. **Landmark Mosaic** — Keep existing
16. **CTA** — Update to warm theme: "Your destination deserves more than a *brochure.*" with cream bg + coral buttons
17. **Footer** — Update to dark with "AuraLink Tourism by iBloov Global Inc."

## Files to Create (6 new components)

### `src/components/tourism/TourismStatsStrip.tsx`
- Dark `bg-[#0D1117]` horizontal band
- 4-column grid: "$1.9T" (Global tourism market), "73%" (Mobile planning), "15" (Cards), "48hr" (Signup to live)
- Gold `#D4A853` accent for numbers, muted white text for labels

### `src/components/tourism/TourismProblem.tsx`
- Light `bg-[#FAFAF8]` section
- Header: "THE PROBLEM" label + serif heading "Your destination's digital presence is scattered..."
- 3 stacked cards on white bg with emoji icons: Fragmented Marketing, Zero Visibility, Expensive & Slow

### `src/components/tourism/TourismPhoneMockup.tsx`
- Warm `bg-[#F5F0E8]` section
- Header: "THE SOLUTION" + "One destination hub. Everything a visitor needs."
- Centered phone-shaped CSS card: teal header with "Visit Atlanta" + rating/visitor count, white body with 3x5 grid of 15 card icons, action buttons (Plan Trip, Map, Events, Share)

### `src/components/tourism/TourismHowItWorks.tsx`
- Light `bg-[#FAFAF8]` section
- "HOW IT WORKS" label + "Live in three steps." serif heading
- 3 vertical steps with colored circles (coral #1, teal #2, gold #3)
- Each: numbered circle, bold title, one-line description

### `src/components/tourism/TourismDashboard.tsx`
- Light bg, split layout (2 columns on desktop)
- Left: "TOURISM DASHBOARD" label, serif heading "Know exactly what drives your visitors.", description, 4 feature rows (Visitor Analytics, Top Performers, Seasonal Trends, Demographics) on warm cards
- Right: Dark mockup panel with 4 metric tiles (Page Views 847K, Unique Visitors 312K, Avg Time 4:32, Top Attraction Georgia Aquarium) + CSS bar chart

### `src/components/tourism/TourismBuyerTiers.tsx`
- Warm `bg-[#F5F0E8]` section
- "BUILT FOR" label + "From cities to countries." serif heading
- 2x2 grid of white cards: City ($500K-$5M), State ($5M-$50M), National ($50M-$500M), Economic Development (Grant-funded)
- Each with emoji icon, title, description, coral budget text

## Files to Edit

### `src/pages/TourismLanding.tsx`
- Update nav to warm light theme (white bg, dark text, coral CTA "Get Your Destination Live")
- Import and insert all 6 new components in correct order
- Remove `TourismUseCases` (replaced by Problem + BuyerTiers)
- Keep dark sections (CardShowcase, CategoryGrid, Capabilities, LandmarkMosaic) as contrast bands
- Update wrapper div from `bg-[#0a0a0a] text-white` to allow mixed light/dark sections

### `src/components/tourism/TourismHero.tsx`
- Switch from dark cinematic hero to warm light hero matching reference
- Cream `bg-[#FAFAF8]` background, no background image
- Badge: "BUILT FOR DESTINATIONS"
- Headline: "Turn Your City Into a *Digital Destination*" (italic coral accent)
- Coral primary CTA + outlined secondary CTA
- Three proof points: "Live in under 48 hours", "No developers needed", "Works on every device"

### `src/components/tourism/TourismCTA.tsx`
- Switch from orange gradient card to warm light theme
- Cream/warm gradient background
- Serif heading: "Your destination deserves more than a *brochure.*"
- Coral primary button + outlined "Book a Demo" secondary

### `src/components/tourism/TourismFooter.tsx`
- Update to: "AuraLink Tourism by iBloov Global Inc."
- Subline: "The digital infrastructure for modern tourism. Atlanta, GA."

## Technical Notes
- Warm sections use: `bg-[#FAFAF8]` (paper), `bg-[#F5F0E8]` (warm), `text-[#0D1117]` (ink)
- Coral accent: `#E8604C`, Teal: `#1B9AAA`, Gold: `#D4A853`
- Dark sections (card showcase, category grid, capabilities) remain as contrast bands
- All new components use `framer-motion` for scroll animations
- Phone mockup is pure CSS (rounded rectangle + shadow)
- Dashboard mockup uses CSS bars, no charting library

