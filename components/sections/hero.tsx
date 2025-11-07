import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 px-6 py-3 shadow-lg backdrop-blur-sm animate-fade-in dark:from-purple-900/30 dark:to-indigo-900/30">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-500"></span>
            </span>
            <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">Transforming Businesses Digitally</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-in">
            Empowering Brands Through{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>
          
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl animate-fade-in">
            A comprehensive digital agency dedicated to elevating your business beyond conventional 
            boundaries. We deliver strategic solutions that boost sales, enhance customer engagement, 
            and transform casual visitors into devoted brand advocates.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/get-started">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/portfolio">
                <Play className="mr-2 h-4 w-4" />
                View Our Work
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mx-auto mt-24 grid max-w-5xl grid-cols-2 gap-6 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:bg-gray-800/80">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative text-center">
              <div className="mb-2 text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">10+</div>
              <div className="text-sm font-medium text-muted-foreground">Years of Experience</div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:bg-gray-800/80">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative text-center">
              <div className="mb-2 text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">100+</div>
              <div className="text-sm font-medium text-muted-foreground">Strong Portfolio</div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:bg-gray-800/80">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-purple-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative text-center">
              <div className="mb-2 text-5xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">50+</div>
              <div className="text-sm font-medium text-muted-foreground">Active Clients</div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:bg-gray-800/80">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative text-center">
              <div className="mb-2 text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">12+</div>
              <div className="text-sm font-medium text-muted-foreground">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[20%] top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-3xl animate-pulse" />
        <div className="absolute right-[10%] top-[30%] h-[500px] w-[500px] rounded-full bg-gradient-to-l from-pink-500/15 to-purple-500/15 blur-3xl animate-pulse" />
        <div className="absolute left-[60%] bottom-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-indigo-500/10 to-blue-500/10 blur-3xl animate-pulse" />
      </div>
    </section>
  )
}
