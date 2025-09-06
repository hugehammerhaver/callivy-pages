import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Ready to Capture Every Client Call Without Adding Staff?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Join law firms replacing costly answering services with Ivy. Start capturing more clients today with zero setup costs and no monthly fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="success" size="lg" className="text-lg px-8 py-4">
                Get Set Up for Free Today
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Schedule a Demo
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center lg:justify-start space-x-6 text-primary-foreground/80">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                <span className="text-sm">Free Setup</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                <span className="text-sm">No Monthly Fees</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                <span className="text-sm">Pay Only for Results</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/8c6e7e0b-d93d-4162-a1a2-7adcb30eb936.png"
              alt="Professional law firm conference room ready for client meetings with Ivy AI support"
              className="rounded-2xl shadow-elevated w-full h-auto"
            />
            <div className="absolute -top-4 -left-4 bg-success text-success-foreground px-4 py-2 rounded-lg shadow-elevated font-semibold">
              Ready in 10 Minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;