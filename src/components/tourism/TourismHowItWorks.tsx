import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    color: "#E8604C",
    title: "Claim Your Destination",
    desc: "Tell us your city, state, or country. We create your custom URL: ibloov.com/@visitatlanta",
  },
  {
    num: 2,
    color: "#1B9AAA",
    title: "Activate Your Cards",
    desc: "Choose which of the 15 cards to turn on. Add your attractions, events, hotels, and local businesses.",
  },
  {
    num: 3,
    color: "#D4A853",
    title: "Share & Measure",
    desc: "One link for everything. Track visitor engagement, top attractions, seasonal trends, and ROI in real time.",
  },
];

const TourismHowItWorks = () => {
  return (
    <section className="bg-[#FAFAF8] py-20 sm:py-28">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold text-[#1B9AAA] tracking-[2px] uppercase mb-4">
            How It Works
          </p>
          <h2 className="font-display text-[clamp(30px,3.5vw,44px)] font-bold text-[#0D1117]">
            Live in three steps.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 relative">
          {/* Connecting line */}
          <div className="hidden sm:block absolute top-9 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#E8604C] via-[#1B9AAA] to-[#D4A853] opacity-30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative z-10"
            >
              <div
                className="w-[72px] h-[72px] rounded-full mx-auto mb-5 flex items-center justify-center font-display text-[28px] font-bold text-white"
                style={{ background: step.color }}
              >
                {step.num}
              </div>
              <h4 className="text-lg font-bold text-[#0D1117] mb-2">{step.title}</h4>
              <p className="text-sm text-[#4A5568] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismHowItWorks;
