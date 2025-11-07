import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Users, Target, Award, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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

const milestones = [
  { year: "2009", event: "79Ratio Founded", description: "Started with a vision to simplify IT for businesses" },
  { year: "2012", event: "First 100 Clients", description: "Reached our first major milestone in client growth" },
  { year: "2015", event: "24/7 Operations", description: "Launched round-the-clock monitoring and support services" },
  {
    year: "2018",
    event: "Cloud Transformation",
    description: "Became a leading cloud migration and management partner",
  },
  {
    year: "2021",
    event: "Cybersecurity Focus",
    description: "Expanded security services in response to growing threats",
  },
  { year: "2024", event: "500+ Clients", description: "Celebrating over 500 satisfied business partnerships" },
]

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift"
            style={{
              backgroundImage: "url(/Image_fx (21).jpg)",
              filter: "brightness(0.35)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85" />

          {/* Fibonacci spiral floating elements */}
          <div className="absolute inset-0">
            <div
              className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-80"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-float-slow opacity-60"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-primary/40 rounded-full animate-float opacity-50"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-float-slow opacity-70"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute top-3/4 left-1/2 w-2.5 h-2.5 bg-primary/60 rounded-full animate-float opacity-40"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-12">
            {/* Logo with Fibonacci spiral animation */}
            <div className="flex justify-center">
              <Image
                src="/79ratio-logo.webp"
                alt="79Ratio Logo"
                width={300}
                height={100}
                className="h-16 w-auto animate-fibonacci-spiral"
                priority
              />
            </div>

            <div className="space-y-8 max-w-4xl">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
                  Discover the story behind 79Ratio, our mission to empower businesses, and the values that drive us to
                  innovate digital solutions.
                </h1>
                <p className="text-gray-200 leading-relaxed text-pretty text-lg">
                  We exist to fuel growth, enhance security, and streamline operations for organizations that deserve
                  better technology partners.
                </p>
                <p className="text-gray-300 leading-relaxed text-pretty text-base mt-4">
                  At 79Ratio, we are dedicated to providing tailored technology solutions that fit each client&apos;s
                  unique needs. Our experienced team combines deep expertise with a client-first approach so every
                  engagement is built on understanding, trust, and measurable value.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/contact">Connect with Us Today</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-black"
                >
                  <Link href="/leadership">Meet Our Leadership</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-cosmic-motion"
            style={{
              backgroundImage: "url(/digital-bg.png)",
              filter: "brightness(0.15)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance">
              Our Journey: A Timeline of Innovation
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto text-pretty">
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
                <div className="text-gray-300 text-sm">{milestone.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Culture: Empowering Our Teams to Empower Clients
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our success comes from investing in our people and fostering an environment of continuous learning and
              innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={index}
                  className="text-center border-border bg-card/90 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                  }}
                >
                  <CardHeader className="space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto border border-primary/30">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Interactive checklist */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-primary/20">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">Innovation Mindset</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">Continuous Learning</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">People-Driven Success</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance">
                  Mission & Vision: Measurable Success Through People
                </h2>
                <div className="space-y-4 text-gray-200 leading-relaxed">
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
                  className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-black"
                >
                  <Link href="/contact">Start Your Journey</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-4 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-white font-semibold">24/7/365</div>
                  <div className="text-gray-300 text-sm">Always Available</div>
                </div>
                <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-white font-semibold">99.9%</div>
                  <div className="text-gray-300 text-sm">Uptime SLA</div>
                </div>
                <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-4 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-white font-semibold">500+</div>
                  <div className="text-gray-300 text-sm">Happy Clients</div>
                </div>
                <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-4 text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-white font-semibold">15+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-cosmic-motion"
            style={{
              backgroundImage: "url(/home-bg.png)",
              filter: "brightness(0.25)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Logo morph with Fibonacci spiral completion */}
            <div className="flex justify-center">
              <Image
                src="/79ratio-logo.webp"
                alt="79Ratio Logo"
                width={200}
                height={67}
                className="h-12 w-auto animate-fibonacci-spiral"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance">
                Ready to Experience People-First Technology?
              </h2>
              <p className="text-xl text-gray-200 text-pretty">
                Join hundreds of satisfied clients who trust us with their technology needs. Let's collaborate, learn,
                and grow together.
              </p>

              {/* Brand statement */}
              <div className="py-6 border-t border-b border-primary/20">
                <p className="text-2xl text-primary font-bold">Ratio79. Precision. Sustainability. Excellence.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/contact">Join the Journey — Collaborate, Learn, and Grow with 79ratio</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  <Link href="/leadership">Meet Our Leadership</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
