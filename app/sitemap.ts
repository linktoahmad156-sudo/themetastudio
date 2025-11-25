import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://themetastudio.com'
  
  // All service pages
  const services = [
    'search-engine-optimization',
    'local-seo',
    'technical-seo',
    'ecommerce-seo',
    'google-ads',
    'facebook-instagram-ads',
    'linkedin-ads',
    'youtube-ads',
    'social-media-marketing',
    'social-media-strategy',
    'community-management',
    'influencer-marketing',
    'content-marketing',
    'email-marketing',
    'copywriting',
    'marketing-strategy',
  ]

  // Generate service page entries
  const servicePages = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...servicePages,
  ]
}
