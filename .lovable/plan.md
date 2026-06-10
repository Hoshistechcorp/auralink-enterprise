# AuraLink Feature Removal Stakeholder Document

## Objective
Generate a professional internal stakeholder document (DOCX) that records what product features were removed from the AuraLink platform, why they were removed, and the impact on Engineering, Marketing, and Business Development teams.

## Document Structure

### 1. Executive Summary
- Brief overview of the scope reduction decision
- Timeline context (removed now, to be revisited later)
- High-level impact statement

### 2. Removed Features (Detailed Inventory)

#### 2.1 Engagement Section (Entire Section Removed)
The following dashboard modules and their corresponding microsite cards are no longer accessible via the UI:

| Feature | Dashboard Path | Microsite Card | Notes |
|---------|---------------|----------------|-------|
| Gamification | /dashboard/gamification | Freebie Game | Spin & Win game engine |
| Loyalty Program | /dashboard/loyalty | (none) | Points-based loyalty system |
| Referrals | /dashboard/referrals | Refer a Friend | Give $10, Get $10 program |

#### 2.2 Insights Section (Entire Section Removed)
| Feature | Dashboard Path | Notes |
|---------|---------------|-------|
| SEO & Maps | /dashboard/seo | Local SEO optimization tools |
| Reputation | /dashboard/reputation | Review aggregation & management |

#### 2.3 Card Studio — Removed Cards
- Freebie Game card
- Refer a Friend card

#### 2.4 Plans & Subscription — Removed from Marketing Copy
- Loyalty program mentions removed from plan highlights
- Reputation management mentions removed from plan highlights
- SEO tools mentions removed from plan highlights
- Maverick plan card count adjusted from "12 cards" to "10 cards"

#### 2.5 Analytics — Removed Tracking
- Freebie Game performance metrics removed from card performance table
- Refer a Friend performance metrics removed from card performance table

#### 2.6 Documentation — Removed Sections
- Gamification module documentation removed
- Loyalty module documentation removed
- SEO & Maps module documentation removed
- Reputation module documentation removed
- Card Studio documentation updated to reflect 13 active cards (was 15)

#### 2.7 Admin Panel — Removed Gating
- Tier gating rules for Freebie Game, Refer a Friend, Loyalty, Reputation, and SEO removed from the `tabRequiredPlan` map

### 3. Rationale
- **Primary reason:** Time constraints per Product Manager directive
- **Secondary reason:** Focus engineering and go-to-market efforts on core platform features (Menu, Gift Cards, Staff, Events, AI Concierge, Affiliate, etc.)
- **Decision authority:** Product Management
- **Expected revisit:** These features will be revisited and potentially restored in a future release cycle

### 4. Impact by Stakeholder Team

#### Engineering
- Source code for removed features remains in the codebase (pages, components, logic) to facilitate future restoration
- No active maintenance required for removed UI entry points
- Route definitions preserved; direct URL access to removed pages is still technically possible but unlinked

#### Marketing
- Remove Engagement and Insights sections from all sales collateral, landing pages, and pitch decks
- Update plan comparison charts: Maverick now shows 10 cards (not 12)
- Update feature lists: remove Gamification, Loyalty, Referrals, SEO, Reputation
- Messaging pivot: emphasize core cards (Menu, Gift Cards, Staff, Events, AI Concierge, Private Dining, Gallery, Affiliate)

#### Business Development
- Do not sell or demo Engagement or Insights modules to prospects
- Existing conversations mentioning these features should be redirected to the core value proposition
- Partnership discussions (e.g., SEO integrations, reputation platforms) should be paused
- Gift Cards remains a sellable feature (moved to Business section, unchanged functionality)

### 5. Related Changes (Not Removals)
- **Gift Cards moved:** Relocated from Engagement section to Business section in the dashboard sidebar navigation
- **Delete Confirmation Modals:** Added project-wide confirmation dialogs before any delete action (prevents accidental data loss)
- **Branding Text Update:** "IBloov" replaced with "AuraLink" across the platform (except microsite footer, which remains "Powered by IBloov")

### 6. Technical Preservation Notes
- Files retained for future restoration:
  - `src/pages/dashboard/GamificationPage.tsx`
  - `src/pages/dashboard/LoyaltyPage.tsx`
  - `src/pages/dashboard/ReferralPage.tsx`
  - `src/pages/dashboard/ReputationPage.tsx`
  - `src/pages/dashboard/SEOPage.tsx`
  - `src/pages/microsite/FreebieGamePage.tsx`
  - `src/pages/microsite/ReferralLinkPage.tsx`
- All UI entry points (sidebar nav, Card Studio, plans, analytics, documentation, admin gating) have been stripped

### 7. Next Steps & Revisit Criteria
- Features are shelved, not deleted
- Revisit triggers: post-launch stability, customer demand signals, competitive pressure, or dedicated sprint capacity
- Engineering estimate to restore: low (code preserved; primarily re-enabling UI links and updating copy)

## Output
- Format: DOCX (Microsoft Word)
- Styling: Professional corporate memo style, clean tables for feature inventory
- File location: `/mnt/documents/AuraLink_Feature_Removal_Stakeholder_Document.docx`

## Technical Details
- Generate using `docx` npm package via Node.js script
- US Letter page size, 1-inch margins
- Arial font family, professional heading hierarchy
- Tables with clear borders for the feature inventory
- No emojis, no decorative accent lines under titles