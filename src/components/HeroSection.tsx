import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <header className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              AI Receptionist for HVAC Companies — Never Miss a Call Again
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Meet Ivy — your 24/7 AI receptionist. She answers every HVAC call, books jobs instantly, and only charges for results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="success" 
                className="text-lg px-8 py-6"
                asChild
              >
                <a href="https://form.typeform.com/to/nnvtPIop" target="_blank" rel="noopener noreferrer">
                  Get Set Up for Free
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
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
              src="/lovable-uploads/1a45a491-a416-4f49-8e46-ec5f81f3183f.png" 
              alt="Professional HVAC technician working on air conditioning unit with diagnostic equipment"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;