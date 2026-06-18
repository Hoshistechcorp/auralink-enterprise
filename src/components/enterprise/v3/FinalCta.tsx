import ClaimLinkBar from "./ClaimLinkBar";

const FinalCta = () => {
  return (
    <section className="relative px-5 py-24 bg-[#C6F432] border-t-2 border-[#111] overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#FF7A59] blur-[80px]" />
        <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-[#C8A2FF] blur-[90px]" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative">
        <h2 className="font-grotesk text-[36px] sm:text-[48px] font-extrabold text-[#111] tracking-tight leading-[1.05]">
          Your venue's{" "}
          <span className="relative inline-block">
            <span className="relative z-10">new front door.</span>
            <span aria-hidden className="absolute left-0 right-0 bottom-1 h-3 sm:h-4 bg-[#FFF7ED] -z-0 rounded-full" />
          </span>
        </h2>
        <p className="text-[15px] text-[#111]/75 mt-4">
          21 days free. No credit card. Live in 3 minutes.
        </p>

        <div className="mt-8 max-w-lg mx-auto">
          <ClaimLinkBar />
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
