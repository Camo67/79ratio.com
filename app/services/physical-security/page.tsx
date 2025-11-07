import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Activity,
  AlertTriangle,
  Building,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  HeartPulse,
  Lock,
  MapPin,
  Shield,
  Users,
  Waves,
} from "lucide-react"

const solutions = [
  {
    icon: Lock,
    title: "Smart Access Control",
    description: "Biometrics, key cards, and visitor management tied into role-based policies and live reporting.",
  },
  {
    icon: Camera,
    title: "HD Surveillance & Storage",
    description: "24/7 high-definition video with cloud archives, AI analytics, and secure remote viewing.",
  },
  {
    icon: AlertTriangle,
    title: "Intrusion Detection & Alerts",
    description: "Instant notifications for forced entry, glass break, duress, and motion anomalies.",
  },
  {
    icon: Waves,
    title: "Perimeter & Environmental Monitoring",
    description: "Sensors track perimeter breaches, temperature, humidity, and water to protect equipment.",
  },
  {
    icon: Users,
    title: "Emergency Planning & Safety Protocols",
    description: "Tailored evacuation plans, panic workflows, and mass notification drills.",
  },
  {
    icon: ClipboardCheck,
    title: "Security Audits & Compliance",
    description: "Scheduled inspections, documentation, and remediation guidance for every framework.",
  },
]

const differentiators = [
  {
    stat: "0",
    label: "Unmonitored blind spots",
    detail: "Layered sensors and video eliminate coverage gaps inside and outside your facilities.",
  },
  {
    stat: "15 min",
    label: "Average incident response",
    detail: "Co-managed playbooks ensure rapid action with clear audit trails.",
  },
  {
    stat: "24/7",
    label: "Operations center",
    detail: "Security specialists watch alerts, maintain systems, and coordinate escalations.",
  },
]

const industries = [
  {
    icon: Factory,
    title: "Manufacturing & Logistics",
    description: "Safeguard production lines, warehouses, and yards with rugged sensors and access zones.",
  },
  {
    icon: HeartPulse,
    title: "Clinics & Healthcare",
    description: "Protect patients and pharmaceuticals with HIPAA-aligned controls and monitoring.",
  },
  {
    icon: Building,
    title: "Commercial Offices",
    description: "Lobby management, visitor vetting, and executive protection built into daily workflow.",
  },
  {
    icon: MapPin,
    title: "Nonprofits & Legal Practices",
    description: "Budget-aware protection that still satisfies grant, donor, and regulatory commitments.",
  },
]

export default function PhysicalSecurityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-black text-foreground">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-24 left-1/3 h-72 w-72 bg-primary blur-[160px]" />
          <div className="absolute top-10 right-0 h-80 w-80 bg-accent blur-[160px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <Badge variant="secondary" className="bg-primary/15 text-primary border border-primary/40">
            Physical Security
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance text-primary">
            Defend Assets, People, and Peace of Mind with Advanced Physical Security
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            From access control to real-time surveillance and incident response, 79Ratio shields your workspace against
            every physical threat—so you can focus on growth, not worry.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/contact">Book My Assessment</Link>
          </Button>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary w-fit">What the Product Is</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Integrated Protection for Facilities, People, and Data
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              79Ratio’s Physical Security service delivers a complete suite of protections for your property, team, data,
              and critical infrastructure. Our integrated approach utilizes advanced access control, video surveillance,
              intrusion alarms, environmental monitoring, and emergency protocols—all customized for your industry and risk
              profile.
            </p>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
              <p className="text-muted-foreground">
                Physical and digital safeguards converge in a single command view so leaders see risk in real time.
              </p>
            </div>
          </div>
          <Card className="border-primary/20 bg-card shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Holistic Coverage</CardTitle>
              <CardDescription className="text-muted-foreground">
                Every entry point, zone, and incident workflow accounted for.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "Unified monitoring dashboards for guards and executives",
                "Automated incident tickets with photos, logs, and timelines",
                "Maintenance schedules that keep hardware and sensors reliable",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary">Our Solutions Include</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Always-On Physical Defense</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Smart access control, live surveillance, and orchestrated response plans tailored to your facilities.
            </p>
          </div>
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

      {/* Why Choose */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary w-fit">Why 79Ratio</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Why Organizations Trust 79Ratio Physical Security
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Physical breaches can shut down business, risk lives, and damage your reputation—79Ratio prevents losses and
              ensures safety with systems that deter intruders, respond rapidly, and provide clear audit trails. We simplify
              compliance, enhance employee confidence, and maintain uninterrupted operations.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1" />
                <p className="text-muted-foreground">Layered deterrence—from parking lots to server rooms—configured for each site.</p>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-primary mt-1" />
                <p className="text-muted-foreground">Analytics highlight trends, false alarms, and maintenance needs automatically.</p>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-1" />
                <p className="text-muted-foreground">Security teams, facilities, and executives share the same real-time context.</p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {differentiators.map((item) => (
              <Card key={item.label} className="bg-card border-border text-center">
                <CardContent className="py-8 px-4 space-y-3">
                  <p className="text-3xl font-bold text-primary">{item.stat}</p>
                  <p className="text-sm font-medium text-card-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <Badge className="bg-primary/10 text-primary">Trusted Across Industries</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Protection Tailored to Your World</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Whether you’re a manufacturer, clinic, nonprofit, or legal practice, our expertise in custom security means
              your assets and people are always protected—day and night.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <Card key={industry.title} className="border-border bg-card">
                  <CardHeader className="flex flex-row gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{industry.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{industry.description}</CardDescription>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Protect What Matters Most</h2>
          <p className="text-lg text-primary-foreground/90 text-pretty">
            Protect what matters most—schedule a no-obligation security walk-through with our experts today.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/contact">Book My Assessment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
