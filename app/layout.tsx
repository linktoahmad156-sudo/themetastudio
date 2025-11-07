import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://themetastudio.com'),
  title: {
    default: 'The Meta Studio - Digital Marketing & Development Agency',
    template: '%s | The Meta Studio',
  },
  description: 'Empowering businesses through digital innovation. Specializing in SEO, Google Ads, social media marketing, and comprehensive digital solutions that drive measurable growth.',
  keywords: ['digital marketing', 'SEO services', 'Google Ads', 'social media marketing', 'search engine optimization', 'PPC management', 'digital agency', 'online marketing'],
  authors: [{ name: 'The Meta Studio' }],
  creator: 'The Meta Studio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://themetastudio.com',
    siteName: 'The Meta Studio',
    title: 'The Meta Studio - Digital Marketing & Development Agency',
    description: 'Empowering businesses through digital innovation. Strategic SEO, Google Ads, and social media marketing solutions that deliver measurable ROI.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'The Meta Studio - Digital Excellence Delivered',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Meta Studio - Digital Marketing Agency',
    description: 'Empowering businesses through digital innovation and strategic marketing solutions.',
    images: ['/twitter-image.png'],
    creator: '@themetastudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
