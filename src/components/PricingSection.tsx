import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple, <span className="text-success">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No subscription. No per-minute billing. Only pay when Ivy books MedSpa appointments or routes calls.
          </p>
        </div>
        
        {/* Pricing Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Traditional Service */}
          <Card className="border-2 border-gray-200 bg-white relative">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Traditional Answering Service</h3>
                <div className="text-gray-500">
                  <span className="text-3xl font-bold">$500-2000</span>
                  <span className="text-lg">/month</span>
                </div>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500" />
                  <span className="text-muted-foreground">Pay regardless of results</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500" />
                  <span className="text-muted-foreground">Limited hours coverage</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500" />
                  <span className="text-muted-foreground">Generic scripts, not MedSpa-focused</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500" />
                  <span className="text-muted-foreground">Manual booking process</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500" />
                  <span className="text-muted-foreground">Inconsistent quality</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Ivy Service */}
          <Card className="border-2 border-success bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-success text-white text-center py-2 text-sm font-semibold">
              RECOMMENDED
            </div>
            <CardContent className="p-8 pt-12">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Ivy — Pay Only for Results</h3>
                <div className="text-success">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-lg">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Only pay per successful booking</p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  <span className="text-foreground">Pay only when appointments are booked</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  <span className="text-foreground">24/7 availability</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  <span className="text-foreground">MedSpa-specific training & knowledge</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  <span className="text-foreground">Instant calendar integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  <span className="text-foreground">Consistent, professional experience</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Button variant="success" size="lg" className="w-full">
                  See Pricing & Get Started
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Additional Info */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Typical pricing: $15-25 per successful booking • No setup fees • Cancel anytime
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>✓ Free 14-day trial</span>
            <span>✓ Setup in 24 hours</span>
            <span>✓ No long-term contracts</span>
            <span>✓ HIPAA compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;