import { Button } from "@/components/ui/button"
import { Shield, Clock, Users, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift"
          style={{
            backgroundImage: "url(/home-bg.png)",
            filter: "brightness(0.3)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />

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
          <div
            className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-float-slow"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/79ratio-logo.webp"
              alt="79Ratio Logo"
              width={300}
              height={100}
              className="h-16 w-auto"
              priority
            />
          </div>

          {/* Hero Content */}
          <div className="space-y-8 max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
                Your IT Partner for <span className="text-primary">Seamless Operations</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed text-pretty">
                79Ratio delivers comprehensive IT solutions tailored for law firms, healthcare providers, nonprofits,
                and manufacturing companies. Experience proactive support, 24/7 monitoring, and strategic technology
                guidance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-black"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 justify-items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-white">Secure</div>
                  <div className="text-sm text-gray-300">Enterprise-grade</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-white">24/7/365</div>
                  <div className="text-sm text-gray-300">Monitoring</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-white">Expert</div>
                  <div className="text-sm text-gray-300">Support Team</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-white">Proactive</div>
                  <div className="text-sm text-gray-300">Approach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
