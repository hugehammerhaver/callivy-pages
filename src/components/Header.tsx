const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-start">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/8b4f4807-8240-4b11-9a13-81d5313d4884.png" 
              alt="IVY Logo" 
              className="h-24 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;