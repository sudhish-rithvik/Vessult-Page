import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const BLUE = "#0078FF";
const CYAN = "#00D9FF";

/**
 * 3D Silicon Chip Mesh with central pulsing core plate and 14 peripheral metallic IC pins.
 */
function ChipMesh() {
  const coreRef = useRef<THREE.Mesh>(null);

  // Animate core light pulse
  useFrame((state) => {
    if (coreRef.current) {
      const material = coreRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 1.2 + Math.sin(state.clock.elapsedTime * 2) * 0.6;
    }
  });

  const pins = Array.from({ length: 14 }, (_, i) => i);

  return (
    <group rotation={[0.5, 0.6, 0]}>
      {/* Central Chip Dark Silicon Body */}
      <mesh ref={coreRef}>
        <boxGeometry args={[2.2, 0.3, 2.2]} />
        <meshStandardMaterial
          color="#2a3341"
          metalness={0.55}
          roughness={0.2}
          emissive={BLUE}
          emissiveIntensity={1.2}
        />
      </mesh>

      {/* Glowing Cyan Top Square Plate */}
      <mesh position={[0, 0.17, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.3, 1.3]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.4} toneMapped={false} />
      </mesh>

      {/* 14 Metallic Pins on all 4 perimeter sides */}
      {pins.map((i) => {
        const t = (i / (pins.length - 1) - 0.5) * 1.9;
        return (
          <group key={i}>
            {/* Front Pins */}
            <mesh position={[t, 0, 1.28]}>
              <boxGeometry args={[0.07, 0.05, 0.4]} />
              <meshStandardMaterial color="#c9d4e2" metalness={0.4} roughness={0.25} />
            </mesh>
            {/* Back Pins */}
            <mesh position={[t, 0, -1.28]}>
              <boxGeometry args={[0.07, 0.05, 0.4]} />
              <meshStandardMaterial color="#c9d4e2" metalness={0.4} roughness={0.25} />
            </mesh>
            {/* Right Pins */}
            <mesh position={[1.28, 0, t]}>
              <boxGeometry args={[0.4, 0.05, 0.07]} />
              <meshStandardMaterial color="#c9d4e2" metalness={0.4} roughness={0.25} />
            </mesh>
            {/* Left Pins */}
            <mesh position={[-1.28, 0, t]}>
              <boxGeometry args={[0.4, 0.05, 0.07]} />
              <meshStandardMaterial color="#c9d4e2" metalness={0.4} roughness={0.25} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

/**
 * Interactive Parallax container that rotates the 3D model toward the mouse cursor.
 */
function ParallaxWrapper({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += (state.pointer.x * 0.4 - groupRef.current.rotation.y) * delta * 2;
    groupRef.current.rotation.x += (-state.pointer.y * 0.25 - groupRef.current.rotation.x) * delta * 2;
  });

  return <group ref={groupRef}>{children}</group>;
}

/**
 * Main AI Processor 3D Component
 * 
 * @param className Optional CSS class for controlling width/height (defaults to w-full h-[480px])
 */
export default function AIProcessor3D({
  className = "w-full h-[480px]",
}: {
  className?: string;
}) {
  return (
    <div className={className} style={{ position: "relative" }}>
      <Canvas
        dpr={[1, 1.7]}
        camera={{ position: [0, 0.6, 7], fov: 40 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.85} />
        <hemisphereLight args={["#8fb6ff", "#0b1220", 1.2]} />
        <directionalLight position={[4, 6, 5]} intensity={3} color="#dbe9ff" />
        <directionalLight position={[-5, 2, 6]} intensity={1.4} color="#8fb6ff" />
        <directionalLight position={[0, 2, 9]} intensity={2.4} color="#e6f0ff" />
        <pointLight position={[-4, 1, 3]} intensity={30} color={BLUE} distance={14} />
        <pointLight position={[3, -2, 2]} intensity={20} color={CYAN} distance={12} />

        <ParallaxWrapper>
          <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.7}>
            <ChipMesh />
          </Float>
        </ParallaxWrapper>
      </Canvas>
    </div>
  );
}
