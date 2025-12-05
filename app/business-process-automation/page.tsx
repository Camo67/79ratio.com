import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Bot, CheckCircle2, Repeat } from "lucide-react"

const benefits = [
  {
    icon: Activity,
    title: "70% Faster Execution",
    description: "Automate repetitive work, approvals, and escalations so teams focus on strategy.",
  },
  {
    icon: Repeat,
    title: "Integrated Workflows",
    description: "Connect cloud apps, ERP, CRM, and legacy systems into one continuous process.",
  },
  {
    icon: Bot,
    title: "Low-Code + AI",
    description: "Pair low-code automation with intelligent routing, forms, and document processing.",
  },
]

const capabilities = [
  "Discovery workshops that map and prioritize automation opportunities",
  "Secure connectors for Microsoft 365, Dynamics, Salesforce, and custom systems",
  "Human-in-the-loop checkpoints to maintain oversight and compliance",
  "Dashboards that visualize cycle time, cost savings, and SLA health",
]

export default function BusinessProcessAutomationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-black text-foreground">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/Image_fx%20(14).jpg")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/35 to-black/55" />
        </div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-24 left-1/3 h-72 w-72 bg-primary blur-[150px]" />
          <div className="absolute top-10 right-0 h-80 w-80 bg-accent blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <Badge variant="secondary" className="bg-primary/15 text-primary border border-primary/40">
            Business Process Automation
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance text-primary">
            Accelerate Your Business with Intelligent Process Automation
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
            Automate repetitive tasks, integrate workflows, and enhance productivity with 79Ratio’s business process
            automation services. Experience up to 70% time savings and reduce errors while freeing your team to focus on
            strategic initiatives.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/contact">Schedule a Demo Today</Link>
          </Button>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Automate with confidence from discovery to scale.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              We audit existing processes, design intelligent workflows, and deliver secure automations across finance,
              operations, HR, and service delivery. Our specialists blend low-code tools, AI, and integration best
              practices to modernize the way work gets done.
            </p>
            <ul className="space-y-3">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title} className="border-border bg-card">
                  <CardHeader className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{benefit.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{benefit.description}</CardDescription>
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
            Transform your operations with automation.
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Ready to remove bottlenecks, increase accuracy, and unlock new capacity? Our experts are here to help.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/contact">Schedule a Demo</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
