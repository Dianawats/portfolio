import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'

export default function DebugScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box>
        <meshStandardMaterial color="hotpink" />
      </Box>
      <OrbitControls />
    </Canvas>
  )
}