import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Claim your destination",
    desc: "We create your custom destination URL and a branded mobile-first hub. Example: auralink.app/visitatlanta.",
  },
  {
    num: "02",
    title: "Activate your cards",
    desc: "Choose attractions, events, hotels, food, culture, transit, deals, and visitor services from 15 modular cards.",
  },
  {
    num: "03",
    title: "Deploy & measure",
    desc: "Place QR codes across airports, landmarks, hotels, and campaigns. Track engagement and tourism impact in real time.",
  },
];

const TourismHowItWorks = () => {
  return (
    <section id="how-it-works" className="relative bg-tourism-midnight py-20 sm:py-28 border-t border-tourism-divider">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-bold text-tourism-teal tracking-[0.3em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="font-fraunces text-[clamp(30px,3.6vw,46px)] font-bold text-tourism-ivory leading-[1.15]">
            Live in <span className="italic text-tourism-brass">three steps</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-[#C9A35B]/0 via-[#3FA7A0]/40 to-[#C9A35B]/0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative z-10 text-center md:text-left"
            >
              <div className="w-20 h-20 rounded-full mx-auto md:mx-0 mb-5 flex items-center justify-center bg-[#0F1626] border border-[#C9A35B]/30 glow-tourism-brass">
                <span className="font-fraunces text-[22px] font-bold text-tourism-brass">{step.num}</span>
              </div>
              <h4 className="font-fraunces text-[22px] font-bold text-tourism-ivory mb-2">{step.title}</h4>
              <p className="text-sm text-tourism-slate leading-relaxed max-w-[300px] mx-auto md:mx-0">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismHowItWorks;
