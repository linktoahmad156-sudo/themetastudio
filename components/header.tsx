"use client"

import * as React from "react"
import Link from "next/link"
import { 
  Menu, 
  X, 
  ArrowRight, 
  Search, 
  TrendingUp, 
  Sparkles, 
  Smartphone, 
  Palette, 
  ShoppingCart,
  Users,
  Briefcase,
  Phone,
  ChevronRight,
  Target,
  BarChart,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const servicesData = [
  {
    category: "SEO Services",
    items: [
      {
        icon: Search,
        title: "Search Engine Optimization",
        href: "/services/search-engine-optimization",
        description: "Improve organic rankings & visibility",
      },
      {
        icon: Target,
        title: "Local SEO",
        href: "/services/local-seo",
        description: "Rank higher in local search results",
      },
      {
        icon: TrendingUp,
        title: "Technical SEO",
        href: "/services/technical-seo",
        description: "Site speed, structure & indexing",
      },
      {
        icon: Zap,
        title: "E-commerce SEO",
        href: "/services/ecommerce-seo",
        description: "Optimize product pages & sales",
      },
    ]
  },
  {
    category: "Paid Advertising",
    items: [
      {
        icon: Sparkles,
        title: "Google Ads (PPC)",
        href: "/services/google-ads",
        description: "Search, display & shopping campaigns",
      },
      {
        icon: Smartphone,
        title: "Facebook & Instagram Ads",
        href: "/services/facebook-instagram-ads",
        description: "Meta ads for lead generation & sales",
      },
      {
        icon: Users,
        title: "LinkedIn Advertising",
        href: "/services/linkedin-ads",
        description: "B2B targeted advertising campaigns",
      },
      {
        icon: TrendingUp,
        title: "YouTube Advertising",
        href: "/services/youtube-ads",
        description: "Video ads that drive engagement",
      },
    ]
  },
  {
    category: "Social Media Marketing",
    items: [
      {
        icon: Smartphone,
        title: "Social Media Management",
        href: "/services/social-media-marketing",
        description: "Daily posting, engagement & growth",
      },
      {
        icon: Palette,
        title: "Social Media Strategy",
        href: "/services/social-media-strategy",
        description: "Platform-specific content planning",
      },
      {
        icon: Users,
        title: "Community Management",
        href: "/services/community-management",
        description: "Build & engage loyal audiences",
      },
      {
        icon: Sparkles,
        title: "Influencer Marketing",
        href: "/services/influencer-marketing",
        description: "Partner with relevant influencers",
      },
    ]
  },
  {
    category: "Content & Strategy",
    items: [
      {
        icon: Briefcase,
        title: "Content Marketing",
        href: "/services/content-marketing",
        description: "Blogs, articles & thought leadership",
      },
      {
        icon: ShoppingCart,
        title: "Email Marketing",
        href: "/services/email-marketing",
        description: "Newsletters, drips & automation",
      },
      {
        icon: Palette,
        title: "Copywriting",
        href: "/services/copywriting",
        description: "Sales copy, landing pages & ads",
      },
      {
        icon: BarChart,
        title: "Marketing Strategy",
        href: "/services/marketing-strategy",
        description: "Full-funnel planning & execution",
      },
    ]
  }
]


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [servicesOpen, setServicesOpen] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(true)
  const [lastScrollY, setLastScrollY] = React.useState(0)
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past threshold
          setIsVisible(false)
        } else {
          // Scrolling up
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-transform duration-300",
      isVisible ? "translate-y-0" : "-translate-y-full"
    )}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mx-auto mt-4 flex h-16 items-center rounded-full bg-white/95 px-6 shadow-lg backdrop-blur-3xl transition-all duration-300 hover:shadow-xl dark:bg-gray-900/95" style={{backdropFilter: 'blur(64px) saturate(180%)', WebkitBackdropFilter: 'blur(64px) saturate(180%)'}}>
          {/* Logo - Left */}
          <Link href="/" className="group flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg">
              <span className="text-xl font-bold text-white">M</span>
            </div>
            <span className="hidden text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent xl:block">
              The Meta Studio
            </span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-full hover:bg-accent">
              Home
            </Link>
            
            {/* Services Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current)
                }
                setServicesOpen(true)
              }}
              onMouseLeave={() => {
                closeTimeoutRef.current = setTimeout(() => {
                  setServicesOpen(false)
                }, 100)
              }}
            >
              <button className="px-4 py-2  text-sm font-medium text-foreground hover:text-primary transition-colors rounded-full hover:bg-accent">
                Services
              </button>
              
              {servicesOpen && (
                <div 
                  className="fixed left-0 right-0 top-[68px] z-50 animate-in fade-in slide-in-from-top-5 duration-200"
                  onMouseEnter={() => {
                    if (closeTimeoutRef.current) {
                      clearTimeout(closeTimeoutRef.current)
                    }
                    setServicesOpen(true)
                  }}
                  onMouseLeave={() => {
                    closeTimeoutRef.current = setTimeout(() => {
                      setServicesOpen(false)
                    }, 100)
                  }}
                >
                  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2">
                    <div className="rounded-3xl bg-white/98 p-6 shadow-2xl backdrop-blur-3xl border border-gray-200 dark:bg-gray-900/98 dark:border-gray-700" style={{backdropFilter: 'blur(64px) saturate(180%)', WebkitBackdropFilter: 'blur(64px) saturate(180%)'}}>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {servicesData.map((category) => (
                          <div key={category.category} className="min-w-0">
                            <h3 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                              {category.category}
                            </h3>
                            <div className="space-y-0.5">
                              {category.items.map((item) => {
                                const Icon = item.icon
                                return (
                                  <Link
                                    key={item.title}
                                    href={item.href}
                                    className="group flex items-start gap-2.5 rounded-xl p-3 transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 dark:hover:from-purple-900/20 dark:hover:to-indigo-900/20"
                                  >
                                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 shadow-md transition-transform duration-200 group-hover:scale-110">
                                      <Icon className="h-4 w-4 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-start gap-1.5">
                                        <p className="text-sm font-semibold text-foreground group-hover:text-purple-600 transition-colors leading-tight">
                                          {item.title}
                                        </p>
                                        <ChevronRight className="h-3 w-3 flex-shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 mt-0.5" />
                                      </div>
                                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                )
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* View All Services CTA */}
                      <div className="mt-6 pt-6 border-t border-border/50">
                        <Link
                          href="/services"
                          className="group inline-flex items-center gap-2 text-sm font-semibold text-purple-600 transition-colors hover:text-purple-700"
                        >
                          View All Services
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-full hover:bg-accent">
              About
            </Link>
            <Link href="/our-work" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-full hover:bg-accent">
              Our Work
            </Link>
            <Link href="/blogs" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-full hover:bg-accent">
              Blogs
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="ghost" className="rounded-full">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="default" className="group">
              <Link href="/get-started">
                GET Started
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="ml-auto lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Offcanvas Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40 animate-in fade-in duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Offcanvas Sidebar */}
          <aside className="fixed inset-y-0 right-0 z-50 w-80 transform bg-white shadow-2xl transition-transform duration-300 ease-in-out dark:bg-gray-900 lg:hidden border-l border-gray-200 dark:border-gray-800">
            <div className="flex h-screen flex-col">
              {/* Offcanvas Header - Fixed */}
              <div className="flex flex-shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-900">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg">
                    <span className="text-xl font-bold text-white">M</span>
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    The Meta Studio
                  </span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <div className="px-4 py-6">
                  {/* Main Navigation */}
                  <nav className="mb-8">
                    <h2 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Navigation
                    </h2>
                    <div className="space-y-1">
                      <Link
                        href="/"
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        About
                      </Link>
                      <Link
                        href="/our-work"
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Our Work
                      </Link>
                      <Link
                        href="/blogs"
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Blogs
                      </Link>
                    </div>
                  </nav>

                  {/* Services Section */}
                  <div className="mb-8">
                    <h2 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Our Services
                    </h2>
                    <div className="space-y-6">
                      {servicesData.map((category) => (
                        <div key={category.category}>
                          <h3 className="mb-2 px-2 text-xs font-bold uppercase tracking-wide text-purple-600 dark:text-purple-400">
                            {category.category}
                          </h3>
                          <div className="space-y-1">
                            {category.items.map((item) => {
                              const Icon = item.icon
                              return (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-purple-50 hover:text-purple-600 dark:text-gray-300 dark:hover:bg-purple-900/20 dark:hover:text-purple-400"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 shadow-sm">
                                    <Icon className="h-4 w-4 text-white" />
                                  </div>
                                  <span>{item.title}</span>
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Buttons Inside Scroll Area */}
                  <div className="pb-6">
                    <div className="flex flex-col gap-3">
                      <Button asChild variant="outline" className="w-full h-11 rounded-full">
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                          Contact Us
                        </Link>
                      </Button>
                      <Button asChild className="w-full h-11 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                        <Link href="/get-started" onClick={() => setMobileMenuOpen(false)}>
                          GET Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </>
      )}
    </header>
  )
}

