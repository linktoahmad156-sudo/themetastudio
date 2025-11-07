import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with The Meta Studio. We\'re here to help transform your digital presence with expert consultation and strategic solutions.',
  openGraph: {
    title: 'Contact Us | The Meta Studio',
    description: 'Let\'s discuss how we can help grow your business through digital innovation.',
  },
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/50 to-background py-20 dark:from-purple-950/20 sm:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 px-6 py-3 shadow-lg dark:from-purple-900/30 dark:to-indigo-900/30">
                <MessageSquare className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">Let's Connect</span>
              </div>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Get in{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Ready to transform your digital presence? Our team of experts is here to help you achieve your business goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">
                            First Name <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">
                            Last Name <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium">
                          Service Interested In <span className="text-destructive">*</span>
                        </label>
                        <select
                          id="service"
                          className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="seo">Search Engine Optimization</option>
                          <option value="sem">Search Engine Marketing</option>
                          <option value="google-ads">Google Ads</option>
                          <option value="social-media">Social Media Marketing</option>
                          <option value="facebook-ads">Facebook & Instagram Ads</option>
                          <option value="email">Email Marketing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message <span className="text-destructive">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="Tell us about your project..."
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full group">
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 lg:col-span-2">
                <Card className="group bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Email Us</h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Send us an email anytime!
                    </p>
                    <a href="mailto:hello@themetastudio.com" className="text-sm font-medium text-primary hover:underline">
                      hello@themetastudio.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="group bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Call Us</h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Mon-Fri from 9am to 6pm
                    </p>
                    <a href="tel:+15551234567" className="text-sm font-medium text-primary hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </CardContent>
                </Card>

                <Card className="group bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-600 to-purple-600 shadow-lg">
                      <MapPin className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Visit Us</h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Come say hello at our office
                    </p>
                    <p className="text-sm font-medium text-primary">
                      123 Creative Street<br />
                      Design District, NY 10001
                    </p>
                  </CardContent>
                </Card>

                <Card className="group bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
                      <Clock className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Business Hours</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
