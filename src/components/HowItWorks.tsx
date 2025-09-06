import howItWorksImage from "@/assets/how-it-works.jpg";
import { Phone, MessageCircle, Database, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      title: "Patient Calls Your Office",
      description: "Your patients call as usual, but Ivy answers every time—day or night.",
      detail: "No more busy signals or voicemails"
    },
    {
      icon: MessageCircle,
      title: "Ivy Books & Qualifies",
      description: "AI handles appointment scheduling, qualification, and emergency triage.",
      detail: "Smart routing per your protocols"
    },
    {
      icon: Database,
      title: "Seamless PMS Integration",
      description: "Appointments and call transcripts automatically sync to your system.",
      detail: "Real-time updates & notifications"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-ivy-navy mb-4">
            How It Works
          </h2>
          <p className="text-xl text-ivy-gray-500 max-w-3xl mx-auto">
            Simple, seamless integration that works with your existing systems
          </p>
        </div>

        {/* Visual Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img
              src={howItWorksImage}
              alt="How Ivy AI works - three step process"
              className="w-full rounded-2xl shadow-medium"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-ivy-green rounded-full flex items-center justify-center text-white font-bold text-xl shadow-green">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <IconComponent className="w-6 h-6 text-ivy-green mr-3" />
                      <h3 className="text-xl font-semibold text-ivy-navy">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-ivy-gray-600 text-lg leading-relaxed mb-2">
                      {step.description}
                    </p>
                    
                    <p className="text-ivy-green font-medium">
                      {step.detail}
                    </p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="flex-shrink-0 ml-8">
                      <ArrowRight className="w-6 h-6 text-ivy-gray-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Integration highlight */}
        <div className="bg-ivy-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-ivy-navy mb-4">
              Works With Your Existing Systems
            </h3>
            <p className="text-ivy-gray-500 text-lg mb-8 max-w-2xl mx-auto">
              Ivy integrates seamlessly with popular dental practice management systems
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
              {["Dentrix", "Eaglesoft", "Open Dental", "Practice Fusion"].map((pms, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-soft text-center">
                  <div className="text-ivy-navy font-semibold">{pms}</div>
                </div>
              ))}
            </div>
            
            <p className="text-ivy-gray-400 text-sm mt-6">
              + Many more popular PMS systems supported
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;