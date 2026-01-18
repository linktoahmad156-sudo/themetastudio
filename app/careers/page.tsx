import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Careers | The Meta Studio',
    description: 'Join our team of digital experts.',
}

export default function CareersPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <section className="pt-24 sm:pt-28 pb-16 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
                    <div className="container mx-auto max-w-7xl px-4 text-center">
                        <Breadcrumb items={[{ label: "Careers" }]} />
                        <h1 className="mt-4 text-4xl font-extrabold">Join Our <span className="text-purple-600">Team</span></h1>
                        <p className="mt-4 text-xl text-muted-foreground">We're always looking for talent.</p>
                    </div>
                </section>

                <section className="py-20 text-center">
                    <div className="container mx-auto max-w-4xl px-4">
                        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
                        <div className="space-y-4">
                            <div className="p-6 border rounded-lg bg-white shadow-sm dark:bg-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="text-left">
                                    <h3 className="font-bold text-lg">Senior SEO Specialist</h3>
                                    <p className="text-sm text-muted-foreground">Remote / Full-time</p>
                                </div>
                                <Button asChild>
                                    <Link href="/contact">Apply Now</Link>
                                </Button>
                            </div>
                            <div className="p-6 border rounded-lg bg-white shadow-sm dark:bg-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="text-left">
                                    <h3 className="font-bold text-lg">PPC Manager</h3>
                                    <p className="text-sm text-muted-foreground">London, UK / Hybrid</p>
                                </div>
                                <Button asChild>
                                    <Link href="/contact">Apply Now</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
