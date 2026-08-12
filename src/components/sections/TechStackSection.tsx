import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Bot, Zap, Activity, TrendingUp, CheckCircle2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function TechStackSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const navigate = useNavigate()
  const scrollToContact = () => navigate('/contact')

  return (
    <section id="technologies" className="relative py-24 overflow-hidden" ref={ref} style={{ background: '#FFFFFF' }}>
      {/* Background ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.04) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container-custom relative z-10">

        {/* ─── Header: Centered ─── */}
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
            Capabilities
          </span>

          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
          >
            Engineered for{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #1E40AF 0%, #2563EB 50%, #38BDF8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Maximum Performance
            </span>
          </h2>

          <p
            className="text-sm md:text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif" }}
          >
            High-performance AI models, low-latency edge computing, and industrial-grade security tailored for mission-critical applications.
          </p>
        </motion.div>

        {/* ─── 2x2 Feature Dashboard Grid (Inspired by reference design) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">

          {/* ── Card 1: AI-Powered Models ── */}
          <motion.div
            className="relative rounded-3xl p-7 lg:p-8 flex flex-col justify-between min-h-[260px] overflow-hidden group transition-all duration-300"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(15,23,42,0.08)',
              boxShadow: '0 4px 20px rgba(15,23,42,0.06)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{
              borderColor: 'rgba(37,99,235,0.25)',
              boxShadow: '0 12px 40px rgba(37,99,235,0.1)',
              y: -4,
            }}
          >
            {/* Top Tag */}
            <span
              className="w-fit px-3 py-1 rounded-full text-[11px] font-medium tracking-wide"
              style={{
                background: 'rgba(37,99,235,0.08)',
                border: '1px solid rgba(37,99,235,0.2)',
                color: '#2563EB',
                fontFamily: "'Stack Sans Text', sans-serif",
              }}
            >
              AI Models
            </span>

            {/* Left Content */}
            <div className="max-w-[55%] z-10 my-4">
              <h3
                className="text-xl font-bold mb-2 leading-snug"
                style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
              >
                AI-Powered Vision & Analytics
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                Automate and optimize complex inspection tasks with domain-trained AI models.
              </p>
            </div>

            {/* Right Side Graphic: Robot Core */}
            <div className="absolute right-4 bottom-2 top-2 w-[42%] flex items-center justify-center pointer-events-none">
              <div
                className="relative w-36 h-36 rounded-full flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, #EFF6FF 80%)',
                  border: '1px solid rgba(37,99,235,0.2)',
                  boxShadow: '0 0 24px rgba(37,99,235,0.12)',
                }}
              >
                <div className="w-24 h-24 rounded-full border border-dashed flex items-center justify-center animate-spin-slow" style={{ borderColor: 'rgba(37,99,235,0.3)' }}>
                  <Bot size={40} style={{ color: '#2563EB' }} />
                </div>
                <div
                  className="absolute w-2 h-2 rounded-full bg-green-500"
                  style={{ boxShadow: '0 0 8px #22C55E' }}
                />
              </div>
            </div>
          </motion.div>

          {/* ── Card 2: Ultra-Low Latency ── */}
          <motion.div
            className="relative rounded-3xl p-7 lg:p-8 flex flex-col justify-between min-h-[260px] overflow-hidden group transition-all duration-300"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(15,23,42,0.08)',
              boxShadow: '0 4px 20px rgba(15,23,42,0.06)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{
              borderColor: 'rgba(22,163,74,0.3)',
              boxShadow: '0 12px 40px rgba(22,163,74,0.1)',
              y: -4,
            }}
          >
            {/* Top Tag */}
            <span
              className="w-fit px-3 py-1 rounded-full text-[11px] font-medium tracking-wide"
              style={{
                background: 'rgba(22,163,74,0.08)',
                border: '1px solid rgba(22,163,74,0.22)',
                color: '#16A34A',
                fontFamily: "'Stack Sans Text', sans-serif",
              }}
            >
              Edge Latency
            </span>

            {/* Left Content */}
            <div className="max-w-[55%] z-10 my-4">
              <h3
                className="text-xl font-bold mb-2 leading-snug"
                style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
              >
                Ultra-Fast & Real-Time Inference
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                Sub-5ms response speeds powered by TensorRT and Jetson hardware.
              </p>
            </div>

            {/* Right Side UI Widget: Live Telemetry Card */}
            <div className="absolute right-4 bottom-4 top-4 w-[42%] flex items-center justify-center pointer-events-none">
              <div
                className="w-full p-3.5 rounded-2xl flex flex-col gap-2.5"
                style={{
                  background: '#F0FDF4',
                  border: '1px solid rgba(22,163,74,0.2)',
                  boxShadow: '0 4px 16px rgba(22,163,74,0.08)',
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono" style={{ color: '#64748B' }}>LATENCY</span>
                  <Zap size={12} style={{ color: '#16A34A' }} />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold font-mono" style={{ color: '#0F172A' }}>&lt; 4.2ms</span>
                  <span className="text-[9px] font-mono" style={{ color: '#16A34A' }}>/frame</span>
                </div>
                <div className="space-y-1.5 pt-1" style={{ borderTop: '1px solid rgba(22,163,74,0.15)' }}>
                  <div className="flex justify-between text-[10px] font-mono" style={{ color: '#64748B' }}>
                    <span>Jetson Orin</span>
                    <span style={{ color: '#16A34A' }}>99.8% FPS</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono" style={{ color: '#64748B' }}>
                    <span>ONNX Engine</span>
                    <span style={{ color: '#2563EB' }}>60 FPS</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Card 3: Industrial Precision & Security ── */}
          <motion.div
            className="relative rounded-3xl p-7 lg:p-8 flex flex-col justify-between min-h-[260px] overflow-hidden group transition-all duration-300"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(15,23,42,0.08)',
              boxShadow: '0 4px 20px rgba(15,23,42,0.06)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{
              borderColor: 'rgba(37,99,235,0.25)',
              boxShadow: '0 12px 40px rgba(37,99,235,0.1)',
              y: -4,
            }}
          >
            {/* Top Tag */}
            <span
              className="w-fit px-3 py-1 rounded-full text-[11px] font-medium tracking-wide"
              style={{
                background: 'rgba(37,99,235,0.08)',
                border: '1px solid rgba(37,99,235,0.2)',
                color: '#2563EB',
                fontFamily: "'Stack Sans Text', sans-serif",
              }}
            >
              Precision
            </span>

            {/* Left Content */}
            <div className="max-w-[55%] z-10 my-4">
              <h3
                className="text-xl font-bold mb-2 leading-snug"
                style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
              >
                Sub-Millimeter QC Accuracy
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                99.4%+ defect accuracy ensures zero-fault manufacturing output.
              </p>
            </div>

            {/* Right Side UI Widget: Graph & Metric Card */}
            <div className="absolute right-4 bottom-4 top-4 w-[42%] flex items-center justify-center pointer-events-none">
              <div
                className="w-full p-3.5 rounded-2xl flex flex-col gap-2"
                style={{
                  background: '#EFF6FF',
                  border: '1px solid rgba(37,99,235,0.18)',
                  boxShadow: '0 4px 16px rgba(37,99,235,0.08)',
                }}
              >
                <div className="flex items-center justify-between text-[10px] font-mono" style={{ color: '#64748B' }}>
                  <span>QC ACCURACY</span>
                  <CheckCircle2 size={12} style={{ color: '#2563EB' }} />
                </div>
                <div className="text-xl font-bold font-mono flex items-center gap-1.5" style={{ color: '#0F172A' }}>
                  99.4%
                  <span className="text-[10px] flex items-center font-normal" style={{ color: '#16A34A' }}>
                    <TrendingUp size={10} className="mr-0.5" /> +2.5%
                  </span>
                </div>
                <div className="h-10 w-full pt-1">
                  <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path d="M0 25 Q 25 5, 50 18 T 100 4" fill="none" stroke="#2563EB" strokeWidth="2" />
                    <path d="M0 25 Q 25 5, 50 18 T 100 4 L 100 30 L 0 30 Z" fill="rgba(37,99,235,0.1)" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Card 4: 24/7 Telemetry ── */}
          <motion.div
            className="relative rounded-3xl p-7 lg:p-8 flex flex-col justify-between min-h-[260px] overflow-hidden group transition-all duration-300"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(15,23,42,0.08)',
              boxShadow: '0 4px 20px rgba(15,23,42,0.06)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{
              borderColor: 'rgba(124,58,237,0.25)',
              boxShadow: '0 12px 40px rgba(124,58,237,0.1)',
              y: -4,
            }}
          >
            {/* Top Tag */}
            <span
              className="w-fit px-3 py-1 rounded-full text-[11px] font-medium tracking-wide"
              style={{
                background: 'rgba(124,58,237,0.08)',
                border: '1px solid rgba(124,58,237,0.2)',
                color: '#7C3AED',
                fontFamily: "'Stack Sans Text', sans-serif",
              }}
            >
              24/7 Telemetry
            </span>

            {/* Left Content */}
            <div className="max-w-[55%] z-10 my-4">
              <h3
                className="text-xl font-bold mb-2 leading-snug"
                style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
              >
                24/7 Intelligent Monitoring
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                Continuous IoT sensor health monitoring and predictive maintenance alerts.
              </p>
            </div>

            {/* Right Side UI Widget: 24/7 Health Indicator */}
            <div className="absolute right-4 bottom-4 top-4 w-[42%] flex items-center justify-center pointer-events-none">
              <div
                className="w-full p-3.5 rounded-2xl flex flex-col gap-2.5"
                style={{
                  background: '#FAF5FF',
                  border: '1px solid rgba(124,58,237,0.18)',
                  boxShadow: '0 4px 16px rgba(124,58,237,0.08)',
                }}
              >
                <div className="flex items-center justify-between text-[10px] font-mono" style={{ color: '#64748B' }}>
                  <span>SYSTEM HEALTH</span>
                  <Activity size={12} style={{ color: '#7C3AED' }} />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-bold font-mono" style={{ color: '#0F172A' }}>100% ONLINE</span>
                </div>
                <div className="text-[10px] font-mono p-1.5 rounded" style={{ color: '#7C3AED', background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.15)' }}>
                  • MQTT Stream Connected<br />
                  • Predictive Alert: Normal
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ─── Bottom CTA Button ─── */}
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
            Explore Capabilities
            <ArrowRight size={15} />
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}
