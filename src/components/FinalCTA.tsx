import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Book More HVAC Jobs Without Lifting a Finger?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join hundreds of HVAC companies using Ivy to capture every opportunity. Set up takes 5 minutes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="success" 
            className="text-lg px-8 py-6"
            asChild
          >
            <a href="https://form.typeform.com/to/nnvtPIop" target="_blank" rel="noopener noreferrer">
              Get Set Up for Free Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <p className="text-sm opacity-75">
            No setup fees • No contracts • Pay only for results
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm opacity-75">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>24/7 HVAC Call Coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Instant Job Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Professional Customer Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;