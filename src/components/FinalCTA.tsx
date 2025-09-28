import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, ArrowRight, Sparkles, Shield } from "lucide-react";

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive"
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.purpose.trim()) {
      toast({
        title: "Purpose required",
        description: "Please tell us how you plan to use Neura AI.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Send to Discord webhook
      const discordPayload = {
        embeds: [{
          title: "🚀 New Neura AI Waitlist Signup",
          color: 0x3b82f6,
          fields: [
            {
              name: "Name",
              value: formData.name || "Not provided",
              inline: true
            },
            {
              name: "Email",
              value: formData.email,
              inline: true
            },
            {
              name: "Purpose",
              value: formData.purpose,
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
        throw new Error("Failed to send to Discord");
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
    <section id="waitlist-form" className="py-24 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30">
              Join the Future
            </Badge>
            <h2 className="text-display font-bold text-balance mb-6">
              Stay in the flow.{" "}
              <span className="text-gradient-primary">Never miss a beat</span>{" "}
              in conversation.
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              Be among the first to experience AI that enhances your professional conversations 
              without interrupting your natural flow.
            </p>
          </div>

          {/* Main CTA Card */}
          <Card className="bg-gradient-card p-8 md:p-12 shadow-brand-lg hover:shadow-glow transition-all duration-500 animate-scale-in" style={{animationDelay: "0.3s"}}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-title font-bold mb-6">
                  Join the Waitlist
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Get early access to Neura AI and be part of shaping the future of professional conversations.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-primary/10">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Priority access when we launch</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-primary/10">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Exclusive updates on development progress</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-primary/10">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Special pricing for early adopters</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Your name (optional)"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12 px-4 bg-background/50 border-border/50 focus:border-primary"
                      disabled={isLoading}
                    />
                    <Input
                      type="email"
                      placeholder="Enter your professional email *"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-12 px-4 bg-background/50 border-border/50 focus:border-primary"
                      disabled={isLoading}
                      required
                    />
                    <Input
                      type="text"
                      placeholder="How do you plan to use Neura AI? *"
                      value={formData.purpose}
                      onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                      className="h-12 px-4 bg-background/50 border-border/50 focus:border-primary"
                      disabled={isLoading}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    disabled={isLoading}
                    className="w-full"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Joining...
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    We'll only email you about Neura AI updates. No spam, ever.
                  </p>
                </form>
              </div>

              <div className="relative">
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2">Coming Soon</h4>
                      <p className="text-sm text-muted-foreground">Expected launch in Q2 2024</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 px-3 bg-background/30 rounded-lg">
                        <span className="text-sm">Beta Testing</span>
                        <Badge variant="secondary" className="text-xs">Q1 2024</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2 px-3 bg-background/30 rounded-lg">
                        <span className="text-sm">Early Access</span>
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary">Q2 2024</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2 px-3 bg-background/30 rounded-lg">
                        <span className="text-sm">Public Launch</span>
                        <Badge variant="outline" className="text-xs">Q3 2024</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Additional Trust Signals */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up" style={{animationDelay: "0.6s"}}>
              <div className="text-2xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Professionals already on the waitlist</p>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: "0.8s"}}>
              <div className="text-2xl font-bold text-primary mb-2">Fortune 500</div>
              <p className="text-muted-foreground">Companies showing interest</p>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: "1s"}}>
              <div className="text-2xl font-bold text-primary mb-2">AI-First</div>
              <p className="text-muted-foreground">Built for the modern workplace</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;