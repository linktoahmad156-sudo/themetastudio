"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Loader2, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      setIsSuccess(true)
      // Reset form
      e.currentTarget.reset()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl sm:text-4xl font-bold">Have a Question?</CardTitle>
        <CardDescription className="text-base sm:text-lg mt-2">
          Send us your queries and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 sm:p-8 lg:p-10">
        {isSuccess && (
          <div className="mb-6 rounded-xl border-2 border-green-200 bg-green-50 p-4 dark:border-green-900/30 dark:bg-green-900/10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
              <div>
                <p className="font-semibold text-green-900 dark:text-green-100">Message sent successfully!</p>
                <p className="text-sm text-green-700 dark:text-green-200">We'll get back to you within 24 hours.</p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-xl border-2 border-red-200 bg-red-50 p-4 dark:border-red-900/30 dark:bg-red-900/10">
            <p className="text-sm font-semibold text-red-900 dark:text-red-100">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="John"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Doe"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="john@example.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="+44 7359 490149"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-medium">
              Service Interested In <span className="text-destructive">*</span>
            </label>
            <select
              id="service"
              name="service"
              className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
              disabled={isSubmitting}
            >
              <option value="">Select a service</option>
              <option value="Search Engine Optimization">Search Engine Optimization</option>
              <option value="Local SEO">Local SEO</option>
              <option value="Technical SEO">Technical SEO</option>
              <option value="E-commerce SEO">E-commerce SEO</option>
              <option value="Google Ads (PPC)">Google Ads (PPC)</option>
              <option value="Social Media Marketing">Social Media Marketing</option>
              <option value="Facebook & Instagram Ads">Facebook & Instagram Ads</option>
              <option value="LinkedIn Advertising">LinkedIn Advertising</option>
              <option value="YouTube Advertising">YouTube Advertising</option>
              <option value="Content Marketing">Content Marketing</option>
              <option value="Email Marketing">Email Marketing</option>
              <option value="Other Services">Other Services</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message <span className="text-destructive">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Tell us about your project, goals, and how we can help..."
              required
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full group text-base h-14"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
