import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ModelViewer from '../effects/ModelViewer'

const PCB_MODEL_URL =
  'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SciFiHelmet/glTF-Binary/SciFiHelmet.glb'

const STATS = [
  { value: '6-layer', label: 'PCB Stack-up' },
  { value: '0.1mm', label: 'Min Trace Width' },
  { value: 'IPC-A-600', label: 'Quality Class' },
  { value: 'RoHS', label: 'Compliant' },
]

export function PCB3DSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section
      id="pcb3d"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background: '#F8FAFC',
      }}
    >
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orb behind model */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label */}
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: '#2563EB', fontFamily: "'Stack Sans Text', sans-serif" }}
            >
              Hardware Engineering
            </span>

            {/* Heading */}
            <div className="flex flex-col gap-2">
              <h2
                className="font-bold leading-tight"
                style={{
                  fontFamily: "'Stack Sans Text', sans-serif",
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  color: '#0F172A',
                }}
              >
                PCB Design &amp;
              </h2>
              <h2
                className="font-bold leading-tight"
                style={{
                  fontFamily: "'Stack Sans Text', sans-serif",
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  background: 'linear-gradient(90deg, #1E40AF, #2563EB, #38BDF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Embedded Systems
              </h2>
            </div>

            {/* Body */}
            <p
              className="text-base leading-relaxed max-w-md"
              style={{ color: '#475569', fontFamily: "'Stack Sans Text', sans-serif" }}
            >
              From schematic capture to manufacturing-ready Gerber files, we design
              high-density PCBs with precision controlled impedance, EMC compliance
              and DFM optimisation — ready for volume production.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col gap-1 p-4 rounded-xl"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(37,99,235,0.15)',
                    boxShadow: '0 2px 10px rgba(15,23,42,0.04)',
                  }}
                >
                  <span
                    className="text-xl font-bold"
                    style={{ color: '#2563EB', fontFamily: "'Stack Sans Text', sans-serif" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-xs font-medium"
                    style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: 3D Canvas */}
          <motion.div
            className="w-full h-[460px] md:h-[540px] rounded-3xl overflow-hidden relative shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #EFF6FF 100%)',
              border: '1px solid rgba(37,99,235,0.2)',
            }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <ModelViewer url={PCB_MODEL_URL} modelPath={PCB_MODEL_URL} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
