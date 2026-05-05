# Plan: AuraLink PRD (End-to-End Product Requirements Document)

## Objective
Produce a comprehensive, board-ready Product Requirements Document for **AuraLink by iBloov**, covering both product segments currently in the codebase:
1. **AuraLink for Hospitality** (Enterprise — restaurants, hotels, lounges)
2. **AuraLink for Tourism Boards** (Destinations — cities, states, ministries)

The PRD will be delivered as a downloadable **.docx** file (with an optional **.pdf** export) saved to `/mnt/documents/`, so you can share it with stakeholders, engineering, and investors.

## Format
- Primary: `AuraLink_PRD_v1.docx` (editable Word document, professional typography)
- Optional secondary: `AuraLink_PRD_v1.pdf` (read-only export for sharing)

If you'd prefer a different format (Google Docs, Notion-style markdown, Confluence-ready), say the word and I'll switch.

## PRD Structure (sections to be authored)

1. **Document Control** — version, owner, status, revision history
2. **Executive Summary** — vision, mission, the AuraLink thesis, why now
3. **Product Overview**
   - Brand architecture (AuraLink as product, iBloov as parent)
   - The two product surfaces: Hospitality & Tourism Board
   - The 15-card modular microsite system
4. **Goals & Success Metrics** — North Star metric, OKRs, KPIs per segment
5. **Market & Personas**
   - Hospitality buyers: GM, F&B Director, Marketing Lead, Owner
   - Tourism buyers: CTO/CIO of tourism board, DMO Director, Mayor's office, Convention Bureau
   - End-user personas: diner, hotel guest, traveler, visitor
6. **Problem Statements & JTBD** — pains AuraLink solves vs. status quo (websites nobody visits, app fatigue, fragmented tools)
7. **Solution & Core Value Props** — QR-first, modular, multi-tenant, AI-native
8. **Functional Requirements** (the meat — feature-by-feature)
   - Microsite system & 15 cards (Menu, Reviews, Gift Cards, AI Concierge, etc.)
   - Card Studio (admin editor)
   - Onboarding flow (3-step wizard, 21-day Supernova trial)
   - Subscription tiers (Spark, Maverick, Supernova) + trial logic + gating
   - Enterprise multi-location management
   - Tourism-specific card modules
   - Gamification (Spin & Win), Loyalty, Referral, Affiliate
   - Gift Cards (purchase, POS, redemption)
   - Staff Tipping, Reservations, Reviews aggregation, Events
   - AI Concierge
   - QR Management
   - Analytics & Insights (traffic, CTR, channels)
   - Local SEO & reputation
   - iBloov Ecosystem Launcher (6 core products)
   - Auth, roles (admin/moderator/user via separate `user_roles` table)
9. **Non-Functional Requirements** — performance, accessibility (WCAG AA), i18n, security, privacy/GDPR, uptime SLA
10. **Information Architecture & Routing** — sitemap (`/`, `/enterprise`, `/tourism`, `/dashboard/*`, `/microsite/*`, auth flows)
11. **UX & Design System** — design tokens, themes, typography, photography, modal-first creation pattern, gated-card visual treatment
12. **Technical Architecture**
    - Frontend: React 18 + Vite + Tailwind + shadcn
    - Backend: Lovable Cloud (Supabase) — RLS, `user_roles`, `has_role()` security definer
    - Data model overview
    - Integrations (POS, OpenTable/Resy, maps, payments)
13. **Analytics & Instrumentation** — events, dashboards, attribution
14. **Go-to-Market** — pricing, packaging, sales motion (B2B + B2G), pilot program for tourism boards
15. **Roadmap** — Now / Next / Later, phased by segment
16. **Risks, Assumptions, Dependencies**
17. **Open Questions**
18. **Appendix** — glossary, competitive landscape, route map, card matrix by tier

## Sourcing
Content will be grounded in the actual codebase and project memory:
- Memory index (subscription, onboarding, hospitality modules, tourism modules, ecosystem launcher, admin tools, gift cards, marketing/gamification, analytics)
- Routes from `src/App.tsx`
- Subscription logic from `src/lib/subscription.ts`
- Component inventory across `src/components/enterprise/v2/*` and `src/components/tourism/*`
- Microsite cards from `src/pages/Microsite.tsx`

## Implementation Steps (after approval)
1. Read the relevant memory files and key source files to extract authoritative details (subscription tiers, card lists, tourism modules, ecosystem launcher, etc.)
2. Generate the PRD content in a Node script using `docx` (per the docx skill: US Letter, Arial, proper headings, TOC, tables for feature matrices and tier comparison)
3. Pack to `/mnt/documents/AuraLink_PRD_v1.docx`
4. Convert to PDF via LibreOffice for the secondary deliverable
5. QA: render every page to images, inspect for layout/overflow/typos, fix and re-render
6. Deliver via `<lov-artifact>` tags for both files

## Deliverables
- `AuraLink_PRD_v1.docx` (primary, editable)
- `AuraLink_PRD_v1.pdf` (read-only share copy)
- Brief summary in chat of what's inside and what to review first

Approve this plan and I'll generate the PRD.
