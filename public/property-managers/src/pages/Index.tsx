import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import ComparisonTable from "@/components/ComparisonTable";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        
        <section id="benefits">
          <Benefits />
        </section>
        
        <section id="features">
          <Features />
        </section>
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="pricing">
          <Pricing />
        </section>
        
        <section id="comparison">
          <ComparisonTable />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="contact">
          <FinalCTA />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">I</span>
                </div>
                <span className="text-xl font-bold">IvyAI</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                The intelligent AI receptionist for property managers who never want to miss an important call.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#features" className="hover:text-primary-foreground transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
                <li><a href="#integration" className="hover:text-primary-foreground transition-colors">Integrations</a></li>
                <li><a href="#security" className="hover:text-primary-foreground transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#help" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
                <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
                <li><a href="#status" className="hover:text-primary-foreground transition-colors">System Status</a></li>
                <li><a href="#docs" className="hover:text-primary-foreground transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#about" className="hover:text-primary-foreground transition-colors">About</a></li>
                <li><a href="#careers" className="hover:text-primary-foreground transition-colors">Careers</a></li>
                <li><a href="#privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            © 2024 IvyAI. All rights reserved. Built for property managers who value every call.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
