import { Home, Calendar, Users, Target } from "lucide-react";

const ValueProposition = () => {
  const features = [
    {
      icon: Target,
      title: "Capture Every Buyer & Seller Lead",
      description: "Ivy ensures you never miss an inbound client call — even after hours."
    },
    {
      icon: Calendar,
      title: "Pay Only for Results", 
      description: "You're only charged when Ivy successfully routes a call or schedules a showing."
    },
    {
      icon: Users,
      title: "Feels Like a Real Assistant",
      description: "Clients think they're speaking with your office receptionist — not AI."
    },
    {
      icon: Home,
      title: "Focus on Closings, Not Phones",
      description: "Spend more time selling and less time juggling missed calls."
    }
  ];

  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Why Real Estate Brokers Choose Ivy
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform how you handle client calls and never lose another opportunity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border">
              <div className="bg-success/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;