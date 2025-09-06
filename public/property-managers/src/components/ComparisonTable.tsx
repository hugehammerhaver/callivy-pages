import { Card } from "@/components/ui/card";
import { Check, X, Zap } from "lucide-react";

const ComparisonTable = () => {
  const features = [
    {
      feature: "Pricing Model",
      traditional: "Monthly or per-minute fees",
      traditionalIcon: X,
      ivy: "Pay only for outcome calls",
      ivyIcon: Check
    },
    {
      feature: "24/7 Availability", 
      traditional: "Often extra or limited",
      traditionalIcon: X,
      ivy: "Built-in, always available",
      ivyIcon: Check
    },
    {
      feature: "Emergency Handling",
      traditional: "Static scripts or human delay",
      traditionalIcon: X,
      ivy: "AI triages & routes instantly", 
      ivyIcon: Zap
    },
    {
      feature: "Integrations",
      traditional: "Often manual or limited",
      traditionalIcon: X,
      ivy: "Native PM software/CRM integration",
      ivyIcon: Check
    },
    {
      feature: "Scalability",
      traditional: "Limited by staffing",
      traditionalIcon: X,
      ivy: "Auto-scales during high-volume periods",
      ivyIcon: Zap
    },
    {
      feature: "Setup Speed",
      traditional: "Hours to days",
      traditionalIcon: X,
      ivy: "Plug-and-play, fast onboarding",
      ivyIcon: Check
    },
    {
      feature: "Call Intelligence",
      traditional: "Basic routing only",
      traditionalIcon: X,
      ivy: "AI-powered classification & learning",
      ivyIcon: Zap
    },
    {
      feature: "Cost Predictability",
      traditional: "Fixed costs + overage fees",
      traditionalIcon: X,
      ivy: "Outcome-based, scales with success",
      ivyIcon: Check
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Comparison: Traditional vs. Ivy AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Ivy's intelligent automation outperforms traditional answering services
          </p>
        </div>

        <Card className="overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-primary-lighter to-accent-lighter">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-primary">Feature</h3>
            </div>
            <div className="p-6 border-l border-primary/10">
              <h3 className="text-lg font-semibold text-primary">Traditional Answering Service</h3>
            </div>
            <div className="p-6 border-l border-accent/20 bg-accent-lighter/50">
              <h3 className="text-lg font-semibold text-accent flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Ivy AI Receptionist
              </h3>
            </div>
          </div>

          {/* Comparison Rows */}
          {features.map((item, index) => {
            const TraditionalIcon = item.traditionalIcon;
            const IvyIcon = item.ivyIcon;
            
            return (
              <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}>
                <div className="p-6">
                  <div className="font-medium text-primary">{item.feature}</div>
                </div>
                
                <div className="p-6 border-l border-border">
                  <div className="flex items-start gap-3">
                    <TraditionalIcon className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.traditional}</span>
                  </div>
                </div>
                
                <div className="p-6 border-l border-accent/20 bg-accent-lighter/20">
                  <div className="flex items-start gap-3">
                    <IvyIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      IvyIcon === Zap ? 'text-accent' : 'text-accent'
                    }`} />
                    <span className="text-foreground font-medium">{item.ivy}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Card>

        {/* Bottom Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 border-destructive/20">
            <h3 className="text-xl font-semibold text-destructive mb-4">Traditional Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Fixed monthly costs regardless of performance</li>
              <li>• Limited flexibility and customization</li>
              <li>• Human dependency creates inconsistencies</li>
              <li>• Reactive approach to call handling</li>
            </ul>
          </Card>
          
          <Card className="p-8 border-accent/30 bg-gradient-to-br from-accent-lighter/30 to-background">
            <h3 className="text-xl font-semibold text-accent mb-4">Ivy AI Advantage</h3>
            <ul className="space-y-2 text-sm text-foreground">
              <li>• Pay only for measurable business outcomes</li>
              <li>• Intelligent, learning system that improves over time</li>
              <li>• Consistent, professional service 24/7</li>
              <li>• Proactive call management and routing</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;