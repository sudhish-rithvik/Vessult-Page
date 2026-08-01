import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Marcus Chen',
    role: 'CTO, AutoVision Industries',
    text: 'Vessult deployed a vision inspection system that exceeded every KPI we set. 99%+ defect detection, real-time, inline. Our QC department hasn\'t looked back.',
    stars: 5,
  },
  {
    name: 'Dr. Sarah Williams',
    role: 'VP Engineering, MediScan Corp',
    text: 'Their AI team understands both the technology and the medical domain deeply. The imaging AI they built for us saved months of development and passed FDA review.',
    stars: 5,
  },
  {
    name: 'James Okafor',
    role: 'Operations Director, LogiCore',
    text: 'The edge AI solution they built for our warehouse robots has been running 24/7 for 18 months without a single failure. That kind of reliability is rare.',
    stars: 5,
  },
  {
    name: 'Anna Kowalski',
    role: 'Head of Innovation, AgriTech Pro',
    text: 'From concept to field deployment in 3 months. Their drone vision AI for crop disease detection is now our core product differentiator.',
    stars: 5,
  },
  {
    name: 'Robert Tanaka',
    role: 'Plant Manager, Precision Metals',
    text: 'We tried three other companies before Vessult. The difference in expertise and delivery is night and day. Our defect rate dropped 40% in the first quarter.',
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Director of Digital, SmartRetail Co.',
    text: 'The customer analytics dashboard they built transformed how we think about store design. Real insights, not vanity metrics. Highly recommended.',
    stars: 5,
  },
]

function TestimonialCard({ t, delay }: { t: typeof testimonials[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="relative flex-shrink-0 w-80 p-6 rounded-2xl"
      style={{
        background: 'rgba(15,23,42,0.7)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(20px)',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        borderColor: 'rgba(37,99,235,0.3)',
        boxShadow: '0 0 30px rgba(37,99,235,0.1)',
        y: -4,
      }}
    >
      <Quote
        size={24}
        className="mb-4"
        style={{ color: '#2563EB', opacity: 0.6 }}
      />

      <p
        className="text-sm leading-relaxed mb-6"
        style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif", lineHeight: '1.7' }}
      >
        "{t.text}"
      </p>

      <div className="flex items-center justify-between">
        <div>
          <div
            className="font-semibold text-sm"
            style={{ color: '#F8FAFC', fontFamily: "'Stack Sans Text', sans-serif" }}
          >
            {t.name}
          </div>
          <div
            className="text-xs mt-0.5"
            style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
          >
            {t.role}
          </div>
        </div>
        <div className="flex gap-0.5">
          {Array(t.stars).fill(0).map((_, i) => (
            <Star key={i} size={12} fill="#F59E0B" style={{ color: '#F59E0B' }} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative section-padding overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 30% 50%, rgba(56,189,248,0.04) 0%, transparent 60%)' }}
      />

      <div className="container-custom">
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
            Client Voices
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#F8FAFC' }}
          >
            Trusted by{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2563EB, #38BDF8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Industry Leaders
            </span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
