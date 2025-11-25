import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { MessageSquare, Heart, Users, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: 'Community Management | Build Loyal Audiences',
  description: 'Foster thriving online communities through responsive engagement and relationship building. Transform followers into brand advocates with professional community management.',
  keywords: ['community management', 'social media engagement', 'online community', 'brand community', 'social media moderation', 'customer engagement'],
  openGraph: {
    title: 'Community Management | The Meta Studio',
    description: 'Build loyal audiences through authentic engagement and professional community management.',
    images: ['/services/community-management/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community Management | The Meta Studio',
    description: 'Transform followers into brand advocates with expert community management services.',
    images: ['/services/community-management/twitter-image'],
  },
}

export default function CommunityManagementPage() {
  return (
    <ServicePageTemplate
      badge="Social Media Marketing"
      title="Build Loyal Audiences Through"
      titleHighlight="Authentic Engagement"
      description="Foster thriving online communities through responsive engagement, relationship building, and authentic conversations that create passionate brand advocates. Turn casual followers into loyal customers who actively promote your business."
      features={[
        {
          icon: MessageSquare,
          title: "Real-Time Engagement",
          description: "Respond promptly to comments, messages, mentions, and interactions across all social platforms. Show your audience you're listening and genuinely care about their input, questions, and feedback. Quick, authentic responses build trust and strengthen relationships that turn followers into customers."
        },
        {
          icon: Heart,
          title: "Relationship Building",
          description: "Transform passive followers into passionate brand advocates through genuine, personalized interactions and consistent community cultivation. Build meaningful connections by remembering regular community members, celebrating their wins, and making them feel valued as part of your brand family."
        },
        {
          icon: Users,
          title: "Crisis Management & Moderation",
          description: "Handle negative feedback professionally and constructively, moderate inappropriate or spam content, and protect your brand reputation during challenging situations. We turn potential PR disasters into opportunities to showcase your values and commitment to customer satisfaction."
        },
        {
          icon: BarChart,
          title: "Community Insights & Reporting",
          description: "Monitor community sentiment, identify emerging trends and topics, and gather valuable customer feedback that informs product development and marketing decisions. Your community is a goldmine of insightswe extract actionable intelligence from every interaction."
        }
      ]}
      benefits={[
        {
          title: "Increased Customer Loyalty",
          description: "Build lasting relationships that create repeat customers, higher lifetime value, and enthusiastic referrals"
        },
        {
          title: "Improved Brand Reputation",
          description: "Show responsiveness and genuine care that enhances brand perception and differentiates you from competitors"
        },
        {
          title: "Valuable Customer Insights",
          description: "Gather direct, unfiltered feedback about products, services, content, and customer needs from real conversations"
        },
        {
          title: "Higher Engagement Rates",
          description: "Active community management dramatically increases engagement metrics and algorithmic reach on all platforms"
        }
      ]}
      whyBadge="Why Community Management"
      whyHeadline="Why Active Community Management Drives Business Growth"
      whyContent={[
        "Social media is inherently socialit requires active participation and genuine conversation, not just one-way broadcasting of promotional messages. Brands that authentically engage with their audience build stronger emotional connections, earn customer loyalty, and drive significantly more business than those that simply post and ghost. Your community is your most valuable marketing asset when properly cultivated.",
        "Our professional community managers are thoroughly trained in your brand voice, customer service best practices, crisis management protocols, and engagement strategies that drive results. We respond quickly and authentically to every interaction, turning routine comments into meaningful conversations that strengthen customer relationships and build brand affinity.",
        "We don't just manage comments and messageswe strategically build thriving communities around your brand. Through proactive engagement, strategic conversation starting, user-generated content campaigns, and recognition of community members, we transform passive followers into active brand advocates who enthusiastically recommend you to their networks and defend your brand reputation."
      ]}
      ctaHeadline="Ready to Build a Thriving Community?"
      ctaDescription="Launch a professional community management strategy that transforms casual followers into loyal brand advocates who drive business growth."
      ctaButton="Start Building Your Community"
      gradient={{
        from: "emerald-600",
        to: "teal-600"
      }}
      breadcrumbService="Community Management"
    />
  )
}
