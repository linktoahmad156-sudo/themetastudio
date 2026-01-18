import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { Code, Smartphone, Globe, Cloud, Layout, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: 'Web Development Services | The Meta Studio',
    description: 'Custom website development services using Next.js, React, and modern technologies. Fast, secure, and scalable solutions tailored to your business needs.',
}

export default function WebDevelopmentPage() {
    return (
        <ServicePageTemplate
            badge="Web Development"
            title="High-Performance"
            titleHighlight="Web Solutions"
            description="We build blazing-fast, secure, and scalable websites that drive business growth. From simple landing pages to complex web applications, our expert developers use cutting-edge technologies like Next.js and React to deliver exceptional user experiences."
            features={[
                {
                    icon: Globe,
                    title: "Custom Web Applications",
                    description: "Tailored web solutions built from scratch to meet your specific business requirements. We focus on scalability, security, and performance to ensure your application grows with your business."
                },
                {
                    icon: Layout,
                    title: "Responsive Design",
                    description: "Mobile-first approach ensuring your website looks and works perfectly on all devices, from desktops to smartphones. We prioritize user experience and accessibility across all screen sizes."
                },
                {
                    icon: Code,
                    title: "Modern Tech Stack",
                    description: "We leverage the latest technologies including Next.js, React, TypeScript, and Tailwind CSS to build robust, maintainable, and future-proof web applications."
                },
                {
                    icon: Cloud,
                    title: "CMS Integration",
                    description: "Seamless integration with Headless CMS platforms like Sanity, Contentful, or Strapi, giving you full control over your content without compromising on performance."
                }
            ]}
            benefits={[
                {
                    title: "Lightning Fast Speed",
                    description: "Optimized performance for better SEO rankings and user retention"
                },
                {
                    title: "SEO-Friendly Architecture",
                    description: "Built with technical SEO best practices from the ground up"
                },
                {
                    title: "Robust Security",
                    description: "Enterprise-grade security measures to protect your data and users"
                },
                {
                    title: "Scalable Infrastructure",
                    description: "Cloud-native solutions that scale automatically with your traffic"
                }
            ]}
            whyBadge="Why Choose Us"
            whyHeadline="We Build Digital Products That Scale"
            whyContent={[
                "In today's digital-first world, your website is often the first interaction a customer has with your brand. A slow, outdated, or poorly designed website can cost you business. At The Meta Studio, we don't just write code; we engineer digital experiences that convert visitors into customers.",
                "Our development process is agile and collaborative. We work closely with you to understand your goals and delivering a product that not only meets but exceeds your expectations. We rigorously test every feature to ensure bug-free deployment.",
                "Whether you need a high-converting landing page, a corporate website, or a complex SaaS platform, our team of senior developers has the expertise to bring your vision to life. We pride ourselves on writing clean, maintainable code that stands the test of time."
            ]}
            ctaHeadline="Ready to Build something amazing?"
            ctaDescription="Let's turn your ideas into a reality with a custom web solution designed for growth."
            ctaButton="Start Your Project"
            gradient={{
                from: "blue-600",
                to: "indigo-600"
            }}
            breadcrumbService="Web Development"
        />
    )
}
