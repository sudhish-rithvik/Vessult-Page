import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Factory, Heart, ShoppingBag, Car, Leaf, Building2,
  Package, Zap
} from 'lucide-react'

const industries = [
  { icon: Factory, name: 'Manufacturing', desc: 'Quality control, predictive maintenance, automated inspection', color: '#2563EB' },
  { icon: Heart, name: 'Healthcare', desc: 'Medical imaging AI, diagnostic assistance, patient monitoring', color: '#DB2777' },
  { icon: ShoppingBag, name: 'Retail', desc: 'Customer analytics, inventory tracking, loss prevention', color: '#D97706' },
  { icon: Car, name: 'Automotive', desc: 'ADAS systems, assembly inspection, EV optimization', color: '#0EA5E9' },
  { icon: Leaf, name: 'Agriculture', desc: 'Crop disease detection, yield prediction, drone analytics', color: '#16A34A' },
  { icon: Building2, name: 'Smart Cities', desc: 'Traffic optimization, crowd analysis, infrastructure monitoring', color: '#7C3AED' },
  { icon: Package, name: 'Logistics', desc: 'Warehouse automation, package sorting, fleet optimization', color: '#0891B2' },
  { icon: Zap, name: 'Energy', desc: 'Grid optimization, solar panel inspection, fault detection', color: '#EA580C' },
]

export function IndustriesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="industries" className="relative section-padding overflow-hidden" ref={ref} style={{ background: '#F8FAFC' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 20% 80%, rgba(37,99,235,0.04) 0%, transparent 60%)' }}
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
            Sector Expertise
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
          >
            Industries We{' '}
            <span style={{
              background: 'linear-gradient(135deg, #16A34A, #2563EB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Transform
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif" }}
          >
            Deep domain expertise across sectors where intelligent vision creates the most transformative impact.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon
            return (
              <motion.div
                key={i}
                className="relative p-6 rounded-2xl group cursor-pointer overflow-hidden"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(15,23,42,0.08)',
                  boxShadow: '0 2px 12px rgba(15,23,42,0.04)',
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{
                  borderColor: `${ind.color}30`,
                  boxShadow: `0 8px 30px ${ind.color}12`,
                  y: -4,
                }}
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${ind.color}08 0%, transparent 70%)` }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${ind.color}10`,
                    border: `1px solid ${ind.color}22`,
                  }}
                >
                  <Icon size={22} style={{ color: ind.color }} />
                </div>

                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
                >
                  {ind.name}
                </h3>

                <p
                  className="text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden"
                  style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif" }}
                >
                  {ind.desc}
                </p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${ind.color}50, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
