import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Cpu, Network, ShieldCheck, CheckCircle, ArrowRight, Zap, Layers } from 'lucide-react'

const solutionCategories = [
  {
    id: 'vision',
    name: 'Computer Vision',
    icon: Eye,
    title: 'High-Precision Automated Inspection',
    description: 'Deploy real-time optical quality inspection pipelines directly onto factory lines with sub-millimeter defect detection capabilities.',
    metrics: [
      { label: 'Inference Speed', val: 'Sub-5ms' },
      { label: 'Detection Accuracy', val: '99.7%' },
      { label: 'Camera Support', val: 'GigE / USB3 / MIPI' },
    ],
    features: [
      'Automated Surface Defect Analysis (Micro-cracks, scratches, voids)',
      'Multi-spectral & Thermal Imaging Synthesis',
      'Inline 3D Volumetric Measurement & Tolerance Checking',
      'Seamless PLC Triggering & Automated Sorting Hooks',
    ],
    badgeColor: '#2563EB',
  },
  {
    id: 'edge',
    name: 'Edge AI Systems',
    icon: Cpu,
    title: 'Autonomous Localized Intelligence',
    description: 'Process video feeds and sensor telemetry locally at the edge without cloud dependency, guaranteeing absolute data privacy and zero latency.',
    metrics: [
      { label: 'Offline Capability', val: '100% Autonomous' },
      { label: 'Hardware Support', val: 'Jetson, NPU, FPGA' },
      { label: 'Thermal Range', val: '-40°C to +85°C' },
    ],
    features: [
      'TensorRT & OpenVINO Micro-Engine Acceleration',
      'Dynamic Model Quantization (INT8 Precision without loss)',
      'OTA Safe Model Updates with Automatic Rollback',
      'Low-Power IP67 Ruggedized Enclosure Designs',
    ],
    badgeColor: '#0EA5E9',
  },
  {
    id: 'iot',
    name: 'Industrial IoT',
    icon: Network,
    title: 'Telemetry & Predictive Maintenance',
    description: 'Transform passive machinery into self-monitoring assets through high-frequency vibration, thermal, and acoustic sensor analytics.',
    metrics: [
      { label: 'Prediction Window', val: '72+ Hours' },
      { label: 'Protocol Support', val: 'OPC-UA / MQTT' },
      { label: 'False Alarm Rate', val: '<0.1%' },
    ],
    features: [
      'Real-time Machine Health Scoring & Anomaly Detection',
      'Acoustic Emission Analysis for Bearing Fatigue',
      'Unified OPC-UA, Modbus, and SCADA Integration',
      'Automated Maintenance Ticketing & Spares Reservation',
    ],
    badgeColor: '#16A34A',
  },
  {
    id: 'robotics',
    name: 'Robotic Guidance',
    icon: Zap,
    title: 'Adaptive Robotic Control & SLAM',
    description: 'Equip articulated robotic arms and Autonomous Mobile Robots (AMRs) with spatial vision for pick-and-place precision and dynamic SLAM navigation.',
    metrics: [
      { label: 'Positioning Tolerance', val: '±0.02mm' },
      { label: 'SLAM Refresh Rate', val: '60 Hz' },
      { label: 'ROS 2 Compatibility', val: 'Native' },
    ],
    features: [
      'Bin Picking & Random Object Pose Estimation',
      'Dynamic Obstacle Avoidance for Autonomous Fleets',
      'Kinematic Motion Planning & Collision Avoidance',
      'Multi-Robot Swarm Spatial Synchronization',
    ],
    badgeColor: '#7C3AED',
  },
]

export function SolutionsTabsSection() {
  const [activeTab, setActiveTab] = useState('vision')
  const current = solutionCategories.find((c) => c.id === activeTab)!

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: '#F8FAFC' }}>
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span
            className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{
              background: 'rgba(37,99,235,0.08)',
              color: '#2563EB',
              border: '1px solid rgba(37,99,235,0.2)',
              fontFamily: "'Stack Sans Text', sans-serif",
            }}
          >
            Explore Interactive Capabilities
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold mt-4"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
          >
            Engineered for Modern Industry
          </h2>
          <p className="text-slate-600 mt-2 text-sm md:text-base">
            Select a domain below to explore specific technical capabilities, metrics, and implementation features.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {solutionCategories.map((cat) => {
            const Icon = cat.icon
            const isActive = cat.id === activeTab
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 cursor-pointer"
                style={{
                  background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                  color: isActive ? cat.badgeColor : '#64748B',
                  border: isActive ? `2px solid ${cat.badgeColor}` : '1px solid rgba(15,23,42,0.08)',
                  boxShadow: isActive ? `0 8px 24px ${cat.badgeColor}20` : '0 2px 8px rgba(0,0,0,0.02)',
                  fontFamily: "'Stack Sans Text', sans-serif",
                }}
              >
                <Icon size={18} style={{ color: isActive ? cat.badgeColor : '#64748B' }} />
                <span>{cat.name}</span>
              </button>
            )
          })}
        </div>

        {/* Interactive Detail Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto"
          >
            {/* Left Column: Specifications & Content */}
            <div
              className="lg:col-span-7 p-8 md:p-10 rounded-3xl flex flex-col justify-between"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(15,23,42,0.08)',
                boxShadow: '0 8px 32px rgba(15,23,42,0.05)',
              }}
            >
              <div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${current.badgeColor}12`, border: `1px solid ${current.badgeColor}30` }}
                >
                  <current.icon size={24} style={{ color: current.badgeColor }} />
                </div>

                <h3
                  className="text-2xl md:text-3xl font-bold mb-3"
                  style={{ color: '#0F172A', fontFamily: "'Stack Sans Text', sans-serif" }}
                >
                  {current.title}
                </h3>

                <p
                  className="text-slate-600 text-sm md:text-base leading-relaxed mb-6"
                  style={{ fontFamily: "'Stack Sans Text', sans-serif" }}
                >
                  {current.description}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Capabilities</div>
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: current.badgeColor }} />
                      <span style={{ fontFamily: "'Stack Sans Text', sans-serif" }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Enterprise Deployment SLA included</span>
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="inline-flex items-center gap-2 text-sm font-bold transition-all hover:gap-3"
                  style={{ color: current.badgeColor, fontFamily: "'Stack Sans Text', sans-serif" }}
                >
                  Request Technical Demo <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Column: Key Metrics Panel */}
            <div
              className="lg:col-span-5 p-8 rounded-3xl flex flex-col justify-between"
              style={{
                background: `linear-gradient(135deg, ${current.badgeColor}0A 0%, #FFFFFF 100%)`,
                border: `1.5px solid ${current.badgeColor}30`,
                boxShadow: `0 8px 30px ${current.badgeColor}12`,
              }}
            >
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Zap size={18} style={{ color: current.badgeColor }} />
                  <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">Performance Benchmarks</span>
                </div>

                <div className="space-y-6">
                  {current.metrics.map((m, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-100 shadow-xs">
                      <div className="text-xs text-slate-500 font-medium mb-1">{m.label}</div>
                      <div className="text-2xl font-black" style={{ color: current.badgeColor, fontFamily: "'Stack Sans Text', sans-serif" }}>
                        {m.val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-white/80 border border-slate-200/60 text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-800">Deployment Notice:</span> All hardware-software solutions support full compliance with ISO 9001 and IEC 61508 safety standards.
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
