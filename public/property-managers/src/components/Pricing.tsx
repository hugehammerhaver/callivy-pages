import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, TrendingUp } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Pricing & Value Proposition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare Ivy's outcome-based pricing with traditional answering services and see the difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Traditional Services */}
          <Card className="p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-destructive/10 text-destructive text-sm px-3 py-1 rounded-full font-medium">
              Traditional
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Traditional Answering Services</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-primary">$30-$400</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Fixed monthly costs regardless of results</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Minute or call limits with overage fees</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Hidden fees and setup costs</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Limited availability and human errors</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Static scripts with no intelligence</span>
              </li>
            </ul>

            <div className="bg-destructive/5 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-destructive">Drawback:</strong> You pay whether calls generate value or not
              </p>
            </div>
          </Card>

          {/* Ivy AI */}
          <Card className="p-8 relative overflow-hidden border-2 border-accent/30 bg-gradient-to-br from-accent-lighter/30 to-background">
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-sm px-3 py-1 rounded-full font-medium">
              Recommended
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Ivy AI Receptionist</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-accent">Outcome-Based</span>
              <div className="text-muted-foreground">Pay only for successful results</div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Pay only for successful outcomes</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground">No monthly minimums or hidden fees</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Costs align with actual business value</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground">24/7 AI availability with zero downtime</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Intelligent routing and automated workflows</span>
              </li>
            </ul>

            <div className="bg-accent/10 rounded-lg p-4 mb-6">
              <p className="text-sm text-foreground">
                <strong className="text-accent">Advantage:</strong> ROI grows with business success—you only pay for results
              </p>
            </div>

            <Button variant="accent" className="w-full" size="lg">
              Start with Outcome-Based Pricing
            </Button>
          </Card>
        </div>

        {/* Value Metrics */}
        <div className="bg-gradient-to-r from-primary-lighter to-accent-lighter rounded-2xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              What Counts as a "Successful Outcome"?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ivy's outcome-based pricing ensures you only pay when real value is delivered to your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">Qualified Leads</h4>
              <p className="text-sm text-muted-foreground">Prospective tenants who schedule showings or request property information</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">Logged Maintenance</h4>
              <p className="text-sm text-muted-foreground">Maintenance requests properly categorized, prioritized, and routed to your team</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">Emergency Response</h4>
              <p className="text-sm text-muted-foreground">Urgent situations identified and escalated to appropriate on-call personnel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;