import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export const metadata: Metadata = {
    title: 'Our Team | The Meta Studio',
    description: 'Meet the experts behind The Meta Studio.',
}

const team = [
    {
        name: "Sarah Johnson",
        role: "Founder & CEO",
        bio: "15+ years in digital strategy using data to drive growth.",
        image: "/saas-dashboard-redesign.png" // Placeholder
    },
    {
        name: "Michael Chen",
        role: "CTO",
        bio: "Tech visionary ensuring our solutions are cutting-edge.",
        image: "/seo-results-dashboard.png" // Placeholder
    },
    {
        name: "Emily Rodriguez",
        role: "Creative Director",
        bio: "Award-winning designer crafting beautiful experiences.",
        image: "/ecommerce-platform.png" // Placeholder
    },
]

export default function TeamPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <section className="pt-24 sm:pt-28 pb-16 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
                    <div className="container mx-auto max-w-7xl px-4 text-center">
                        <Breadcrumb items={[{ label: "Team" }]} />
                        <h1 className="mt-4 text-4xl font-extrabold text-foreground">Meet The <span className="text-purple-600">Team</span></h1>
                        <p className="mt-4 text-xl text-muted-foreground">The brilliant minds behind our success.</p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto max-w-7xl px-4">
                        <div className="grid gap-8 md:grid-cols-3">
                            {team.map((member, i) => (
                                <Card key={i} className="text-center overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="relative h-64 w-full bg-gray-100 dark:bg-gray-800">
                                        {/* In a real project using real headshots */}
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                            [Photo: {member.name}]
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <CardTitle>{member.name}</CardTitle>
                                        <p className="text-sm font-medium text-purple-600">{member.role}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{member.bio}</p>
                                    </CardContent>
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
