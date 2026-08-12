import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, ArrowUpRight, X, Cpu, ShieldCheck, Network, Layers, Sparkles, CheckCircle } from 'lucide-react'

const allProjects = [
  {
    id: 'weld-qc',
    title: 'Automated Robotic Weld Inspection System',
    category: 'Vision Inspection',
    client: 'Tier-1 Automotive Manufacturer',
    year: '2024',
    status: 'In Production',
    icon: ShieldCheck,
    color: '#2563EB',
    summary: 'Sub-millimeter defect detection at 60 FPS under sub-5ms processing latency on active assembly lines.',
    fullDesc: 'Custom high-speed computer vision pipeline built using TensorRT and custom optical setups. Detects micro-cracks, porosity, and seam displacement in real time.',
    stats: [
      { label: 'Latency', val: '4.2 ms' },
      { label: 'Precision', val: '99.4%' },
      { label: 'Throughput', val: '120 units/min' },
    ],
    tags: ['TensorRT', 'GigE Vision', 'Robotics', 'Jetson Orin'],
  },
  {
    id: 'predictive-iot',
    title: 'High-Frequency Vibration & Thermal Predictive AI',
    category: 'Industrial IoT',
    client: 'Heavy Metals & Rolling Mill Corp',
    year: '2024',
    status: 'Active Deployment',
    icon: Cpu,
    color: '#0EA5E9',
    summary: 'Predicts gear failure and bearing wear 72+ hours prior to breakdown with zero cloud dependence.',
    fullDesc: 'Deployed on-premise industrial edge gateways processing high-frequency piezoelectric sensor streams via Fast Fourier Transform (FFT) and deep spectral neural nets.',
    stats: [
      { label: 'Warning Lead Time', val: '72+ Hours' },
      { label: 'False Positives', val: '< 0.05%' },
      { label: 'ROI Payback', val: '4 Months' },
    ],
    tags: ['FFT Analytics', 'OPC-UA', 'Edge PC', 'Piezoelectric Sensors'],
  },
  {
    id: 'amr-navigation',
    title: 'Autonomous Mobile Robot (AMR) Spatial SLAM',
    category: 'Robotics & Edge',
    client: 'Global Logistics Hub',
    year: '2023',
    status: 'Fleet Active',
    icon: Network,
    color: '#16A34A',
    summary: 'Real-time LiDAR-Vision fusion for warehouse robot navigation and dynamic obstacle clearance.',
    fullDesc: 'Empowered a fleet of 80+ warehouse robots with dual 3D LiDAR and stereo camera spatial fusion, navigating unstructured environments with millimeter positional accuracy.',
    stats: [
      { label: 'Positional Accuracy', val: '±2 mm' },
      { label: 'Obstacle Re-route', val: '< 50 ms' },
      { label: 'Active Fleet', val: '84 Units' },
    ],
    tags: ['ROS 2', 'LiDAR Fusion', 'Stereo Vision', 'SLAM'],
  },
  {
    id: 'pcb-aoi',
    title: '3D Optical SMT Inspection Platform',
    category: 'Vision Inspection',
    client: 'Semiconductor Foundry',
    year: '2024',
    status: 'In Production',
    icon: Layers,
    color: '#7C3AED',
    summary: 'Automated 3D height profile measurement for microscopic solder paste deposition.',
    fullDesc: 'Combines structured blue phase-shifting laser projection with multi-angle CMOS sensors to calculate volumetric solder paste height profiles down to 1 micron.',
    stats: [
      { label: 'Height Resolution', val: '1.2 µm' },
      { label: 'Scan Velocity', val: '45 cm²/sec' },
      { label: 'Solder Defect Rate', val: '0.001%' },
    ],
    tags: ['Phase Projection', '3D Vision', 'OpenCV', 'Industrial Automation'],
  },
  {
    id: 'wafer-sorting',
    title: 'Micro-Silicon Defect Classifier',
    category: 'Edge AI Systems',
    client: 'Silicon Wafer Fabrication Lab',
    year: '2023',
    status: 'In Production',
    icon: Cpu,
    color: '#D97706',
    summary: 'Deep learning pattern classification for sub-micron silicon wafer crystallization flaws.',
    fullDesc: 'Ultra-high resolution microscope synthesis pipeline classifying crystal lattice grain boundaries and micro-contaminants during raw ingot wafering.',
    stats: [
      { label: 'Classification Speed', val: '800ms / wafer' },
      { label: 'Defect Types', val: '32 Categories' },
      { label: 'Yield Bump', val: '+ 4.8%' },
    ],
    tags: ['Microscopy AI', 'FPGA Accelerator', 'Custom Silicons', 'PyTorch'],
  },
  {
    id: 'smart-retail',
    title: 'Spatial Customer Flow & Inventory Analytics',
    category: 'Industrial IoT',
    client: 'National Retail Enterprise',
    year: '2023',
    status: 'Active Deployment',
    icon: Network,
    color: '#DB2777',
    summary: 'Privacy-preserving edge vision tracking customer foot traffic and shelf inventory density.',
    fullDesc: 'On-device camera processing that strips facial identity on edge hardware and streams anonymous vector trajectories and shelf fill levels to regional dashboards.',
    stats: [
      { label: 'Privacy Standard', val: '100% Anonymized' },
      { label: 'Stores Deployed', val: '140 Stores' },
      { label: 'Out-of-Stock Alert', val: '< 3 Mins' },
    ],
    tags: ['Privacy AI', 'Vector Tracking', 'Edge Hardware', 'Dashboard'],
  },
]

const categories = ['All', 'Vision Inspection', 'Edge AI Systems', 'Industrial IoT', 'Robotics & Edge']

export function ProjectFilterSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeModal, setActiveModal] = useState<typeof allProjects[0] | null>(null)

  const filteredProjects = allProjects.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: '#F8FAFC' }}>
      <div className="container-custom relative z-10">
        
        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <Filter size={16} className="text-slate-400 mr-2 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
                style={{
                  background: selectedCategory === cat ? '#2563EB' : '#F1F5F9',
                  color: selectedCategory === cat ? '#FFFFFF' : '#475569',
                  fontFamily: "'Stack Sans Text', sans-serif",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs font-medium bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-800"
            />
          </div>
        </div>

        {/* Filtered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => {
              const Icon = proj.icon
              return (
                <motion.div
                  layout
                  key={proj.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveModal(proj)}
                  whileHover={{ y: -6 }}
                  className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs cursor-pointer flex flex-col justify-between group hover:border-blue-300 hover:shadow-xl transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-10 h-10 rounded-2xl flex items-center justify-center"
                        style={{ background: `${proj.color}12`, border: `1px solid ${proj.color}30` }}
                      >
                        <Icon size={20} style={{ color: proj.color }} />
                      </div>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                        {proj.category}
                      </span>
                    </div>

                    <div className="text-xs text-slate-400 font-bold mb-1">{proj.client} • {proj.year}</div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {proj.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.tags.map((t) => (
                        <span key={t} className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                    <span>Inspect Deployment</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500 text-sm">
            No engineering projects matched your query. Try clearing search or selecting another category.
          </div>
        )}
      </div>

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-10 relative overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                  {activeModal.category}
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {activeModal.status}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                {activeModal.title}
              </h3>
              <p className="text-xs font-bold text-slate-400 mb-6">
                Client: {activeModal.client} • Year: {activeModal.year}
              </p>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Architectural Summary</h4>
                <p className="text-sm text-slate-700 leading-relaxed">{activeModal.fullDesc}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {activeModal.stats.map((s, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 text-center">
                    <div className="text-lg md:text-xl font-black text-blue-600">{s.val}</div>
                    <div className="text-[11px] font-bold text-slate-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Applied Technical Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModal.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
