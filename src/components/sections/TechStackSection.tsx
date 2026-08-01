import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Bot, Zap, ShieldCheck, Activity, TrendingUp, CheckCircle2 } from 'lucide-react'

export function TechStackSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="technologies" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.04) 0%, transparent 70%)',
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
              background: 'rgba(37,99,235,0.1)',
              border: '1px solid rgba(37,99,235,0.25)',
              color: '#38BDF8',
              fontFamily: "'Stack Sans Text', sans-serif",
            }}
          >
            Capabilities
          </span>

          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#F8FAFC' }}
          >
            Engineered for{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #2563EB 0%, #38BDF8 100%)',
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
            style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
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
              background: 'rgba(15,23,42,0.7)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{
              borderColor: 'rgba(56,189,248,0.35)',
              boxShadow: '0 12px 40px rgba(56,189,248,0.12)',
              y: -4,
            }}
          >
            {/* Top Tag */}
            <span
              className="w-fit px-3 py-1 rounded-full text-[11px] font-medium tracking-wide"
              style={{
                background: 'rgba(37,99,235,0.12)',
                border: '1px solid rgba(37,99,235,0.25)',
                color: '#38BDF8',
                fontFamily: "'Stack Sans Text', sans-serif",
              }}
            >
              AI Models
            </span>

            {/* Left Content */}
            <div className="max-w-[55%] z-10 my-4">
              <h3
                className="text-xl font-bold mb-2 leading-snug group-hover:text-white transition-colors"
                style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#F8FAFC' }}
              >
                AI-Powered Vision &amp; Analytics
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                Automate and optimize complex inspection tasks with domain-trained AI models.
              </p>
            </div>

            {/* Right Side Graphic: Futuristic Cyber Robot Core */}
            <div className="absolute right-4 bottom-2 top-2 w-[42%] flex items-center justify-center pointer-events-none">
              <div
                className="relative w-36 h-36 rounded-full flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, rgba(15,23,42,0.9) 80%)',
                  border: '1px solid rgba(56,189,248,0.3)',
                  boxShadow: '0 0 35px rgba(37,99,235,0.3)',
                }}
              >
                <div className="w-24 h-24 rounded-full border border-dashed border-sky-400/40 flex items-center justify-center animate-spin-slow">
                  <Bot size={40} className="text-sky-400" />
                </div>
                {/* Visor Glow Dot */}
                <div
                  className="absolute w-2 h-2 rounded-full bg-green-400"
                  style={{ boxShadow: '0 0 10px #22C55E' }}
                />
              </div>
            </div>
          </motion.div>

          {/* ── Card 2: Ultra-Low Latency ── */}
          <motion.div
            className="relative rounded-3xl p-7 lg:p-8 flex flex-col justify-between min-h-[260px] overflow-hidden group transition-all duration-300"
            style={{
              background: 'rgba(15,23,42,0.7)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{
              borderColor: 'rgba(34,197,94,0.35)',
              boxShadow: '0 12px 40px rgba(34,197,94,0.12)',
              y: -4,
            }}
          >
            {/* Top Tag */}
            <span
              className="w-fit px-3 py-1 rounded-full text-[11px] font-medium tracking-wide"
              style={{
                background: 'rgba(34,197,94,0.12)',
                border: '1px solid rgba(34,197,94,0.25)',
                color: '#22C55E',
                fontFamily: "'Stack Sans Text', sans-serif",
              }}
            >
              Edge Latency
            </span>

            {/* Left Content */}
            <div className="max-w-[55%] z-10 my-4">
              <h3
                className="text-xl font-bold mb-2 leading-snug group-hover:text-white transition-colors"
                style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#F8FAFC' }}
              >
                Ultra-Fast &amp; Real-Time Inference
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                Sub-5ms response speeds powered by TensorRT and Jetson hardware.
              </p>
            </div>

            {/* Right Side UI Widget: Live Telemetry Card */}
            <div className="absolute right-4 bottom-4 top-4 w-[42%] flex items-center justify-center pointer-events-none">
              <div
                className="w-full p-3.5 rounded-2xl flex flex-col gap-2.5"
                style={{
                  background: 'rgba(5,8,22,0.85)',
                  border: '1px solid rgba(34,197,94,0.25)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 font-mono">LATENCY</span>
                  <Zap size={12} className="text-green-400" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-white font-mono">&lt; 4.2ms</span>
                  <span className="text-[9px] text-green-400 font-mono">/frame</span>
                </div>
                <div className="space-y-1.5 pt-1 border-t border-gray-800">
                  <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                    <span>Jetson Orin</span>
                    <span className="text-emerald-400">99.8% FPS</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                    <span>ONNX Engine</span>
                    <span className="text-sky-400 font-mono">60 FPS</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Card 3: Industrial Precision & Security ── */}
          <motion.div
            className="relative rounded-3xl p-7 lg:p-8 flex flex-col justify-between min-h-[260px] overflow-hidden group transition-all duration-300"
            style={{
              background: 'rgba(15,23,42,0.7)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{
              borderColor: 'rgba(37,99,235,0.35)',
              boxShadow: '0 12px 40px rgba(37,99,235,0.12)',
              y: -4,
            }}
          >
            {/* Top Tag */}
            <span
              className="w-fit px-3 py-1 rounded-full text-[11px] font-medium tracking-wide"
              style={{
                background: 'rgba(37,99,235,0.12)',
                border: '1px solid rgba(37,99,235,0.25)',
                color: '#38BDF8',
                fontFamily: "'Stack Sans Text', sans-serif",
              }}
            >
              Precision
            </span>

            {/* Left Content */}
            <div className="max-w-[55%] z-10 my-4">
              <h3
                className="text-xl font-bold mb-2 leading-snug group-hover:text-white transition-colors"
                style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#F8FAFC' }}
              >
                Sub-Millimeter QC Accuracy
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                99.4%+ defect accuracy ensures zero-fault manufacturing output.
              </p>
            </div>

            {/* Right Side UI Widget: Graph & Metric Card */}
            <div className="absolute right-4 bottom-4 top-4 w-[42%] flex items-center justify-center pointer-events-none">
              <div
                className="w-full p-3.5 rounded-2xl flex flex-col gap-2"
                style={{
                  background: 'rgba(5,8,22,0.85)',
                  border: '1px solid rgba(56,189,248,0.25)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                }}
              >
                <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono">
                  <span>QC ACCURACY</span>
                  <CheckCircle2 size={12} className="text-sky-400" />
                </div>
                <div className="text-xl font-bold text-white font-mono flex items-center gap-1.5">
                  99.4%
                  <span className="text-[10px] text-emerald-400 flex items-center font-normal">
                    <TrendingUp size={10} className="mr-0.5" /> +2.5%
                  </span>
                </div>
                {/* SVG Mini Waveform Chart */}
                <div className="h-10 w-full pt-1">
                  <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path
                      d="M0 25 Q 25 5, 50 18 T 100 4"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="2"
                    />
                    <path
                      d="M0 25 Q 25 5, 50 18 T 100 4 L 100 30 L 0 30 Z"
                      fill="rgba(56,189,248,0.15)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Card 4: 24/7 Telemetry ── */}
          <motion.div
            className="relative rounded-3xl p-7 lg:p-8 flex flex-col justify-between min-h-[260px] overflow-hidden group transition-all duration-300"
            style={{
              background: 'rgba(15,23,42,0.7)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{
              borderColor: 'rgba(124,58,237,0.35)',
              boxShadow: '0 12px 40px rgba(124,58,237,0.12)',
              y: -4,
            }}
          >
            {/* Top Tag */}
            <span
              className="w-fit px-3 py-1 rounded-full text-[11px] font-medium tracking-wide"
              style={{
                background: 'rgba(124,58,237,0.12)',
                border: '1px solid rgba(124,58,237,0.25)',
                color: '#A78BFA',
                fontFamily: "'Stack Sans Text', sans-serif",
              }}
            >
              24/7 Telemetry
            </span>

            {/* Left Content */}
            <div className="max-w-[55%] z-10 my-4">
              <h3
                className="text-xl font-bold mb-2 leading-snug group-hover:text-white transition-colors"
                style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#F8FAFC' }}
              >
                24/7 Intelligent Monitoring
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                Continuous IoT sensor health monitoring and predictive maintenance alerts.
              </p>
            </div>

            {/* Right Side UI Widget: 24/7 Health Indicator */}
            <div className="absolute right-4 bottom-4 top-4 w-[42%] flex items-center justify-center pointer-events-none">
              <div
                className="w-full p-3.5 rounded-2xl flex flex-col gap-2.5"
                style={{
                  background: 'rgba(5,8,22,0.85)',
                  border: '1px solid rgba(124,58,237,0.25)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                }}
              >
                <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono">
                  <span>SYSTEM HEALTH</span>
                  <Activity size={12} className="text-violet-400" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-bold text-white font-mono">100% ONLINE</span>
                </div>
                <div className="text-[10px] text-purple-300 font-mono bg-purple-950/40 p-1.5 rounded border border-purple-800/30">
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
              background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)',
              color: '#F8FAFC',
              fontFamily: "'Stack Sans Text', sans-serif",
              boxShadow: '0 0 28px rgba(37,99,235,0.35)',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(37,99,235,0.55)' }}
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
