import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "The Meta Studio transformed our digital presence completely. Their team's expertise in web development and design is unmatched. Our conversion rates increased by 150%!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, EcoMarket",
    content: "Working with The Meta Studio was a game-changer for our e-commerce business. They delivered a beautiful, high-performing platform that our customers love.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, FinTech Solutions",
    content: "Their digital marketing strategies helped us reach our target audience effectively. Professional, creative, and results-driven - highly recommended!",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Product Manager, HealthApp",
    content: "The mobile app they developed exceeded our expectations. The UI/UX design is intuitive, and the performance is outstanding. Our users are thrilled!",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "Brand Manager, StyleHub",
    content: "The Meta Studio helped us create a brand identity that truly represents who we are. Their creative approach and attention to detail made all the difference.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "CTO, DataSync",
    content: "Exceptional technical skills and project management. They delivered our complex web application on time and within budget. A truly professional team!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about 
            working with The Meta Studio.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <CardHeader />
              <CardContent className="pt-6">
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
