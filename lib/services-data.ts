import { 
  Search, Target, TrendingUp, Zap, Sparkles, Smartphone, Users, Briefcase, 
  ShoppingCart, Palette, BarChart, Mail, Megaphone, MessageSquare, Heart, 
  FileText, PenTool, type LucideIcon
} from "lucide-react"

export interface ServiceFeature {
  icon: LucideIcon
  title: string
  description: string
}

export interface ServiceData {
  slug: string
  category: string
  title: string
  shortTitle: string
  tagline: string
  description: string
  icon: LucideIcon
  gradient: { from: string; to: string }
  metaDescription: string
  features: ServiceFeature[]
  benefits: Array<{ title: string; description: string }>
  whyHeadline: string
  whyParagraphs: string[]
  ctaHeadline: string
  ctaDescription: string
}

export const allServices: ServiceData[] = [
  {
    slug: "search-engine-optimization",
    category: "SEO Services",
    title: "Search Engine Optimization",
    shortTitle: "SEO",
    tagline: "Elevate Your Rankings, Amplify Your Growth",
    description: "Dominate search results with data-driven SEO strategies that increase organic visibility, drive qualified traffic, and deliver measurable ROI.",
    icon: Search,
    gradient: { from: "purple-600", to: "indigo-600" },
    metaDescription: "Professional SEO services that boost rankings, increase organic traffic, and drive business growth. Expert keyword research, on-page optimization, and link building.",
    features: [
      { icon: Search, title: "Advanced Keyword Research", description: "Comprehensive keyword analysis identifying high-intent search terms. We uncover opportunities competitors miss, focusing on keywords that convert visitors into customers." },
      { icon: FileText, title: "On-Page SEO Excellence", description: "Meticulous optimization of title tags, meta descriptions, headers, and content structure aligned with search algorithms and user experience." },
      { icon: BarChart, title: "Technical SEO Mastery", description: "Complete technical audit addressing site speed, mobile optimization, crawlability, and indexation for maximum search visibility." },
      { icon: TrendingUp, title: "Authority Link Building", description: "Strategic acquisition of high-quality backlinks from authoritative domains that increase domain authority and trust signals." }
    ],
    benefits: [
      { title: "Increased Organic Traffic", description: "Drive 3-5x more qualified visitors from search engines within 6-12 months" },
      { title: "Higher Conversion Rates", description: "Convert more visitors by targeting high-intent keywords and optimizing user experience" },
      { title: "Long-term ROI", description: "Build sustainable visibility that continues delivering results years after initial investment" },
      { title: "Brand Authority", description: "Establish industry leadership by ranking for competitive keywords in your niche" }
    ],
    whyHeadline: "Why Search Engine Optimization Is Critical for Business Success",
    whyParagraphs: [
      "Search engine optimization has evolved from a marketing tactic to a business necessity. With 93% of online experiences beginning with search engines, your visibility on Google directly impacts your bottom line.",
      "At The Meta Studio, we've developed a proven SEO methodology that combines technical excellence with creative strategy. Every optimization decision is backed by data, every strategy tailored to your unique goals.",
      "Our comprehensive approach includes competitor analysis, technical audits, content gap identification, and performance monitoring. Partner with us to transform your website into a powerful customer acquisition engine."
    ],
    ctaHeadline: "Ready to Dominate Search Results?",
    ctaDescription: "Let's create a data-driven SEO strategy that delivers sustainable growth and measurable ROI."
  },
  {
    slug: "local-seo",
    category: "SEO Services",
    title: "Local SEO",
    shortTitle: "Local SEO",
    tagline: "Dominate Local Search, Attract Nearby Customers",
    description: "Capture local customers actively searching for your services with strategic local SEO that puts your business on the map.",
    icon: Target,
    gradient: { from: "blue-600", to: "cyan-600" },
    metaDescription: "Local SEO services that help your business rank in Google Maps and local search results. Increase foot traffic, phone calls, and local customer acquisition.",
    features: [
      { icon: Target, title: "Google Business Profile Optimization", description: "Complete optimization with compelling descriptions, high-quality images, and strategic categories that make your listing stand out." },
      { icon: Search, title: "Local Keyword Targeting", description: "Target location-specific keywords and 'near me' searches that drive foot traffic and phone calls to your business." },
      { icon: MessageSquare, title: "Review Management & Reputation", description: "Strategic review generation system that builds 5-star reputation and showcases customer satisfaction." },
      { icon: BarChart, title: "Local Citations & NAP Consistency", description: "Build consistent listings across 50+ directories ensuring your business information is identical everywhere." }
    ],
    benefits: [
      { title: "Increase Local Visibility", description: "Appear in Google's Local 3-Pack when customers search for services near them" },
      { title: "Drive Foot Traffic", description: "Convert online searches into in-store visits with optimized local listings" },
      { title: "Build Trust & Credibility", description: "Leverage positive reviews to establish authority in your local market" },
      { title: "Outrank Local Competitors", description: "Capture market share with superior local search visibility" }
    ],
    whyHeadline: "Why Local SEO Is Essential for Location-Based Businesses",
    whyParagraphs: [
      "76% of people who search for something nearby visit a business within 24 hours, and 28% result in a purchase. Local SEO has become the most powerful channel for businesses serving specific geographic areas.",
      "Our strategies focus on Google Business Profile optimization, consistent citations, positive review generation, and location-specific content that resonates with your local community.",
      "Whether you're a restaurant, medical practice, or retail store, our proven methods will help you capture more customers. We provide detailed tracking of rankings, calls, directions, and visits from local search."
    ],
    ctaHeadline: "Ready to Own Your Local Market?",
    ctaDescription: "Let's build a local SEO strategy that fills your business with customers from your community."
  }
  // ... Additional services will be in continuation files
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return allServices.find(s => s.slug === slug)
}

export function getServicesByCategory(category: string): ServiceData[] {
  return allServices.filter(s => s.category === category)
}
