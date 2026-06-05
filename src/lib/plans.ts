/**
 * Single source of truth for IBloov subscription tiers.
 * Used by /pricing on the landing page and the in-app Subscription page.
 */
export type PlanId = "spark" | "maverick" | "supernova";

export interface Plan {
  id: PlanId;
  name: string;
  price: number; // monthly USD
  tagline: string;
  cardCount: string;
  highlights: string[];
  featured?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: "spark",
    name: "Spark",
    price: 0,
    tagline: "Get started with the essentials",
    cardCount: "7 cards",
    highlights: [
      "Details, Menu, Social, Reviews, FAQs",
      "Gift Cards (3% platform commission per sale)",
      "1 QR code",
      "2 staff profiles",
    ],
  },

  {
    id: "maverick",
    name: "Maverick",
    price: 79,
    tagline: "For growing venues",
    cardCount: "12 cards",
    featured: true,
    highlights: [
      "Gift Cards (0% commission), Events, Awards, Staff",
      "5 QR codes · 10 staff profiles",
      "Analytics dashboard",
      "Basic SEO",
    ],
  },

  {
    id: "supernova",
    name: "Supernova",
    price: 149,
    tagline: "All 16 cards + full power tools",
    cardCount: "All 16 cards",
    highlights: [
      "AI Concierge, Private Dining, Gallery",
      "Loyalty + Reputation tools",
      "Unlimited QRs & staff",
      "Custom branding · Priority support",
    ],
  },
];

export const annualPrice = (monthly: number) => Math.round(monthly * 0.8);
export const TRIAL_DAYS = 21;
export const SPARK_GIFT_CARD_COMMISSION = 0.03; // 3% platform commission on Spark plan gift card sales

