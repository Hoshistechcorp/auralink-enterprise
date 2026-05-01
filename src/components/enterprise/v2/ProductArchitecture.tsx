import { motion } from "framer-motion";
import {
  Gift, BookOpen, Link2, Star, HelpCircle,
  Image, Users, Award, Calendar, Utensils,
  Sparkles, CalendarCheck, Gamepad2, Heart, Megaphone,
} from "lucide-react";

const tiers = [
  {
    name: "Core",
    tag: "Foundation",
    cards: [
      { icon: Gift, label: "Gift Cards" },
      { icon: BookOpen, label: "Menu" },
      { icon: Link2, label: "Social Links" },
      { icon: Star, label: "Reviews" },
      { icon: HelpCircle, label: "FAQs" },
    ],
  },
  {
    name: "Maverick",
    tag: "Growth",
    cards: [
      { icon: Image, label: "Photo Gallery" },
      { icon: Users, label: "Staff" },
      { icon: Award, label: "Awards" },
      { icon: Calendar, label: "Events" },
      { icon: Utensils, label: "Popular Dishes" },
    ],
  },
  {
    name: "Supernova",
    tag: "Enterprise",
    cards: [
      { icon: Sparkles, label: "AI Concierge" },
      { icon: CalendarCheck, label: "Private Dining & Ticketing" },
      { icon: Gamepad2, label: "Freebie Game" },
      { icon: Heart, label: "Refer a Friend" },
      { icon: Megaphone, label: "Affiliate / TribeMint" },
    ],
  },
];

const ProductArchitecture = () => (
  <section className="relative py-24 sm:py-32 bg-[#0E0B09] border-t border-[#2A2320]">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brass-gradient">Product architecture</span>
        <h2 className="font-fraunces mt-3 text-4xl sm:text-5xl font-bold text-ivory tracking-tight">
          A 15-card operating system{" "}
          <span className="italic text-brass-gradient">built for hospitality.</span>
        </h2>
        <p className="mt-4 text-stone-warm text-[15px]">
          Activate the cards that fit your model — without rebuilding the experience.
        </p>
      </motion.div>

      <div className="space-y-6">
        {tiers.map((tier, ti) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ti * 0.1 }}
            className="rounded-3xl border border-[#2A2320] bg-[#141110]/70 backdrop-blur p-6 sm:p-8"
          >
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <div>
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-stone-warm">{tier.tag}</p>
                <h3 className="font-fraunces text-2xl font-bold text-ivory mt-1">
                  <span className="text-brass-gradient">{tier.name}</span>
                </h3>
              </div>
              <span className="text-[11px] text-stone-warm">5 cards</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {tier.cards.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.label}
                    className="rounded-2xl border border-[#2A2320] bg-[#1B1714] p-4 flex flex-col items-center gap-2 hover:border-brass-soft transition-colors"
                  >
                    <div className="h-10 w-10 rounded-xl bg-[#0E0B09] border border-brass-soft flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#E8C886]" />
                    </div>
                    <span className="text-[12px] text-ivory text-center font-medium leading-tight">{c.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductArchitecture;
