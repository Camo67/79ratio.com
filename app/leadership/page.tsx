import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-32 text-white">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-image"
            style={{ backgroundImage: 'url("/Image_fx%20(6).jpg")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/35 to-black/55" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 hero-text-panel">
          <Badge className="mx-auto w-fit bg-primary/20 text-primary border border-primary/30">Coming Soon</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Leadership profiles coming soon
          </h1>
          <p className="text-lg text-white leading-relaxed text-pretty">
            We&apos;re finalizing the stories, experience, and vision of our executive team. Check back soon to meet the
            leaders guiding 79 Ratio.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
