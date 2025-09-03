import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight, Search, TrendingUp } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "5 Essential Cybersecurity Practices for Law Firms in 2024",
    slug: "cybersecurity-practices-law-firms-2024",
    excerpt:
      "Learn the critical security measures every law firm needs to implement to protect client data and maintain Bar Association compliance.",
    author: "Michael Rodriguez",
    date: "March 15, 2024",
    category: "Cybersecurity",
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "HIPAA Compliance: A Complete Guide for Healthcare Providers",
    slug: "hipaa-compliance-guide-healthcare-providers",
    excerpt:
      "Everything healthcare organizations need to know about HIPAA compliance, from technical safeguards to staff training.",
    author: "Sarah Chen",
    date: "March 10, 2024",
    category: "Healthcare IT",
    readTime: "12 min read",
    featured: true,
  },
  {
    title: "Cloud Migration Strategies for Small Businesses",
    slug: "cloud-migration-strategies-small-businesses",
    excerpt:
      "A step-by-step approach to migrating your business to the cloud while minimizing downtime and maximizing benefits.",
    author: "James Wilson",
    date: "March 5, 2024",
    category: "Cloud Computing",
    readTime: "10 min read",
    featured: false,
  },
  {
    title: "The True Cost of IT Downtime for Manufacturing Companies",
    slug: "cost-it-downtime-manufacturing-companies",
    excerpt:
      "Understanding the financial impact of system failures and how proactive monitoring can prevent costly disruptions.",
    author: "David Thompson",
    date: "February 28, 2024",
    category: "Manufacturing IT",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "Nonprofit Technology: Maximizing Impact with Limited Budgets",
    slug: "nonprofit-technology-maximizing-impact-limited-budgets",
    excerpt:
      "Cost-effective IT solutions that help nonprofits achieve their mission while staying within budget constraints.",
    author: "Lisa Martinez",
    date: "February 22, 2024",
    category: "Nonprofit IT",
    readTime: "9 min read",
    featured: false,
  },
  {
    title: "Backup and Disaster Recovery: Your Business Continuity Lifeline",
    slug: "backup-disaster-recovery-business-continuity",
    excerpt:
      "Why every business needs a comprehensive backup and disaster recovery plan, and how to implement one effectively.",
    author: "Amanda Foster",
    date: "February 15, 2024",
    category: "Data Protection",
    readTime: "7 min read",
    featured: false,
  },
]

const categories = [
  "All Posts",
  "Cybersecurity",
  "Healthcare IT",
  "Cloud Computing",
  "Manufacturing IT",
  "Nonprofit IT",
  "Data Protection",
]

const recentPosts = blogPosts.slice(0, 4)

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift"
          style={{ backgroundImage: "url(/blog-bg.png)" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85" />

        {/* Floating Elements Animation */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-float-slow"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/70 rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-float-slow"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-primary/50 rounded-full animate-float"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="mb-4 bg-primary/20 text-white border-primary/30">IT Insights & Resources</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
              The <span className="text-primary">79Ratio Blog</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-pretty">
              Stay informed with the latest IT trends, best practices, and industry insights. Our experts share
              actionable advice to help your business thrive with technology.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Featured Articles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our most popular and impactful articles on IT best practices and industry trends.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {blogPosts
              .filter((post) => post.featured)
              .map((post, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Featured
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-card-foreground group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <div>{post.readTime}</div>
                    </div>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">All Articles</h2>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm" className="text-xs">
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="border-border bg-card hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between space-x-4">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary" className="text-xs">
                              {post.category}
                            </Badge>
                            {post.featured && (
                              <Badge className="text-xs">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground hover:text-primary transition-colors">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {post.date}
                            </div>
                            <div>{post.readTime}</div>
                          </div>
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/blog/${post.slug}`}>Read More</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">Recent Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium text-card-foreground hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`} className="text-sm leading-tight">
                          {post.title}
                        </Link>
                      </h4>
                      <div className="text-xs text-muted-foreground">{post.date}</div>
                      {index < recentPosts.length - 1 && <div className="border-b border-border pt-2" />}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.slice(1).map((category, index) => (
                    <Button key={index} variant="ghost" className="w-full justify-start text-sm" size="sm">
                      {category}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">Newsletter</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Get the latest IT insights and tips delivered to your inbox monthly.
                  </p>
                  <div className="space-y-2">
                    <Input placeholder="Your email address" type="email" />
                    <Button className="w-full" size="sm">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
