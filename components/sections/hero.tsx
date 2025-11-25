import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play, Star, Shield, TrendingUp, Award, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Trust Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/50 px-5 py-2 backdrop-blur-sm animate-fade-in dark:border-purple-900/30 dark:bg-purple-900/10">
            <Award className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-900 dark:text-purple-200">Trusted by 500+ Businesses Worldwide</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-in">
            Drive Real Results With{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Data-Driven Marketing
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl animate-fade-in max-w-3xl mx-auto">
            We don't just create campaignswe engineer growth. Partner with a digital marketing agency that delivers measurable ROI, transparent reporting, and strategies tailored to your success.
          </p>
          
          {/* Value Propositions - 3 Key Points */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-sm animate-fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span className="font-medium text-foreground">Guaranteed ROI Growth</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span className="font-medium text-foreground">100% Transparent Process</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span className="font-medium text-foreground">Dedicated Success Team</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in mb-12">
            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-2 hover:bg-purple-50 dark:hover:bg-purple-900/20">
              <Link href="#services">
                <Play className="mr-2 h-5 w-5" />
                View Services
              </Link>
            </Button>
          </div>

          {/* Trust Indicators & Social Proof */}
          <div className="mb-8 animate-fade-in">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Trusted & Verified By</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {/* Trustpilot */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-green-600 text-green-600" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">Trustpilot</span>
                <span className="text-xs text-muted-foreground">4.9/5 (200+ reviews)</span>
              </div>

              {/* Clutch */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">Clutch</span>
                <span className="text-xs text-muted-foreground">Top Digital Agency 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results-Focused Stats */}
        <div className="mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-6 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-purple-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-700">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-purple-950/20 dark:to-indigo-950/20"></div>
            <div className="relative text-center">
              <TrendingUp className="mx-auto mb-3 h-8 w-8 text-purple-600" />
              <div className="mb-1 text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">150%</div>
              <div className="text-sm font-medium text-muted-foreground">Average ROI Increase</div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-indigo-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-indigo-950/20 dark:to-purple-950/20"></div>
            <div className="relative text-center">
              <Award className="mx-auto mb-3 h-8 w-8 text-indigo-600" />
              <div className="mb-1 text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">500+</div>
              <div className="text-sm font-medium text-muted-foreground">Projects Delivered</div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-green-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-green-950/20 dark:to-emerald-950/20"></div>
            <div className="relative text-center">
              <CheckCircle2 className="mx-auto mb-3 h-8 w-8 text-green-600" />
              <div className="mb-1 text-4xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">98%</div>
              <div className="text-sm font-medium text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-950/20 dark:to-cyan-950/20"></div>
            <div className="relative text-center">
              <Star className="mx-auto mb-3 h-8 w-8 text-blue-600" />
              <div className="mb-1 text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">4.9/5</div>
              <div className="text-sm font-medium text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-40">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-950/20" />
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-bl from-indigo-50 to-transparent dark:from-indigo-950/20" />
      </div>
    </section>
  )
}
