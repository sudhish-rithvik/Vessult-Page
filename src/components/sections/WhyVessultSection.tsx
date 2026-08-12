import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { X, Check } from 'lucide-react'

const comparisons = [
  {
    aspect: 'AI Model Training',
    traditional: 'Generic off-the-shelf models',
    vessult: 'Custom models trained on your exact data',
  },
  {
    aspect: 'Deployment',
    traditional: 'Cloud-only, high latency',
    vessult: 'Edge-first, <10ms real-time inference',
  },
  {
    aspect: 'Integration',
    traditional: 'Months of complex API work',
    vessult: 'Plug-and-play with existing systems',
  },
  {
    aspect: 'Accuracy',
    traditional: '70-85% typical accuracy',
    vessult: '95-99%+ accuracy on real-world data',
  },
  {
    aspect: 'Maintenance',
    traditional: 'Manual monitoring, reactive fixes',
    vessult: 'Automated retraining, proactive SLA',
  },
  {
    aspect: 'Hardware',
    traditional: 'Expensive server infrastructure',
    vessult: 'Optimized edge hardware, lower TCO',
  },
]

export function WhyVessultSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative section-padding overflow-hidden" ref={ref} style={{ background: '#F8FAFC' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(37,99,235,0.04) 0%, transparent 60%)' }}
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
              background: 'rgba(37,99,235,0.07)',
              border: '1px solid rgba(37,99,235,0.2)',
              color: '#2563EB',
              fontFamily: "'Stack Sans Text', sans-serif",
            }}
          >
            The Difference
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
          >
            Why Choose{' '}
            <span style={{
              background: 'linear-gradient(135deg, #1E40AF, #2563EB, #38BDF8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Vessult?
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif" }}
          >
            See exactly how Vessult Systems compares to traditional approaches.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Header row */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div
              className="p-3 rounded-xl"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(15,23,42,0.08)',
              }}
            >
              <span className="text-sm font-semibold" style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}>
                Comparison
              </span>
            </div>
            <div
              className="p-4 rounded-xl text-center"
              style={{
                background: 'rgba(239,68,68,0.05)',
                border: '1px solid rgba(239,68,68,0.18)',
              }}
            >
              <span className="text-sm font-semibold" style={{ color: '#DC2626', fontFamily: "'Stack Sans Text', sans-serif" }}>
                Traditional Solutions
              </span>
            </div>
            <div
              className="p-4 rounded-xl text-center"
              style={{
                background: 'rgba(37,99,235,0.07)',
                border: '1px solid rgba(37,99,235,0.3)',
                boxShadow: '0 0 20px rgba(37,99,235,0.08)',
              }}
            >
              <span className="text-sm font-semibold" style={{ color: '#2563EB', fontFamily: "'Stack Sans Text', sans-serif" }}>
                Vessult Systems
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-2">
            {comparisons.map((row, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              >
                {/* Aspect */}
                <div
                  className="flex items-center p-3 rounded-xl"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(15,23,42,0.07)',
                  }}
                >
                  <span className="text-sm font-semibold" style={{ color: '#334155', fontFamily: "'Stack Sans Text', sans-serif" }}>
                    {row.aspect}
                  </span>
                </div>

                {/* Traditional */}
                <div
                  className="flex items-center gap-2 p-3 rounded-xl"
                  style={{
                    background: 'rgba(239,68,68,0.04)',
                    border: '1px solid rgba(239,68,68,0.1)',
                  }}
                >
                  <X size={14} className="flex-shrink-0" style={{ color: '#DC2626' }} />
                  <span className="text-xs" style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}>
                    {row.traditional}
                  </span>
                </div>

                {/* Vessult */}
                <div
                  className="flex items-center gap-2 p-3 rounded-xl"
                  style={{
                    background: 'rgba(37,99,235,0.05)',
                    border: '1px solid rgba(37,99,235,0.15)',
                  }}
                >
                  <Check size={14} className="flex-shrink-0" style={{ color: '#2563EB' }} />
                  <span className="text-xs font-medium" style={{ color: '#1E40AF', fontFamily: "'Stack Sans Text', sans-serif" }}>
                    {row.vessult}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
