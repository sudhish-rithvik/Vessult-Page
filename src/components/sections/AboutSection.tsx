import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Eye, Shield } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To democratize intelligent vision technology by delivering world-class AI and computer vision solutions that transform how industries operate, compete, and innovate at the edge.',
    color: '#2563EB',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'A world where every machine sees, understands, and acts intelligently — where edge AI empowers devices to make split-second decisions without human intervention.',
    color: '#38BDF8',
  },
  {
    icon: Shield,
    title: 'Our Values',
    description: 'Engineering excellence, radical transparency, continuous innovation, and unwavering commitment to delivering solutions that create measurable real-world impact.',
    color: '#22C55E',
  },
]

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(37,99,235,0.04) 0%, transparent 70%)' }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-6"
            style={{
              background: 'rgba(37,99,235,0.1)',
              border: '1px solid rgba(37,99,235,0.25)',
              color: '#38BDF8',
              fontFamily: "'Stack Sans Text', sans-serif",
            }}
          >
            Who We Are
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#F8FAFC' }}
          >
            Engineering the{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2563EB, #38BDF8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Future of Vision
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
          >
            Vessult Systems builds custom artificial intelligence, computer vision, and industrial IoT solutions for pioneering companies worldwide.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={i}
                className="relative p-8 rounded-2xl group overflow-hidden"
                style={{
                  background: 'rgba(15,23,42,0.6)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(20px)',
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{
                  borderColor: `${pillar.color}40`,
                  boxShadow: `0 0 40px ${pillar.color}15`,
                  y: -4,
                }}
              >
                {/* Glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-bl-full"
                  style={{ background: `radial-gradient(circle, ${pillar.color}20 0%, transparent 70%)` }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `${pillar.color}15`,
                    border: `1px solid ${pillar.color}30`,
                  }}
                >
                  <Icon size={22} style={{ color: pillar.color }} />
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#F8FAFC' }}
                >
                  {pillar.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif", lineHeight: '1.7' }}
                >
                  {pillar.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
