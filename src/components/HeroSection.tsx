import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-medspa.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxurious MedSpa reception area"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Phone className="w-4 h-4 text-success" />
            <span className="text-sm font-medium">24/7 AI Receptionist</span>
          </div>
          
          {/* Main Headlines */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            AI Receptionist for <span className="text-success">MedSpas</span><br />
            <span className="text-3xl md:text-5xl font-semibold">Never Miss a Client Call.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Meet Ivy — your 24/7 AI receptionist. She answers every inquiry, books appointments instantly, and only charges for results.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Get Set Up for Free
              <MessageCircle className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              data-cal-link="ahmed-mohamed-ivy/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
            >
              See how it works
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-white/70 text-sm">Trusted by leading MedSpas nationwide</p>
            <div className="flex gap-8 text-white/60 text-xs">
              <span>✓ HIPAA Compliant</span>
              <span>✓ 99.9% Uptime</span>
              <span>✓ Setup in 24 Hours</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;