import Hero from "@/components/Hero";
import WhyIvy from "@/components/WhyIvy";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import DentalSpecific from "@/components/DentalSpecific";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyIvy />
      <Features />
      <Pricing />
      <HowItWorks />
      <DentalSpecific />
      <Testimonials />
      <FinalCTA />
    </div>
  );
};

export default Index;
