import { Button } from "@/components/ui/button";
import { Check, X, DollarSign } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No subscription. No hidden fees. Only pay when Ivy captures a real estate lead.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Traditional Service */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Traditional Answering Service</h3>
              <div className="text-4xl font-bold text-destructive mb-2">$500-2000</div>
              <p className="text-muted-foreground">per month</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <X className="h-5 w-5 text-destructive" />
                <span className="text-card-foreground">High monthly fees</span>
              </li>
              <li className="flex items-center gap-3">
                <X className="h-5 w-5 text-destructive" />
                <span className="text-card-foreground">Limited after-hours coverage</span>
              </li>
              <li className="flex items-center gap-3">
                <X className="h-5 w-5 text-destructive" />
                <span className="text-card-foreground">Human errors in scheduling</span>
              </li>
              <li className="flex items-center gap-3">
                <X className="h-5 w-5 text-destructive" />
                <span className="text-card-foreground">Pay regardless of results</span>
              </li>
            </ul>
          </div>

          {/* Ivy Service */}
          <div className="bg-card border-2 border-success rounded-xl p-8 shadow-xl relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Recommended
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Ivy — Pay Only for Results</h3>
              <div className="text-4xl font-bold text-success mb-2">$0</div>
              <p className="text-muted-foreground">setup + pay per qualified lead</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-success" />
                <span className="text-card-foreground">24/7 coverage guaranteed</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-success" />
                <span className="text-card-foreground">Perfect call handling every time</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-success" />
                <span className="text-card-foreground">Instant appointment scheduling</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-success" />
                <span className="text-card-foreground">Only pay for qualified leads</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-success" />
                <span className="text-card-foreground">Human-like conversation quality</span>
              </li>
            </ul>
            
            <Button variant="success" size="lg" className="w-full">
              <DollarSign className="mr-2 h-5 w-5" />
              See Pricing & Get Started
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-secondary rounded-xl p-6 max-w-2xl mx-auto border border-border">
            <p className="text-lg font-semibold text-primary mb-2">
              ROI Guarantee: Save 60% vs Traditional Services
            </p>
            <p className="text-muted-foreground">
              Most brokers save thousands monthly while capturing more leads than ever before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;