import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Users, Target, Award, Clock, TrendingUp } from "lucide-react"
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
  { number: "6+", label: "Years Experience" },
  { number: "500+", label: "Satisfied Clients" },
]

const milestones = [
  { year: "2018", event: "79 Ratio Founded", description: "Started with a vision to simplify IT for businesses" },
  { year: "2020", event: "First 100 Clients", description: "Reached our first major milestone in client growth" },
  { year: "2021", event: "24/7 Operations", description: "Launched round-the-clock monitoring and support services" },
  {
    year: "2022",
    event: "Cloud Transformation",
    description: "Became a leading cloud migration and management partner",
  },
  {
    year: "2023",
    event: "Cybersecurity Focus",
    description: "Expanded security services in response to growing threats",
  },
  { year: "2024", event: "500+ Clients", description: "Celebrating over 500 satisfied business partnerships" },
]

const cultureValues = [
  {
    icon: Users,
    title: "Empowering Teams",
    description:
      "We invest in our people, fostering continuous learning and professional growth to better serve our clients.",
  },
  {
    icon: Shield,
    title: "Innovation Mindset",
    description:
      "We embrace new technologies and methodologies to deliver cutting-edge solutions that drive business success.",
  },
  {
    icon: Target,
    title: "People-Driven Success",
    description: "Our success is measured by the success of our clients and the satisfaction of our team members.",
  },
  {
    icon: Award,
    title: "Continuous Learning",
    description: "We stay ahead of technology trends through ongoing education and industry certifications.",
  },
]

const highlightPoints = ["Innovation Mindset", "Continuous Learning", "People-Driven Success"]

const missionStats = [
  {
    icon: Clock,
    label: "24/7/365",
    detail: "Always Available",
  },
  {
    icon: TrendingUp,
    label: "99.9%",
    detail: "Uptime SLA",
  },
  {
    icon: Users,
    label: "500+",
    detail: "Happy Clients",
  },
  {
    icon: Award,
    label: "6+",
    detail: "Years Experience",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen text-white">
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
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/70" />

          {/* Floating Elements Animation */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift opacity-30"
              style={{
                backgroundImage: "url(/about-bg.png)",
              }}
            />
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
                  Your Trusted IT Partner Since <span className="text-primary">2018</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed text-pretty">
                  At 79 Ratio, we believe technology should empower your business, not complicate it. We deliver
                  comprehensive IT solutions with a personal touch, ensuring your systems run smoothly so you can focus
                  on what matters most.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <div className="text-white/70 text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift"
            style={{
              backgroundImage: "url(/digital-bg.png)",
              filter: "brightness(0.15)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance">Our Journey of Innovation</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto text-pretty">
              From humble beginnings to industry leadership, our story is one of continuous growth and client success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:bg-black/60 transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                <div className="text-lg font-semibold text-white mb-2">{milestone.event}</div>
                <div className="text-white/70 text-sm">{milestone.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance">Culture: Empowering Our Teams</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto text-pretty">
              Our success comes from investing in our people and fostering an environment of continuous learning and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={index}
                  className="text-center border-border bg-card/90 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:scale-105"
                >
                  <CardHeader className="space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-primary/20">
              {highlightPoints.map((point) => (
                <div key={point} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-white font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift"
            style={{
              backgroundImage: "url(/cyber-bg.jpeg)",
              filter: "brightness(0.2)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance">
                  Mission & Vision: Measurable Success Through People
                </h2>
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    <strong className="text-primary">Our Mission:</strong> To empower businesses through strategic
                    technology solutions that drive measurable results, delivered by a team that puts people first.
                  </p>
                  <p>
                    <strong className="text-primary">Our Vision:</strong> To be the most trusted technology partner,
                    known for our commitment to client success, team empowerment, and sustainable innovation.
                  </p>
                  <p>
                    We measure our success not just in uptime and response times, but in the growth and satisfaction of
                    our clients and the professional development of our team members.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/difference">See Our Difference</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-transparent border-white text-white hover:bg-black hover:text-white hover:border-white"
                >
                  <Link href="/contact">Start Your Journey</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {missionStats.map((stat) => {
                  const IconComponent = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-4 text-center"
                    >
                      <IconComponent className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-white font-semibold">{stat.label}</div>
                      <div className="text-white/70 text-sm">{stat.detail}</div>
                    </div>
                  )
                })}
              </div>
            </div>
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />

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
              <div className="space-y-4 text-white/90 leading-relaxed">
                <p>
                  Founded in 2018, 79 Ratio emerged from a simple belief: businesses deserve IT partners who understand
                  their unique challenges and deliver solutions that truly work. What started as a small team of
                  passionate technologists has grown into a trusted partner for hundreds of organizations across law,
                  healthcare, nonprofit, and manufacturing sectors.
                </p>
                <p>
                  Our name, "79 Ratio," reflects our commitment to the optimal balance between technology and business
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
                alt="79 Ratio's modern IT infrastructure"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance">Our Core Values</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
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
                    <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70">{value.description}</CardDescription>
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
            Ready to Experience the 79 Ratio Difference?
          </h2>
          <p className="text-xl text-white/90 text-pretty">
            Join hundreds of satisfied clients who trust us with their technology needs. Let's discuss how we can help
            your business thrive.
          </p>
          <div className="py-6 border-t border-b border-primary/20">
            <p className="text-2xl text-primary font-bold">79 RATIO. Precision. Sustainability. Excellence.</p>
          </div>
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
