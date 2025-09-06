import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const Pricing = () => {
  const comparison = [
    { feature: "Setup Cost", traditional: "$500+", ivy: "Free" },
    { feature: "Monthly Fee", traditional: "$1,200+", ivy: "$0" },
    { feature: "Per-Minute Charges", traditional: "$2-4", ivy: "N/A" },
    { feature: "Only Pay for Results", traditional: false, ivy: true },
    { feature: "24/7 Availability", traditional: true, ivy: true },
    { feature: "Legal Industry Training", traditional: false, ivy: true },
    { feature: "Instant Setup", traditional: false, ivy: true }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            No subscription. No per-minute charges. Only pay when Ivy books consultations or routes client calls.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elevated overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-6 text-foreground font-semibold">Feature</th>
                    <th className="text-center p-6 text-foreground font-semibold">Traditional Answering Service</th>
                    <th className="text-center p-6 text-success font-semibold bg-success/5">Ivy — Pay Only for Results</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="p-6 text-card-foreground font-medium">{item.feature}</td>
                      <td className="p-6 text-center">
                        {typeof item.traditional === 'boolean' ? (
                          item.traditional ? (
                            <Check className="w-5 h-5 text-success mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-destructive mx-auto" />
                          )
                        ) : (
                          <span className="text-muted-foreground">{item.traditional}</span>
                        )}
                      </td>
                      <td className="p-6 text-center bg-success/2">
                        {typeof item.ivy === 'boolean' ? (
                          item.ivy ? (
                            <Check className="w-5 h-5 text-success mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-destructive mx-auto" />
                          )
                        ) : (
                          <span className="text-success font-semibold">{item.ivy}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-success rounded-2xl p-8 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-success-foreground mb-4">
                Ready to Stop Paying for Empty Minutes?
              </h3>
              <p className="text-success-foreground/90 mb-6">
                Most law firms save 60-80% on answering service costs while capturing more clients.
              </p>
              <Button variant="outline" size="lg" className="bg-success-foreground text-success border-success-foreground hover:bg-success-foreground/90">
                See Pricing & Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;