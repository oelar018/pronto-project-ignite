import { useEffect } from "react";
import { Twitter, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const formEl = document.getElementById('waitlist-form') as HTMLFormElement;
    
    const handleSubmit = async (e: Event) => {
      e.preventDefault();
      const form = e.currentTarget as HTMLFormElement;
      const data = Object.fromEntries(new FormData(form).entries());

      // Basic email check
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email as string || "");
      if (!emailOk) { 
        alert("Please enter a valid email."); 
        return; 
      }

      const payload = {
        content: null,
        embeds: [{
          title: "📝 New Waitlist Signup",
          description: "Neura AI waitlist submission",
          fields: [
            { name: "Name", value: data.name || "—", inline: true },
            { name: "Email", value: data.email || "—", inline: true },
            { name: "Usage", value: data.usage || "—", inline: false }
          ],
          timestamp: new Date().toISOString()
        }]
      };

      try {
        const resp = await fetch("https://discord.com/api/webhooks/1427033593007571024/wjfBS4Gg92S0vXzGXb5efJ24MTbDBXhtplZLh9M7Cd3hss2C4SJlzawhhNG6EYJAh7vM", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        const text = await resp.text(); // debug aid
        if (!resp.ok) {
          console.error("Discord webhook error", resp.status, text);
          alert("Submission failed. Please try again.");
          return;
        }
        form.reset();
        alert("You're on the list! 🎉");
        // window.location.href = "/thank-you"; // optional redirect
      } catch (err) {
        console.error("Network error", err);
        alert("Network error. Please try again.");
      }
    };

    formEl?.addEventListener('submit', handleSubmit);

    return () => {
      formEl?.removeEventListener('submit', handleSubmit);
    };
  }, []);

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