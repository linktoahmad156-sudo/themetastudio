import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: 'Contact Us - Get Free Consultation | The Meta Studio Digital Marketing',
  description: 'Contact The Meta Studio for a free digital marketing consultation. Get expert advice on SEO, Google Ads, Social Media Marketing, and PPC. We respond within 24 hours. Call +44 7359 490149 or email info@themetastudio.com',
  keywords: [
    'contact digital marketing agency',
    'free marketing consultation',
    'digital marketing quote',
    'SEO consultation',
    'PPC consultation',
    'social media marketing contact',
    'marketing agency inquiry',
    'digital marketing services quote',
    'get marketing proposal',
    'contact marketing experts'
  ],
  authors: [{ name: 'The Meta Studio' }],
  creator: 'The Meta Studio',
  publisher: 'The Meta Studio',
  metadataBase: new URL('https://themetastudio.com'),
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us - Get Free Consultation | The Meta Studio',
    description: 'Get free digital marketing consultation from our experts. We respond within 24 hours with customized strategies for your business.',
    url: 'https://themetastudio.com/contact',
    siteName: 'The Meta Studio',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact The Meta Studio - Free Marketing Consultation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact The Meta Studio - Free Marketing Consultation',
    description: 'Get expert digital marketing advice within 24 hours. Free consultation available.',
    images: ['/twitter-contact.jpg'],
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

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Modern Hero Section */}
        <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              {/* Breadcrumb */}
              <Breadcrumb items={[{ label: "Contact Us" }]} />

              {/* Page Title */}
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Contact Us
              </h1>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Contact{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Information
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Reach out to us through any of these channels. We're here to help!
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Email Us</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Send us an email anytime!
                  </p>
                  <a href="mailto:info@themetastudio.com" className="text-sm font-semibold text-primary hover:underline break-all">
                    info@themetastudio.com
                  </a>
                </CardContent>
              </Card>

              <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Call Us</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Mon-Fri from 9am to 6pm
                  </p>
                  <a href="tel:+447359490149" className="text-sm font-semibold text-primary hover:underline">
                    +44 7359 490149
                  </a>
                </CardContent>
              </Card>

              <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-600 to-purple-600 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Visit Us</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Come say hello at our office
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    123 Creative Street<br />
                    Design District, NY 10001
                  </p>
                </CardContent>
              </Card>

              <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Business Hours</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p className="font-medium">Monday - Friday</p>
                    <p>9:00 AM - 6:00 PM</p>
                    <p className="font-medium mt-2">Saturday</p>
                    <p>10:00 AM - 4:00 PM</p>
                    <p className="font-medium mt-2">Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="bg-gradient-to-b from-background to-secondary/30 py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gradient-to-b from-background to-secondary/30 py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 px-6 py-3 shadow-lg dark:from-purple-900/30 dark:to-indigo-900/30">
                <HelpCircle className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">FAQs</span>
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our digital marketing services and how we can help grow your business.
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <Accordion type="single" collapsible className="space-y-4">
                {/* General Questions */}
                <AccordionItem value="item-1" className="overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl border-0">
                  <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold hover:no-underline">
                    What services does The Meta Studio offer?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground">
                    We offer a comprehensive suite of digital marketing services including Search Engine Optimization (SEO), Google Ads (PPC), Social Media Marketing, Facebook & Instagram Ads, LinkedIn Advertising, YouTube Ads, Content Marketing, Email Marketing, Copywriting, and Marketing Strategy consulting. We also provide specialized services like Local SEO, Technical SEO, E-commerce SEO, Social Media Strategy, Community Management, and Influencer Marketing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl border-0">
                  <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold hover:no-underline">
                    How much do your services cost?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground">
                    Our pricing varies based on your specific needs, business goals, and the scope of services required. We offer customized packages tailored to your budget and objectives. Contact us for a free consultation where we'll discuss your requirements and provide a detailed proposal with transparent pricing. We work with businesses of all sizes, from startups to enterprises.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl border-0">
                  <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold hover:no-underline">
                    How long does it take to see results?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground">
                    Timeline varies by service: PPC campaigns (Google Ads, Facebook Ads) can generate results within days, Social Media Marketing shows engagement improvements in 2-4 weeks, while SEO typically takes 3-6 months for significant organic traffic growth. We provide monthly reports showing progress and continuously optimize campaigns for better performance. Remember, sustainable growth is a marathon, not a sprint.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl border-0">
                  <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold hover:no-underline">
                    Do you work with businesses in my industry?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground">
                    Yes! We've successfully worked with businesses across diverse industries including e-commerce, healthcare, legal services, real estate, restaurants, professional services, SaaS, finance, education, and more. Our data-driven approach and marketing fundamentals apply across all industries. We take time to understand your unique market, competitors, and customer behavior to create tailored strategies.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl border-0">
                  <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold hover:no-underline">
                    What's the difference between SEO and PPC?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground">
                    SEO (Search Engine Optimization) focuses on improving organic search rankings through website optimization, content creation, and link buildingresults take time but provide long-term sustainable traffic. PPC (Pay-Per-Click) like Google Ads delivers immediate visibility through paid advertisementsyou pay for each click but see instant traffic. We recommend a balanced approach: PPC for immediate results while building long-term SEO foundation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl border-0">
                  <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold hover:no-underline">
                    Which social media platforms should my business be on?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground">
                    It depends on your target audience and business type. B2B companies typically excel on LinkedIn, visual brands thrive on Instagram and Pinterest, while Facebook offers broad reach across demographics. YouTube works great for educational content and demonstrations. We'll analyze your audience demographics, behaviors, and preferences to recommend the most effective platforms for your specific business goals.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl border-0">
                  <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold hover:no-underline">
                    Do you require long-term contracts?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground">
                    We offer flexible engagement options. While we recommend minimum 3-6 month commitments for services like SEO and content marketing (due to the time needed to show meaningful results), we also offer month-to-month arrangements for certain services. Our goal is to deliver such exceptional value that you'll want to continue working with us long-term. No forced contractsjust proven results.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl border-0">
                  <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold hover:no-underline">
                    How do you measure and report success?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground">
                    We provide comprehensive monthly reports with detailed analytics covering traffic, rankings, conversions, ROI, engagement metrics, and goal completions. You'll have 24/7 access to real-time dashboards showing campaign performance. We focus on metrics that matter to your businessnot vanity metrics. Every report includes actionable insights and our strategic recommendations for continuous improvement.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl border-0">
                  <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold hover:no-underline">
                    Can you help with both strategy and execution?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground">
                    Absolutely! We offer both strategic consulting and full-service execution. Whether you need a comprehensive marketing strategy, hands-on campaign management, or both, we've got you covered. Our team handles everything from initial strategy development and planning to creative production, campaign implementation, ongoing optimization, and performance reporting. You can focus on running your business while we drive your growth.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl border-0">
                  <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold hover:no-underline">
                    What makes The Meta Studio different from other agencies?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground">
                    We combine data-driven strategies with creative excellence, delivering measurable results that impact your bottom line. Unlike agencies that use cookie-cutter approaches, we create custom strategies tailored to your unique business goals. Our transparent reporting, dedicated account management, and proven track record of 150% average ROI increase set us apart. We're not just service providerswe're your growth partners invested in your success.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-12 text-center">
                <p className="mb-6 text-lg text-muted-foreground">
                  Still have questions? We're here to help!
                </p>
                <Button asChild size="lg">
                  <a href="#contact-form">
                    Get in Touch
                    <Send className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
