import { Button } from "@/components/ui/button";
import { Phone, Calendar, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              AI Receptionist for Real Estate Brokers — Never Miss a Lead Again
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Meet Ivy — your 24/7 AI receptionist. She answers every buyer and seller call, 
              schedules showings, and only charges when leads convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="https://form.typeform.com/to/nnvtPIop" target="_blank" rel="noopener noreferrer">
                  Get Set Up for Free
                  <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                data-cal-link="ahmed-mohamed-ivy/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
              >
                See How It Works
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>24/7 Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Pay Per Result</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Human-Like AI</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/854670e8-9dac-4f9e-9096-e4ecc2cd01dd.png" 
              alt="Professional real estate agent handing keys to happy clients in modern home"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">Ivy is handling calls</p>
                  <p className="text-xs text-muted-foreground">3 showings booked today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;