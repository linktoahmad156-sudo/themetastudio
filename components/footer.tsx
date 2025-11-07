import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const navigation = {
  services: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Development", href: "/services/mobile-development" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Brand Identity", href: "/services/brand-identity" },
    { name: "E-commerce", href: "/services/ecommerce" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                The Meta Studio
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Transforming ideas into digital reality. We craft exceptional digital 
              experiences that drive results and create lasting impact.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="mr-2 h-4 w-4" />
                hello@themetastudio.com
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="mr-2 h-4 w-4" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                123 Creative Street, Design District
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Meta Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
