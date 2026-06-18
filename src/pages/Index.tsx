import SEO from "@/components/SEO";
import LandingSegmentNav from "@/components/aura/LandingSegmentNav";
import NavBar from "@/components/enterprise/v3/NavBar";
import Hero from "@/components/enterprise/v3/Hero";
import LogoStrip from "@/components/enterprise/v3/LogoStrip";
import SectorsStrip from "@/components/enterprise/v3/SectorsStrip";
import BeforeAfter from "@/components/enterprise/v3/BeforeAfter";
import FeatureTiles from "@/components/enterprise/v3/FeatureTiles";
import LoveLetterSection from "@/components/enterprise/v3/LoveLetterSection";
import EcosystemShowcase from "@/components/enterprise/v3/EcosystemShowcase";
import TribeMintSection from "@/components/enterprise/v3/TribeMintSection";
import HowItWorks from "@/components/enterprise/v3/HowItWorks";
import Pricing from "@/components/enterprise/v3/Pricing";
import Faq from "@/components/enterprise/v3/Faq";
import FinalCta from "@/components/enterprise/v3/FinalCta";
import StickyMobileCta from "@/components/enterprise/v3/StickyMobileCta";
import Footer from "@/components/enterprise/v2/Footer";
import { PLANS, annualPrice } from "@/lib/plans";

const Index = () => {
  const offers = PLANS.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: p.price.toString(),
    priceCurrency: "USD",
    description: p.tagline,
    ...(p.price > 0 && {
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: p.price,
        priceCurrency: "USD",
        unitText: "MONTH",
      },
      eligibleQuantity: { "@type": "QuantitativeValue", value: annualPrice(p.price), unitText: "ANNUAL_PER_MONTH" },
    }),
  }));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "AuraLink",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "QR-powered guest operating system for restaurants, hotels, and lounges.",
      offers,
      provider: { "@type": "Organization", name: "iBloov" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How fast can we launch?", acceptedAnswer: { "@type": "Answer", text: "Most venues are live in under 3 minutes." } },
        { "@type": "Question", name: "What does it cost?", acceptedAnswer: { "@type": "Answer", text: "Spark is free, Maverick $79/mo, Supernova $149/mo. Save 20% annually." } },
        { "@type": "Question", name: "Do you take booking commission?", acceptedAnswer: { "@type": "Answer", text: "No. 0% on direct reservations." } },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="AuraLink — QR Guest OS for Hospitality | from $0"
        description="One QR for bookings, gift cards, loyalty, AI concierge. Live in 3 minutes. Spark free · Maverick $79 · Supernova $149."
        type="website"
        keywords="hospitality OS, QR microsite, restaurant guest experience, hotel AI concierge, gift cards, loyalty, AuraLink"
        jsonLd={jsonLd}
      />
      <div className="min-h-screen bg-[#FFF7ED] text-[#111] font-dm antialiased selection:bg-[#C6F432]">
        <NavBar />
        <div className="fixed top-[72px] left-1/2 -translate-x-1/2 z-40">
          <LandingSegmentNav />
        </div>
        <main id="main-content">
          <Hero />
          <LogoStrip />
          <SectorsStrip />
          <BeforeAfter />
          <FeatureTiles />
          <LoveLetterSection />
          <EcosystemShowcase />
          <TribeMintSection />
          <HowItWorks />
          <Pricing />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
        <StickyMobileCta />
      </div>
    </>
  );
};

export default Index;
