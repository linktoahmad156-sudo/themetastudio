import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Get parameters from URL
    const title = searchParams.get('title') || 'The Meta Studio'
    const description = searchParams.get('description') || 'Data-Driven Digital Marketing Agency'
    const type = searchParams.get('type') || 'default' // default, service, page
    const gradient = searchParams.get('gradient') || 'purple' // purple, blue, green, etc.

    // Gradient configurations
    const gradients: Record<string, { from: string; to: string }> = {
      purple: { from: '#9333ea', to: '#4f46e5' },
      blue: { from: '#3b82f6', to: '#06b6d4' },
      green: { from: '#10b981', to: '#14b8a6' },
      orange: { from: '#f97316', to: '#ef4444' },
      pink: { from: '#ec4899', to: '#f43f5e' },
      indigo: { from: '#6366f1', to: '#8b5cf6' },
    }

    const selectedGradient = gradients[gradient] || gradients.purple

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
            background: `linear-gradient(135deg, ${selectedGradient.from} 0%, ${selectedGradient.to} 100%)`,
            position: 'relative',
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)',
              backgroundSize: '100px 100px',
              opacity: 0.3,
            }}
          />

          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                padding: '20px',
              }}
            >
              {/* Logo placeholder - replace with actual logo */}
              <div
                style={{
                  fontSize: '60px',
                  fontWeight: 'bold',
                  background: `linear-gradient(135deg, ${selectedGradient.from} 0%, ${selectedGradient.to} 100%)`,
                  backgroundClip: 'text',
                  color: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                M
              </div>
            </div>
          </div>

          {/* Main Content */}
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
            {/* Title */}
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: 'white',
                lineHeight: 1.2,
                marginBottom: '24px',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                maxWidth: '1000px',
              }}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: '32px',
                color: 'rgba(255, 255, 255, 0.95)',
                lineHeight: 1.4,
                marginBottom: '40px',
                maxWidth: '900px',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              {description}
            </p>

            {/* Brand Name */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px 40px',
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '100px',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: 'white',
                  letterSpacing: '0.5px',
                }}
              >
                The Meta Studio
              </div>
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'white',
                }}
              />
              <div
                style={{
                  fontSize: '24px',
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                Digital Marketing Agency
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div
            style={{
              position: 'absolute',
              bottom: '-100px',
              right: '-100px',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              filter: 'blur(80px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              left: '-100px',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              filter: 'blur(80px)',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
