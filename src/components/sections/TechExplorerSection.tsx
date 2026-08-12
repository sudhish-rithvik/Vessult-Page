import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Terminal, Shield, Layers, ChevronDown, Check, Zap, Server } from 'lucide-react'

const techLayers = [
  {
    id: 'hardware',
    layer: 'Layer 1: Hardware Silicon & PCB',
    title: 'Custom Carrier PCBs & Edge SoCs',
    icon: Cpu,
    color: '#2563EB',
    summary: 'Custom high-density PCB layouts housing NVIDIA Orin, NXP i.MX8, and Xilinx Kria SoCs with industrial thermal dissipation.',
    details: [
      { name: 'SoC Acceleration', spec: 'NVIDIA Jetson AGX Orin / Orin Nano / Xilinx Kria K26' },
      { name: 'Thermal Operation', spec: 'Passive heatsink design certified for -40°C to +85°C' },
      { name: 'Industrial I/O', spec: 'Dual 10GbE M12, CAN FD, RS-485, Isolated Digital I/O' },
      { name: 'Power Architecture', spec: 'Wide input range (9V–36V DC) with surge protection' },
    ],
  },
  {
    id: 'runtime',
    layer: 'Layer 2: Acceleration Runtime',
    title: 'Sub-5ms Inference Runtime Engine',
    icon: Terminal,
    color: '#0EA5E9',
    summary: 'Proprietary model optimizer targeting TensorRT and ONNX Execution Providers for INT8 precision with zero loss in MAP.',
    details: [
      { name: 'Execution Provider', spec: 'TensorRT 10.x, OpenVINO, DirectML, CUDA 12.2' },
      { name: 'Quantization', spec: 'Post-Training Quantization (PTQ) & Quantization-Aware Training (QAT)' },
      { name: 'Memory Footprint', spec: 'Sub-500MB VRAM footprint for lightweight embedded deployment' },
      { name: 'Multi-Stream', spec: 'Parallel execution of up to 16 1080p@60FPS camera streams' },
    ],
  },
  {
    id: 'models',
    layer: 'Layer 3: Computer Vision & AI Models',
    title: 'Domain-Trained Vision Backbones',
    icon: Layers,
    color: '#16A34A',
    summary: 'Customized YOLOv8, Segment Anything (SAM), and ViT backbones fine-tuned on multi-spectral industrial defect datasets.',
    details: [
      { name: 'Defect Detection', spec: 'Segmentation, Object Detection, Anomaly Heatmapping' },
      { name: 'Active Learning', spec: 'Automated edge-to-cloud hard example mining' },
      { name: '3D Point Cloud', spec: 'LiDAR & Structured Light point-cloud mesh processing' },
      { name: 'Model Compactness', spec: '< 15M Parameters optimized for real-time edge processing' },
    ],
  },
  {
    id: 'security',
    layer: 'Layer 4: Security & Cloud Sync',
    title: 'Zero-Trust Edge Security & OTA',
    icon: Shield,
    color: '#7C3AED',
    summary: 'Hardware-rooted TPM 2.0 secure boot, AES-256 encrypted local storage, and A/B dual-partition atomic OTA updates.',
    details: [
      { name: 'Hardware Security', spec: 'Infineon OPTIGA™ TPM 2.0 Hardware Root of Trust' },
      { name: 'OTA Updates', spec: 'A/B Dual Partition with automatic fail-safe rollback' },
      { name: 'Telemetry Stream', spec: 'MQTT over TLS 1.3 with X.509 client certificate auth' },
      { name: 'Compliance', spec: 'IEC 62443-4-2 Industrial Cybersecurity Standard' },
    ],
  },
]

export function TechExplorerSection() {
  const [openId, setOpenId] = useState('hardware')

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: '#F8FAFC' }}>
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{
              background: 'rgba(37,99,235,0.08)',
              color: '#2563EB',
              border: '1px solid rgba(37,99,235,0.2)',
              fontFamily: "'Stack Sans Text', sans-serif",
            }}
          >
            Deep Architectural Inspection
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold mt-4"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
          >
            The 4-Layer Vessult Stack
          </h2>
          <p className="text-slate-600 mt-2 text-sm md:text-base">
            Click any layer below to inspect hardware specifications, runtime benchmarks, and security primitives.
          </p>
        </div>

        {/* Interactive Accordion Stack */}
        <div className="max-w-4xl mx-auto space-y-4">
          {techLayers.map((layer) => {
            const Icon = layer.icon
            const isOpen = layer.id === openId

            return (
              <div
                key={layer.id}
                className="rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-xs transition-all"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenId(isOpen ? '' : layer.id)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${layer.color}12`, border: `1px solid ${layer.color}30` }}
                    >
                      <Icon size={22} style={{ color: layer.color }} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                        {layer.layer}
                      </div>
                      <div className="text-lg md:text-xl font-bold text-slate-900">
                        {layer.title}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 hidden sm:inline-block">
                      {isOpen ? 'Expanded' : 'Inspect'}
                    </span>
                    <div
                      className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 transition-transform duration-300"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-8 md:px-8 pt-2 border-t border-slate-100">
                        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                          {layer.summary}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {layer.details.map((d, idx) => (
                            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                                {d.name}
                              </div>
                              <div className="text-sm font-bold text-slate-900 flex items-start gap-2">
                                <Check size={16} className="mt-0.5 text-blue-600 flex-shrink-0" />
                                <span>{d.spec}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
