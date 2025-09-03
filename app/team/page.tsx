import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Award, Users, Clock, Target } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    bio: "With over 15 years in enterprise IT, Michael leads our technical strategy and ensures we stay ahead of emerging technologies.",
    specialties: ["Cloud Architecture", "Cybersecurity", "Strategic Planning"],
    image: "/professional-male-cto-in-business-attire.jpg",
  },
  {
    name: "Sarah Chen",
    role: "Director of Client Services",
    bio: "Sarah ensures every client receives exceptional service and support. Her background in healthcare IT brings valuable compliance expertise.",
    specialties: ["Client Relations", "HIPAA Compliance", "Project Management"],
    image: "/professional-female-director-in-business-attire.jpg",
  },
  {
    name: "David Thompson",
    role: "Senior Network Engineer",
    bio: "David's expertise in network infrastructure and security keeps our clients' systems running smoothly and securely 24/7.",
    specialties: ["Network Security", "Infrastructure Design", "Monitoring Systems"],
    image: "/professional-male-network-engineer.jpg",
  },
  {
    name: "Lisa Martinez",
    role: "Cybersecurity Specialist",
    bio: "Lisa protects our clients from evolving cyber threats with cutting-edge security solutions and comprehensive training programs.",
    specialties: ["Threat Detection", "Security Training", "Compliance Audits"],
    image: "/professional-female-cybersecurity-specialist.jpg",
  },
  {
    name: "James Wilson",
    role: "Cloud Solutions Architect",
    bio: "James helps businesses leverage cloud technologies for improved efficiency, scalability, and cost-effectiveness.",
    specialties: ["Cloud Migration", "Azure & AWS", "Cost Optimization"],
    image: "/professional-male-cloud-architect.png",
  },
  {
    name: "Amanda Foster",
    role: "Help Desk Manager",
    bio: "Amanda leads our support team, ensuring rapid response times and exceptional customer service for all technical issues.",
    specialties: ["Technical Support", "Team Leadership", "Process Improvement"],
    image: "/professional-female-help-desk-manager.jpg",
  },
]

const teamStats = [
  {
    icon: Award,
    title: "Certified Professionals",
    description:
      "Our team holds industry certifications from Microsoft, Cisco, CompTIA, and other leading technology providers.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "We work as an integrated team, bringing diverse expertise to solve complex technology challenges.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "With 24/7/365 coverage, our team is always ready to support your business when you need it most.",
  },
  {
    icon: Target,
    title: "Results Focused",
    description: "Every team member is committed to delivering measurable results that drive your business forward.",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Meet the <span className="text-primary">79Ratio Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Our experienced professionals bring decades of combined expertise in IT strategy, cybersecurity, cloud
              solutions, and technical support. Get to know the people dedicated to your success.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-2">{stat.title}</h3>
                    <p className="text-primary-foreground/80 text-sm">{stat.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Meet the experienced professionals who lead our commitment to excellence in IT services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
                <CardHeader className="text-center space-y-4">
                  <div className="relative mx-auto">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.role}`}
                      className="w-32 h-32 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-card-foreground">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-card-foreground text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0 bg-transparent">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0 bg-transparent">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Join Our Growing Team</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              We're always looking for talented professionals who share our passion for technology and commitment to
              client success. Explore opportunities to grow your career with 79Ratio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/careers">View Open Positions</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
