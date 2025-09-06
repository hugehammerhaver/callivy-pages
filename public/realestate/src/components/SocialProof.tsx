import { Star, Quote } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      text: "Ivy booked showings I would have lost while in another client meeting.",
      author: "Sarah Chen",
      role: "Broker, Premium Properties",
      rating: 5
    },
    {
      text: "It's like having a receptionist who works 24/7 without any of the overhead costs.",
      author: "Michael Rodriguez", 
      role: "Team Lead, City Realty Group",
      rating: 5
    },
    {
      text: "My clients love how professional and responsive Ivy is. They can't tell it's AI.",
      author: "Jennifer Park",
      role: "Senior Agent, Luxury Homes",
      rating: 5
    }
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Trusted by Brokers Who Value Every Lead
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of successful real estate professionals who never miss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-success/20" />
                  <p className="text-lg text-card-foreground mb-4 pl-6 italic">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/164b95a2-e646-4c4c-bee9-768d2e051f6d.png" 
              alt="Happy family with keys celebrating their new home purchase"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -top-6 -right-6 bg-success text-success-foreground rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold">98%</p>
                <p className="text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;