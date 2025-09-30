import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, ArrowRight, Sparkles, Shield } from "lucide-react";
import { finalCTASchema, validateFormData, sanitizeInput, safeEncodeURIComponent, type FinalCTAFormData } from "@/lib/formValidation";

const FinalCTA = () => {
  const [formData, setFormData] = useState<FinalCTAFormData>({
    name: "",
    email: "",
    purpose: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setFieldErrors({});
    
    // Validate form data
    const validation = validateFormData(finalCTASchema, formData);
    
    if (!validation.success) {
      // Handle validation errors
      setFieldErrors('errors' in validation ? validation.errors : {});
      toast({
        title: "Please check your input",
        description: "Please correct the errors and try again.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Use validated and sanitized data
      const safeData = validation.data;
      
      // Send to Discord webhook with sanitized data
      const discordPayload = {
        embeds: [{
          title: "🚀 New Neura AI Waitlist Signup",
          color: 0x3b82f6,
          fields: [
            {
              name: "Name",
              value: sanitizeInput(safeData.name || "Not provided"),
              inline: true
            },
            {
              name: "Email",
              value: sanitizeInput(safeData.email),
              inline: true
            },
            {
              name: "Purpose",
              value: sanitizeInput(safeData.purpose),
              inline: false
            }
          ],
          timestamp: new Date().toISOString()
        }]
      };

      const response = await fetch("https://discord.com/api/webhooks/1418048569025232942/n_vrx9_32mwLw1CgllNvSkMW4Hhl5zqberPY_5CG2mN8w6wOJnX5FsQ4-7vOebKiPf3-", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discordPayload),
      });

      if (!response.ok) {
        throw new Error(`Discord webhook failed: ${response.status}`);
      }

      setIsSubmitted(true);
      
      toast({
        title: "Welcome to the waitlist!",
        description: "Redirecting you to our Discord community...",
      });

      // Redirect to Discord after a short delay
      setTimeout(() => {
        window.open("https://discord.gg/invite-link", "_blank");
      }, 2000);

    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 md:py-32 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-scale-in">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-display font-bold mb-6">
                You're on the list!
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Thank you for joining the Neura AI waitlist. We'll keep you updated on our progress 
                and notify you as soon as early access becomes available.
              </p>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
                <p className="text-sm text-muted-foreground">
                  Confirmation sent to: <strong className="text-foreground">{formData.email}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist-form" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Massive vibrant glows */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-pink-500/30 to-purple-500/30 rounded-full blur-[180px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge variant="outline" className="mb-8 px-8 py-4 text-xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text border-3 border-purple-400/70 shadow-[0_0_40px_rgba(168,85,247,0.5)] backdrop-blur-md">
              Join the Future
            </Badge>
            <h2 className="text-6xl md:text-8xl font-black text-balance mb-10 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(34,211,238,0.6)]">
                Stay in the flow.
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(168,85,247,0.8)]">
                Never miss a beat
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                in conversation.
              </span>
            </h2>
            <p className="text-2xl text-gray-300 text-balance max-w-4xl mx-auto leading-relaxed font-medium">
              Be among the first to experience <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-bold">AI that enhances</span> your professional conversations 
              without interrupting your natural flow.
            </p>
          </div>

          {/* Main CTA Card */}
          <Card className="relative bg-gradient-to-br from-purple-950/50 via-pink-950/30 to-cyan-950/50 backdrop-blur-xl border-3 border-purple-400/40 p-10 md:p-16 shadow-[0_0_80px_rgba(168,85,247,0.4)] hover:shadow-[0_0_100px_rgba(168,85,247,0.6)] transition-all duration-500 animate-scale-in rounded-3xl" style={{animationDelay: "0.3s"}}>
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-30 blur-2xl rounded-3xl"></div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-black mb-8 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Join the Waitlist
                </h3>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium">
                  Get <span className="text-cyan-400 font-bold">early access</span> to Neura AI and be part of shaping the future of professional conversations.
                </p>
                
                <div className="space-y-5 mb-10">
                  <div className="flex items-center gap-4 p-4 bg-cyan-500/10 border-2 border-cyan-400/30 rounded-xl backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                    <div className="p-2 rounded-full bg-cyan-400/20">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-gray-200 font-medium">Priority access when we launch</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-purple-500/10 border-2 border-purple-400/30 rounded-xl backdrop-blur-sm hover:border-purple-400/60 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                    <div className="p-2 rounded-full bg-purple-400/20">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-gray-200 font-medium">Exclusive updates on development progress</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-pink-500/10 border-2 border-pink-400/30 rounded-xl backdrop-blur-sm hover:border-pink-400/60 transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                    <div className="p-2 rounded-full bg-pink-400/20">
                      <Shield className="w-5 h-5 text-pink-400" />
                    </div>
                    <span className="text-gray-200 font-medium">Special pricing for early adopters</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your name (optional)"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: sanitizeInput(e.target.value)})}
                        className={`h-12 px-4 bg-background/50 border-border/50 focus:border-primary ${
                          fieldErrors.name ? 'border-destructive focus:border-destructive' : ''
                        }`}
                        disabled={isLoading}
                        maxLength={100}
                      />
                      {fieldErrors.name && (
                        <p className="text-sm text-destructive mt-1">{fieldErrors.name}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Enter your professional email *"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: sanitizeInput(e.target.value)})}
                        className={`h-12 px-4 bg-background/50 border-border/50 focus:border-primary ${
                          fieldErrors.email ? 'border-destructive focus:border-destructive' : ''
                        }`}
                        disabled={isLoading}
                        required
                        maxLength={255}
                      />
                      {fieldErrors.email && (
                        <p className="text-sm text-destructive mt-1">{fieldErrors.email}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="How do you plan to use Neura AI? *"
                        value={formData.purpose}
                        onChange={(e) => setFormData({...formData, purpose: sanitizeInput(e.target.value)})}
                        className={`h-12 px-4 bg-background/50 border-border/50 focus:border-primary ${
                          fieldErrors.purpose ? 'border-destructive focus:border-destructive' : ''
                        }`}
                        disabled={isLoading}
                        required
                        maxLength={500}
                      />
                      {fieldErrors.purpose && (
                        <p className="text-sm text-destructive mt-1">{fieldErrors.purpose}</p>
                      )}
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:shadow-[0_0_60px_rgba(168,85,247,0.9)] border-2 border-white/20 font-black text-lg hover:scale-105"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        <span className="font-bold">Joining...</span>
                      </>
                    ) : (
                      <>
                        <span className="font-black">Join Waitlist Now</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    We'll only email you about Neura AI updates. No spam, ever.
                  </p>
                </form>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-950/40 to-purple-950/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-400/30 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(168,85,247,0.6)]">
                        <Sparkles className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-xl font-black mb-3 text-cyan-300">Coming Soon</h4>
                      <p className="text-base text-purple-300 font-medium">Expected launch in Q2 2024</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-3 px-4 bg-cyan-500/10 border border-cyan-400/30 rounded-xl">
                        <span className="text-base font-medium text-gray-200">Beta Testing</span>
                        <Badge variant="secondary" className="text-sm bg-cyan-500/20 text-cyan-300 border-cyan-400/40">Q1 2024</Badge>
                      </div>
                      <div className="flex items-center justify-between py-3 px-4 bg-purple-500/10 border-2 border-purple-400/40 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                        <span className="text-base font-bold text-purple-300">Early Access</span>
                        <Badge variant="outline" className="text-sm border-2 border-purple-400 text-purple-300 bg-purple-500/20 font-bold">Q2 2024</Badge>
                      </div>
                      <div className="flex items-center justify-between py-3 px-4 bg-pink-500/10 border border-pink-400/30 rounded-xl">
                        <span className="text-base font-medium text-gray-200">Public Launch</span>
                        <Badge variant="outline" className="text-sm border-pink-400/40 text-pink-300">Q3 2024</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Additional Trust Signals */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="animate-fade-in-up p-8 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-cyan-900/20 border-2 border-cyan-400/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.2)]" style={{animationDelay: "0.6s"}}>
              <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">500+</div>
              <p className="text-gray-300 font-medium text-lg">Professionals already on the waitlist</p>
            </div>
            <div className="animate-fade-in-up p-8 rounded-2xl bg-gradient-to-br from-purple-950/40 to-purple-900/20 border-2 border-purple-400/30 backdrop-blur-sm hover:border-purple-400/60 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.2)]" style={{animationDelay: "0.8s"}}>
              <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">Fortune 500</div>
              <p className="text-gray-300 font-medium text-lg">Companies showing interest</p>
            </div>
            <div className="animate-fade-in-up p-8 rounded-2xl bg-gradient-to-br from-pink-950/40 to-pink-900/20 border-2 border-pink-400/30 backdrop-blur-sm hover:border-pink-400/60 transition-all duration-300 shadow-[0_0_30px_rgba(236,72,153,0.2)]" style={{animationDelay: "1s"}}>
              <div className="text-5xl font-black bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]">AI-First</div>
              <p className="text-gray-300 font-medium text-lg">Built for the modern workplace</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;