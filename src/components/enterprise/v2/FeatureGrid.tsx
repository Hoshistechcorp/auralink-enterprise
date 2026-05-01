import { motion } from "framer-motion";
import { Gift, Sparkles, Rocket, Megaphone } from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "Zero-fee commerce",
    desc: "Sell digital gift cards and event access directly. Keep the margin and turn demand into cash flow.",
    proof: "Direct-to-bank settlement via Stripe",
  },
  {
    icon: Sparkles,
    title: "24/7 multilingual AI concierge",
    desc: "Answer guest questions instantly, reduce staff burden, and secure bookings while the team sleeps.",
    proof: "80% of guest questions automated",
  },
  {
    icon: Rocket,
    title: "Go live in minutes",
    desc: "No developers, no IT bottlenecks, no custom build cycle. Launch a premium digital HQ fast.",
    proof: "Avg launch time: 3 minutes",
  },
  {
    icon: Megaphone,
    title: "Growth engine built in",
    desc: "Activate loyalty, referral loops, gamification, and TribeMint affiliate links from one platform.",
    proof: "312% avg engagement lift",
  },
];

const Card = ({ b, large = false, i }: { b: typeof benefits[number]; large?: boolean; i: number }) => {
  const Icon = b.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      className={`group relative rounded-3xl border border-[#2A2320] bg-[#141110]/80 backdrop-blur p-7 hover:border-brass-soft transition-all overflow-hidden ${
        large ? "lg:p-10" : ""
      }`}
    >
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#C9A35B]/0 group-hover:bg-[#C9A35B]/15 blur-3xl transition-all duration-500" />
      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1B1714] border border-brass-soft">
          <Icon className="w-5 h-5 text-[#E8C886]" />
        </div>
        <h3 className={`font-fraunces mt-5 font-bold text-ivory ${large ? "text-2xl lg:text-3xl" : "text-xl"}`}>
          {b.title}
        </h3>
        <p className={`mt-3 text-stone-warm leading-relaxed ${large ? "text-[15px]" : "text-[14px]"}`}>
          {b.desc}
        </p>
        <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brass-soft bg-[#1B1714]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7E9B6A]" />
          <span className="text-[11px] font-semibold text-brass-gradient">{b.proof}</span>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureGrid = () => (
  <section id="features" className="relative py-24 sm:py-32 bg-[#0B0907]">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mb-14"
      >
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brass-gradient">Strategic benefits</span>
        <h2 className="font-fraunces mt-3 text-4xl sm:text-5xl font-bold text-ivory tracking-tight">
          Everything your venue needs.{" "}
          <span className="italic text-stone-warm">Nothing it doesn't.</span>
        </h2>
      </motion.div>

      {/* Asymmetric layout: large left, three stacked right */}
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="lg:row-span-2">
          <Card b={benefits[0]} large i={0} />
        </div>
        <Card b={benefits[1]} i={1} />
        <Card b={benefits[2]} i={2} />
        <div className="lg:col-span-2">
          <Card b={benefits[3]} i={3} />
        </div>
      </div>
    </div>
  </section>
);

export default FeatureGrid;
