import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

import landmarkParis from "@/assets/landmark-paris.jpg";
import landmarkRome from "@/assets/landmark-rome.jpg";
import landmarkTokyo from "@/assets/landmark-tokyo.jpg";
import landmarkNyc from "@/assets/landmark-nyc.jpg";
import landmarkSydney from "@/assets/landmark-sydney.jpg";
import landmarkTajmahal from "@/assets/landmark-tajmahal.jpg";
import landmarkMachupicchu from "@/assets/landmark-machupicchu.jpg";
import landmarkDubai from "@/assets/landmark-dubai.jpg";
import landmarkGreatwall from "@/assets/landmark-greatwall.jpg";
import landmarkSantorini from "@/assets/landmark-santorini.jpg";
import landmarkRio from "@/assets/landmark-rio.jpg";
import landmarkLondon from "@/assets/landmark-london.jpg";

const landmarks = [
  { src: landmarkParis, label: "Paris", country: "France" },
  { src: landmarkRome, label: "Rome", country: "Italy" },
  { src: landmarkTokyo, label: "Tokyo", country: "Japan" },
  { src: landmarkNyc, label: "New York", country: "USA" },
  { src: landmarkSydney, label: "Sydney", country: "Australia" },
  { src: landmarkTajmahal, label: "Agra", country: "India" },
  { src: landmarkMachupicchu, label: "Machu Picchu", country: "Peru" },
  { src: landmarkDubai, label: "Dubai", country: "UAE" },
  { src: landmarkGreatwall, label: "Great Wall", country: "China" },
  { src: landmarkSantorini, label: "Santorini", country: "Greece" },
  { src: landmarkRio, label: "Rio", country: "Brazil" },
  { src: landmarkLondon, label: "London", country: "UK" },
];

const TourismLandmarkMosaic = () => {
  const navigate = useNavigate();
  // 12 cells in a 4x3 grid, each showing a landmark index
  const [grid, setGrid] = useState(() => landmarks.map((_, i) => i));
  const [swapping, setSwapping] = useState<{ a: number; b: number } | null>(null);

  // Periodically swap two random cells with animation
  const doSwap = useCallback(() => {
    const a = Math.floor(Math.random() * 12);
    let b = a;
    while (b === a) b = Math.floor(Math.random() * 12);
    setSwapping({ a, b });

    setTimeout(() => {
      setGrid((prev) => {
        const next = [...prev];
        [next[a], next[b]] = [next[b], next[a]];
        return next;
      });
      setSwapping(null);
    }, 600);
  }, []);

  useEffect(() => {
    const interval = setInterval(doSwap, 2200);
    return () => clearInterval(interval);
  }, [doSwap]);

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#00CED1] font-bold text-xs tracking-[0.3em] uppercase mb-3">
            Global Destinations
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold">
            The world's landmarks,{" "}
            <span className="bg-gradient-to-r from-[#FF6B35] via-[#FFD700] to-[#00CED1] bg-clip-text text-transparent">
              one platform
            </span>
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto text-sm sm:text-base">
            From the Eiffel Tower to the Great Wall — AuraLink helps tourism boards worldwide showcase their destinations digitally.
          </p>
        </motion.div>

        {/* Animated Mosaic Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 max-w-5xl mx-auto">
          {grid.map((landmarkIdx, cellIdx) => {
            const lm = landmarks[landmarkIdx];
            const isSwapping =
              swapping && (swapping.a === cellIdx || swapping.b === cellIdx);

            return (
              <motion.div
                key={`cell-${cellIdx}`}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                animate={
                  isSwapping
                    ? {
                        scale: [1, 0.85, 1],
                        rotateY: [0, 90, 0],
                        opacity: [1, 0.4, 1],
                      }
                    : { scale: 1, rotateY: 0, opacity: 1 }
                }
                transition={{ duration: 0.6, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
              >
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={landmarkIdx}
                    src={lm.src}
                    alt={`${lm.label}, ${lm.country}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={512}
                    height={512}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Label on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-display font-bold text-sm sm:text-base">
                    {lm.label}
                  </p>
                  <p className="text-white/60 text-[10px] sm:text-xs uppercase tracking-wider">
                    {lm.country}
                  </p>
                </div>

                {/* Glowing border on swap */}
                {isSwapping && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-[#FF6B35] pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* View Public View button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => navigate("/microsite")}
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FFD700] text-white font-bold text-[15px] hover:shadow-2xl hover:shadow-[#FF6B35]/30 transition-all duration-300 hover:scale-105"
          >
            <Eye className="w-5 h-5" />
            View Public Microsite
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TourismLandmarkMosaic;
