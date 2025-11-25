import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { ShoppingCart, BarChart, Search, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: 'E-commerce SEO Services - Increase Online Sales by 250% | Product Optimization',
  description: 'Expert E-commerce SEO that drives sales. Increase organic revenue by 250% with product page optimization, category structure, technical SEO, and conversion optimization. Shopify, WooCommerce, Magento specialists. Get more traffic and sales. Free e-commerce SEO audit.',
  keywords: [
    'e-commerce SEO',
    'ecommerce SEO services',
    'product page optimization',
    'online store SEO',
    'Shopify SEO',
    'WooCommerce SEO',
    'Magento SEO',
    'product schema markup',
    'category page SEO',
    'e-commerce technical SEO',
    'product feed optimization',
    'shopping feed SEO',
    'e-commerce site architecture',
    'faceted navigation',
    'product reviews SEO',
    'e-commerce conversion optimization',
    'online retail SEO',
    'product visibility',
    'organic e-commerce traffic',
    'e-commerce keyword research'
  ],
  authors: [{ name: 'The Meta Studio' }],
  creator: 'The Meta Studio',
  publisher: 'The Meta Studio',
  metadataBase: new URL('https://themetastudio.com'),
  alternates: {
    canonical: '/services/ecommerce-seo',
  },
  openGraph: {
    title: 'E-commerce SEO Services - 250% Sales Increase | The Meta Studio',
    description: 'Expert E-commerce SEO drives 250% more online sales. Product optimization, technical SEO, conversion optimization.',
    url: 'https://themetastudio.com/services/ecommerce-seo',
    siteName: 'The Meta Studio',
    images: [
      {
        url: '/og-ecommerce-seo.jpg',
        width: 1200,
        height: 630,
        alt: 'E-commerce SEO Services - Online Store Optimization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce SEO - 250% More Online Sales',
    description: 'Expert product optimization and technical SEO for online stores. Increase organic revenue.',
    images: ['/twitter-ecommerce-seo.jpg'],
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
  category: 'E-commerce SEO Services',
}

export default function EcommerceSEOPage() {
  return (
    <ServicePageTemplate
      badge="E-commerce SEO Services"
      title="Optimize Product Pages,"
      titleHighlight="Drive More Sales"
      description="Increase organic revenue with specialized e-commerce SEO that optimizes product pages, category structure, and technical elements for maximum visibility and conversions. Transform your online store into a customer acquisition machine."
      features={[
        {
          icon: ShoppingCart,
          title: "Product Page Optimization",
          description: "Craft compelling product titles, descriptions, and metadata that rank well in search results and convert visitors into buyers. We optimize product images with proper alt text, implement product schema markup for rich snippets, and create content that answers customer questions and overcomes objections."
        },
        {
          icon: BarChart,
          title: "Category & Navigation Structure",
          description: "Design intuitive category hierarchies and internal linking structures that help customers find products easily while distributing link equity effectively throughout your site. Proper site architecture is crucial for large product catalogs and helps both users and search engines navigate efficiently."
        },
        {
          icon: Search,
          title: "E-commerce Technical SEO",
          description: "Solve common e-commerce technical challenges: faceted navigation issues, duplicate content from product variations, site speed optimization for image-heavy pages, canonical tag implementation, and proper handling of out-of-stock products. Ensure search engines can crawl and index your entire catalog."
        },
        {
          icon: TrendingUp,
          title: "Content & Link Building",
          description: "Create valuable buying guides, product comparison content, and informative category descriptions that attract high-quality backlinks and rank for informational queries. Convert researchers into buyers with strategic content that addresses questions throughout the customer journey."
        }
      ]}
      benefits={[
        {
          title: "Increased Product Visibility",
          description: "Rank your products for high-intent commercial keywords and capture customers ready to purchase"
        },
        {
          title: "Higher Organic Revenue",
          description: "Drive consistent sales from organic search without ongoing advertising spendcompound your growth over time"
        },
        {
          title: "Better Product Discoverability",
          description: "Help customers find the right products through optimized site structure and internal search functionality"
        },
        {
          title: "Competitive Advantage",
          description: "Outrank competitors in product search results and capture more market share in your niche"
        }
      ]}
      whyBadge="Why E-commerce SEO"
      whyHeadline="Why E-commerce Businesses Must Invest in Organic Search"
      whyContent={[
        "E-commerce SEO delivers the highest ROI of any marketing channel for online stores. While paid advertising stops driving sales the moment you stop spending, organic search continues delivering customers month after month, year after year. The average e-commerce site receives 43% of traffic from organic searchtraffic that typically converts at higher rates than paid channels because searchers are actively looking for what you sell.",
        "E-commerce sites face unique SEO challenges that generic SEO strategies can't address: massive product catalogs with thousands of pages, duplicate content issues from similar products, technical complexity from filtering and faceted navigation systems, and intense competition from major marketplaces. Our specialized e-commerce SEO expertise addresses these challenges head-on with proven strategies specifically designed for online retail.",
        "We've helped e-commerce businesses of all sizesfrom boutique Shopify stores to large-scale custom platformsdramatically increase organic revenue through strategic optimization. Our approach combines product-level optimization, technical excellence, category structure refinement, and strategic content creation to build sustainable organic traffic and sales. Let us transform your online store into an organic customer acquisition machine that generates consistent, predictable revenue growth."
      ]}
      ctaHeadline="Ready to Skyrocket Your E-commerce Sales?"
      ctaDescription="Let's create an e-commerce SEO strategy that drives consistent organic revenue growth and reduces your dependence on paid advertising."
      ctaButton="Get Your Store SEO Audit"
      gradient={{
        from: "green-600",
        to: "emerald-600"
      }}
      breadcrumbService="E-commerce SEO"
    />
  )
}
