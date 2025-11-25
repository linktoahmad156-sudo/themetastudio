import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { SponsorsSection } from "@/components/sections/sponsors"
import { ServicesSection } from "@/components/sections/services"
import { AboutSection } from "@/components/sections/about"
import { OurWorkSection } from "@/components/sections/our-work"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta"
import { generateOGImageUrl } from "@/lib/og-image"

const ogImage = generateOGImageUrl({
  title: 'Data-Driven Digital Marketing',
  description: 'SEO, PPC, Social Media & More',
  gradient: 'purple',
})

export const metadata: Metadata = {
  title: 'The Meta Studio - Data-Driven Digital Marketing Agency | SEO, PPC & Social Media',
  description: 'Transform your business with The Meta Studio. Expert digital marketing services including SEO, Google Ads, Social Media Marketing, and PPC. Achieve 150% ROI increase with our data-driven strategies. Free consultation available.',
  keywords: [
    'digital marketing agency',
    'SEO services',
    'Google Ads management',
    'social media marketing',
    'PPC advertising',
    'content marketing',
    'email marketing',
    'online marketing agency',
    'digital marketing company',
    'internet marketing services',
    'search engine optimization',
    'paid advertising',
    'Facebook ads',
    'Instagram marketing',
    'LinkedIn advertising',
    'YouTube ads',
    'marketing strategy',
    'ROI optimization',
    'conversion rate optimization',
    'digital marketing consultant'
  ],
  authors: [{ name: 'The Meta Studio' }],
  creator: 'The Meta Studio',
  publisher: 'The Meta Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://themetastudio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'The Meta Studio - Data-Driven Digital Marketing Agency',
    description: 'Transform your business with expert digital marketing services. SEO, Google Ads, Social Media Marketing, and more. Achieve 150% ROI increase.',
    url: 'https://themetastudio.com',
    siteName: 'The Meta Studio',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'The Meta Studio - Digital Marketing Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Meta Studio - Data-Driven Digital Marketing Agency',
    description: 'Transform your business with expert digital marketing. Achieve 150% ROI increase with our proven strategies.',
    images: [ogImage],
    creator: '@themetastudio',
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
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SponsorsSection />
        <ServicesSection />
        <AboutSection />
        <OurWorkSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
