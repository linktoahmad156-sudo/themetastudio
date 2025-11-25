import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { Mail, Target, Zap, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: 'Email Marketing Services - 320% ROI Increase | Email Campaign Management',
  description: 'Professional email marketing that delivers results. Achieve 320% ROI increase with expert email campaigns, automation, and segmentation. Build customer relationships, drive repeat sales, increase lifetime value. Newsletter creation, drip campaigns, analytics. Free email audit.',
  keywords: [
    'email marketing services',
    'email marketing agency',
    'email campaign management',
    'newsletter marketing',
    'email automation',
    'drip email campaigns',
    'email marketing strategy',
    'marketing automation',
    'email segmentation',
    'transactional emails',
    'promotional emails',
    'email list building',
    'email copywriting',
    'email design',
    'ESP integration',
    'email analytics',
    'cart abandonment emails',
    'welcome email series',
    'email deliverability',
    'email marketing ROI'
  ],
  authors: [{ name: 'The Meta Studio' }],
  creator: 'The Meta Studio',
  publisher: 'The Meta Studio',
  metadataBase: new URL('https://themetastudio.com'),
  alternates: {
    canonical: '/services/email-marketing',
  },
  openGraph: {
    title: 'Email Marketing Services - 320% ROI Increase | The Meta Studio',
    description: 'Expert email marketing delivers 320% ROI. Strategic campaigns, automation, segmentation. Drive repeat sales.',
    url: 'https://themetastudio.com/services/email-marketing',
    siteName: 'The Meta Studio',
    images: [
      {
        url: '/og-email-marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Email Marketing Services - Campaign Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Email Marketing - 320% ROI Increase',
    description: 'Expert email campaigns, automation, and segmentation. Drive repeat sales and customer loyalty.',
    images: ['/twitter-email-marketing.jpg'],
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
  category: 'Email Marketing Services',
}

export default function EmailMarketingPage() {
  return (
    <ServicePageTemplate
      badge="Content & Strategy"
      title="Nurture Leads and Drive Sales"
      titleHighlight="with Strategic Email"
      description="Build lasting customer relationships and drive consistent, predictable revenue with email marketing campaigns that engage subscribers, nurture prospects, and convert leads into loyal customers. Email remains the highest ROI marketing channel."
      features={[
        {
          icon: Mail,
          title: "Email Campaign Design & Development",
          description: "Create beautiful, mobile-responsive email templates that perfectly reflect your brand identity and drive recipient action. Design for both aesthetic appeal and conversion optimization with clear calls-to-action, compelling copy, and engaging visuals that cut through inbox clutter and command attention."
        },
        {
          icon: Target,
          title: "List Segmentation & Personalization",
          description: "Segment email lists based on subscriber behavior, purchase history, engagement levels, demographics, and lifecycle stage. Deliver highly personalized content that resonates with each specific segment, dramatically improving open rates, click rates, and conversions through relevant, targeted messaging."
        },
        {
          icon: Zap,
          title: "Marketing Automation Sequences",
          description: "Build sophisticated automated drip campaigns, welcome email sequences, abandoned cart recovery emails, post-purchase follow-ups, and re-engagement campaigns that work 24/7 to nurture leads and drive sales while you sleep. Set it once, generate revenue forever."
        },
        {
          icon: BarChart,
          title: "Performance Tracking & Optimization",
          description: "Monitor comprehensive email metrics including open rates, click-through rates, conversion rates, revenue per email, and subscriber lifetime value. Continuously A/B test subject lines, send times, content, CTAs, and design elements to improve performance and maximize ROI from your email program."
        }
      ]}
      benefits={[
        {
          title: "Highest Marketing ROI",
          description: "Email delivers $42 return for every $1 spentthe highest ROI of any marketing channel by far"
        },
        {
          title: "Direct Customer Access",
          description: "Own your audience and communicate directly without algorithm changes or platform policy updates affecting reach"
        },
        {
          title: "Automated Revenue Generation",
          description: "Set up automated sequences that nurture leads and drive sales on autopilot without ongoing manual effort"
        },
        {
          title: "Strengthened Relationships",
          description: "Stay top-of-mind with valuable content that builds trust, loyalty, and long-term customer relationships"
        }
      ]}
      whyBadge="Why Email Marketing"
      whyHeadline="Why Email Marketing Delivers Unmatched ROI and Business Value"
      whyContent={[
        "Email marketing consistently delivers the highest return on investment of any digital marketing channelan average of $42 for every $1 spent. Unlike social media where algorithms control who sees your content, with email you own direct access to your audience. Every message reaches subscriber inboxes (assuming proper deliverability), giving you predictable, reliable communication with customers and prospects.",
        "Our email marketing strategies combine compelling design, persuasive copywriting, sophisticated segmentation, and data-driven optimization to maximize results. We create emails that subscribers actually want to open and read, not generic blasts that get immediately deleted. Our approach focuses on providing genuine value that builds relationships and trust over time.",
        "We manage every aspect of your email marketing program: email list growth strategies, template design and development, content creation and copywriting, segmentation strategy, automation workflow building, A/B testing and optimization, deliverability monitoring, and comprehensive performance analytics. You'll receive detailed reporting showing exactly how email marketing contributes to revenue, customer retention, and business growth. Let us transform your email list into a predictable revenue-generating machine."
      ]}
      ctaHeadline="Ready to Maximize Email Marketing ROI?"
      ctaDescription="Launch email marketing campaigns that nurture relationships, engage subscribers, and drive consistent revenue growth for your business."
      ctaButton="Start Your Email Program"
      gradient={{
        from: "violet-600",
        to: "purple-600"
      }}
      breadcrumbService="Email Marketing"
    />
  )
}
