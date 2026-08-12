import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered', description: 'Across diverse industries' },
  { value: 30, suffix: '+', label: 'Global Clients', description: 'Trusted partnerships' },
  { value: 20, suffix: '+', label: 'AI Models Deployed', description: 'In production environments' },
  { value: 15, suffix: '+', label: 'Edge Deployments', description: 'Worldwide deployments' },
  { value: 10, suffix: '+', label: 'Industries Served', description: 'Deep sector expertise' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { damping: 30, stiffness: 100 })

  useEffect(() => {
    if (inView) {
      motionValue.set(value)
    }
  }, [inView, value, motionValue])

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.floor(latest)}${suffix}`
      }
    })
  }, [spring, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-20 overflow-hidden" ref={ref} style={{ background: '#F8FAFC' }}>
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.25), rgba(56,189,248,0.25), transparent)' }}
      />

      <div className="container-custom">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl group hover-lift"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(37,99,235,0.1)',
                boxShadow: '0 2px 12px rgba(15,23,42,0.05)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                borderColor: 'rgba(37,99,235,0.3)',
                boxShadow: '0 8px 30px rgba(37,99,235,0.12)',
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.05) 0%, transparent 70%)' }}
              />

              <div
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{
                  fontFamily: "'Stack Sans Text', sans-serif",
                  background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #38BDF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              <div
                className="text-sm font-semibold mb-1"
                style={{ color: '#0F172A', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                {stat.label}
              </div>

              <div
                className="text-xs"
                style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                {stat.description}
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-px opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, #2563EB, #38BDF8)' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.25), rgba(56,189,248,0.25), transparent)' }}
      />
    </section>
  )
}
