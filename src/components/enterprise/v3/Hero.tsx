import { motion } from "framer-motion";
import { ArrowRight, QrCode } from "lucide-react";
import { useNavigate } from "react-router-dom";

const stats = [
  { v: "312%", l: "Engagement" },
  { v: "0%", l: "Commission" },
  { v: "3 min", l: "To live" },
];

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="px-5 pt-12 pb-16 text-center">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="font-grotesk mt-5 text-[40px] sm:text-[56px] leading-[1.05] font-bold tracking-tight text-[#F5F0E8]">
          One QR.
          <br />
          <span className="bg-gradient-to-r from-[#E8C886] to-[#C9A35B] bg-clip-text text-transparent">
            Every guest moment.
          </span>
        </h1>

        <p className="mt-4 text-[15px] leading-relaxed text-[#A89B8B] max-w-md mx-auto">
          Bookings, gift cards, loyalty, AI concierge — one mobile hub. Live in 3 minutes.
        </p>

        <div className="mt-7 flex flex-col gap-2.5 max-w-xs mx-auto">
          <button
            onClick={() => navigate("/signup")}
            className="flex items-center justify-center gap-2 h-12 rounded-full bg-gradient-to-r from-[#E8C886] to-[#C9A35B] text-[#1B1310] font-semibold text-[14px] shadow-lg shadow-[#C9A35B]/20"
          >
            Start 21-day free trial <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => navigate("/microsite")}
            className="flex items-center justify-center gap-2 h-12 rounded-full border border-[#2A2320] text-[#F5F0E8] font-medium text-[14px] hover:bg-[#141110] transition"
          >
            <QrCode className="w-4 h-4" /> See live demo
          </button>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 max-w-sm mx-auto">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl border border-[#1F1A17] bg-[#0F0D0B] py-3">
              <div className="font-grotesk text-[20px] font-bold bg-gradient-to-r from-[#E8C886] to-[#C9A35B] bg-clip-text text-transparent">
                {s.v}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-[#7A6F62] mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
