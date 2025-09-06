import { Star, TrendingUp, Shield, Clock } from "lucide-react";

export const TrustSection = () => {
  const results = [
    {
      icon: Clock,
      metric: "< 10 seconds",
      description: "Average response time"
    },
    {
      icon: TrendingUp,
      metric: "40% increase",
      description: "In captured leads"
    },
    {
      icon: Shield,
      metric: "99.9%",
      description: "Uptime guarantee"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">
            Industry Trust & Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real plumbers, real results. See how Ivy transforms businesses with reliable, intelligent call handling.
          </p>
        </div>
        
        {/* Customer Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-elegant border border-gray-medium">
            <div className="flex items-center gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-2xl lg:text-3xl font-semibold text-navy text-center mb-6 leading-relaxed">
              "Ivy caught an emergency call at midnight — saved the client's kitchen from flooding and booked a $1,200 job. 
              This AI pays for itself."
            </blockquote>
            <div className="text-center">
              <cite className="text-lg text-muted-foreground not-italic">
                — Mike Rodriguez, Rodriguez Plumbing, Houston TX
              </cite>
            </div>
          </div>
        </div>
        
        {/* Results Metrics */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <div key={index} className="text-center">
                <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold text-navy mb-2">{result.metric}</div>
                <div className="text-lg text-muted-foreground">{result.description}</div>
              </div>
            );
          })}
        </div>
        
        {/* Operational Benefits */}
        <div className="mt-16 bg-navy rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-6">
            Operational Benefits You'll Experience
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-primary-foreground">
            <div>
              <div className="text-xl font-semibold mb-2">Faster Responses</div>
              <div className="text-primary-foreground/80">Immediate call pickup eliminates customer frustration</div>
            </div>
            <div>
              <div className="text-xl font-semibold mb-2">Fewer Missed Jobs</div>
              <div className="text-primary-foreground/80">24/7 availability captures every opportunity</div>
            </div>
            <div>
              <div className="text-xl font-semibold mb-2">Less Stress</div>
              <div className="text-primary-foreground/80">Your team focuses on the work, not the phone</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};