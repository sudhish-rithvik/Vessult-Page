import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

export function HeroSection() {
  const scrollToSolutions = () =>
    document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      style={{
        background: '#050816',
        paddingTop: '110px',
        paddingBottom: '80px',
      }}
    >
      {/* ── Subtle Mesh Grid Background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── Top Soft Spotlight Beam ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none blur-3xl opacity-25"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, #38BDF8 0%, #2563EB 50%, transparent 100%)',
        }}
      />

      {/* ── Main Content Container ── */}
      <div className="container-custom relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto my-auto gap-6">
        
        {/* ── Big Company Title with Logo in Background ── */}
        <motion.div
          className="relative flex flex-col items-center justify-center w-full"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo Mark directly in Background behind the title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
            <div
              className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full blur-2xl opacity-30"
              style={{ background: 'radial-gradient(circle, #38BDF8 0%, #2563EB 60%, transparent 100%)' }}
            />
            <img
              src="/logo.png"
              alt="Vessult Background Logo"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 object-contain opacity-25 filter drop-shadow-[0_0_35px_rgba(56,189,248,0.8)]"
            />
          </div>

          {/* Big Company Name Heading */}
          <h1
            className="font-extrabold leading-none tracking-tight text-white relative z-10 select-none"
            style={{
              fontFamily: "'Stack Sans Text', sans-serif",
              fontSize: 'clamp(3.8rem, 11vw, 8rem)',
              letterSpacing: '-0.03em',
              textShadow: '0 10px 40px rgba(0,0,0,0.8)',
            }}
          >
            VESSULT
          </h1>

          {/* Tagline right below in smaller text */}
          <h2
            className="font-semibold tracking-widest text-sm sm:text-lg md:text-xl uppercase mt-3 relative z-10"
            style={{
              fontFamily: "'Stack Sans Text', sans-serif",
              background: 'linear-gradient(90deg, #2563EB 0%, #38BDF8 50%, #22C55E 100%)',
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
          style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Production-grade hardware and software built with{' '}
          <strong className="text-white font-semibold">Computer Vision</strong>,{' '}
          <strong className="text-white font-semibold">Edge AI</strong>, and{' '}
          <strong className="text-white font-semibold">Industrial IoT</strong>. Designed for real-world reliability and high-speed automation.
        </motion.p>

        {/* ── Action Buttons ── */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Primary Light Button */}
          <motion.button
            onClick={scrollToSolutions}
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all"
            style={{
              background: '#F8FAFC',
              color: '#0F172A',
              fontFamily: "'Stack Sans Text', sans-serif",
              boxShadow: '0 4px 20px rgba(255,255,255,0.15)',
            }}
            whileHover={{ scale: 1.04, background: '#FFFFFF', boxShadow: '0 6px 28px rgba(255,255,255,0.25)' }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Solutions
            <ArrowRight size={16} />
          </motion.button>

          {/* Secondary Dark Button */}
          <motion.button
            onClick={scrollToContact}
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all"
            style={{
              background: 'rgba(255,255,255,0.06)',
              color: '#F8FAFC',
              border: '1px solid rgba(255,255,255,0.14)',
              fontFamily: "'Stack Sans Text', sans-serif",
              backdropFilter: 'blur(10px)',
            }}
            whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.25)' }}
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
            className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center p-1.5"
            style={{ background: 'rgba(15,23,42,0.4)' }}
          >
            <motion.div
              className="w-1.5 h-2 rounded-full bg-slate-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        {/* Right Subtle Counter Text */}
        <motion.div
          className="hidden md:block text-xs font-mono text-slate-500 text-right w-44"
          style={{ fontFamily: "'Stack Sans Text', sans-serif" }}
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
