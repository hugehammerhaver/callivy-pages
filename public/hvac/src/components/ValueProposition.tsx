import icon247 from "@/assets/icon-24-7.png";
import iconResults from "@/assets/icon-results.png";
import iconReceptionist from "@/assets/icon-receptionist.png";
import iconGrowth from "@/assets/icon-growth.png";

const ValueProposition = () => {
  const features = [
    {
      icon: icon247,
      title: "24/7 HVAC Answering Service",
      description: "Never miss another emergency call. Ivy answers every call, even during peak seasons and after hours."
    },
    {
      icon: iconResults,
      title: "Pay Only for Results",
      description: "No monthly fees or setup costs. You only pay when Ivy successfully books a qualified HVAC job."
    },
    {
      icon: iconReceptionist,
      title: "Feels Like a Real Receptionist",
      description: "Natural conversations that build trust. Your customers will never know they're talking to AI."
    },
    {
      icon: iconGrowth,
      title: "Grow Without Hiring",
      description: "Scale your HVAC business without the overhead. Ivy handles unlimited calls simultaneously."
    }
  ];

  return (
    <section className="bg-background-alt py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The AI Receptionist Built for HVAC Companies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop losing HVAC jobs to missed calls. Ivy handles every customer interaction professionally while you focus on what you do best.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl shadow-lg text-center">
              <div className="mb-6">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;