import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { Zap, Smartphone, Search, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: 'Technical SEO Services - Fix Site Issues | Improve Core Web Vitals & Speed',
  description: 'Professional Technical SEO services that fix critical website issues. Improve Core Web Vitals, page speed, mobile optimization, and crawlability. Increase rankings by 200% with technical fixes. Expert schema markup, structured data, XML sitemaps. Free technical SEO audit.',
  keywords: [
    'technical SEO services',
    'technical SEO audit',
    'Core Web Vitals optimization',
    'page speed optimization',
    'mobile SEO',
    'site crawlability',
    'schema markup',
    'structured data',
    'XML sitemap',
    'robots.txt optimization',
    'canonical tags',
    'site architecture',
    'indexation issues',
    'JavaScript SEO',
    'HTTPS migration',
    'hreflang implementation',
    'pagination SEO',
    'technical SEO consultant',
    'website performance',
    'Google Search Console'
  ],
  authors: [{ name: 'The Meta Studio' }],
  creator: 'The Meta Studio',
  publisher: 'The Meta Studio',
  metadataBase: new URL('https://themetastudio.com'),
  alternates: {
    canonical: '/services/technical-seo',
  },
  openGraph: {
    title: 'Technical SEO Services - Fix Critical Issues | The Meta Studio',
    description: 'Fix technical website issues that hurt rankings. Improve Core Web Vitals, speed, and mobile optimization. 200% ranking increase.',
    url: 'https://themetastudio.com/services/technical-seo',
    siteName: 'The Meta Studio',
    images: [
      {
        url: '/og-technical-seo.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical SEO Services - Website Optimization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical SEO Services - Fix Critical Website Issues',
    description: 'Fix technical issues, improve Core Web Vitals, boost rankings by 200%. Expert technical SEO.',
    images: ['/twitter-technical-seo.jpg'],
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
  category: 'Technical SEO Services',
}

export default function TechnicalSEOPage() {
  return (
    <ServicePageTemplate
      badge="Technical SEO Services"
      title="Build a Fast, Crawlable,"
      titleHighlight="Search-Optimized Website"
      description="Fix technical issues that prevent your site from ranking. Improve site speed, mobile experience, and crawlability for maximum search engine visibility. Our technical SEO experts ensure your website meets Google's stringent requirements for top rankings."
      features={[
        {
          icon: Zap,
          title: "Core Web Vitals Optimization",
          description: "Optimize Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) to meet Google's speed requirements. Fast sites rank higher and convert betterwe make yours lightning quick. Improve user experience while boosting search rankings through performance optimization."
        },
        {
          icon: Smartphone,
          title: "Mobile-First Optimization",
          description: "Ensure flawless mobile experience with responsive design testing, touch element optimization, and mobile page speed improvements. With Google's mobile-first indexing, your mobile site IS your ranking. We ensure perfect performance across all devices and screen sizes."
        },
        {
          icon: Search,
          title: "Crawl Efficiency & Indexation",
          description: "Optimize robots.txt, XML sitemaps, internal linking structure, and crawl budget allocation. We ensure search engines can efficiently discover, crawl, and index all your important pages while avoiding duplicate content issues. Maximize your visibility in search results."
        },
        {
          icon: BarChart,
          title: "Structured Data Implementation",
          description: "Add Schema markup for rich snippets, knowledge panels, and enhanced search results. We implement JSON-LD structured data that helps search engines understand your content and display it more prominently with star ratings, prices, and other rich features that increase clicks."
        }
      ]}
      benefits={[
        {
          title: "Faster Page Load Speed",
          description: "Reduce load times by 40-60%, improving user experience and search rankings while decreasing bounce rates"
        },
        {
          title: "Improved Mobile Rankings",
          description: "Rank higher in mobile search results with a fully optimized, mobile-first website experience"
        },
        {
          title: "Better Crawl Efficiency",
          description: "Ensure search engines discover and index your most important pages quickly and completely"
        },
        {
          title: "Enhanced Rich Results",
          description: "Earn star ratings, price information, and rich snippets that increase click-through rates by up to 30%"
        }
      ]}
      whyBadge="Why Technical SEO"
      whyHeadline="Why Technical SEO Forms the Foundation of Search Success"
      whyContent={[
        "Even the best content won't rank if search engines can't properly crawl, index, and understand your website. Technical SEO provides the foundation that all other optimization efforts build upon. Google has explicitly stated that page experience signalsspeed, mobile-friendliness, and securityare direct ranking factors that impact your position in search results.",
        "Our technical SEO audits identify critical issues holding your site back: slow loading resources, broken links, duplicate content, improper redirects, crawl errors, and indexation problems. We don't just find problemswe fix them. Our team implements solutions that dramatically improve your site's technical health and search engine accessibility.",
        "We stay current with Google's ever-evolving technical requirements, from Core Web Vitals to HTTPS migration to mobile-first indexing. You'll receive a comprehensive technical audit, prioritized fix recommendations based on impact, and ongoing monitoring to ensure your site maintains peak technical performance. Let us handle the complex technical details while you focus on running your business."
      ]}
      ctaHeadline="Ready to Fix What's Holding You Back?"
      ctaDescription="Get a comprehensive technical SEO audit and implementation plan that unlocks your site's full ranking potential and search visibility."
      ctaButton="Get Your Technical SEO Audit"
      gradient={{
        from: "orange-600",
        to: "red-600"
      }}
      breadcrumbService="Technical SEO"
    />
  )
}
