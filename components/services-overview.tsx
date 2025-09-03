import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Shield, Cloud, HardDrive, Headphones, Settings, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Monitor,
    title: "24/7/365 Monitoring",
    description:
      "Proactive network monitoring and threat detection to prevent issues before they impact your business operations.",
    features: ["Real-time alerts", "Performance optimization", "Threat detection"],
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security measures including firewalls, endpoint protection, and compliance management.",
    features: ["Multi-layered protection", "Compliance support", "Security training"],
  },
  {
    icon: Cloud,
    title: "Cloud Management",
    description:
      "Expert cloud migration, optimization, and management services for Microsoft 365, AWS, and Azure platforms.",
    features: ["Cloud migration", "Cost optimization", "Performance tuning"],
  },
  {
    icon: HardDrive,
    title: "Backup & Recovery",
    description: "Reliable data protection with automated backups and rapid disaster recovery solutions.",
    features: ["Automated backups", "Quick recovery", "Business continuity"],
  },
  {
    icon: Headphones,
    title: "Help Desk Support",
    description: "Responsive technical support with local expertise and personalized service for your team.",
    features: ["Local support", "Quick response", "Expert technicians"],
  },
  {
    icon: Settings,
    title: "IT Strategy & Planning",
    description: "Strategic technology planning and implementation to align IT with your business objectives.",
    features: ["Technology roadmap", "Budget planning", "Growth strategy"],
  },
]

export function ServicesOverview() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift"
          style={{
            backgroundImage: "url(/digital-bg.png)",
            filter: "brightness(0.15)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />

        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/6 w-1 h-1 bg-primary rounded-full animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-1/2 right-1/5 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-slow"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-primary/70 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white text-balance">Comprehensive IT Solutions</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-pretty">
            From proactive monitoring to strategic planning, we provide the complete IT infrastructure your business
            needs to thrive in today's digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border bg-card/90 backdrop-blur-sm hover:bg-card"
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-black">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 mt-2">{service.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/services" className="inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
