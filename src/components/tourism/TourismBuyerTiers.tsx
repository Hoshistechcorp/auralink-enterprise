import { motion } from "framer-motion";
import { Building, MapPinned, Globe2, Briefcase } from "lucide-react";

const tiers = [
  {
    icon: Building,
    title: "City Tourism Boards",
    desc: "Unified digital hub for city attractions, dining, events, and visitor services.",
  },
  {
    icon: MapPinned,
    title: "State & Provincial Offices",
    desc: "Regional hubs that connect multiple cities into a cohesive tourism strategy.",
  },
  {
    icon: Globe2,
    title: "National Tourism Authorities",
    desc: "Country-level destination platforms that attract international visitors at scale.",
  },
  {
    icon: Briefcase,
    title: "Economic Development & Convention",
    desc: "Showcase business opportunities, investment zones, and convention facilities.",
  },
];

const TourismBuyerTiers = () => {
  return (
    <section id="use-cases" className="relative bg-tourism-midnight py-20 sm:py-28 border-t border-tourism-divider">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[11px] font-bold text-tourism-teal tracking-[0.3em] uppercase mb-4">
            Built for Scale
          </p>
          <h2 className="font-fraunces text-[clamp(30px,3.6vw,46px)] font-bold text-tourism-ivory leading-[1.15]">
            From city bureaus to{" "}
            <span className="italic text-tourism-brass">national tourism authorities</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0F1626] border border-tourism-divider rounded-2xl p-7 hover:border-[#C9A35B]/30 transition-colors text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C9A35B]/10 border border-[#C9A35B]/20 flex items-center justify-center mb-5">
                <tier.icon className="w-5 h-5 text-tourism-brass" />
              </div>
              <h4 className="font-fraunces text-[18px] font-bold text-tourism-ivory mb-2">{tier.title}</h4>
              <p className="text-[13px] text-tourism-slate leading-relaxed">{tier.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismBuyerTiers;
