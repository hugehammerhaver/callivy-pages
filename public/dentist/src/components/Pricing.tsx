import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, TrendingUp } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 bg-ivy-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-ivy-navy mb-4">
            Cost-Savings & Pricing
          </h2>
          <p className="text-xl text-ivy-gray-500 max-w-3xl mx-auto">
            Compare Ivy's outcome-based pricing with traditional answering services
          </p>
        </div>

        {/* Comparison Table */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Traditional Services */}
          <Card className="border-2 border-ivy-gray-200">
            <CardHeader className="bg-ivy-gray-100 pb-4">
              <CardTitle className="text-xl text-ivy-navy text-center">
                Traditional Answering Services
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-ivy-gray-700 mb-2">
                  $125-$400
                </div>
                <div className="text-ivy-gray-500">per month + per-minute fees</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">Hidden fees possible</span>
                </div>
                <div className="flex items-center">
                  <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">$0.65-$1.75 per minute</span>
                </div>
                <div className="flex items-center">
                  <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">Message-taking only</span>
                </div>
                <div className="flex items-center">
                  <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">Limited availability</span>
                </div>
                <div className="flex items-center">
                  <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">No appointment booking</span>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="text-sm text-ivy-gray-500 mb-4">Best for</div>
                <div className="text-ivy-gray-700 font-medium">Limited budget, message-taking</div>
              </div>
            </CardContent>
          </Card>

          {/* Ivy AI */}
          <Card className="border-2 border-ivy-green shadow-green relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-ivy-green text-white px-4 py-1 text-sm font-semibold">
              RECOMMENDED
            </div>
            <CardHeader className="bg-gradient-to-r from-ivy-green/10 to-ivy-green/5 pb-4">
              <CardTitle className="text-xl text-ivy-navy text-center">
                Ivy (AI Outcome-Based)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-ivy-green mb-2">
                  Pay Per Outcome
                </div>
                <div className="text-ivy-gray-500">Only when Ivy delivers results</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-ivy-green mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">Transparent, predictable pricing</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-ivy-green mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">Flat fee per successful outcome</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-ivy-green mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">Full appointment booking</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-ivy-green mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">24/7 availability</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-ivy-green mr-3 flex-shrink-0" />
                  <span className="text-ivy-gray-600">PMS integration included</span>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="text-sm text-ivy-gray-500 mb-4">Best for</div>
                <div className="text-ivy-navy font-medium">Revenue-driven practices</div>
              </div>
              
              <Button variant="hero" className="w-full mt-6">
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* ROI Calculator */}
        <div className="bg-white rounded-2xl shadow-medium p-8 lg:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-ivy-green/10 text-ivy-green font-semibold mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              ROI Calculator
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-ivy-navy mb-4">
              See Your Potential Savings
            </h3>
            <p className="text-ivy-gray-500 text-lg max-w-2xl mx-auto">
              Calculate how much your practice could save by switching to Ivy's outcome-based pricing model
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-ivy-navy">$2,400</div>
              <div className="text-ivy-gray-500">Annual savings potential</div>
              <div className="text-sm text-ivy-gray-400">vs. traditional services</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-ivy-green">25%</div>
              <div className="text-ivy-gray-500">More appointments booked</div>
              <div className="text-sm text-ivy-gray-400">24/7 availability</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-ivy-navy">3x</div>
              <div className="text-ivy-gray-500">Staff efficiency increase</div>
              <div className="text-sm text-ivy-gray-400">More chair-side time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;