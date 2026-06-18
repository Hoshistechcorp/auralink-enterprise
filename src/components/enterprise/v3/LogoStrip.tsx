const items = ["Restaurants", "Hotels", "Lounges", "Cafés", "Resorts", "Spas", "Bistros"];

const LogoStrip = () => (
  <section className="border-y-2 border-[#111] bg-[#1F2BD6] py-5 overflow-hidden">
    <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#FFF7ED]/70 mb-3 font-bold">
      Built for modern venues
    </p>
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-5">
      {items.map((i) => (
        <span key={i} className="text-[14px] font-grotesk font-bold text-[#FFF7ED]">
          {i}
        </span>
      ))}
    </div>
  </section>
);

export default LogoStrip;
