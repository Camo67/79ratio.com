import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, CloudUpload, Database, ShieldCheck, Timer, HardDrive } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Database,
    title: "Automated Snapshots",
    description: "Block-level image backups captured as often as every 15 minutes without interrupting users.",
  },
  {
    icon: CloudUpload,
    title: "Hybrid Cloud Storage",
    description: "On-site appliances plus encrypted cloud replication for resilient, geo-diverse protection.",
  },
  {
    icon: ShieldCheck,
    title: "Immutable Backups",
    description: "WORM storage and air-gapped copies stop ransomware from tampering with your recovery points.",
  },
  {
    icon: Timer,
    title: "Verified Recovery Tests",
    description: "Automated boot verifications prove every backup can be restored before you ever need it.",
  },
]

const benefits = [
  "Meet aggressive RPO/RTO targets without overbuilding infrastructure",
  "Protect Microsoft 365, servers, endpoints, and SaaS apps in one policy",
  "Documented disaster recovery runbooks for audits and tabletop exercises",
  "Encrypted data in-flight and at rest with role-based access controls",
]

const recoveryTiers = [
  {
    title: "Business Essentials",
    rto: "2 hours",
    rpo: "4 hours",
    highlights: ["Workstation & file server coverage", "Daily off-site replication", "Managed quarterly testing"],
  },
  {
    title: "Mission Critical",
    rto: "30 minutes",
    rpo: "30 minutes",
    highlights: ["Continuous replication", "Virtualization failover", "Co-managed runbooks"],
    badge: "Most Popular",
  },
  {
    title: "Regulated & Enterprise",
    rto: "15 minutes",
    rpo: "5 minutes",
    highlights: ["Dedicated DR site", "Compliance reporting", "Joint incident response playbooks"],
  },
]

const metrics = [
  { value: "15 min", label: "Average Failover Time" },
  { value: "12 TB", label: "Data Recovered Last Quarter" },
  { value: "0", label: "Ransom Paid by Clients" },
]

export default function BackupRecoveryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="mb-4">Backup & Recovery</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Rapid Recovery When <span className="text-primary">Minutes Matter</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Safeguard every workload with policy-driven backups, immutable storage, and disaster recovery experts
                  who practice every scenario with you.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/contact">Design My DR Plan</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6">
                {metrics.map((metric) => (
                  <div key={metric.label} className="text-center border border-border rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary">{metric.value}</div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
                <img
                  src="/modern-it-infrastructure-and-server-room.jpg"
                  alt="Modern server room with redundant backup appliances"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Resilient Backup Platform</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Layered technology and proven processes keep your data protected whether it lives on-premises, in the
              cloud, or across branch locations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-border bg-card">
                  <CardHeader className="flex flex-row items-start space-y-0 space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">{feature.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Documented & Tested</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              We partner with your team to script every recovery workflow, then run live-fire exercises so there are no
              surprises when a disruption strikes.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6">
            {recoveryTiers.map((tier) => (
              <Card key={tier.title} className="border-border bg-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl text-card-foreground">{tier.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        RPO {tier.rpo} • RTO {tier.rto}
                      </CardDescription>
                    </div>
                    {tier.badge && (
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary border border-primary px-3 py-1 rounded-full">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.highlights.map((item) => (
                      <li key={item} className="flex items-start space-x-2 text-muted-foreground">
                        <HardDrive className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Ready for Compliance Audits</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Detailed reporting, immutable retention, and tamper-proof audit logs satisfy HIPAA, SOC 2, CJIS, NIST, and
            insurance reviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/contact">Request a Recovery Drill</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="/schedule-call">Talk with an Engineer</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
