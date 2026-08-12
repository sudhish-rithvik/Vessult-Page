import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Eye, Cpu, Wifi, ArrowRight } from 'lucide-react'
import { Logo } from '../ui/Logo'
import { useNavigate } from 'react-router-dom'

const solutions = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Production-grade AI models trained on domain data for predictive analytics, automation, and decision intelligence.',
    position: 'top-left',
    color: '#2563EB',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Real-time visual inspection, sub-millimeter defect detection, and automated video analytics at high frame rates.',
    position: 'bottom-left',
    color: '#0EA5E9',
  },
  {
    icon: Cpu,
    title: 'Edge AI & Hardware',
    description: 'Low-latency neural network inference optimized for Jetson, ARM, and custom embedded PCB hardware.',
    position: 'top-right',
    color: '#16A34A',
  },
  {
    icon: Wifi,
    title: 'Industrial IoT & Robotics',
    description: 'End-to-end telemetry, ROS2 robotic navigation, and cloud-to-edge sensor networks with predictive maintenance.',
    position: 'bottom-right',
    color: '#7C3AED',
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const navigate = useNavigate()
  const scrollToContact = () => navigate('/contact')

  return (
    <section
      id="solutions"
      className="relative py-24 overflow-hidden"
      ref={ref}
      style={{ background: '#FFFFFF', paddingTop: '110px' }}
    >
      {/* Background ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(37,99,235,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="container-custom relative z-10">

        {/* ─── Top Header: Split Layout ─── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">

          {/* Left Title Group */}
          <motion.div
            className="flex flex-col gap-3 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span
              className="w-fit px-3.5 py-1 rounded-full text-xs tracking-wider uppercase font-medium"
              style={{
                background: 'rgba(37,99,235,0.07)',
                border: '1px solid rgba(37,99,235,0.2)',
                color: '#2563EB',
                fontFamily: "'Stack Sans Text', sans-serif",
              }}
            >
              Solutions
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
            >
              Our Engineering <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #1E40AF 0%, #2563EB 50%, #38BDF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Solutions
              </span>
            </h2>
          </motion.div>

          {/* Right Action Group */}
          <motion.div
            className="flex flex-col items-start lg:items-end gap-5 max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p
              className="text-sm md:text-base leading-relaxed lg:text-right"
              style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
            >
              We deliver tailored AI, Computer Vision, and Edge hardware solutions designed to scale operations and drive measurable results.
            </p>
            <motion.button
              onClick={scrollToContact}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                color: '#FFFFFF',
                fontFamily: "'Stack Sans Text', sans-serif",
                boxShadow: '0 4px 20px rgba(37,99,235,0.3)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 6px 30px rgba(37,99,235,0.45)' }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Solutions
              <ArrowRight size={15} />
            </motion.button>
          </motion.div>
        </div>

        {/* ─── Main Content: 2x2 Grid with Central Node ─── */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-5xl mx-auto">

          {/* Central Glowing Core Node */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center pointer-events-none z-0">
            {/* Outer Ring 3 */}
            <motion.div
              className="absolute w-72 h-72 rounded-full"
              style={{ border: '1px solid rgba(37,99,235,0.08)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            {/* Outer Ring 2 */}
            <motion.div
              className="absolute w-52 h-52 rounded-full"
              style={{
                border: '1px dashed rgba(37,99,235,0.15)',
                background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)',
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />
            {/* Outer Ring 1 */}
            <div
              className="absolute w-36 h-36 rounded-full"
              style={{
                background: 'rgba(37,99,235,0.06)',
                border: '1px solid rgba(37,99,235,0.2)',
                boxShadow: '0 0 30px rgba(37,99,235,0.12)',
              }}
            />
            {/* Center Core Emblem */}
            <motion.div
              className="relative w-16 h-16 rounded-full flex items-center justify-center z-10"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                boxShadow: '0 0 24px rgba(37,99,235,0.4)',
              }}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="scale-75">
                <Logo />
              </div>
            </motion.div>
          </div>

          {/* Solution Cards */}
          {solutions.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                className="relative p-7 rounded-3xl z-10 transition-all duration-300 group"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(15,23,42,0.08)',
                  boxShadow: '0 4px 20px rgba(15,23,42,0.06)',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{
                  borderColor: `${item.color}30`,
                  boxShadow: `0 12px 40px ${item.color}15`,
                  y: -4,
                }}
              >
                {/* Connector Dot */}
                <div
                  className={`hidden md:block absolute w-3 h-3 rounded-full pointer-events-none transition-colors ${
                    item.position.includes('left') ? '-right-1.5' : '-left-1.5'
                  } ${item.position.includes('top') ? 'top-1/3' : 'bottom-1/3'}`}
                  style={{
                    background: '#FFFFFF',
                    border: `2px solid ${item.color}`,
                    boxShadow: `0 0 8px ${item.color}60`,
                  }}
                />

                {/* Icon Container */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: `${item.color}0D`,
                    border: `1px solid ${item.color}25`,
                  }}
                >
                  <Icon size={24} style={{ color: item.color }} />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
                >
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
