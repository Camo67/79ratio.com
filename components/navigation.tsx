"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Shield, Phone, Building, Lock } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

  const majorServices = [
    {
      title: "Managed IT & Cybersecurity",
      href: "/managed-it-cybersecurity",
      icon: Shield,
      description: "Complete IT management and security solutions",
    },
    {
      title: "Integrated Voice & Data",
      href: "/integrated-voice-data",
      icon: Phone,
      description: "Unified communication systems",
    },
    {
      title: "Managed Office",
      href: "/managed-office",
      icon: Building,
      description: "Complete office technology management",
    },
    {
      title: "Physical Security",
      href: "/physical-security",
      icon: Lock,
      description: "Comprehensive security solutions",
    },
  ]

  const additionalLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Difference", href: "/difference" },
    { label: "Leadership", href: "/leadership" },
    { label: "Workflow Automation", href: "/business-process-automation" },
    { label: "Microsoft Development", href: "/microsoft-development-services" },
    { label: "Smarter Construction", href: "/smarter-construction" },
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/resources/blog" },
    { label: "Knowledge Base", href: "/knowledge-base" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="border-b sticky top-0 z-50 bg-black text-black border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/79ratio-logo.webp"
              alt="79Ratio Logo"
              width={160}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className="text-white hover:text-primary transition-colors flex items-center space-x-1">
                <span>{"What we do"}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isMegaMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-black/95 backdrop-blur-sm border border-primary/20 rounded-lg shadow-2xl overflow-hidden">
                  <div className="p-6">
                    {/* Major Services Grid */}
                    <div className="mb-6">
                      <h3 className="text-primary font-semibold mb-4 text-sm uppercase tracking-wide">
                        Major Services
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {majorServices.map((service, index) => {
                          const IconComponent = service.icon
                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="group p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                              style={{
                                animationDelay: `${index * 0.1}s`,
                                animation: "fadeInUp 0.3s ease-out forwards",
                              }}
                            >
                              <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0">
                                  <IconComponent className="w-6 h-6 text-primary group-hover:text-primary/80" />
                                </div>
                                <div>
                                  <h4 className="text-white font-medium text-sm group-hover:text-primary transition-colors">
                                    {service.title}
                                  </h4>
                                  <p className="text-gray-400 text-xs mt-1 group-hover:text-gray-300">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>

                    {/* Additional Links */}
                    <div>
                      <h3 className="text-primary font-semibold mb-3 text-sm uppercase tracking-wide">Quick Links</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {additionalLinks.map((item, index) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="px-3 py-2 text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 rounded text-sm"
                            style={{
                              animationDelay: `${(index + 4) * 0.05}s`,
                              animation: "fadeInUp 0.3s ease-out forwards",
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-white hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/industries" className="text-white hover:text-primary transition-colors">
              Industries
            </Link>
            <Link href="/blog" className="text-white hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-primary transition-colors">
              Contact
            </Link>
            <Button
              variant="outline"
              asChild
              className="text-white border-white hover:bg-white hover:text-black bg-transparent"
            >
              <a href="https://79ratio.deskdirector.com/auth/v1/" target="_blank" rel="noopener noreferrer">
                Client Login
              </a>
            </Button>
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t bg-black border-black max-h-96 overflow-y-auto">
              {majorServices.slice(0, 10).map((service) => {
                const IconComponent = service.icon
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-3 py-2 text-white hover:text-primary transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <IconComponent className="w-4 h-4 text-primary" />
                      <span>{service.title}</span>
                    </div>
                  </Link>
                )
              })}

              {additionalLinks.slice(0, 10).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-primary transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="px-3 py-2">
                <Button
                  variant="outline"
                  asChild
                  className="w-full mb-2 bg-transparent text-white border-white hover:bg-white hover:text-black"
                >
                  <a href="https://79ratio.deskdirector.com/auth/v1/" target="_blank" rel="noopener noreferrer">
                    Client Login
                  </a>
                </Button>
              </div>
              <div className="px-3 py-2">
                <Button asChild className="w-full text-white hover:text-primary">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
