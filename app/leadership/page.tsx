import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
          <Badge className="mx-auto w-fit bg-primary/20 text-primary border border-primary/30">Leadership</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Meet the leaders guiding 79 Ratio towards innovation and excellence.
          </h1>
          <p className="text-lg text-white leading-relaxed text-pretty">
            Our leadership team brings decades of technology and industry expertise. They foster a culture of
            innovation, partnership, and integrity—ensuring every solution is built on accountability and measurable
            impact.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/contact">Get to Know Our Leaders</Link>
          </Button>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Leadership profiles coming soon</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              We&apos;re finalizing the stories, experience, and vision of our executive team. Check back soon to meet the
              leaders guiding 79 Ratio.
            </p>
          </div>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">What to expect</CardTitle>
              <CardDescription className="text-muted-foreground">
                Deep dives on expertise, focus areas, and how each leader supports your success.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-left">
              <p className="text-sm text-muted-foreground">
                Want to connect now? Our team is available to talk through your goals and pair you with the right executive
                sponsor.
              </p>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/contact">Talk with us today</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Get to know our leaders and their vision for your success.
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Share your goals with us and we&apos;ll connect you with the right executive sponsor to guide your journey.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/contact">Start the Conversation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
