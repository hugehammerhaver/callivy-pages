import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <img src="/lovable-uploads/d2942279-3246-4b2f-a646-7a8c3ae533e1.png" alt="Ivy AI Logo" className="h-24 w-auto" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;