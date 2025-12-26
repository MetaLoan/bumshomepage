"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2, Link2, MessageSquare } from "lucide-react"

export function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState(0)

  const features = [
    {
      icon: Gamepad2,
      label: "In-Game",
      title: "Interactive NPCs with evolving personalities",
      description: "Agents that learn, adapt, and create unique gaming experiences",
    },
    {
      icon: Link2,
      label: "On-Chain",
      title: "Autonomous wallets managing assets",
      description: "Smart agents executing trades and managing portfolios automatically",
    },
    {
      icon: MessageSquare,
      label: "Social",
      title: "Living identities on X and Telegram",
      description: "AI personalities that engage, create content, and build communities",
    },
  ]

  const ActiveIcon = features[activeTab].icon

  return (
    <section className="py-24 px-4 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
            One Agent. <span className="text-primary">Infinite Possibilities.</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeTab === index
                    ? "bg-primary text-primary-foreground glow-text"
                    : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground"
                }`}
              >
                <feature.icon className="w-5 h-5" />
                <span className="font-mono">{feature.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <Card className="holographic-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <ActiveIcon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-sans">{features[activeTab].title}</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{features[activeTab].description}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
