const items = [
  "Used by modern venues",
  "Live in under 3 minutes",
  "40+ languages supported",
  "Enterprise SLA available",
  "Stripe-powered payments",
];

const TrustBar = () => (
  <section className="border-y border-[#2A2320] bg-[#0E0B09]">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] text-stone-warm">
      {items.map((t, i) => (
        <div key={t} className="flex items-center gap-8">
          <span className="font-medium tracking-wide">{t}</span>
          {i < items.length - 1 && <span className="hidden sm:inline h-1 w-1 rounded-full bg-[#3A302A]" />}
        </div>
      ))}
    </div>
  </section>
);

export default TrustBar;
