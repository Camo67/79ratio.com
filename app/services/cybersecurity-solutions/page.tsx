import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Users, FileCheck, AlertCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift"
            style={{
              backgroundImage: "url(/contact-bg.jpeg)",
              filter: "brightness(0.15)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85" />

          <div className="absolute inset-0">
            <div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute top-1/2 right-1/5 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-slow"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-1/3 left-1/6 w-1 h-1 bg-primary/70 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Image
              src="/79ratio-logo.webp"
              alt="79Ratio Logo"
              width={200}
              height={67}
              className="mx-auto mb-8"
              priority
            />
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Cybersecurity Solutions</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Advanced <span className="text-primary">Cybersecurity</span> Protection
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed text-pretty max-w-3xl mx-auto">
              Protect your business with comprehensive cybersecurity solutions including firewalls, endpoint protection,
              and compliance management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">Secure Your Business</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Link href="/contact">Security Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Multi-Layered Security Protection</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our cybersecurity solutions provide comprehensive protection against modern threats with industry-leading
              tools and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Advanced Firewalls",
                description:
                  "Next-generation firewalls with deep packet inspection and threat intelligence integration.",
              },
              {
                icon: Lock,
                title: "Endpoint Protection",
                description: "Comprehensive endpoint security with real-time threat detection and automated response.",
              },
              {
                icon: Eye,
                title: "24/7 Monitoring",
                description: "Continuous security monitoring with expert analysis and immediate threat response.",
              },
              {
                icon: Users,
                title: "Security Training",
                description: "Employee cybersecurity awareness training to prevent social engineering attacks.",
              },
              {
                icon: FileCheck,
                title: "Compliance Management",
                description: "Ensure compliance with industry regulations including HIPAA, PCI-DSS, and SOX.",
              },
              {
                icon: AlertCircle,
                title: "Incident Response",
                description: "Rapid incident response and forensic analysis to minimize damage and recovery time.",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
