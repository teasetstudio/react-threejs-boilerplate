import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'

const App = () => {
  return (
    <div className="App">
      <div className="w-screen h-screen">
        <Canvas
          camera={{
            near: 0.1,
            far: 1000,
            zoom: 1,
            position: [1, 3, 4],
          }}
        >
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[1, 2, 5]} />
          <Stats />
          <OrbitControls />
          <gridHelper />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    </div>
  )
}

export default App
