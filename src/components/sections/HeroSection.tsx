import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'

export function HeroSection() {
  const navigate = useNavigate()
  const scrollToSolutions = () => navigate('/solutions')
  const scrollToContact = () => navigate('/contact')

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      style={{
        background: '#FFFFFF',
        paddingTop: '110px',
        paddingBottom: '80px',
      }}
    >
      {/* ── Subtle Mesh Grid Background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── Top Soft Blue Spotlight ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] pointer-events-none blur-3xl opacity-40"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, #DBEAFE 0%, #93C5FD 50%, transparent 100%)',
        }}
      />

      {/* ── Bottom light wash ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(239,246,255,0.7) 0%, transparent 100%)',
        }}
      />

      {/* ── Main Content Container ── */}
      <div className="container-custom relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto my-auto gap-6">

        {/* ── Big Company Title with Brighter Logo in Background ── */}
        <motion.div
          className="relative flex flex-col items-center justify-center w-full"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo Mark directly in Background behind the title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
            {/* Brighter Radial Glow */}
            <div
              className="w-[420px] h-[420px] sm:w-[550px] sm:h-[550px] rounded-full blur-2xl opacity-70"
              style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, rgba(56,189,248,0.18) 50%, transparent 75%)' }}
            />
            {/* Brighter Logo Image */}
            <img
              src="/logo.png"
              alt="Vessult Background Logo"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 object-contain opacity-35"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(37,99,235,0.35))' }}
            />
          </div>

          {/* Big Company Name Heading */}
          <h1
            className="font-extrabold leading-none tracking-tight relative z-10 select-none"
            style={{
              fontFamily: "'Stack Sans Text', sans-serif",
              fontSize: 'clamp(3.8rem, 11vw, 8rem)',
              letterSpacing: '-0.03em',
              color: '#0F172A',
              textShadow: 'none',
            }}
          >
            VESSULT
          </h1>

          {/* Tagline right below */}
          <h2
            className="font-semibold tracking-widest text-sm sm:text-lg md:text-xl uppercase mt-3 relative z-10"
            style={{
              fontFamily: "'Stack Sans Text', sans-serif",
              background: 'linear-gradient(90deg, #1E40AF 0%, #2563EB 50%, #16A34A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.12em',
            }}
          >
            Engineering Intelligent Vision
          </h2>
        </motion.div>

        {/* ── Subtitle Description ── */}
        <motion.p
          className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto pt-1"
          style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Production-grade hardware and software built with{' '}
          <strong style={{ color: '#1E40AF' }}>Computer Vision</strong>,{' '}
          <strong style={{ color: '#1E40AF' }}>Edge AI</strong>, and{' '}
          <strong style={{ color: '#1E40AF' }}>Industrial IoT</strong>. Designed for real-world reliability and high-speed automation.
        </motion.p>

        {/* ── Action Buttons ── */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Primary Blue Button */}
          <motion.button
            onClick={scrollToSolutions}
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
              color: '#FFFFFF',
              fontFamily: "'Stack Sans Text', sans-serif",
              boxShadow: '0 4px 20px rgba(37,99,235,0.3)',
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 6px 28px rgba(37,99,235,0.45)' }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Solutions
            <ArrowRight size={16} />
          </motion.button>

          {/* Secondary Light Button */}
          <motion.button
            onClick={scrollToContact}
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all cursor-pointer"
            style={{
              background: '#FFFFFF',
              color: '#1E40AF',
              border: '1px solid rgba(37,99,235,0.25)',
              fontFamily: "'Stack Sans Text', sans-serif",
              boxShadow: '0 2px 12px rgba(37,99,235,0.1)',
            }}
            whileHover={{ scale: 1.04, background: '#EFF6FF', borderColor: 'rgba(37,99,235,0.4)', boxShadow: '0 4px 20px rgba(37,99,235,0.18)' }}
            whileTap={{ scale: 0.97 }}
          >
            Book Consultation
            <Star size={14} className="fill-amber-400 text-amber-400" />
          </motion.button>
        </motion.div>
      </div>

      {/* ── Bottom Section Controls & Indicators ── */}
      <div className="absolute bottom-8 left-0 right-0 px-8 flex items-end justify-between pointer-events-none">

        {/* Left Spacer */}
        <div className="w-32 hidden md:block" />

        {/* Center Animated Mouse Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center mx-auto pointer-events-auto cursor-pointer"
          onClick={scrollToSolutions}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div
            className="w-6 h-10 rounded-full border-2 flex justify-center p-1.5"
            style={{ borderColor: 'rgba(37,99,235,0.3)', background: 'rgba(239,246,255,0.5)' }}
          >
            <motion.div
              className="w-1.5 h-2 rounded-full"
              style={{ background: '#2563EB' }}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        {/* Right Subtle Counter Text */}
        <motion.div
          className="hidden md:block text-xs font-mono text-right w-44"
          style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Currently with 50+ deployments.
        </motion.div>
      </div>
    </section>
  )
}
