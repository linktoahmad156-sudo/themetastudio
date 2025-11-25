import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Users, Target, Award } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Rich Experience",
    description: "Decade-long expertise in delivering exceptional digital solutions across diverse industries.",
  },
  {
    icon: Users,
    title: "Great Client Support",
    description: "Dedicated support team ensuring your success with round-the-clock assistance and guidance.",
  },
  {
    icon: Target,
    title: "Complex Problem Solving",
    description: "Strategic approaches that tackle intricate challenges with innovative, effective solutions.",
  },
  {
    icon: Lightbulb,
    title: "Cutting-Edge Technologies",
    description: "Leveraging the latest tools and frameworks to keep your business ahead of the curve.",
  },
]

export function AboutSection() {
  return (
    <section className="relative bg-white dark:bg-gray-950 py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/50 px-5 py-2 backdrop-blur-sm dark:border-purple-900/30 dark:bg-purple-900/10">
            <Award className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-900 dark:text-purple-200">About Us</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Digital Agency Transforming Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            We are a well-structured digital agency that transcends conventional approaches, 
            empowering you to reach unprecedented success in today's digital landscape. Our commitment 
            centers on elevating sales performance, amplifying customer connections, and converting 
            one-time buyers into lifelong brand enthusiasts.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <Card key={value.title} className="group relative overflow-hidden border border-gray-200 bg-white transition-all duration-500 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-purple-900/10 dark:to-indigo-900/10"></div>
                <CardHeader className="relative">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl">
                    <Icon className="h-7 w-7 text-white transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-xl font-bold transition-colors duration-300 group-hover:text-purple-600">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-foreground">Research-Driven Strategies</h3>
            <p className="mb-4 text-muted-foreground">
              In a competitive digital landscape, what distinguishes us is our unwavering commitment to 
              excellence in research, insight analysis, and strategic innovation. These elements form the 
              foundation of our marketing approaches that propel businesses to new digital heights.
            </p>
            <p className="text-muted-foreground">
              Our comprehensive research methodologies align with current market dynamics, enabling us to 
              deeply understand client perspectives and objectives. This positions us to consistently 
              outperform industry competitors.
            </p>
          </div>
          <div>
            <h3 className="mb-6 text-2xl font-bold text-foreground">Proven Expertise in Driving ROI</h3>
            <p className="mb-4 text-muted-foreground">
              With over a decade of specialized experience, we've established ourselves as industry leaders. 
              Our proven track record demonstrates consistent success in driving sales, generating quality 
              leads, and delivering exceptional return on investment.
            </p>
            <p className="text-muted-foreground">
              Transparency and integrity define our operations. We provide comprehensive tracking portals 
              that allow clients to monitor their website's performance evolution and witness measurable 
              progress in real-time, ensuring accountability at every step.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
