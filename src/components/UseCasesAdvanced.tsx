import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Briefcase, 
  Handshake, 
  TrendingUp, 
  Lightbulb, 
  MessageCircle 
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { MotionSection, MotionItem } from "./ui/MotionSection";
import { GlassCard } from "./ui/GlassCard";
import { getQualityConfig } from "../config/visual";

export const UseCases: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);
  const qualityConfig = getQualityConfig();

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const useCases = [
    {
      icon: Briefcase,
      title: "Work Meetings",
      outcome: "Stay informed and contribute meaningfully to every discussion"
    },
    {
      icon: TrendingUp,
      title: "Sales",
      outcome: "Access customer insights and objection responses instantly"
    },
    {
      icon: Handshake,
      title: "Negotiations",
      outcome: "Get strategic talking points and leverage information"
    },
    {
      icon: Lightbulb,
      title: "Brainstorming",
      outcome: "Generate creative ideas and build on team concepts"
    },
    {
      icon: MessageCircle,
      title: "Debates",
      outcome: "Access supporting arguments and factual backing"
    }
  ];

  return (
    <MotionSection 
      ref={ref}
      id="use-cases" 
      className="bg-gradient-aurora"
      style={{ 
        contentVisibility: qualityConfig.contentVisibility ? 'auto' : 'visible',
        contain: qualityConfig.contentVisibility ? 'content' : 'none'
      }}
    >
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Use Cases"
          title="Built for every conversation that matters"
          subtitle="From boardrooms to classrooms, Neura AI adapts to your context"
        />
        
        {/* Desktop: 4x2 grid, Tablet: auto-fit grid, Mobile: 2 columns */}
        <div className="grid grid-cols-2 md:auto-fit-minmax-220 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <MotionItem key={index}>
                <GlassCard className="p-6 h-full flex flex-col">
                  <motion.div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 mb-4"
                    animate={isInView && !isPaused ? { 
                      y: [0, -2, 0] 
                    } : false}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2 
                    }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  
                  <h3 className="font-semibold text-foreground mb-2 text-sm">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-xs text-foreground-muted flex-grow">
                    {useCase.outcome}
                  </p>
                </GlassCard>
              </MotionItem>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
};