import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/lovable-uploads/a6a20fa5-3f9a-4ce3-9b6f-904ec3f22db7.png" alt="IvyAI Logo" className="h-24 w-auto" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;