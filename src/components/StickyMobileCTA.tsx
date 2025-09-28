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
      
      // Show when scrolled past hero, hide when near the waitlist form section
      const waitlistFormSection = document.getElementById('waitlist-form');
      const waitlistFormTop = waitlistFormSection?.getBoundingClientRect().top || 0;
      
      setIsVisible(scrolled > heroHeight * 0.8 && waitlistFormTop > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
      <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-brand-lg">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm mb-1">Ready to transform conversations?</p>
            <p className="text-xs text-muted-foreground">Join the waitlist for early access</p>
          </div>
          <Button 
            variant="hero" 
            size="sm" 
            onClick={scrollToWaitlistForm}
            className="flex-shrink-0"
          >
            Join Now
            <ArrowRight className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyMobileCTA;