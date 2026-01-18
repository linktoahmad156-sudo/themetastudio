import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
    title: 'Privacy Policy | The Meta Studio',
    description: 'How we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <section className="container mx-auto max-w-4xl px-4 py-24 sm:py-32">
                    <Breadcrumb items={[{ label: "Privacy Policy" }]} />
                    <h1 className="mt-4 mb-8 text-4xl font-bold tracking-tight">Privacy Policy</h1>
                    <div className="prose prose-purple dark:prose-invert max-w-none">
                        <p className="lead">Last updated: January 1, 2026</p>
                        <p>At The Meta Studio, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>

                        <h3>1. Information We Collect</h3>
                        <p>We may collect personal information such as your name, email address, phone number, and company details when you fill out forms on our site. We also automatically collect technical data like your IP address and browsing behavior via cookies to improve your experience.</p>

                        <h3>2. How We Use Your Information</h3>
                        <p>We use your data to:</p>
                        <ul>
                            <li>Provide and improve our digital marketing services.</li>
                            <li>Communicate with you regarding inquiries, updates, and offers.</li>
                            <li>Analyze website performance and user behavior.</li>
                            <li>Comply with legal obligations.</li>
                        </ul>

                        <h3>3. Data Security</h3>
                        <p>We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.</p>

                        <h3>4. Your Rights</h3>
                        <p>You have the right to access, correct, or delete your personal information. Contact us at info@themetastudio.com to exercise these rights.</p>

                        <h3>5. Contact Us</h3>
                        <p>If you have questions about this policy, please contact us at info@themetastudio.com or +44 7359 490149.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
