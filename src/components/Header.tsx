import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import neuraLogo from "@/assets/neura-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform translate-z-0 ${
        isScrolled 
          ? 'bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]' 
          : 'bg-transparent border-b border-transparent'
      }`}
      role="banner" 
      style={{transform: 'translateZ(0)', WebkitTransform: 'translateZ(0)'}}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Logo - Subtle */}
          <div className="flex items-center space-x-2 group">
            <img 
              src={neuraLogo} 
              alt="Neura AI - Professional AI Assistant Logo" 
              className="w-7 h-7 md:w-8 md:h-8 object-contain opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              width="32"
              height="32"
            />
            <span className="text-base md:text-lg font-medium text-white/50 group-hover:text-white/80 transition-colors duration-300">
              Neura AI
            </span>
          </div>

          {/* Desktop Navigation - Right aligned and subtle */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            <nav className="flex items-center gap-6" role="navigation" aria-label="Main navigation">
              <a 
                href="#challenge-solution" 
                className="relative text-white/40 hover:text-white/80 transition-colors text-sm font-normal group"
              >
                How It Works
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white/60 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#features" 
                className="relative text-white/40 hover:text-white/80 transition-colors text-sm font-normal group"
              >
                Features
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white/60 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#use-cases" 
                className="relative text-white/40 hover:text-white/80 transition-colors text-sm font-normal group"
              >
                Use Cases
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white/60 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>

            {/* CTA Button - Subtle */}
            <Button 
              variant="outline" 
              size="sm"
              className="border-white/20 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-sm font-normal"
              onClick={() => {
                document.getElementById('waitlist-form')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button - Subtle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-white/60" />
            ) : (
              <Menu className="w-5 h-5 text-white/60" />
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