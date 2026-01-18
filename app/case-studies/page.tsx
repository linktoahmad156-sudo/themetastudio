import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OurWorkSection } from "@/components/sections/our-work" // Reuse components
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
    title: 'Case Studies | The Meta Studio',
    description: 'In-depth look at how we helped our clients succeed.',
}

export default function CaseStudiesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                <section className="relative pt-24 sm:pt-28 pb-10 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <Breadcrumb items={[{ label: "Case Studies" }]} />
                        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
                            Success <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Stories</span>
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
                            Real results for real businesses.
                        </p>
                    </div>
                </section>

                {/* Reusing Our Work Section for now as it contains Case Study summaries */}
                <OurWorkSection />
            </main>
            <Footer />
        </div>
    )
}
