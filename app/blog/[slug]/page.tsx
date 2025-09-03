import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"

// This would typically come from a CMS or database
const blogPost = {
  title: "5 Essential Cybersecurity Practices for Law Firms in 2024",
  slug: "cybersecurity-practices-law-firms-2024",
  content: `
    <p>In today's digital landscape, law firms face unprecedented cybersecurity challenges. With sensitive client data and confidential legal documents at stake, implementing robust security measures isn't just recommended—it's essential for maintaining client trust and regulatory compliance.</p>

    <h2>1. Implement Multi-Factor Authentication (MFA)</h2>
    <p>Multi-factor authentication adds an extra layer of security beyond passwords. For law firms handling sensitive client information, MFA should be mandatory for all systems containing confidential data.</p>

    <h3>Key Benefits:</h3>
    <ul>
      <li>Reduces risk of unauthorized access by 99.9%</li>
      <li>Meets Bar Association technology competence requirements</li>
      <li>Protects against password-based attacks</li>
    </ul>

    <h2>2. Regular Security Training for Staff</h2>
    <p>Human error remains the leading cause of security breaches. Regular training ensures your team can identify and respond to potential threats effectively.</p>

    <h2>3. Encrypted Communication Channels</h2>
    <p>All client communications should use encrypted channels to maintain attorney-client privilege and protect sensitive information from interception.</p>

    <h2>4. Comprehensive Backup and Recovery Plans</h2>
    <p>Ransomware attacks specifically target law firms. Having secure, tested backups ensures business continuity and protects against data loss.</p>

    <h2>5. Regular Security Assessments</h2>
    <p>Quarterly security assessments help identify vulnerabilities before they can be exploited by malicious actors.</p>

    <h2>Conclusion</h2>
    <p>Implementing these cybersecurity practices isn't just about protecting data—it's about maintaining the trust that forms the foundation of the attorney-client relationship. At 79Ratio, we specialize in helping law firms implement comprehensive security solutions that meet both technical and regulatory requirements.</p>
  `,
  author: "Michael Rodriguez",
  date: "March 15, 2024",
  category: "Cybersecurity",
  readTime: "8 min read",
  excerpt:
    "Learn the critical security measures every law firm needs to implement to protect client data and maintain Bar Association compliance.",
}

const relatedPosts = [
  {
    title: "HIPAA Compliance: A Complete Guide for Healthcare Providers",
    slug: "hipaa-compliance-guide-healthcare-providers",
    category: "Healthcare IT",
  },
  {
    title: "Backup and Disaster Recovery: Your Business Continuity Lifeline",
    slug: "backup-disaster-recovery-business-continuity",
    category: "Data Protection",
  },
]

export default function BlogPostPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Article Header */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <Button asChild variant="outline" size="sm">
              <Link href="/blog" className="inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="space-y-4">
              <Badge>{blogPost.category}</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                {blogPost.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{blogPost.excerpt}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {blogPost.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {blogPost.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {blogPost.readTime}
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-card-foreground">{blogPost.author}</h3>
                  <p className="text-muted-foreground">
                    Chief Technology Officer at 79Ratio with over 15 years of experience in enterprise IT and
                    cybersecurity. Michael specializes in helping law firms and healthcare organizations implement
                    secure, compliant technology solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((post, index) => (
                <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg text-card-foreground hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/blog/${post.slug}`}>Read Article</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Need Help Implementing These Security Practices?
            </h2>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Our cybersecurity experts can help your law firm implement comprehensive security solutions that protect
              client data and ensure compliance.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/contact">Schedule Security Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
