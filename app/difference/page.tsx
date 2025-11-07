import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Shield, Sparkles, Target } from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Strategy-First Delivery",
    description: "Every engagement starts with your goals, KPIs, and industry pressures—then we align the tech.",
  },
  {
    icon: Shield,
    title: "Security Everywhere",
    description: "Cyber, physical, and compliance controls are woven into every build, not bolted on at the end.",
  },
  {
    icon: Activity,
    title: "Proactive Operations",
    description: "Monitoring, automation, and incident playbooks reduce disruptions and accelerate improvement.",
  },
  {
    icon: Sparkles,
    title: "Tailored Ecosystems",
    description: "Healthcare, legal, nonprofit, and manufacturing teams get solutions tuned to their realities.",
  },
]

export default function DifferencePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-black text-foreground">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/Image_fx (18).jpg)" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90" />
        </div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-24 left-1/3 h-72 w-72 bg-primary blur-[160px]" />
          <div className="absolute top-16 right-0 h-80 w-80 bg-accent blur-[140px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <Badge variant="secondary" className="bg-primary/15 text-primary border border-primary/40">
            Difference
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance text-primary">
            What Sets 79Ratio Apart in the World of Digital Solutions
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
            79Ratio is not just another technology provider—we deliver custom, scalable, and secure digital ecosystems
            that align with your goals. Fewer disruptions. Faster innovation. Measurable results for healthcare, law,
            manufacturing, and nonprofit teams.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/contact">Discover the 79Ratio Advantage</Link>
          </Button>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            We build resilient environments that keep your teams moving. Our proactive approach blends managed services,
            automation, and advisory support so technology becomes an accelerant instead of a bottleneck. From secure
            collaboration spaces to industry-specific compliance, we design the entire experience around how your people
            actually work.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Engagements stay collaborative—executives gain clarity through shared roadmaps, operations teams get guided
            change management, and end users feel supported with training plus always-on response.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <Badge className="bg-primary/10 text-primary">Our Difference</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">How We Deliver More</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <Card key={pillar.title} className="border-border bg-card">
                  <CardHeader className="flex flex-row gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{pillar.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{pillar.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to transform your digital landscape?</h2>
          <p className="text-lg text-primary-foreground/90 text-pretty">
            Discover the 79Ratio advantage and how we can modernize your operations with confidence.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/contact">Let&apos;s Talk</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
