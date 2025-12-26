import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Vote, Zap, TrendingUp, Sparkles } from "lucide-react"

export function TokenomicsSection() {
  const utilities = [
    {
      icon: Vote,
      title: "Governance",
      description: "Vote on the next IAO project",
    },
    {
      icon: Zap,
      title: "Gas",
      description: "Fuel for Agent-to-Agent transactions",
    },
    {
      icon: TrendingUp,
      title: "Staking",
      description: "Earn revenue share from top-performing Agents",
    },
    {
      icon: Sparkles,
      title: "In-App",
      description: "Customize and upgrade your digital beings",
    },
  ]

  return (
    <section id="tokenomics" className="py-24 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
            Powered by <span className="text-primary glow-text">$BUMS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The token that fuels the entire AI agent economy
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {utilities.map((utility, index) => (
            <Card
              key={index}
              className="holographic-border bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300 group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <utility.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-sans">{utility.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{utility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
