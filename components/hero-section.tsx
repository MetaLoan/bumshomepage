"use client"

import { Button } from "@/components/ui/button"
import { Rocket, FileText } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
            <span className="block text-foreground font-sans">Where IP Becomes</span>
            <span className="block text-primary glow-text mt-2 font-sans">Living AI.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            The Infrastructure for Creating, Deploying, and Scaling Intelligent Digital Beings.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14 glow-text group"
            >
              <Rocket className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Enter Launchpad
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 text-lg px-8 h-14 bg-transparent"
            >
              <FileText className="mr-2 h-5 w-5" />
              Read Manifesto
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
