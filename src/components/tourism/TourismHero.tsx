import { motion } from "framer-motion";
import { ArrowRight, Eye, Plane, Building2, Landmark, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cards = [
  "Attractions", "Events", "Food", "Hotels", "Culture",
  "Nature", "Districts", "Transit", "Services", "Shops",
  "Photos", "Deals", "Creators", "Plan", "Tours",
];

const metrics = [
  { value: "$1.9T", label: "Global tourism market" },
  { value: "73%", label: "Travelers plan on mobile" },
  { value: "15", label: "Modular cards" },
  { value: "48hr", label: "From signup to live" },
];

const qrSurfaces = [
  { icon: Plane, label: "Airport" },
  { icon: Building2, label: "Hotel Lobby" },
  { icon: Landmark, label: "Landmark" },
  { icon: MapPin, label: "Visitor Kiosk" },
];

const PhoneMockup = () => (
  <div className="relative w-full max-w-[340px] mx-auto">
    <div className="absolute -inset-12 bg-[radial-gradient(circle_at_center,rgba(201,163,91,0.28),transparent_65%)] blur-2xl" />
    <div className="absolute -inset-16 bg-[radial-gradient(circle_at_70%_30%,rgba(63,167,160,0.18),transparent_60%)] blur-3xl" />

    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="relative rounded-[44px] border border-[#1F2638] bg-[#0F1626] p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
    >
      <div className="rounded-[36px] bg-[#0A0F1C] overflow-hidden border border-[#1F2638]">
        <div className="flex items-center justify-between px-5 pt-3 pb-2 text-[10px] text-tourism-slate font-mono">
          <span>9:41</span>
          <span className="h-1 w-12 rounded-full bg-[#1F2638]" />
          <span>100%</span>
        </div>
        <div className="px-4 pb-3 border-b border-[#1F2638]">
          <p className="font-fraunces text-tourism-ivory text-[15px] font-bold">Visit Atlanta</p>
          <p className="text-[10px] text-tourism-slate">auralink.app/visitatlanta</p>
        </div>
        <div className="grid grid-cols-3 gap-2 p-3">
          {cards.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.03, duration: 0.4 }}
              className="aspect-square rounded-xl border border-[#1F2638] bg-gradient-to-br from-[#141B2E] to-[#0F1626] p-1.5 flex flex-col items-center justify-center gap-1"
            >
              <div className="h-5 w-5 rounded-md bg-tourism-brass opacity-80" />
              <span className="text-[8px] text-tourism-slate text-center leading-tight font-medium">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Floating QR touchpoints */}
    {qrSurfaces.map((s, i) => {
      const positions = [
        "-top-3 -left-10 sm:-left-16",
        "-top-1 -right-6 sm:-right-14",
        "bottom-12 -left-12 sm:-left-20",
        "-bottom-3 -right-8 sm:-right-16",
      ];
      return (
        <motion.div
          key={s.label}
          animate={{ y: [0, i % 2 ? 8 : -8, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          className={`absolute ${positions[i]} rounded-xl border border-[#1F2638] bg-[#0F1626]/95 backdrop-blur px-2.5 py-1.5 shadow-xl flex items-center gap-1.5`}
        >
          <div className="grid grid-cols-3 gap-[1px] w-3 h-3">
            {Array.from({ length: 9 }).map((_, k) => (
              <div key={k} className={`rounded-[1px] ${k % 2 ? "bg-[#3FA7A0]" : "bg-[#C9A35B]"}`} />
            ))}
          </div>
          <s.icon className="w-3 h-3 text-tourism-brass" />
          <span className="text-[9px] font-semibold text-tourism-ivory">{s.label}</span>
        </motion.div>
      );
    })}
  </div>
);

const TourismHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-tourism-midnight pt-32 sm:pt-36">
      {/* Aerial city backdrop */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1920&q=80"
          alt="Aerial twilight cityscape"
          className="w-full h-full object-cover opacity-[0.10]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/85 via-[#0A0F1C]/95 to-[#0A0F1C]" />
      </div>

      <div className="absolute inset-0 bg-grid-transit opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#C9A35B]/10 blur-[160px]" />
      <div className="absolute top-20 right-0 h-[480px] w-[480px] rounded-full bg-[#3FA7A0]/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-16 sm:pb-20 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.32em] uppercase text-tourism-brass">
            <span className="h-px w-8 bg-[#C9A35B]/60" />
            AURALINK · BY IBLOOV
          </span>

          <h1 className="font-fraunces mt-5 text-[40px] sm:text-[54px] lg:text-[64px] leading-[1.02] tracking-tight font-bold text-tourism-ivory">
            Turn your city into a{" "}
            <span className="italic text-tourism-brass">digital destination</span>.
          </h1>

          <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-tourism-slate max-w-[560px]">
            One mobile-first destination hub for attractions, events, hotels, restaurants,
            neighborhoods, transport, and visitor services — accessed by QR code across the
            airport, city, venues, and streetscape.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate("/signup")}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-tourism-brass text-[#1B1310] font-semibold text-[15px] glow-tourism-brass hover:opacity-95 transition-all"
            >
              Book a Tourism Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/microsite")}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-[#2A3349] bg-[#141B2E]/60 text-tourism-ivory font-semibold text-[15px] hover:bg-[#141B2E] hover:border-[#3FA7A0]/40 transition-colors"
            >
              <Eye className="w-4 h-4" />
              See a Destination Demo
            </button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-tourism-slate">
            <span>Live in under 48 hours</span>
            <span className="opacity-30">·</span>
            <span>No developers needed</span>
            <span className="opacity-30">·</span>
            <span>Works on every device</span>
            <span className="opacity-30">·</span>
            <span>QR-powered citywide deployment</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="pt-4"
        >
          <PhoneMockup />
        </motion.div>
      </div>

      {/* Metric strip */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#1F2638] rounded-2xl overflow-hidden border border-[#1F2638]">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#0F1626] px-6 py-7 text-center"
            >
              <p className="font-fraunces text-[34px] sm:text-[40px] font-bold text-tourism-brass leading-none">
                {m.value}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-wider text-tourism-slate font-semibold">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismHero;
