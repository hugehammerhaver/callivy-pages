import { Clock, AlertCircle, Calendar, Settings, Zap, TrendingUp } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Always live, no voicemail. Your customers get immediate response anytime they call."
    },
    {
      icon: AlertCircle,
      title: "Emergency Triage",
      description: "AI recognizes keywords like 'burst pipe' and escalates urgent calls immediately to your team."
    },
    {
      icon: Calendar,
      title: "Smart Appointment Booking",
      description: "Automatically schedules appointments with your dispatch system for seamless workflow."
    },
    {
      icon: Settings,
      title: "CRM & Dispatch Integration",
      description: "Seamless syncing with Jobber, ServiceTitan, Housecall Pro, Zapier, and more."
    },
    {
      icon: Zap,
      title: "Customizable Plumbing Scripts",
      description: "Tailored intake language for leaks, hot water issues, blockages — every call feels branded."
    },
    {
      icon: TrendingUp,
      title: "Scales During Call Surges",
      description: "No wait times during storms or high-demand periods. Handle unlimited concurrent calls."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">
            Key Benefits & Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes Ivy the perfect AI receptionist solution for plumbing businesses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 border border-gray-medium">
                <Icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};