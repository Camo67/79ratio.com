import { Button } from "@/components/ui/button"
import { Shield, Clock, Users, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift"
          style={{
            backgroundImage: "url(/home-bg.png)",
            filter: "brightness(0.6)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />

        <div className="absolute inset-0">
          {/* Fibonacci spiral elements */}
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
          <div
            className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-cyan-200 rounded-full animate-float-slow opacity-80"
            style={{ animationDelay: "2.5s" }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Logo */}
            <div className="flex justify-center">
              <Image
                src="/79ratio-logo.webp"
                alt="79 Ratio Logo"
                width={300}
                height={100}
              className="h-16 w-auto"
              priority
            />
          </div>

          {/* Hero Content */}
          <div className="space-y-8 max-w-4xl mx-auto hero-text-panel">
            <div className="space-y-4">
              <h1 className="lg:text-6xl font-bold text-primary leading-tight text-balance text-3xl">
                Where Technology Evolves with <span className="text-[var(--primary-soft)]">Precision</span>
              </h1>
              <p className="text-[var(--foreground)] leading-relaxed text-pretty text-lg">
                Sustainable Excellence • Strategic Innovation • Tailored Management
              </p>
              <p className="text-white leading-relaxed text-pretty text-base mt-4">
                79 Ratio delivers comprehensive IT solutions tailored for law firms, healthcare providers, nonprofits,
                and manufacturing companies. Experience proactive support, 24/7 monitoring, and strategic technology
                guidance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">Schedule a Call</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/services">View Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 justify-items-center">
              <div className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--foreground)]">Secure</div>
                  <div className="text-sm text-[var(--muted-foreground)]">Enterprise-grade</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--foreground)]">24/7/365</div>
                  <div className="text-sm text-[var(--muted-foreground)]">Monitoring</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--foreground)]">Expert</div>
                  <div className="text-sm text-[var(--muted-foreground)]">Support Team</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--foreground)]">Proactive</div>
                  <div className="text-sm text-[var(--muted-foreground)]">Approach</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-primary/30">
              <p className="text-lg text-primary font-medium">79 RATIO. Precision. Sustainability. Excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
