import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Users, Brain, Mic, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(189,85%,68%,0.1),transparent)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          
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

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            AI That Gives You Answers{" "}
            <span className="text-gradient-primary">Without Breaking Flow</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Get just-in-time intelligence that appears precisely when you need it. 
            Works even with your phone asleep in your pocket.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="hero" 
              size="xl" 
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
              variant="outline-hero" 
              size="xl"
              onClick={() => {
                document.getElementById('challenge-solution')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              See How It Works
            </Button>
          </div>

          {/* Product Modes Preview */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Visual Mode */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover-lift transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Visual Mode</h3>
                  <p className="text-sm text-muted-foreground">On-screen suggestions</p>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-lg p-4 text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live Analysis</span>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <Brain className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium">Smart Suggestion</p>
                        <p className="text-xs text-muted-foreground">
                          "Q3 revenue grew 23.5% to $2.4M"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Voice Mode */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover-lift transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Mic className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Voice Mode</h3>
                  <p className="text-sm text-muted-foreground">Whispered guidance</p>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-lg p-4 text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Audio Ready</span>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <Mic className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium italic">Whispered Insight</p>
                        <p className="text-xs text-muted-foreground">
                          "Ask about their expansion plans"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-12 pt-8 border-t border-border/20">
            <p className="text-muted-foreground">
              <strong>Coming Soon</strong> — Join the waitlist to be first in line for early access
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;