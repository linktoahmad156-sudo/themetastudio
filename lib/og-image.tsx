import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

interface OGImageProps {
  title: string
  description?: string
  logo?: boolean
}

export const ogImageSize = {
  width: 1200,
  height: 630,
}

export const ogImageContentType = 'image/png'

export async function generateOGImage({ title, description, logo = true }: OGImageProps) {
  let logoData: string | undefined

  // Load logo if requested and file exists
  if (logo) {
    try {
      const logoBuffer = await readFile(join(process.cwd(), 'public/logo.png'))
      logoData = `data:image/png;base64,${logoBuffer.toString('base64')}`
    } catch {
      // Logo file doesn't exist yet, will use text fallback
      logoData = undefined
    }
  }

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
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {logoData && (
          <img
            src={logoData}
            alt="Logo"
            style={{
              width: '120px',
              height: '120px',
              marginBottom: '40px',
              objectFit: 'contain',
            }}
          />
        )}
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
          <div
            style={{
              fontSize: logoData ? 72 : 80,
              fontWeight: 'bold',
              color: 'white',
              letterSpacing: '-0.025em',
              marginBottom: description ? '20px' : '0',
              lineHeight: 1.1,
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                fontSize: 32,
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '900px',
              }}
            >
              {description}
            </div>
          )}
        </div>
        {!logoData && (
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              fontSize: 28,
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: '600',
            }}
          >
            The Meta Studio
          </div>
        )}
      </div>
    ),
    {
      ...ogImageSize,
    }
  )
}
