

# Tourism Board Landing Page Overhaul

## What We're Building

A complete rebuild of the `/tourism` landing page to properly sell AuraLink as a **plug-and-play digital tourism hub** to tourism directors and city marketing departments. The copy shifts to "Bloomberg Terminal pitch meets travel magazine" — authoritative, data-driven, premium.

## Core Changes

### 1. Hero Section Rewrite (`TourismHero.tsx`)
- New headline: **"ONE LINK. ENTIRE DESTINATION."**
- Subhead reframing the value prop: "Replace fragmented websites, PDF brochures, and apps nobody downloads with one mobile-first destination hub — 15 modular cards covering everything a visitor needs."
- Three stat pills floating below CTA: "Drive More Visitors", "Keep Them Longer", "Measure Everything"
- Keep the cinematic parallax image + scroll indicator

### 2. New Section: The 15-Card Showcase (`TourismCardShowcase.tsx`)
- The centerpiece of the page — a visually stunning interactive grid showing all 15 tourism cards with their icons, names, descriptions, and iBloov integration labels
- Cards: Attractions, Things To Do, Events & Festivals, Food & Dining, Hotels & Stays, Cultural Experiences, Nature & Parks, Neighborhood Guide, Transportation, Visitor Services, Local Businesses, Photo Memories, Upcoming Deals, Local Creators, Plan Your Trip
- Each card has a colored icon, title, one-line description, and a small integration badge (e.g., "Place API", "Event Ticketing")
- Hover reveals a brief expanded description
- Section headline: "15 Cards. One Destination. Zero Friction."

### 3. New Section: Category Deep-Dive (`TourismCategoryGrid.tsx`)
- Inspired by Discover Atlanta's navigation — shows the major content categories visitors can explore:
  - **Fun Things To Do**: Attractions, Arts & Culture, Outdoors, History & Heritage, Shopping, Nightlife, Sports, Weekend Picks, Free & Cheap
  - **Events**: Festivals, Seasonal & Holidays, Family & Kids, Free Events, Submit Your Event
  - **Food & Drink**: Famous Restaurants, Culinary Experiences, Farmers Markets, Michelin Restaurants, Rooftop Bars, Lunch Spots
  - **Where To Stay**: All Hotels, Resorts, Luxury, Downtown, Airport Hotels
  - **Plan Your Visit**: Getting Around, Tours, Neighborhoods, Itineraries, Deals, Visitor Guide, Local Guides, LGBTQ
- Displayed as a multi-column grid with category headers and sub-items — showing the depth of content possible
- Each category column has a bold color accent matching the brand palette

### 4. Updated Use Cases Section (`TourismUseCases.tsx`)
- Rewrite copy to be sharper and more government/budget-focused
- Add a "The Problem" vs "The Solution" framing:
  - Problem: "Your destination runs on 47 disconnected tools — a website nobody updates, social pages with no analytics, PDF guides that die on download"
  - Solution: "One AuraLink hub. 15 smart cards. Real-time analytics. Works on every phone, no app download required."

### 5. Updated Capabilities Section (`TourismCapabilities.tsx`)
- Reorganize around the three core sell points: **Drive Visitors**, **Extend Stays**, **Measure Impact**
- Three columns with 4 features each instead of a flat 12-grid

### 6. Parallax City Band Update
- Change copy to: "From a $500K city bureau to a $500M national authority — same platform, infinite scale."

### 7. Keep Existing
- Landmark Mosaic (animated grid) — keep as-is
- CTA section — keep as-is  
- Footer — keep as-is
- Image Grid — keep but update category labels to match new card names

## Page Flow (Top to Bottom)
1. Nav + Segment Nav
2. Hero — "ONE LINK. ENTIRE DESTINATION."
3. 15-Card Showcase — the product demo
4. Category Deep-Dive — showing content depth
5. Image Grid (existing) — visual discovery
6. Use Cases — who it's for, reframed
7. Parallax City Band
8. Capabilities — three pillars
9. Landmark Mosaic (existing)
10. CTA + Footer (existing)

## Files to Create
- `src/components/tourism/TourismCardShowcase.tsx` — 15-card interactive grid
- `src/components/tourism/TourismCategoryGrid.tsx` — Discover Atlanta-style content depth display

## Files to Edit
- `src/pages/TourismLanding.tsx` — new section ordering + imports
- `src/components/tourism/TourismHero.tsx` — new headline and value prop copy
- `src/components/tourism/TourismUseCases.tsx` — sharper problem/solution framing
- `src/components/tourism/TourismCapabilities.tsx` — reorganize into 3 pillars

## Technical Notes
- All new components use `framer-motion` for scroll-triggered animations
- 15-card grid uses CSS grid with responsive breakpoints (2 cols mobile, 3 tablet, 5 desktop)
- Category grid uses a multi-column flexbox layout with sticky headers on mobile
- No new assets needed — uses Lucide icons for the 15 cards
- Maintains dark theme (`bg-[#0a0a0a]`) and existing brand colors (`#FF6B35`, `#FFD700`, `#00CED1`)

