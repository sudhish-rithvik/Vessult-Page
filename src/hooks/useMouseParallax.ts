import { useEffect, useRef } from 'react'

export function useMouseParallax(strength = 0.05) {
  const ref = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      ref.current = {
        x: (e.clientX / window.innerWidth - 0.5) * strength,
        y: (e.clientY / window.innerHeight - 0.5) * strength,
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [strength])

  return ref
}
