import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { servicesData } from "@/components/header"

export const metadata: Metadata = {
    title: 'Our Services - Comprehensive Digital Marketing Solutions | The Meta Studio',
    description: 'Explore our full range of digital marketing services including SEO, PPC, Social Media, Content Marketing, and more. Data-driven strategies tailored for your business growth.',
}

export default function ServicesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center">
                            <Breadcrumb items={[{ label: "Services" }]} />

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
                                Our Digital <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
                            </h1>
                            <p className="mt-6 text-xl text-muted-foreground">
                                Comprehensive solutions designed to elevate your brand and drive measurable growth.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 sm:py-24">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-16">
                            {servicesData.map((category) => (
                                <div key={category.category}>
                                    <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground border-b pb-4">
                                        {category.category}
                                    </h2>
                                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                        {category.items.map((service) => {
                                            const Icon = service.icon
                                            return (
                                                <Link key={service.title} href={service.href} className="group">
                                                    <Card className="h-full transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:-translate-y-1">
                                                        <CardHeader>
                                                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-md transition-transform duration-300 group-hover:scale-110">
                                                                <Icon className="h-6 w-6 text-white" />
                                                            </div>
                                                            <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                                                                {service.title}
                                                            </CardTitle>
                                                        </CardHeader>
                                                        <CardContent>
                                                            <CardDescription className="mb-4 text-base">
                                                                {service.description}
                                                            </CardDescription>
                                                            <div className="flex items-center text-sm font-semibold text-purple-600">
                                                                Learn More <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-muted/50 py-20 sm:py-24">
                    <div className="container mx-auto max-w-4xl px-4 text-center">
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Not sure what you need?
                        </h2>
                        <p className="mb-8 text-lg text-muted-foreground">
                            Book a free consultation with our experts. We'll analyze your business goals and recommend the perfect strategy for you.
                        </p>
                        <div className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
