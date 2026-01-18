"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Users, Target, BarChart3, Zap, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const workCategories = [
  {
    title: "E-commerce Success",
    description: "150% Revenue Growth",
    metric: "2.5M+ Sales",
    icon: TrendingUp,
    gradient: "from-purple-600 to-indigo-600"
  },
  {
    title: "Lead Generation",
    description: "500% More Qualified Leads",
    metric: "10K+ Leads/Month",
    icon: Target,
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    title: "Brand Awareness",
    description: "300% Social Growth",
    metric: "5M+ Impressions",
    icon: Users,
    gradient: "from-pink-600 to-rose-600"
  },
  {
    title: "SEO Rankings",
    description: "Page 1 Google Rankings",
    metric: "85+ Keywords",
    icon: BarChart3,
    gradient: "from-emerald-600 to-teal-600"
  },
]

const projectHighlights = [
  {
    image: "/saas-dashboard-redesign.png",
    title: "SaaS Dashboard Redesign",
    category: "UI/UX Design",
    results: "45% increase in user engagement",
    tags: ["Design", "Analytics", "SaaS"]
  },
  {
    image: "/seo-results-dashboard.png",
    title: "SEO Results Dashboard",
    category: "Search Optimization",
    results: "320% organic traffic growth",
    tags: ["SEO", "Analytics", "Growth"]
  },
  {
    image: "/ecommerce-platform.png",
    title: "E-commerce Platform",
    category: "Development",
    results: "$2.5M in additional revenue",
    tags: ["E-commerce", "Conversion", "UX"]
  },
]

export function OurWorkSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-950 dark:via-gray-900/30 dark:to-gray-950 py-20 sm:py-24 lg:py-32">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl dark:bg-purple-900/10" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl dark:bg-indigo-900/10" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/50 px-5 py-2 backdrop-blur-sm dark:border-purple-900/30 dark:bg-purple-900/10">
            <Award className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-900 dark:text-purple-200">Our Work</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Real Results for{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Real Businesses
            </span>
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            We don't just promise results - we deliver them. See how we've helped businesses like yours achieve extraordinary growth.
          </p>
        </div>

        {/* Results Grid */}
        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.title} className="group relative overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-purple-900/10 dark:to-indigo-900/10" />
                <CardContent className="relative p-6">
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{category.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{category.description}</p>
                  <div className={`inline-block rounded-full bg-gradient-to-r ${category.gradient} px-3 py-1 text-xs font-semibold text-white`}>
                    {category.metric}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-foreground sm:text-3xl">
            Featured Projects
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectHighlights.map((project, index) => (
              <Card key={index} className="group overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-500">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-purple-900 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="mb-2 text-xl font-bold text-foreground">{project.title}</h4>
                  <p className="mb-4 text-sm text-muted-foreground">{project.results}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-900 dark:bg-purple-900/30 dark:text-purple-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 h-14 px-8 text-base shadow-lg hover:shadow-xl">
            <Link href="/our-work">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
