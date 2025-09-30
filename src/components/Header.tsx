import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-purple-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.9)] transform translate-z-0" role="banner" style={{transform: 'translateZ(0)', WebkitTransform: 'translateZ(0)'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
          <img 
            src="/logo.png" 
            alt="Neura AI - Professional AI Assistant Logo" 
            className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300"
            width="48"
            height="48"
          />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Neura AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <a 
              href="#challenge-solution" 
              className="relative text-muted-foreground hover:text-primary transition-colors font-medium group"
            >
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#features" 
              className="relative text-muted-foreground hover:text-primary transition-colors font-medium group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#use-cases" 
              className="relative text-muted-foreground hover:text-primary transition-colors font-medium group"
            >
              Use Cases
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              variant="hero" 
              size="default"
              onClick={() => {
                document.getElementById('waitlist-form')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Join the Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-primary/10 transition-all duration-300 border border-primary/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-navigation" className="md:hidden py-6 border-t border-primary/20 bg-gradient-card backdrop-blur-lg animate-fade-in-up">
            <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
              <a 
                href="#challenge-solution"
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-primary/10 border border-transparent hover:border-primary/20"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#features"
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-primary/10 border border-transparent hover:border-primary/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#use-cases"
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-primary/10 border border-transparent hover:border-primary/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Use Cases
              </a>
              <div className="pt-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="w-full shadow-glow"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('waitlist-form')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  Join the Waitlist
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;