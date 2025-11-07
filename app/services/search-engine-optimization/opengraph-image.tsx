import { generateOGImage, ogImageSize, ogImageContentType } from '@/lib/og-image'

export const alt = 'Search Engine Optimization - The Meta Studio'
export const size = ogImageSize
export const contentType = ogImageContentType

export default async function Image() {
  return generateOGImage({
    title: 'Search Engine Optimization',
    description: 'Strategic SEO Solutions for Digital Growth',
    logo: true,
  })
}
