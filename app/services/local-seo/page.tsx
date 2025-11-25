import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { Target, Search, MessageSquare, BarChart, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: 'Local SEO Services - Rank #1 in Google Maps | Get More Local Customers',
  description: 'Professional Local SEO services that dominate local search. Increase Google Maps visibility by 250%, get more foot traffic, and attract nearby customers. Expert Google Business Profile optimization, local citations, review management. Free local SEO audit.',
  keywords: [
    'local SEO services',
    'local search optimization',
    'Google Maps SEO',
    'Google Business Profile',
    'local SEO agency',
    'near me optimization',
    'local citations',
    'review management',
    'local business SEO',
    'map pack rankings',
    'local link building',
    'NAP citations',
    'local search marketing',
    'location-based SEO',
    'geo-targeted SEO',
    'local ranking factors',
    'Google My Business',
    'local SEO strategy',
    'neighborhood marketing',
    'local organic traffic'
  ],
  authors: [{ name: 'The Meta Studio' }],
  creator: 'The Meta Studio',
  publisher: 'The Meta Studio',
  metadataBase: new URL('https://themetastudio.com'),
  alternates: {
    canonical: '/services/local-seo',
  },
  openGraph: {
    title: 'Local SEO Services - Rank #1 in Google Maps | The Meta Studio',
    description: '250% increase in local visibility. Expert Local SEO gets you more customers from nearby searches. Dominate Google Maps.',
    url: 'https://themetastudio.com/services/local-seo',
    siteName: 'The Meta Studio',
    images: [
      {
        url: '/og-local-seo.jpg',
        width: 1200,
        height: 630,
        alt: 'Local SEO Services - Google Maps Optimization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Services - Dominate Google Maps',
    description: '250% more local visibility. Get more customers from nearby searches with expert Local SEO.',
    images: ['/twitter-local-seo.jpg'],
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
  category: 'Local SEO Services',
}

export default function LocalSEOPage() {
  return (
    <ServicePageTemplate
      badge="Local SEO Services"
      title="Dominate Local Search,"
      titleHighlight="Attract Nearby Customers"
      description="Capture local customers actively searching for your services with strategic local SEO that puts your business on the mapliterally. Increase visibility in Google Maps, drive foot traffic, and convert nearby searchers into loyal customers."
      features={[
        {
          icon: Target,
          title: "Google Business Profile Optimization",
          description: "Complete optimization of your Google Business Profile with compelling descriptions, high-quality images, strategic categories, and attributes that make your listing stand out in local search and Google Maps results. We ensure your profile is fully optimized to attract clicks and calls."
        },
        {
          icon: Search,
          title: "Local Keyword Targeting",
          description: "Research and target location-specific keywords that local customers use when searching for your services. We identify 'near me' searches and geo-modified terms that drive foot traffic and phone calls to your business, ensuring you appear when customers are ready to buy."
        },
        {
          icon: MessageSquare,
          title: "Review Management & Reputation",
          description: "Strategic review generation and management system that builds your 5-star reputation. We help you earn more positive reviews, respond professionally to all feedback, and showcase customer satisfaction to attract new business and build trust in your community."
        },
        {
          icon: BarChart,
          title: "Local Citations & NAP Consistency",
          description: "Build consistent business listings across 50+ local directories, review sites, and industry-specific platforms. We ensure your Name, Address, and Phone number (NAP) are identical everywhere search engines look, boosting your local search authority and credibility."
        }
      ]}
      benefits={[
        {
          title: "Increase Local Visibility",
          description: "Appear in Google's Local 3-Pack and Maps results when customers search for services near them"
        },
        {
          title: "Drive Foot Traffic",
          description: "Convert online searches into in-store visits with optimized local listings and accurate business information"
        },
        {
          title: "Build Trust & Credibility",
          description: "Leverage positive reviews and consistent information across the web to establish authority in your local market"
        },
        {
          title: "Outrank Local Competitors",
          description: "Capture market share from competitors with superior local search visibility and customer engagement"
        }
      ]}
      whyBadge="Why Choose Local SEO"
      whyHeadline="Why Local SEO Is Essential for Location-Based Businesses"
      whyContent={[
        "Local SEO has become the most powerful marketing channel for businesses serving specific geographic areas. When someone searches 'best [your service] near me,' you need to appear in the results. 76% of people who search for something nearby visit a business within 24 hours, and 28% of those searches result in a purchase. That's immediate, high-intent traffic ready to become customers.",
        "Our local SEO strategies focus on the elements that matter most: Google Business Profile optimization, consistent NAP citations across the web, positive review generation, and location-specific content creation. We understand exactly how Google's local algorithm works and what it takes to rank in the coveted Local 3-Pack that appears at the top of search results.",
        "Whether you're a restaurant, medical practice, law firm, retail store, or service provider, our proven local SEO methods will help you capture more customers in your service area. We provide detailed tracking of local rankings, phone calls, direction requests, and website visits from local searchgiving you clear visibility into your return on investment and business growth."
      ]}
      ctaHeadline="Ready to Own Your Local Market?"
      ctaDescription="Let's build a local SEO strategy that fills your business with customers from your community and establishes you as the go-to choice in your area."
      ctaButton="Get Your Free Local SEO Audit"
      gradient={{
        from: "blue-600",
        to: "cyan-600"
      }}
      breadcrumbService="Local SEO"
    />
  )
}
