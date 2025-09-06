import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Ivy books appointments after hours—no more missed patients. Our practice has grown 25% since implementation.",
      author: "Dr. Sarah Chen",
      practice: "Bright Smile Dental",
      location: "San Francisco, CA",
      rating: 5
    },
    {
      quote: "Our front desk staff is more focused on patients now that Ivy handles calls. It's like having a full-time receptionist that never takes breaks.",
      author: "Maria Rodriguez",
      practice: "Family Dental Care",
      location: "Austin, TX",
      rating: 5
    },
    {
      quote: "The emergency triage feature is incredible. Ivy knows when to route urgent calls immediately and when to schedule routine appointments.",
      author: "Dr. Michael Thompson",
      practice: "Downtown Dental Group",
      location: "Chicago, IL",
      rating: 5
    }
  ];

  const stats = [
    { number: "98%", label: "Patient Satisfaction", subtext: "with AI interactions" },
    { number: "45%", label: "Increase in Bookings", subtext: "after-hours appointments" },
    { number: "60%", label: "Reduction in", subtext: "missed calls" },
    { number: "24/7", label: "Availability", subtext: "never miss a call" }
  ];

  return (
    <section className="py-20 bg-ivy-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-ivy-navy mb-4">
            Social Proof & Trust
          </h2>
          <p className="text-xl text-ivy-gray-500 max-w-3xl mx-auto">
            See how dental practices are transforming their patient communication with Ivy
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-ivy-green mb-2">
                {stat.number}
              </div>
              <div className="text-ivy-navy font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-ivy-gray-500 text-sm">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 bg-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-ivy-green/30 mb-4" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-ivy-gray-600 text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-ivy-gray-200 pt-6">
                  <div className="font-semibold text-ivy-navy">
                    {testimonial.author}
                  </div>
                  <div className="text-ivy-green font-medium">
                    {testimonial.practice}
                  </div>
                  <div className="text-ivy-gray-500 text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 bg-white rounded-2xl shadow-soft p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-ivy-navy mb-4">
              Trusted by Dental Practices Nationwide
            </h3>
            <p className="text-ivy-gray-500">
              Join hundreds of dental practices already using Ivy to improve patient communication
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center opacity-60">
            {[
              "HIPAA Compliant",
              "SOC2 Certified",
              "24/7 Support",
              "99.9% Uptime"
            ].map((trust, index) => (
              <div key={index} className="text-center">
                <div className="text-ivy-navy font-semibold text-sm">
                  {trust}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;