import LandingNavbar from "@/components/aura/LandingNavbar";
import EnterpriseHero from "@/components/enterprise/EnterpriseHero";
import EnterpriseTrustBar from "@/components/enterprise/EnterpriseTrustBar";
import EnterpriseWhyCards from "@/components/enterprise/EnterpriseWhyCards";
import EnterpriseMicrositePreview from "@/components/enterprise/EnterpriseMicrositePreview";
import EnterpriseEcosystem from "@/components/enterprise/EnterpriseEcosystem";
import EnterpriseGiftCards from "@/components/enterprise/EnterpriseGiftCards";
import EnterpriseGrowthShowcase from "@/components/enterprise/EnterpriseGrowthShowcase";
import EnterpriseVideoDemo from "@/components/enterprise/EnterpriseVideoDemo";
import EnterpriseVenueTypes from "@/components/enterprise/EnterpriseVenueTypes";
import EnterpriseCTA from "@/components/enterprise/EnterpriseCTA";
import EnterpriseFooter from "@/components/enterprise/EnterpriseFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white font-body antialiased">
      <LandingNavbar />

      <EnterpriseHero />
      <EnterpriseTrustBar />
      <EnterpriseWhyCards />
      <EnterpriseMicrositePreview />

      {/* Full-width hospitality image break */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
          alt="Fine dining experience"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/30 to-[#0D1117]/60" />
      </section>
      <EnterpriseEcosystem />
      <EnterpriseGiftCards />
      <EnterpriseGrowthShowcase />
      <EnterpriseVideoDemo />
      <EnterpriseVenueTypes />
      <EnterpriseCTA />
      <EnterpriseFooter />
    </div>
  );
};

export default Index;
