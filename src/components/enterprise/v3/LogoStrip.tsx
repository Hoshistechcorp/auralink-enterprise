const items = ["Restaurants", "Hotels", "Lounges", "Cafés", "Resorts"];

const LogoStrip = () => (
  <section className="border-y border-[#1F1A17] bg-[#0E0B09] py-4">
    <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#7A6F62] mb-3">
      Built for modern venues
    </p>
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-5">
      {items.map((i) => (
        <span key={i} className="text-[13px] font-medium text-[#A89B8B]">
          {i}
        </span>
      ))}
    </div>
  </section>
);

export default LogoStrip;
