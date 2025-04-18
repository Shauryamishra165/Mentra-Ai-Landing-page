"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useScroll, ScrollControls, Scroll, Environment, Float, MeshDistortMaterial, Text3D } from "@react-three/drei"
import type { Group, Mesh } from "three"

// Interactive Brain Model that responds to mouse/touch
function InteractiveBrain({ scrollProgress }) {
  const brainRef = useRef<Group>()
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  // Mouse interaction
  useFrame((state) => {
    if (!brainRef.current) return

    // Rotate based on scroll position
    brainRef.current.rotation.y = scrollProgress * Math.PI * 2 + state.clock.getElapsedTime() * 0.1

    // Scale when clicked
    brainRef.current.scale.x =
      brainRef.current.scale.y =
      brainRef.current.scale.z =
        1 + (clicked ? 0.2 : 0) + (hovered ? 0.1 : 0) + Math.sin(state.clock.getElapsedTime() * 2) * 0.05

    // Subtle floating animation
    brainRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2
  })

  return (
    <group ref={brainRef}>
      {/* Main brain sphere */}
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
        castShadow
      >
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshDistortMaterial
          color={hovered ? "#22d3ee" : "#0ea5e9"}
          emissive={clicked ? "#ffffff" : "#0ea5e9"}
          emissiveIntensity={clicked ? 0.6 : 0.4}
          metalness={0.8}
          roughness={0.2}
          distort={clicked ? 0.6 : 0.4}
          speed={clicked ? 4 : 2}
        />
      </mesh>

      {/* Neural connections */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}>
          <torusGeometry args={[1.8 + i * 0.2, 0.02 + Math.random() * 0.03, 16, 100]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3 - i * 0.03}
          />
        </mesh>
      ))}

      {/* Particles */}
      {[...Array(12)].map((_, i) => (
        <Float key={i} speed={1 + Math.random() * 2} rotationIntensity={2} floatIntensity={2}>
          <mesh position={[(Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4]}>
            <sphereGeometry args={[0.05 + Math.random() * 0.1, 16, 16]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

// Text that appears at different scroll positions
function ScrollText({ position, rotation, text, scrollMin, scrollMax, scrollProgress }) {
  const textRef = useRef<Mesh>()

  useFrame(() => {
    if (!textRef.current) return

    // Show text only within scroll range
    const visibility = scrollProgress >= scrollMin && scrollProgress <= scrollMax ? 1 : 0

    // Animate opacity based on scroll position
    textRef.current.material.opacity = visibility

    // Scale based on scroll position
    const scale = visibility * (1 + Math.sin(((scrollProgress - scrollMin) / (scrollMax - scrollMin)) * Math.PI) * 0.3)
    textRef.current.scale.x = textRef.current.scale.y = textRef.current.scale.z = scale
  })

  return (
    <Text3D
      ref={textRef}
      font="/fonts/Inter_Bold.json"
      position={position}
      rotation={rotation}
      size={0.5}
      height={0.1}
      curveSegments={12}
    >
      {text}
      <meshStandardMaterial color="#ffffff" emissive="#38bdf8" emissiveIntensity={0.5} transparent opacity={0} />
    </Text3D>
  )
}

// Main scene component
function Scene() {
  const scroll = useScroll()
  const [scrollProgress, setScrollProgress] = useState(0)
  const { camera } = useThree()

  useFrame(() => {
    // Update scroll progress
    setScrollProgress(scroll.offset)

    // Move camera based on scroll
    camera.position.z = 8 - scroll.offset * 3
    camera.position.y = scroll.offset * 2
    camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <Environment preset="night" />

      <InteractiveBrain scrollProgress={scrollProgress} />

      {/* Text elements that appear at different scroll positions */}
      <ScrollText
        position={[-4, 2, 0]}
        rotation={[0, 0.5, 0]}
        text="Intelligence"
        scrollMin={0.1}
        scrollMax={0.3}
        scrollProgress={scrollProgress}
      />

      <ScrollText
        position={[3, 0, 1]}
        rotation={[0, -0.5, 0]}
        text="Innovation"
        scrollMin={0.3}
        scrollMax={0.5}
        scrollProgress={scrollProgress}
      />

      <ScrollText
        position={[-2, -2, 2]}
        rotation={[0, 0.3, 0]}
        text="Personalization"
        scrollMin={0.5}
        scrollMax={0.7}
        scrollProgress={scrollProgress}
      />

      <ScrollText
        position={[0, 0, 3]}
        rotation={[0, 0, 0]}
        text="Mentra AI"
        scrollMin={0.7}
        scrollMax={0.9}
        scrollProgress={scrollProgress}
      />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
    </>
  )
}

export default function Interactive3DExperience() {
  const [mounted, setMounted] = useState(false)

  // Only render on client side
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="h-[100vh] w-full sticky top-0 z-10">
      <Canvas>
        <ScrollControls pages={5} damping={0.2}>
          <Scene />
          <Scroll html>
            <div className="w-full h-[500vh]">
              {/* This div creates scrollable space */}
              <div className="h-screen flex items-center justify-center">
                <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl max-w-md text-center">
                  <h2 className="text-3xl font-bold mb-4">Scroll to Explore</h2>
                  <p className="text-gray-300">Interact with our AI visualization as you scroll</p>
                </div>
              </div>

              <div className="h-screen flex items-center justify-end pr-10">
                <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl max-w-md">
                  <h2 className="text-3xl font-bold mb-4">Intelligent Solutions</h2>
                  <p className="text-gray-300">Our AI models learn and adapt to your specific needs</p>
                </div>
              </div>

              <div className="h-screen flex items-center justify-start pl-10">
                <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl max-w-md">
                  <h2 className="text-3xl font-bold mb-4">Innovative Approach</h2>
                  <p className="text-gray-300">Cutting-edge technology driving business transformation</p>
                </div>
              </div>

              <div className="h-screen flex items-center justify-end pr-10">
                <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl max-w-md">
                  <h2 className="text-3xl font-bold mb-4">Personalized Experience</h2>
                  <p className="text-gray-300">Tailored AI solutions that understand your unique challenges</p>
                </div>
              </div>

              <div className="h-screen flex items-center justify-center">
                <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl max-w-md text-center">
                  <h2 className="text-3xl font-bold mb-4">Ready to Transform?</h2>
                  <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full mt-4">
                    Get Started with Mentra AI
                  </button>
                </div>
              </div>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  )
}
