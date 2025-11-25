import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Search, BarChart, Link as LinkIcon, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: 'SEO Services - Search Engine Optimization Company | Rank #1 on Google',
  description: 'Professional SEO services that get results. Increase organic traffic by 300% with our proven SEO strategies. Expert keyword research, on-page optimization, link building & technical SEO. Get Page 1 rankings on Google. Free SEO audit included.',
  keywords: [
    'SEO services',
    'search engine optimization',
    'SEO company',
    'SEO agency',
    'organic SEO',
    'Google ranking',
    'keyword research',
    'on-page SEO',
    'off-page SEO',
    'technical SEO',
    'link building',
    'SEO audit',
    'local SEO',
    'SEO optimization',
    'search engine marketing',
    'SEO consultant',
    'white hat SEO',
    'SEO expert',
    'page 1 google rankings',
    'increase organic traffic'
  ],
  authors: [{ name: 'The Meta Studio' }],
  creator: 'The Meta Studio',
  publisher: 'The Meta Studio',
  metadataBase: new URL('https://themetastudio.com'),
  alternates: {
    canonical: '/services/search-engine-optimization',
  },
  openGraph: {
    title: 'Professional SEO Services - Rank #1 on Google | The Meta Studio',
    description: 'Increase organic traffic by 300% with proven SEO strategies. Expert keyword research, technical SEO, and link building. Get Page 1 Google rankings.',
    url: 'https://themetastudio.com/services/search-engine-optimization',
    siteName: 'The Meta Studio',
    images: [
      {
        url: '/og-seo-services.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO Services - Search Engine Optimization Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
    description: "On-page SEO serves as a pivotal factor in accelerating business growth. By optimizing every website elementfrom keyword integration and meta tags to content quality and internal linkingwe create an environment that search engines favor and users appreciate. This comprehensive approach not only elevates search rankings but also enhances user experience, reducing bounce rates and increasing meaningful engagement.",
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
      
      <main className="flex-1">
        {/* Modern Hero Section */}
        <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              {/* Breadcrumb */}
              <Breadcrumb 
                items={[
                  { label: "Services", href: "/#services" },
                  { label: "Search Engine Optimization" }
                ]} 
              />
              
              {/* Page Title */}
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Search Engine Optimization
              </h1>
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
            <Card className="mx-auto max-w-4xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-xl sm:p-12">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 px-6 py-3 shadow-lg dark:from-purple-900/30 dark:to-indigo-900/30">
                <BarChart className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">Why Choose SEO</span>
              </div>
              <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Wondering Why Your Business Can't Thrive Without SEO?
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  In today's digital-first marketplace, search engine optimization isn't optionalit's 
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
                <Link href="/contact" className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-10 text-base font-semibold text-purple-600 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  Start Your SEO Journey
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
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
