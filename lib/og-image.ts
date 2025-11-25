/**
 * OG Image URL Generator
 * 
 * This utility creates dynamic OG image URLs for all pages
 * No manual image creation needed - everything is generated automatically!
 */

interface OGImageOptions {
  title: string
  description: string
  type?: 'default' | 'service' | 'page'
  gradient?: 'purple' | 'blue' | 'green' | 'orange' | 'pink' | 'indigo'
}

/**
 * Generate OG image URL for any page
 * 
 * @example
 * ```ts
 * const ogImageUrl = generateOGImageUrl({
 *   title: 'SEO Services',
 *   description: 'Rank #1 on Google',
 *   gradient: 'blue'
 * })
 * ```
 */
export function generateOGImageUrl(options: OGImageOptions): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://themetastudio.com'
  
  const params = new URLSearchParams({
    title: options.title,
    description: options.description,
    type: options.type || 'default',
    gradient: options.gradient || 'purple',
  })

  return `${baseUrl}/api/og?${params.toString()}`
}

/**
 * Service-specific gradients for consistency
 */
export const SERVICE_GRADIENTS = {
  seo: 'blue',
  ppc: 'orange',
  social: 'pink',
  content: 'green',
  email: 'indigo',
  strategy: 'purple',
} as const

/**
 * Helper to get gradient for service pages
 */
export function getServiceGradient(serviceSlug: string): string {
  // Map service slugs to gradient colors
  const gradientMap: Record<string, string> = {
    'search-engine-optimization': 'blue',
    'local-seo': 'blue',
    'technical-seo': 'orange',
    'ecommerce-seo': 'green',
    'google-ads': 'orange',
    'facebook-instagram-ads': 'pink',
    'linkedin-ads': 'blue',
    'youtube-ads': 'orange',
    'social-media-marketing': 'pink',
    'social-media-strategy': 'pink',
    'community-management': 'pink',
    'influencer-marketing': 'pink',
    'content-marketing': 'green',
    'email-marketing': 'indigo',
    'copywriting': 'purple',
    'marketing-strategy': 'purple',
  }

  return gradientMap[serviceSlug] || 'purple'
}
