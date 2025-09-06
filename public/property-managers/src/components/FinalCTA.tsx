import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-light to-accent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_80%,_white_0%,_transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,_white_0%,_transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Modernize Your Property Management Call Handling?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Join the growing number of property managers who've eliminated missed calls, improved tenant satisfaction, and reduced operational costs with Ivy's intelligent automation.
          </p>
        </div>

        {/* Main CTA Card */}
        <Card className="max-w-4xl mx-auto p-12 bg-background/95 backdrop-blur-sm shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                See Ivy in Action
              </h3>
              <ul className="space-y-4 text-muted-foreground mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Watch Ivy handle real property management scenarios</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>See integration with your existing systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Learn about outcome-based pricing for your portfolio</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Get set up in under 5 minutes</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Button>
                <Button variant="accent-outline" size="lg" className="text-lg px-8 py-6">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-muted/30 rounded-xl p-8">
              <h4 className="text-xl font-semibold text-primary mb-6">Get Started Today</h4>
              <div className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your name" 
                    className="bg-background border-primary/20 focus:border-accent"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Business email" 
                    className="bg-background border-primary/20 focus:border-accent"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Company name" 
                    className="bg-background border-primary/20 focus:border-accent"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Number of properties managed" 
                    className="bg-background border-primary/20 focus:border-accent"
                  />
                </div>
                <Button variant="accent" className="w-full mt-6" size="lg">
                  Get Personalized Demo
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4 text-center">
                No spam, no commitment. See results in your first week.
              </p>
            </div>
          </div>
        </Card>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center text-primary-foreground">
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <div className="font-semibold mb-1">Sales Hotline</div>
            <div className="text-primary-foreground/80">1-800-IVY-CALL</div>
          </div>
          
          <div className="text-center text-primary-foreground">
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <div className="font-semibold mb-1">Support Email</div>
            <div className="text-primary-foreground/80">hello@ivyai.com</div>
          </div>
          
          <div className="text-center text-primary-foreground">
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="font-semibold mb-1">Available</div>
            <div className="text-primary-foreground/80">Nationwide</div>
          </div>
        </div>

        {/* Final Value Proposition */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-primary-foreground font-medium">⚡ Setup in minutes</span>
            <span className="text-primary-foreground/60">•</span>
            <span className="text-primary-foreground font-medium">💰 Pay only for results</span>
            <span className="text-primary-foreground/60">•</span>
            <span className="text-primary-foreground font-medium">🚀 Scale with confidence</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;