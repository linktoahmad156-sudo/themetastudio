import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { Heart, Search, Briefcase, Palette, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: 'Influencer Marketing | Leverage Trusted Voices',
  description: 'Connect with relevant influencers who authentically promote your brand. Influencer identification, campaign management, and performance tracking for brand growth.',
  keywords: ['influencer marketing', 'influencer campaigns', 'brand partnerships', 'influencer outreach', 'micro influencers', 'influencer collaboration'],
  openGraph: {
    title: 'Influencer Marketing | The Meta Studio',
    description: 'Reach new audiences through authentic influencer partnerships and strategic collaborations.',
    images: ['/services/influencer-marketing/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer Marketing | The Meta Studio',
    description: 'Leverage trusted voices to build your brand and drive measurable business results.',
    images: ['/services/influencer-marketing/twitter-image'],
  },
}

export default function InfluencerMarketingPage() {
  return (
    <ServicePageTemplate
      badge="Social Media Marketing"
      title="Leverage Trusted Voices to"
      titleHighlight="Reach New Audiences"
      description="Connect with relevant influencers who authentically promote your brand to highly engaged audiences, driving awareness, trust, and sales. Partner with creators whose values align with yours and whose followers match your target customers."
      features={[
        {
          icon: Search,
          title: "Influencer Identification & Vetting",
          description: "Find and vet influencers perfectly aligned with your brand values, target audience demographics, and marketing budget. We analyze engagement rates, audience demographics and authenticity, content quality, brand fit, and past campaign performance to identify ideal partnership opportunities that deliver real results."
        },
        {
          icon: Briefcase,
          title: "Campaign Strategy & Management",
          description: "Design comprehensive influencer campaigns that achieve specific business objectives from brand awareness to direct sales. Manage every detail: influencer outreach and relationship building, contract negotiations, content brief creation, deliverable tracking, and campaign execution from initial contact to final reporting."
        },
        {
          icon: Palette,
          title: "Content Collaboration & Review",
          description: "Work closely with influencers to create authentic, engaging content that resonates with their unique audience while meeting your brand guidelines and campaign goals. Strike the perfect balance between creative freedom and brand consistency for maximum impact and authenticity."
        },
        {
          icon: BarChart,
          title: "Performance Tracking & ROI",
          description: "Track detailed campaign performance metrics including reach, impressions, engagement rates, website traffic, conversions, and most importantlyreturn on investment. Provide comprehensive reporting that proves the business value of influencer partnerships and identifies top-performing creators for future campaigns."
        }
      ]}
      benefits={[
        {
          title: "Access to Engaged Audiences",
          description: "Reach highly engaged audiences who trust and value the influencers they follow and their recommendations"
        },
        {
          title: "Authentic Brand Advocacy",
          description: "Leverage genuine recommendations from trusted voices rather than traditional ads that consumers increasingly ignore"
        },
        {
          title: "Increased Brand Awareness",
          description: "Expose your brand to new audiences who perfectly match your target demographic and psychographic profile"
        },
        {
          title: "Content Creation at Scale",
          description: "Generate authentic user-generated content you can repurpose across your own marketing channels and campaigns"
        }
      ]}
      whyBadge="Why Influencer Marketing"
      whyHeadline="Why Influencer Marketing Is The Fastest Growing Marketing Channel"
      whyContent={[
        "Consumers increasingly trust recommendations from people they follow on social media more than traditional advertising or even celebrity endorsements. Research shows 61% of consumers trust influencer recommendations, while only 38% trust branded social media content. Influencer marketing taps into established trust and authentic relationships to drive awareness, consideration, and purchases.",
        "Our influencer marketing approach focuses on genuine, long-term partnerships rather than one-off transactional posts. We identify influencers whose values authentically align with your brand, whose audience demographics match your target customer, and who create content that resonates with their followers. This ensures campaigns feel natural and authentic rather than forced or promotional.",
        "From nano-influencers with highly engaged niche audiences to macro-influencers with millions of followers, we manage the entire influencer marketing process: identification based on your goals, relationship development and outreach, contract negotiation, creative brief development, content review and approval, campaign execution, and comprehensive performance tracking. Let us connect you with influential voices that genuinely matter to your target audience and drive measurable business results."
      ]}
      ctaHeadline="Ready to Partner with Influential Voices?"
      ctaDescription="Launch strategic influencer campaigns that authentically promote your brand to engaged, relevant audiences and drive measurable growth."
      ctaButton="Start Your Influencer Campaign"
      gradient={{
        from: "rose-600",
        to: "pink-600"
      }}
      breadcrumbService="Influencer Marketing"
    />
  )
}
