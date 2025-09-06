import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-lighter via-background to-accent-lighter overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_var(--primary)_0%,_transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_var(--accent)_0%,_transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary-lighter/50 backdrop-blur-sm rounded-full border border-primary/10">
              <span className="text-sm font-medium text-primary">🤖 Meet Ivy - Your AI Receptionist</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              AI Receptionist for Property Managers — Never Miss a Tenant or Leasing Call
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Meet Ivy—your 24/7 AI receptionist who handles tenant inquiries, property showings, emergencies, and only charges when calls convert to outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Get Started Today
              </Button>
              <Button variant="accent-outline" size="lg" className="text-lg px-8 py-6">
                See Ivy in Action
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">24/7 Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-sm text-muted-foreground">Outcome-Based Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-sm text-muted-foreground">Instant Setup</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-8">
              <img 
                src="/lovable-uploads/0476b7fd-3c8d-4211-94c5-890783da7a15.png"
                alt="Professional property manager handing over keys to tenant - showcasing IvyAI's seamless property management communication" 
                className="w-full h-auto rounded-xl shadow-elegant"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-primary">Ivy Online</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="text-xs text-muted-foreground">Handling call...</div>
                <div className="text-sm font-semibold text-primary">Emergency Maintenance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;