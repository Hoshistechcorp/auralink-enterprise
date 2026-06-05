const Footer = () => (
  <footer className="border-t border-[#2A2320] py-10 bg-[#0B0907]">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <span className="h-6 w-6 rounded-md bg-brass-gradient" />
        <span className="font-fraunces font-bold text-ivory text-[15px] tracking-tight">
          AuraLink{" "}
          <span className="font-jakarta italic font-medium text-stone-warm text-[11px]">by iBloov</span>
        </span>
      </div>
      <div className="flex items-center gap-5 text-[12px] text-stone-warm">
        <a href="#" className="hover:text-ivory transition-colors">Privacy</a>
        <a href="#" className="hover:text-ivory transition-colors">Terms</a>
        <a href="#" className="hover:text-ivory transition-colors">Contact</a>
      </div>
      <p className="text-stone-warm text-[11px]">© 2026 iBloov Inc. The hospitality operating system.</p>
    </div>
  </footer>
);

export default Footer;
