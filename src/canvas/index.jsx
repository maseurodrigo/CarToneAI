import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'

import Car from './Car'
import CameraRig from './CameraRig'

const CanvasModel = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 0], fov: 30 }} gl={{ preserveDrawingBuffer: true }} className='w-full max-w-full h-full transition-all ease-in'>
      <ambientLight intensity={0.5} />
      <Environment preset='city'/>
      <CameraRig>
        <Center>
          <Car/>
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel