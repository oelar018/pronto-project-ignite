import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Users, Mic, Eye } from "lucide-react";
import { useState } from "react";
import { LazyHexHeroNeura } from "@/components/lazy";
import { VideoModal } from "@/components/VideoModal";

const Hero = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Multiple vibrant animated glow orbs */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-cyan-500/40 rounded-full blur-[150px] animate-float" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/40 rounded-full blur-[130px] animate-float" style={{animationDelay: "1.5s"}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-500/30 rounded-full blur-[160px] animate-float" style={{animationDelay: "3s"}} />
      
      {/* Animated hex background with Three.js shaders */}
      <div className="absolute inset-0 opacity-60">
        <LazyHexHeroNeura 
          rings={18}
          dotSize={8}
          glowStrength={2.5}
          idleSpeed={0.3}
          parallax={0.6}
          rippleSpeed={1.2}
          className="w-full h-full"
        />
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
        {/* Trust Badges - BOLD */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
          <Badge variant="secondary" className="flex items-center gap-2 px-6 py-3 text-base bg-gradient-to-r from-cyan-500/20 to-cyan-400/20 border-2 border-cyan-400/50 hover:border-cyan-400 hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] backdrop-blur-md">
            <Users className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-bold">Built for Professionals</span>
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2 px-6 py-3 text-base bg-gradient-to-r from-purple-500/20 to-purple-400/20 border-2 border-purple-400/50 hover:border-purple-400 hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] backdrop-blur-md">
            <Shield className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-bold">Enterprise Secure</span>
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2 px-6 py-3 text-base bg-gradient-to-r from-pink-500/20 to-pink-400/20 border-2 border-pink-400/50 hover:border-pink-400 hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:shadow-[0_0_50px_rgba(236,72,153,0.6)] backdrop-blur-md">
            <CheckCircle className="w-5 h-5 text-pink-400" />
            <span className="text-pink-300 font-bold">Privacy First</span>
          </Badge>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-10 animate-fade-in-up leading-[1.1]" style={{animationDelay: "0.2s"}}>
          <span className="inline-block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto] drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
            AI That Gives You
          </span>
          <br />
          <span className="inline-block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto] drop-shadow-[0_0_50px_rgba(168,85,247,0.8)]">
            Answers Without Breaking the Flow of your Conversations
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-300 mb-16 leading-relaxed max-w-4xl mx-auto animate-fade-in-up font-medium" style={{animationDelay: "0.4s"}}>
          Get just-in-time intelligence that appears precisely when you need it. Works even with your phone asleep in your pocket.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24 animate-fade-in-up" style={{animationDelay: "0.6s"}}>
          <Button 
            variant="hero" 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:shadow-[0_0_60px_rgba(168,85,247,0.9)] transition-all duration-300 text-xl px-12 py-8 h-auto font-black border-2 border-white/20 hover:scale-110 hover:border-white/40"
            onClick={() => {
              document.getElementById('waitlist-form')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            <span className="relative z-10 flex items-center text-white drop-shadow-lg">
              Join the Waitlist
              <span className="ml-3 group-hover:translate-x-3 transition-transform duration-300 text-2xl">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-3 border-cyan-400/70 hover:border-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 transition-all duration-300 text-xl px-12 py-8 h-auto backdrop-blur-md font-bold text-cyan-300 hover:text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] hover:scale-105"
            onClick={() => setShowVideoModal(true)}
          >
            <span className="font-bold">Watch 30s Preview</span>
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