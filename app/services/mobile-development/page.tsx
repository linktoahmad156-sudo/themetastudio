import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { Smartphone, Tablet, Zap, Layers, Globe, Code } from "lucide-react"

export const metadata: Metadata = {
    title: 'Mobile App Development | The Meta Studio',
    description: 'Native and Cross-Platform mobile app development for iOS and Android. Create engaging mobile experiences with React Native and Flutter.',
}

export default function MobileDevelopmentPage() {
    return (
        <ServicePageTemplate
            badge="Mobile Development"
            title="Innovative"
            titleHighlight="Mobile Apps"
            description="Transform your business with custom mobile applications for iOS and Android. We create intuitive, high-performance apps that engage users and drive loyalty using modern cross-platform technologies."
            features={[
                {
                    icon: Smartphone,
                    title: "iOS Development",
                    description: "Premium iOS applications designed for the Apple ecosystem. We ensure strict adherence to human interface guidelines for a seamless native experience."
                },
                {
                    icon: Tablet,
                    title: "Android Development",
                    description: "Robust Android apps that run smoothly across the fragmented device landscape. We optimize for performance and battery life on all supported devices."
                },
                {
                    icon: Layers,
                    title: "Cross-Platform Solutions",
                    description: "Cost-effective development using React Native or Flutter to build for both platforms simultaneously with a single codebase, without compromising on quality."
                },
                {
                    icon: Zap,
                    title: "App Store Optimization (ASO)",
                    description: "We don't just build apps; we help them get found. Our ASO strategies improve your app's visibility in the App Store and Google Play Store."
                }
            ]}
            benefits={[
                {
                    title: "Native Performance",
                    description: "Smooth animations and fast load times for superior UX"
                },
                {
                    title: "Faster Time to Market",
                    description: "Rapid prototyping and agile development cycles"
                },
                {
                    title: "Cost Efficiency",
                    description: "Shared codebases reduce development and maintenance costs"
                },
                {
                    title: "User-Centric Design",
                    description: "Interfaces designed specifically for touch interactions"
                }
            ]}
            whyBadge="Why Go Mobile"
            whyHeadline="Capture Customers on the Go"
            whyContent={[
                "The world is mobile-first. With users spending over 4 hours a day on their smartphones, having a dedicated mobile app is no longer a luxuryit's a necessity for many businesses. An app allows you to stay connected with your customers through push notifications, location-based services, and offline functionality.",
                "At The Meta Studio, we specialize in building apps that people love to use. Our team combines technical expertise with creative design to solve real user problems. We handle everything from the initial concept and design to development, testing, and App Store submission.",
                "We focus on creating seamless experiences. Whether you need a customer loyalty app, an e-commerce store, or an internal enterprise tool, we build solutions that deliver value and drive engagement."
            ]}
            ctaHeadline="Have an App Idea?"
            ctaDescription="Let's discuss how we can bring your mobile app concept to life."
            ctaButton="Consult With Us"
            gradient={{
                from: "purple-600",
                to: "pink-600"
            }}
            breadcrumbService="Mobile Development"
        />
    )
}
