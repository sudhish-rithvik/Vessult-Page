import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Cpu, Gauge, Clock, ShieldCheck, Activity } from 'lucide-react'

const benchmarks = [
  {
    name: '1080p Defect Detection Latency',
    vessult: '4.2 ms',
    cloud: '140.0 ms',
    speedup: '33x Faster',
    vessultWidth: 12,
    cloudWidth: 95,
    unit: 'Lower is better (ms)',
  },
  {
    name: '1000-Unit Batch Inspection Throughput',
    vessult: '240 FPS',
    cloud: '28 FPS',
    speedup: '8.5x Higher',
    vessultWidth: 95,
    cloudWidth: 20,
    unit: 'Higher is better (FPS)',
  },
  {
    name: 'Embedded Memory Consumption',
    vessult: '420 MB',
    cloud: '3,800 MB',
    speedup: '9x Memory Saver',
    vessultWidth: 15,
    cloudWidth: 90,
    unit: 'Lower is better (MB)',
  },
  {
    name: 'Network Bandwidth Usage',
    vessult: '0 KB/s (Local)',
    cloud: '45,000 KB/s',
    speedup: 'Zero Bandwidth Cost',
    vessultWidth: 5,
    cloudWidth: 92,
    unit: 'Lower is better (KB/s)',
  },
]

export function BenchmarksSection() {
  const [activeModel, setActiveModel] = useState<'int8' | 'fp16'>('int8')

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span
            className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{
              background: 'rgba(37,99,235,0.08)',
              color: '#2563EB',
              border: '1px solid rgba(37,99,235,0.2)',
              fontFamily: "'Stack Sans Text', sans-serif",
            }}
          >
            Verified Runtime Metrics
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold mt-4"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
          >
            Edge vs Cloud Performance
          </h2>
          <p className="text-slate-600 mt-2 text-sm md:text-base">
            Toggle inference precision below to compare Vessult TensorRT Edge Runtime against traditional cloud REST endpoints.
          </p>

          {/* Mode Switcher Toggle */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 mt-6 gap-1">
            <button
              onClick={() => setActiveModel('int8')}
              className="px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
              style={{
                background: activeModel === 'int8' ? '#2563EB' : 'transparent',
                color: activeModel === 'int8' ? '#FFFFFF' : '#64748B',
                fontFamily: "'Stack Sans Text', sans-serif",
              }}
            >
              INT8 TensorRT (Ultra-Fast Edge)
            </button>
            <button
              onClick={() => setActiveModel('fp16')}
              className="px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
              style={{
                background: activeModel === 'fp16' ? '#2563EB' : 'transparent',
                color: activeModel === 'fp16' ? '#FFFFFF' : '#64748B',
                fontFamily: "'Stack Sans Text', sans-serif",
              }}
            >
              FP16 Precision (High Dynamic Range)
            </button>
          </div>
        </div>

        {/* Benchmark Visual Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {benchmarks.map((b, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col gap-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{b.name}</h3>
                  <div className="text-xs text-slate-500 font-medium">{b.unit}</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold w-fit">
                  {b.speedup}
                </span>
              </div>

              {/* Vessult Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-blue-600 flex items-center gap-1.5">
                    <Zap size={14} /> Vessult Edge Engine ({activeModel.toUpperCase()})
                  </span>
                  <span className="text-blue-600 font-black text-sm">{b.vessult}</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.vessultWidth}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #2563EB, #38BDF8)' }}
                  />
                </div>
              </div>

              {/* Cloud Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Cpu size={14} /> Traditional Cloud API Baseline
                  </span>
                  <span className="text-slate-500 font-bold">{b.cloud}</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.cloudWidth}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.1 + 0.2 }}
                    className="h-full rounded-full bg-slate-400"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
