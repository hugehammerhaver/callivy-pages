import { Phone, Calendar, Shield, Scale } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Phone,
      title: "24/7 Legal Answering Service",
      description: "Clients can reach your firm any time, even nights and weekends."
    },
    {
      icon: Calendar,
      title: "Pay Only for Results",
      description: "You're only charged when Ivy books a consultation or routes a client call."
    },
    {
      icon: Shield,
      title: "Professional & Confidential",
      description: "Ivy greets clients with professionalism and keeps conversations secure."
    },
    {
      icon: Scale,
      title: "Focus on Practicing Law",
      description: "Spend more time on cases, not missed calls."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Law Firms Choose Ivy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your client intake process with AI that understands legal practice
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-success/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;