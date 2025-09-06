import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Requested!",
      description: "We'll be in touch within 24 hours to schedule your personalized demo.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-navy to-navy-light text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          Stop Losing Jobs to Missed Calls — Let Ivy Work for You
        </h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
          Join hundreds of plumbing businesses who've transformed their customer service with Ivy. 
          Start capturing every lead, handling every emergency, and growing your business today.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
            <Input
              type="email"
              placeholder="Enter your business email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-primary-foreground text-navy border-0 h-12 text-lg"
            />
            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="px-8 py-3 h-12 text-lg whitespace-nowrap"
            >
              See Ivy in Action
            </Button>
          </form>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-navy">
              Book a Free Demo
            </Button>
            <span className="text-primary-foreground/70">or</span>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              Download Case Study
            </Button>
          </div>
          
          <div className="mt-8 text-sm opacity-80">
            <p>✓ No setup fees • ✓ 14-day free trial • ✓ Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
};