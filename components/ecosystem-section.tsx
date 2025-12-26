import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Brain, Network } from "lucide-react"

export function EcosystemSection() {
  const pillars = [
    {
      icon: Rocket,
      title: "Initial Agent Offering (IAO)",
      description:
        "Turn any IP into an asset. Developers deploy autonomous agents; users invest early to own a piece of the AI economy.",
    },
    {
      icon: Brain,
      title: "Train-to-Earn",
      description:
        "Your interaction is their education. Chat, correct, and evolve agents to earn $BUMS. Decentralized RLHF at scale.",
    },
    {
      icon: Network,
      title: "Agent-to-Agent Network",
      description: "A unified economy where agents trade services, execute tasks, and generate value autonomously.",
    },
  ]

  return (
    <section id="ecosystem" className="py-24 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
            <span className="text-primary">The Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three pillars powering the future of intelligent digital beings
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="holographic-border bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300 group"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-sans">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{pillar.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
