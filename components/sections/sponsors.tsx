"use client"

const sponsors = [
  { name: "TechVision Global", id: 1 },
  { name: "Nexus Innovations", id: 2 },
  { name: "Quantum Solutions", id: 3 },
  { name: "Summit Enterprises", id: 4 },
  { name: "Horizon Digital", id: 5 },
  { name: "Catalyst Group", id: 6 },
  { name: "Momentum Labs", id: 7 },
  { name: "Vanguard Systems", id: 8 },
  { name: "Pinnacle Corp", id: 9 },
  { name: "Eclipse Partners", id: 10 },
  { name: "Infinity Tech", id: 11 },
  { name: "Apex Industries", id: 12 },
  { name: "Zenith Ventures", id: 13 },
  { name: "Fusion Dynamics", id: 14 },
  { name: "Vertex Solutions", id: 15 },
  { name: "Cornerstone Group", id: 16 },
]

export function SponsorsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 dark:bg-gray-950 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Trusted by 500+ global companies
          </p>
        </div>

        {/* Logos Container */}
        <div className="relative">  
          {/* Gradient Overlays for fade effect */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-gray-950 sm:w-32 lg:w-40" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-gray-950 sm:w-32 lg:w-40" />

          {/* Infinite Marquee */}
          <div className="flex overflow-hidden">
            {/* First Set */}
            <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-12 sm:gap-16 lg:gap-20">
              {sponsors.map((sponsor) => (
                <div
                  key={`first-${sponsor.id}`}
                  className="flex items-center justify-center transition-opacity duration-300 hover:opacity-60"
                >
                  <span className="whitespace-nowrap text-xl font-bold tracking-tight text-gray-400 dark:text-gray-600 sm:text-2xl lg:text-3xl">
                    {sponsor.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Second Set (Duplicate for seamless loop) */}
            <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-12 sm:gap-16 lg:gap-20" aria-hidden="true">
              {sponsors.map((sponsor) => (
                <div
                  key={`second-${sponsor.id}`}
                  className="flex items-center justify-center transition-opacity duration-300 hover:opacity-60"
                >
                  <span className="whitespace-nowrap text-xl font-bold tracking-tight text-gray-400 dark:text-gray-600 sm:text-2xl lg:text-3xl">
                    {sponsor.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
