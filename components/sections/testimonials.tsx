"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart",
    content: "The Meta Studio transformed our digital presence completely. Their team's expertise in web development and design is unmatched. Our conversion rates increased by 150%!",
    rating: 5,
    image: "SJ",
    color: "from-purple-600 to-indigo-600"
  },
  {
    name: "Michael Chen",
    role: "Founder, EcoMarket",
    company: "EcoMarket",
    content: "Working with The Meta Studio was a game-changer for our e-commerce business. They delivered a beautiful, high-performing platform that our customers love.",
    rating: 5,
    image: "MC",
    color: "from-blue-600 to-cyan-600"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, FinTech Solutions",
    company: "FinTech Solutions",
    content: "Their digital marketing strategies helped us reach our target audience effectively. Professional, creative, and results-driven - highly recommended!",
    rating: 5,
    image: "ER",
    color: "from-pink-600 to-rose-600"
  },
  {
    name: "David Thompson",
    role: "Product Manager, HealthApp",
    company: "HealthApp",
    content: "The mobile app they developed exceeded our expectations. The UI/UX design is intuitive, and the performance is outstanding. Our users are thrilled!",
    rating: 5,
    image: "DT",
    color: "from-emerald-600 to-teal-600"
  },
  {
    name: "Lisa Anderson",
    role: "Brand Manager, StyleHub",
    company: "StyleHub",
    content: "The Meta Studio helped us create a brand identity that truly represents who we are. Their creative approach and attention to detail made all the difference.",
    rating: 5,
    image: "LA",
    color: "from-orange-600 to-amber-600"
  },
  {
    name: "James Wilson",
    role: "CTO, DataSync",
    company: "DataSync",
    content: "Exceptional technical skills and project management. They delivered our complex web application on time and within budget. A truly professional team!",
    rating: 5,
    image: "JW",
    color: "from-indigo-600 to-purple-600"
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const handlePrevious = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(timer)
  }, [activeIndex])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-gray-950 dark:via-purple-950/10 dark:to-gray-950 py-20 sm:py-24 lg:py-32">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl dark:bg-purple-900/10" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl dark:bg-indigo-900/10" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/50 px-5 py-2 backdrop-blur-sm dark:border-purple-900/30 dark:bg-purple-900/10">
            <Star className="h-4 w-4 fill-purple-600 text-purple-600 dark:fill-purple-400 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-900 dark:text-purple-200">Testimonials</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Trusted by industry leaders and growing businesses worldwide
          </p>
        </div>

        {/* Premium Testimonial Carousel */}
        <div className="mx-auto max-w-6xl mb-16">
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden">
            <div className="relative min-h-[350px] sm:min-h-[400px]">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex
                const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length
                const isNext = index === (activeIndex + 1) % testimonials.length
                
                let translateX = '0'
                let opacity = 0
                let scale = 0.95
                let zIndex = 0
                
                if (isActive) {
                  translateX = '0'
                  opacity = 1
                  scale = 1
                  zIndex = 20
                } else if (isPrev) {
                  translateX = direction === -1 ? '-100%' : '0'
                  opacity = direction === -1 ? 0.5 : 0
                  zIndex = 10
                } else if (isNext) {
                  translateX = direction === 1 ? '100%' : '0'
                  opacity = direction === 1 ? 0.5 : 0
                  zIndex = 10
                }
                
                return (
                  <div
                    key={index}
                    className="absolute inset-0 transition-all duration-700 ease-in-out"
                    style={{
                      transform: `translateX(${translateX}) scale(${scale})`,
                      opacity: opacity,
                      zIndex: zIndex,
                    }}
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-gray-200/50 bg-gradient-to-br from-white to-gray-50/50 p-6 shadow-2xl dark:border-gray-800/50 dark:from-gray-900 dark:to-gray-800/50 sm:rounded-3xl sm:p-10 lg:p-14">
                      {/* Decorative gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 dark:from-purple-500/10 dark:to-indigo-500/10" />
                      
                      {/* Quote Icon */}
                      <Quote className="absolute right-4 top-4 h-12 w-12 text-purple-600/10 dark:text-purple-400/10 sm:right-8 sm:top-8 sm:h-20 sm:w-20" />

                      <div className="relative">
                        {/* Stars */}
                        <div className="mb-4 flex gap-1 sm:mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 sm:h-5 sm:w-5" />
                          ))}
                        </div>

                        {/* Testimonial Content */}
                        <blockquote className="mb-6 text-lg font-medium leading-relaxed text-foreground sm:mb-8 sm:text-2xl lg:text-3xl">
                          "{testimonial.content}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex items-center gap-3 sm:gap-4">
                          {/* Avatar with unique gradient */}
                          <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${testimonial.color} text-lg font-bold text-white shadow-lg sm:h-16 sm:w-16 sm:rounded-2xl sm:text-xl`}>
                            {testimonial.image}
                          </div>
                          
                          <div>
                            <div className="text-base font-bold text-foreground sm:text-lg">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-muted-foreground sm:text-base">
                              {testimonial.role}
                            </div>
                            <div className={`text-xs font-semibold bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent sm:text-sm`}>
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              )
            })}
          </div>
          </div>

          {/* Premium Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4 sm:mt-12 sm:gap-6">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 bg-white transition-all hover:border-purple-600 hover:bg-purple-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-600 dark:hover:bg-purple-900/20 sm:h-14 sm:w-14"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-4 w-4 text-gray-600 transition-colors group-hover:text-purple-600 dark:text-gray-400 sm:h-5 sm:w-5" />
            </button>

            {/* Dots Indicator with Gradient */}
            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1)
                    setActiveIndex(index)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 sm:h-2 ${
                    index === activeIndex
                      ? `w-8 bg-gradient-to-r ${testimonial.color} sm:w-12`
                      : "w-1.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 sm:w-2"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 bg-white transition-all hover:border-purple-600 hover:bg-purple-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-600 dark:hover:bg-purple-900/20 sm:h-14 sm:w-14"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-4 w-4 text-gray-600 transition-colors group-hover:text-purple-600 dark:text-gray-400 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        {/* Secondary Testimonials Grid - Glassmorphism Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 p-6 shadow-lg backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 dark:border-gray-700/20 dark:bg-gray-900/60"
            >
              {/* Glassmorphism Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative">
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-sm font-bold text-white">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
