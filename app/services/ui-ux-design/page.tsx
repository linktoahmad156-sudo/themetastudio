import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { Palette, Layout, PenTool, Eye, MousePointer2, Users } from "lucide-react"

export const metadata: Metadata = {
    title: 'UI/UX Design Services | The Meta Studio',
    description: 'User-centric UI/UX design services. We create beautiful, intuitive interfaces that delight users and drive conversions.',
}

export default function UIUXDesignPage() {
    return (
        <ServicePageTemplate
            badge="UI/UX Design"
            title="Design That"
            titleHighlight="Delights & Converts"
            description="Great design is about more than just aesthetics; it's about how it works. We create intuitive, user-centric interfaces that guide visitors seamlessly through your digital product, ensuring a delightful experience that drives conversions."
            features={[
                {
                    icon: Layout,
                    title: "User Interface (UI) Design",
                    description: "Visually stunning interfaces that align with your brand identity. We pay attention to typography, color theory, and layout to create modern, clean, and accessible designs."
                },
                {
                    icon: Users,
                    title: "User Experience (UX) Research",
                    description: "Data-driven design decisions based on user research, personas, and journey mapping. We understand your users' needs and pain points to build solutions they actually want."
                },
                {
                    icon: Palette,
                    title: "Design Systems",
                    description: "Scalable design systems and component libraries that ensure consistency across all your digital products and speed up development time."
                },
                {
                    icon: MousePointer2,
                    title: "Interactive Prototyping",
                    description: "High-fidelity clickable prototypes that allow you to test and validate ideas before writing a single line of code, saving time and resources."
                }
            ]}
            benefits={[
                {
                    title: "Higher Conversion Rates",
                    description: "Intuitive flows reduce friction and encourage users to take action"
                },
                {
                    title: "Increased User Retention",
                    description: "Delightful experiences keep users coming back for more"
                },
                {
                    title: "Reduced Dev Costs",
                    description: "Clear specifications and prototypes minimize rework during development"
                },
                {
                    title: "Stronger Brand Loyalty",
                    description: "Professional design builds trust and credibility with your audience"
                }
            ]}
            whyBadge="Design Matters"
            whyHeadline="First Impressions Are Everything"
            whyContent={[
                "Users form an opinion about your website in 0.05 seconds. That's why design is crucial. It's not just about making things look pretty; it's about communicating value, building trust, and guiding user behavior. Good design solves problems.",
                "Our design philosophy is rooted in empathy. We put ourselves in your users' shoes to understand their motivations and frustrations. This user-centric approach ensures that every button, every interaction, and every screen serves a purpose.",
                "From wireframes to polished high-fidelity designs, our process is transparent and iterative. We collaborate with you at every step to ensure the final product not only looks amazing but also achieves your business goals."
            ]}
            ctaHeadline="Ready to Upgrade Your UX?"
            ctaDescription="Let's create a digital experience that your users will love."
            ctaButton="Get a Design Audit"
            gradient={{
                from: "pink-600",
                to: "purple-600"
            }}
            breadcrumbService="UI/UX Design"
        />
    )
}
