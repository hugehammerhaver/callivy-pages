import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Ivy handles after-hours maintenance calls seamlessly—no more missed emergencies or angry tenants. Our response time has improved dramatically.",
      author: "Sarah Chen",
      role: "Property Manager",
      company: "Downtown Properties LLC",
      rating: 5,
      metric: "90% faster emergency response"
    },
    {
      quote: "Leads from tenant inquiries have gone way up since Ivy started answering. She qualifies prospects better than our previous service ever did.",
      author: "Marcus Rodriguez",
      role: "Regional Manager", 
      company: "Premier Residential Group",
      rating: 5,
      metric: "35% increase in qualified leads"
    },
    {
      quote: "The outcome-based pricing is genius. We only pay when Ivy actually helps our business, unlike our old $300/month service that just answered phones.",
      author: "Jennifer Walsh",
      role: "Operations Director",
      company: "Metro Property Solutions",
      rating: 5,
      metric: "60% reduction in call handling costs"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Social Proof & Trust
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of property managers who trust Ivy to handle their most important calls
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-elegant transition-all duration-300 border-primary/10 hover:border-accent/30 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-12 h-12 text-accent" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Metric Highlight */}
              <div className="bg-accent-lighter/50 rounded-lg p-3 mb-4">
                <div className="text-sm font-semibold text-accent">{testimonial.metric}</div>
              </div>

              {/* Author */}
              <div className="relative z-10">
                <div className="font-semibold text-primary">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-accent font-medium">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 bg-gradient-to-r from-primary-lighter to-accent-lighter rounded-2xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Trusted by Property Management Leaders
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ivy processes thousands of calls monthly for property managers nationwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Properties Managed</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Uptime Guaranteed</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">{"<"} 5 min</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;