import { motion } from 'framer-motion'
import { Cpu, Eye, Zap, Shield } from 'lucide-react'

const stats = [
  { label: 'Latency Guarantee', value: '<10ms', sub: 'Sub-millisecond inference' },
  { label: 'Defect Detection', value: '99.4%', sub: 'High-precision accuracy' },
  { label: 'Edge Deployments', value: '500+', sub: 'Global enterprise nodes' },
  { label: 'System SLA Uptime', value: '99.99%', sub: 'Mission-critical readiness' },
]

export function SolutionsHeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: '#FFFFFF' }}>
      {/* Background Mesh Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 70%)' }}
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
            End-To-End Enterprise Solutions
          </span>

          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
          >
            Turn Raw Vision into{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #38BDF8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Actionable Intelligence
            </span>
          </h1>

          <p
            className="text-base md:text-lg max-w-2xl text-slate-600 leading-relaxed mt-2"
            style={{ fontFamily: "'Stack Sans Text', sans-serif" }}
          >
            From custom embedded silicon designs to real-time industrial computer vision models, Vessult engineers complete hardware-software stacks engineered for extreme conditions.
          </p>
        </motion.div>

        {/* Interactive Highlight Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-5xl mx-auto"
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl text-left group transition-all duration-300 hover:-translate-y-1"
              style={{
                background: '#F8FAFC',
                border: '1px solid rgba(15,23,42,0.08)',
                boxShadow: '0 4px 16px rgba(15,23,42,0.03)',
              }}
            >
              <div
                className="text-3xl font-extrabold mb-1"
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #0EA5E9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: "'Stack Sans Text', sans-serif",
                }}
              >
                {item.value}
              </div>
              <div
                className="text-sm font-bold mb-0.5"
                style={{ color: '#0F172A', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                {item.label}
              </div>
              <div
                className="text-xs text-slate-500"
                style={{ fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                {item.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
