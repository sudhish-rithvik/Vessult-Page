import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
      }
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.1
      followerY += (mouseY - followerY) * 0.1
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`
      }
      requestAnimationFrame(animate)
    }

    const onMouseEnterLink = () => setIsHovering(true)
    const onMouseLeaveLink = () => setIsHovering(false)

    document.addEventListener('mousemove', onMouseMove)
    const interactives = document.querySelectorAll('a, button, [data-cursor-hover]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink)
      el.addEventListener('mouseleave', onMouseLeaveLink)
    })

    const raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Main dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[99999]"
        style={{
          background: '#38BDF8',
          boxShadow: '0 0 8px #38BDF8',
          transition: 'none',
        }}
      />
      {/* Follower ring */}
      <motion.div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[99998]"
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{ duration: 0.2 }}
        style={{
          border: '1px solid rgba(56, 189, 248, 0.6)',
          transition: 'none',
        }}
      />
    </>
  )
}
