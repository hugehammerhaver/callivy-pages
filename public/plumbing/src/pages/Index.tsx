import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PricingSection } from "@/components/PricingSection";
import { HowItWorks } from "@/components/HowItWorks";
import { ComparisonTable } from "@/components/ComparisonTable";
import { TrustSection } from "@/components/TrustSection";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <PricingSection />
      <HowItWorks />
      <ComparisonTable />
      <TrustSection />
      <FinalCTA />
    </div>
  );
};

export default Index;
