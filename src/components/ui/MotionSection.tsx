import React, { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionSectionProps extends HTMLMotionProps<"section"> {
  gradient?: boolean;
  children: React.ReactNode;
}

export const MotionSection = forwardRef<HTMLElement, MotionSectionProps>(
  ({ className, gradient, children, ...props }, ref) => {
    return (
      <motion.section
        ref={ref}
        className={cn(
          "py-24",
          gradient && "bg-gradient-aurora",
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        {...props}
      >
        {children}
      </motion.section>
    );
  }
);

MotionSection.displayName = "MotionSection";

interface MotionItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export const MotionItem = forwardRef<HTMLDivElement, MotionItemProps>(
  ({ className, children, delay = 0, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5, 
          ease: "easeOut",
          delay: delay * 0.1
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

MotionItem.displayName = "MotionItem";