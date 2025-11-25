import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Sparkles, 
  ShoppingCart,
  ArrowRight 
} from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Search Engine Optimization",
    description: "Strategic SEO solutions that elevate your digital presence through comprehensive keyword research, on-page optimization, and authority building.",
    features: ["Keyword Research", "On-Page SEO", "Link Building", "Technical SEO"],
    href: "/services/search-engine-optimization",
  },
  {
    icon: Code,
    title: "Search Engine Marketing",
    description: "Data-driven SEM campaigns that maximize visibility and conversions through targeted advertising strategies and continuous optimization.",
    features: ["PPC Campaigns", "Ad Copy Writing", "Bid Management", "Performance Tracking"],
    href: "/services/search-engine-marketing",
  },
  {
    icon: Sparkles,
    title: "Google Ads",
    description: "Expert Google Ads management connecting your brand with customers actively searching for your services, delivering measurable ROI.",
    features: ["Campaign Setup", "Keyword Research", "Ad Optimization", "Analytics & Reporting"],
    href: "/services/google-ads",
  },
  {
    icon: Smartphone,
    title: "Social Media Marketing",
    description: "Engaging social media strategies that build brand recognition, foster community, and drive meaningful customer interactions across platforms.",
    features: ["Content Strategy", "Community Management", "Paid Social Ads", "Analytics"],
    href: "/services/social-media-marketing",
  },
  {
    icon: Palette,
    title: "Facebook & Instagram Ads",
    description: "Precision-targeted advertising campaigns on Meta platforms that reach your ideal audience and generate quality leads.",
    features: ["Audience Targeting", "Creative Design", "A/B Testing", "ROI Optimization"],
    href: "/services/facebook-instagram-ads",
  },
  {
    icon: ShoppingCart,
    title: "Email Marketing",
    description: "Personalized email campaigns that nurture relationships, drive conversions, and build customer loyalty through strategic automation.",
    features: ["Campaign Design", "List Segmentation", "Automation", "Performance Analysis"],
    href: "/services/email-marketing",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-950 dark:via-gray-900/30 dark:to-gray-950 py-20 sm:py-24 lg:py-28" id="services">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/50 px-5 py-2 backdrop-blur-sm dark:border-purple-900/30 dark:bg-purple-900/10">
            <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-900 dark:text-purple-200">Our Services</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Our Offered Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital marketing and development solutions designed to accelerate your 
            business growth. We combine strategic thinking with technical excellence to deliver 
            results that exceed expectations.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link 
                key={service.title}
                href={service.href}
                className="group block"
              >
                <Card 
                  className="relative h-full overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:border-purple-300 hover:shadow-xl hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-700 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <CardHeader className="relative">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 flex w-full items-center justify-between rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-muted-foreground">
            Not sure which service is right for you?
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Talk to Our Experts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
