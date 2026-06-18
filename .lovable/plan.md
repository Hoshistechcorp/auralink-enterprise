# Expand the AuraLink Landing — iBloov Ecosystem, LoveLetter & TribeMint

Build on the current vibrant Linktree-style Enterprise landing (`/enterprise`) by adding richer product storytelling and two dedicated, fully-styled sections for **LoveLetter** (global reviews) and **TribeMint** (affiliate/influencer engine), plus a deeper ecosystem showcase. Same neo-playful skin: cream/lime/coral/sky/violet color blocks, 2px ink borders, chunky offset shadows, Framer Motion energy.

## What changes

**Scope:** `src/pages/Index.tsx` + new `src/components/enterprise/v3/*` sections only. No backend, no dashboard, no Tourism landing.

### 1. New section — `LoveLetterSection.tsx` 💌
Full-bleed **coral/cream** band themed around `loveletter.ibloov.com`.

- Headline: "Leave a Love Letter." Sub: "The new, global way to review the places you love — and the venues that love you back."
- Split layout: left = copy + 3 feature bullets ("Find any venue worldwide", "Wall of Love & Top 10 trending", "Unread Love Letters waiting for owners"); right = mocked phone/card showing a Love Letter UI (heart envelope icon from `HeartLetter`, sample letter cards, "Wall of Love" chips).
- Two CTAs: **"Send a Love Letter"** → external `https://loveletter.ibloov.com/`, **"Claim your venue"** → `/signup?slug=` (reuses claim flow).
- Floating sticker badges: ❤️, 💌, ⭐, "Top 10" pill — same neo-brutalist style.

### 2. New section — `TribeMintSection.tsx` 🌀
Full-bleed **violet/sky** band themed around TribeMint affiliate marketing for leisure & experiences.

- Headline: "Turn every fan into a tribe." Sub: "TribeMint is the affiliate & influencer engine for leisure, hospitality and experience brands — every customer earns when they share."
- 3-column "how it works" mini-cards: **Mint a link** → **Share the vibe** → **Earn on every booking**.
- Stats strip (illustrative): "0% setup", "Real-time commissions", "Cross-venue tribe".
- CTA: **"Activate TribeMint"** → `/signup?slug=` (with note "Included in Maverick & Supernova").
- Floating stickers: 🌀, 💸, 🔗, "Affiliate" pill.

### 3. Rebuild — `EcosystemShowcase.tsx` (replaces nothing; new section)
A vibrant re-skin of the existing `EnterpriseEcosystem` content (currently dark-themed), brought into the v3 cream/neo-brutalist style with **8 products** instead of 6:

| Product | Color | One-liner |
|---|---|---|
| 🎟️ iBloov Event | coral | High-volume booking, ticketing & social rituals engine. |
| ⚡ SPARK | lime | Micro-learning that turns Sparks into certified Mavericks. |
| 🎵 VibesGigs | violet | The "Uber for Hospitality" — instant verified-talent shifts. |
| 🌀 TribeMint | sky | Affiliate engine turning every guest into a micro-influencer. |
| 📸 PicPop | coral | Collaborative event memory cloud & live memory walls. |
| 💸 Flex-it | lime | Social fintech for tipping, splitting & digital spraying. |
| 💌 LoveLetter | violet | Global reviews & Wall of Love for venues you love. |
| 🏛️ Municipal Nebula | sky | City-data intelligence for tourism boards & governments. |

Each tile: chunky bordered card, emoji sticker, name, one-liner, **"AuraLink Sync"** mini-row, hover-tilt animation. Two-row responsive grid.

### 4. Expand — `FeatureTiles.tsx`
Add 2 more tiles to the existing grid so it reflects ecosystem depth:
- "Reviews that travel" (LoveLetter integration)
- "Affiliate built-in" (TribeMint integration)

Keep all existing tiles + copy.

### 5. New section — `SectorsStrip.tsx` 🌍
Color-blocked **"Built for every leisure sector"** marquee/grid using current copy energy. Sectors (from project history): Restaurants, Hotels, Lounges & Nightclubs, Retail, Spas & Wellness, Tour Operators, Coffee Shops, Event Venues, Beach Clubs, Cruise & Yacht, Tourism Boards, Cultural Sites. Each as a chunky bordered chip with emoji, no nav target.

### 6. Wire new sections into `Index.tsx`
New order:

```text
NavBar
Hero
LogoStrip
SectorsStrip            ← new
BeforeAfter
FeatureTiles            ← expanded
LoveLetterSection       ← new
EcosystemShowcase       ← new (8 products)
TribeMintSection        ← new
HowItWorks
Pricing
Faq
FinalCta
Footer
StickyMobileCta
```

### 7. Nav update
Add anchor links in `NavBar.tsx`: "Ecosystem", "LoveLetter", "TribeMint" (smooth-scroll to section IDs). Keep "Get started" pill CTA.

## Out of scope
- No backend, auth, or routing changes (LoveLetter CTA is external link; TribeMint CTA reuses `/signup`).
- No edits to Tourism landing, dashboard, microsite, or business logic.
- No copy edits to existing v3 sections beyond `FeatureTiles` additions.

## Technical notes
- All new files in `src/components/enterprise/v3/`: `LoveLetterSection.tsx`, `TribeMintSection.tsx`, `EcosystemShowcase.tsx`, `SectorsStrip.tsx`.
- Edits: `src/pages/Index.tsx`, `src/components/enterprise/v3/NavBar.tsx`, `src/components/enterprise/v3/FeatureTiles.tsx`.
- Reuse existing palette tokens (`#FFF7ED`, `#C6F432`, `#FF7A59`, `#7CC7FF`, `#C8A2FF`, `#111`) and the chunky border / `6px 6px 0 #111` shadow recipe already established in v3.
- Reuse `HeartLetter` icon from `src/components/icons/HeartLetter.tsx` for LoveLetter visuals.
- Framer Motion: section-level fade-up + per-tile hover tilt, matching existing v3 motion register.
- All colors via the inline ink/lime/coral/sky/violet recipe already used across v3 components — no new theme tokens needed.
