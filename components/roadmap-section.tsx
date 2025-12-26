import { Check, Circle } from "lucide-react"

export function RoadmapSection() {
  const phases = [
    {
      title: "The Awakening",
      completed: true,
      items: ["TGE & Exchange Listing", "Basic Agent Companion App", "Verification Dashboard Launch"],
    },
    {
      title: "The Training",
      completed: false,
      items: ["Train-to-Earn Module Live", "First IAO (Initial Agent Offering)", "Developer SDK Beta"],
    },
    {
      title: "The Autonomy",
      completed: false,
      items: ["Agent-to-Agent Economy", "Cross-Platform Identity Protocol", "Decentralized AI Marketplace"],
    },
    {
      title: "The Singularity",
      completed: false,
      items: ["AI DAO Governance", "Full Decentralization"],
    },
  ]

  return (
    <section id="roadmap" className="py-24 px-4 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
            <span className="text-primary">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">The evolution from concept to singularity</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {/* Phases */}
            <div className="space-y-16">
              {phases.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    {phase.completed ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      <Circle className="w-3 h-3 text-primary fill-primary" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"}`}>
                    <div className="glass-morphism rounded-lg p-6 hover:bg-card/50 transition-colors">
                      <h3 className="text-2xl font-bold mb-4 font-sans">
                        Phase {index + 1}: <span className="text-primary">{phase.title}</span>
                      </h3>
                      <ul className="space-y-2">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
