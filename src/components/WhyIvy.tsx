import { Card, CardContent } from "@/components/ui/card";
import { PhoneOff, Users, TrendingUp, Clock } from "lucide-react";

const WhyIvy = () => {
  const benefits = [
    {
      icon: PhoneOff,
      stat: "67%",
      title: "Patients hang up when sent to voicemail",
      description: "Ivy ensures every call is answered promptly, preventing patient loss to competitors.",
      source: "Specialty Answering Service Study"
    },
    {
      icon: Users,
      stat: "3x",
      title: "More chair-side time for your staff",
      description: "AI eliminates front-desk interruptions, allowing staff to focus on patient care.",
      color: "text-ivy-green"
    },
    {
      icon: TrendingUp,
      stat: "25%",
      title: "Increase in appointment bookings",
      description: "Never miss an appointment opportunity with 24/7 availability and instant scheduling.",
      color: "text-ivy-navy"
    },
    {
      icon: Clock,
      stat: "24/7",
      title: "Always-on service",
      description: "Capture after-hours appointments and emergency calls when your office is closed.",
      color: "text-ivy-green"
    }
  ];

  return (
    <section className="py-20 bg-ivy-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-ivy-navy mb-4">
            Why Ivy for Dental Practices?
          </h2>
          <p className="text-xl text-ivy-gray-500 max-w-3xl mx-auto">
            Data-backed benefits that translate directly to better patient experiences and increased revenue
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-ivy-green/10 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className={`w-8 h-8 ${benefit.color || 'text-ivy-green'}`} />
                    </div>
                    <div className={`text-4xl font-bold ${benefit.color || 'text-ivy-green'} mb-2`}>
                      {benefit.stat}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-ivy-navy mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-ivy-gray-500 leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  
                  {benefit.source && (
                    <p className="text-sm text-ivy-gray-400 italic">
                      Source: {benefit.source}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyIvy;