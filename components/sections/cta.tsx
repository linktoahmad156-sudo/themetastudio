import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 p-12 shadow-2xl sm:p-16 lg:p-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 shadow-lg backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
            </span>
            <span className="text-sm font-semibold text-white">Let's Work Together</span>
          </div>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="mb-10 text-lg text-purple-100 sm:text-xl">
            Let's collaborate to bring your vision to life. Get in touch with us today 
            and discover how we can help your business thrive in the digital world.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="group h-14 w-full bg-white px-10 text-base font-semibold text-purple-600 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:w-auto">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 w-full border-2 border-white bg-transparent px-10 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-purple-600 sm:w-auto">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-1/4 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
