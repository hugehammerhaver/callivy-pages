import { Card } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      stat: "24/7",
      title: "Call Volume Overload",
      description: "Property managers get flooded with calls—from maintenance workers, tenants, prospects, and emergencies—often around the clock. Traditional services ensure no call is missed but at high operational costs."
    },
    {
      stat: "$30-$400/mo",
      title: "Traditional Answering Services",
      description: "Traditional answering services range from $30–$400/month depending on plan—often structured around minute quotas and per-call billing with hidden fees and limitations."
    },
    {
      stat: "100%",
      title: "AI Availability & Intelligence", 
      description: "AI receptionists like Ivy offer 24/7 availability, automatic triaging, and scale during surges—without staffing constraints or human error factors."
    },
    {
      stat: "↓70%",
      title: "Reduced Operational Overhead",
      description: "Ivy significantly reduces staff overhead, missed leads, and tenant dissatisfaction by handling routine calls, emergencies, and lead intake intelligently."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Why Property Managers Need Ivy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your property management operations with intelligent call handling that scales with your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-elegant transition-all duration-300 border-primary/10 hover:border-accent/30">
              <div className="mb-4">
                <div className="text-4xl font-bold text-accent mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-semibold text-primary mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-accent-lighter/50 backdrop-blur-sm rounded-full px-6 py-3 border border-accent/20">
            <span className="text-accent font-medium">Ready to eliminate missed calls?</span>
            <span className="text-sm text-muted-foreground">Join hundreds of property managers using Ivy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;