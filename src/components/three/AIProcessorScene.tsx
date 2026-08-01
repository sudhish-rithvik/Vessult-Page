import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Box, Torus, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function CircuitRing({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * speed
      ref.current.rotation.y += delta * speed * 0.7
    }
  })
  return (
    <Torus ref={ref} args={[radius, 0.015, 8, 60]}>
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </Torus>
  )
}

function OrbitingParticles({ count, radius }: { count: number; radius: number }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      const variance = (Math.random() - 0.5) * 0.3
      pos[i * 3] = Math.cos(angle) * (radius + variance)
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.5
      pos[i * 3 + 2] = Math.sin(angle) * (radius + variance)
    }
    return pos
  }, [count, radius])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.3
  })

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial size={0.04} color="#38BDF8" transparent opacity={0.8} sizeAttenuation />
    </Points>
  )
}

function BackgroundParticles() {
  const ref = useRef<THREE.Points>(null)
  const count = 300
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    return pos
  }, [])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02
      ref.current.rotation.x += delta * 0.01
    }
  })

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial size={0.025} color="#2563EB" transparent opacity={0.5} sizeAttenuation />
    </Points>
  )
}

function ProcessorCore({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const innerRef = useRef<THREE.Group>(null)
  const time = useRef(0)

  useFrame((_, delta) => {
    time.current += delta
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15
      groupRef.current.position.y = Math.sin(time.current * 0.5) * 0.15
      // Mouse parallax
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouseY * 0.4, 0.05)
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -mouseX * 0.2, 0.05)
    }
  })

  const chipPositions = useMemo(() => {
    const positions: [number, number, number][] = []
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        positions.push([
          (i - 1.5) * 0.28,
          0.18,
          (j - 1.5) * 0.28,
        ])
      }
    }
    return positions
  }, [])

  return (
    <group ref={groupRef}>
      {/* Main processor body */}
      <Box args={[1.4, 0.22, 1.4]}>
        <meshStandardMaterial
          color="#0F172A"
          roughness={0.3}
          metalness={0.9}
          envMapIntensity={1}
        />
      </Box>

      {/* Glowing top surface */}
      <Box args={[1.38, 0.01, 1.38]} position={[0, 0.11, 0]}>
        <meshStandardMaterial
          color="#1E293B"
          roughness={0.1}
          metalness={1}
          emissive="#2563EB"
          emissiveIntensity={0.2}
        />
      </Box>

      {/* Mini chips */}
      {chipPositions.map((pos, i) => (
        <group key={i} position={pos}>
          <Box args={[0.22, 0.06, 0.22]}>
            <meshStandardMaterial
              color="#1d4ed8"
              roughness={0.2}
              metalness={0.8}
              emissive="#2563EB"
              emissiveIntensity={0.5 + Math.sin(i * 0.8) * 0.3}
            />
          </Box>
        </group>
      ))}

      {/* Center crystal */}
      <mesh ref={innerRef} position={[0, 0.22, 0]}>
        <octahedronGeometry args={[0.2, 0]} />
        <meshStandardMaterial
          color="#38BDF8"
          roughness={0}
          metalness={0.5}
          emissive="#2563EB"
          emissiveIntensity={1.5}
          transparent
          opacity={0.9}
          wireframe={false}
        />
      </mesh>

      {/* Orbiting rings */}
      <CircuitRing radius={1.0} speed={0.2} color="#2563EB" />
      <CircuitRing radius={1.3} speed={-0.15} color="#38BDF8" />
      <CircuitRing radius={1.6} speed={0.1} color="#22C55E" />

      {/* Orbiting particles */}
      <OrbitingParticles count={40} radius={1.2} />
      <OrbitingParticles count={30} radius={1.8} />

      {/* Point lights for glow */}
      <pointLight color="#2563EB" intensity={2} distance={3} position={[0, 0.5, 0]} />
      <pointLight color="#38BDF8" intensity={1.5} distance={2} position={[0, -0.5, 0]} />
    </group>
  )
}

export function AIProcessorScene({ mouseX = 0, mouseY = 0 }: { mouseX?: number; mouseY?: number }) {
  const { camera } = useThree()
  const time = useRef(0)

  useFrame((_, delta) => {
    time.current += delta
    const cam = camera as THREE.PerspectiveCamera
    cam.position.x = THREE.MathUtils.lerp(cam.position.x, mouseX * 0.5, 0.03)
    cam.position.y = THREE.MathUtils.lerp(cam.position.y, mouseY * 0.3, 0.03)
    cam.lookAt(0, 0, 0)
  })

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-3, 2, -3]} intensity={1} color="#7C3AED" distance={8} />
      <BackgroundParticles />
      <ProcessorCore mouseX={mouseX} mouseY={mouseY} />
    </>
  )
}
