import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Layers, Puzzle, ServerCog } from "lucide-react"

const solutions = [
  {
    icon: Code2,
    title: "Application Development",
    description: "Cloud-native and hybrid apps tailored to the workflows that matter most to your teams.",
  },
  {
    icon: Puzzle,
    title: "System Integrations",
    description: "Connect Microsoft 365, Dynamics, legacy ERPs, and line-of-business tools with modern APIs.",
  },
  {
    icon: Layers,
    title: "Experience Design",
    description: "Intuitive interfaces, portals, and automation that keep adoption high across every device.",
  },
  {
    icon: ServerCog,
    title: "Modernization & Support",
    description: "Refactor or extend mission-critical platforms with ongoing optimization and governance.",
  },
]

export default function TechnologyDevelopmentServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-24 left-1/3 h-72 w-72 bg-primary blur-[150px]" />
          <div className="absolute top-12 right-0 h-80 w-80 bg-accent blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
            Technology Development Services
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Custom Technology Solutions Tailored to Your Business Needs
          </h1>
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed text-pretty">
            From application development to system integrations, 79Ratio builds bespoke solutions that enhance
            operational efficiency and support your growth. Our expertise spans Microsoft environments, web platforms,
            and emerging technologies.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty text-center">
            Whether you need to extend Microsoft Power Platform, launch a new SaaS experience, or integrate on-prem and
            cloud systems, our architects and developers become an extension of your team. We pair modern delivery
            methods with secure coding practices and ongoing support so every deployment stays resilient.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution) => {
              const Icon = solution.icon
              return (
                <Card key={solution.title} className="border-border bg-card h-full">
                  <CardHeader className="flex flex-row gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{solution.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{solution.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Start your custom development project with us.
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Share your requirements and we&apos;ll design a roadmap that accelerates delivery while protecting your
            investment.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/contact">Contact Our Experts</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
