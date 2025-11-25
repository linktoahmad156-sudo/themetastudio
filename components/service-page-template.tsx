import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"

interface ServiceFeature {
  icon: LucideIcon
  title: string
  description: string
}

interface ServiceBenefit {
  title: string
  description: string
}

interface ServicePageProps {
  badge: string
  title: string
  titleHighlight: string
  description: string
  features: ServiceFeature[]
  benefits: ServiceBenefit[]
  whyBadge: string
  whyHeadline: string
  whyContent: string[]
  ctaHeadline: string
  ctaDescription: string
  ctaButton: string
  gradient: {
    from: string
    to: string
  }
  breadcrumbCategory?: string
  breadcrumbService: string
}

export function ServicePageTemplate({
  badge,
  title,
  titleHighlight,
  description,
  features,
  benefits,
  whyBadge,
  whyHeadline,
  whyContent,
  ctaHeadline,
  ctaDescription,
  ctaButton,
  gradient,
  breadcrumbCategory = "Services",
  breadcrumbService
}: ServicePageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Modern Hero Section */}
        <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              {/* Breadcrumb */}
              <Breadcrumb 
                items={[
                  { label: breadcrumbCategory, href: "/#services" },
                  { label: breadcrumbService }
                ]} 
              />
              
              {/* Page Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
                {title} {titleHighlight}
              </h1>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground">
                Comprehensive Solutions Tailored for You
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-2">
                Strategic services designed to elevate your digital presence and drive measurable growth.
              </p>
            </div>

            <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title} className="group relative overflow-hidden bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:bg-gray-800/80">
                    <div className={`absolute inset-0 bg-gradient-to-br from-${gradient.from}/5 to-${gradient.to}/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}></div>
                    <CardHeader className="relative">
                      <div className={`mb-4 inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-${gradient.from} to-${gradient.to} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <CardDescription className="text-sm sm:text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-b from-background to-secondary/30 py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground">
                Measurable Results You Can Count On
              </h2>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg lg:text-xl font-bold">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs sm:text-sm leading-relaxed">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="mx-auto max-w-4xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 lg:p-12 shadow-xl">
              <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 px-4 py-2 sm:px-6 sm:py-3 shadow-lg dark:from-purple-900/30 dark:to-indigo-900/30">
                <span className={`text-xs sm:text-sm font-semibold text-${gradient.from} dark:text-purple-100`}>{whyBadge}</span>
              </div>
              <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                {whyHeadline}
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
                {whyContent.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-${gradient.from} via-${gradient.to} to-${gradient.from} p-8 sm:p-12 lg:p-16 shadow-2xl`}>
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
              <div className="relative text-center">
                <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 sm:px-6 sm:py-3 shadow-lg backdrop-blur-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">Get Started Today</span>
                </div>
                <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white px-2">
                  {ctaHeadline}
                </h2>
                <p className="mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed text-purple-100 px-2">
                  {ctaDescription}
                </p>
                <Button asChild size="lg" variant="secondary" className="text-sm sm:text-base group">
                  <Link href="/contact">
                    {ctaButton}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -left-1/4 top-0 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -right-1/4 bottom-0 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-white/10 blur-3xl" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
