import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              AI Receptionist for Law Firms — Never Miss a Client Call
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Meet Ivy — your 24/7 AI receptionist. She answers every client inquiry, schedules consultations, and only charges when calls convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="success" size="lg" className="text-lg px-8 py-4">
                Get Set Up for Free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4"
                data-cal-link="ahmed-mohamed-ivy/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
              >
                See How It Works
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/6e760c6f-854f-404d-a288-007016576af5.png"
              alt="Professional legal team ready to serve clients with Ivy AI support"
              className="rounded-2xl shadow-elevated w-full h-auto"
            />
            <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-lg shadow-elevated font-semibold">
              24/7 Available
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;