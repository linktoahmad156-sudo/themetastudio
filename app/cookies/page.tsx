import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
    title: 'Cookie Policy | The Meta Studio',
    description: 'Information about how we use cookies on our website.',
}

export default function CookiesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <section className="container mx-auto max-w-4xl px-4 py-24 sm:py-32">
                    <Breadcrumb items={[{ label: "Cookie Policy" }]} />
                    <h1 className="mt-4 mb-8 text-4xl font-bold tracking-tight">Cookie Policy</h1>
                    <div className="prose prose-purple dark:prose-invert max-w-none">
                        <p className="lead">Last updated: January 1, 2026</p>
                        <p>This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.</p>

                        <h3>1. What Are Cookies?</h3>
                        <p>Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and improve functionality.</p>

                        <h3>2. Types of Cookies We Use</h3>
                        <ul>
                            <li><strong>Essential Cookies:</strong> Necessary for the website to function (e.g., security, page navigation).</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics).</li>
                            <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant ads.</li>
                        </ul>

                        <h3>3. Managing Cookies</h3>
                        <p>You can control and/or delete cookies as you wish via your browser settings. Note that disabling cookies may affect the functionality of this website.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
