import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-ivy-navy via-ivy-navy-light to-ivy-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-ivy-navy/95 to-ivy-navy-light/90"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-ivy-green/20 border border-ivy-green/30 text-ivy-green-light text-sm font-medium mb-6">
            <Phone className="w-4 h-4 mr-2" />
            Start Growing Your Practice Today
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Stop Missing Dental Calls
            <br />
            <span className="text-ivy-green-light">and Grow Your Practice?</span>
          </h2>
          
          <p className="text-xl text-ivy-gray-200 max-w-3xl mx-auto mb-12">
            Join hundreds of dental practices using Ivy to never miss a patient call again. 
            See how AI can transform your practice communication today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-ivy-green/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                See Ivy in Action
              </h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <Input 
                  placeholder="Practice Name" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                
                <Button variant="hero" className="w-full text-lg py-3">
                  Get Free Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
              
              <p className="text-ivy-gray-300 text-sm mt-4 text-center">
                No credit card required • 15-minute setup • HIPAA compliant
              </p>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center text-white">
                <CheckCircle className="w-6 h-6 text-ivy-green mr-4 flex-shrink-0" />
                <span className="text-lg">Free 30-day trial with full features</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="w-6 h-6 text-ivy-green mr-4 flex-shrink-0" />
                <span className="text-lg">Setup in under 15 minutes</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="w-6 h-6 text-ivy-green mr-4 flex-shrink-0" />
                <span className="text-lg">Integration with your existing PMS</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="w-6 h-6 text-ivy-green mr-4 flex-shrink-0" />
                <span className="text-lg">24/7 support and onboarding</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="w-6 h-6 text-ivy-green mr-4 flex-shrink-0" />
                <span className="text-lg">Cancel anytime, no long-term contracts</span>
              </div>
            </div>

            <div className="bg-ivy-green/20 rounded-xl p-6 border border-ivy-green/30">
              <div className="text-ivy-green-light font-semibold mb-2">
                Limited Time Offer
              </div>
              <div className="text-white text-lg">
                Get your first 100 successful appointments handled by Ivy completely free. 
                Experience the difference before you pay.
              </div>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="mt-16 text-center">
          <div className="text-ivy-gray-300 mb-4">
            Prefer to speak with someone?
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline-green" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-DENTAL
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:text-ivy-green-light">
              Schedule a Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;