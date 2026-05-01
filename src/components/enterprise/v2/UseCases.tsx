import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UtensilsCrossed, Hotel, Globe2, Check } from "lucide-react";

const cases = [
  {
    id: "restaurants",
    label: "Restaurant Groups",
    icon: UtensilsCrossed,
    intro: "Unify multi-location bookings, promotions, and loyalty into a single hospitality OS.",
    bullets: [
      "Drive direct bookings without third-party fees",
      "Reduce reliance on delivery marketplaces",
      "Unify promotions and loyalty across locations",
    ],
  },
  {
    id: "hotels",
    label: "Hotels & Resorts",
    icon: Hotel,
    intro: "Serve global travelers with one mobile-first hub for every guest touchpoint.",
    bullets: [
      "Automate repetitive guest questions in 40+ languages",
      "Upsell dining, amenities, and signature experiences",
      "Centralize guest engagement across properties",
    ],
  },
  {
    id: "tourism",
    label: "Tourism Boards & Enterprise Venues",
    icon: Globe2,
    intro: "Coordinate destinations, ticketing, and visitor data from one operating layer.",
    bullets: [
      "Centralize visitor engagement and analytics",
      "Manage ticketing and destination discovery",
      "Connect staffing, mobility, and analytics in one hub",
    ],
  },
];

const UseCases = () => (
  <section id="use-cases" className="relative py-24 sm:py-32 bg-[#0B0907]">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brass-gradient">Use cases</span>
        <h2 className="font-fraunces mt-3 text-4xl sm:text-5xl font-bold text-ivory tracking-tight">
          Built for every <span className="italic text-brass-gradient">hospitality operator.</span>
        </h2>
      </motion.div>

      <Tabs defaultValue="restaurants" className="w-full">
        <TabsList className="mx-auto mb-10 flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0">
          {cases.map((c) => {
            const Icon = c.icon;
            return (
              <TabsTrigger
                key={c.id}
                value={c.id}
                className="px-5 py-2.5 rounded-full border border-[#2A2320] bg-[#141110] text-stone-warm data-[state=active]:bg-brass-gradient data-[state=active]:text-[#1B1310] data-[state=active]:border-transparent text-[13px] font-semibold gap-2"
              >
                <Icon className="w-3.5 h-3.5" />
                {c.label}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {cases.map((c) => (
          <TabsContent key={c.id} value={c.id} className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-[#2A2320] bg-[#141110]/80 backdrop-blur p-8 sm:p-12 grid md:grid-cols-2 gap-10 items-center"
            >
              <div>
                <h3 className="font-fraunces text-3xl font-bold text-ivory">{c.label}</h3>
                <p className="mt-4 text-stone-warm text-[15px] leading-relaxed">{c.intro}</p>
                <ul className="mt-6 space-y-3">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 h-5 w-5 rounded-md bg-brass-gradient flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#1B1310]" strokeWidth={3} />
                      </span>
                      <span className="text-[14px] text-ivory/85">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl border border-brass-soft bg-gradient-to-br from-[#1B1714] to-[#0E0B09] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,163,91,0.18),transparent_70%)]" />
                <c.icon className="w-24 h-24 text-[#C9A35B]/40 relative" strokeWidth={1} />
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </section>
);

export default UseCases;
