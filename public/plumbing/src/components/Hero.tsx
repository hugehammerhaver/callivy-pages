import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-background to-gray-light py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-navy leading-tight">
                AI Receptionist for Plumbers — Never Miss a Call, Even at 3 AM
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Meet Ivy — your 24/7 AI receptionist that books jobs, handles emergency requests, and only charges for successful outcomes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.open('https://app.callivy.com', '_blank')}
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                data-cal-namespace="30min"
                data-cal-link="ahmed-mohamed-ivy/30min"
                data-cal-config='{"layout":"month_view"}'
              >
                Book a Demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/eb7272d1-d876-43b9-957b-1fe0a208e0e7.png" 
              alt="Professional plumber working on kitchen sink plumbing repair"
              className="rounded-2xl shadow-elegant w-full"
            />
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold shadow-card">
              24/7 Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};