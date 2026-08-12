import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Lightbulb, Code2, Rocket, LifeBuoy } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery & Consultation',
    desc: 'Deep-dive sessions to understand your technical challenges, existing infrastructure, and business objectives. We define KPIs that matter.',
    color: '#2563EB',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'AI Strategy & Architecture',
    desc: 'Design the optimal technical approach: model selection, hardware platform, deployment topology, and integration architecture.',
    color: '#0EA5E9',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Development & Training',
    desc: 'Iterative development with continuous validation. Data collection, model training, hardware integration, and rigorous testing.',
    color: '#16A34A',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deployment & Integration',
    desc: 'Zero-downtime production deployment with full system integration, performance benchmarking, and user training.',
    color: '#7C3AED',
  },
  {
    number: '05',
    icon: LifeBuoy,
    title: 'Ongoing Support',
    desc: 'SLA-backed monitoring, model retraining as data evolves, performance optimization, and continuous improvement.',
    color: '#D97706',
  },
]

export function WorkflowSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative section-padding overflow-hidden" ref={ref} style={{ background: '#FFFFFF' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(37,99,235,0.03) 0%, transparent 70%)' }}
      />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
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
            How We Work
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
          >
            Our{' '}
            <span style={{
              background: 'linear-gradient(135deg, #1E40AF, #2563EB, #38BDF8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Process
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif" }}
          >
            A proven methodology that takes your vision from concept to production in the most efficient, risk-minimized path.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(180deg, transparent, #2563EB 10%, #0EA5E9 50%, #16A34A 90%, transparent)' }}
          />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={i}
                  className={`flex items-center gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      className="p-6 rounded-2xl group"
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid rgba(15,23,42,0.08)',
                        boxShadow: '0 2px 16px rgba(15,23,42,0.05)',
                      }}
                      whileHover={{
                        borderColor: `${step.color}30`,
                        boxShadow: `0 8px 30px ${step.color}12`,
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            background: `${step.color}10`,
                            border: `1px solid ${step.color}25`,
                          }}
                        >
                          <Icon size={18} style={{ color: step.color }} />
                        </div>
                        <div>
                          <div
                            className="text-xs tracking-widest mb-1 font-semibold"
                            style={{ color: step.color, fontFamily: "'Stack Sans Text', sans-serif" }}
                          >
                            STEP {step.number}
                          </div>
                          <h3
                            className="text-base font-bold mb-2"
                            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
                          >
                            {step.title}
                          </h3>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif" }}
                          >
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex flex-col items-center z-10">
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        background: step.color,
                        boxShadow: `0 0 20px ${step.color}50`,
                      }}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.12 + 0.3 }}
                    >
                      <span className="text-xs font-bold text-white" style={{ fontFamily: "'Stack Sans Text', sans-serif" }}>
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Empty spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
