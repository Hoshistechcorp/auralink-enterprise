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
  return (
    <div className="min-h-screen bg-[#0B0907] text-ivory font-jakarta antialiased selection:bg-[#C9A35B]/40 selection:text-ivory">
      <NavBar />
      <div className="border-b border-[#2A2320] bg-[#0E0B09]">
        <LandingSegmentNav />
      </div>
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
      <Footer />
    </div>
  );
};

export default Index;
