import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <ValueProposition />
        <SocialProof />
        <HowItWorks />
        <Pricing />
        <FinalCTA />
      </main>
    </div>
  );
};

export default Index;
