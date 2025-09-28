import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, Eye, Shield, Zap, Users, Brain } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30">
              Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Two Modes. Endless Possibilities.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose your preferred way to receive AI-powered insights during conversations.
            </p>
          </div>

          {/* Main Features */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* Visual Mode */}
            <Card className="p-8 bg-gradient-card hover-lift transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Visual Mode</h3>
                  <p className="text-muted-foreground">See insights on your screen</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm mb-1">Smart Suggestions</p>
                      <p className="text-xs text-muted-foreground">
                        Contextual information appears exactly when needed
                      </p>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Real-time conversation analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Non-intrusive visual cues</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Perfect for video calls and meetings</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Voice Mode */}
            <Card className="p-8 bg-gradient-card hover-lift transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Mic className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Voice Mode</h3>
                  <p className="text-muted-foreground">Hear whispered guidance</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Mic className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm mb-1">Audio Assistance</p>
                      <p className="text-xs text-muted-foreground">
                        Discrete whispers only you can hear
                      </p>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span>Works with phone in pocket</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span>Completely invisible to others</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span>Ideal for in-person conversations</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Advanced Capabilities */}
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Advanced Professional Capabilities
              </h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Enterprise-grade features designed for professional excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="p-3 rounded-xl bg-white/20 w-fit mx-auto mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Memory Network</h4>
                <p className="text-sm text-white/90">
                  Recalls insights from past meetings and creates network effects with team knowledge
                </p>
              </div>

              <div className="text-center">
                <div className="p-3 rounded-xl bg-white/20 w-fit mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Enterprise Security</h4>
                <p className="text-sm text-white/90">
                  Built-in privacy controls, consent management, and compliance
                </p>
              </div>

              <div className="text-center">
                <div className="p-3 rounded-xl bg-white/20 w-fit mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Zero Latency</h4>
                <p className="text-sm text-white/90">
                  Instant responses with perfect timing for natural conversation flow
                </p>
              </div>

              <div className="text-center">
                <div className="p-3 rounded-xl bg-white/20 w-fit mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-white">Team Sync</h4>
                <p className="text-sm text-white/90">
                  Multiple team members create aligned, accurate discussions
                </p>
              </div>
            </div>
          </div>

          {/* Technical Excellence */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover-lift hover:shadow-glow transition-all duration-500">
              <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Context Intelligence</h4>
              <p className="text-sm text-muted-foreground">
                Advanced NLP understands nuance, tone, and conversation dynamics
              </p>
            </Card>

            <Card className="p-6 text-center hover-lift hover:shadow-glow transition-all duration-500">
              <div className="p-3 rounded-lg bg-accent/10 w-fit mx-auto mb-4">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Adaptive Timing</h4>
              <p className="text-sm text-muted-foreground">
                AI learns your conversation patterns to deliver insights at perfect moments
              </p>
            </Card>

            <Card className="p-6 text-center hover-lift hover:shadow-glow transition-all duration-500">
              <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                <Mic className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Invisible Integration</h4>
              <p className="text-sm text-muted-foreground">
                Works completely invisibly - even with phone asleep in your pocket
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;