import { Twitter, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#0A0A0A] border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-foreground font-semibold mb-2">Neura AI</div>
            <div className="text-foreground-muted text-sm">
              © {currentYear} Neura AI. All rights reserved.
            </div>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            <a 
              href="/privacy" 
              className="text-foreground-muted hover:text-foreground text-sm transition-colors"
            >
              Privacy
            </a>
            <a 
              href="/terms" 
              className="text-foreground-muted hover:text-foreground text-sm transition-colors"
            >
              Terms
            </a>
            <a 
              href="/security" 
              className="text-foreground-muted hover:text-foreground text-sm transition-colors"
            >
              Security
            </a>
            <a 
              href="#contact" 
              className="text-foreground-muted hover:text-foreground text-sm transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/neuraai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/neuraai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors" 
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://discord.gg/neuraai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors"
              aria-label="Join our Discord"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;