import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { LoadingScreen } from './components/effects/LoadingScreen'
import { RootLayout } from './components/layout/RootLayout'
import { HomePage } from './pages/HomePage'
import { SolutionsPage } from './pages/SolutionsPage'
import { IndustriesPage } from './pages/IndustriesPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { TechnologiesPage } from './pages/TechnologiesPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  const [loading, setLoading] = useState(true)
  const handleLoadComplete = () => {
    setLoading(false)
  }

  return (
    <>
      {/* Meta */}
      <title>VESSULT | Engineering Intelligent Vision</title>

      {/* Loading screen — shown before router mounts */}
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* Main app — fades in after loading */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <BrowserRouter>
              <Routes>
                {/* Root layout wraps all pages with shared Navbar, Footer & effects */}
                <Route element={<RootLayout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/solutions" element={<SolutionsPage />} />
                  <Route path="/industries" element={<IndustriesPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/technologies" element={<TechnologiesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
