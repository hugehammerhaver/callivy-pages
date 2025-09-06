import { AlertTriangle, PhoneOff, DollarSign } from "lucide-react";

export const ProblemSection = () => {
  const stats = [
    {
      icon: DollarSign,
      stat: "$1,200",
      description: "Lost per missed emergency call",
      source: "Industry Average"
    },
    {
      icon: PhoneOff, 
      stat: "30%",
      description: "Of plumbing calls go unanswered after hours",
      source: "Service Industry Report"
    },
    {
      icon: AlertTriangle,
      stat: "$75-$400",
      description: "Monthly cost for traditional answering services",
      source: "Ambs Call Center"
    }
  ];

  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">
            Why Plumbing Needs Faster, Smarter Call Handling
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional answering services are expensive and inefficient. Emergencies don't wait — and neither should your customers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-card rounded-xl p-8 shadow-card text-center">
                <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold text-navy mb-2">{item.stat}</div>
                <div className="text-lg text-foreground mb-2">{item.description}</div>
                <div className="text-sm text-muted-foreground">{item.source}</div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 bg-navy rounded-2xl p-8 text-center">
          <p className="text-2xl text-primary-foreground font-semibold">
            "Emergencies don't wait. Ivy captures every lead — day or night — and keeps you in control."
          </p>
          <cite className="text-primary-foreground/80 text-sm mt-2 block">Northwest Drain & Plumbing, Seattle WA</cite>
        </div>
      </div>
    </section>
  );
};