import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Globe, Database, Users, ArrowRightLeft, TrendingUp } from "lucide-react";
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
          <article className="relative rounded-3xl p-8 md:p-12 mb-16 overflow-hidden">
            {/* Connecting web effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-cyan-500/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
            

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {/* Advanced NLP Engine */}
              <Card className="group p-6 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Brain className="w-8 h-8 text-cyan-400 group-hover:animate-pulse" />
                  </div>
                  <h4 className="font-bold mb-3 text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Advanced NLP Engine
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Understands nuance, tone, and conversational flow to deliver contextually aware insights.
                  </p>
                </div>
              </Card>

              {/* Universal Application */}
              <Card className="group p-6 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-purple-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Globe className="w-8 h-8 text-purple-400 group-hover:animate-pulse" />
                  </div>
                  <h4 className="font-bold mb-3 text-lg bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Universal Application
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Adapts to any setting—work meetings, sales pitches, negotiations, training, and client discussions.
                  </p>
                </div>
              </Card>

              {/* Memory Network */}
              <Card className="group p-6 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Database className="w-8 h-8 text-cyan-400 group-hover:animate-pulse" />
                  </div>
                  <h4 className="font-bold mb-3 text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Memory Network
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Recalls insights from past meetings and builds a collective knowledge base across teams.
                  </p>
                </div>
              </Card>

              {/* Multi-Stakeholder Alignment */}
              <Card className="group p-6 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-purple-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Users className="w-8 h-8 text-purple-400 group-hover:animate-pulse" />
                  </div>
                  <h4 className="font-bold mb-3 text-lg bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Multi-Stakeholder Alignment
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    When multiple team members use Neura AI, meetings stay perfectly aligned with shared context and accurate information.
                  </p>
                </div>
              </Card>

              {/* Cross-Meeting Context */}
              <Card className="group p-6 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-4 group-hover:scale-110 transition-transform duration-500">
                    <ArrowRightLeft className="w-8 h-8 text-cyan-400 group-hover:animate-pulse" />
                  </div>
                  <h4 className="font-bold mb-3 text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Cross-Meeting Context
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Recalls insights from past meetings you didn't attend (with permissions) to create comprehensive understanding.
                  </p>
                </div>
              </Card>

              {/* Post-Meeting Coaching */}
              <Card className="group p-6 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-purple-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 mb-4 group-hover:scale-110 transition-transform duration-500">
                    <TrendingUp className="w-8 h-8 text-purple-400 group-hover:animate-pulse" />
                  </div>
                  <h4 className="font-bold mb-3 text-lg bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Post-Meeting Coaching
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Automatically analyzes what went well, what was missed, and how to improve for continuous professional development.
                  </p>
                </div>
              </Card>
            </div>
          </article>
        </div>
      </div>
    </section>;
};
export default Features;