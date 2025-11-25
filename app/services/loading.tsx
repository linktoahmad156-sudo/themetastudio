import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-20 sm:pt-24">
        {/* Hero Section Skeleton */}
        <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/50 via-background to-background py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center space-y-6 animate-pulse">
              <div className="mx-auto h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="h-12 w-full sm:w-48 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                <div className="h-12 w-full sm:w-48 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section Skeleton */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16 space-y-4 animate-pulse">
              <div className="mx-auto h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              <div className="mx-auto h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            </div>

            <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded-2xl mb-4"></div>
                    <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section Skeleton */}
        <section className="bg-gradient-to-b from-background to-secondary/30 py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 animate-pulse">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="h-6 w-3/4 mx-auto bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
