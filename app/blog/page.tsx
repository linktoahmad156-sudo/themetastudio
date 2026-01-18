import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
    title: 'Blog & Insights | The Meta Studio',
    description: 'Latest digital marketing trends, tips, and strategies from our experts.',
}

const posts = [
    {
        title: "10 SEO Trends to Watch in 2026",
        excerpt: "Discover the latest SEO strategies that will dominate the search landscape this year, from AI content to voice search.",
        category: "SEO",
        date: "Jan 15, 2026",
        image: "/seo-results-dashboard.png", // Reusing your generated image
        slug: "#"
    },
    {
        title: "Maximizing ROI with Google Ads",
        excerpt: "Learn how to optimize your PPC campaigns for higher conversion rates and lower acquisition costs.",
        category: "PPC",
        date: "Jan 10, 2026",
        image: "/saas-dashboard-redesign.png", // Reusing your generated image
        slug: "#"
    },
    {
        title: "The Future of E-commerce Design",
        excerpt: "Explore the emerging design trends that are shaping the future of online shopping experiences.",
        category: "Design",
        date: "Jan 05, 2026",
        image: "/ecommerce-platform.png", // Reusing your generated image
        slug: "#"
    }
]

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                <section className="relative pt-24 sm:pt-28 pb-16 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <Breadcrumb items={[{ label: "Blog" }]} />
                        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground">
                            Insights & <span className="text-purple-600">News</span>
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
                            Expert articles and industry updates to help you stay ahead.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post, index) => (
                                <Card key={index} className="overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-2">
                                            <Badge variant="secondary">{post.category}</Badge>
                                            <span className="text-xs text-muted-foreground">{post.date}</span>
                                        </div>
                                        <CardTitle className="leading-tight group-hover:text-purple-600 transition-colors">
                                            <Link href={post.slug}>{post.title}</Link>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <p className="text-muted-foreground">{post.excerpt}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant="link" className="px-0 text-purple-600" asChild>
                                            <Link href={post.slug}>Read More</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
