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
      icon: Briefcase,
      title: "Board Meetings & Presentations",
      description: "Never stumble on financial metrics or strategic details. Get instant access to quarterly reports, market data, and key performance indicators.",
      example: "\"Revenue grew 23.5% in Q3, driven by enterprise segment expansion to 45% of total bookings.\"",
      color: "primary"
    },
    {
      icon: Handshake,
      title: "Client Negotiations",
      description: "Access contract history, pricing discussions, and competitor intel instantly. Close deals with confidence and complete context.",
      example: "\"Based on their recent Series B, they likely have budget flexibility for our enterprise tier.\"",
      color: "accent"
    },
    {
      icon: Users,
      title: "Team Standups & Reviews",
      description: "Stay on top of project status, individual contributions, and timeline adjustments without missing a beat.",
      example: "\"Sarah's API integration is 2 days ahead of schedule, unblocking the mobile team for early testing.\"",
      color: "primary"
    },
    {
      icon: Phone,
      title: "Investor Relations",
      description: "Handle investor calls with complete visibility into metrics, market comparisons, and growth trajectories.",
      example: "\"Our CAC:LTV ratio improved to 1:4.2 this quarter, outperforming the industry average of 1:3.1.\"",
      color: "accent"
    }
  ];

  return (
    <section id="use-cases" className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30">
              Use Cases
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Transform Every Professional Interaction
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how Neura AI empowers professionals across different scenarios with just-in-time intelligence.
            </p>
          </div>

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

          {/* Advanced Scenarios */}
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Advanced Professional Scenarios
              </h3>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Neura AI adapts to complex business situations with contextual intelligence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 rounded-xl bg-white/10 w-fit mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-white">Multi-stakeholder Alignment</h4>
                <p className="text-white/80 text-sm">
                  When multiple team members use Neura AI, meetings stay perfectly aligned with shared context and accurate information.
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 rounded-xl bg-white/10 w-fit mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-white">Cross-meeting Context</h4>
                <p className="text-white/80 text-sm">
                  Recalls insights from past meetings you didn't attend (with permissions) to create comprehensive understanding.
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 rounded-xl bg-white/10 w-fit mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-white">Post-meeting Coaching</h4>
                <p className="text-white/80 text-sm">
                  Automatic analysis of what went well, what was missed, and how to improve for continuous professional development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;