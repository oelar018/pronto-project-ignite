import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Users, Mic, Eye } from "lucide-react";
import { useState } from "react";
import { LazyHexHeroNeura } from "@/components/lazy";
import { VideoModal } from "@/components/VideoModal";

const Hero = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Animated hex background with Three.js shaders */}
      <div className="absolute inset-0 opacity-50">
        <LazyHexHeroNeura 
          rings={15}
          dotSize={6}
          glowStrength={1.5}
          idleSpeed={0.2}
          parallax={0.5}
          rippleSpeed={0.8}
          className="w-full h-full"
        />
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/70" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-float" style={{animationDelay: "2s"}} />

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        {/* Trust Badges - Enhanced */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up">
          <Badge variant="secondary" className="flex items-center gap-2 px-5 py-2.5 text-sm bg-primary/10 border-primary/30 hover:bg-primary/20 hover:scale-105 transition-all duration-300 shadow-glow">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Built for Professionals</span>
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2 px-5 py-2.5 text-sm bg-accent/10 border-accent/30 hover:bg-accent/20 hover:scale-105 transition-all duration-300">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium">Enterprise Secure</span>
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2 px-5 py-2.5 text-sm bg-primary/10 border-primary/30 hover:bg-primary/20 hover:scale-105 transition-all duration-300 shadow-glow">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Privacy First</span>
          </Badge>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 animate-fade-in-up leading-tight" style={{animationDelay: "0.2s"}}>
          <span className="inline-block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            AI That Gives You
          </span>
          <br />
          <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
            Answers Without Breaking Flow
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-14 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: "0.4s"}}>
          Get <span className="text-primary font-semibold">just-in-time intelligence</span> that appears precisely when you need it. 
          Works even with your phone asleep in your pocket.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20 animate-fade-in-up" style={{animationDelay: "0.6s"}}>
          <Button 
            variant="hero" 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 h-auto"
            onClick={() => {
              document.getElementById('waitlist-form')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            <span className="relative z-10 flex items-center font-semibold">
              Join the Waitlist
              <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-6 h-auto backdrop-blur-sm bg-background/50"
            onClick={() => setShowVideoModal(true)}
          >
            <span className="font-medium">Watch 30s Preview</span>
          </Button>
        </div>

        {/* Product Modes Preview - Enhanced */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Visual Mode */}
          <div className="group relative bg-gradient-card backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/20 hover:border-primary/40 hover-lift hover:shadow-glow transition-all duration-500 animate-fade-in-up" style={{animationDelay: "0.8s"}}>
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-foreground">Visual Mode</h3>
                <p className="text-sm text-primary">On-screen suggestions</p>
              </div>
            </div>
            
            <div className="relative bg-background/40 backdrop-blur-md rounded-2xl p-5 text-left border border-primary/10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-glow"></div>
                  <span className="text-sm font-semibold text-primary">Live Analysis</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Based on Q3 metrics, highlight our <span className="text-primary font-medium">23% growth</span> in enterprise accounts..."
                </p>
              </div>
            </div>
          </div>

          {/* Audio Mode */}
          <div className="group relative bg-gradient-card backdrop-blur-sm rounded-3xl p-8 border-2 border-accent/20 hover:border-accent/40 hover-lift hover:shadow-accent transition-all duration-500 animate-fade-in-up" style={{animationDelay: "1s"}}>
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/30 transition-all duration-500" />
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300">
                <Mic className="w-7 h-7 text-accent" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-foreground">Audio Mode</h3>
                <p className="text-sm text-accent">Whispered insights</p>
              </div>
            </div>
            
            <div className="relative bg-background/40 backdrop-blur-md rounded-2xl p-5 text-left border border-accent/10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse shadow-accent"></div>
                  <span className="text-sm font-semibold text-accent">Discrete Delivery</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Subtle audio cues delivered directly to your earbuds - <span className="text-accent font-medium">completely invisible</span> to others
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