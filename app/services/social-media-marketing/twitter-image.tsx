import { generateOGImage, ogImageSize, ogImageContentType } from '@/lib/og-image'

export const alt = 'Social Media Marketing - The Meta Studio'
export const size = ogImageSize
export const contentType = ogImageContentType

export default async function Image() {
  return generateOGImage({
    title: 'Social Media Marketing',
    description: 'Build Authentic Connections & Grow Your Brand',
    logo: true,
  })
}
