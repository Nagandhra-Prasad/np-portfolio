import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Icosahedron, Environment } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';

function Crystal({ isDark }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.18;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.15;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <Icosahedron ref={ref} args={[1.35, 1]}>
        <MeshTransmissionMaterial
          backside
          samples={6}
          resolution={256}
          transmission={0.98}
          thickness={0.4}
          roughness={0.05}
          ior={1.5}
          chromaticAberration={0.04}
          anisotropy={0.3}
          distortion={0.15}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color={isDark ? '#4d9fff' : '#0066b1'}
        />
      </Icosahedron>
    </Float>
  );
}

const HeroScene = () => {
  const { isDark } = useTheme();

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={isDark ? 0.5 : 0.8} />
        <directionalLight position={[4, 4, 4]} intensity={isDark ? 1.2 : 0.9} color="#1c69d4" />
        <pointLight position={[-3, 2, 2]} intensity={0.6} color="#e7222e" />
        <Environment preset="city" />
        <Crystal isDark={isDark} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
