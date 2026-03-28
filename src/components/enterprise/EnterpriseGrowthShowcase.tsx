import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Zap } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "3.2×",
    label: "Revenue Growth",
    color: "#D4A853",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=70",
  },
  {
    icon: DollarSign,
    value: "$127K",
    label: "Gift Card Revenue",
    color: "#E8604C",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=70",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Influencer Reach",
    color: "#A855F7",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=70",
  },
  {
    icon: Zap,
    value: "80%",
    label: "Tasks Automated",
    color: "#1B9AAA",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=70",
  },
];

const EnterpriseGrowthShowcase = () => (
  <section className="py-20 sm:py-28 border-t border-white/[0.04]">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4A853]">
          The Impact
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
          Growth you can <span className="italic text-white/40">measure.</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-end group"
            >
              <img
                src={m.image}
                alt={m.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/60 to-transparent" />
              <div className="relative p-6">
                <Icon className="w-5 h-5 mb-3" style={{ color: m.color }} />
                <span
                  className="block font-display text-4xl font-bold"
                  style={{ color: m.color }}
                >
                  {m.value}
                </span>
                <span className="block text-white/70 text-sm font-medium mt-1">
                  {m.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default EnterpriseGrowthShowcase;
