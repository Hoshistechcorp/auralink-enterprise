# Plan: AuraLink QA Test Workbook (.xlsx)

## Objective
Deliver a clean, easy-to-use Excel workbook that lets you (PM) walk through every feature in AuraLink, mark pass/fail, and hand engineers a structured bug report.

## Format
- File: `AuraLink_QA_TestPlan_v1.xlsx` in `/mnt/documents/`
- Built with openpyxl, frozen header rows, dropdowns (data validation), conditional formatting (green Pass / red Fail / yellow Blocked), auto-filters, sensible column widths, color-coded section headers.

## Workbook Structure (6 tabs)

### 1. README
How to use the sheet, status legend, severity legend, workflow (test → mark status → log bugs in Bug Report tab → share file with engineers).

### 2. Test Summary (auto-calculated)
Dashboard with formulas:
- Total tests, # Pass, # Fail, # Blocked, # Not Tested, % complete, % pass rate
- Breakdown by module (Landing, Auth, Onboarding, Microsite, Dashboard, Subscription, Ecosystem)

### 3. Test Cases (the main sheet)
Columns:
`ID | Module | Sub-Area | Feature | Test Scenario | Steps | Expected Result | Route/URL | Status | Severity | Actual Result | Bug ID | Tester | Date | Notes`

Status dropdown: Not Tested / Pass / Fail / Blocked / N/A
Severity dropdown: Critical / High / Medium / Low
Conditional formatting on Status + Severity columns.

Coverage (~120–150 test cases) grouped by module, sourced from the codebase:

- **Landing Pages**: Enterprise (`/`, `/enterprise`) — hero, segment nav, feature grid, ecosystem map, testimonials, FAQ, footer, CTAs, SEO meta. Tourism (`/tourism`) — hero, stats, capabilities, card showcase, buyer tiers, CTA.
- **Auth**: Signup, Login, Forgot password, OTP verify, Reset password, session persistence, redirect after auth.
- **Onboarding**: 3-step wizard, progress tracking, 21-day Supernova trial activation, skip/resume.
- **Microsite (`/microsite`)**: Header, trial banner, 5 action buttons (Call/Message/Directions/Details/Reservations) with fallbacks, all 15 cards render, locked-card grayscale + lock overlay when trial expired, upgrade prompt, Aura Supermenu FAB, bottom brand bar.
- **Microsite sub-pages**: Menu, Gallery, Reviews, Concierge, Staff, Details, Private Dining, Popular Dishes, Awards, FAQs, Events, Social Links, Freebie Game, Referral, Affiliate, Gift Cards (one row per page: loads, content renders, back nav).
- **Dashboard**: Sidebar nav, location switcher, log out, each subpage loads — Analytics, QR, Affiliates, Subscription, Influencers, Loyalty, Referrals, SEO, Reputation, Enterprise, Settings, Admin, Gamification, Card Studio, Locations, Gift Cards, Team, Ecosystem launcher.
- **Subscription / Gating**: Trial banner countdown, plan tiers (Spark/Maverick/Supernova), card accessibility per tier, upgrade prompt, expired-trial behavior.
- **Ecosystem Launcher**: All 6 iBloov apps open `/dashboard/ecosystem/:appId`.
- **Cross-cutting**: Responsive mobile (≤430px), 404 route, console errors, broken links, image loading, dark/light theme, accessibility (focus, alt text), SEO meta on `/`.

### 4. Bug Report
`Bug ID | Linked Test ID | Title | Module | Severity | Steps to Reproduce | Expected | Actual | Screenshot/Link | Status (Open/In Progress/Fixed/Won't Fix) | Assignee | Date Reported | Date Fixed | Notes`
Dropdowns + conditional formatting on Status & Severity.

### 5. Feature Inventory (reference)
Read-only catalog of every route, feature, and component grouped by module — so engineers know exactly what scope was tested.

### 6. Sign-Off
Release name, version, tested by, reviewed by, dates, go/no-go decision, outstanding criticals.

## Implementation Steps
1. Read `src/App.tsx`, `src/lib/subscription.ts`, microsite cards list, dashboard pages, and tourism components to extract authoritative feature/route list.
2. Build openpyxl script in `/tmp/`, generate workbook to `/mnt/documents/AuraLink_QA_TestPlan_v1.xlsx`.
3. Recalculate formulas via the xlsx skill script.
4. QA: open with pandas, verify all sheets, row counts, no formula errors.
5. Deliver via `<lov-artifact>` tag with a short summary of how to use it.

## Deliverable
- `AuraLink_QA_TestPlan_v1.xlsx` — single self-contained file ready to share with engineering.

Approve and I'll generate it.