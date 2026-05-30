import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
function FloatingShape({ position, color, geometry }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {geometry === 'torus' && <torusGeometry args={[1, 0.3, 16, 32]} />}
        {geometry === 'octahedron' && <octahedronGeometry args={[0.8]} />}
        {geometry === 'icosahedron' && <icosahedronGeometry args={[0.7]} />}
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.75}
          emissive={color}
          emissiveIntensity={0.6}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  const pointsRef = useRef();

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#a78bfa"
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#06b6d4" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ec4899" />
      <pointLight position={[0, 5, 5]} intensity={0.6} color="#8b5cf6" />

      <FloatingShape position={[-4, 2, -3]} color="#8b5cf6" geometry="torus" />
      <FloatingShape position={[4, -1, -2]} color="#06b6d4" geometry="octahedron" />
      <FloatingShape position={[0, 3, -5]} color="#ec4899" geometry="icosahedron" />

      <ParticleField />
      <Stars radius={50} depth={50} count={1200} factor={4} saturation={0.3} fade speed={0.5} />
    </>
  );
}

const Scene3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none scene-bg">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Scene3D;
