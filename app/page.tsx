import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { IndustriesSection } from "@/components/industries-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <IndustriesSection />
      <Footer />
    </main>
  )
}
