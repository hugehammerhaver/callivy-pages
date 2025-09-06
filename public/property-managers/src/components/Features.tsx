import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, AlertTriangle, Calendar, Zap, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Intelligent Coverage",
      description: "Always on duty for tenants and prospects—no voicemails, no delays. Ivy handles every call with professional consistency, day or night.",
      highlight: "Never miss a call again"
    },
    {
      icon: AlertTriangle,
      title: "Emergency Triage & Routing",
      description: "Recognizes urgent keywords (flooding, lockouts, security issues), instantly routes to on-call staff with all relevant details and priority levels.",
      highlight: "Instant emergency response"
    },
    {
      icon: Calendar,
      title: "Lead & Maintenance Request Intake",
      description: "Qualifies rental inquiries, logs maintenance tickets, schedules showings, and delivers structured information directly to your management system.",
      highlight: "Automated lead qualification"
    },
    {
      icon: Zap,
      title: "Seamless Integrations",
      description: "Works with property management CRMs and tools like AppFolio, ResNexus, Google Calendar, and your existing workflow systems.",
      highlight: "Plug-and-play setup"
    },
    {
      icon: CheckCircle,
      title: "Smart Scripting",
      description: "Customizable messaging scripts for different property types—residential, commercial, multi-family—all aligned with your brand voice.",
      highlight: "Personalized for your business"
    },
    {
      icon: TrendingUp,
      title: "Scalable Performance",
      description: "Handles high-demand periods (move-in weekends, emergency spikes) gracefully without additional staffing or increased costs.",
      highlight: "Scales with your growth"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Features Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how Ivy transforms property management calling with intelligent automation and seamless integration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-elegant transition-all duration-300 border-primary/10 hover:border-accent/30 group">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-accent-lighter rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-light transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                    <CheckCircle className="w-4 h-4" />
                    {feature.highlight}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20 bg-gradient-to-r from-primary-lighter to-accent-lighter rounded-2xl p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Complete Property Management Call Solution
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            From routine maintenance requests to emergency situations and new tenant inquiries, Ivy handles it all with the professionalism and efficiency your business demands.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-background/80 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-medium text-primary">Maintenance Requests</span>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-medium text-primary">Leasing Inquiries</span>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-medium text-primary">Emergency Calls</span>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-medium text-primary">Tenant Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;