import { useState } from 'react'
import CursorGrid from './components/effects/CursorGrid'
import { motion, AnimatePresence } from 'framer-motion'
import { LoadingScreen } from './components/effects/LoadingScreen'
import { CustomCursor } from './components/effects/CustomCursor'
import { ParticleBackground } from './components/effects/ParticleBackground'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { StatsSection } from './components/sections/StatsSection'
import { AboutSection } from './components/sections/AboutSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { PCBSection } from './components/sections/PCBSection'
import { IndustriesSection } from './components/sections/IndustriesSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { WhyVessultSection } from './components/sections/WhyVessultSection'
import { WorkflowSection } from './components/sections/WorkflowSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { TechStackSection } from './components/sections/TechStackSection'
import { ContactSection } from './components/sections/ContactSection'

function App() {
  const [loading, setLoading] = useState(true)
  const handleLoadComplete = () => {
    setLoading(false)
  }

  return (
    <>
      {/* Meta */}
      <title>VESSULT | Engineering Intelligent Vision</title>

      {/* Custom cursor */}
      <CustomCursor />

      {/* Loading screen */}
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* Main content */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
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

            {/* Page sections reordered to align 1:1 with the NAVBAR items */}
            <main>
              {/* 1. HOME */}
              <HeroSection />
              <StatsSection />

              {/* 2. ABOUT */}
              <AboutSection />

              {/* 3. SOLUTIONS */}
              <ServicesSection />
              <PCBSection />

              {/* 4. INDUSTRIES */}
              <IndustriesSection />

              {/* 5. PROJECTS */}
              <ProjectsSection />
              <WhyVessultSection />
              <WorkflowSection />
              <TestimonialsSection />

              {/* 6. TECHNOLOGIES */}
              <TechStackSection />

              {/* 7. CONTACT */}
              <ContactSection />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
