"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How can digital marketing benefit my business?",
    answer: "Digital marketing provides numerous advantages including increased brand visibility, precise audience targeting, and enhanced lead generation capabilities. Our strategic approaches help businesses reach potential customers exactly when they're searching for solutions, resulting in higher conversion rates and measurable ROI."
  },
  {
    question: "How do you ensure data security for my business?",
    answer: "Establishing lasting brand-consumer relationships begins with robust data protection. Your information security is our highest priority. We implement comprehensive safety protocols and industry-standard encryption to ensure maximum data protection. Your trust is paramount, and we maintain strict confidentiality across all client interactions."
  },
  {
    question: "Can you help my business with website development?",
    answer: "Absolutely. As a comprehensive digital agency, we provide complete website development services. Our team of highly skilled developers can enhance your website's functionality, improve user experience, and drive organic traffic to maximize sales and conversions through modern, responsive design."
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer: "Result timelines vary based on factors including your industry, market competition, and chosen strategies. However, with our tailored digital marketing approaches, clients typically begin observing meaningful improvements within the first few months, with sustained long-term growth as strategies mature and optimize."
  },
  {
    question: "What industries do you specialize in?",
    answer: "The Meta Studio possesses extensive experience across diverse digital marketing platforms and development frameworks. We've successfully served clients in e-commerce, healthcare, technology, finance, retail, and professional services sectors. Our adaptable methodologies allow us to deliver cutting-edge solutions regardless of industry, helping businesses thrive in the digital era."
  },
  {
    question: "What makes your agency different from competitors?",
    answer: "Our dedication to research-driven strategies, transparent reporting, and proven ROI distinguishes us. We combine technical expertise with creative innovation, providing comprehensive tracking portals that allow real-time performance monitoring. Every strategy is customized to your unique business goals, ensuring maximum impact and sustained growth."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-500"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 dark:hover:from-purple-900/10 dark:hover:to-indigo-900/10"
              >
                <span className="text-lg font-semibold text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? "rotate-180 text-purple-600" : "text-muted-foreground group-hover:text-purple-600"
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-border/50 bg-gradient-to-b from-purple-50/30 to-transparent p-6 dark:from-purple-900/10">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
