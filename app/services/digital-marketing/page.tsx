import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { Megaphone, TrendingUp, Target, Mail, BarChart, Share2 } from "lucide-react"

export const metadata: Metadata = {
    title: 'Digital Marketing Services | The Meta Studio',
    description: 'Full-service digital marketing agency. We integrated SEO, PPC, Social Media, and Content strategies to drive comprehensive growth for your business.',
}

export default function DigitalMarketingPage() {
    return (
        <ServicePageTemplate
            badge="Digital Marketing"
            title="Integrated"
            titleHighlight="Digital Strategies"
            description="Stop relying on siloed tactics. We build comprehensive, multi-channel digital marketing ecosystems where SEO, PPC, Social, and Content work together to multiply your results and dominate your market."
            features={[
                {
                    icon: Target,
                    title: "Multi-Channel Strategy",
                    description: "We don't just execute tactics; we build strategies. We analyze your market to determine the perfect mix of channelsSEO, paid ads, social, emailto reach your audience where they hang out."
                },
                {
                    icon: Megaphone,
                    title: "Conversion Rate Optimization",
                    description: "Traffic is useless if it doesn't convert. We continuously test and optimize your landing pages, offers, and funnels to maximize the ROI from every visitor."
                },
                {
                    icon: BarChart,
                    title: "Performance Analytics",
                    description: "Transparent, real-time reporting. We track every click and conversion, giving you a clear view of your Customer Acquisition Cost (CAC) and Return on Ad Spend (ROAS)."
                },
                {
                    icon: Mail,
                    title: "Marketing Automation",
                    description: "Scale your communication without losing the personal touch. We set up automated email flows and CRM sequences to nurture leads into customers 24/7."
                }
            ]}
            benefits={[
                {
                    title: "Unified Brand Message",
                    description: "Consistent storytelling across all platforms strengthens brand recall"
                },
                {
                    title: "Maximized ROI",
                    description: "Budget is shifted dynamically to the highest-performing channels"
                },
                {
                    title: "Full-Funnel Growth",
                    description: "Strategies that address Awareness, Consideration, and Conversion"
                },
                {
                    title: "Scalable Growth",
                    description: "Systems designed to handle increased traffic and leads"
                }
            ]}
            whyBadge="The Holistic Approach"
            whyHeadline="Why Integrated Marketing Wins"
            whyContent={[
                "The customer journey is no longer linear. A potential client might see your Facebook ad, search for you on Google, read a blog post, and then finally convert via an email offer. If your marketing channels aren't talking to each other, you're losing customers in the gaps.",
                "Our integrated approach ensures that every touchpoint reinforces the next. Retargeting ads capture drop-offs from SEO traffic. Email campaigns nurture leads from social media. This synergy creates a flywheel effect where your marketing becomes more efficient over time.",
                "We act as your growth partners. We don't just report on specific metrics; we look at the big picture of your business revenue and profitability. Let us handle the complex ecosystem of digital marketing while you focus on running your business."
            ]}
            ctaHeadline="Ready for Explosive Growth?"
            ctaDescription="Let's build a custom digital marketing plan tailored to your business goals."
            ctaButton="Book Strategy Session"
            gradient={{
                from: "indigo-600",
                to: "blue-600"
            }}
            breadcrumbService="Digital Marketing"
        />
    )
}
