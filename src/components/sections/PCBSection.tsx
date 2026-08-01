import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cpu, Zap, ShieldCheck, Star } from 'lucide-react'

const milestones = [
  {
    number: '01',
    title: 'Strategic Edge Architecture',
    description: 'We architect end-to-end edge AI strategies and custom PCB hardware built specifically for your enterprise scale.',
    icon: Zap,
    color: '#2563EB',
  },
  {
    number: '02',
    title: 'Sub-10ms Real-Time Inference',
    description: 'Ultra-low latency models deployed directly on NVIDIA Jetson, ARM, and custom embedded PCB silicon.',
    icon: Cpu,
    color: '#38BDF8',
  },
  {
    number: '03',
    title: 'Industrial-Grade Reliability',
    description: 'IP67-rated ruggedized enclosures engineered to operate continuously from -40°C to 85°C without cloud dependency.',
    icon: ShieldCheck,
    color: '#22C55E',
  },
]

export function PCBSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="edge" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background radial ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(37,99,235,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="container-custom relative z-10">

        {/* ─── Top Header: Centered Layout ─── */}
        <motion.div
          className="text-center flex flex-col items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span
            className="px-4 py-1 rounded-full text-xs tracking-wider uppercase font-medium"
            style={{
              background: 'rgba(37,99,235,0.1)',
              border: '1px solid rgba(37,99,235,0.25)',
              color: '#38BDF8',
              fontFamily: "'Stack Sans Text', sans-serif",
            }}
          >
            Our Vision
          </span>

          <h2
            className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#F8FAFC' }}
          >
            Shaping the Future of{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #2563EB 0%, #38BDF8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Edge Intelligence
            </span>
          </h2>

          <p
            className="text-sm md:text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
          >
            Empowering performance-driven enterprises with custom hardware, edge AI algorithms, and real-time vision strategy to spark momentum and drive growth.
          </p>
        </motion.div>

        {/* ─── Main Content: Split 2-Column Grid (Image Left + 3 Stacked Cards Right) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">

          {/* ── Left Column: Media / Hero Box ── */}
          <motion.div
            className="lg:col-span-6 relative rounded-3xl overflow-hidden min-h-[420px] lg:min-h-[500px] flex flex-col justify-between p-7 group"
            style={{
              background: 'radial-gradient(ellipse 90% 80% at 50% 40%, rgba(37,99,235,0.2) 0%, rgba(15,23,42,0.9) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
            }}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Tech grid overlay */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(56,189,248,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.2) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />

            {/* Top Pill Tag */}
            <div className="relative z-10 w-fit">
              <span
                className="px-3.5 py-1 rounded-full text-xs font-medium tracking-wide"
                style={{
                  background: 'rgba(5,8,22,0.75)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#F8FAFC',
                  fontFamily: "'Stack Sans Text', sans-serif",
                }}
              >
                Hardware Milestones
              </span>
            </div>

            {/* Central Graphic: Futuristic Edge Board Schema */}
            <div className="relative z-10 my-auto flex flex-col items-center text-center p-4">
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-105"
                style={{
                  background: 'rgba(5,8,22,0.85)',
                  border: '1px solid rgba(56,189,248,0.3)',
                  boxShadow: '0 0 40px rgba(37,99,235,0.4)',
                }}
              >
                <Cpu size={44} className="text-sky-400" />
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#F8FAFC' }}
              >
                Custom Edge Silicon &amp; Firmware
              </h3>
              <p
                className="text-xs text-gray-400 max-w-xs"
                style={{ fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                High-density multi-layer PCB design with embedded neural processing units.
              </p>
            </div>

            {/* Bottom Proof Pill Badge */}
            <div className="relative z-10 w-fit mt-auto">
              <div
                className="flex items-center gap-3 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(5,8,22,0.85)',
                  border: '1px solid rgba(56,189,248,0.2)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border border-slate-900 bg-blue-600 flex items-center justify-center text-[9px] font-bold text-white"
                      style={{ background: i === 0 ? '#2563EB' : i === 1 ? '#38BDF8' : '#22C55E' }}
                    >
                      AI
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: '#F8FAFC', fontFamily: "'Stack Sans Text', sans-serif" }}>
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  <span>50+ Edge Deployments</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: 3 Stacked Cards with Index Numbers (01, 02, 03) ── */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {milestones.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.number}
                  className="relative p-6 rounded-3xl flex items-center justify-between gap-5 group transition-all duration-300"
                  style={{
                    background: 'rgba(15,23,42,0.7)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                  }}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{
                    borderColor: `${item.color}40`,
                    boxShadow: `0 10px 35px ${item.color}15`,
                    x: 4,
                  }}
                >
                  <div className="flex items-start gap-4 flex-1">
                    {/* Icon Badge */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: 'rgba(5,8,22,0.8)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </div>

                    {/* Text Details */}
                    <div>
                      <h3
                        className="text-base font-bold mb-1.5 group-hover:text-white transition-colors"
                        style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#F8FAFC' }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-xs leading-relaxed max-w-md"
                        style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Large Clean Number Badge */}
                  <span
                    className="text-2xl font-bold font-mono tracking-tight flex-shrink-0"
                    style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif" }}
                  >
                    {item.number}
                  </span>
                </motion.div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
