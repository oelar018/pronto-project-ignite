import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Brain, Zap, ArrowRight, CheckCircle, AlertCircle, Mail, Calendar, FileText, Globe, HelpCircle } from "lucide-react";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";

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
            <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
              Traditional Ways of Getting Information During Conversations Slows Everything Down
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              Professionals can't access the right information in live conversations without <span className="text-red-400 font-bold">breaking flow</span>. 
              Context is scattered across <span className="text-orange-400 font-semibold">email, calendar, files, and the web</span>.
            </p>
          </header>
          {/* Problem Flow - 4 Stages */}
          <div className="relative max-w-7xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative">
              {/* Stage 1 - In the Conversation */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-cyan-950/50 to-cyan-900/20 border-2 border-cyan-500/30 rounded-3xl p-10 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] h-full flex flex-col items-center text-center relative overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
                  
                  <div className="relative mb-8 mt-4">
                    {/* Main conversation bubbles with motion lines on both sides */}
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      {/* Motion lines BEFORE (left side) */}
                      <div className="absolute -left-4 top-1/3 w-6 h-0.5 bg-cyan-400/60 rounded-full animate-pulse" />
                      <div className="absolute -left-5 top-1/2 w-4 h-0.5 bg-cyan-400/40 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                      <div className="absolute -left-4 top-2/3 w-5 h-0.5 bg-cyan-400/50 rounded-full animate-pulse" style={{animationDelay: '0.1s'}} />
                      
                      {/* Motion lines AFTER (right side) */}
                      <div className="absolute -right-2 top-1/3 w-6 h-0.5 bg-cyan-400/60 rounded-full animate-pulse" />
                      <div className="absolute -right-3 top-1/2 w-4 h-0.5 bg-cyan-400/40 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                      <div className="absolute -right-2 top-2/3 w-5 h-0.5 bg-cyan-400/50 rounded-full animate-pulse" style={{animationDelay: '0.1s'}} />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-6 text-cyan-300">In the Conversation</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">Fast-paced dialogue, unexpected questions demanding quick thinking</p>
                </div>
                
                {/* Arrow */}
                <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-4 z-20">
                  <ArrowRight className="w-6 h-6 text-pink-400" strokeWidth={2.5} />
                </div>
              </div>

              {/* Stage 2 - Missing Context */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-pink-950/50 to-pink-900/20 border-2 border-pink-500/30 rounded-3xl p-10 hover:border-pink-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] h-full flex flex-col items-center text-center relative overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl" />
                  
                  <div className="relative mb-8 mt-4">
                    {/* Scattered documents layout - clearly separated */}
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      {/* Background scattered items */}
                      <div className="absolute top-0 left-0 w-12 h-12 rounded-lg bg-pink-500/20 border border-pink-400/30 flex items-center justify-center transform -rotate-12 blur-[0.5px]">
                        <Mail className="w-6 h-6 text-pink-400/60" strokeWidth={1.5} />
                      </div>
                      <div className="absolute top-0 right-0 w-12 h-12 rounded-lg bg-pink-500/20 border border-pink-400/30 flex items-center justify-center transform rotate-12 blur-[0.5px]">
                        <FileText className="w-6 h-6 text-pink-400/60" strokeWidth={1.5} />
                      </div>
                      <div className="absolute bottom-0 left-2 w-12 h-12 rounded-lg bg-pink-500/20 border border-pink-400/30 flex items-center justify-center transform rotate-6 blur-[0.5px]">
                        <Calendar className="w-6 h-6 text-pink-400/60" strokeWidth={1.5} />
                      </div>
                      <div className="absolute bottom-0 right-2 w-12 h-12 rounded-lg bg-pink-500/20 border border-pink-400/30 flex items-center justify-center transform -rotate-6 blur-[0.5px]">
                        <Globe className="w-6 h-6 text-pink-400/60" strokeWidth={1.5} />
                      </div>
                      {/* Central search icon */}
                      <div className="relative z-10 w-14 h-14 rounded-full bg-pink-500/30 border-2 border-pink-400 flex items-center justify-center">
                        <HelpCircle className="w-7 h-7 text-pink-300" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-6 text-pink-300">Missing Context</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">Information scattered across emails, files, and calendar</p>
                </div>
                
                {/* Arrow */}
                <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-4 z-20">
                  <ArrowRight className="w-6 h-6 text-orange-400" strokeWidth={2.5} />
                </div>
              </div>

              {/* Stage 3 - Breaking the Flow */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-orange-950/50 to-orange-900/20 border-2 border-orange-500/30 rounded-3xl p-10 hover:border-orange-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] h-full flex flex-col items-center text-center relative overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
                  
                  <div className="relative mb-8 mt-4">
                    {/* Horizontal line getting disrupted */}
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      {/* Left side of line */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-1 bg-orange-400 rounded-full"></div>
                      
                      {/* Disruption in center */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1">
                        <div className="w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                      
                      {/* Right side of line - broken into pieces */}
                      <div className="absolute right-4 top-[45%] w-6 h-0.5 bg-orange-400/60 rounded-full"></div>
                      <div className="absolute right-2 top-1/2 w-4 h-0.5 bg-orange-400/40 rounded-full"></div>
                      <div className="absolute right-5 top-[55%] w-5 h-0.5 bg-orange-400/50 rounded-full"></div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-6 text-orange-300">Breaking Flow</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">Tab-switching disrupts focus and conversation momentum</p>
                </div>
                
                {/* Arrow */}
                <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-4 z-20">
                  <ArrowRight className="w-6 h-6 text-red-400" strokeWidth={2.5} />
                </div>
              </div>

              {/* Stage 4 - Losing the Moment */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-red-950/50 to-red-900/20 border-2 border-red-500/30 rounded-3xl p-10 hover:border-red-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] h-full flex flex-col items-center text-center relative overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-red-500/20 rounded-full blur-3xl" />
                  
                  <div className="relative mb-8 mt-4">
                    {/* Alert with fading conversation */}
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      {/* Central alert icon */}
                      <div className="relative z-10 w-20 h-20 rounded-full bg-red-500/20 border-2 border-red-400/40 flex items-center justify-center animate-pulse">
                        <AlertCircle className="w-16 h-16 text-red-400" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-6 text-red-300">Losing the Moment</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">Late response, lost confidence, missed opportunity</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <header className="text-center mb-16 mt-24">
            <Badge variant="outline" className="mb-6 px-6 py-3 text-lg text-primary border-primary/30 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-shadow">
              The Neura AI Solution
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-8 pb-2 leading-relaxed bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(6,182,212,0.6)] animate-fade-in">
              No Typing. No Prompting. Just-In-Time-Intelligence with Full Context of Your Work.
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              Neura AI cuts through conversational noise and tells you <span className="text-cyan-400 font-bold">exactly what to say</span>—drawing from current and past discussions, <span className="text-blue-400 font-semibold">work documents, emails, and meetings</span>
            </p>
          </header>

          {/* Screenshot Carousel */}
          <ScreenshotCarousel />

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