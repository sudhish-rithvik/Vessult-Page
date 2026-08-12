import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin } from 'lucide-react'

const offices = [
  {
    city: 'San Francisco',
    country: 'USA',
    role: 'Global Headquarters',
    address: '1 Infinite Loop, Suite 900, San Francisco, CA 94025',
    color: '#2563EB',
    isHQ: true,
  },
  {
    city: 'London',
    country: 'United Kingdom',
    role: 'EMEA Regional Hub',
    address: '22 Bishopsgate, London EC2N 4BQ',
    color: '#38BDF8',
    isHQ: false,
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    role: 'APAC Regional Hub',
    address: '1 Raffles Quay, #32-00, Singapore 048583',
    color: '#22C55E',
    isHQ: false,
  },
  {
    city: 'Bangalore',
    country: 'India',
    role: 'Engineering Centre',
    address: 'Prestige Tech Park, Block 12, Whitefield, Bengaluru 560066',
    color: '#7C3AED',
    isHQ: false,
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    role: 'APAC Sales Office',
    address: 'Marunouchi Park Building, 2-6-1 Marunouchi, Chiyoda-ku, Tokyo',
    color: '#F59E0B',
    isHQ: false,
  },
  {
    city: 'Dubai',
    country: 'UAE',
    role: 'Middle East Office',
    address: 'DIFC Gate Building, Level 15, Dubai International Financial Centre',
    color: '#EC4899',
    isHQ: false,
  },
]

const globalStats = [
  { value: '6',    label: 'Global Offices'   },
  { value: '38+',  label: 'Countries Served' },
  { value: '500+', label: 'Team Members'     },
  { value: '24/7', label: 'Support Coverage' },
]

export function GlobalPresenceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative section-padding overflow-hidden" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 80% 50%, rgba(56,189,248,0.04) 0%, transparent 65%)' }}
      />

      <div className="container-custom relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-6"
            style={{
              background: 'rgba(56,189,248,0.1)',
              border: '1px solid rgba(56,189,248,0.25)',
              color: '#38BDF8',
              fontFamily: "'Stack Sans Text', sans-serif",
            }}
          >
            Global Footprint
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold mb-5"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#F8FAFC' }}
          >
            Offices on{' '}
            <span style={{
              background: 'linear-gradient(135deg, #38BDF8, #22C55E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Every Continent
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}>
            With six strategically placed offices worldwide and round-the-clock engineering coverage,
            Vessult delivers enterprise-grade support wherever you operate.
          </p>
        </motion.div>

        {/* Global stats bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {globalStats.map((s, i) => (
            <div
              key={i}
              className="text-center py-5 px-3 rounded-2xl"
              style={{
                background: 'rgba(15,23,42,0.5)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div
                className="text-3xl font-bold mb-1"
                style={{
                  fontFamily: "'Stack Sans Text', sans-serif",
                  background: 'linear-gradient(135deg, #F8FAFC, #38BDF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.value}
              </div>
              <div className="text-xs" style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Offices grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {offices.map((office, i) => (
            <motion.div
              key={i}
              className="relative p-6 rounded-3xl group overflow-hidden"
              style={{
                background: office.isHQ
                  ? 'rgba(37,99,235,0.08)'
                  : 'rgba(15,23,42,0.55)',
                border: office.isHQ
                  ? '1px solid rgba(37,99,235,0.35)'
                  : '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(20px)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.08 }}
              whileHover={{
                borderColor: `${office.color}40`,
                boxShadow: `0 0 30px ${office.color}12`,
                y: -4,
              }}
            >
              {/* HQ badge */}
              {office.isHQ && (
                <span
                  className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase"
                  style={{
                    background: 'rgba(37,99,235,0.2)',
                    border: '1px solid rgba(37,99,235,0.5)',
                    color: '#60A5FA',
                    fontFamily: "'Stack Sans Text', sans-serif",
                  }}
                >
                  HQ
                </span>
              )}

              {/* Color dot */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${office.color}15`, border: `1px solid ${office.color}30` }}
              >
                <MapPin size={18} style={{ color: office.color }} />
              </div>

              <div
                className="text-lg font-bold mb-0.5"
                style={{ color: '#F8FAFC', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                {office.city}
              </div>
              <div
                className="text-xs mb-3 tracking-wide"
                style={{ color: office.color, fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                {office.country} · {office.role}
              </div>
              <div
                className="text-xs leading-relaxed"
                style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                {office.address}
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${office.color}60, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
