'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ArrowRight, LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { servicesData } from '@/components/header'

interface ServiceItem {
  icon: LucideIcon
  title: string
  href: string
  description: string
}

interface ServiceCategory {
  category: string
  items: ServiceItem[]
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false)

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.top = `-${window.scrollY}px`
    } else {
      // Restore body scroll
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        className="ml-auto lg:hidden relative z-[102]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Offcanvas Overlay - Industry Standard */}
      {isOpen && (
        <>
          {/* Backdrop with Portal behavior */}
          <div
            className="fixed inset-0 bg-black/60 z-[100] lg:hidden backdrop-blur-sm animate-in fade-in duration-200"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Offcanvas Panel - Fixed positioning for full viewport height */}
          <nav
            className="fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-white dark:bg-gray-950 shadow-2xl z-[101] lg:hidden animate-in slide-in-from-right duration-300"
            aria-label="Mobile navigation"
            style={{ height: '100dvh' }}
          >
            {/* Offcanvas Container - Full Height Flexbox */}
            <div className="h-full flex flex-col relative">
              {/* Header - Fixed at top */}
              <div className="flex-shrink-0 flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-purple-50 to-indigo-50 px-5 py-4 dark:border-gray-800 dark:from-purple-950/30 dark:to-indigo-950/30">
                <Link
                  href="/"
                  className="flex items-center gap-2.5"
                  onClick={closeMenu}
                >
                  <div className="relative h-14 w-14 flex-shrink-0">
                    <Image
                      src="/logo.webp"
                      alt="The Meta Studio Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    The Meta Studio
                  </span>
                </Link>
                <button
                  onClick={closeMenu}
                  className="rounded-full p-2.5 text-gray-600 transition-all duration-200 hover:bg-white hover:text-purple-600 hover:shadow-lg dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-purple-400"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable Content - Takes remaining space */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden overscroll-contain bg-white dark:bg-gray-950">
                <div className="px-5 py-6">
                  {/* Main Navigation */}
                  <nav className="mb-8">
                    <h2 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Navigation
                    </h2>
                    <div className="space-y-1.5">
                      <Link
                        href="/"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-sm dark:text-gray-300 dark:hover:from-purple-950/30 dark:hover:to-indigo-950/30 dark:hover:text-purple-400"
                        onClick={closeMenu}
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-sm dark:text-gray-300 dark:hover:from-purple-950/30 dark:hover:to-indigo-950/30 dark:hover:text-purple-400"
                        onClick={closeMenu}
                      >
                        About
                      </Link>
                      <Link
                        href="/contact"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-sm dark:text-gray-300 dark:hover:from-purple-950/30 dark:hover:to-indigo-950/30 dark:hover:text-purple-400"
                        onClick={closeMenu}
                      >
                        Contact
                      </Link>
                    </div>
                  </nav>

                  {/* Services Section */}
                  <div className="mb-8">
                    <h2 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Our Services
                    </h2>
                    <div className="space-y-6">
                      {servicesData.map((category: ServiceCategory) => (
                        <div key={category.category}>
                          <h3 className="mb-2 px-2 text-xs font-bold uppercase tracking-wide text-purple-600 dark:text-purple-400">
                            {category.category}
                          </h3>
                          <div className="space-y-1">
                            {category.items.map((item: ServiceItem) => {
                              const Icon = item.icon
                              return (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-sm dark:text-gray-300 dark:hover:from-purple-950/30 dark:hover:to-indigo-950/30 dark:hover:text-purple-400"
                                  onClick={closeMenu}
                                >
                                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 shadow-md">
                                    <Icon className="h-4 w-4 text-white" />
                                  </div>
                                  <span className="leading-tight">{item.title}</span>
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTAs */}
                  <div className="pb-6">
                    <div className="flex flex-col gap-3">
                      <Button asChild variant="outline" className="w-full h-11 rounded-full">
                        <Link href="/contact" onClick={closeMenu}>
                          Contact Us
                        </Link>
                      </Button>
                      <Button asChild className="w-full h-11 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                        <Link href="/contact" onClick={closeMenu}>
                          Get Free Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <a
                        href="tel:+447359490149"
                        className="flex items-center justify-center gap-2 rounded-full border-2 border-purple-600 px-6 py-2.5 text-sm font-semibold text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20"
                      >
                        <Phone className="h-4 w-4" />
                        Call Now: +44 7359 490149
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  )
}
