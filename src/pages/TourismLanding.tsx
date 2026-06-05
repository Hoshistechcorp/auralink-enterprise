import { useNavigate } from "react-router-dom";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";
import SEO from "@/components/SEO";
import LandingSegmentNav from "@/components/aura/LandingSegmentNav";
import TourismHero from "@/components/tourism/TourismHero";
import TourismStatsStrip from "@/components/tourism/TourismStatsStrip";
import TourismProblem from "@/components/tourism/TourismProblem";
import TourismPhoneMockup from "@/components/tourism/TourismPhoneMockup";
import TourismHowItWorks from "@/components/tourism/TourismHowItWorks";
import TourismCardShowcase from "@/components/tourism/TourismCardShowcase";
import TourismWhyQR from "@/components/tourism/TourismWhyQR";
import TourismContentDepth from "@/components/tourism/TourismContentDepth";
import TourismDashboard from "@/components/tourism/TourismDashboard";
import TourismBuyerTiers from "@/components/tourism/TourismBuyerTiers";
import TourismCapabilities from "@/components/tourism/TourismCapabilities";
import TourismCTA from "@/components/tourism/TourismCTA";
import TourismFooter from "@/components/tourism/TourismFooter";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Cards", href: "#cards" },
  { label: "Analytics", href: "#analytics" },
  { label: "Use Cases", href: "#use-cases" },
];

const TourismLanding = () => {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AuraLink for Tourism",
      serviceType: "Destination digital platform",
      provider: { "@type": "Organization", name: "iBloov" },
      areaServed: "Worldwide",
      description:
        "Turn any city or destination into a mobile-first digital hub. QR-powered access to attractions, events, hotels, restaurants, neighborhoods, transit, and visitor services — live in under 48 hours.",
      audience: { "@type": "Audience", audienceType: "City tourism boards, convention bureaus, airport authorities, ministries of tourism" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is AuraLink for Tourism built for?",
          acceptedAnswer: { "@type": "Answer", text: "City tourism boards, state tourism offices, convention bureaus, airport authorities, and national ministries of tourism." },
        },
        {
          "@type": "Question",
          name: "How is the platform accessed by visitors?",
          acceptedAnswer: { "@type": "Answer", text: "Via QR codes deployed across airports, hotel lobbies, landmarks, visitor kiosks, and streetscape signage — no app download required." },
        },
        {
          "@type": "Question",
          name: "How long does it take to go live?",
          acceptedAnswer: { "@type": "Answer", text: "Most destinations are live within 48 hours, with no developers required." },
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="AuraLink for Tourism | QR-Powered Destination Platform by iBloov"
        description="Turn your city into a digital destination. One mobile-first hub for attractions, events, hotels, restaurants, transit, and visitor services — deployed citywide via QR."
        type="website"
        keywords="destination platform, city tourism technology, QR tourism, visitor experience, smart city, tourism board software, AuraLink Tourism"
        jsonLd={jsonLd}
      />
      <div className="min-h-screen bg-tourism-midnight font-jakarta antialiased text-tourism-ivory selection:bg-[#C9A35B]/40 selection:text-tourism-ivory overflow-x-hidden">
        {/* Top nav — dark institutional */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1C]/85 backdrop-blur-xl border-b border-tourism-divider" aria-label="Primary">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
            <button onClick={() => navigate("/tourism")} className="flex items-center gap-2.5" aria-label="AuraLink Tourism home">
              <img src={ibloovLogo} alt="iBloov logo" className="h-7 w-auto rounded-md" />
              <div className="flex items-baseline gap-1.5">
                <span className="font-fraunces text-tourism-ivory text-[20px] font-bold leading-none">AuraLink</span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-tourism-slate hidden sm:inline">by iBloov</span>
              </div>
            </button>
            <div className="flex items-center gap-1">
              {navLinks.map((l) => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="hidden md:inline-flex px-3 py-2 text-[13px] font-medium text-tourism-slate hover:text-tourism-ivory transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => navigate("/login")}
                className="hidden lg:inline-flex px-3 py-2 text-[13px] font-medium text-tourism-slate hover:text-tourism-ivory transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="ml-2 px-5 py-2.5 rounded-full bg-tourism-brass text-[#1B1310] text-[13px] font-semibold hover:opacity-95 transition-all"
              >
                Book a Tourism Demo
              </button>
            </div>
          </div>
        </nav>

        {/* Floating segment switcher */}
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40">
          <LandingSegmentNav />
        </div>

        <main id="main-content">
          <TourismHero />
          <TourismStatsStrip />
          <TourismProblem />
          <TourismPhoneMockup />
          <section id="how-it-works" aria-label="How AuraLink Tourism works"><TourismHowItWorks /></section>
          <section id="cards" aria-label="Tourism card modules"><TourismCardShowcase /></section>
          <TourismWhyQR />
          <TourismContentDepth />
          <section id="analytics" aria-label="Destination analytics dashboard"><TourismDashboard /></section>
          <section id="use-cases" aria-label="Tourism use cases"><TourismBuyerTiers /></section>
          <TourismCapabilities />
          <TourismCTA />
        </main>
        <TourismFooter />
      </div>
    </>
  );
};

export default TourismLanding;
