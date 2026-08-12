import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, ArrowRight, Loader2 } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@vesseltsystems.com', color: '#2563EB' },
  { icon: Phone, label: 'Phone', value: '+1 (800) VESSULT', color: '#0EA5E9' },
  { icon: MapPin, label: 'Address', value: 'Innovation District, Tech City', color: '#16A34A' },
]

const inputStyle = {
  background: '#F8FAFC',
  border: '1px solid rgba(15,23,42,0.12)',
  color: '#0F172A',
  fontFamily: "'Stack Sans Text', sans-serif",
}

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', service: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
  }

  return (
    <section
      id="contact"
      className="relative section-padding overflow-hidden"
      ref={ref}
      style={{ background: '#F8FAFC', paddingTop: '110px' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(37,99,235,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="container-custom">
        {/* CTA Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-6"
            style={{
              background: 'rgba(37,99,235,0.07)',
              border: '1px solid rgba(37,99,235,0.2)',
              color: '#2563EB',
              fontFamily: "'Stack Sans Text', sans-serif",
            }}
          >
            Start Your Project
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
          >
            Let's Build{' '}
            <span style={{
              background: 'linear-gradient(135deg, #1E40AF, #2563EB, #38BDF8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Intelligent Systems
            </span>
            <br />Together
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
          >
            Ready to transform your operations with AI? Tell us about your challenge and we'll architect the solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sent ? (
              <div
                className="flex flex-col items-center justify-center text-center p-12 rounded-2xl h-full"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(22,163,74,0.25)',
                  boxShadow: '0 4px 24px rgba(22,163,74,0.08)',
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: 'rgba(22,163,74,0.1)', border: '1px solid rgba(22,163,74,0.3)' }}
                >
                  <ArrowRight size={28} style={{ color: '#16A34A' }} />
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
                >
                  Message Received!
                </h3>
                <p style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}>
                  Our team will get back to you within 24 hours with a tailored proposal.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-8 rounded-2xl"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(15,23,42,0.08)',
                  boxShadow: '0 4px 24px rgba(15,23,42,0.06)',
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-xs tracking-wider uppercase"
                      style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'rgba(37,99,235,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.08)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(15,23,42,0.12)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-xs tracking-wider uppercase"
                      style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                      className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'rgba(37,99,235,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.08)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(15,23,42,0.12)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs tracking-wider uppercase"
                    style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'rgba(37,99,235,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.08)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(15,23,42,0.12)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs tracking-wider uppercase"
                    style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
                  >
                    Service Interest
                  </label>
                  <select
                    value={form.service}
                    onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 appearance-none"
                    style={{ ...inputStyle, color: form.service ? '#0F172A' : '#94A3B8' }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(37,99,235,0.4)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(15,23,42,0.12)' }}
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="vision">Computer Vision</option>
                    <option value="edge">Edge AI</option>
                    <option value="iot">Industrial IoT</option>
                    <option value="embedded">Embedded Systems</option>
                    <option value="robotics">Robotics</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs tracking-wider uppercase"
                    style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
                  >
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    placeholder="Describe your challenge, goals, and timeline..."
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'rgba(37,99,235,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.08)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(15,23,42,0.12)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm mt-2"
                  style={{
                    background: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
                    color: '#FFFFFF',
                    boxShadow: '0 4px 20px rgba(37,99,235,0.3)',
                    fontFamily: "'Stack Sans Text', sans-serif",
                    letterSpacing: '0.02em',
                  }}
                  whileHover={{ scale: 1.02, boxShadow: '0 6px 28px rgba(37,99,235,0.45)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sending ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "'Stack Sans Text', sans-serif", color: '#0F172A' }}
              >
                Get in Touch
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                Ready to start? Have a question? Our engineering team responds within 24 hours. For urgent inquiries, reach us directly.
              </p>
            </div>

            {/* Contact cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 p-5 rounded-xl group"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid rgba(15,23,42,0.08)',
                      boxShadow: '0 2px 10px rgba(15,23,42,0.04)',
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    whileHover={{ borderColor: `${info.color}30`, x: 4, boxShadow: `0 4px 20px ${info.color}10` }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${info.color}0D`,
                        border: `1px solid ${info.color}25`,
                      }}
                    >
                      <Icon size={20} style={{ color: info.color }} />
                    </div>
                    <div>
                      <div
                        className="text-xs tracking-wider uppercase mb-0.5"
                        style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
                      >
                        {info.label}
                      </div>
                      <div
                        className="text-sm font-medium"
                        style={{ color: '#0F172A', fontFamily: "'Stack Sans Text', sans-serif" }}
                      >
                        {info.value}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Response time card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: 'rgba(37,99,235,0.05)',
                border: '1px solid rgba(37,99,235,0.15)',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: '#22C55E', boxShadow: '0 0 6px #22C55E' }}
                />
                <span
                  className="text-sm font-semibold"
                  style={{ color: '#0F172A', fontFamily: "'Stack Sans Text', sans-serif" }}
                >
                  Team Online
                </span>
              </div>
              <p
                className="text-sm"
                style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                Average response time: <span style={{ color: '#2563EB', fontWeight: 600 }}>under 2 hours</span>. We typically respond the same business day.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
