import { Check, X } from "lucide-react";

export const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">
            Pricing & Value
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop paying per minute. With Ivy's outcome-based model, you only pay when results happen.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Services */}
          <div className="bg-card rounded-xl p-8 shadow-card border border-gray-medium">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-navy mb-2">Traditional Answering Services</h3>
              <div className="text-3xl font-bold text-destructive">$75-$400/month</div>
              <div className="text-muted-foreground">Plus $1-$2 per minute</div>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <X className="w-5 h-5 text-destructive" />
                <span>Pay regardless of outcomes</span>
              </li>
              <li className="flex items-center gap-3">
                <X className="w-5 h-5 text-destructive" />
                <span>Limited after-hours coverage</span>
              </li>
              <li className="flex items-center gap-3">
                <X className="w-5 h-5 text-destructive" />
                <span>Manual escalation only</span>
              </li>
              <li className="flex items-center gap-3">
                <X className="w-5 h-5 text-destructive" />
                <span>Separate integration costs</span>
              </li>
              <li className="flex items-center gap-3">
                <X className="w-5 h-5 text-destructive" />
                <span>Limited by human agents</span>
              </li>
            </ul>
          </div>
          
          {/* Ivy Advantage */}
          <div className="bg-card rounded-xl p-8 shadow-elegant border-2 border-accent relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
              Recommended
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-navy mb-2">The Ivy Advantage</h3>
              <div className="text-3xl font-bold text-accent">Outcome-Based</div>
              <div className="text-muted-foreground">Pay only when results happen</div>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent" />
                <span>Only pay for successful outcomes</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent" />
                <span>Built-in 24/7 response</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent" />
                <span>Intelligent triage and routing</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent" />
                <span>Native CRM integrations</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent" />
                <span>Unlimited scaling capacity</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-navy font-semibold">
            Predictable spending tied to business growth, not call length.
          </p>
        </div>
      </div>
    </section>
  );
};