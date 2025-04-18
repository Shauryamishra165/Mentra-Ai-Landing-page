"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, MeshDistortMaterial } from "@react-three/drei"

// Subtle floating particles
function Particles({ count = 40 }) {
  const particles = useRef<any[]>([])

  useFrame(() => {
    particles.current.forEach((particle) => {
      // Very subtle movement
      particle.position.y += Math.sin(Date.now() * 0.001 + particle.userData.offset) * 0.0005
    })
  })

  return (
    <group>
      {Array.from({ length: count }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) {
              el.userData = { offset: i * 0.1 }
              particles.current[i] = el
            }
          }}
          position={[
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 10 - 5, // Keep particles behind
          ]}
        >
          <sphereGeometry args={[0.05 + Math.random() * 0.1, 16, 16]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={0.5 + Math.random() * 0.5}
            transparent
            opacity={0.3 + Math.random() * 0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

// Subtle waves in the background
function Waves() {
  const mesh = useRef<any>()

  useFrame(({ clock }) => {
    if (mesh.current) {
      // Very subtle rotation
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.02
      mesh.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.05) * 0.02
    }
  })

  return (
    <mesh ref={mesh} position={[0, 0, -10]} rotation={[0, 0, 0]}>
      <planeGeometry args={[40, 20, 32, 32]} />
      <MeshDistortMaterial
        color="#0c4a6e"
        emissive="#0ea5e9"
        emissiveIntensity={0.2}
        metalness={0.8}
        roughness={0.2}
        distort={0.3}
        speed={0.5}
      />
    </mesh>
  )
}

// Subtle glowing orbs
function GlowingOrbs() {
  const orbs = useRef<any[]>([])

  useFrame(({ clock }) => {
    orbs.current.forEach((orb, i) => {
      if (orb) {
        // Very subtle pulsing
        orb.scale.x = orb.scale.y = orb.scale.z = 1 + Math.sin(clock.getElapsedTime() * 0.5 + i * 0.2) * 0.1
      }
    })
  })

  return (
    <group>
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) orbs.current[i] = el
          }}
          position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10, -5 - Math.random() * 5]}
        >
          <sphereGeometry args={[0.5 + Math.random() * 0.5, 32, 32]} />
          <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.5} transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  )
}

export default function Background3DEffect() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <Waves />
        <Particles />
        <GlowingOrbs />
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}
