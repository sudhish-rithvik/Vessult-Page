import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ModelViewer from '../effects/ModelViewer'

// Reliable public PCB/electronics GLB — KhronosGroup SciFi Helmet (tech aesthetic)
// This is a well-maintained public CDN URL
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
        background:
          'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(37,99,235,0.04) 0%, #050816 70%)',
      }}
    >
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orb behind model */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: text ── */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label */}
            <span
              className="text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: '#38BDF8', fontFamily: "'Stack Sans Text', sans-serif" }}
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
                  color: '#F8FAFC',
                }}
              >
                PCB Design &amp;
              </h2>
              <h2
                className="font-bold leading-tight"
                style={{
                  fontFamily: "'Stack Sans Text', sans-serif",
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  background: 'linear-gradient(90deg, #2563EB, #38BDF8)',
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
              style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
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
                    background: 'rgba(37,99,235,0.07)',
                    border: '1px solid rgba(37,99,235,0.15)',
                  }}
                >
                  <span
                    className="text-xl font-bold"
                    style={{ color: '#38BDF8', fontFamily: "'Stack Sans Text', sans-serif" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-xs tracking-wider uppercase"
                    style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              className="w-fit px-7 py-3 rounded-xl text-sm font-semibold"
              style={{
                background: 'linear-gradient(135deg, #2563EB, #1d4ed8)',
                color: '#F8FAFC',
                fontFamily: "'Stack Sans Text', sans-serif",
                boxShadow: '0 0 24px rgba(37,99,235,0.3)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 36px rgba(37,99,235,0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discuss Your PCB Project →
            </motion.button>
          </motion.div>

          {/* ── Right: 3D ModelViewer ── */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div
              className="relative rounded-2xl overflow-hidden w-full"
              style={{
                maxWidth: 520,
                aspectRatio: '1/1',
                border: '1px solid rgba(37,99,235,0.18)',
                boxShadow:
                  '0 0 60px rgba(37,99,235,0.12), inset 0 0 40px rgba(5,8,22,0.4)',
                background: 'rgba(5,8,22,0.3)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Corner accents */}
              {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos) => (
                <span
                  key={pos}
                  className={`absolute ${pos} w-6 h-6 pointer-events-none`}
                  style={{
                    borderColor: '#2563EB',
                    borderStyle: 'solid',
                    borderWidth: pos.includes('top') && pos.includes('left') ? '2px 0 0 2px' :
                      pos.includes('top') && pos.includes('right') ? '2px 2px 0 0' :
                      pos.includes('bottom') && pos.includes('left') ? '0 0 2px 2px' :
                      '0 2px 2px 0',
                    opacity: 0.6,
                  }}
                />
              ))}

              <ModelViewer
                url={PCB_MODEL_URL}
                width={520}
                height={520}
                defaultRotationX={-30}
                defaultRotationY={15}
                defaultZoom={0.6}
                environmentPreset="night"
                ambientIntensity={0.4}
                keyLightIntensity={1.2}
                fillLightIntensity={0.6}
                rimLightIntensity={1.0}
                autoRotate
                autoRotateSpeed={0.18}
                fadeIn
                enableMouseParallax
                enableHoverRotation
                enableManualRotation
                enableManualZoom={false}
                showScreenshotButton={false}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
