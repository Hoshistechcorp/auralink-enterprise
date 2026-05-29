# Rename "Reviews" → "Love Letter" with external redirect

## Goal
When a guest taps the Reviews card on the microsite, label it **Love Letter** and open `https://loveletterreview.lovable.app` in a new tab instead of the internal `/microsite/reviews` page.

## Scope
Limited to the public microsite card + supporting references. Internal dashboard analytics labels (Reputation, review counts, etc.) remain unchanged since they refer to review data, not the card name.

## Changes

1. **`src/pages/dashboard/CardStudioPage.tsx`**
   - Card id `4`: rename `title` from `Reviews` to `Love Letter`, change `subtitle` to something like `Send us love`, and set `path` to the external URL `https://loveletterreview.lovable.app`.

2. **`src/pages/Microsite.tsx`**
   - Update the default card list entry from `Reviews / 4.8 avg` to `Love Letter / Send us love`.
   - Update the path map: replace `"Reviews": "/microsite/reviews"` with `"Love Letter": "https://loveletterreview.lovable.app"`.
   - In the card click handler, detect external URLs (starts with `http`) and open via `window.open(url, "_blank", "noopener,noreferrer")` instead of `navigate(...)`.

3. **`src/lib/subscription.ts`**
   - In `sparkCards`, rename `"Reviews"` → `"Love Letter"` so the free-tier gating still applies to the renamed card.

4. **`src/App.tsx`** *(optional cleanup)*
   - The `/microsite/reviews` route + `ReviewsPage` import are no longer reachable from the card. Leave the route in place for now (safe, no-op) unless you want it removed — confirm if you'd like the file deleted.

## Out of scope
- Dashboard pages that mention "Reviews" in the context of reputation/analytics data (ReputationPage, AnalyticsPage, SEOPage, etc.) — they describe review data, not the renamed card.
- Enterprise/Tourism landing previews that show generic card grids — can be updated in a follow-up if desired.

## Verification
- Open `/microsite`, confirm the 4th card shows **Love Letter** with the new subtitle and the star icon.
- Click it → opens `https://loveletterreview.lovable.app` in a new tab.
- Free-tier gating still treats the card as included (visible, not locked).
