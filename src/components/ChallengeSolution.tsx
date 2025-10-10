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
          {/* Problem Visualization - Interactive */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold mb-8">What Happens When Information Isn't Accessible</h3>
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-card border border-destructive/20 hover-lift transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-destructive/10">
                      <AlertCircle className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Alt-Tabbing Kills Momentum</h4>
                      <p className="text-muted-foreground">Switching between apps disrupts conversation flow and breaks professional presence.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-card border border-destructive/20 hover-lift transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-destructive/10">
                      <Zap className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Guessing Hurts Outcomes</h4>
                      <p className="text-muted-foreground">Without instant access to context, professionals miss opportunities and make suboptimal decisions.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-card border border-destructive/20 hover-lift transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-destructive/10">
                      <MessageSquare className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Context Fragmentation</h4>
                      <p className="text-muted-foreground">Critical information exists in silos, making it impossible to get the full picture in real-time.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Funnel Clog Visualization */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative h-96 w-full max-w-md">
                {/* Funnel shape */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 400">
                  {/* Funnel outline - wide at top, narrow at bottom */}
                  <path
                    d="M 80 60 L 320 60 L 240 280 L 160 280 Z"
                    fill="rgba(239, 68, 68, 0.1)"
                    stroke="rgba(239, 68, 68, 0.4)"
                    strokeWidth="3"
                    strokeDasharray="8,4"
                    className="animate-pulse"
                  />
                  
                  {/* Blockage/clog lines at funnel entrance */}
                  <line x1="80" y1="60" x2="320" y2="60" stroke="rgba(239, 68, 68, 0.6)" strokeWidth="4" />
                  <line x1="100" y1="80" x2="300" y2="80" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="3" />
                  <line x1="120" y1="100" x2="280" y2="100" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="2" />
                  
                  {/* X marks showing blockage */}
                  <text x="200" y="200" fontSize="48" fill="rgba(239, 68, 68, 0.3)" textAnchor="middle" fontWeight="bold">✕</text>
                  <text x="180" y="240" fontSize="36" fill="rgba(239, 68, 68, 0.2)" textAnchor="middle" fontWeight="bold">✕</text>
                  <text x="220" y="240" fontSize="36" fill="rgba(239, 68, 68, 0.2)" textAnchor="middle" fontWeight="bold">✕</text>
                </svg>

                {/* Information sources clogging the funnel entrance */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-center gap-3 z-10">
                  <div className="relative">
                    <Card className="w-20 h-20 flex flex-col items-center justify-center p-2 bg-red-950/80 backdrop-blur-sm border-2 border-red-500/60 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:scale-110 transition-transform duration-300">
                      <Mail className="w-7 h-7 text-red-400 mb-1" />
                      <span className="text-xs font-bold text-red-300 text-center">Emails</span>
                    </Card>
                    {/* Stacking effect */}
                    <div className="absolute inset-0 bg-red-500/20 blur-md rounded-lg -z-10"></div>
                  </div>

                  <div className="relative mt-4">
                    <Card className="w-20 h-20 flex flex-col items-center justify-center p-2 bg-orange-950/80 backdrop-blur-sm border-2 border-orange-500/60 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-110 transition-transform duration-300">
                      <FileText className="w-7 h-7 text-orange-400 mb-1" />
                      <span className="text-xs font-bold text-orange-300 text-center">Docs</span>
                    </Card>
                    <div className="absolute inset-0 bg-orange-500/20 blur-md rounded-lg -z-10"></div>
                  </div>

                  <div className="relative">
                    <Card className="w-20 h-20 flex flex-col items-center justify-center p-2 bg-yellow-950/80 backdrop-blur-sm border-2 border-yellow-500/60 shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:scale-110 transition-transform duration-300">
                      <Calendar className="w-7 h-7 text-yellow-400 mb-1" />
                      <span className="text-xs font-bold text-yellow-300 text-center">Calendar</span>
                    </Card>
                    <div className="absolute inset-0 bg-yellow-500/20 blur-md rounded-lg -z-10"></div>
                  </div>

                  <div className="relative mt-4">
                    <Card className="w-20 h-20 flex flex-col items-center justify-center p-2 bg-red-950/80 backdrop-blur-sm border-2 border-red-500/60 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:scale-110 transition-transform duration-300">
                      <Globe className="w-7 h-7 text-red-400 mb-1" />
                      <span className="text-xs font-bold text-red-300 text-center">Web</span>
                    </Card>
                    <div className="absolute inset-0 bg-red-500/20 blur-md rounded-lg -z-10"></div>
                  </div>
                </div>

                {/* Clogged indicator label */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-red-950/90 backdrop-blur-sm border-2 border-red-500/60 rounded-xl px-6 py-3 shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                    <p className="text-red-300 font-black text-lg text-center">❌ CLOGGED</p>
                    <p className="text-red-400 font-medium text-xs text-center mt-1">Can't flow through</p>
                  </div>
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