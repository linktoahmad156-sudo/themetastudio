'use client'

import { useEffect } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { AlertCircle, Home, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Service page error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-20 sm:pt-24">
        <section className="py-16 sm:py-20 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="mx-auto max-w-2xl p-8 sm:p-12 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                <AlertCircle className="h-10 w-10 text-red-600 dark:text-red-400" />
              </div>
              
              <h1 className="mb-4 text-3xl sm:text-4xl font-bold text-foreground">
                Something Went Wrong
              </h1>
              
              <p className="mb-8 text-base sm:text-lg text-muted-foreground">
                We encountered an error while loading this service page. This has been logged and we'll look into it.
              </p>

              {process.env.NODE_ENV === 'development' && error.message && (
                <div className="mb-8 rounded-lg bg-gray-100 dark:bg-gray-800 p-4 text-left">
                  <p className="font-mono text-xs sm:text-sm text-red-600 dark:text-red-400 break-all">
                    {error.message}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={reset} size="lg" className="text-sm sm:text-base">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
                <Button asChild size="lg" variant="outline" className="text-sm sm:text-base">
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Go Home
                  </Link>
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-muted-foreground mb-4">
                  Need immediate assistance?
                </p>
                <Button asChild variant="link" size="sm">
                  <Link href="/contact">
                    Contact Our Support Team
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
