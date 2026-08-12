import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Globe, Users, Award, Building2 } from 'lucide-react'

const keyFacts = [
  { icon: Users,    value: '500+',  label: 'Engineers & Scientists' },
  { icon: Globe,    value: '38',    label: 'Countries Served'        },
  { icon: Building2,value: '6',     label: 'Global Offices'          },
  { icon: Award,    value: '120+',  label: 'Industry Awards'         },
]

export function CorporateHQSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const navigate = useNavigate()

  return (
    <section className="relative py-28 overflow-hidden" ref={ref} style={{ background: '#FFFFFF' }}>
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.04) 0%, transparent 70%)' }}
      />

      <div className="container-custom relative z-10">

        {/* Section label */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase"
            style={{
              background: 'rgba(37,99,235,0.07)',
              border: '1px solid rgba(37,99,235,0.2)',
              color: '#2563EB',
              fontFamily: "'Stack Sans Text', sans-serif",
            }}
          >
            Who We Are
          </div>
        </motion.div>

        {/* Main split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Left — Building image */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            style={{ boxShadow: '0 20px 60px rgba(15,23,42,0.12)' }}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/hq-building.png"
              alt="Vessult Global Headquarters"
              className="w-full h-[480px] object-cover"
            />

            {/* Overlay gradient — lighter for light theme */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 60%)' }}
            />

            {/* Caption badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  border: '1px solid rgba(37,99,235,0.2)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div className="w-2 h-2 rounded-full bg-green-500" style={{ boxShadow: '0 0 8px #22C55E' }} />
                <span className="text-sm font-medium" style={{ color: '#0F172A', fontFamily: "'Stack Sans Text', sans-serif" }}>
                  Global HQ — San Francisco, CA
                </span>
              </div>
            </div>

            {/* Top pill */}
            <div className="absolute top-5 right-5">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: 'rgba(37,99,235,0.9)',
                  color: '#FFFFFF',
                  fontFamily: "'Stack Sans Text', sans-serif",
                  backdropFilter: 'blur(8px)',
                }}
              >
                Est. 2018
              </span>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            className="flex flex-col gap-7"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight mb-5"
                style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
              >
                Engineering the{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #2563EB, #38BDF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Future of Vision
                </span>
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                Founded in 2018 in San Francisco, Vessult Systems has grown into one of the world's most trusted
                AI and computer vision engineering firms — with over <strong style={{ color: '#0F172A' }}>500 engineers, scientists,
                and domain experts</strong> across six continents, serving Fortune 500 clients and pioneering
                enterprises in over 38 countries.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                Our mission is to democratize intelligent vision technology — delivering world-class AI,
                edge computing, and industrial automation solutions that transform how industries operate
                and compete at scale.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px" style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.3), transparent)' }} />

            {/* Key fact pills */}
            <div className="grid grid-cols-2 gap-4">
              {keyFacts.map((fact, i) => {
                const Icon = fact.icon
                return (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-2xl"
                    style={{
                      background: '#F8FAFC',
                      border: '1px solid rgba(37,99,235,0.1)',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)' }}
                    >
                      <Icon size={17} style={{ color: '#2563EB' }} />
                    </div>
                    <div>
                      <div className="text-lg font-bold" style={{ color: '#0F172A', fontFamily: "'Stack Sans Text', sans-serif" }}>
                        {fact.value}
                      </div>
                      <div className="text-xs" style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}>
                        {fact.label}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <motion.button
              onClick={() => navigate('/solutions')}
              className="self-start flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
              style={{
                background: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
                color: '#FFFFFF',
                fontFamily: "'Stack Sans Text', sans-serif",
                boxShadow: '0 4px 20px rgba(37,99,235,0.3)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 6px 30px rgba(37,99,235,0.45)' }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Explore Our Solutions
              <ArrowRight size={15} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
