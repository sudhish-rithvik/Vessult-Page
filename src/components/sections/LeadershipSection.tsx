import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const leaders = [
  {
    name: 'Dr. Adrian Reyes',
    role: 'Chief Executive Officer',
    bio: 'Former VP Engineering at NVIDIA. PhD in Computer Vision from MIT. 20+ years leading AI product teams at scale.',
    initials: 'AR',
    color: '#2563EB',
    dept: 'Executive',
  },
  {
    name: 'Priya Nair',
    role: 'Chief Technology Officer',
    bio: 'Ex-Google Brain researcher. Co-authored 40+ papers on edge AI. Holds 15 patents in real-time inference systems.',
    initials: 'PN',
    color: '#0EA5E9',
    dept: 'Technology',
  },
  {
    name: 'Marcus Webb',
    role: 'VP of Engineering',
    bio: 'Built distributed systems at SpaceX and Tesla. Expert in embedded hardware and robotics integration at enterprise scale.',
    initials: 'MW',
    color: '#16A34A',
    dept: 'Engineering',
  },
  {
    name: 'Dr. Yuki Tanaka',
    role: 'Chief Science Officer',
    bio: 'Former lead researcher at DeepMind Tokyo. Specializes in industrial computer vision and autonomous systems.',
    initials: 'YT',
    color: '#7C3AED',
    dept: 'Research',
  },
  {
    name: 'Sofia Andersen',
    role: 'Chief Revenue Officer',
    bio: 'Built $400M+ enterprise AI revenue pipelines at Siemens and ABB. Leads global sales across 38 countries.',
    initials: 'SA',
    color: '#DB2777',
    dept: 'Revenue',
  },
  {
    name: 'James Okafor',
    role: 'VP of Customer Success',
    bio: '18 years in industrial automation. Architected AI deployment programs across 50+ Fortune 500 accounts globally.',
    initials: 'JO',
    color: '#D97706',
    dept: 'Operations',
  },
]

const awards = [
  { year: '2024', title: 'Gartner Cool Vendor — AI & Edge Computing' },
  { year: '2024', title: 'Forbes AI 50 — Most Promising AI Companies' },
  { year: '2023', title: 'Fast Company Innovation by Design Award' },
  { year: '2023', title: 'TIME100 Most Influential Companies' },
  { year: '2022', title: 'CES Innovation Award — Industrial AI' },
  { year: '2022', title: 'Deloitte Technology Fast 500' },
]

export function LeadershipSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative section-padding overflow-hidden" ref={ref} style={{ background: '#FFFFFF' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 20% 60%, rgba(37,99,235,0.03) 0%, transparent 60%)' }}
      />

      <div className="container-custom relative z-10">

        {/* Leadership header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
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
            Leadership
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold mb-5"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
          >
            World-Class{' '}
            <span style={{
              background: 'linear-gradient(135deg, #1E40AF, #2563EB, #38BDF8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Leadership Team
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif" }}>
            Our leadership brings decades of experience from NVIDIA, Google, DeepMind, Tesla, and Siemens —
            united by a shared vision for intelligent automation.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              className="relative p-7 rounded-3xl group overflow-hidden"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(15,23,42,0.08)',
                boxShadow: '0 2px 16px rgba(15,23,42,0.05)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.09 }}
              whileHover={{
                borderColor: `${leader.color}30`,
                boxShadow: `0 12px 40px ${leader.color}10`,
                y: -5,
              }}
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${leader.color}08 0%, transparent 70%)` }}
              />

              <div className="flex items-start gap-4 mb-5">
                {/* Avatar with initials */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-lg font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${leader.color} 0%, ${leader.color}CC 100%)`,
                    boxShadow: `0 4px 16px ${leader.color}30`,
                    fontFamily: "'Stack Sans Text', sans-serif",
                  }}
                >
                  {leader.initials}
                </div>

                <div className="flex-1 min-w-0">
                  <div
                    className="font-bold text-base leading-snug mb-0.5"
                    style={{ color: '#0F172A', fontFamily: "'Stack Sans Text', sans-serif" }}
                  >
                    {leader.name}
                  </div>
                  <div
                    className="text-xs font-medium"
                    style={{ color: leader.color, fontFamily: "'Stack Sans Text', sans-serif" }}
                  >
                    {leader.role}
                  </div>
                </div>
              </div>

              <p
                className="text-xs leading-relaxed mb-4"
                style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif", lineHeight: '1.7' }}
              >
                {leader.bio}
              </p>

              {/* Dept tag */}
              <span
                className="text-[10px] px-2.5 py-0.5 rounded-full font-medium tracking-wide"
                style={{
                  background: `${leader.color}10`,
                  border: `1px solid ${leader.color}22`,
                  color: leader.color,
                  fontFamily: "'Stack Sans Text', sans-serif",
                }}
              >
                {leader.dept}
              </span>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${leader.color}50, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px mb-20"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.2), rgba(56,189,248,0.2), transparent)' }}
        />

        {/* Awards section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-5"
              style={{
                background: 'rgba(217,119,6,0.07)',
                border: '1px solid rgba(217,119,6,0.2)',
                color: '#D97706',
                fontFamily: "'Stack Sans Text', sans-serif",
              }}
            >
              Recognition
            </div>
            <h3
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
            >
              Awards &{' '}
              <span style={{
                background: 'linear-gradient(135deg, #D97706, #EA580C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Recognition
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 p-5 rounded-2xl group"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(217,119,6,0.12)',
                  boxShadow: '0 2px 10px rgba(15,23,42,0.04)',
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
                whileHover={{
                  borderColor: 'rgba(217,119,6,0.3)',
                  boxShadow: '0 4px 20px rgba(217,119,6,0.08)',
                }}
              >
                {/* Year badge */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold"
                  style={{
                    background: 'rgba(217,119,6,0.08)',
                    border: '1px solid rgba(217,119,6,0.2)',
                    color: '#D97706',
                    fontFamily: "'Stack Sans Text', sans-serif",
                  }}
                >
                  {award.year}
                </div>
                <span
                  className="text-sm font-medium leading-snug"
                  style={{ color: '#334155', fontFamily: "'Stack Sans Text', sans-serif" }}
                >
                  {award.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
