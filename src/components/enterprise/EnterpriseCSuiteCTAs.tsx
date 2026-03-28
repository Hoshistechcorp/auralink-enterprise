import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const roles = [
  {
    role: "GM / COO",
    headline: "Streamline operations across every location",
    desc: "One dashboard. All venues. Real-time visibility.",
    cta: "Get Your Venue Live",
    color: "#E8604C",
    action: "/signup",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=70",
  },
  {
    role: "CMO",
    headline: "Turn every interaction into revenue",
    desc: "Branded microsites, gamified rewards, provable ROI.",
    cta: "See the Public View",
    color: "#D4A853",
    action: "/microsite",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=70",
  },
  {
    role: "CTO",
    headline: "One API, zero maintenance",
    desc: "SOC 2 compliant, GDPR ready, 99.9% uptime.",
    cta: "View Technical Docs",
    color: "#1B9AAA",
    action: "/signup",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=70",
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
              className="relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all group flex flex-col justify-end min-h-[320px]"
            >
              <img src={r.image} alt={r.role} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/70 to-[#0D1117]/20" />
              <div className="relative p-6">
                <span className="text-xs font-bold tracking-widest uppercase mb-2 block" style={{ color: r.color }}>
                  {r.role}
                </span>
                <h3 className="text-white font-semibold text-lg leading-snug">{r.headline}</h3>
                <p className="text-white/40 text-sm mt-1 mb-4">{r.desc}</p>
                <button
                  onClick={() => handleClick(r.action)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-colors w-fit"
                  style={{ backgroundColor: r.color }}
                >
                  {r.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCSuiteCTAs;
