import HexSculptP5 from "@/components/HexSculptP5";
import { HexHeroStaticFallback } from "@/components/HexHeroStaticFallback";
import { usePrefersReducedMotion } from "@/lib/accessibility";

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative min-h-[90vh] bg-[#0A0A0A] flex items-center">
      {/* Skip to content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-background border border-border rounded px-3 py-2 text-sm font-medium z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        Skip to main content
      </a>

      {/* Background - static fallback for reduced motion */}
      {prefersReducedMotion ? (
        <HexHeroStaticFallback className="" />
      ) : (
        <HexSculptP5 className="" />
      )}

      {/* Foreground content */}
      <div id="main-content" className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <p className="text-cyan-300 font-semibold" role="banner">Neura AI</p>
        <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
          Answers at the speed <br className="hidden sm:block" />
          <span className="text-cyan-300">of conversation.</span>
        </h1>
        <p className="mt-6 text-lg text-neutral-300">
          Neura AI surfaces concise, relevant insights while you talk—no toggling, no typing.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4" role="group" aria-label="Call to action buttons">
          <a 
            href="#waitlist" 
            className="px-6 py-3 rounded-2xl bg-cyan-300/90 text-black font-semibold shadow-lg hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors"
            aria-describedby="waitlist-description"
          >
            Join the waitlist
          </a>
          <button 
            className="px-6 py-3 rounded-2xl bg-neutral-900/80 text-white ring-1 ring-white/10 hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors"
            aria-describedby="preview-description"
          >
            Watch a 30s preview
          </button>
        </div>
        
        {/* Hidden descriptions for screen readers */}
        <div className="sr-only">
          <p id="waitlist-description">Sign up to be notified when Neura AI becomes available</p>
          <p id="preview-description">Watch a short video demonstration of Neura AI in action</p>
        </div>
      </div>
    </section>
  );
}
