import { motion } from "framer-motion";
import { TrendingDown, Gift, Users, Repeat, Bot, BarChart3 } from "lucide-react";

const benefits = [
  { icon: TrendingDown, stat: "40%", label: "Admin Reduction", desc: "Across all locations with centralized management", color: "#E8604C" },
  { icon: Gift, stat: "$127K", label: "Gift Card Revenue", desc: "Average annual revenue per venue from digital cards", color: "#D4A853" },
  { icon: Users, stat: "62%", label: "Faster Staffing", desc: "Entertainment & event staffing via VibeGigs", color: "#A855F7" },
  { icon: Repeat, stat: "3.2x", label: "Repeat Visits", desc: "Gamified loyalty tiers drive return customers", color: "#1B9AAA" },
  { icon: Bot, stat: "80%", label: "AI Automation", desc: "Guest inquiries handled without human intervention", color: "#E8604C" },
  { icon: BarChart3, stat: "Real-Time", label: "Cross-Location Analytics", desc: "Compare performance across every venue instantly", color: "#D4A853" },
];

const EnterpriseChainBenefits = () => (
  <section className="py-16 sm:py-24 border-t border-white/[0.04]">
    <div className="max-w-5xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4A853]">
          Built for Chains & Multi-Location Brands
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
          Scale without <span className="italic text-white/40">the chaos.</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {benefits.map((b, i) => {
          const Icon = b.icon;
          return (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors group"
              style={{ borderTopColor: b.color, borderTopWidth: 2 }}
            >
              <Icon className="w-5 h-5 mb-4" style={{ color: b.color }} />
              <span className="block font-display text-3xl font-bold bg-gradient-to-r from-[#D4A853] to-[#E8604C] bg-clip-text text-transparent">
                {b.stat}
              </span>
              <span className="block text-white font-semibold text-sm mt-1">{b.label}</span>
              <p className="mt-2 text-white/30 text-xs leading-relaxed">{b.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default EnterpriseChainBenefits;
