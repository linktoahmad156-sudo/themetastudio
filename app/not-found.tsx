import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Search, Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-20 sm:pt-24">
        <section className="py-16 sm:py-20 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="mx-auto max-w-2xl p-8 sm:p-12 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
                <Search className="h-10 w-10 text-purple-600 dark:text-purple-400" />
              </div>
              
              <h1 className="mb-4 text-6xl sm:text-7xl font-bold text-foreground">
                404
              </h1>
              
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground">
                Page Not Found
              </h2>
              
              <p className="mb-8 text-base sm:text-lg text-muted-foreground">
                Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="text-sm sm:text-base">
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Go Home
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-sm sm:text-base">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>

              <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-muted-foreground mb-4">
                  Looking for our services?
                </p>
                <div className="flex flex-wrap gap-2 justify-center text-xs sm:text-sm">
                  <Button asChild variant="link" size="sm">
                    <Link href="/services/search-engine-optimization">SEO</Link>
                  </Button>
                  <Button asChild variant="link" size="sm">
                    <Link href="/services/google-ads">Google Ads</Link>
                  </Button>
                  <Button asChild variant="link" size="sm">
                    <Link href="/services/social-media-marketing">Social Media</Link>
                  </Button>
                  <Button asChild variant="link" size="sm">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
