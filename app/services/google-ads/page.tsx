import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Target, BarChart, Users, Search, TrendingUp, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: 'Google Ads Management Services - Expert PPC Agency | 200% ROI Increase',
  description: 'Professional Google Ads management that delivers results. Achieve 200% ROI increase with expert PPC campaigns. Certified Google Ads specialists, advanced targeting, conversion optimization. Get more leads for less cost. Free PPC audit available.',
  keywords: [
    'Google Ads',
    'PPC services',
    'pay per click',
    'Google Ads management',
    'PPC agency',
    'Google advertising',
    'search ads',
    'display ads',
    'shopping ads',
    'YouTube ads',
    'PPC campaign management',
    'Google Ads expert',
    'PPC optimization',
    'Google Ads consultant',
    'paid search advertising',
    'PPC management company',
    'Google Ads agency',
    'conversion rate optimization',
    'ROI optimization',
    'cost per click'
  ],
  authors: [{ name: 'The Meta Studio' }],
  creator: 'The Meta Studio',
  publisher: 'The Meta Studio',
  metadataBase: new URL('https://themetastudio.com'),
  alternates: {
    canonical: '/services/google-ads',
  },
  openGraph: {
    title: 'Google Ads Management Services - 200% ROI Increase | The Meta Studio',
    description: 'Expert Google Ads management with proven 200% ROI increase. Certified PPC specialists deliver more leads for less cost.',
    url: 'https://themetastudio.com/services/google-ads',
    siteName: 'The Meta Studio',
    images: [
      {
        url: '/og-google-ads.jpg',
        width: 1200,
        height: 630,
        alt: 'Google Ads Management Services - PPC Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Management | The Meta Studio',
    description: 'Expert Google Ads campaigns that deliver measurable results.',
    images: ['/services/google-ads/twitter-image'],
  },
}

const googleAdsFeatures = [
  {
    icon: BarChart,
    title: "Performance Metrics",
    description: "Understanding campaign performance is essential for optimization. Our comprehensive performance metrics provide crystal-clear insights into your ad results, including impressions, clicks, and conversions. These analytics help identify areas requiring improvement and highlight strategies delivering optimal results, enabling data-driven decision-making.",
  },
  {
    icon: Target,
    title: "Targeting Analysis",
    description: "Precise targeting distinguishes successful campaigns from mediocre ones. Our targeting analysis delivers detailed insights into ad performance across different audience segments. By understanding which demographics, interests, and behaviors drive conversions, we continuously refine targeting parameters to maximize campaign effectiveness and ROI.",
  },
  {
    icon: Lightbulb,
    title: "Tailored Strategies",
    description: "Our advertising specialists develop customized plans that align seamlessly with your business objectives. We recognize your unique requirements and create strategies ensuring every advertisement effectively converts into tangible business results. This personalized approach guarantees maximum impact from your advertising investment.",
  },
  {
    icon: Users,
    title: "Audience Targeting",
    description: "Success hinges on identifying and reaching the right audience. Our comprehensive research and analysis pinpoint individuals most likely to engage meaningfully with your brand. This targeted approach optimizes reach and creates genuine interactions that translate into measurable business outcomes.",
  },
  {
    icon: Search,
    title: "Keyword Research",
    description: "We excel at comprehensive keyword research using advanced tools and techniques to identify optimal keywords for your business. Through meticulous analysis and strategic planning, we uncover high-performing keywords that drive organic traffic and improve your online visibility across search platforms.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Growth",
    description: "Every campaign focuses on delivering quantifiable results and sustainable growth. We track key performance indicators, monitor conversion rates, and analyze customer acquisition costs to ensure your advertising budget generates maximum return on investment and contributes to long-term business success.",
  },
]

export default function GoogleAdsPage() {
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
                  { label: "Google Ads (PPC)" }
                ]} 
              />
              
              {/* Page Title */}
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Google Ads Management
              </h1>
            </div>
          </div>
        </section>

        {/* Why Google Ads */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Google Ads Are Essential for Your Business
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Through Google Ads, you connect with individuals genuinely interested in your offerings. 
                  Google Ads represents a pivotal opportunity for businesses due to its expansive reach and 
                  precision targeting methodology. The platform positions your brand before the right audience 
                  precisely when potential customers are actively searching, providing prime visibility.
                </p>
                <p>
                  This strategic approach significantly enhances the probability of clicks, leads, and sales. 
                  With precise audience targeting, you're not merely reaching anyoneyou're connecting with 
                  individuals genuinely interested in your offerings. Google Ads empowers your business to 
                  establish a significant digital presence and generate tangible returns on your marketing 
                  investment.
                </p>
                <p>
                  Our comprehensive Google Ads management encompasses campaign setup, ongoing optimization, 
                  performance monitoring, and detailed reporting. We ensure every dollar of your advertising 
                  budget contributes to achieving your business objectives and driving sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-secondary/30 py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Comprehensive Google Ads Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                Data-driven strategies and meticulous campaign management that maximize your advertising ROI.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {googleAdsFeatures.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title} className="border-2 transition-all hover:border-primary hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-center sm:p-12 lg:p-16">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Ready to Accelerate Your Growth with Google Ads?
              </h2>
              <p className="mb-8 text-lg text-purple-100">
                Partner with us to create high-performing campaigns that drive real business results.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Get Your Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
