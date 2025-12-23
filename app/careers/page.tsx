import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Briefcase } from "lucide-react"

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-image" style={{ backgroundImage: "url(/home-bg.png)" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/65" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight text-balance">Careers at 79 Ratio</h1>
          <p className="text-lg text-white/90 leading-relaxed text-pretty">
            We&apos;re not hiring for new roles right now, but we&apos;re always interested in meeting talented people.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border bg-card text-center">
            <CardHeader className="space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl text-card-foreground">No Current Open Positions</CardTitle>
              <CardDescription className="text-muted-foreground">
                Check back soon or drop us a note so we can reach out when new opportunities open.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
