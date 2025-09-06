import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
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
