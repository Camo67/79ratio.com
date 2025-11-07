import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { teamMembers } from "@/lib/team-data"

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-32 text-white">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/Image_fx (6).jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge className="mx-auto w-fit bg-primary/20 text-primary border border-primary/30">Leadership</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Meet the leaders guiding 79Ratio towards innovation and excellence.
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed text-pretty">
            Our leadership team brings decades of technology and industry expertise. They foster a culture of
            innovation, partnership, and integrity—ensuring every solution is built on accountability and measurable
            impact.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/contact">Get to Know Our Leaders</Link>
          </Button>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Experience, vision, and a client-first mindset.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              From cybersecurity and cloud innovation to service delivery and support, these leaders shape the roadmap
              that keeps 79Ratio ahead.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((leader) => (
              <Card key={leader.name} className="border-border bg-card">
                <CardHeader className="space-y-3 text-center">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={`${leader.name} - ${leader.role}`}
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                  <div>
                    <CardTitle className="text-xl text-card-foreground">{leader.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{leader.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
                  <div>
                    <p className="font-medium text-card-foreground text-sm mb-2">Focus Areas</p>
                    <div className="flex flex-wrap gap-2">
                      {leader.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
