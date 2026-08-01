import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function DataFlow({ start, end, color }: { start: [number, number, number]; end: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null)
  const progress = useRef(Math.random())

  useFrame((_, delta) => {
    progress.current = (progress.current + delta * 0.4) % 1
    if (ref.current) {
      ref.current.position.x = start[0] + (end[0] - start[0]) * progress.current
      ref.current.position.y = start[1] + (end[1] - start[1]) * progress.current
      ref.current.position.z = start[2] + (end[2] - start[2]) * progress.current
    }
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.03, 6, 6]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

function PCBBoard() {
  const groupRef = useRef<THREE.Group>(null)
  const time = useRef(0)

  useFrame((_, delta) => {
    time.current += delta
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time.current * 0.2) * 0.3
      groupRef.current.rotation.x = Math.sin(time.current * 0.15) * 0.15 + 0.2
      groupRef.current.position.y = Math.sin(time.current * 0.4) * 0.1
    }
  })

  const traces = useMemo(() => {
    const t: Array<{ start: [number, number, number]; end: [number, number, number]; color: string }> = []
    const colors = ['#2563EB', '#38BDF8', '#22C55E']
    for (let i = 0; i < 12; i++) {
      t.push({
        start: [(Math.random() - 0.5) * 3, 0.12, (Math.random() - 0.5) * 2],
        end: [(Math.random() - 0.5) * 3, 0.12, (Math.random() - 0.5) * 2],
        color: colors[i % 3],
      })
    }
    return t
  }, [])

  const chipData = useMemo(() => [
    { pos: [0, 0.1, 0] as [number, number, number], size: [0.8, 0.12, 0.8] as [number, number, number], emissive: '#2563EB', intensity: 2 },
    { pos: [-1.2, 0.08, 0.5] as [number, number, number], size: [0.5, 0.1, 0.5] as [number, number, number], emissive: '#38BDF8', intensity: 1.5 },
    { pos: [1.2, 0.08, -0.5] as [number, number, number], size: [0.5, 0.1, 0.5] as [number, number, number], emissive: '#22C55E', intensity: 1.5 },
    { pos: [-1.2, 0.06, -0.8] as [number, number, number], size: [0.35, 0.08, 0.35] as [number, number, number], emissive: '#7C3AED', intensity: 1 },
    { pos: [1.0, 0.06, 0.9] as [number, number, number], size: [0.3, 0.08, 0.3] as [number, number, number], emissive: '#38BDF8', intensity: 1 },
  ], [])

  return (
    <group ref={groupRef}>
      {/* PCB base */}
      <Box args={[3.5, 0.08, 2.5]}>
        <meshStandardMaterial
          color="#0a1628"
          roughness={0.5}
          metalness={0.3}
          emissive="#051020"
          emissiveIntensity={0.5}
        />
      </Box>

      {/* Circuit traces (lines) */}
      {[...Array(8)].map((_, i) => (
        <Box
          key={`h${i}`}
          args={[0.5 + Math.random() * 1.5, 0.002, 0.008]}
          position={[
            (Math.random() - 0.5) * 2.5,
            0.042,
            (Math.random() - 0.5) * 2,
          ]}
        >
          <meshBasicMaterial color={i % 2 === 0 ? '#2563EB' : '#38BDF8'} transparent opacity={0.6} />
        </Box>
      ))}
      {[...Array(8)].map((_, i) => (
        <Box
          key={`v${i}`}
          args={[0.008, 0.002, 0.5 + Math.random() * 1.2]}
          position={[
            (Math.random() - 0.5) * 2.5,
            0.042,
            (Math.random() - 0.5) * 2,
          ]}
        >
          <meshBasicMaterial color={i % 2 === 0 ? '#22C55E' : '#2563EB'} transparent opacity={0.5} />
        </Box>
      ))}

      {/* Chips */}
      {chipData.map((chip, i) => (
        <group key={i}>
          <Box args={chip.size} position={chip.pos}>
            <meshStandardMaterial
              color="#0F172A"
              roughness={0.2}
              metalness={0.9}
              emissive={chip.emissive}
              emissiveIntensity={chip.intensity}
            />
          </Box>
          <pointLight
            position={[chip.pos[0], chip.pos[1] + 0.5, chip.pos[2]]}
            intensity={chip.intensity * 0.5}
            color={chip.emissive}
            distance={1.5}
          />
        </group>
      ))}

      {/* Capacitors */}
      {[...Array(6)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 2.5,
            0.12,
            (Math.random() - 0.5) * 1.8,
          ]}
        >
          <cylinderGeometry args={[0.04, 0.04, 0.15, 8]} />
          <meshStandardMaterial
            color="#1a2a3a"
            emissive="#38BDF8"
            emissiveIntensity={0.8}
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>
      ))}

      {/* Data flow particles */}
      {traces.map((t, i) => (
        <DataFlow key={i} start={t.start} end={t.end} color={t.color} />
      ))}

      {/* Main glow */}
      <pointLight color="#2563EB" intensity={3} distance={4} position={[0, 1, 0]} />
      <pointLight color="#38BDF8" intensity={2} distance={3} position={[0, -1, 0]} />
    </group>
  )
}

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null)
  const count = 150
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return pos
  }, [])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.05
  })

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial size={0.03} color="#2563EB" transparent opacity={0.6} sizeAttenuation />
    </Points>
  )
}

export function PCBScene() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 10, 5]} intensity={0.5} color="#ffffff" />
      <FloatingParticles />
      <PCBBoard />
    </>
  )
}
