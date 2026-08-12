import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
// @ts-ignore
import CursorGrid from '../effects/CursorGrid'
import { CustomCursor } from '../effects/CustomCursor'
import { ParticleBackground } from '../effects/ParticleBackground'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

/**
 * RootLayout — shared shell that wraps every page route.
 * Keeps all global effects (cursor, particles, grid) mounted between navigations.
 */
export function RootLayout() {
  const { pathname } = useLocation()

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Particle background */}
      <ParticleBackground />

      {/* Interactive cursor grid — subtle, behind everything */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
        }}
      >
        <CursorGrid
          cellSize={70}
          color="#38BDF8"
          radius={100}
          falloff="smooth"
          holdTime={300}
          fadeDuration={1200}
          lineWidth={0.6}
          maxOpacity={0.12}
          fillOpacity={0}
          gridOpacity={0}
          cellRadius={0}
          clickPulse
          pulseSpeed={600}
        />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Page content */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
