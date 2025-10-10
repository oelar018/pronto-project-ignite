import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  Handshake, 
  Phone,
  Calendar,
  MessageSquare,
  Zap
} from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Users,
      title: "General Meetings",
      description: "Never lose track of the discussion or key decisions. Neura keeps every participant aligned with accurate data, past context, and real-time insights as the conversation evolves.",
      example: "\"Last quarter's retention rate held steady at 92%, so we can maintain the current renewal target.\"",
      color: "primary"
    },
    {
      icon: Zap,
      title: "Group Brainstorming",
      description: "Capture every idea and build on them effortlessly. Neura tracks evolving themes, references past sessions, and surfaces related insights from your documents and messages.",
      example: "\"This concept builds on the product feedback we gathered from the beta launch last month.\"",
      color: "accent"
    },
    {
      icon: Handshake,
      title: "Negotiations",
      description: "Walk into every discussion fully informed. Neura recalls prior terms, pricing history, and client sentiment so you can respond with precision and confidence.",
      example: "\"They negotiated a 12% discount last cycle. Offering 10% keeps margins aligned while signaling goodwill.\"",
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "Sales Pitch",
      description: "Turn information into impact. Neura instantly pulls relevant case studies, pricing insights, and client data to strengthen your pitch and close faster.",
      example: "\"Based on their annual spend of $2.3 million, positioning our enterprise plan with a 15% performance bonus clause would likely secure the deal.\"",
      color: "accent"
    }
  ];

  return (
    <section id="use-cases" className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <header className="text-center mb-16">
            <Badge variant="outline" className="mb-8 px-6 py-3 text-lg font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text border-2 border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              Use Cases
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Transform Every Professional Interaction
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how Neura AI empowers professionals across different scenarios.
            </p>
          </header>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {useCases.map((useCase, index) => (
              <Card 
                key={useCase.title}
                className="p-8 bg-gradient-card hover-lift hover:shadow-glow transition-all duration-500 group"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-xl ${useCase.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/10 group-hover:bg-accent/20'} transition-colors flex-shrink-0`}>
                    <useCase.icon className={`w-8 h-8 ${useCase.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {useCase.description}
                    </p>
                    
                    {/* Example suggestion */}
                    <div className={`${useCase.color === 'primary' ? 'bg-primary/5 border-primary/20' : 'bg-accent/5 border-accent/20'} border rounded-lg p-4`}>
                      <div className="flex items-start gap-3">
                        <Zap className={`w-4 h-4 ${useCase.color === 'primary' ? 'text-primary' : 'text-accent'} flex-shrink-0 mt-0.5`} />
                        <div>
                          <p className="text-xs font-medium mb-1">AI Suggestion Example</p>
                          <p className="text-sm italic">{useCase.example}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;