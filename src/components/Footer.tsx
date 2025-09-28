import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Twitter, Linkedin, Shield, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/logo.png" 
                  alt="Neura AI" 
                  className="w-10 h-10"
                />
                <span className="text-2xl font-bold text-foreground">
                  Neura AI
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                AI that gives you answers without interrupting the flow. 
                Professional intelligence delivered precisely when you need it.
              </p>
              <div>
                <Badge variant="outline" className="mb-4 px-3 py-1 text-primary border-primary/30">
                  Coming Soon
                </Badge>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-semibold mb-6">Product</h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="#features" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#use-cases" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Use Cases
                  </a>
                </li>
                <li>
                  <a 
                    href="#solution" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground/60">
                    Pricing <Badge variant="secondary" className="ml-2 text-xs">Soon</Badge>
                  </span>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <span className="text-muted-foreground/60">
                    About <Badge variant="secondary" className="ml-2 text-xs">Soon</Badge>
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground/60">
                    Blog <Badge variant="secondary" className="ml-2 text-xs">Soon</Badge>
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground/60">
                    Careers <Badge variant="secondary" className="ml-2 text-xs">Soon</Badge>
                  </span>
                </li>
                <li>
                  <a 
                    href="mailto:hello@neura-ai.com" 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p>© 2024 Neura AI. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground/60">
                  Privacy Policy <Badge variant="secondary" className="ml-1 text-xs">Soon</Badge>
                </span>
                <span className="text-muted-foreground/60">
                  Terms of Service <Badge variant="secondary" className="ml-1 text-xs">Soon</Badge>
                </span>
              </div>
            </div>

            {/* Security & Trust */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Enterprise Secure</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-sm">Made with care</span>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mt-8 pt-6 border-t border-border/20">
            <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto">
              Neura AI is currently in development. All features, timelines, and capabilities described on this site are subject to change. 
              Waitlist registration does not guarantee access to beta testing or early access programs.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;