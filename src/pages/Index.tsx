import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChallengeSolution from "@/components/ChallengeSolution";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import { FAQ } from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    // Cleanup event listeners
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Header />
      <main role="main">
        <Hero />
        <ChallengeSolution />
        <Features />
        <UseCases />
        <FAQ />
        <section aria-label="Join waitlist" className="bg-gradient-aurora">
          <div className="bg-background/95 backdrop-blur-sm border border-border/20 rounded-2xl mx-4 md:mx-8">
            <FinalCTA />
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;