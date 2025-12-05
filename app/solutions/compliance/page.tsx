import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, FileCheck, Lock, AlertTriangle } from "lucide-react"

export default function CompliancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/cyber-bg.jpeg" alt="Compliance Background" fill className="object-cover animate-slow-drift" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Image
              src="/79ratio-logo.webp"
              alt="79 Ratio Logo"
              width={200}
              height={67}
              className="mx-auto mb-8"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Compliance Solutions</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Navigate complex regulatory requirements with confidence. Our compliance solutions ensure your organization
            meets industry standards while maintaining operational efficiency.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Assess Compliance Needs
          </Button>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/compliance-bg.png" alt="Standards Background" fill className="object-cover animate-slow-drift" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industry Compliance Standards</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help organizations achieve and maintain compliance across various industry regulations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "HIPAA",
                description: "Healthcare data protection and privacy compliance",
                industries: ["Healthcare", "Medical Practices"],
              },
              {
                icon: FileCheck,
                title: "SOX",
                description: "Financial reporting and corporate governance standards",
                industries: ["Finance", "Public Companies"],
              },
              {
                icon: Lock,
                title: "GDPR",
                description: "European data protection and privacy regulations",
                industries: ["All Industries", "EU Operations"],
              },
              {
                icon: AlertTriangle,
                title: "PCI DSS",
                description: "Payment card industry data security standards",
                industries: ["Retail", "E-commerce"],
              },
            ].map((standard, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <standard.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{standard.title}</h3>
                  <p className="text-gray-300 mb-4">{standard.description}</p>
                  <div className="space-y-1">
                    {standard.industries.map((industry, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-primary bg-primary/20 rounded-full px-3 py-1 inline-block mr-2"
                      >
                        {industry}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
