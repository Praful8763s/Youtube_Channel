"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, Text3D, Float, PresentationControls, Html } from "@react-three/drei"
import { Vector3 } from "three"

function TechModel({ position, scale, rotation, color, onClick, isActive, name }) {
  const ref = useRef()

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.5
      if (isActive) {
        ref.current.scale.lerp(new Vector3(scale * 1.2, scale * 1.2, scale * 1.2), 0.1)
      } else {
        ref.current.scale.lerp(new Vector3(scale, scale, scale), 0.1)
      }
    }
  })

  return (
    <group position={position} ref={ref} onClick={onClick} rotation={rotation}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      <Html position={[0, 1.5, 0]} center distanceFactor={8}>
        <div className="bg-black/80 text-white px-2 py-1 rounded text-sm whitespace-nowrap">{name}</div>
      </Html>
    </group>
  )
}

function FloatingText({ text, position, color }) {
  const ref = useRef()

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.2
    }
  })

  return (
    <group ref={ref} position={position}>
      <Text3D font="/fonts/Inter_Bold.json" size={0.5} height={0.1} curveSegments={12}>
        {text}
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Text3D>
    </group>
  )
}

function Scene() {
  const [activeIndex, setActiveIndex] = useState(null)
  const { camera } = useThree()

  const technologies = [
    { name: "AI", color: "#4285F4", position: [-3, 0, 0], rotation: [0.5, 0.5, 0] },
    { name: "Blockchain", color: "#EA4335", position: [0, 0, 0], rotation: [0.7, 0.7, 0] },
    { name: "Web3", color: "#FBBC05", position: [3, 0, 0], rotation: [0.3, 0.9, 0] },
  ]

  useEffect(() => {
    // Set initial camera position
    camera.position.set(0, 2, 8)
  }, [camera])

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

      <PresentationControls
        global
        zoom={0.8}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          {technologies.map((tech, index) => (
            <TechModel
              key={tech.name}
              name={tech.name}
              position={tech.position}
              rotation={tech.rotation}
              scale={1}
              color={tech.color}
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
              isActive={index === activeIndex}
            />
          ))}

          <FloatingText text="Future Tech" position={[0, -2, 0]} color="#8B5CF6" />
        </Float>
      </PresentationControls>

      <Environment preset="city" />
    </>
  )
}

export function TechShowcase3D() {
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  )
}

