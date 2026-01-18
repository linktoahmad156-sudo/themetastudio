import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | The Meta Studio',
    description: 'Find answers to common questions about our digital marketing services, pricing, process, and results. Start your journey with confidence.',
}

const faqs = [
    {
        question: "What industries do you specialize in?",
        answer: "We have experience working across a wide range of industries including E-commerce, SaaS, Healthcare, Real Estate, Professional Services, and Local Businesses. Our data-driven approach allows us to adapt our strategies to any market niche."
    },
    {
        question: "How long does it take to see results?",
        answer: "Timeline varies by service. PPC and Social Ads can generate traffic immediately, while SEO typically takes 3-6 months to show significant organic growth. We provide realistic timelines and regular progress reports for every campaign."
    },
    {
        question: "Do you offer custom packages?",
        answer: "Yes! We understand every business is unique. While we have standard packages, we frequently tailor our solutions to match your specific goals, budget, and requirements during our initial consultation."
    },
    {
        question: "What makes The Meta Studio different?",
        answer: "We focus on ROI and transparency. We don't just deliver 'vanity metrics' like likes or impressions; we focus on leads, sales, and revenue. Plus, you get a dedicated account manager and real-time reporting dashboards."
    },
    {
        question: "Do you require long-term contracts?",
        answer: "For most services, we work on a month-to-month basis because we believe our results should keep you with us, not a contract. However, SEO services typically have a recommended minimum term of 6 months to ensure effectiveness."
    },
    {
        question: "How does your reporting work?",
        answer: "We provide comprehensive monthly reports detailing all key performance indicators (KPIs), completed work, and upcoming strategy. We also offer 24/7 access to a live dashboard where you can track results in real-time."
    }
]

export default function FAQPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <Breadcrumb items={[{ label: "FAQ" }]} />
                        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
                            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">FAQ</span>
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
                            Common questions about our services and process.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto max-w-3xl px-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Generals Questions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    {faqs.map((faq, index) => (
                                        <AccordionItem key={index} value={`item-${index}`}>
                                            <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
