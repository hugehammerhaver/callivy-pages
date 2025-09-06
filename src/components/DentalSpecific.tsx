import { Card, CardContent } from "@/components/ui/card";
const dentalTeamImage = "/lovable-uploads/d71d4d47-9df2-4241-bb4b-7246f13ddd97.png";
import { 
  Stethoscope, 
  Users, 
  Moon, 
  CheckCircle,
  MessageSquare,
  UserCheck,
  Calendar
} from "lucide-react";

const DentalSpecific = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Expert Dental Scripting",
      description: "Handles common questions about insurance, services, and specialty procedures with dental expertise."
    },
    {
      icon: UserCheck,
      title: "Reduces Staff Interruptions",
      description: "Keep your team focused on patient care during procedures while Ivy manages calls."
    },
    {
      icon: Moon,
      title: "After-Hours Coverage",
      description: "No more staff burnout or overtime—Ivy handles emergency calls and appointments 24/7."
    },
    {
      icon: Calendar,
      title: "Appointment Optimization",
      description: "Smart scheduling that understands treatment durations and office workflows."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-ivy-navy/10 text-ivy-navy font-semibold mb-4">
            <Stethoscope className="w-4 h-4 mr-2" />
            Dental Practice Specialist
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-ivy-navy mb-4">
            Built for Dental Practices
          </h2>
          <p className="text-xl text-ivy-gray-500 max-w-3xl mx-auto">
            Ivy understands the unique needs of dental practices and delivers specialized features
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src={dentalTeamImage}
              alt="Happy dental staff and patients in modern practice"
              className="w-full rounded-2xl shadow-medium"
            />
            <div className="absolute -bottom-6 -right-6 bg-ivy-green rounded-xl shadow-lg p-4 text-white">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-ivy-green-light text-sm">Patient Satisfaction</div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-ivy-green/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-ivy-green" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ivy-navy mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-ivy-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Specialized Knowledge */}
        <div className="bg-gradient-to-r from-ivy-navy/5 to-ivy-green/5 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-ivy-navy mb-6">
                Dental Practice Expertise
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-ivy-green mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">Insurance verification and benefits explanation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-ivy-green mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">Treatment scheduling for complex procedures</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-ivy-green mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">Emergency dental triage protocols</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-ivy-green mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">Specialist referral coordination</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-ivy-navy mb-6">
                Practice Management Integration
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-ivy-green mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">Real-time appointment booking and updates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-ivy-green mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">Patient history and preference tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-ivy-green mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">Automated follow-up and reminder scheduling</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-ivy-green mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">Call transcripts and notes documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalSpecific;