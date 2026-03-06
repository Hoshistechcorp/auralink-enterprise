import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Phone, MessageCircle, Navigation, Share2, CalendarCheck,
  Camera, UtensilsCrossed, Star, Info, Wine, Flame,
  Bot, Award, Users, HelpCircle, CalendarDays, Globe,
  Gamepad2, Link2, Handshake, Lock, Sparkles, X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MicrositeHeader from "@/components/aura/MicrositeHeader";
import ActionButton from "@/components/aura/ActionButton";
import AuraCard from "@/components/aura/AuraCard";
import BottomBrandBar from "@/components/aura/BottomBrandBar";
import AuraSupermenu from "@/components/aura/AuraSupermenu";
import { getSubscription, getEffectivePlan, isCardAccessible, getTrialDaysLeft, startTrial } from "@/lib/subscription";
import { toast } from "@/hooks/use-toast";

const actions = [
  { icon: Phone, label: "Call" },
  { icon: MessageCircle, label: "Message" },
  { icon: Navigation, label: "Directions" },
  { icon: Share2, label: "Share" },
  { icon: CalendarCheck, label: "Reservations" },
];

const cards = [
  /* Spark (Free) — 5 cards */
  { icon: Info, title: "Details", subtitle: "Hours & info" },
  { icon: UtensilsCrossed, title: "Menu", subtitle: "Full menu" },
  { icon: Globe, title: "Social Links", subtitle: "Follow us" },
  { icon: Star, title: "Reviews", subtitle: "4.8 avg" },
  { icon: HelpCircle, title: "FAQs", subtitle: "24 answers" },
  /* Maverick ($79/mo) — +5 cards */
  { icon: Gamepad2, title: "Freebie Game", subtitle: "Spin & win" },
  { icon: Users, title: "Staff", subtitle: "Meet team" },
  { icon: Award, title: "Awards", subtitle: "8 awards" },
  { icon: CalendarDays, title: "Events", subtitle: "Upcoming" },
  { icon: Flame, title: "Popular Dishes", subtitle: "Top 12" },
  /* Supernova ($149/mo) — +5 cards */
  { icon: Bot, title: "AI Concierge", subtitle: "Ask anything" },
  { icon: Wine, title: "Private Dining", subtitle: "Book now" },
  { icon: Camera, title: "Photo Gallery", subtitle: "248 photos" },
  { icon: Link2, title: "Refer a Friend", subtitle: "Earn rewards" },
  { icon: Handshake, title: "Affiliate", subtitle: "Partner up" },
];

const routes: Record<string, string> = {
  "Menu": "/microsite/menu",
  "Photo Gallery": "/microsite/gallery",
  "Reviews": "/microsite/reviews",
  "AI Concierge": "/microsite/concierge",
  "Staff": "/microsite/staff",
  "Details": "/microsite/details",
  "Private Dining": "/microsite/private-dining",
  "Popular Dishes": "/microsite/popular-dishes",
  "Awards": "/microsite/awards",
  "FAQs": "/microsite/faqs",
  "Events": "/microsite/events",
  "Social Links": "/microsite/social-links",
  "Freebie Game": "/microsite/freebie-game",
  "Refer a Friend": "/microsite/referral",
  "Affiliate": "/microsite/affiliate",
};

const Microsite = () => {
  const navigate = useNavigate();
  const [sub, setSub] = useState(getSubscription());
  const effectivePlan = getEffectivePlan(sub);
  const trialDays = getTrialDaysLeft(sub);
  const [showTrialBanner, setShowTrialBanner] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  useEffect(() => {
    const s = getSubscription();
    setSub(s);
    // Show trial banner if trial hasn't been started and user is on spark
    if (!s.trialActive && !s.trialStartDate && s.plan === "spark") {
      setShowTrialBanner(true);
    }
  }, []);

  const handleStartTrial = () => {
    const updated = startTrial();
    setSub(updated);
    setShowTrialBanner(false);
    toast({ title: "🎉 Big Bang Trial Activated!", description: "All 15 cards unlocked for 14 days. Explore everything!" });
  };

  const handleReservation = () => {
    const s = getSubscription();
    if (s.reservationUrl) {
      window.open(s.reservationUrl, "_blank", "noopener,noreferrer");
    } else {
      toast({ title: "Reservations", description: "Set up your reservation link in Dashboard → Settings." });
    }
  };

  const handleCardClick = (title: string) => {
    if (!isCardAccessible(title, effectivePlan)) {
      setShowUpgradeModal(true);
      return;
    }
    const route = routes[title];
    if (route) navigate(route);
  };

  const handleAction = (label: string) => {
    if (label === "Reservations") {
      handleReservation();
    }
  };

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <MicrositeHeader />

      {/* Trial Banner */}
      <AnimatePresence>
        {showTrialBanner && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-4 mt-2 p-3 rounded-2xl bg-gradient-to-r from-primary/15 to-chart-4/15 border border-primary/20 flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold">Try all 15 cards free for 14 days!</p>
              <p className="text-[10px] text-muted-foreground">No credit card required</p>
            </div>
            <button onClick={handleStartTrial} className="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-[11px] font-bold shrink-0">
              Start Trial
            </button>
            <button onClick={() => setShowTrialBanner(false)} className="text-muted-foreground">
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Trial Indicator */}
      {sub.trialActive && trialDays > 0 && (
        <div className="mx-4 mt-2 px-3 py-2 rounded-xl bg-chart-4/10 border border-chart-4/20 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-chart-4" />
          <span className="text-[11px] font-semibold text-chart-4">Big Bang Trial — {trialDays} day{trialDays !== 1 ? "s" : ""} left</span>
        </div>
      )}

      <div className="flex gap-2 overflow-x-auto px-4 py-4 no-scrollbar">
        {actions.map((btn) => (
          <ActionButton key={btn.label} icon={btn.icon} label={btn.label} onClick={() => handleAction(btn.label)} />
        ))}
      </div>

      <div className="px-4 pb-4">
        <div className="grid grid-cols-3 gap-3">
          {cards.map((card, i) => {
            const accessible = isCardAccessible(card.title, effectivePlan);
            return (
              <div key={card.title} className="relative">
                <div className={!accessible ? "opacity-40 blur-[1px] pointer-events-none" : ""}>
                  <AuraCard
                    icon={card.icon}
                    title={card.title}
                    subtitle={card.subtitle}
                    delay={i}
                    onClick={() => handleCardClick(card.title)}
                  />
                </div>
                {!accessible && (
                  <button
                    onClick={() => setShowUpgradeModal(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center z-10"
                  >
                    <Lock className="w-4 h-4 text-muted-foreground mb-1" />
                    <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Upgrade</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Upgrade Modal */}
      <AnimatePresence>
        {showUpgradeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 backdrop-blur-sm"
            onClick={() => setShowUpgradeModal(false)}
          >
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              exit={{ y: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[430px] p-6 rounded-t-3xl bg-card border-t shadow-2xl"
            >
              <div className="w-10 h-1 rounded-full bg-muted mx-auto mb-5" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">Unlock More Cards</h3>
                  <p className="text-xs text-muted-foreground">Upgrade your plan to access this feature</p>
                </div>
              </div>
              <div className="space-y-2 mb-5">
                <div className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
                  <span className="text-sm font-medium">Maverick — 10 cards</span>
                  <span className="text-sm font-bold">$79/mo</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-primary/5 border border-primary/20">
                  <span className="text-sm font-medium">Supernova — All 15 cards</span>
                  <span className="text-sm font-bold text-primary">$149/mo</span>
                </div>
              </div>
              {!sub.trialActive && !sub.trialStartDate && (
                <button onClick={handleStartTrial} className="w-full py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold mb-2">
                  Start 14-Day Free Trial
                </button>
              )}
              <button onClick={() => setShowUpgradeModal(false)} className="w-full py-3 rounded-xl bg-muted text-sm font-medium">
                Maybe Later
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomBrandBar />
      <AuraSupermenu />
    </div>
  );
};

export default Microsite;
