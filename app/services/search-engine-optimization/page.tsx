import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Search, BarChart, Link as LinkIcon, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: 'Search Engine Optimization',
  description: 'Strategic SEO solutions that elevate your digital presence through comprehensive keyword research, on-page optimization, and authority building to drive organic growth.',
  openGraph: {
    title: 'Search Engine Optimization | The Meta Studio',
    description: 'Elevate your rankings with strategic SEO solutions tailored to your business goals.',
    images: ['/services/search-engine-optimization/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Search Engine Optimization | The Meta Studio',
    description: 'Elevate your rankings with strategic SEO solutions.',
    images: ['/services/search-engine-optimization/twitter-image'],
  },
}

const seoServices = [
  {
    icon: Search,
    title: "Keyword Research",
    description: "Effective keyword research forms the cornerstone of successful SEO strategy. Through meticulous analysis of search patterns and user behavior, we identify keywords that align perfectly with your business objectives. This targeted methodology ensures your website achieves higher search rankings and attracts relevant traffic primed for conversion. Our expertise provides the competitive advantage needed to expand your digital reach and visibility.",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    description: "On-page SEO serves as a pivotal factor in accelerating business growth. By optimizing every website element—from keyword integration and meta tags to content quality and internal linking—we create an environment that search engines favor and users appreciate. This comprehensive approach not only elevates search rankings but also enhances user experience, reducing bounce rates and increasing meaningful engagement.",
  },
  {
    icon: BarChart,
    title: "SEO Strategy",
    description: "A meticulously crafted SEO strategy acts as a catalyst for business expansion. By optimizing your website's architecture, content, and user experience, we enhance its visibility to both search engines and potential customers. This strategic approach drives organic traffic while building trust and credibility. Through continuous monitoring, refinement, and adaptation, our SEO strategy ensures your business maintains prominence in search results.",
  },
  {
    icon: LinkIcon,
    title: "Off-Page SEO",
    description: "Off-Page SEO plays a crucial role in propelling business growth. We enhance your website's credibility and authority in search engine algorithms by strategically building high-quality backlinks from authoritative sources. Our off-page initiatives, including social media engagement and influencer partnerships, expand your brand's digital footprint and cultivate customer trust, giving your business a competitive edge in the digital marketplace.",
  },
]

export default function SearchEngineOptimizationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/50 via-background to-background py-20 dark:from-purple-950/20 sm:py-28 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 px-6 py-3 shadow-lg backdrop-blur-sm dark:from-purple-900/30 dark:to-indigo-900/30">
                <Search className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">SEO Services</span>
              </div>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Search Engine{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Optimization
                </span>
              </h1>
              <p className="mb-10 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                The Meta Studio specializes in delivering innovative SEO solutions that help 
                businesses reach remarkable digital heights. Through strategic SEO approaches, we 
                empower your brand to achieve sustained organic growth and market leadership.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/portfolio">
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Toolkit Section */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Our SEO Services Toolkit - Your Key to Success
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive SEO strategies tailored to elevate your digital presence and 
                drive sustainable organic growth.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {seoServices.map((service) => {
                const Icon = service.icon
                return (
                  <Card key={service.title} className="group relative overflow-hidden bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:bg-gray-800/80">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <CardHeader className="relative">
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why SEO Section */}
        <section className="bg-gradient-to-b from-background to-secondary/30 py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm p-8 shadow-xl sm:p-12">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 px-6 py-3 shadow-lg dark:from-purple-900/30 dark:to-indigo-900/30">
                <BarChart className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">Why Choose SEO</span>
              </div>
              <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Wondering Why Your Business Can't Thrive Without SEO?
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  In today's digital-first marketplace, search engine optimization isn't optional—it's 
                  essential for business survival and growth. SEO ensures your business appears when 
                  potential customers are actively searching for your products or services, making it 
                  one of the most cost-effective marketing investments available.
                </p>
                <p>
                  Understanding that every business possesses unique characteristics, The Meta Studio 
                  crafts customer-centric SEO approaches that produce substantial, measurable results. 
                  With decades of combined experience, our dedicated team combines technical expertise 
                  with creative strategy to outperform competitors and deliver sustained organic growth.
                </p>
                <p>
                  Our comprehensive methodology encompasses thorough keyword analysis, competitor 
                  research, and meticulous examination of meta tags and code. We utilize analytical 
                  approaches to enhance performance and uncover every possible avenue to benefit our 
                  clients, ensuring transparent progress tracking and exceptional return on investment.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 p-8 shadow-2xl sm:p-12 lg:p-16">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
              <div className="relative text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 shadow-lg backdrop-blur-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
                  </span>
                  <span className="text-sm font-semibold text-white">Get Started Today</span>
                </div>
                <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl">
                  Ready to Dominate Search Rankings?
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-purple-100">
                  Let's develop an SEO strategy that delivers measurable results and sustainable growth.
                </p>
                <button className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-10 text-base font-semibold text-purple-600 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  Start Your SEO Journey
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -right-1/4 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
