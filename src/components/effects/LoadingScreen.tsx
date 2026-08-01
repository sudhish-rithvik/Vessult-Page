'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '../ui/Logo'

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setVisible(false)
            setTimeout(onComplete, 600)
          }, 300)
          return 100
        }
        return prev + Math.random() * 12 + 3
      })
    }, 80)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#050816' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Animated grid background */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          {/* Glow orb */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(37,99,235,0.12) 0%, transparent 70%)',
            }}
          />

          <motion.div
            className="relative flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <motion.div
              className="flex flex-col items-center justify-center"
              animate={{ filter: ['drop-shadow(0 0 15px rgba(37,99,235,0.5))', 'drop-shadow(0 0 30px rgba(56,189,248,0.8))', 'drop-shadow(0 0 15px rgba(37,99,235,0.5))'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Logo size="lg" useImage={true} showTagline={true} />
            </motion.div>

            {/* Loading bar */}
            <div className="w-64 flex flex-col gap-2">
              <div
                className="w-full h-px overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <motion.div
                  className="h-full"
                  style={{
                    background: 'linear-gradient(90deg, #2563EB, #38BDF8)',
                    boxShadow: '0 0 10px #38BDF8',
                  }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
              <div className="flex justify-between items-center">
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
                >
                  Initializing
                </span>
                <span
                  className="text-xs font-mono"
                  style={{ color: '#38BDF8' }}
                >
                  {Math.min(Math.floor(progress), 100)}%
                </span>
              </div>
            </div>

            {/* Tagline */}
            <motion.p
              className="text-xs tracking-[0.4em] uppercase"
              style={{ color: '#94A3B8', fontFamily: "'Stack Sans Text', sans-serif" }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Engineering Intelligent Vision
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
