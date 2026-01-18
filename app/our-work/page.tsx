import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OurWorkSection } from "@/components/sections/our-work" // Reuse the existing component
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
    title: 'Our Work - Case Studies & Portfolio | The Meta Studio',
    description: 'Explore our portfolio of successful projects. See how we help businesses achieve 150%+ ROI through data-driven digital marketing strategies.',
}

export default function OurWorkPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                {/* Header Section */}
                <section className="relative pt-24 sm:pt-28 pb-10 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <Breadcrumb items={[{ label: "Our Work" }]} />
                        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
                            Our <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Portfolio</span>
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
                            A selection of our recent work across various industries, showcasing our commitment to excellence and results.
                        </p>
                    </div>
                </section>

                {/* Use the existing component but maybe we can extend it or just use it as is for now */}
                <OurWorkSection />

                {/* We could add more specific detailed case studies here later */}
            </main>
            <Footer />
        </div>
    )
}
