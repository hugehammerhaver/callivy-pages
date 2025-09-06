import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";

const Pricing = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple Pricing That Makes Sense for HVAC
          </h2>
          <p className="text-xl text-muted-foreground">
            Stop paying for expensive answering services that don't book jobs
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Old Way */}
            <div className="bg-muted p-8 rounded-2xl relative">
              <div className="absolute -top-4 left-8 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-medium">
                The Old Way
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-bold mb-6 text-center">Traditional Answering Service</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-destructive" />
                    <span>$200-500+ per month</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-destructive" />
                    <span>Setup fees and contracts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-destructive" />
                    <span>Can't book appointments</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-destructive" />
                    <span>Generic, scripted responses</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-destructive" />
                    <span>Pay whether they help or not</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* New Way */}
            <div className="bg-gradient-success text-success-foreground p-8 rounded-2xl relative shadow-success">
              <div className="absolute -top-4 left-8 bg-background text-foreground px-4 py-2 rounded-full text-sm font-medium">
                The Ivy Way
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-bold mb-6 text-center">Ivy AI Receptionist</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5" />
                    <span>Pay only for booked jobs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5" />
                    <span>Zero setup fees or contracts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5" />
                    <span>Books appointments instantly</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5" />
                    <span>HVAC-trained conversations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5" />
                    <span>Only pay for results</span>
                  </li>
                </ul>
                <Button size="lg" variant="outline" className="w-full border-success-foreground text-success-foreground hover:bg-success-foreground hover:text-success">
                  See Pricing & Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;