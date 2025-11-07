import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, Lightbulb, Presentation } from "lucide-react"

const resources = [
  {
    icon: FileText,
    title: "Whitepapers",
    description: "Deep dives into cloud modernization, cybersecurity, and compliance strategies.",
  },
  {
    icon: Presentation,
    title: "Case Studies",
    description: "See how peers in healthcare, law, nonprofits, and manufacturing achieved measurable ROI.",
  },
  {
    icon: Lightbulb,
    title: "How-To Guides",
    description: "Actionable checklists and templates for technology planning and governance.",
  },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-32 text-white">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/Image_fx (17).jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge className="mx-auto w-fit bg-primary/20 text-primary border border-primary/30">Resources</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Valuable Guides and Tools for Digital Transformation Success
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed text-pretty">
            Access whitepapers, case studies, and how-to guides crafted to help you navigate technology solutions
            confidently and effectively.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/contact">Download Our Latest Resources</Link>
          </Button>
        </div>
      </section>

      {/* Resource Types */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {resources.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title} className="border-border bg-card">
                <CardHeader className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{item.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Download our latest resources now.
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Need something specific? Let us curate a resource pack for your team.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/contact" className="inline-flex items-center gap-2">
              <Download className="w-4 h-4" />
              Request Resources
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
