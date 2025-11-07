import { generateOGImage, ogImageSize, ogImageContentType } from '@/lib/og-image'

export const alt = 'Google Ads Management - The Meta Studio'
export const size = ogImageSize
export const contentType = ogImageContentType

export default async function Image() {
  return generateOGImage({
    title: 'Google Ads Management',
    description: 'Expert Campaigns That Deliver Measurable ROI',
    logo: true,
  })
}
