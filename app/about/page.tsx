import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Users, Target, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const values = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "We prioritize the security and confidentiality of your data above all else, implementing enterprise-grade protection measures.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description:
      "We work as an extension of your team, understanding your unique needs and delivering personalized solutions.",
  },
  {
    icon: Target,
    title: "Proactive Solutions",
    description: "Our proactive monitoring and maintenance prevent issues before they impact your business operations.",
  },
  {
    icon: Award,
    title: "Excellence Driven",
    description:
      "We maintain the highest standards of service quality and continuously invest in the latest technologies.",
  },
]

const stats = [
  { number: "24/7/365", label: "Monitoring & Support" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "15+", label: "Years Experience" },
  { number: "500+", label: "Satisfied Clients" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift"
            style={{
              backgroundImage: "url(/digital-bg.png)",
              filter: "brightness(0.2)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85" />

          {/* Floating Elements Animation */}
          <div className="absolute inset-0">
            <div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-float-slow"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/60 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
                  Your Trusted IT Partner Since <span className="text-primary">2009</span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed text-pretty">
                  At 79Ratio, we believe technology should empower your business, not complicate it. We deliver
                  comprehensive IT solutions with a personal touch, ensuring your systems run smoothly so you can focus
                  on what matters most.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/contact">Partner With Us</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-black"
                >
                  <Link href="/team">Meet Our Team</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
                <Image
                  src="/professional-it-team-collaborating-in-modern-offic.jpg"
                  alt="79Ratio team collaborating on IT solutions"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift"
            style={{
              backgroundImage: "url(/compliance-bg.png)",
              filter: "brightness(0.15)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-200 text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift"
            style={{
              backgroundImage: "url(/cyber-bg.jpeg)",
              filter: "brightness(0.2)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85" />

          <div className="absolute inset-0">
            <div
              className="absolute top-1/5 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-primary/70 rounded-full animate-float-slow"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance">
                Our Story: Built on Trust and Excellence
              </h2>
              <div className="space-y-4 text-gray-200 leading-relaxed">
                <p>
                  Founded in 2009, 79Ratio emerged from a simple belief: businesses deserve IT partners who understand
                  their unique challenges and deliver solutions that truly work. What started as a small team of
                  passionate technologists has grown into a trusted partner for hundreds of organizations across law,
                  healthcare, nonprofit, and manufacturing sectors.
                </p>
                <p>
                  Our name, "79Ratio," reflects our commitment to the optimal balance between technology and business
                  needs. We don't just implement solutions – we craft technology strategies that align with your goals,
                  budget, and growth plans.
                </p>
                <p>
                  Today, we're proud to offer comprehensive IT services backed by 24/7/365 monitoring, proactive
                  support, and a team that treats your success as our own. Every client relationship is built on
                  transparency, reliability, and a genuine commitment to helping your business thrive.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/modern-it-infrastructure-and-server-room.jpg"
                alt="79Ratio's modern IT infrastructure"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              These principles guide everything we do, from initial consultation to ongoing support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={index}
                  className="text-center border-border bg-card/90 backdrop-blur-sm hover:bg-card transition-all duration-300"
                >
                  <CardHeader className="space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-black">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift"
            style={{
              backgroundImage: "url(/home-bg.png)",
              filter: "brightness(0.25)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance">
              Ready to Experience the 79Ratio Difference?
            </h2>
            <p className="text-xl text-gray-200 text-pretty">
              Join hundreds of satisfied clients who trust us with their technology needs. Let's discuss how we can help
              your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
