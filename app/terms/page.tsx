import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
    title: 'Terms of Service | The Meta Studio',
    description: 'The terms and conditions governing the use of The Meta Studio website and services.',
}

export default function TermsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <section className="container mx-auto max-w-4xl px-4 py-24 sm:py-32">
                    <Breadcrumb items={[{ label: "Terms of Service" }]} />
                    <h1 className="mt-4 mb-8 text-4xl font-bold tracking-tight">Terms of Service</h1>
                    <div className="prose prose-purple dark:prose-invert max-w-none">
                        <p className="lead">Last updated: January 1, 2026</p>
                        <p>Please read these Terms of Service ("Terms") carefully before using The Meta Studio website or engaging our services.</p>

                        <h3>1. Acceptance of Terms</h3>
                        <p>By accessing our website or using our services, you agree to be bound by these Terms. If you do not agree, strictly do not use our services.</p>

                        <h3>2. Services</h3>
                        <p>The Meta Studio provides digital marketing services including SEO, PPC, and Web Development. Specific deliverables and timelines will be outlined in a separate agreement or proposal.</p>

                        <h3>3. Intellectual Property</h3>
                        <p>All content on this website, including text, graphics, logos, and code, is the property of The Meta Studio and protected by copyright laws. You may not reproduce this content without our express written consent.</p>

                        <h3>4. Limitation of Liability</h3>
                        <p>The Meta Studio shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.</p>

                        <h3>5. Governing Law</h3>
                        <p>These Terms are governed by the laws of the United Kingdom. Any disputes shall be resolved in the courts of the UK.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
