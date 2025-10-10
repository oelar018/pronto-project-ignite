import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Brain, Zap, ArrowRight, CheckCircle, AlertCircle, Mail, Calendar, FileText, Globe } from "lucide-react";

const ChallengeSolution = () => {
  return (
    <section id="challenge-solution" className="relative py-16 md:py-24 bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      {/* Vibrant animated background */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px] animate-float" style={{animationDelay: "2s"}} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Challenge Section */}
          <header className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
              The Problem Every Professional Faces
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              Professionals can't access the right information in live conversations without <span className="text-red-400 font-bold">breaking flow</span>. 
              Context is scattered across <span className="text-orange-400 font-semibold">email, calendar, files, and the web</span>.
            </p>
          </header>
          {/* Problem Flow - 4 Stages */}
          <div className="relative max-w-7xl mx-auto mb-20">
            {/* Connecting Flow Line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-violet-500/40 to-indigo-500/20 hidden lg:block" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative">
              {/* Stage 1 - In the Conversation */}
              <div className="group relative">
                <div className="bg-gradient-card border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] h-full flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
                    <div className="relative">
                      <MessageSquare className="w-10 h-10 text-cyan-400" strokeWidth={1.5} />
                      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-cyan-300">You're in a fast-moving conversation</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Tough questions come at you unexpectedly, and you're thinking on your feet.</p>
                </div>
                {/* Arrow */}
                <div className="hidden lg:block absolute top-24 -right-3 z-10">
                  <ArrowRight className="w-6 h-6 text-violet-400/60 animate-pulse" />
                </div>
              </div>

              {/* Stage 2 - Missing Context */}
              <div className="group relative">
                <div className="bg-gradient-card border border-violet-500/20 rounded-2xl p-8 hover:border-violet-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] h-full flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <Mail className="w-6 h-6 text-violet-400 absolute -top-2 -left-2" strokeWidth={1.5} />
                        <FileText className="w-5 h-5 text-violet-400 absolute top-2 left-2" strokeWidth={1.5} />
                        <Calendar className="w-5 h-5 text-violet-400 absolute -top-1 left-3" strokeWidth={1.5} />
                      </div>
                      <Zap className="w-10 h-10 text-violet-400 relative z-10" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-violet-300">The answer exists—but not where you are</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">It's buried in past emails, documents, or meeting notes you can't access in time.</p>
                </div>
                {/* Arrow */}
                <div className="hidden lg:block absolute top-24 -right-3 z-10">
                  <ArrowRight className="w-6 h-6 text-indigo-400/60 animate-pulse" style={{animationDelay: '0.3s'}} />
                </div>
              </div>

              {/* Stage 3 - Breaking the Flow */}
              <div className="group relative">
                <div className="bg-gradient-card border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] h-full flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300">
                    <div className="relative">
                      <Brain className="w-10 h-10 text-indigo-400" strokeWidth={1.5} />
                      <div className="absolute -top-2 -right-2 w-4 h-4 border-2 border-indigo-400 rounded-full animate-spin" style={{animationDuration: '3s'}} />
                      <div className="absolute top-0 right-0 w-3 h-3 border-2 border-indigo-500 rounded-full animate-spin" style={{animationDuration: '2s', animationDirection: 'reverse'}} />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-indigo-300">You break the flow trying to find it</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Switching tabs and searching kills momentum, and you lose track of the discussion.</p>
                </div>
                {/* Arrow */}
                <div className="hidden lg:block absolute top-24 -right-3 z-10">
                  <ArrowRight className="w-6 h-6 text-red-400/60 animate-pulse" style={{animationDelay: '0.6s'}} />
                </div>
              </div>

              {/* Stage 4 - Losing the Moment */}
              <div className="group relative">
                <div className="bg-gradient-card border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] h-full flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-300">
                    <div className="relative">
                      <MessageSquare className="w-10 h-10 text-red-400 opacity-40" strokeWidth={1.5} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 border-2 border-red-500/30 rounded-full" />
                        <AlertCircle className="w-6 h-6 text-red-500 absolute" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-red-300">The moment passes — and accuracy suffers</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">You respond late, lose confidence, or miss the chance to contribute effectively.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transition Arrow */}
          <div className="flex justify-center mb-20">
            <div className="p-4 bg-primary/10 rounded-full">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Solution Section */}
          <header className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30">
              The Neura AI Solution
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Just-in-Time Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              AI-powered suggestions appear precisely when you need them, keeping you in the flow. 
              Works even with your phone asleep in your pocket.
            </p>
          </header>

          {/* Solution Visualization */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Mobile Mockup - Solution State */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-card border-2 border-primary/20 rounded-3xl p-6 shadow-brand-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Brain className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">Neura AI</span>
                    </div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-2xl p-4">
                      <p className="text-sm text-muted-foreground">
                        "What was our Q3 revenue growth again?"
                      </p>
                    </div>
                    
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Smart Suggestion</span>
                      </div>
                      <p className="text-sm">
                        "Q3 revenue grew 23.5% to $2.4M. Details from your Oct 15 board deck."
                      </p>
                    </div>

                    <div className="bg-accent/10 rounded-2xl p-4">
                      <p className="text-sm font-medium">
                        "Perfect! Yes, 23.5% growth, driven mainly by our enterprise segment..."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating suggestion indicator */}
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-primary/10 border border-primary/20 rounded-lg p-2">
                  <Brain className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Seamless Intelligence</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">No typing or prompting required</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Works with phone asleep and in pocket</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Enterprise-grade privacy and security</span>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works - Simplified */}
          <article className="bg-gradient-hero rounded-3xl p-8 md:p-12">
            <header className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">How It Works</h3>
              <p className="text-muted-foreground text-lg">Three simple steps to transform your conversations</p>
            </header>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold">
                  1
                </div>
                <h4 className="text-lg font-semibold mb-3">Listen & Understand</h4>
                <p className="text-muted-foreground text-sm">
                  AI analyzes conversation context in real-time without interruption
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold">
                  2
                </div>
                <h4 className="text-lg font-semibold mb-3">Connect Information</h4>
                <p className="text-muted-foreground text-sm">
                  Instantly connects topics to relevant data from all your sources
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold">
                  3
                </div>
                <h4 className="text-lg font-semibold mb-3">Deliver Insights</h4>
                <p className="text-muted-foreground text-sm">
                  Provides timely suggestions through visual or audio guidance
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSolution;