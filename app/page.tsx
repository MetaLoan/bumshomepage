import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustTicker } from "@/components/trust-ticker"
import { EcosystemSection } from "@/components/ecosystem-section"
import { FeatureShowcase } from "@/components/feature-showcase"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustTicker />
      <EcosystemSection />
      <FeatureShowcase />
      <TokenomicsSection />
      <RoadmapSection />
      <Footer />
    </main>
  )
}
