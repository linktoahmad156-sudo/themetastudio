import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { TrendingUp, Target, Palette, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: 'YouTube Ads Management Services - Video Advertising | 160% More Conversions',
  description: 'Expert YouTube Ads that drive results. Achieve 160% more conversions with professional video advertising. Reach 2 billion users. TrueView, bumper ads, discovery ads. Lower CPV, higher engagement. Free YouTube Ads strategy consultation available.',
  keywords: [
    'YouTube ads',
    'YouTube advertising',
    'video advertising',
    'YouTube marketing',
    'video ads management',
    'TrueView ads',
    'YouTube pre-roll ads',
    'bumper ads',
    'discovery ads',
    'video marketing',
    'YouTube campaigns',
    'video PPC',
    'YouTube in-stream ads',
    'video conversion ads',
    'YouTube remarketing',
    'video ad production',
    'YouTube SEO ads',
    'masthead ads',
    'video advertising agency',
    'YouTube Google Ads'
  ],
  authors: [{ name: 'The Meta Studio' }],
  creator: 'The Meta Studio',
  publisher: 'The Meta Studio',
  metadataBase: new URL('https://themetastudio.com'),
  alternates: {
    canonical: '/services/youtube-ads',
  },
  openGraph: {
    title: 'YouTube Ads Management - 160% More Conversions | The Meta Studio',
    description: 'Expert YouTube video advertising with 160% conversion increase. Reach billions of viewers with professional ad campaigns.',
    url: 'https://themetastudio.com/services/youtube-ads',
    siteName: 'The Meta Studio',
    images: [
      {
        url: '/og-youtube-ads.jpg',
        width: 1200,
        height: 630,
        alt: 'YouTube Ads Management Services - Video Advertising',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Ads - 160% More Conversions',
    description: 'Expert video advertising on YouTube. Reach billions, lower costs, more conversions.',
    images: ['/twitter-youtube-ads.jpg'],
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
  category: 'Video Advertising Services',
}

export default function YouTubeAdsPage() {
  return (
    <ServicePageTemplate
      badge="Paid Advertising"
      title="Engage Audiences with"
      titleHighlight="Powerful Video Advertising"
      description="Capture attention and drive action with strategic YouTube advertising that reaches billions of viewers actively watching content related to your business. Leverage the power of video to tell your story and convert viewers into customers."
      features={[
        {
          icon: TrendingUp,
          title: "Skippable & Non-Skippable Ads",
          description: "Create compelling video ads optimized for YouTube's various formats including TrueView, bumper ads, and non-skippable formats. We craft powerful opening hooks that capture attention in the critical first 5 seconds and deliver messaging that drives action before viewers have a chance to skip."
        },
        {
          icon: Target,
          title: "Intent-Based Targeting",
          description: "Reach people actively searching for products and services like yours with in-market audiences, custom intent targeting, and keyword-based placements on relevant videos. Leverage YouTube's connection to Google Search to target users based on their demonstrated purchase intent and search behavior."
        },
        {
          icon: Palette,
          title: "Video Creative Production",
          description: "Develop scroll-stopping video content specifically optimized for YouTube's platform and viewer expectations. We handle everything from scripting and storyboarding to filming, editing, and optimizationor we can work with your existing video assets to maximize their advertising performance."
        },
        {
          icon: BarChart,
          title: "View & Conversion Tracking",
          description: "Track comprehensive video performance metrics including views, view rate, engagement, watch time, click-through rates, and most importantlyactual conversions and sales. We optimize campaigns based on view-through conversions, direct conversions, and cost per acquisition to maximize your return on ad spend."
        }
      ]}
      benefits={[
        {
          title: "Massive Audience Reach",
          description: "Access YouTube's 2.7 billion monthly users and advertise to people actively watching relevant content"
        },
        {
          title: "Visual Storytelling Power",
          description: "Tell your brand story, demonstrate products, and build emotional connections through powerful video content"
        },
        {
          title: "Cost-Effective Awareness",
          description: "Pay only when people watch your ad, making YouTube one of the most cost-effective channels for brand building"
        },
        {
          title: "Multi-Device Presence",
          description: "Reach audiences across desktop computers, mobile devices, tablets, and connected TV devices wherever they watch"
        }
      ]}
      whyBadge="Why YouTube Advertising"
      whyHeadline="Why YouTube Advertising Drives Unmatched Engagement"
      whyContent={[
        "YouTube is the second largest search engine in the world and the most popular video platform globally, with users watching over 1 billion hours of content daily. People don't just passively watch YouTubethey actively search for solutions, research products before purchase, learn new skills, and discover brands. This active, intent-driven engagement creates prime advertising opportunities when you deliver relevant, valuable video content at the right moment.",
        "The Meta Studio creates YouTube ad campaigns that genuinely work and drive measurable results. We understand the unique dynamics of video advertising: the critical importance of the first 5 seconds, the power of demonstration over mere explanation, how to create ads that feel like valuable content rather than disruptive interruptions, and the technical requirements for various ad formats and placements.",
        "We leverage Google's sophisticated targeting infrastructure to reach people based on their search history, video consumption patterns, demonstrated purchase intent, and detailed demographic information. Whether your goal is brand awareness, consideration, traffic, or direct response conversions, we build campaigns specifically optimized for your objectives. You'll receive detailed reporting on views, engagement metrics, website traffic, lead generation, and conversions generated from your video advertising investment."
      ]}
      ctaHeadline="Ready to Capture Attention with Video?"
      ctaDescription="Launch YouTube advertising campaigns that engage massive audiences and drive measurable business results through the power of video storytelling."
      ctaButton="Start Your YouTube Campaign"
      gradient={{
        from: "red-600",
        to: "pink-600"
      }}
      breadcrumbService="YouTube Advertising"
    />
  )
}
