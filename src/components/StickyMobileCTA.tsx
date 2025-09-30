import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past hero section
      const heroHeight = window.innerHeight;
      const scrolled = window.scrollY;
      
      // Show when scrolled past 120% of hero, hide when near the waitlist form section
      const waitlistFormSection = document.getElementById('waitlist-form');
      const waitlistFormTop = waitlistFormSection?.getBoundingClientRect().top || 0;
      
      // Only show between hero end and waitlist start
      setIsVisible(scrolled > heroHeight * 1.2 && waitlistFormTop > 300);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const scrollToWaitlistForm = () => {
    const waitlistForm = document.getElementById('waitlist-form');
    if (waitlistForm) {
      waitlistForm.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 z-40 md:hidden animate-fade-in-up">
      <div className="relative bg-gradient-card backdrop-blur-md border-2 border-primary/30 rounded-2xl p-5 shadow-glow hover:shadow-xl transition-all duration-300">
        {/* Subtle glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-primary opacity-20 blur-xl rounded-2xl"></div>
        
        <div className="relative flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="font-bold text-base mb-1 text-foreground">Ready to transform conversations?</p>
            <p className="text-xs text-primary">Join the waitlist for early access</p>
          </div>
          <Button 
            variant="hero" 
            size="sm" 
            onClick={scrollToWaitlistForm}
            className="flex-shrink-0 shadow-glow"
          >
            <span className="font-semibold">Join Now</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyMobileCTA;