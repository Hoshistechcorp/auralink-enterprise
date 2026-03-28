import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Create & Customize", "Sell & Deliver", "Track & Analyze", "Redeem & Manage"];

const giftCards = [
  { amount: "$50", emoji: "☕", label: "Coffee Lover", bg: "from-[#E8604C]/20 to-[#E8604C]/5", code: "AURA-50-CAFE" },
  { amount: "$100", emoji: "🍽️", label: "Dinner Date", bg: "from-[#1B9AAA]/20 to-[#1B9AAA]/5", code: "AURA-100-DINE" },
  { amount: "$200", emoji: "🥂", label: "VIP Experience", bg: "from-[#D4A853]/20 to-[#D4A853]/5", code: "AURA-200-VIP" },
  { amount: "$500", emoji: "🎉", label: "Ultimate Package", bg: "from-[#A855F7]/20 to-[#A855F7]/5", code: "AURA-500-ULTI" },
];

const EnterpriseGiftCards = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 sm:py-24 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D4A853]">Gift Card Commerce</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              Sell digital gift cards <span className="italic text-[#D4A853]">directly from your page.</span>
            </h2>
            <p className="mt-4 text-white/50 text-sm leading-relaxed">
              No third-party platform. No revenue share. Create branded gift cards, sell them instantly, and track every dollar.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {tabs.map((t, i) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    activeTab === i
                      ? "bg-[#D4A853] text-[#0D1117]"
                      : "bg-white/[0.04] text-white/40 hover:text-white/60"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right — Gift card grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-3"
          >
            {giftCards.map((gc, i) => (
              <motion.div
                key={gc.amount}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`relative p-5 rounded-2xl bg-gradient-to-br ${gc.bg} border border-white/[0.06] overflow-hidden`}
              >
                <span className="text-4xl block mb-3">{gc.emoji}</span>
                <p className="font-display text-2xl font-bold text-white">{gc.amount}</p>
                <p className="text-white/40 text-xs font-medium mt-0.5">{gc.label}</p>
                <p className="text-white/20 text-[10px] font-mono mt-3">{gc.code}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseGiftCards;
