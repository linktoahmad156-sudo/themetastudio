import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { BarChart, Target, TrendingUp, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: 'Marketing Strategy Services - Growth Planning | 240% Revenue Increase',
  description: 'Expert marketing strategy that drives growth. Achieve 240% revenue increase with comprehensive digital strategy, funnel optimization, and integrated campaigns. Full-funnel planning, competitive analysis, channel strategy. Professional marketing consultants. Free strategy session.',
  keywords: [
    'marketing strategy',
    'marketing strategy services',
    'digital marketing strategy',
    'marketing planning',
    'growth strategy',
    'marketing consultant',
    'funnel strategy',
    'integrated marketing',
    'marketing roadmap',
    'channel strategy',
    'competitive analysis',
    'market positioning',
    'customer acquisition strategy',
    'retention strategy',
    'marketing objectives',
    'KPI planning',
    'budget allocation',
    'marketing audit',
    'brand strategy',
    'go-to-market strategy'
  ],
  authors: [{ name: 'The Meta Studio' }],
  creator: 'The Meta Studio',
  publisher: 'The Meta Studio',
  metadataBase: new URL('https://themetastudio.com'),
  alternates: {
    canonical: '/services/marketing-strategy',
  },
  openGraph: {
    title: 'Marketing Strategy Services - 240% Revenue Growth | The Meta Studio',
    description: 'Expert marketing strategy drives 240% revenue increase. Comprehensive planning, funnel optimization, integrated campaigns.',
    url: 'https://themetastudio.com/services/marketing-strategy',
    siteName: 'The Meta Studio',
    images: [
      {
        url: '/og-marketing-strategy.jpg',
        width: 1200,
        height: 630,
        alt: 'Marketing Strategy Services - Growth Planning & Execution',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Strategy - 240% Revenue Growth',
    description: 'Expert strategic planning, funnel optimization, and integrated campaigns. Drive sustainable growth.',
    images: ['/twitter-marketing-strategy.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Marketing Strategy Services',
}

export default function MarketingStrategyPage() {
  return (
    <ServicePageTemplate
      badge="Content & Strategy"
      title="Full-Funnel Planning"
      titleHighlight="& Strategic Execution"
      description="Develop comprehensive marketing strategies that align all channels, tactics, and campaigns toward sustainable business growth. Stop executing random tactics and start following a strategic roadmap that systematically moves prospects from awareness to advocacy."
      features={[
        {
          icon: Target,
          title: "Market Research & Analysis",
          description: "Conduct deep market research including competitor analysis, audience research, industry trends identification, and opportunity assessment. Understand your competitive landscape, target audience needs and behaviors, market positioning opportunities, and untapped growth channels before making strategic decisions."
        },
        {
          icon: BarChart,
          title: "Full-Funnel Strategy Development",
          description: "Design comprehensive marketing funnels that guide prospects from initial awareness through consideration, decision, and retention stages. Map tactics, content, and touchpoints to each funnel stage ensuring seamless customer journeys that nurture prospects toward conversion and create loyal brand advocates."
        },
        {
          icon: Briefcase,
          title: "Channel Strategy & Budget Allocation",
          description: "Determine the optimal marketing channel mix for your business, audience, and objectives. Allocate budget across channels based on expected ROI, customer acquisition costs, and growth potential. Balance short-term revenue generation with long-term brand building for sustainable, profitable growth."
        },
        {
          icon: TrendingUp,
          title: "Performance Tracking & Optimization",
          description: "Establish KPIs, implement tracking and analytics infrastructure, and create reporting dashboards that show marketing's business impact. Continuously optimize strategy based on performance data, market changes, and business evolution to ensure maximum ROI and adapt to changing conditions."
        }
      ]}
      benefits={[
        {
          title: "Aligned Marketing Efforts",
          description: "Ensure all marketing activities work together toward common business objectives and revenue goals"
        },
        {
          title: "Efficient Resource Allocation",
          description: "Invest budget and time in channels and tactics that deliver the highest return on investment"
        },
        {
          title: "Predictable Growth",
          description: "Create systematic, repeatable processes that drive consistent, predictable business growth over time"
        },
        {
          title: "Competitive Advantage",
          description: "Outmaneuver competitors with strategic thinking that identifies and exploits market opportunities"
        }
      ]}
      whyBadge="Why Marketing Strategy"
      whyHeadline="Why Strategic Marketing Planning Separates Winners from Losers"
      whyContent={[
        "Most businesses fail at marketing not because of poor execution, but because they lack clear strategy. They execute random tactics hoping something works rather than following a strategic plan designed to systematically achieve specific business objectives. Strategic marketing planning provides the roadmap that guides all marketing investments, ensuring every dollar spent contributes to measurable business growth.",
        "Our strategic approach starts with deep understanding of your business goals, competitive landscape, target audience, and growth constraints. We don't recommend generic best practiceswe develop custom strategies tailored to your unique situation, resources, and objectives. Our strategies balance quick wins with long-term brand building, paid acquisition with organic growth, and customer acquisition with retention.",
        "We create detailed marketing roadmaps that specify exactly what to do, when to do it, how to measure success, and how to optimize based on results. You'll receive comprehensive documentation covering target personas, positioning strategy, messaging frameworks, channel strategies, content calendars, budget allocations, KPIs, and growth projections. More than just a plan, we provide ongoing strategic guidance to ensure successful implementation and achievement of your business goals."
      ]}
      ctaHeadline="Ready to Build Your Marketing Roadmap?"
      ctaDescription="Develop a comprehensive marketing strategy that aligns all efforts toward sustainable business growth and measurable ROI."
      ctaButton="Get Your Strategy Session"
      gradient={{
        from: "purple-600",
        to: "indigo-600"
      }}
      breadcrumbService="Marketing Strategy"
    />
  )
}
