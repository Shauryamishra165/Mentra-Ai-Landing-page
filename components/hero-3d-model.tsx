"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei"

function AIBrain(props: any) {
  const meshRef = useRef<any>()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <group {...props}>
      {/* Main sphere representing AI "brain" */}
      <mesh ref={meshRef} castShadow>
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshDistortMaterial
          color="#0ea5e9"
          emissive="#0ea5e9"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
          distort={0.4}
          speed={2}
        />
      </mesh>

      {/* Orbiting rings */}
      <mesh>
        <torusGeometry args={[2.5, 0.08, 16, 100]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.5} transparent opacity={0.6} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3, 0.05, 16, 100]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.5} transparent opacity={0.4} />
      </mesh>

      {/* Small orbiting particles */}
      <Float speed={5} rotationIntensity={2} floatIntensity={5}>
        <mesh position={[2, 1, 1]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
        </mesh>
      </Float>

      <Float speed={5} rotationIntensity={2} floatIntensity={5}>
        <mesh position={[-2, -1, 1]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
        </mesh>
      </Float>

      <Float speed={5} rotationIntensity={2} floatIntensity={5}>
        <mesh position={[0, 2, -1]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
        </mesh>
      </Float>
    </group>
  )
}

export default function Hero3DModel() {
  return (
    <div className="absolute inset-0 z-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <AIBrain position={[0, 0, 0]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}
