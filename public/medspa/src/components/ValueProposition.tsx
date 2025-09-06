import { Calendar, Phone, Heart, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ValueProposition = () => {
  const benefits = [
    {
      icon: <Phone className="w-8 h-8 text-success" />,
      title: "Capture Every Client Inquiry",
      description: "Ivy ensures you never miss a new booking — even after hours."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-success" />,
      title: "Pay Only for Results", 
      description: "You're only charged when Ivy books an appointment or routes a call."
    },
    {
      icon: <Heart className="w-8 h-8 text-success" />,
      title: "Professional & Friendly",
      description: "Clients feel like they're speaking with your front desk team — not AI."
    },
    {
      icon: <Calendar className="w-8 h-8 text-success" />,
      title: "Focus on Treatments, Not Phones",
      description: "Run your MedSpa smoothly while Ivy handles scheduling."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why MedSpas Choose <span className="text-success">Ivy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your client experience while increasing bookings and revenue
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;