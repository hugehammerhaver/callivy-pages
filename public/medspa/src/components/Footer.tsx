import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-success rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">IvyAI</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              The AI receptionist designed specifically for MedSpas. Never miss a client call again.
            </p>
            <div className="flex gap-4">
              <div className="text-sm text-white/60">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4" />
                  <span>(855) IVY-MEDSPA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@ivyai.com</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#features" className="hover:text-success transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-success transition-colors">Pricing</a></li>
              <li><a href="#demo" className="hover:text-success transition-colors">Demo</a></li>
              <li><a href="#integrations" className="hover:text-success transition-colors">Integrations</a></li>
              <li><a href="#security" className="hover:text-success transition-colors">Security</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#blog" className="hover:text-success transition-colors">Blog</a></li>
              <li><a href="#case-studies" className="hover:text-success transition-colors">Case Studies</a></li>
              <li><a href="#help" className="hover:text-success transition-colors">Help Center</a></li>
              <li><a href="#webinars" className="hover:text-success transition-colors">Webinars</a></li>
              <li><a href="#api" className="hover:text-success transition-colors">API Docs</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-success transition-colors">About</a></li>
              <li><a href="#careers" className="hover:text-success transition-colors">Careers</a></li>
              <li><a href="#partners" className="hover:text-success transition-colors">Partners</a></li>
              <li><a href="#press" className="hover:text-success transition-colors">Press</a></li>
              <li><a href="#contact" className="hover:text-success transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 IvyAI. All rights reserved.
            </div>
            <div className="flex gap-6 text-white/60 text-sm">
              <a href="#privacy" className="hover:text-success transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-success transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-success transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          {/* Compliance Badges */}
          <div className="flex justify-center gap-6 mt-6 text-white/40 text-xs">
            <span>HIPAA Compliant</span>
            <span>SOC 2 Type II</span>
            <span>GDPR Ready</span>
            <span>99.9% Uptime SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;