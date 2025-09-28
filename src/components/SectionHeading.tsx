import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  className = ""
}) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {eyebrow && (
        <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30">
          {eyebrow}
        </Badge>
      )}
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        {title}
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};