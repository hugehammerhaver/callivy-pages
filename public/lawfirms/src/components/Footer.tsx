const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                <span className="text-success-foreground font-bold text-sm">I</span>
              </div>
              <span className="text-2xl font-bold">IvyAI</span>
            </div>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              The AI receptionist built specifically for law firms. Never miss a client call, only pay for results.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#features" className="hover:text-primary-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
              <li><a href="#integrations" className="hover:text-primary-foreground transition-colors">Integrations</a></li>
              <li><a href="#security" className="hover:text-primary-foreground transition-colors">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#help" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
              <li><a href="#privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 IvyAI. All rights reserved. Built for law firms that value every client.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;