import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock } from "lucide-react";
import officeSetup from "@/assets/office-setup.jpg";

const FinalCTA = () => {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Ready to Book More Showings Without Missing a Call?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Join real estate brokers switching from expensive answering services to Ivy. 
              Start capturing every lead today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 mr-4">
              <Button variant="success" size="xl" className="bg-success hover:bg-success/90 group flex-1 sm:flex-none sm:w-64" asChild>
                <a href="https://app.callivy.com" target="_blank" rel="noopener noreferrer">
                  Get Set Up for Free Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="border-white bg-white text-primary hover:bg-white/90 flex-1 sm:flex-none sm:w-64"
                data-cal-link="ahmed-mohamed-ivy/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
              >
                Schedule a Demo
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="text-sm">5-minute setup</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm">No contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm">Free trial</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={officeSetup} 
              alt="Professional real estate office setup with Ivy AI handling calls"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-success text-success-foreground rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Ivy Active</span>
                </div>
                <p className="text-xs opacity-90">Handling your calls 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;