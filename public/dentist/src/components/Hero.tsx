import { Button } from "@/components/ui/button";
const heroImage = "/lovable-uploads/d0d4ac23-4c54-4555-84e1-bdcffc7743ef.png";
import { Phone, Calendar, Shield, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-ivy-navy via-ivy-navy-light to-ivy-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-ivy-navy/95 to-ivy-navy-light/90"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-ivy-green/20 border border-ivy-green/30 text-ivy-green-light text-sm font-medium">
                <Phone className="w-4 h-4 mr-2" />
                24/7 AI Receptionist
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                AI Receptionist for{" "}
                <span className="text-ivy-green-light">Dental Offices</span>
                <br />
                <span className="text-3xl lg:text-5xl">
                  Never Miss a Patient Call Again
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-ivy-gray-200 leading-relaxed">
                Meet Ivy—your AI receptionist that handles patient calls 24/7, books appointments, 
                and only charges when outcomes are achieved.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Get Started Today
              </Button>
              <Button variant="outline-green" size="lg" className="text-lg px-8 py-4">
                See Ivy in Action
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8 text-ivy-gray-300">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-ivy-green" />
                <span className="text-sm">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-ivy-green" />
                <span className="text-sm">PMS Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-ivy-green" />
                <span className="text-sm">24/7 Availability</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Warm dental office with patient on phone and AI assistance"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ivy-navy/20 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-ivy-gray-200">
              <div className="text-ivy-navy text-2xl font-bold">67%</div>
              <div className="text-ivy-gray-500 text-sm">Hang up on voicemail</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-ivy-green rounded-xl shadow-lg p-4 text-white">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-ivy-green-light text-sm">Always Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;