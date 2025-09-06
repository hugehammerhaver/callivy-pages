import { Phone, Brain, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      step: "1",
      title: "Customer Calls",
      description: "Caller reaches out with emergency or routine service needs (leak, disposal, heating issues)."
    },
    {
      icon: Brain,
      step: "2", 
      title: "Ivy Handles Intake",
      description: "AI triages urgency, gathers key details, and schedules appointments or escalates emergencies."
    },
    {
      icon: CheckCircle,
      step: "3",
      title: "You Get Results",
      description: "Receive job details, notifications, and automatic CRM updates instantly — ready to serve."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, seamless, and powerful — Ivy integrates with your workflow in three easy steps.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center relative">
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-accent/30 z-0" 
                         style={{ transform: 'translateX(-50%)' }} />
                  )}
                  
                  <div className="relative z-10 bg-card rounded-xl p-8 shadow-card border border-gray-medium">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-6 text-xl font-bold">
                      {step.step}
                    </div>
                    <Icon className="w-10 h-10 text-navy mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-navy mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};