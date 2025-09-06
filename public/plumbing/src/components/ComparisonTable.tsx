import { Check, X, Minus } from "lucide-react";

export const ComparisonTable = () => {
  const features = [
    {
      feature: "Pricing",
      traditional: "$1-$2/min or $75-$400/month",
      ivy: "Pay only for successful outcomes",
      traditionalIcon: X,
      ivyIcon: Check
    },
    {
      feature: "After-Hours Coverage", 
      traditional: "May require premium add-ons",
      ivy: "Built-in 24/7 response",
      traditionalIcon: Minus,
      ivyIcon: Check
    },
    {
      feature: "Emergency Handling",
      traditional: "Manual or preset escalation only", 
      ivy: "Intelligent triage and routing",
      traditionalIcon: X,
      ivyIcon: Check
    },
    {
      feature: "Integration",
      traditional: "Often manual or separate cost",
      ivy: "Native CRM and dispatch integrations", 
      traditionalIcon: X,
      ivyIcon: Check
    },
    {
      feature: "Scalability",
      traditional: "Limited by human agents",
      ivy: "Automatically scales during call surges",
      traditionalIcon: X, 
      ivyIcon: Check
    },
    {
      feature: "Setup Speed",
      traditional: "Setup and training needed",
      ivy: "Plug-and-play with rapid onboarding",
      traditionalIcon: Minus,
      ivyIcon: Check
    }
  ];

  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">
            Ivy vs. Traditional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Ivy's AI-powered approach outperforms traditional answering services across every metric.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto bg-card rounded-2xl shadow-elegant overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-navy text-primary-foreground">
                  <th className="text-left p-6 font-semibold text-lg">Feature</th>
                  <th className="text-center p-6 font-semibold text-lg">Traditional Answering Service</th>
                  <th className="text-center p-6 font-semibold text-lg bg-accent text-accent-foreground">
                    Ivy (AI Outcome-Based Receptionist)
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => {
                  const TraditionalIcon = item.traditionalIcon;
                  const IvyIcon = item.ivyIcon;
                  
                  return (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-light/50" : "bg-card"}>
                      <td className="p-6 font-medium text-navy">{item.feature}</td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-3">
                          <TraditionalIcon className={`w-5 h-5 ${
                            item.traditionalIcon === X ? 'text-destructive' : 
                            item.traditionalIcon === Minus ? 'text-muted-foreground' :
                            'text-accent'
                          }`} />
                          <span className="text-sm">{item.traditional}</span>
                        </div>
                      </td>
                      <td className="p-6 text-center bg-accent/5">
                        <div className="flex items-center justify-center gap-3">
                          <IvyIcon className="w-5 h-5 text-accent" />
                          <span className="text-sm font-medium">{item.ivy}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};