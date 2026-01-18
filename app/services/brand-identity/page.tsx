import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { Palette, PenTool, Image as ImageIcon, Briefcase, FileText, Award } from "lucide-react"

export const metadata: Metadata = {
    title: 'Brand Identity Services | The Meta Studio',
    description: 'Create a memorable brand with our branding services. Logo design, brand guidelines, and visual identity that resonates with your audience.',
}

export default function BrandIdentityPage() {
    return (
        <ServicePageTemplate
            badge="Brand Identity"
            title="Build a Brand"
            titleHighlight="That Resonates"
            description="Your brand is more than just a logo; it's the story, the feeling, and the promise you make to your customers. We help you define your unique voice and visual identity to stand out in a crowded marketplace."
            features={[
                {
                    icon: PenTool,
                    title: "Logo Design",
                    description: "Timeless, memorable, and versatile logo marks that serve as the cornerstone of your visual identity. We iterate until we find the perfect representation of your business."
                },
                {
                    icon: Palette,
                    title: "Visual Identity Systems",
                    description: "Complete visual languages including color palettes, typography, and iconography. We ensure your brand looks consistent and professional across every medium."
                },
                {
                    icon: FileText,
                    title: "Brand Guidelines",
                    description: "Comprehensive brand books that serve as a manual for your brand. Clear rules on usage ensure that your team and partners maintain brand consistency."
                },
                {
                    icon: Briefcase,
                    title: "Rebranding",
                    description: "Strategic brand evolution for established businesses. Whether you need a refresh or a complete overhaul, we guide you through the transformation without losing your heritage."
                }
            ]}
            benefits={[
                {
                    title: "Instant Recognition",
                    description: "Stand out on the shelf and in the feed with distinctive visuals"
                },
                {
                    title: "Premium Positioning",
                    description: "High-quality branding allows you to command higher prices"
                },
                {
                    title: "Customer Loyalty",
                    description: "Emotional connections built through consistent branding last longer"
                },
                {
                    title: "Employee Pride",
                    description: "A strong brand attracts and retains top talent"
                }
            ]}
            whyBadge="The Power of Branding"
            whyHeadline="Why Branding Is Your Best Investment"
            whyContent={[
                "In an era of infinite choice, a strong brand is the ultimate differentiator. It builds trust before you even speak to a customer. It turns buyers into advocates. Weak branding forces you to compete on price; strong branding allows you to compete on value.",
                "Our branding process is strategic and collaborative. We start by uncovering your 'Why'your core mission and values. Then, we translate that abstract essence into tangible visual assets. We don't just make things look good; we make them meaningful.",
                "Whether you're a startup looking to make a big splash or an established enterprise needing to stay relevant, we craft identities that are authentic, adaptable, and enduring."
            ]}
            ctaHeadline="Ready to Define Your Brand?"
            ctaDescription="Let's create a visual identity that tells your story and captures hearts."
            ctaButton="Start Branding Project"
            gradient={{
                from: "orange-500",
                to: "red-500"
            }}
            breadcrumbService="Brand Identity"
        />
    )
}
