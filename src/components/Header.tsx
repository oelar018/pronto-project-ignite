import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border" role="banner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Neura AI - Professional AI Assistant Logo" 
              className="w-8 h-8 md:w-10 md:h-10"
              width="40"
              height="40"
            />
            <span className="text-xl md:text-2xl font-bold text-foreground">
              Neura AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <a 
              href="#challenge-solution" 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Features
            </a>
            <a 
              href="#use-cases" 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Use Cases
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
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-navigation" className="md:hidden py-4 border-t border-border/40 bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
              <a 
                href="#challenge-solution"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#use-cases"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Use Cases
              </a>
              <div className="pt-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="w-full"
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