import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("mb-4 sm:mb-6", className)}
      itemScope 
      itemType="https://schema.org/BreadcrumbList"
    >
      <ol className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
          {/* Home */}
          <li 
            className="flex items-center"
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            <Link 
              href="/" 
              className="group flex items-center gap-1.5 text-gray-600/80 dark:text-gray-400/80 transition-colors hover:text-foreground"
              itemProp="item"
            >
              <Home className="h-3.5 w-3.5" />
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>

          {/* Breadcrumb Items */}
          {items.map((item, index) => {
            const position = index + 2
            const isLast = index === items.length - 1

            return (
              <li 
                key={index} 
                className="flex items-center gap-2"
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem"
              >
                <ChevronRight className="h-3.5 w-3.5 text-gray-400/60 dark:text-gray-500/60 flex-shrink-0" />
                
                {item.href && !isLast ? (
                  <Link 
                    href={item.href}
                    className="text-gray-600/80 dark:text-gray-400/80 transition-colors hover:text-foreground line-clamp-1"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ) : (
                  <span 
                    className="font-medium text-foreground line-clamp-1" 
                    itemProp="name"
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
                
                <meta itemProp="position" content={position.toString()} />
              </li>
            )
          })}
        </ol>
    </nav>
  )
}
