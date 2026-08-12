import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, GitBranch, Activity, Shield } from 'lucide-react'

const features = [
  {
    badge: 'Real-time Processing',
    title: 'Vision at the Speed of Reality',
    description: 'Our edge-optimized pipeline processes 60+ frames per second with sub-millisecond decision making. No cloud round-trips. No compromises.',
    icon: Activity,
    color: '#2563EB',
    points: ['60+ FPS Processing', '<10ms End-to-end Latency', 'TensorRT Acceleration', 'Multi-stream Parallel Processing'],
    bgGlow: '#2563EB',
    side: 'right',
  },
  {
    badge: 'Adaptive AI',
    title: 'Models That Learn Your World',
    description: 'Unlike generic AI, our systems are trained on your environment, your defects, your products. Continuous active learning keeps accuracy above 99% even as conditions change.',
    icon: GitBranch,
    color: '#16A34A',
    points: ['Custom Dataset Collection', 'Automated Retraining', 'Active Learning Loops', 'Domain-specific Accuracy'],
    bgGlow: '#16A34A',
    side: 'left',
  },
  {
    badge: 'End-to-end Stack',
    title: 'From Sensor to Dashboard',
    description: 'A complete technology stack: hardware selection, firmware development, AI model training, cloud infrastructure, and the analytics dashboard your team actually uses.',
    icon: Layers,
    color: '#0EA5E9',
    points: ['Full Hardware Stack', 'Cloud + Edge Hybrid', 'Real-time Dashboards', 'API-first Architecture'],
    bgGlow: '#0EA5E9',
    side: 'right',
  },
  {
    badge: 'Enterprise Grade',
    title: 'Production-Ready from Day One',
    description: 'ISO-compliant development practices, 99.9% uptime SLAs, and 24/7 monitoring. Systems built to run in industrial environments — not just demos.',
    icon: Shield,
    color: '#7C3AED',
    points: ['ISO-compliant Development', '99.9% Uptime SLA', '24/7 Monitoring', 'Military-grade Encryption'],
    bgGlow: '#7C3AED',
    side: 'left',
  },
]

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative section-padding overflow-hidden" ref={ref} style={{ background: '#FFFFFF' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-24"
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
            Why It Works
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
          >
            Core{' '}
            <span style={{
              background: 'linear-gradient(135deg, #1E40AF, #2563EB, #38BDF8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Capabilities
            </span>
          </h2>
        </motion.div>

        {/* Feature rows */}
        <div className="flex flex-col gap-24">
          {features.map((feat, i) => {
            const Icon = feat.icon
            const isRight = feat.side === 'right'

            return (
              <motion.div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                {/* Content */}
                <div className={`flex flex-col gap-6 ${isRight ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-widest uppercase mb-4"
                      style={{
                        background: `${feat.color}10`,
                        border: `1px solid ${feat.color}25`,
                        color: feat.color,
                        fontFamily: "'Stack Sans Text', sans-serif",
                      }}
                    >
                      {feat.badge}
                    </div>
                    <h3
                      className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                      style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
                    >
                      {feat.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif", lineHeight: '1.7' }}
                    >
                      {feat.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {feat.points.map((point, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 p-3 rounded-xl"
                        style={{
                          background: '#F8FAFC',
                          border: '1px solid rgba(15,23,42,0.07)',
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: feat.color }}
                        />
                        <span
                          className="text-xs font-medium"
                          style={{ color: '#334155', fontFamily: "'Stack Sans Text', sans-serif" }}
                        >
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual card */}
                <div className={`${isRight ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div
                    className="relative h-72 lg:h-96 rounded-2xl overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${feat.color}08 0%, #EFF6FF 100%)`,
                      border: `1px solid ${feat.color}20`,
                      boxShadow: `0 8px 40px ${feat.color}10`,
                    }}
                  >
                    {/* Animated grid */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `linear-gradient(${feat.color}10 1px, transparent 1px), linear-gradient(90deg, ${feat.color}10 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                      }}
                    />

                    {/* Center icon display */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="relative"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        {[80, 120, 160].map((size, ri) => (
                          <div
                            key={ri}
                            className="absolute rounded-full"
                            style={{
                              width: size,
                              height: size,
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              border: `1px solid ${feat.color}${ri === 0 ? '40' : ri === 1 ? '25' : '12'}`,
                              animation: `spin-slow ${(ri + 1) * 8}s linear infinite`,
                            }}
                          />
                        ))}
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
                          style={{
                            background: `${feat.color}12`,
                            border: `1px solid ${feat.color}35`,
                            boxShadow: `0 0 24px ${feat.color}20`,
                          }}
                        >
                          <Icon size={28} style={{ color: feat.color }} />
                        </div>
                      </motion.div>
                    </div>

                    {/* Corner tags */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {['AI', 'LIVE', 'EDGE'].map((tag, ti) => (
                        <div
                          key={ti}
                          className="px-2 py-0.5 rounded text-xs font-medium"
                          style={{
                            background: `${feat.color}10`,
                            border: `1px solid ${feat.color}25`,
                            color: feat.color,
                            fontFamily: "'Stack Sans Text', sans-serif",
                          }}
                        >
                          {tag}
                        </div>
                      ))}
                    </div>

                    {/* Bottom gradient */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-20"
                      style={{ background: `linear-gradient(to top, ${feat.color}10, transparent)` }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
