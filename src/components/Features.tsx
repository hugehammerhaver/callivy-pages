import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  Calendar, 
  AlertTriangle, 
  Globe, 
  Shield, 
  Bell,
  CheckCircle,
  Phone
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Always-On 24/7 Answering",
      description: "No more voicemails or frustrated patients. Ivy answers every call, day or night.",
      highlight: "Never miss a call"
    },
    {
      icon: Calendar,
      title: "Smart Appointment Scheduling",
      description: "AI schedules, reschedules, and cancels appointments directly into your PMS.",
      highlight: "Direct PMS integration"
    },
    {
      icon: AlertTriangle,
      title: "Emergency Triage",
      description: "Recognizes urgent cases and routes calls per your protocols.",
      highlight: "Smart routing"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Serve diverse patient bases with English, Spanish, and more languages.",
      highlight: "Expand your reach"
    },
    {
      icon: Shield,
      title: "HIPAA-Compliant Security",
      description: "Secure data handling with optional SOC2 and GDPR readiness.",
      highlight: "Enterprise security"
    },
    {
      icon: Bell,
      title: "Smart Reminders & Confirmations",
      description: "Reduce no-shows and improve patient satisfaction with automated reminders.",
      highlight: "Reduce no-shows"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-ivy-navy mb-4">
            Features & Capabilities
          </h2>
          <p className="text-xl text-ivy-gray-500 max-w-3xl mx-auto">
            Ivy's tailored features are designed specifically for dental practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border border-ivy-gray-200 hover:border-ivy-green/30 hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-ivy-green/10 group-hover:bg-ivy-green/20 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-ivy-green" />
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-ivy-navy/5 text-ivy-navy text-sm font-medium mb-3">
                      <CheckCircle className="w-3 h-3 mr-1 text-ivy-green" />
                      {feature.highlight}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-ivy-navy mb-3 group-hover:text-ivy-navy-light transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-ivy-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature highlight */}
        <div className="bg-gradient-to-r from-ivy-navy to-ivy-navy-light rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Phone className="w-8 h-8 text-ivy-green mr-3" />
                <span className="text-ivy-green font-semibold">Advanced AI Technology</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Built for Dental Practice Success
              </h3>
              <p className="text-ivy-gray-200 text-lg leading-relaxed">
                Ivy understands dental terminology, insurance questions, and specialty procedures. 
                From routine cleanings to emergency dental pain, our AI handles every call with 
                professional expertise.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-ivy-green mr-3 flex-shrink-0" />
                <span>Understands dental terminology and procedures</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-ivy-green mr-3 flex-shrink-0" />
                <span>Handles insurance and billing questions</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-ivy-green mr-3 flex-shrink-0" />
                <span>Manages referrals and specialty inquiries</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-ivy-green mr-3 flex-shrink-0" />
                <span>Reduces staff interruptions during procedures</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;