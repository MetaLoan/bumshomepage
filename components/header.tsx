"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full glass-morphism border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold glow-text">
              <span className="text-primary">BUMS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#launchpad" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Launchpad
            </a>
            <a href="#ecosystem" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Ecosystem
            </a>
            <a href="#tokenomics" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Tokenomics
            </a>
            <a href="#roadmap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Roadmap
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 bg-transparent"
            >
              Connect Wallet
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-text">Play Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/50">
            <a href="#launchpad" className="block text-sm text-muted-foreground hover:text-primary">
              Launchpad
            </a>
            <a href="#ecosystem" className="block text-sm text-muted-foreground hover:text-primary">
              Ecosystem
            </a>
            <a href="#tokenomics" className="block text-sm text-muted-foreground hover:text-primary">
              Tokenomics
            </a>
            <a href="#roadmap" className="block text-sm text-muted-foreground hover:text-primary">
              Roadmap
            </a>
            <div className="flex flex-col gap-3 pt-4">
              <Button variant="outline" className="w-full border-primary/50 bg-transparent">
                Connect Wallet
              </Button>
              <Button className="w-full bg-primary text-primary-foreground">Play Now</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
