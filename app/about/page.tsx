import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Target, Lightbulb, TrendingUp, Heart, Zap, Shield } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'About Us - Expert Digital Marketing Team | The Meta Studio',
  description: 'Meet The Meta Studio team - award-winning digital marketing experts with 10+ years of experience. We deliver data-driven strategies that achieve 150% ROI increase. Learn about our mission, values, and proven track record.',
  keywords: [
    'digital marketing agency team',
    'marketing experts',
    'SEO specialists',
    'PPC experts',
    'social media marketing team',
    'about digital marketing agency',
    'marketing consultants',
    'digital marketing professionals',
    'experienced marketing team',
    'certified marketing experts'
  ],
  authors: [{ name: 'The Meta Studio' }],
  creator: 'The Meta Studio',
  publisher: 'The Meta Studio',
  metadataBase: new URL('https://themetastudio.com'),
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us - Expert Digital Marketing Team | The Meta Studio',
    description: 'Award-winning digital marketing experts with proven track record. Data-driven strategies that deliver 150% ROI increase.',
    url: 'https://themetastudio.com/about',
    siteName: 'The Meta Studio',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'The Meta Studio Team - Digital Marketing Experts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About The Meta Studio - Digital Marketing Experts',
    description: 'Award-winning team delivering data-driven marketing strategies with proven 150% ROI increase.',
    images: ['/twitter-about.jpg'],
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

const values = [
  {
    icon: Award,
    title: "Rich Experience",
    description: "Over a decade of proven expertise in delivering exceptional digital solutions across diverse industries and markets.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description: "Your success drives everything we do. We're committed to building lasting partnerships through transparency and results.",
  },
  {
    icon: Target,
    title: "Strategic Innovation",
    description: "We tackle complex challenges with creative thinking and data-driven strategies that deliver measurable outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Cutting-Edge Solutions",
    description: "Leveraging the latest technologies and methodologies to keep your business ahead of the digital curve.",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    description: "Every campaign, every project focuses on delivering tangible ROI and sustainable business growth.",
  },
  {
    icon: Heart,
    title: "Passion & Dedication",
    description: "We pour our hearts into every project, treating your business goals as our own mission to accomplish.",
  },
  {
    icon: Zap,
    title: "Agile Methodology",
    description: "Fast, flexible, and responsive approach that adapts to your evolving needs and market changes.",
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "Building relationships on honesty, reliability, and unwavering commitment to your data security.",
  },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/team/sarah.jpg",
    bio: "15+ years in digital strategy",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/team/michael.jpg",
    bio: "Tech visionary & architect",
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    image: "/team/emily.jpg",
    bio: "Award-winning designer",
  },
  {
    name: "David Thompson",
    role: "Head of Marketing",
    image: "/team/david.jpg",
    bio: "Growth & analytics expert",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Modern Hero Section */}
        <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950/20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              {/* Breadcrumb */}
              <Breadcrumb items={[{ label: "About Us" }]} />
              
              {/* Page Title */}
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                About Us
              </h1>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <CardHeader className="p-0 pb-6">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    To empower businesses of all sizes with cutting-edge digital solutions that drive growth, 
                    enhance brand presence, and create lasting impact in an ever-evolving digital landscape.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    We believe in the transformative power of strategic digital marketing and innovative 
                    technology to turn visions into reality and aspirations into achievements.
                  </p>
                </CardContent>
              </Card>

              <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <CardHeader className="p-0 pb-6">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    To be the global leader in digital transformation, recognized for our innovation, 
                    integrity, and unwavering commitment to client success.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    We envision a future where every business, regardless of size, has access to 
                    world-class digital strategies that level the playing field and unlock unlimited potential.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide every decision we make and every solution we deliver.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card 
                    key={value.title} 
                    className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="mb-4 text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  10+
                </div>
                <p className="text-sm font-semibold text-muted-foreground">Years of Excellence</p>
              </Card>
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="mb-4 text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  100+
                </div>
                <p className="text-sm font-semibold text-muted-foreground">Projects Delivered</p>
              </Card>
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="mb-4 text-5xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  50+
                </div>
                <p className="text-sm font-semibold text-muted-foreground">Happy Clients</p>
              </Card>
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="mb-4 text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  12+
                </div>
                <p className="text-sm font-semibold text-muted-foreground">Industry Awards</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-b from-background to-secondary/30 py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <Card className="bg-gradient-to-br from-purple-600 to-indigo-600 p-12 text-center shadow-2xl">
                <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl">
                  Ready to Transform Your Business?
                </h2>
                <p className="mb-8 text-lg text-purple-100">
                  Let's collaborate to create digital experiences that drive real results.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <button className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-10 text-base font-semibold text-purple-600 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                    Get Started
                  </button>
                  <button className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-white px-10 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-purple-600">
                    View Our Work
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
