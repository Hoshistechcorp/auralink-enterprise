import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const roles = [
  {
    role: "GM / COO",
    emoji: "🏢",
    headline: "Streamline operations across every location",
    desc: "One dashboard. All venues. Real-time visibility into loyalty, staffing, gift cards, and guest engagement.",
    cta: "Get Your Venue Live",
    color: "#E8604C",
    action: "/signup",
  },
  {
    role: "CMO",
    emoji: "📈",
    headline: "Turn every guest interaction into measurable revenue",
    desc: "Branded microsites, gamified rewards, referral engines, and analytics that prove ROI per campaign.",
    cta: "Book a Strategy Call",
    color: "#D4A853",
    action: "mailto:hello@ibloov.com?subject=AuraLink Strategy Call",
  },
  {
    role: "CTO",
    emoji: "⚙️",
    headline: "One API, zero maintenance, enterprise-grade security",
    desc: "SOC 2 compliant, GDPR ready, 99.9% uptime SLA. No custom dev needed — live in 24 hours.",
    cta: "View Technical Docs",
    color: "#1B9AAA",
    action: "/signup",
  },
];

const EnterpriseCSuiteCTAs = () => {
  const navigate = useNavigate();

  const handleClick = (action: string) => {
    if (action.startsWith("mailto:")) {
      window.location.href = action;
    } else {
      navigate(action);
    }
  };

  return (
    <section className="py-16 sm:py-24 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E8604C]">
            For Decision Makers
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
            Your role. <span className="italic text-white/40">Your reasons.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {roles.map((r, i) => (
            <motion.div
              key={r.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all group flex flex-col"
            >
              <span className="text-3xl mb-3">{r.emoji}</span>
              <span className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: r.color }}>
                {r.role}
              </span>
              <h3 className="text-white font-semibold text-lg leading-snug mb-2">{r.headline}</h3>
              <p className="text-white/30 text-sm leading-relaxed mb-6 flex-1">{r.desc}</p>
              <button
                onClick={() => handleClick(r.action)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-colors w-fit"
                style={{ backgroundColor: r.color }}
              >
                {r.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCSuiteCTAs;
