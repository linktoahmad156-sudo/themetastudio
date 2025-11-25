import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { Users, Target, Mail, Briefcase, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: 'LinkedIn Ads Management - B2B Lead Generation | 220% More Quality Leads',
  description: 'Professional LinkedIn Ads that generate B2B leads. Achieve 220% more qualified leads with expert targeting of decision-makers. Reach C-level executives, managers, and professionals. LinkedIn Sponsored Content, InMail, Text Ads. Free LinkedIn Ads consultation.',
  keywords: [
    'LinkedIn ads',
    'LinkedIn advertising',
    'B2B advertising',
    'LinkedIn marketing',
    'B2B lead generation',
    'LinkedIn Sponsored Content',
    'LinkedIn InMail',
    'professional advertising',
    'LinkedIn ads management',
    'account-based marketing',
    'B2B PPC',
    'LinkedIn campaign manager',
    'business advertising',
    'executive targeting',
    'decision-maker advertising',
    'B2B social media ads',
    'LinkedIn conversion ads',
    'professional network advertising',
    'enterprise marketing',
    'B2B demand generation'
  ],
  authors: [{ name: 'The Meta Studio' }],
  creator: 'The Meta Studio',
  publisher: 'The Meta Studio',
  metadataBase: new URL('https://themetastudio.com'),
  alternates: {
    canonical: '/services/linkedin-ads',
  },
  openGraph: {
    title: 'LinkedIn Ads Management - 220% More B2B Leads | The Meta Studio',
    description: '220% increase in qualified B2B leads. Expert LinkedIn Ads target decision-makers and executives with precision.',
    url: 'https://themetastudio.com/services/linkedin-ads',
    siteName: 'The Meta Studio',
    images: [
      {
        url: '/og-linkedin-ads.jpg',
        width: 1200,
        height: 630,
        alt: 'LinkedIn Ads Management - B2B Lead Generation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinkedIn Ads - 220% More B2B Leads',
    description: 'Expert B2B advertising on LinkedIn. Target decision-makers and generate quality leads.',
    images: ['/twitter-linkedin-ads.jpg'],
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
  category: 'B2B Advertising Services',
}

export default function LinkedInAdsPage() {
  return (
    <ServicePageTemplate
      badge="Paid Advertising"
      title="Reach Decision-Makers"
      titleHighlight="Where Business Happens"
      description="Connect with B2B decision-makers and industry professionals with targeted LinkedIn advertising that generates high-quality leads for your business. Access 930 million professionals in a business mindset ready to evaluate solutions."
      features={[
        {
          icon: Target,
          title: "Professional Targeting Precision",
          description: "Target by job title, company size, industry vertical, seniority level, skills, job functions, and more. LinkedIn's rich professional data ensures your ads reach actual decision-makers with budget authority and purchasing power, not just interested individuals without influence."
        },
        {
          icon: Mail,
          title: "Lead Gen Forms That Convert",
          description: "Capture high-quality leads without users leaving LinkedIn using pre-filled Lead Gen Forms that auto-populate with LinkedIn profile data. Remove friction from the conversion process and dramatically increase form completion rates while maintaining lead quality and accuracy."
        },
        {
          icon: Briefcase,
          title: "Thought Leadership Content Promotion",
          description: "Promote valuable contentwhitepapers, webinars, case studies, research reportsthat establishes your authority and nurtures prospects through the complex B2B buying journey. Position your brand as the trusted expert prospects turn to when ready to make decisions."
        },
        {
          icon: BarChart,
          title: "Account-Based Marketing Excellence",
          description: "Target specific companies and key contacts with personalized messaging tailored to their industry, challenges, and needs. Upload lists of target accounts and deliver customized campaigns to decision-makers at your ideal customers, perfect for enterprise sales strategies."
        }
      ]}
      benefits={[
        {
          title: "Quality B2B Leads",
          description: "Generate leads from verified professionals actively engaged in business decision-making and research"
        },
        {
          title: "Decision-Maker Access",
          description: "Reach C-suite executives, managers, and influencers who have the authority to make purchasing decisions"
        },
        {
          title: "Professional Context",
          description: "Connect with prospects in a business mindset, not scrolling casuallythey're on LinkedIn to work and learn"
        },
        {
          title: "Higher Lead Value",
          description: "While CPL may be higher than other platforms, LinkedIn leads typically have significantly higher lifetime value"
        }
      ]}
      whyBadge="Why LinkedIn Advertising"
      whyHeadline="Why LinkedIn Advertising Dominates B2B Lead Generation"
      whyContent={[
        "LinkedIn is the world's largest professional network with 930 million members, making it the premier platform for B2B marketing and professional services. When you need to reach specific job titles at specific companies with decision-making authority, no other platform comes close to LinkedIn's targeting precision and professional context. It's where business decisions are researched, discussed, and ultimately made.",
        "Our LinkedIn advertising strategies focus on what actually works in the B2B buying cycle: educational content, social proof, clear ROI demonstrations, and value propositions that resonate with professional decision-makers. We understand the longer sales cycles and multiple stakeholders involved in B2B purchases, crafting campaigns that nurture prospects from initial awareness through consideration to final decision.",
        "We leverage all of LinkedIn's powerful ad formatsSponsored Content, Sponsored Messaging (formerly Message Ads), Dynamic Ads, and Text Adschoosing the right format for your objectives and target audience. Our campaigns include comprehensive A/B testing, progressive audience refinement, and continuous optimization based on cost per lead, lead quality scores, and pipeline contribution metrics. Let us help you tap into LinkedIn's massive professional audience and fill your sales pipeline with qualified B2B opportunities that close."
      ]}
      ctaHeadline="Ready to Fill Your Pipeline with Quality Leads?"
      ctaDescription="Launch LinkedIn campaigns that connect you directly with B2B decision-makers in your target market and drive measurable pipeline growth."
      ctaButton="Start Your LinkedIn Campaign"
      gradient={{
        from: "blue-700",
        to: "blue-500"
      }}
      breadcrumbService="LinkedIn Advertising"
    />
  )
}
