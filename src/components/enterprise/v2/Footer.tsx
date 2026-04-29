const Footer = () => (
  <footer className="border-t border-white/[0.06] py-10">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="h-6 w-6 rounded-md bg-aura-gradient" />
        <span className="font-jakarta font-bold text-white text-[13px] tracking-tight">
          AuraLink <span className="text-white/40">Enterprise</span>
        </span>
      </div>
      <p className="text-white/30 text-[11px]">© 2026 iBloov Inc. The hospitality operating system.</p>
    </div>
  </footer>
);

export default Footer;
