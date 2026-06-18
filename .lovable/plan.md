# Linktree-Inspired AuraLink Landing Redesign

Reimagine the Enterprise landing (`/`) with Linktree's vibrant, playful energy while keeping AuraLink's existing copy and concept intact. Bright real backdrop, alive colors, and a hero "claim your link" input bar that previews `4i.fyi/businessname`.

## What changes

**Scope:** `src/pages/Index.tsx` and the `src/components/enterprise/v3/*` sections it renders. Tourism landing stays untouched.

### 1. New vibrant color system (presentation only)
- Move away from the current dark `#0B0907` + brass-only palette toward a Linktree-style bright multi-hue scheme:
  - Primary backdrop: warm cream `#FFF7ED` with large soft gradient blobs (lime `#C6F432`, coral `#FF7A59`, sky `#7CC7FF`, lavender `#C8A2FF`, iBloov blue `#1F2BD6`, iBloov orange `#F39A1F`).
  - Animated blurred gradient mesh + subtle grain for a "real, bright" backdrop.
- Sections alternate between cream, mint, peach, and periwinkle bands (full-bleed color blocks, à la Linktree).
- Add tokens in `src/index.css` (`--al-cream`, `--al-lime`, `--al-coral`, `--al-sky`, `--al-violet`, `--al-ink`) and Tailwind config entries; components consume tokens, no hardcoded hex in JSX.

### 2. Hero with claim-your-link bar (`v3/Hero.tsx`)
- Keep current headline + subhead copy.
- Replace the two stacked CTA buttons with a single pill-shaped **claim bar**:

```text
┌─────────────────────────────────────────────┐
│ 4i.fyi/ [ businessname              ] [Get →]│
└─────────────────────────────────────────────┘
```

  - Left prefix label `4i.fyi/` (non-editable, muted).
  - Text input (slug, lowercased, spaces → hyphens, alnum + `-` only, live preview underneath: "Your link: 4i.fyi/your-name").
  - "Get started free" CTA button on the right; on click → `navigate("/signup?slug=<value>")`.
  - On `Signup.tsx`, read `?slug=` from query string and prefill the business-name field (small, additive change — still presentation/flow, no backend).
- Secondary text link below: "See live demo →" (keeps existing `/microsite` route).
- Floating playful elements behind hero: tilted cards, sticker-style emojis/badges, animated marquee of sample links — same energy as linktr.ee hero.

### 3. Section refresh (same copy, new skin)
- `LogoStrip`, `BeforeAfter`, `FeatureTiles`, `HowItWorks`, `Pricing`, `Faq`, `FinalCta`: keep all text and structure. Re-skin with:
  - Color-blocked section backgrounds (cream → mint → peach → periwinkle → lime).
  - Chunky rounded cards (radius 28–32px), thick 2px ink borders, offset drop shadows (`6px 6px 0 #111`) for the neo-playful Linktree feel.
  - Typography: keep Space Grotesk display, but bump weight/scale; add a wobble/underline accent on key words.
  - Pricing tiers get distinct bright fills (Spark = lime, Maverick = coral, Supernova = violet) instead of monotone dark cards.
- Add subtle Framer Motion: floating tiles in hero, hover-tilt on pricing cards, marquee of "live AuraLinks".

### 4. Nav + sticky CTA
- `v3/NavBar.tsx`: switch to light glassy nav on cream background; pill "Get started" button uses ink-on-lime.
- `LandingSegmentNav` already-positioned switcher restyled for light backdrop (darker text, brand-blue active pill) so it reads on the new cream hero.
- `StickyMobileCta` becomes a sticky **claim bar** (same input + button) so mobile users can claim from anywhere on the page.

### 5. iBloov logo presence
- Use the uploaded iBloov logo as a small playful badge in the nav ("powered by iBloov") and as a floating sticker in the hero collage. Imported via Lovable Assets pointer from `/mnt/user-uploads/ibloov_logo.jpeg`.

## Out of scope
- No changes to Tourism landing, dashboard, microsite, auth logic, or backend.
- No copy rewrites — all current text stays.
- No new routes; `4i.fyi/<slug>` is presented as the future public URL but click-through still goes to `/signup` (slug passed via query).

## Technical notes
- Files edited: `src/index.css`, `tailwind.config.ts`, `src/pages/Index.tsx`, `src/pages/Signup.tsx` (slug prefill only), and all `src/components/enterprise/v3/*.tsx`.
- New file: `src/components/enterprise/v3/ClaimLinkBar.tsx` (reused in hero + sticky mobile CTA).
- New asset pointer: `src/assets/ibloov-logo.jpeg.asset.json`.
- All colors via semantic tokens; no `text-white`/`bg-black` literals.
