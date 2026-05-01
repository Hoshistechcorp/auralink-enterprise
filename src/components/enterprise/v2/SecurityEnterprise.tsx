import { motion } from "framer-motion";
import { ShieldCheck, Activity, FileCheck2, CreditCard, Smartphone, Layers, Search } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "SOC 2 compliant infrastructure", desc: "Audited controls across security, availability, and confidentiality." },
  { icon: Activity, title: "99.9% uptime SLA", desc: "Built on globally redundant infrastructure with active monitoring." },
  { icon: FileCheck2, title: "GDPR & CCPA readiness", desc: "Privacy-first data flows and consent tooling baked in." },
  { icon: CreditCard, title: "Stripe Connect payments", desc: "Funds settle directly to your account via secure payment flows." },
  { icon: Smartphone, title: "Mobile-first architecture", desc: "Every guest-facing surface optimized for thumb-driven journeys." },
  { icon: Layers, title: "Progressive Web App performance", desc: "Instant load, offline resilience, install-to-home-screen ready." },
  { icon: Search, title: "AI-search ready schema", desc: "Structured data so your venue surfaces in modern AI discovery." },
];

const SecurityEnterprise = () => (
  <section id="security" className="relative py-24 sm:py-32 bg-[#0E0B09] border-t border-[#2A2320]">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brass-gradient">Security & scale</span>
        <h2 className="font-fraunces mt-3 text-4xl sm:text-5xl font-bold text-ivory tracking-tight">
          Enterprise-ready <span className="italic text-brass-gradient">from day one.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-3">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 rounded-2xl border border-[#2A2320] bg-[#141110]/70 p-5 hover:border-brass-soft transition-colors"
            >
              <div className="h-10 w-10 rounded-xl bg-[#1B1714] border border-brass-soft flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-[#E8C886]" />
              </div>
              <div>
                <p className="font-fraunces font-bold text-ivory text-[15px]">{it.title}</p>
                <p className="text-[13px] text-stone-warm mt-1 leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SecurityEnterprise;
