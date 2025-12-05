import Script from "next/script"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { IndustriesSection } from "@/components/industries-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <section className="mx-auto my-16 w-full max-w-6xl px-4">
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/1136121544?h=fad8830f82&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="79 Ratio Overview"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          />
        </div>
      </section>
      <ServicesOverview />
      <IndustriesSection />
      <Footer />
      <Script
        src="https://player.vimeo.com/api/player.js"
        strategy="afterInteractive"
      />
    </main>
  )
}
