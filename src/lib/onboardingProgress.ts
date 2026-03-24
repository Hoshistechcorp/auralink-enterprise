/* ── Onboarding Progress Tracker ──────────────────── */

export interface OnboardingStep {
  id: string;
  step: number;
  title: string;
  description: string;
  tip: string;
  isComplete: () => boolean;
  link: string;
}

const steps: OnboardingStep[] = [
  {
    id: "account",
    step: 1,
    title: "Create Your Account",
    description: "Sign up with your email and password. You'll automatically receive a 21-day free trial of the Supernova tier.",
    tip: "No credit card required to start your trial.",
    isComplete: () => !!localStorage.getItem("aura_auth_user"),
    link: "/signup",
  },
  {
    id: "onboarding",
    step: 2,
    title: "Complete Onboarding",
    description: "Select your hospitality industry, add venue locations, and invite team members with role-based access.",
    tip: "You can update this later in Settings → Business.",
    isComplete: () => !!localStorage.getItem("aura_industry"),
    link: "/onboarding",
  },
  {
    id: "business-info",
    step: 3,
    title: "Set Up Business Info",
    description: "Configure your phone number, SMS, address, and reservation provider to power your microsite action buttons.",
    tip: "Your microsite action buttons won't work until this is configured.",
    isComplete: () => {
      try {
        const raw = localStorage.getItem("auralink_business_contact");
        if (!raw) return false;
        const c = JSON.parse(raw);
        return !!(c.phone && c.address);
      } catch { return false; }
    },
    link: "/dashboard/settings",
  },
  {
    id: "content",
    step: 4,
    title: "Build Your Content",
    description: "Use the Admin Panel to add menu items, upload gallery photos, create staff profiles, and set operating hours.",
    tip: "Start with Menu and Hours — they're what customers look for first.",
    isComplete: () => {
      try {
        const menu = localStorage.getItem("auralink_admin_menu");
        return !!menu && JSON.parse(menu).length > 0;
      } catch { return false; }
    },
    link: "/dashboard/admin",
  },
  {
    id: "card-studio",
    step: 5,
    title: "Customize Your Microsite",
    description: "Open Card Studio to choose which cards appear on your public microsite (up to 15) and reorder them.",
    tip: "The top 3 cards get the most engagement — choose wisely!",
    isComplete: () => !!localStorage.getItem("auralink_card_order"),
    link: "/dashboard/cards",
  },
  {
    id: "go-live",
    step: 6,
    title: "Go Live & Share",
    description: "Your microsite is live! Generate a QR code, share your link on social media, and start driving traffic.",
    tip: "Print QR codes on table tents, receipts, and business cards.",
    isComplete: () => !!localStorage.getItem("auralink_qr_generated"),
    link: "/dashboard/qr",
  },
];

export interface OnboardingProgress {
  steps: (OnboardingStep & { completed: boolean })[];
  completedCount: number;
  totalCount: number;
  percentage: number;
}

export const getOnboardingProgress = (): OnboardingProgress => {
  const evaluated = steps.map((s) => ({
    ...s,
    completed: s.isComplete(),
  }));
  const completedCount = evaluated.filter((s) => s.completed).length;
  return {
    steps: evaluated,
    completedCount,
    totalCount: steps.length,
    percentage: Math.round((completedCount / steps.length) * 100),
  };
};

/** Mark QR as generated (called from QR page) */
export const markQrGenerated = () => {
  localStorage.setItem("auralink_qr_generated", "true");
};
