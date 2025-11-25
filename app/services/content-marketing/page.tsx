import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { FileText, PenTool, Search, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: 'Content Marketing Services - Drive 280% More Traffic | SEO Content Strategy',
  description: 'Expert content marketing that drives results. Achieve 280% more organic traffic with strategic blog writing, thought leadership, and SEO-optimized content. Build authority, generate leads, increase conversions. Professional content creation services. Free content audit.',
  keywords: [
    'content marketing services',
    'content marketing strategy',
    'blog writing services',
    'SEO content writing',
    'thought leadership content',
    'content creation agency',
    'blog content marketing',
    'content strategy consulting',
    'editorial content',
    'content planning',
    'content distribution',
    'inbound marketing',
    'content optimization',
    'long-form content',
    'pillar content strategy',
    'content calendar',
    'content marketing ROI',
    'B2B content marketing',
    'content marketing agency',
    'article writing services'
  ],
  authors: [{ name: 'The Meta Studio' }],
  creator: 'The Meta Studio',
  publisher: 'The Meta Studio',
  metadataBase: new URL('https://themetastudio.com'),
  alternates: {
    canonical: '/services/content-marketing',
  },
  openGraph: {
    title: 'Content Marketing Services - 280% More Traffic | The Meta Studio',
    description: 'Expert content marketing drives 280% more organic traffic. Strategic blog writing, thought leadership, SEO content creation.',
    url: 'https://themetastudio.com/services/content-marketing',
    siteName: 'The Meta Studio',
    images: [
      {
        url: '/og-content-marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Content Marketing Services - Blog Writing & Strategy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Marketing - 280% More Organic Traffic',
    description: 'Expert content strategy and creation that builds authority and drives sustainable growth.',
    images: ['/twitter-content-marketing.jpg'],
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
  category: 'Content Marketing Services',
}

export default function ContentMarketingPage() {
  return (
    <ServicePageTemplate
      badge="Content & Strategy"
      title="Create Valuable Content"
      titleHighlight="That Attracts and Converts"
      description="Establish thought leadership and drive sustainable organic growth with strategic content marketing that educates, engages, and converts your audience. Build trust through valuable content that positions you as the go-to expert in your industry."
      features={[
        {
          icon: FileText,
          title: "Strategic Content Planning",
          description: "Develop comprehensive content strategies aligned with business goals, customer journey stages, keyword opportunities, and competitive gaps. Create detailed content calendars that map topics to buyer personas, search intent, and business objectives ensuring every piece serves a strategic purpose."
        },
        {
          icon: PenTool,
          title: "Professional Content Creation",
          description: "Produce high-quality blog posts, in-depth articles, comprehensive guides, detailed whitepapers, and case studies that establish expertise and provide genuine value to readers. Our experienced writers combine subject matter expertise with engaging storytelling that keeps readers coming back for more."
        },
        {
          icon: Search,
          title: "SEO Content Optimization",
          description: "Optimize every piece of content for both search engines and human readers simultaneously. Target valuable keywords with commercial intent while maintaining natural, engaging writing that provides real value. Implement on-page SEO best practices including proper heading structure, internal linking, and metadata optimization."
        },
        {
          icon: TrendingUp,
          title: "Content Promotion & Distribution",
          description: "Amplify content reach and impact through strategic multi-channel promotion across social media, email marketing, influencer outreach, and content syndication platforms. Maximize visibility and engagement through paid promotion of top-performing content to relevant audiences who will find it most valuable."
        }
      ]}
      benefits={[
        {
          title: "Increased Organic Traffic",
          description: "Attract qualified visitors searching for solutions through valuable content that ranks in search results for important keywords"
        },
        {
          title: "Established Thought Leadership",
          description: "Position your brand as an industry authority and trusted resource that prospects turn to for expertise and guidance"
        },
        {
          title: "Improved Lead Generation",
          description: "Convert content readers into qualified leads through strategic CTAs, lead magnets, and conversion-optimized landing pages"
        },
        {
          title: "Long-term Asset Building",
          description: "Create evergreen content assets that continue delivering traffic, leads, and value for years after initial publication"
        }
      ]}
      whyBadge="Why Content Marketing"
      whyHeadline="Why Content Marketing Is The Foundation of Modern Digital Strategy"
      whyContent={[
        "Content marketing generates 3x more leads than traditional outbound marketing while costing 62% less per lead. It builds trust and credibility by providing genuine value before asking for anything in return. Unlike paid advertising that stops working when you stop spending, quality content continues attracting visitors, building authority, and generating leads indefinitely.",
        "Our content marketing team combines strategic thinking, deep research capabilities, SEO expertise, and exceptional writing skills to create content that ranks in search engines AND genuinely resonates with human readers. We don't create thin, keyword-stuffed contentwe produce comprehensive, valuable resources that earn backlinks, social shares, and customer trust.",
        "From initial topic ideation and keyword research to final publication, promotion, and performance tracking, we handle everything. You'll receive a consistent stream of high-quality content that educates your audience, establishes your expertise, drives organic traffic, generates qualified leads, and ultimately grows your business. Let us build a content marketing engine that transforms your website into the go-to resource in your industry."
      ]}
      ctaHeadline="Ready to Build a Content Marketing Engine?"
      ctaDescription="Launch a strategic content marketing program that attracts visitors, builds authority, generates leads, and drives sustainable business growth."
      ctaButton="Start Creating Great Content"
      gradient={{
        from: "amber-600",
        to: "orange-600"
      }}
      breadcrumbService="Content Marketing"
    />
  )
}
