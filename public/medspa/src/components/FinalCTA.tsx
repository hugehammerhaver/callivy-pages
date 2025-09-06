import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-medspa.jpg";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="MedSpa front desk environment"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Book More MedSpa Appointments <span className="text-success">Without Missing a Call?</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Join MedSpas switching from costly answering services to Ivy.
          </p>
          
          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="success" size="xl" className="group text-lg">
              Get Set Up for Free Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Phone className="mr-2 w-5 h-5" />
              Schedule a Demo
            </Button>
          </div>
          
          {/* Urgency/Scarcity */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageCircle className="w-5 h-5 text-success" />
              <span className="font-semibold">Limited Time Offer</span>
            </div>
            <p className="text-white/90">
              Get your first 30 days completely free. No setup fees, no monthly minimums. 
              See results immediately or cancel with no penalties.
            </p>
          </div>
          
          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-success mb-2">5 Minutes</div>
              <p className="text-white/80">Quick setup call</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-success mb-2">24 Hours</div>
              <p className="text-white/80">Ivy goes live</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-success mb-2">Immediate</div>
              <p className="text-white/80">Start booking more clients</p>
            </div>
          </div>
          
          {/* Final Trust Elements */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p className="text-white/70 text-sm mb-4">
              Questions? Call us at <span className="text-success font-semibold">(855) IVY-MEDSPA</span> or email <span className="text-success font-semibold">hello@ivyai.com</span>
            </p>
            <div className="flex justify-center gap-8 text-white/60 text-xs">
              <span>HIPAA Compliant</span>
              <span>SOC 2 Certified</span>
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;