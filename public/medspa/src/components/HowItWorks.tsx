import { Phone, Calendar, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      icon: <Phone className="w-12 h-12 text-success" />,
      title: "Client calls your MedSpa",
      description: "Your existing phone number rings as usual. Ivy answers instantly, even during busy periods or after hours."
    },
    {
      step: "2", 
      icon: <Calendar className="w-12 h-12 text-success" />,
      title: "Ivy answers instantly and books the appointment",
      description: "Using your calendar and preferences, Ivy schedules appointments, answers questions, and collects client information professionally."
    },
    {
      step: "3",
      icon: <CheckCircle className="w-12 h-12 text-success" />,
      title: "You receive confirmed appointments automatically",
      description: "Appointments sync to your existing booking system. You get notifications and can focus on what you do best — treatments."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It <span className="text-success">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Set up in minutes, start booking more clients immediately
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-success text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
              </div>
              
              {/* Content */}
              <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 pt-12">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-success/10 rounded-2xl flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-0.5 bg-success/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;