import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { PenTool, FileText, Target, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: 'Professional Copywriting Services - Conversion Rate Increase 190% | Sales Copy',
  description: 'Expert copywriting that converts. Increase conversion rates by 190% with persuasive sales copy, landing pages, ad copy, and website content. Professional copywriters who understand marketing psychology. Drive action, generate revenue. Free copy audit.',
  keywords: [
    'professional copywriting',
    'copywriting services',
    'sales copywriting',
    'conversion copywriting',
    'landing page copywriting',
    'ad copywriting',
    'website copywriting',
    'persuasive writing',
    'direct response copywriting',
    'marketing copywriter',
    'SEO copywriting',
    'email copywriting',
    'product descriptions',
    'sales page copy',
    'call to action writing',
    'brand messaging',
    'value proposition',
    'headline writing',
    'copy optimization',
    'B2B copywriting'
  ],
  authors: [{ name: 'The Meta Studio' }],
  creator: 'The Meta Studio',
  publisher: 'The Meta Studio',
  metadataBase: new URL('https://themetastudio.com'),
  alternates: {
    canonical: '/services/copywriting',
  },
  openGraph: {
    title: 'Professional Copywriting Services - 190% Conversion Increase | The Meta Studio',
    description: 'Expert copywriting increases conversions by 190%. Persuasive sales copy, landing pages, ads. Drive action and revenue.',
    url: 'https://themetastudio.com/services/copywriting',
    siteName: 'The Meta Studio',
    images: [
      {
        url: '/og-copywriting.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Copywriting Services - Sales Copy That Converts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Copywriting - 190% More Conversions',
    description: 'Expert sales copy, landing pages, and ad copy. Persuasive writing that drives action.',
    images: ['/twitter-copywriting.jpg'],
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
  category: 'Copywriting Services',
}

export default function CopywritingPage() {
  return (
    <ServicePageTemplate
      badge="Content & Strategy"
      title="Persuasive Copy That"
      titleHighlight="Converts and Sells"
      description="Transform browsers into buyers with professionally crafted copy that persuades, engages, and drives action. From sales pages to ad copy to website content, every word is strategically chosen to move prospects closer to conversion and generate revenue."
      features={[
        {
          icon: PenTool,
          title: "Sales Copy & Landing Pages",
          description: "Craft high-converting sales copy and landing pages that overcome objections, build desire, and compel readers to take action. We use proven copywriting frameworks, psychological triggers, and persuasion principles to create pages that turn traffic into revenue with clear value propositions and irresistible offers."
        },
        {
          icon: FileText,
          title: "Website & Brand Copy",
          description: "Develop compelling website copy that communicates your unique value proposition, differentiates your brand, and guides visitors toward conversion. Create a consistent brand voice across all touchpoints that resonates with your target audience and builds trust through clear, benefit-focused messaging."
        },
        {
          icon: Target,
          title: "Ad Copy & Creative",
          description: "Write thumb-stopping ad copy for Google Ads, Facebook, Instagram, LinkedIn, and all major advertising platforms. Craft headlines that capture attention, body copy that builds interest, and calls-to-action that drive clicks and conversions. Test multiple variations to identify winning messages that maximize ROI."
        },
        {
          icon: TrendingUp,
          title: "Email & Funnel Copy",
          description: "Create email sequences and sales funnel copy that nurtures prospects from awareness to purchase. Develop welcome series, promotional emails, abandoned cart messages, and sales sequences that build relationships, overcome objections, and systematically move prospects through your conversion funnel toward becoming customers."
        }
      ]}
      benefits={[
        {
          title: "Higher Conversion Rates",
          description: "Persuasive copy can double or triple conversion rates by addressing objections and building desire effectively"
        },
        {
          title: "Increased Revenue Per Visitor",
          description: "Better copy extracts more value from existing traffic by converting more browsers into buyers"
        },
        {
          title: "Stronger Brand Positioning",
          description: "Consistent, compelling copy differentiates your brand and establishes clear market positioning"
        },
        {
          title: "Improved Ad Performance",
          description: "Better ad copy increases click-through rates and reduces customer acquisition costs across all channels"
        }
      ]}
      whyBadge="Why Professional Copywriting"
      whyHeadline="Why Professional Copywriting Is Your Most Valuable Marketing Investment"
      whyContent={[
        "Words sell. Every visitor to your website, every person who sees your ad, every email subscriber makes decisions based on the words they read. Professional copywriting can literally double or triple your conversion rates by better communicating value, overcoming objections, building trust, and compelling action. The ROI impact of better copy far exceeds almost any other marketing investment.",
        "Our professional copywriters combine deep understanding of consumer psychology, proven persuasion frameworks, and compelling storytelling to create copy that connects emotionally and motivates action. We don't just write pretty wordswe write strategically to achieve specific business objectives whether that's generating leads, driving sales, or building brand awareness.",
        "We create copy for every stage of your customer journey: attention-grabbing headlines that stop scrolls, value-focused landing pages that convert traffic, persuasive sales pages that overcome objections, engaging email sequences that nurture prospects, and compelling ad copy that maximizes ROAS. You'll receive conversion-optimized copy backed by research, tested messaging frameworks, and clear understanding of your target audience's needs, fears, and desires. Let us transform your marketing messages into revenue-generating assets."
      ]}
      ctaHeadline="Ready to Write Copy That Converts?"
      ctaDescription="Get professionally crafted copy that persuades your audience, drives action, and generates measurable revenue for your business."
      ctaButton="Get Conversion-Focused Copy"
      gradient={{
        from: "indigo-600",
        to: "purple-600"
      }}
      breadcrumbService="Copywriting"
    />
  )
}
