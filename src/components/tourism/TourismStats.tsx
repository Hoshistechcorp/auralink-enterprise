import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Venues Onboarded", color: "#FF6B35" },
  { value: 2, suffix: "M+", label: "Visitor Scans", color: "#00CED1" },
  { value: 38, suffix: "%", label: "Avg. Engagement Lift", color: "#FFD700" },
  { value: 12, suffix: "x", label: "Campaign ROI", color: "#2ECC71" },
];

const AnimatedCounter = ({ value, suffix, color }: { value: number; suffix: string; color: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} style={{ color }}>{count}{suffix}</span>
  );
};

const TourismStats = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0f0f0f] border-y border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#FFD700] font-bold text-xs tracking-[0.3em] uppercase mb-3">By The Numbers</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">Impact that speaks for itself</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} color={stat.color} />
              </p>
              <p className="text-xs text-white/40 mt-2 tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismStats;
