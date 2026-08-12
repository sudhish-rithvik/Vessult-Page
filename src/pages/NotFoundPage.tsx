import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export function NotFoundPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 3000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ background: '#FFFFFF', paddingTop: '110px' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center gap-6"
      >
        <div
          className="text-8xl font-extrabold"
          style={{
            fontFamily: "'Stack Sans Text', sans-serif",
            background: 'linear-gradient(135deg, #1E40AF, #2563EB, #38BDF8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </div>
        <h1
          className="text-2xl font-bold"
          style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
        >
          Page Not Found
        </h1>
        <p style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif" }}>
          Redirecting you to the home page...
        </p>
        <motion.button
          onClick={() => navigate('/')}
          className="px-6 py-3 rounded-full text-sm font-semibold"
          style={{
            background: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
            color: '#FFFFFF',
            fontFamily: "'Stack Sans Text', sans-serif",
            boxShadow: '0 4px 20px rgba(37,99,235,0.3)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Go Home
        </motion.button>
      </motion.div>
    </section>
  )
}
