import LandingSegmentNav from "@/components/aura/LandingSegmentNav";
import NavBar from "@/components/enterprise/v2/NavBar";
import Hero from "@/components/enterprise/v2/Hero";
import ProblemSolution from "@/components/enterprise/v2/ProblemSolution";
import FeatureGrid from "@/components/enterprise/v2/FeatureGrid";
import Testimonials from "@/components/enterprise/v2/Testimonials";
import FaqAccordion from "@/components/enterprise/v2/FaqAccordion";
import FinalCta from "@/components/enterprise/v2/FinalCta";
import Footer from "@/components/enterprise/v2/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#08080B] text-white font-jakarta antialiased selection:bg-[#8B5CF6]/40 selection:text-white">
      <NavBar />
      <div className="border-b border-white/[0.04]">
        <LandingSegmentNav />
      </div>
      <Hero />
      <ProblemSolution />
      <FeatureGrid />
      <Testimonials />
      <FaqAccordion />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Index;
