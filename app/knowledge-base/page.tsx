import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpenCheck, Headphones, Search, Wrench } from "lucide-react"

const topics = [
  {
    icon: BookOpenCheck,
    title: "FAQs",
    description: "Quick answers to common technology and service questions.",
  },
  {
    icon: Wrench,
    title: "Tutorials",
    description: "Step-by-step guides that help you configure, troubleshoot, and optimize tools.",
  },
  {
    icon: Headphones,
    title: "Support Tips",
    description: "Best practices from our service desk to keep your day running smoothly.",
  },
]

export default function KnowledgeBasePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-32 text-white">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/Image_fx%20(21).jpg")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/35 to-black/55" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge className="mx-auto w-fit bg-primary/20 text-primary border border-primary/30">Knowledge Base</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Find Quick Answers to Common Technology Questions
          </h1>
          <p className="text-lg text-white leading-relaxed text-pretty">
            Our knowledge base offers FAQs, tutorials, and troubleshooting tips to support your daily technology usage
            and optimize your experience.
          </p>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white w-5 h-5" />
            <Input className="pl-12 py-6 text-base bg-white/10 border-white/30 text-white placeholder:text-white" placeholder="Search the knowledge base..." />
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {topics.map((topic) => {
            const Icon = topic.icon
            return (
              <Card key={topic.title} className="border-border bg-card">
                <CardHeader className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{topic.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{topic.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Need extra help?</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Search the knowledge base or contact support for personalized guidance from our engineers.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
