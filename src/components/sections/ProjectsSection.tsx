import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Cpu, Network, ArrowRight, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const featuredProjects = [
  {
    title: 'Smart Welding QC System',
    category: 'Vision Inspection',
    description: 'Inline automated defect detection with sub-millimeter precision operating under 5ms latency.',
    color: '#2563EB',
    icon: ShieldCheck,
    graphicType: 'circuit',
  },
  {
    title: 'Predictive Maintenance AI',
    category: 'Industrial IoT',
    description: 'Vibration & thermal edge analytics predicting equipment failure 72+ hours in advance with 94% accuracy.',
    color: '#0EA5E9',
    icon: Cpu,
    graphicType: 'radar',
  },
  {
    title: 'AMR Vision & Navigation',
    category: 'Robotics & Edge',
    description: 'Autonomous mobile robot SLAM navigation with computer vision guidance and real-time obstacle avoidance.',
    color: '#16A34A',
    icon: Network,
    graphicType: 'network',
  },
]

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const navigate = useNavigate()
  const scrollToContact = () => navigate('/contact')

  return (
    <section id="projects" className="relative py-24 overflow-hidden" ref={ref} style={{ background: '#F8FAFC' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="container-custom relative z-10">

        {/* Header */}
        <motion.div
          className="text-center flex flex-col items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span
            className="px-4 py-1 rounded-full text-xs tracking-wider uppercase font-medium"
            style={{
              background: 'rgba(37,99,235,0.07)',
              border: '1px solid rgba(37,99,235,0.2)',
              color: '#2563EB',
              fontFamily: "'Stack Sans Text', sans-serif",
            }}
          >
            Explore
          </span>

          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
          >
            Our Featured{' '}
            <span style={{
              background: 'linear-gradient(90deg, #1E40AF 0%, #2563EB 50%, #38BDF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Projects
            </span>
          </h2>

          <p
            className="text-sm md:text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif" }}
          >
            Vessult delivers high-impact computer vision, edge AI, and industrial automation deployments engineered for real-world reliability.
          </p>
        </motion.div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                className="relative rounded-3xl overflow-hidden flex flex-col group transition-all duration-300"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(15,23,42,0.08)',
                  boxShadow: '0 4px 20px rgba(15,23,42,0.06)',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{
                  borderColor: `${project.color}30`,
                  boxShadow: `0 12px 40px ${project.color}14`,
                  y: -6,
                }}
              >
                {/* Top Visual Graphic Box */}
                <div
                  className="relative w-full h-56 flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}08 0%, #EFF6FF 100%)`,
                  }}
                >
                  {/* Grid Pattern */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `linear-gradient(${project.color}15 1px, transparent 1px), linear-gradient(90deg, ${project.color}15 1px, transparent 1px)`,
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Circuit graphic */}
                  {project.graphicType === 'circuit' && (
                    <div className="relative flex items-center justify-center">
                      <svg className="absolute w-44 h-44 pointer-events-none" viewBox="0 0 100 100">
                        <path
                          d="M 10 50 L 30 50 M 90 50 L 70 50 M 50 10 L 50 30 M 50 90 L 50 70"
                          stroke={project.color}
                          strokeWidth="1.5"
                          strokeDasharray="3 3"
                          opacity="0.5"
                        />
                        <circle cx="10" cy="50" r="2.5" fill={project.color} />
                        <circle cx="90" cy="50" r="2.5" fill={project.color} />
                        <circle cx="50" cy="10" r="2.5" fill={project.color} />
                        <circle cx="50" cy="90" r="2.5" fill={project.color} />
                      </svg>
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: '#FFFFFF',
                          border: `2px solid ${project.color}40`,
                          boxShadow: `0 4px 20px ${project.color}25`,
                        }}
                      >
                        <Icon size={26} style={{ color: project.color }} />
                      </div>
                    </div>
                  )}

                  {/* Radar graphic */}
                  {project.graphicType === 'radar' && (
                    <div className="relative flex items-center justify-center">
                      <motion.div
                        className="absolute w-44 h-44 rounded-full"
                        style={{ border: `1px solid ${project.color}25` }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                      />
                      <motion.div
                        className="absolute w-32 h-32 rounded-full"
                        style={{ border: `1px dashed ${project.color}35` }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      />
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: '#FFFFFF',
                          border: `2px solid ${project.color}40`,
                          boxShadow: `0 4px 20px ${project.color}25`,
                        }}
                      >
                        <Icon size={26} style={{ color: project.color }} />
                      </div>
                    </div>
                  )}

                  {/* Network graphic */}
                  {project.graphicType === 'network' && (
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-36 h-36 border rounded-full border-dashed opacity-30" style={{ borderColor: project.color }} />
                      <div
                        className="absolute -top-1 left-4 w-3.5 h-3.5 rounded-full"
                        style={{ background: project.color, boxShadow: `0 0 8px ${project.color}60` }}
                      />
                      <div
                        className="absolute bottom-2 right-4 w-3 h-3 rounded-full"
                        style={{ background: '#0EA5E9', boxShadow: '0 0 8px #0EA5E960' }}
                      />
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: '#FFFFFF',
                          border: `2px solid ${project.color}40`,
                          boxShadow: `0 4px 20px ${project.color}25`,
                        }}
                      >
                        <Icon size={26} style={{ color: project.color }} />
                      </div>
                    </div>
                  )}

                  {/* Category Pill Tag */}
                  <span
                    className="absolute top-4 right-4 text-[11px] font-medium px-3 py-1 rounded-full z-10"
                    style={{
                      background: 'rgba(255,255,255,0.9)',
                      border: `1px solid ${project.color}25`,
                      color: project.color,
                      fontFamily: "'Stack Sans Text', sans-serif",
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="p-7 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif" }}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold pt-2" style={{ color: project.color }}>
                    <span>Case Study</span>
                    <Sparkles size={12} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.button
            onClick={scrollToContact}
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold transition-all"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
              color: '#FFFFFF',
              fontFamily: "'Stack Sans Text', sans-serif",
              boxShadow: '0 4px 20px rgba(37,99,235,0.3)',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 6px 30px rgba(37,99,235,0.45)' }}
            whileTap={{ scale: 0.97 }}
          >
            Discuss Your Project
            <ArrowRight size={15} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
