import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">79</span>
              </div>
              <span className="font-bold text-xl text-card-foreground">79Ratio</span>
            </Link>
            <p className="text-muted-foreground text-pretty">
              Your trusted IT partner delivering comprehensive technology solutions for law firms, healthcare,
              nonprofits, and manufacturing.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@79ratio.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Your City, State</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/monitoring"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  24/7 Monitoring
                </Link>
              </li>
              <li>
                <Link href="/services/security" className="text-muted-foreground hover:text-primary transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className="text-muted-foreground hover:text-primary transition-colors">
                  Cloud Management
                </Link>
              </li>
              <li>
                <Link href="/services/backup" className="text-muted-foreground hover:text-primary transition-colors">
                  Backup & Recovery
                </Link>
              </li>
              <li>
                <Link href="/services/support" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">Industries</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/industries/law-firms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Law Firms
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/healthcare"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/nonprofits"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Nonprofits
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/manufacturing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="pt-4">
              <Button asChild size="sm">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 79Ratio. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
