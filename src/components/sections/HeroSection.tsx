import { useState, useRef, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { PCBScene } from '../three/PCBScene'
import { VessultLogoMark } from '../ui/Logo'
import { ArrowRight, Sparkles } from 'lucide-react'

/* ─── Floating stat card ──────────────────────────────────────── */
function StatCard({
  value,
  label,
  dark = false,
  className = '',
  delay = 0,
}: {
  value: string
  label: string
  dark?: boolean
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: dark ? 'rgba(5,8,22,0.85)' : 'rgba(15,23,42,0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: dark
          ? '1px solid rgba(37,99,235,0.35)'
          : '1px solid rgba(56,189,248,0.18)',
        borderRadius: 16,
        padding: '18px 22px',
        minWidth: 140,
        boxShadow: dark
          ? '0 8px 32px rgba(37,99,235,0.2)'
          : '0 8px 24px rgba(0,0,0,0.4)',
        zIndex: 20,
      }}
    >
      <div
        style={{
          fontFamily: "'Stack Sans Text', sans-serif",
          fontSize: '1.75rem',
          fontWeight: 700,
          color: dark ? '#F8FAFC' : '#38BDF8',
          lineHeight: 1,
          marginBottom: 6,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "'Stack Sans Text', sans-serif",
          fontSize: '0.72rem',
          color: '#64748B',
          lineHeight: 1.4,
          maxWidth: 130,
        }}
      >
        {label}
      </div>
    </motion.div>
  )
}

/* ─── Tag pill ────────────────────────────────────────────────── */
function TagPill({ label, delay }: { label: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      style={{
        display: 'inline-block',
        padding: '5px 14px',
        borderRadius: 999,
        background: 'rgba(37,99,235,0.1)',
        border: '1px solid rgba(37,99,235,0.2)',
        fontFamily: "'Stack Sans Text', sans-serif",
        fontSize: '0.72rem',
        fontWeight: 500,
        color: '#94A3B8',
        letterSpacing: '0.04em',
      }}
    >
      {label}
    </motion.span>
  )
}

/* ─── PCB Canvas ──────────────────────────────────────────────── */
function PCBCanvas({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  return (
    <Canvas
      style={{ background: 'transparent', width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <PerspectiveCamera makeDefault position={[0, 3, 4]} fov={45} />
      <Suspense fallback={null}>
        <PCBScene />
      </Suspense>
    </Canvas>
  )
}

/* ─── Main HeroSection ────────────────────────────────────────── */
export function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: -((e.clientY - rect.top) / rect.height - 0.5) * 2,
    })
  }

  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToSolutions = () =>
    document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' })

  const tags = ['Computer Vision', 'Edge AI', 'PCB Design', 'IoT', 'Embedded Systems']

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: '88px', paddingBottom: '60px' }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-custom relative z-10 w-full flex flex-col items-center gap-5">


        {/* ── Official Logo & Company Name (Primary Hero Heading) ── */}
        <motion.div
          className="text-center flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo Mark Hero Centerpiece */}
          <div className="relative group cursor-pointer mb-1">
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-60 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #38BDF8 0%, #2563EB 70%)' }}
            />
            <img
              src="/logo.png"
              alt="Vessult Logo"
              className="relative z-10 w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-[0_0_25px_rgba(56,189,248,0.7)]"
            />
          </div>

          <h1
            className="font-bold leading-none tracking-tight"
            style={{
              fontFamily: "'Stack Sans Text', sans-serif",
              fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
              color: '#F8FAFC',
              letterSpacing: '-0.02em',
            }}
          >
            VESSULT
          </h1>

          {/* ── Smaller Tagline: "Engineering Intelligent Vision" ── */}
          <h2
            className="font-semibold tracking-wider text-base sm:text-xl md:text-2xl uppercase mt-1"
            style={{
              fontFamily: "'Stack Sans Text', sans-serif",
              background: 'linear-gradient(90deg, #2563EB 0%, #38BDF8 50%, #22C55E 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.08em',
            }}
          >
            Engineering Intelligent Vision
          </h2>
        </motion.div>

        {/* ── Subtext ── */}
        <motion.p
          className="text-center max-w-xl text-sm sm:text-base leading-relaxed"
          style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          AI-powered software, Computer Vision, IoT and Edge AI solutions
          transforming industries with intelligent automation.
        </motion.p>

        {/* ── Central PCB canvas with floating cards ── */}
        <motion.div
          className="relative w-full"
          style={{ maxWidth: 780 }}
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* PCB canvas */}
          <div
            className="w-full rounded-2xl overflow-hidden"
            style={{
              aspectRatio: '16/9',
              border: '1px solid rgba(37,99,235,0.2)',
              boxShadow: '0 0 80px rgba(37,99,235,0.12), 0 24px 64px rgba(0,0,0,0.5)',
              background: 'rgba(5,8,22,0.6)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <PCBCanvas mouseX={mouse.x} mouseY={mouse.y} />
          </div>

          {/* ── Floating stat: top-left (dark) ── */}
          <StatCard
            value="50+"
            label="Successful projects delivered globally"
            dark
            className="-left-4 lg:-left-12 top-[12%]"
            delay={0.75}
          />

          {/* ── Floating stat: top-right (light glass) ── */}
          <StatCard
            value="4.9★"
            label="Average client satisfaction rating"
            className="-right-4 lg:-right-12 top-[12%]"
            delay={0.85}
          />

          {/* ── Floating stat: bottom-left ── */}
          <StatCard
            value="30+"
            label="Enterprise clients served"
            dark
            className="-left-4 lg:-left-12 bottom-[10%]"
            delay={0.95}
          />

          {/* ── Floating tag cloud: bottom-right ── */}
          <motion.div
            className="absolute -right-4 lg:-right-12 bottom-[10%]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'rgba(5,8,22,0.8)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(56,189,248,0.15)',
              borderRadius: 16,
              padding: '14px 16px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 6,
              maxWidth: 200,
              zIndex: 20,
            }}
          >
            {tags.map((t, i) => (
              <TagPill key={t} label={t} delay={1.1 + i * 0.06} />
            ))}
          </motion.div>
        </motion.div>

        {/* ── CTA buttons ── */}
        <motion.div
          className="flex gap-4 items-center pt-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <motion.button
            onClick={scrollToSolutions}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold"
            style={{
              background: 'linear-gradient(135deg, #2563EB, #1d4ed8)',
              color: '#F8FAFC',
              fontFamily: "'Stack Sans Text', sans-serif",
              boxShadow: '0 0 32px rgba(37,99,235,0.4)',
              letterSpacing: '0.02em',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 48px rgba(37,99,235,0.6)' }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Solutions
            <ArrowRight size={15} />
          </motion.button>

          <motion.button
            onClick={scrollToContact}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold"
            style={{
              background: 'rgba(255,255,255,0.04)',
              color: '#94A3B8',
              fontFamily: "'Stack Sans Text', sans-serif",
              border: '1px solid rgba(255,255,255,0.08)',
              letterSpacing: '0.02em',
            }}
            whileHover={{ scale: 1.04, color: '#F8FAFC', borderColor: 'rgba(56,189,248,0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            Book Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
