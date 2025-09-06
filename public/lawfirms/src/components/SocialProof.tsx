import { Star } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      quote: "Ivy handled intake calls seamlessly while we were in court. Our clients couldn't tell the difference.",
      author: "Sarah Mitchell",
      title: "Partner, Mitchell & Associates",
      rating: 5
    },
    {
      quote: "Affordable, professional, and clients thought she was part of our team. Best investment we've made.",
      author: "David Chen",
      title: "Senior Partner, Chen Legal Group",
      rating: 5
    },
    {
      quote: "We've increased our consultation bookings by 40% since implementing Ivy. Game changer.",
      author: "Maria Rodriguez",
      title: "Managing Partner, Rodriguez Law",
      rating: 5
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Trusted by Firms that Value Every Client
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the law firms already using Ivy to capture every opportunity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft border">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-success fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-card-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/43e79a1c-7829-46fe-bb4d-0853f2eeb808.png"
              alt="Professional legal consultation with scales of justice representing trust and expertise"
              className="rounded-2xl shadow-elevated w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;