import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ValueProposition />
        <SocialProof />
        <HowItWorks />
        <PricingSection />
        <FinalCTA />
      </main>
    </div>
  );
};

export default Index;
