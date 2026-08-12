import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X, Sparkles, Building2, CheckCircle2, TrendingUp } from 'lucide-react'

const caseStudies = [
  {
    id: 'automotive-qc',
    title: 'Sub-Millimeter Weld Defect Detection',
    client: 'Global Tier-1 Automotive Supplier',
    category: 'Computer Vision',
    stat: '99.8%',
    statLabel: 'Defect Accuracy',
    summary: 'Replaced manual optical checks with an integrated multi-camera edge vision system running 60 FPS on high-speed robotic welding cells.',
    challenge: 'High velocity body-in-white welding lines required 100% inline quality inspection without slowing production cycle times below 4.5 seconds per chassis.',
    solution: 'Engineered a custom multi-camera gigabit vision system synchronized with TensorRT acceleration on industrial edge PCs, detecting micro-cracks under 0.05mm.',
    results: [
      'Zero false-pass defects shipped over 18 months of continuous production.',
      '$2.4M saved annually in manual rework and warranty claim reserves.',
      'Sub-4ms latency per inspection frame.',
    ],
    tech: ['GigE Cameras', 'NVIDIA Jetson AGX Orin', 'TensorRT', 'Custom Micro-Defect Model'],
  },
  {
    id: 'semiconductor-pcb',
    title: 'AI-Powered SMT PCB Alignment',
    client: 'Precision Electronics Manufacturer',
    category: 'Edge AI Systems',
    stat: '< 2ms',
    statLabel: 'Alignment Offset Delta',
    summary: 'Integrated edge vision AI to compute fiducial component placement offsets on SMT lines in real time.',
    challenge: 'Miniaturized 0201 component placement required ultra-fine optical feedback under challenging industrial lighting variance.',
    solution: 'Deployed lightweight convolutional networks running on embedded custom carrier boards directly mounted inside pick-and-place gantry heads.',
    results: [
      'Component placement yields increased to 99.94%.',
      'Eliminated board rejection scrap by 78%.',
      'Real-time automated calibration without stopping feeder lines.',
    ],
    tech: ['Custom PCB Hardware', 'OpenVINO', 'High-Speed Strobe Vision', 'Modbus TCP'],
  },
  {
    id: 'energy-grid',
    title: 'Autonomous Solar Array Inspection',
    client: 'Clean Grid Energy Corp',
    category: 'Industrial IoT',
    stat: '10x Faster',
    statLabel: 'Field Inspection Speed',
    summary: 'Equipped aerial inspection drones with onboard edge AI for real-time hotspot and micro-fissure classification across 500MW solar farms.',
    challenge: 'Manual infrared inspections required weeks of field technician survey time and manual telemetry logging.',
    solution: 'Designed an onboard AI edge payload analyzing radiometric thermal streams during flight, mapping exact GPS micro-fault coordinates.',
    results: [
      '500MW solar site mapped and analyzed in under 6 hours.',
      'Identified 420+ hidden string anomalies before failure.',
      'Direct sync to asset management platform via cellular edge modem.',
    ],
    tech: ['Drone Edge Payload', 'Thermal IR Synthesis', 'GPS Telemetry Fusion', 'Cellular IoT'],
  },
]

export function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null)

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span
              className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{
                background: 'rgba(37,99,235,0.08)',
                color: '#2563EB',
                border: '1px solid rgba(37,99,235,0.2)',
                fontFamily: "'Stack Sans Text', sans-serif",
              }}
            >
              Proven Real-World Impact
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold mt-4"
              style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
            >
              Enterprise Deployment Highlights
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm leading-relaxed">
            Click any case study below to open full architecture breakdown, technical stack, and verified metrics.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.id}
              onClick={() => setSelectedCase(cs)}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl cursor-pointer flex flex-col justify-between group transition-all duration-300"
              style={{
                background: '#F8FAFC',
                border: '1px solid rgba(15,23,42,0.08)',
                boxShadow: '0 4px 20px rgba(15,23,42,0.03)',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                    {cs.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="text-3xl font-black text-blue-600 mb-1" style={{ fontFamily: "'Stack Sans Text', sans-serif" }}>
                  {cs.stat}
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  {cs.statLabel}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {cs.title}
                </h3>

                <p className="text-xs text-slate-500 mb-4 flex items-center gap-1.5 font-medium">
                  <Building2 size={14} className="text-slate-400" />
                  {cs.client}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {cs.summary}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-blue-600">
                <span>View Full Architecture</span>
                <Sparkles size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-10 relative overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                {selectedCase.category}
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-4 mb-2">
                {selectedCase.title}
              </h3>
              <p className="text-sm font-semibold text-slate-500 mb-6 flex items-center gap-2">
                <Building2 size={16} /> {selectedCase.client}
              </p>

              <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-blue-50/60 border border-blue-100 mb-6">
                <div>
                  <div className="text-xs text-slate-500 font-medium">Verified Metric</div>
                  <div className="text-2xl font-black text-blue-600">{selectedCase.stat}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Metric Focus</div>
                  <div className="text-sm font-bold text-slate-800 mt-1">{selectedCase.statLabel}</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">The Challenge</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{selectedCase.challenge}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Technical Solution</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{selectedCase.solution}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Key Results & Outcomes</h4>
                  <div className="space-y-2">
                    {selectedCase.results.map((r, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-800">
                        <CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Technology Stack Applied</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.tech.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
