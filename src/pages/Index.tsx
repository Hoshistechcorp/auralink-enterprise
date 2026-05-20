import SEO from "@/components/SEO";
import LandingSegmentNav from "@/components/aura/LandingSegmentNav";
import NavBar from "@/components/enterprise/v2/NavBar";
import Hero from "@/components/enterprise/v2/Hero";
import TrustBar from "@/components/enterprise/v2/TrustBar";
import ProblemSolution from "@/components/enterprise/v2/ProblemSolution";
import FeatureGrid from "@/components/enterprise/v2/FeatureGrid";
import ProductArchitecture from "@/components/enterprise/v2/ProductArchitecture";
import UseCases from "@/components/enterprise/v2/UseCases";
import EcosystemMap from "@/components/enterprise/v2/EcosystemMap";
import Testimonials from "@/components/enterprise/v2/Testimonials";
import SecurityEnterprise from "@/components/enterprise/v2/SecurityEnterprise";
import FaqAccordion from "@/components/enterprise/v2/FaqAccordion";
import FinalCta from "@/components/enterprise/v2/FinalCta";
import Footer from "@/components/enterprise/v2/Footer";

const Index = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "AuraLink for Hospitality",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "QR-powered guest operating system for restaurants, hotels, and lounges. Direct bookings, gift cards, loyalty, AI concierge, analytics, and affiliate growth in one mobile-first hub.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", category: "Free trial" },
      provider: { "@type": "Organization", name: "iBloov", url: "https://aura-link-enterpries.lovable.app/" },
      featureList: [
        "QR microsite (15-card grid)",
        "Direct reservations (0% commission)",
        "Gift cards & loyalty",
        "Multilingual AI concierge",
        "Real-time analytics",
        "Affiliate & influencer tracking",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is AuraLink?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AuraLink is a QR-powered guest operating system for hospitality venues — restaurants, hotels, and lounges — replacing six disconnected guest tools with one mobile-first hub.",
          },
        },
        {
          "@type": "Question",
          name: "How long does setup take?",
          acceptedAnswer: { "@type": "Answer", text: "Most venues are live in under 24 hours with no developers required." },
        },
        {
          "@type": "Question",
          name: "Does AuraLink charge commission on bookings?",
          acceptedAnswer: { "@type": "Answer", text: "No. AuraLink takes 0% commission on direct reservations." },
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="AuraLink for Hospitality | QR-Powered Guest OS by iBloov"
        description="AuraLink is the operating system for restaurants, hotels, and lounges. Drive direct revenue with QR microsites, gift cards, loyalty, AI concierge, and 0% commission bookings."
        type="website"
        keywords="hospitality OS, QR microsite, restaurant guest experience, hotel AI concierge, gift cards, loyalty platform, direct bookings, AuraLink"
        jsonLd={jsonLd}
      />
      <div className="min-h-screen bg-[#0B0907] text-ivory font-jakarta antialiased selection:bg-[#C9A35B]/40 selection:text-ivory">
        <NavBar />
        {/* Floating segment switcher */}
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40">
          <LandingSegmentNav />
        </div>
        <main id="main-content">
          <Hero />
          <TrustBar />
          <ProblemSolution />
          <FeatureGrid />
          <ProductArchitecture />
          <UseCases />
          <EcosystemMap />
          <Testimonials />
          <SecurityEnterprise />
          <FaqAccordion />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
