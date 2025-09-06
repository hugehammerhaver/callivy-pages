import { Phone, Bot, CalendarCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      title: "Prospect Calls Your Brokerage",
      description: "A potential buyer or seller calls your main number during or after business hours.",
      step: "01"
    },
    {
      icon: Bot,
      title: "Ivy Answers Instantly",
      description: "Ivy greets them professionally, gathers their information, and schedules showings or routes urgent calls.",
      step: "02"
    },
    {
      icon: CalendarCheck,
      title: "You Get Qualified Leads",
      description: "Receive detailed lead information and confirmed appointments directly in your calendar.",
      step: "03"
    }
  ];

  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            How Ivy Transforms Your Real Estate Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, seamless lead capture that works around the clock
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-success/10 w-16 h-16 rounded-xl flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-success" />
                  </div>
                  <div className="text-4xl font-bold text-success/20">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-success"></div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
                    <div className="w-0 h-0 border-l-4 border-l-success border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card border border-border rounded-xl p-6 max-w-2xl mx-auto shadow-lg">
            <p className="text-lg text-card-foreground font-semibold mb-2">
              Average Setup Time: Under 5 Minutes
            </p>
            <p className="text-muted-foreground">
              No technical setup required. Just forward your calls and Ivy handles the rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;