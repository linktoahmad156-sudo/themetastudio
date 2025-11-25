import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const ogImageSize = {
  width: 1200,
  height: 630,
}

export const ogImageContentType = 'image/png'

interface ServiceOGImageProps {
  title: string
  tagline: string
  category: string
  gradient: {
    from: string
    to: string
  }
}

export async function generateServiceOGImage({
  title,
  tagline,
  category,
  gradient
}: ServiceOGImageProps) {
  let logoData: string | undefined

  // Load logo if exists
  try {
    const logoBuffer = await readFile(join(process.cwd(), 'public/logo.png'))
    logoData = `data:image/png;base64,${logoBuffer.toString('base64')}`
  } catch {
    logoData = undefined
  }

  // Map Tailwind color names to actual hex values
  const colorMap: Record<string, string> = {
    'purple-600': '#9333ea',
    'indigo-600': '#4f46e5',
    'blue-600': '#2563eb',
    'cyan-600': '#0891b2',
    'green-600': '#16a34a',
    'emerald-600': '#059669',
    'orange-600': '#ea580c',
    'red-600': '#dc2626',
    'pink-600': '#db2777',
    'rose-600': '#e11d48',
    'violet-600': '#7c3aed',
    'amber-600': '#d97706',
    'blue-700': '#1d4ed8',
    'blue-500': '#3b82f6',
  }

  const fromColor = colorMap[gradient.from] || '#9333ea'
  const toColor = colorMap[gradient.to] || '#4f46e5'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, ${fromColor} 0%, ${toColor} 100%)`,
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Logo */}
        {logoData && (
          <img
            src={logoData}
            alt="Logo"
            style={{
              width: '100px',
              height: '100px',
              marginBottom: '30px',
              objectFit: 'contain',
            }}
          />
        )}
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 80px',
            textAlign: 'center',
          }}
        >
          {/* Category Badge */}
          <div
            style={{
              fontSize: 24,
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '20px',
              fontWeight: '600',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: '12px 32px',
              borderRadius: '50px',
            }}
          >
            {category}
          </div>
          
          {/* Title */}
          <div
            style={{
              fontSize: 68,
              fontWeight: 'bold',
              color: 'white',
              letterSpacing: '-0.025em',
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            {title}
          </div>
          
          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255, 255, 255, 0.95)',
              maxWidth: '900px',
            }}
          >
            {tagline}
          </div>
        </div>
        
        {/* Branding at bottom */}
        {!logoData && (
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              fontSize: 26,
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: '600',
            }}
          >
            The Meta Studio
          </div>
        )}
        
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            filter: 'blur(80px)',
            left: '-200px',
            top: '-200px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            filter: 'blur(80px)',
            right: '-200px',
            bottom: '-200px',
          }}
        />
      </div>
    ),
    {
      ...ogImageSize,
    }
  )
}
