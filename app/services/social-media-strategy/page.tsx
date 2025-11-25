import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { Palette, Target, BarChart, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: 'Social Media Strategy | Data-Driven Planning for Growth',
  description: 'Develop comprehensive social media strategies aligned with business goals. Audience research, content planning, platform selection, and KPI tracking for measurable results.',
  keywords: ['social media strategy', 'social media planning', 'content strategy', 'social media marketing plan', 'platform strategy', 'social media goals'],
  openGraph: {
    title: 'Social Media Strategy | The Meta Studio',
    description: 'Build winning social media strategies that align with business goals and drive real results.',
    images: ['/services/social-media-strategy/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Strategy | The Meta Studio',
    description: 'Data-driven social media strategies that transform your social presence into a growth engine.',
    images: ['/services/social-media-strategy/twitter-image'],
  },
}

export default function SocialMediaStrategyPage() {
  return (
    <ServicePageTemplate
      badge="Social Media Marketing"
      title="Data-Driven Strategies"
      titleHighlight="That Drive Real Results"
      description="Develop comprehensive social media strategies perfectly aligned with your business goals, target audiences, and platform best practices for maximum impact. Stop posting randomly and start executing a strategic plan that delivers measurable business outcomes."
      features={[
        {
          icon: Target,
          title: "Audience Research & Personas",
          description: "Deep-dive into your target audience demographics, psychographics, behaviors, pain points, and social media consumption habits to create detailed buyer personas. Understand exactly who you're talking to, what they care about, where they spend time online, and how to reach them effectively with relevant messaging."
        },
        {
          icon: BarChart,
          title: "Platform Strategy & Selection",
          description: "Identify the right social platforms for your business based on where your audience actually engages. Not all platforms are created equal for every businesswe focus your efforts and budget on platforms that deliver the best ROI, whether that's LinkedIn for B2B, Instagram for visual brands, or TikTok for younger audiences."
        },
        {
          icon: Palette,
          title: "Content Strategy & Calendars",
          description: "Develop comprehensive content strategies with detailed editorial calendars, content pillars, content mix ratios, and optimized posting schedules for each platform. Plan months ahead with themes, campaigns, and content that resonates with your audience and supports business objectives at every customer journey stage."
        },
        {
          icon: TrendingUp,
          title: "Competitive Analysis & Benchmarking",
          description: "Analyze competitor social strategies, identify content gaps and opportunities, and benchmark your performance against industry standards and direct competitors. Understand what's working in your industry, what's not, and where you can differentiate to stand out and capture audience attention."
        }
      ]}
      benefits={[
        {
          title: "Clear Direction & Focus",
          description: "Know exactly what to post, when to post it, and on which platforms for maximum impact"
        },
        {
          title: "Resource Optimization",
          description: "Focus time, budget, and creative resources on strategies that deliver maximum ROI and business results"
        },
        {
          title: "Aligned Business Goals",
          description: "Ensure every social effort directly supports overall business objectives and revenue targets"
        },
        {
          title: "Measurable Outcomes",
          description: "Track progress with clear KPIs and performance metrics tied to real business impact"
        }
      ]}
      whyBadge="Why Social Strategy"
      whyHeadline="Why Strategic Planning Makes All the Difference in Social Media"
      whyContent={[
        "Random posting doesn't build brands or drive sales. Successful social media requires strategic planning that aligns with business objectives, audience needs, and platform algorithms. Without a clear strategy, you're wasting time creating content that doesn't resonate, posting at wrong times, targeting the wrong audience, and ultimately failing to achieve meaningful business results.",
        "Our strategic approach starts with deeply understanding your business goals, target audience demographics and psychographics, and competitive landscape. We create detailed roadmaps that guide every post, campaign, and interaction on social media. This strategic foundation ensures consistency, relevance, and effectiveness across all your social channels.",
        "A well-crafted social media strategy saves time, reduces costs, and delivers measurable results that impact your bottom line. We provide the strategic foundation that transforms social media from a cost center into a powerful growth driver. Our strategies include detailed content calendars, posting guidelines, engagement protocols, crisis management plans, and clear KPIs to measure success and demonstrate ROI to stakeholders."
      ]}
      ctaHeadline="Ready to Create a Winning Social Strategy?"
      ctaDescription="Develop a comprehensive, data-driven social media strategy that aligns with your business goals and delivers consistent, measurable results."
      ctaButton="Get Your Strategy Session"
      gradient={{
        from: "cyan-600",
        to: "blue-600"
      }}
      breadcrumbService="Social Media Strategy"
    />
  )
}
