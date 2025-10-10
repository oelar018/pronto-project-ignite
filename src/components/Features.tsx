import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, Eye, Shield, Zap, Users, Brain } from "lucide-react";
const Features = () => {
  return <section id="features" className="relative py-16 md:py-24 bg-black overflow-hidden">
      {/* Vibrant background glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <header className="text-center mb-20">
            <Badge variant="outline" className="mb-8 px-6 py-3 text-lg font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text border-2 border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.3)]">Technology</Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(168,85,247,0.5)]">Inspired by the Singularity.
Powered by the Future.
          </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Enterprise grade features, designed for professional excellence
            </p>
          </header>

          {/* Advanced Capabilities */}
          <article className="bg-gradient-hero rounded-3xl p-8 md:p-12 mb-16">
            <header className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Advanced Professional Capabilities
              </h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Enterprise-grade features designed for professional excellence
              </p>
            </header>

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
          </article>

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
    </section>;
};
export default Features;