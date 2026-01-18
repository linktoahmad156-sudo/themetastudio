import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Support | The Meta Studio',
    description: 'Get support for our services.',
}

export default function SupportPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <section className="pt-24 sm:pt-28 pb-16 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
                    <div className="container mx-auto max-w-7xl px-4 text-center">
                        <Breadcrumb items={[{ label: "Support" }]} />
                        <h1 className="mt-4 text-4xl font-extrabold">Help & <span className="text-purple-600">Support</span></h1>
                        <p className="mt-4 text-xl text-muted-foreground">We are here to help you succeed.</p>
                    </div>
                </section>

                <section className="py-20 text-center">
                    <div className="container mx-auto max-w-2xl px-4">
                        <p className="mb-8 text-lg">
                            Need assistance with your ongoing campaign or have a technical question?
                            Our support team is available Mon-Fri, 9am - 6pm GMT.
                        </p>
                        <div className="flex flex-col gap-4">
                            <Button size="lg" asChild className="w-full sm:w-auto">
                                <Link href="/contact">Open a Support Ticket</Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                                <Link href="/faq">View FAQ</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
