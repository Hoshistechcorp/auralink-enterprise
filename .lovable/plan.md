## QA Test Checklist — AuraLink Platform

Generate a clean, simple QA test checklist as a DOCX for the internal QA team. The doc covers every feature currently shipped (post the Engagement/Insights removal), with one row per test case and pass/fail columns.

### Document structure

1. **Cover / Header**
   - Title: "AuraLink — QA Test Checklist"
   - Subtitle: "Internal QA · Build verification for current feature scope"
   - Date, Version, Tester name fields (blank)
   - 2-line how-to-use note (mark Pass/Fail/Blocked, add notes, file bugs by Test ID)

2. **Legend & conventions**
   - Test ID format: `AREA-###` (e.g. `AUTH-001`)
   - Status values: Pass / Fail / Blocked / N/A
   - Severity for failures: Critical / High / Medium / Low

3. **Test sections** (each is a table: ID · Test Case · Steps · Expected Result · Status · Notes)

   - **Auth & Onboarding (AUTH)** — Signup with account-type selector (Enterprise / Tourism), OTP verification, login, forgot/reset password, logout, onboarding wizard 3 steps, trial banner shows 21 days.
   - **Landing Pages (LAND)** — Enterprise landing, Tourism landing, segment nav switch, CTAs route to signup, FAQ accordion, pricing tiers visible.
   - **Dashboard Shell (DASH)** — Sidebar sections (Overview / Marketing / Business) expand/collapse, location switcher in header, dark mode toggle, Ecosystem launcher, Log Out.
   - **Admin Panel (ADMIN)** — Modal-first edits, timezone & visibility controls, tier gating still applied to remaining cards.
   - **Card Studio (CARD)** — 13 active cards render, lock/glassmorphism on gated cards, edit microsite actions, preview updates live.
   - **Analytics (ANL)** — Traffic metrics, card CTR table (no removed cards), acquisition channels.
   - **Wallet (WAL)** — Balance / pending / lifetime totals, transaction list, add withdrawal method (US bank fields: holder name & type, bank, 9-digit routing, account, checking/savings, ZIP), PayPal & Stripe methods, withdrawal creates a debit transaction.
   - **QR Codes & Links (QR)** — Generate, edit, download QR; short links create/copy.
   - **Marketing — Affiliates / Influencers / Gift Cards (MKT)** — Affiliate dashboard, influencer flows, Gift Cards dashboard (purchasing, POS, redemption portal) under Marketing section.
   - **Locations (LOC)** — Add/edit/delete location with confirm modal, header switcher reflects change.
   - **Team — Branch Managers (BM)** — Super admin creates manager, assigns one branch, sets password; manager logs in, sees only their branch dashboard, cannot create another manager, can add/manage staff for their branch only.
   - **Team — Staff (STAFF)** — Add waiter/chef/host/bartender/MoD/other, edit, deactivate, delete with confirm; scoped to branch for branch managers.
   - **Enterprise & Subscription (SUB)** — Multi-location sync, plan compare (Spark / Maverick 10 cards / Supernova), upgrade flow, usage meter.
   - **Settings (SET)** — Profile, business contact, certifications, legal links.
   - **Microsite — Guest view (MS)** — Header actions, Aura Supermenu, bottom brand bar, all visible cards open correct pages.
   - **Microsite Cards (MSC)** — Menu, Popular Dishes, Gallery, Reviews, Events, Private Dining, Concierge (AI), Staff, Awards, FAQs, Details, Social Links, Affiliate, Gift Cards.
   - **Staff Tip Flow (TIP)** — Tap Tip on a staff member, modal opens, preset amounts (5/10/20/50), custom amount validates (>0, ≤$1000), Continue redirects to payment URL with `?amount=` query.
   - **Gift Cards Purchase (GC)** — Buy gift card on microsite, amount selection, checkout, redemption portal.
   - **Concierge (CON)** — AI chat returns responses, suggested prompts work.
   - **Reservations & Events (RES)** — Booking flow, event RSVP.
   - **Cross-cutting (XC)** — Delete confirmation modals fire before every destructive action; AuraLink branding everywhere except microsite footer ("Powered by IBloov"); toast notifications visible; mobile responsive at 430px.

4. **Bug summary table at the end** — Bug ID · Test ID · Severity · Description · Status (Open/Fixed) · Owner.

5. **Sign-off block** — QA lead name, date, build version.

### Style & format

- US Letter, 1" margins, Arial throughout.
- Heading 1 for the title; Heading 2 per section.
- One full-width table per section with consistent columns: `Test ID (1") · Test Case (1.6") · Steps (3") · Expected Result (2.2") · Status (0.8") · Notes (0.8")`.
- Light gray header rows (`D5E8F0` shading), thin borders, cell padding.
- No emojis, no decorative lines.

### Technical details

- Generate using `docx` npm package via a Node script at `/tmp/build_qa.js`.
- Page size DXA: 12240 × 15840, margins 1440 all sides; content width 9360.
- Use `LevelFormat.BULLET` for any bulleted notes.
- Output file: `/mnt/documents/AuraLink_QA_Test_Checklist.docx`.
- After write: convert to PDF via LibreOffice, then to images with `pdftoppm`, and visually inspect each page for clipping/overflow; fix and re-run if needed.
- Emit `<presentation-artifact path="AuraLink_QA_Test_Checklist.docx" mime_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document"></presentation-artifact>`.
