/* ── Subscription & Trial Logic ────────────────────── */

export type PlanId = "spark" | "maverick" | "supernova";

export interface SubscriptionState {
  plan: PlanId;
  trialActive: boolean;
  trialStartDate: string | null; // ISO date
  trialEndDate: string | null;   // ISO date
  reservationUrl: string;
  reservationProvider: string; // "opentable" | "resy" | "custom"
}

const STORAGE_KEY = "auralink_subscription";
const TRIAL_DAYS = 14;

const defaultState: SubscriptionState = {
  plan: "spark",
  trialActive: false,
  trialStartDate: null,
  trialEndDate: null,
  reservationUrl: "",
  reservationProvider: "opentable",
};

export const getSubscription = (): SubscriptionState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultState };
    const state: SubscriptionState = { ...defaultState, ...JSON.parse(raw) };
    // Auto-downgrade if trial expired
    if (state.trialActive && state.trialEndDate) {
      if (new Date() > new Date(state.trialEndDate)) {
        state.trialActive = false;
        state.trialStartDate = null;
        state.trialEndDate = null;
        saveSubscription(state);
      }
    }
    return state;
  } catch {
    return { ...defaultState };
  }
};

export const saveSubscription = (state: SubscriptionState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const startTrial = (): SubscriptionState => {
  const now = new Date();
  const end = new Date(now);
  end.setDate(end.getDate() + TRIAL_DAYS);
  const state: SubscriptionState = {
    ...getSubscription(),
    trialActive: true,
    trialStartDate: now.toISOString(),
    trialEndDate: end.toISOString(),
  };
  saveSubscription(state);
  return state;
};

export const getTrialDaysLeft = (state: SubscriptionState): number => {
  if (!state.trialActive || !state.trialEndDate) return 0;
  const diff = new Date(state.trialEndDate).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
};

export const getEffectivePlan = (state: SubscriptionState): PlanId => {
  if (state.trialActive && state.trialEndDate && new Date() <= new Date(state.trialEndDate)) {
    return "supernova"; // Trial unlocks everything
  }
  return state.plan;
};

/* Card access by tier */
const sparkCards = ["Details", "Menu", "Social Links", "Reviews", "FAQs"];
const maverickCards = [...sparkCards, "Freebie Game", "Staff", "Awards", "Events", "Popular Dishes"];
const supernovaCards = [...maverickCards, "AI Concierge", "Private Dining", "Photo Gallery", "Refer a Friend", "Affiliate"];

export const getAccessibleCards = (plan: PlanId): string[] => {
  switch (plan) {
    case "spark": return sparkCards;
    case "maverick": return maverickCards;
    case "supernova": return supernovaCards;
  }
};

export const isCardAccessible = (cardTitle: string, plan: PlanId): boolean => {
  return getAccessibleCards(plan).includes(cardTitle);
};
