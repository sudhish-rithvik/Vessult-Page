import { motion } from 'framer-motion'
import { ExternalLink, MessageCircle, BookOpen, Play } from 'lucide-react'
import { Logo } from '../ui/Logo'

const footerLinks = {
  Company: ['About Us', 'Team', 'Careers', 'Blog', 'Press Kit'],
  Solutions: ['Computer Vision', 'Edge AI', 'Industrial IoT', 'Embedded Systems', 'Robotics'],
  Industries: ['Manufacturing', 'Healthcare', 'Retail', 'Automotive', 'Agriculture'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export function Footer() {
  return (
    <footer
      className="relative pt-20 pb-8 overflow-hidden"
      style={{
        background: '#F8FAFC',
        borderTop: '1px solid rgba(37,99,235,0.1)',
      }}
    >
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 30% at 50% 0%, rgba(37,99,235,0.03) 0%, transparent 60%)' }}
      />

      <div className="container-custom relative z-10">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo size="md" useImage={true} />
            </div>

            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: '#64748B', fontFamily: "'Stack Sans Text', sans-serif" }}
            >
              Engineering Intelligent Vision. Transforming industries through AI, Computer Vision, and Edge Intelligence.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { Icon: ExternalLink, href: '#' },
                { Icon: MessageCircle, href: '#' },
                { Icon: BookOpen, href: '#' },
                { Icon: Play, href: '#' },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(37,99,235,0.15)',
                    color: '#94A3B8',
                  }}
                  whileHover={{
                    borderColor: 'rgba(37,99,235,0.4)',
                    color: '#2563EB',
                    boxShadow: '0 0 12px rgba(37,99,235,0.15)',
                    y: -2,
                  }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-sm font-semibold mb-4"
                style={{ color: '#0F172A', fontFamily: "'Stack Sans Text', sans-serif" }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200"
                      style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
                      onMouseEnter={e => { (e.target as HTMLElement).style.color = '#2563EB' }}
                      onMouseLeave={e => { (e.target as HTMLElement).style.color = '#94A3B8' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.2), rgba(56,189,248,0.2), transparent)' }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
          >
            © {new Date().getFullYear()} Vessult Systems. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#22C55E', boxShadow: '0 0 6px #22C55E' }}
            />
            <span
              className="text-xs"
              style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
            >
              All systems operational
            </span>
          </div>

          <div
            className="text-xs"
            style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
          >
            Engineering Intelligent Vision ◆ Since 2018
          </div>
        </div>
      </div>
    </footer>
  )
}
