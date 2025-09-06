const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/lovable-uploads/864f5486-794c-48ea-bfdc-6990de8e657d.png" alt="IVY" className="h-12" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;