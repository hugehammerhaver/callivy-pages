import { Star } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Mike Rodriguez",
      company: "Rodriguez HVAC Services",
      location: "Phoenix, AZ",
      content: "Ivy has transformed our business. We've booked 40% more emergency calls since she started answering our phones. Our customers love how professional and quick she is.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      company: "Climate Control Experts",
      location: "Austin, TX", 
      content: "The ROI is incredible. Ivy pays for herself with just one extra job per month, and we're booking way more than that. Best investment we've made.",
      rating: 5
    },
    {
      name: "Dave Thompson",
      company: "Thompson Air Conditioning",
      location: "Tampa, FL",
      content: "Our after-hours calls used to go to voicemail. Now Ivy books them instantly. We've captured thousands in revenue we would have lost.",
      rating: 5
    }
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            HVAC Companies Love Ivy
          </h2>
          <p className="text-xl text-muted-foreground">
            See how AI receptionist service is helping HVAC businesses book more jobs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-success text-success" />
                ))}
              </div>
              <blockquote className="text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div className="border-t pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;