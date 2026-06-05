import { motion } from "framer-motion";
import {
  Plane, Train, Landmark, Building2, CalendarDays,
  UtensilsCrossed, Map as MapIcon, Megaphone, Check, X,
} from "lucide-react";

const surfaces = [
  { icon: Plane, label: "Airports", note: "Arrivals, baggage claim, gates" },
  { icon: Train, label: "Train & Bus", note: "Stations, taxi ranks, transit hubs" },
  { icon: Landmark, label: "Landmarks", note: "Monuments, plazas, museums" },
  { icon: Building2, label: "Hotels", note: "Lobbies, in-room cards, concierge" },
  { icon: CalendarDays, label: "Events", note: "Festivals, concerts, sports" },
  { icon: UtensilsCrossed, label: "Restaurants", note: "Tables, menus, receipts" },
  { icon: MapIcon, label: "Wayfinding", note: "Street signage, maps, kiosks" },
  { icon: Megaphone, label: "Campaigns", note: "Print ads, billboards, posters" },
];

const outcomes = [
  "Faster discovery",
  "Better mobile engagement",
  "No app download friction",
  "Easier multilingual access",
  "Stronger campaign ROI",
];

const TourismWhyQR = () => {
  return (
    <section className="relative bg-tourism-graphite py-20 sm:py-28 border-t border-tourism-divider overflow-hidden">
      <div className="absolute inset-0 bg-grid-transit-fine opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -top-20 right-1/4 h-[400px] w-[400px] rounded-full bg-[#3FA7A0]/8 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-[11px] font-bold text-tourism-teal tracking-[0.3em] uppercase mb-4">
            The City as an Interface
          </p>
          <h2 className="font-fraunces text-[clamp(30px,3.6vw,46px)] font-bold text-tourism-ivory leading-[1.15]">
            Why QR codes outperform{" "}
            <span className="italic text-tourism-brass">forgotten tourism websites</span>.
          </h2>
          <p className="mt-5 text-tourism-slate text-base leading-relaxed">
            QR codes meet travelers in the real world, at the exact moment of need —
            no app download, no search, no friction.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8">
          {/* Left: Deployment surfaces */}
          <div className="rounded-2xl border border-tourism-divider bg-[#0F1626] p-7">
            <p className="text-[11px] font-bold text-tourism-brass tracking-[0.25em] uppercase mb-5">
              Deploy across the destination
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {surfaces.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="flex items-center gap-3 p-3 rounded-xl border border-tourism-divider bg-[#141B2E] hover:border-[#C9A35B]/30 transition-colors"
                >
                  <div className="grid grid-cols-3 gap-[1.5px] w-7 h-7 p-1 rounded bg-[#0A0F1C] border border-[#1F2638] shrink-0">
                    {Array.from({ length: 9 }).map((_, k) => (
                      <div
                        key={k}
                        className={`rounded-[1px] ${k % 3 === 0 || k === 4 ? "bg-[#C9A35B]" : "bg-[#3FA7A0]/70"}`}
                      />
                    ))}
                  </div>
                  <s.icon className="w-4 h-4 text-tourism-slate shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold text-tourism-ivory leading-none">{s.label}</p>
                    <p className="text-[11px] text-tourism-slate mt-0.5">{s.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Comparison + Outcomes */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-tourism-divider bg-[#0F1626] overflow-hidden">
              <div className="p-5 border-b border-tourism-divider bg-[#0A0F1C]/50">
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 text-[#A07070] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider font-bold text-[#A07070]">Old model</p>
                    <p className="font-fraunces text-tourism-ivory text-[16px] mt-1">
                      Hope someone finds the website later.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-tourism-teal mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider font-bold text-tourism-teal">AuraLink model</p>
                    <p className="font-fraunces text-tourism-ivory text-[16px] mt-1">
                      One scan. Instant destination experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-tourism-divider bg-[#0F1626] p-6">
              <p className="text-[11px] font-bold text-tourism-brass tracking-[0.25em] uppercase mb-4">
                Outcomes
              </p>
              <ul className="space-y-2.5">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-2.5 text-sm text-tourism-ivory">
                    <span className="w-1.5 h-1.5 rounded-full bg-tourism-teal" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismWhyQR;
