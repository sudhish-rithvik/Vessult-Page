import { motion } from 'framer-motion'

export function ProjectsHeroSection() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto flex flex-col items-center gap-4"
        >
          <span
            className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{
              background: 'rgba(37,99,235,0.08)',
              color: '#2563EB',
              border: '1px solid rgba(37,99,235,0.2)',
              fontFamily: "'Stack Sans Text', sans-serif",
            }}
          >
            Engineering Portfolio & Portfolio Showcase
          </span>

          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
          >
            Deployments That Drive{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #38BDF8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Industrial Scale
            </span>
          </h1>

          <p
            className="text-base md:text-lg max-w-2xl text-slate-600 leading-relaxed mt-2"
            style={{ fontFamily: "'Stack Sans Text', sans-serif" }}
          >
            Explore real-world computer vision, embedded silicon, autonomous robotics, and edge AI implementations deployed across aerospace, automotive, logistics, and energy industries.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
