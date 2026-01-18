import type { Metadata } from 'next'
import { ServicePageTemplate } from "@/components/service-page-template"
import { ShoppingCart, TrendingUp, CreditCard, Box, PieChart, Truck } from "lucide-react"

export const metadata: Metadata = {
    title: 'E-commerce Solutions | The Meta Studio',
    description: 'Comprehensive E-commerce development and marketing services. We build high-converting online stores using Shopify, WooCommerce, and custom builds.',
}

export default function EcommercePage() {
    return (
        <ServicePageTemplate
            badge="E-commerce Solutions"
            title="Scale Your"
            titleHighlight="Online Store"
            description="From storefront setup to checkout optimization, we provide end-to-end e-commerce solutions. Whether you're on Shopify, WooCommerce, or need a custom build, we help you sell more effectively online."
            features={[
                {
                    icon: ShoppingCart,
                    title: "Store Development",
                    description: "Custom design and development for Shopify, BigCommerce, and WooCommerce. We build fast, secure, and easy-to-manage stores that showcase your products beautifully."
                },
                {
                    icon: CreditCard,
                    title: "Conversion Optimization",
                    description: "We optimize your product pages, cart flow, and checkout process to reduce abandonment and increase Average Order Value (AOV). Every click counts."
                },
                {
                    icon: Box,
                    title: "Inventory & ERP Integration",
                    description: "Automate your operations. We examine and integrate your store with inventory management systems, ERPs, and shipping providers to streamline fulfillment."
                },
                {
                    icon: TrendingUp,
                    title: "E-commerce Marketing",
                    description: "Specialized marketing strategies for retail. Google Shopping ads, dynamic Facebook retargeting, and email recovery flows that bring customers back."
                }
            ]}
            benefits={[
                {
                    title: "Increased Sales",
                    description: "Optimized user journeys lead to higher conversion rates"
                },
                {
                    title: "Streamlined Operations",
                    description: "Automation reduces manual work and errors"
                },
                {
                    title: "Mobile-First Shopping",
                    description: "Flawless experiences for the growing number of mobile shoppers"
                },
                {
                    title: "Data-Driven Decisions",
                    description: "Advanced analytics to understand customer behavior"
                }
            ]}
            whyBadge="Sell Everywhere"
            whyHeadline="The Future of Retail Is Digital"
            whyContent={[
                "E-commerce is more competitive than ever. To succeed, you need more than just a website; you need a sales engine. Your store needs to be fast, intuitive, and trustworthy. It needs to tell a compelling product story and make buying effortless.",
                "We specialize in building e-commerce experiences that perform. We understand the technical nuances of payment gateways, tax calculations, and shipping zones. But more importantly, we understand the psychology of the online shopper.",
                "We are experts in Shopify and modern headless e-commerce architectures. Whether you're selling a few artisanal products or thousands of SKUs globally, we build scalable platforms that grow with your revenue."
            ]}
            ctaHeadline="Ready to Grow Your Sales?"
            ctaDescription="Let's build an online store that turns visitors into repeat buyers."
            ctaButton="Launch Your Store"
            gradient={{
                from: "emerald-600",
                to: "teal-600"
            }}
            breadcrumbService="E-commerce"
        />
    )
}
