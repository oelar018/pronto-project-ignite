import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Users, Mic, Eye } from "lucide-react";
import { useState } from "react";
import { LazyHexHeroNeura } from "@/components/lazy";
import { VideoModal } from "@/components/VideoModal";

const Hero = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative min-h-screen bg-background flex items-center overflow-hidden">
      {/* Advanced hex background with Three.js shaders */}
      <div className="absolute inset-0 opacity-40">
        <LazyHexHeroNeura 
          rings={12}
          dotSize={5}
          glowStrength={1}
          idleSpeed={0.15}
          parallax={0.35}
          rippleSpeed={0.7}
          className="w-full h-full"
        />
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm">
            <Users className="w-4 h-4" />
            Built for professionals
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm">
            <Shield className="w-4 h-4" />
            Enterprise secure
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm">
            <CheckCircle className="w-4 h-4" />
            Privacy first
          </Badge>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6">
          AI That Gives You Answers{" "}
          <span className="text-primary">Without Breaking Flow</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
          Get just-in-time intelligence that appears precisely when you need it. 
          Works even with your phone asleep in your pocket.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            variant="hero" 
            size="lg" 
            className="group"
            onClick={() => {
              document.getElementById('waitlist-form')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Join the Waitlist
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
          <Button 
            variant="ghost" 
            size="lg"
            onClick={() => setShowVideoModal(true)}
          >
            Watch a 30s preview
          </Button>
        </div>

        {/* Product Modes Preview */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Visual Mode */}
          <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover-lift transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Visual Mode</h3>
                <p className="text-sm text-muted-foreground">On-screen suggestions</p>
              </div>
            </div>
            
            <div className="bg-background/30 rounded-lg p-4 text-left">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Analysis</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  "Based on Q3 metrics, highlight our 23% growth in enterprise accounts..."
                </p>
              </div>
            </div>
          </div>

          {/* Audio Mode */}
          <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover-lift transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Mic className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Audio Mode</h3>
                <p className="text-sm text-muted-foreground">Whispered insights</p>
              </div>
            </div>
            
            <div className="bg-background/30 rounded-lg p-4 text-left">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Discrete Delivery</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Subtle audio cues delivered directly to your earbuds
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showVideoModal && (
        <VideoModal 
          isOpen={showVideoModal} 
          onClose={() => setShowVideoModal(false)} 
        />
      )}
    </section>
  );
};

export default Hero;