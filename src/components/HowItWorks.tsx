import { Phone, MessageSquare, Calendar } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      title: "Customer Calls Your HVAC Business",
      description: "Emergency AC repair, furnace maintenance, or new installation — every call comes to your number like always."
    },
    {
      icon: MessageSquare,
      title: "Ivy Answers Instantly",
      description: "Your AI receptionist greets callers professionally, gathers details about their HVAC needs, and books the appointment."
    },
    {
      icon: Calendar,
      title: "Job Goes on Your Calendar",
      description: "Qualified HVAC jobs appear in your scheduling system automatically. You show up, do the work, get paid."
    }
  ];

  return (
    <section className="bg-background-alt py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Your HVAC AI Receptionist Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ivy integrates seamlessly with your existing HVAC business. No training required, no complicated setup.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="bg-success text-success-foreground w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;