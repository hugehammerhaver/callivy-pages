import { Card } from "@/components/ui/card";
import { Phone, Brain, FileText } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      number: "1",
      title: "Tenant or Prospect Calls",
      description: "A tenant or prospect calls your property management office seeking assistance, information, or reporting an issue."
    },
    {
      icon: Brain,
      number: "2", 
      title: "Ivy Answers & Processes",
      description: "Ivy answers instantly, classifies the call type, and handles it intelligently—logging maintenance, scheduling walkthroughs, or routing to staff."
    },
    {
      icon: FileText,
      number: "3",
      title: "You Receive Structured Updates",
      description: "You receive organized updates via CRM integration, email summaries, or your ticket dashboard—no manual work required."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, automated, and seamlessly integrated into your existing workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-px bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative z-10 p-8 text-center hover:shadow-elegant transition-all duration-300 border-primary/10 hover:border-accent/30 group">
                <div className="mb-6">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-hero text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent-lighter rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-light transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Process Flow Visualization */}
        <div className="mt-20 bg-gradient-to-r from-primary-lighter to-accent-lighter rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            From Call to Resolution in Minutes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 mb-3">
                <div className="text-2xl font-bold text-accent">{"<"} 3 sec</div>
                <div className="text-sm text-muted-foreground">Call Answered</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 mb-3">
                <div className="text-2xl font-bold text-accent">{"<"} 30 sec</div>
                <div className="text-sm text-muted-foreground">Issue Classified</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 mb-3">
                <div className="text-2xl font-bold text-accent">{"<"} 2 min</div>
                <div className="text-sm text-muted-foreground">Action Taken</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 mb-3">
                <div className="text-2xl font-bold text-accent">Real-time</div>
                <div className="text-sm text-muted-foreground">You're Notified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;