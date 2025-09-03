import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Cpu, Workflow, BarChart3, Users } from "lucide-react"

export default function DigitalSystemsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/home-bg.png" alt="Digital Systems Background" fill className="object-cover animate-slow-drift" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Image
              src="/79ratio-logo.webp"
              alt="79Ratio Logo"
              width={200}
              height={67}
              className="mx-auto mb-8"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Digital Transformation</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Modernize your business operations with strategic digital transformation that drives efficiency, innovation,
            and competitive advantage.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Your Digital Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Digital Services */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/design-bg.png"
            alt="Digital Services Background"
            fill
            className="object-cover animate-slow-drift"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transform Your Business Operations</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our digital transformation services help you leverage cutting-edge technology to streamline processes,
                enhance productivity, and create new opportunities for growth.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Cpu,
                    title: "System Modernization",
                    description: "Upgrade legacy systems with modern, scalable solutions",
                  },
                  {
                    icon: Workflow,
                    title: "Process Automation",
                    description: "Automate repetitive tasks to increase efficiency",
                  },
                  {
                    icon: BarChart3,
                    title: "Data Analytics",
                    description: "Transform data into actionable business insights",
                  },
                  {
                    icon: Users,
                    title: "Digital Collaboration",
                    description: "Enable seamless remote and hybrid work environments",
                  },
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { metric: "40%", label: "Efficiency Increase" },
                { metric: "60%", label: "Cost Reduction" },
                { metric: "99.9%", label: "System Uptime" },
                { metric: "24/7", label: "Support Coverage" },
              ].map((stat, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
