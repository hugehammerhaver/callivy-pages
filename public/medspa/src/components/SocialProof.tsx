import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import testimonialClient from "@/assets/testimonial-client.jpg";
import consultationScene from "@/assets/consultation-scene.jpg";

const SocialProof = () => {
  const testimonials = [
    {
      quote: "Ivy booked appointments we would have missed after hours. Our revenue increased 30% in the first month.",
      author: "Dr. Sarah Chen",
      role: "Medical Director",
      clinic: "Elite Aesthetics",
      image: testimonialClient,
      rating: 5
    },
    {
      quote: "Clients thought they were talking to a real receptionist. The conversation feels completely natural.",
      author: "Maria Rodriguez", 
      role: "Practice Manager",
      clinic: "Glow MedSpa",
      image: consultationScene,
      rating: 5
    },
    {
      quote: "No more missed calls during treatments. Ivy handles everything professionally while we focus on patients.",
      author: "Dr. Michael Torres",
      role: "Owner",
      clinic: "Rejuvenate Clinic",
      image: testimonialClient,
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Spas and Clinics That Value Every Client
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how leading MedSpas are growing their practice with Ivy
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-success/30 mb-4" />
                
                <blockquote className="text-lg text-foreground mb-6 leading-relaxed font-medium">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <cite className="font-semibold text-foreground not-italic">
                      {testimonial.author}
                    </cite>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.clinic}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-success mb-2">30%</div>
            <p className="text-muted-foreground">Average Revenue Increase</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-success mb-2">24/7</div>
            <p className="text-muted-foreground">Client Availability</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-success mb-2">95%</div>
            <p className="text-muted-foreground">Booking Success Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-success mb-2">500+</div>
            <p className="text-muted-foreground">MedSpas Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;