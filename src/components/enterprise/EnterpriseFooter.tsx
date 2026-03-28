import ibloovLogo from "@/assets/ibloov-logo.jpeg";

const EnterpriseFooter = () => (
  <footer className="border-t border-white/[0.04] py-8">
    <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <img src={ibloovLogo} alt="iBloov" className="h-6 w-auto rounded-md" />
        <span className="text-white/60 text-sm font-semibold">AuraLink Enterprise</span>
        <span className="text-white/20">by</span>
        <span className="text-white/40 text-sm">iBloov Global Inc.</span>
      </div>
      <p className="text-white/30 text-xs leading-relaxed">
        The hospitality operating system. Atlanta, GA · Launching May 2026 with FIFA World Cup.
      </p>
      <p className="text-white/15 text-[10px] mt-2">
        AURA · VibeGigs · Flex-it · TribeMint · PicPop · Gift Cards · AI Concierge
      </p>
      <p className="text-white/20 text-[10px] mt-3">© 2026 iBloov Inc. All rights reserved.</p>
    </div>
  </footer>
);

export default EnterpriseFooter;
