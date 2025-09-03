import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, Heart, HandHeart, Factory } from "lucide-react"
import Link from "next/link"

const industries = [
  {
    icon: Scale,
    title: "Law Firms",
    description:
      "Specialized IT solutions for legal practices with focus on security, compliance, and client confidentiality.",
    benefits: ["Document security", "Case management systems", "Compliance support"],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "HIPAA-compliant technology solutions designed for medical practices and healthcare organizations.",
    benefits: ["HIPAA compliance", "EHR integration", "Patient data security"],
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: HandHeart,
    title: "Nonprofits",
    description: "Cost-effective IT solutions that maximize your technology budget while supporting your mission.",
    benefits: ["Budget optimization", "Donor management", "Volunteer coordination"],
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Robust IT infrastructure supporting production systems, inventory management, and operational efficiency.",
    benefits: ["Production systems", "Inventory tracking", "Quality control"],
    color: "bg-orange-500/10 text-orange-600",
  },
]

export function IndustriesSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift"
          style={{
            backgroundImage: "url(/compliance-bg.png)",
            filter: "brightness(0.2)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85" />

        <div className="absolute inset-0">
          <div
            className="absolute top-1/5 left-1/5 w-2 h-2 bg-primary/60 rounded-full animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-cyan-400/70 rounded-full animate-float-slow"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-primary/50 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-cyan-300/60 rounded-full animate-float-slow"
            style={{ animationDelay: "3s" }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white text-balance">Industry-Specific Expertise</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-pretty">
            We understand the unique technology challenges and compliance requirements of your industry, delivering
            tailored solutions that drive results.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border bg-card/90 backdrop-blur-sm hover:bg-card text-center"
              >
                <CardHeader className="space-y-4">
                  <div
                    className={`w-16 h-16 ${industry.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-black">{industry.title}</CardTitle>
                    <CardDescription className="text-gray-600 mt-2">{industry.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center justify-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full bg-transparent border-gray-300 text-black hover:bg-gray-100"
                  >
                    <Link href={`/industries/${industry.title.toLowerCase().replace(" ", "-")}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/industries">Explore All Industries</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
