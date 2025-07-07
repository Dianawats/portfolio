import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Scene() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
      <Canvas
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 15], fov: 45 }}
      >
        <color attach="background" args={["#0F0F0F"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color="#6d45ce" />
        </mesh>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}