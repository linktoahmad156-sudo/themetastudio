import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { Smartphone, Target, Palette, ShoppingCart, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: 'Facebook & Instagram Ads Management - 180% ROI Increase | Meta Ads Agency',
  description: 'Expert Facebook & Instagram Ads that deliver results. Achieve 180% ROI increase with advanced targeting, creative optimization, and conversion tracking. Reach billions of users. Lower cost per acquisition. Generate more leads and sales. Free Meta Ads audit available.',
  keywords: [
    'Facebook ads',
    'Instagram ads',
    'Meta ads',
    'Facebook advertising',
    'Instagram advertising',
    'social media advertising',
    'Facebook ads management',
    'Instagram ads agency',
    'Meta ads manager',
    'Facebook marketing',
    'Instagram marketing',
    'carousel ads',
    'story ads',
    'reels ads',
    'Facebook lead ads',
    'Instagram shopping ads',
    'social media PPC',
    'Facebook retargeting',
    'lookalike audiences',
    'Meta pixel tracking'
  ],
  authors: [{ name: 'The Meta Studio' }],
  creator: 'The Meta Studio',
  publisher: 'The Meta Studio',
  metadataBase: new URL('https://themetastudio.com'),
  alternates: {
    canonical: '/services/facebook-instagram-ads',
  },
  openGraph: {
    title: 'Facebook & Instagram Ads Management - 180% ROI | The Meta Studio',
    description: 'Expert Meta Ads management with 180% ROI increase. Advanced targeting, creative optimization, conversion tracking.',
    url: 'https://themetastudio.com/services/facebook-instagram-ads',
    siteName: 'The Meta Studio',
    images: [
      {
        url: '/og-facebook-instagram-ads.jpg',
        width: 1200,
        height: 630,
        alt: 'Facebook Instagram Ads Management Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facebook & Instagram Ads - 180% ROI Increase',
    description: 'Expert Meta Ads management. Advanced targeting, lower costs, more conversions.',
    images: ['/twitter-facebook-instagram-ads.jpg'],
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
  category: 'Social Media Advertising',
}

export default function FacebookInstagramAdsPage() {
  return (
    <ServicePageTemplate
      badge="Paid Advertising"
      title="Reach Your Perfect Audience"
      titleHighlight="Where They Scroll"
      description="Connect with your ideal customers on Facebook and Instagram with visually stunning ads that stop the scroll and drive conversions. Leverage Meta's powerful targeting to reach billions of engaged users ready to discover your brand."
      features={[
        {
          icon: Target,
          title: "Advanced Audience Targeting",
          description: "Reach your ideal customers with precision targeting based on demographics, interests, behaviors, purchase history, and custom audiences. We build lookalike audiences from your best customers to find more people just like them, ensuring every dollar reaches the right person at the right time."
        },
        {
          icon: Palette,
          title: "Scroll-Stopping Creative",
          description: "Design visually compelling ad creative that captures attention in crowded social feeds and drives action. We test multiple formatssingle images, carousels, videos, stories, and reelsto find what resonates most with your audience and generates the highest engagement and conversion rates."
        },
        {
          icon: ShoppingCart,
          title: "Conversion Optimization",
          description: "Optimize campaigns for your specific business goals: leads, sales, app installs, store visits, or brand awareness. We implement Meta Pixel, Conversions API, and advanced event tracking for accurate attribution and retargeting that brings window shoppers back to complete purchases."
        },
        {
          icon: BarChart,
          title: "A/B Testing & Scaling",
          description: "Continuously test audiences, creative variations, ad copy, placements, and messaging to improve performance and reduce costs. Once we identify winning combinations that deliver strong ROI, we scale advertising spend profitably while maintaining or improving efficiency metrics."
        }
      ]}
      benefits={[
        {
          title: "Precise Audience Reach",
          description: "Target your exact customer profile with unmatched precisionreach people by age, location, interests, job title, and more"
        },
        {
          title: "Visual Brand Building",
          description: "Build brand awareness and recognition with engaging visual content that tells your story and showcases your products"
        },
        {
          title: "Multi-Format Versatility",
          description: "Advertise across Facebook, Instagram, Messenger, and Audience Network with platform-specific creative optimizations"
        },
        {
          title: "Cost-Effective Lead Gen",
          description: "Generate qualified leads at a fraction of traditional advertising costs with conversion-optimized campaigns"
        }
      ]}
      whyBadge="Why Meta Ads"
      whyHeadline="Why Facebook & Instagram Ads Are Essential for Modern Marketing"
      whyContent={[
        "With 3.96 billion combined monthly active users, Facebook and Instagram provide unparalleled access to your target audience regardless of your industry or niche. Meta's sophisticated targeting capabilitiesbuilt from years of user data and behavior trackingallow you to reach precisely the right people at the right time with the right message, something impossible with traditional advertising channels.",
        "The Meta Studio specializes in creating thumb-stopping ad creative that cuts through the noise of endless social feeds. We understand exactly what makes people stop scrolling: bold visuals, compelling copy, clear value propositions, and emotional resonance. Our team combines creative excellence with data-driven optimization to deliver campaigns that achieve your specific business objectives efficiently.",
        "We manage every aspect of your Meta advertising strategy: audience research and development, creative production and testing, campaign setup and structure, daily performance monitoring and optimization, A/B testing of all variables, and comprehensive performance reporting. You'll know exactly how many leads and sales your ads generate, with detailed attribution tracking from initial click to final conversion. Let us help you harness the immense power of social advertising to grow your business profitably and predictably."
      ]}
      ctaHeadline="Ready to Reach Millions of Your Ideal Customers?"
      ctaDescription="Launch Facebook and Instagram campaigns that build your brand and drive measurable business results with expert Meta advertising management."
      ctaButton="Start Your Meta Ads Campaign"
      gradient={{
        from: "pink-600",
        to: "rose-600"
      }}
      breadcrumbService="Facebook & Instagram Ads"
    />
  )
}
