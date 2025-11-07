import { generateOGImage, ogImageSize, ogImageContentType } from '@/lib/og-image'

// Image metadata
export const alt = 'The Meta Studio - Digital Excellence Delivered'
export const size = ogImageSize
export const contentType = ogImageContentType

// Image generation
export default async function Image() {
  return generateOGImage({
    title: 'The Meta Studio',
    description: 'Empowering Businesses Through Digital Innovation',
    logo: true,
  })
}
