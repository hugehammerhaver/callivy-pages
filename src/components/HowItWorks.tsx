import { Phone, Calendar, UserCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      title: "Prospect Calls Your Firm",
      description: "A potential client calls your law firm during business hours or after hours."
    },
    {
      icon: Calendar,
      title: "Ivy Answers Instantly",
      description: "Ivy greets the caller professionally, qualifies their needs, and books consultations or routes urgent calls."
    },
    {
      icon: UserCheck,
      title: "You Get Qualified Leads",
      description: "Receive detailed client information and scheduled appointments directly in your calendar."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How Ivy Works for Your Law Firm
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to never miss another client opportunity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative text-center">
                <div className="bg-success w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-success-foreground" />
                </div>
                <div className="absolute top-2 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-8 w-16 h-0.5 bg-border"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card rounded-xl p-8 shadow-soft border max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-card-foreground mb-4">
              Ready in Minutes, Not Days
            </h3>
            <p className="text-muted-foreground">
              Our team will have Ivy answering your calls within 24 hours. No complex setup, no training required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;