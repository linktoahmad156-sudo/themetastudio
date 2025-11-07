import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Share2, Heart, MessageCircle, TrendingUp, Users, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: 'Social Media Marketing',
  description: 'Engaging social media strategies that build brand recognition, foster community, and drive meaningful customer interactions across all major platforms.',
  openGraph: {
    title: 'Social Media Marketing | The Meta Studio',
    description: 'Build authentic connections and grow your brand through strategic social media marketing.',
    images: ['/services/social-media-marketing/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing | The Meta Studio',
    description: 'Engaging strategies across all social platforms.',
    images: ['/services/social-media-marketing/twitter-image'],
  },
}

const socialMediaBenefits = [
  {
    icon: Share2,
    title: "Brand Visibility",
    description: "Social media platforms offer unparalleled opportunities to amplify your brand presence. Through strategic content distribution and engagement tactics, we position your brand where your audience spends their time, creating consistent touchpoints that build recognition and recall.",
  },
  {
    icon: Heart,
    title: "Customer Engagement",
    description: "Interactive platforms facilitate real-time conversations that provide invaluable feedback and strengthen relationships. We craft engaging content that sparks meaningful interactions, turning passive followers into active brand advocates and loyal customers.",
  },
  {
    icon: Users,
    title: "Audience Growth",
    description: "Strategic social media marketing accelerates follower growth and community building. We implement data-driven tactics to attract your ideal audience, expanding your reach while maintaining engagement quality and fostering a dedicated community around your brand.",
  },
  {
    icon: TrendingUp,
    title: "Traffic Generation",
    description: "Social platforms serve as powerful channels for driving qualified traffic to your website. Through compelling content and strategic calls-to-action, we transform social media engagement into website visits, lead generation, and ultimately, business conversions.",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Communication",
    description: "Social media enables immediate, authentic communication with your audience. We manage your social presence to ensure timely responses, address customer concerns promptly, and maintain ongoing conversations that humanize your brand and build trust.",
  },
  {
    icon: BarChart,
    title: "Measurable Results",
    description: "Every social media initiative focuses on delivering quantifiable outcomes. We track engagement metrics, follower growth, reach, and conversion data to continuously optimize strategies and demonstrate clear return on your social media investment.",
  },
]

const analysisMetrics = [
  {
    title: "Measuring Reach & Engagement",
    description: "The primary objective of social media marketing involves measuring content reach and audience engagement effectiveness. We analyze metrics including post impressions, shares, likes, comments, and saves to evaluate content resonance and user interest levels. This data-driven approach enables continuous refinement of content strategies for maximum impact.",
  },
  {
    title: "Analyzing Follower Growth",
    description: "Tracking follower growth provides crucial insights regarding brand popularity and audience-building effectiveness. By monitoring increases in follower count over time, we evaluate content strategy success and identify periods of significant development. This analysis informs strategic decisions about content types, posting schedules, and engagement tactics.",
  },
]

export default function SocialMediaMarketingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-background py-20 dark:from-pink-950/20 sm:py-28 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Social Media{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Marketing
                </span>
              </h1>
              <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
                The Meta Studio is your premier destination for advanced social media marketing solutions. 
                Our expertise lies in harnessing the transformative power of social platforms for your 
                business benefit. We adopt data-driven and strategic approaches to achieve remarkable results.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start Growing Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/portfolio">
                    View Success Stories
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How Social Media Helps */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How Social Media Marketing Can Help Your Brand Grow?
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Social media marketing drives business conversion by utilizing platforms with broad reach 
                  and exceptional engagement potential. You connect with your target audience through meaningful 
                  content and targeted advertising, building brand recognition and fostering loyalty. Interactive 
                  platforms facilitate real-time conversations providing valuable feedback and expanding organic reach.
                </p>
                <p>
                  Moreover, social media offers cost-effective targeted advertising, reaching users based on 
                  demographics, interests, and behaviors. This precise targeting optimizes campaign impact while 
                  ensuring efficient budget allocation. Our strategic approach to social media leverages platform-specific 
                  features and audience behaviors to maximize engagement and conversion rates.
                </p>
                <p>
                  Utilizing social media properly improves brand visibility, increases website traffic, and generates 
                  qualified leads that convert into business results. Our comprehensive strategies encompass content 
                  creation, community management, paid advertising, and performance analytics to ensure sustained growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-secondary/30 py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Strategic Social Media Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive approaches that transform social platforms into powerful business growth engines.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {socialMediaBenefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <Card key={benefit.title} className="border-2 transition-all hover:border-primary hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Analysis Guide */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Analysis Guide Of Social Media Marketing
              </h2>
              <div className="space-y-8">
                {analysisMetrics.map((metric) => (
                  <Card key={metric.title} className="border-2">
                    <CardHeader>
                      <CardTitle className="text-2xl">{metric.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed text-muted-foreground">
                        {metric.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary/30 py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-center sm:p-12 lg:p-16">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Transform Your Social Media Presence
              </h2>
              <p className="mb-8 text-lg text-purple-100">
                Let's create engaging social strategies that build community and drive conversions.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Get Your Social Strategy
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
