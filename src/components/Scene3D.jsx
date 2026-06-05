import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';

function FloatingShape({ position, color, geometry, scrollY = 0 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = t * 0.08 + scrollY * 0.3;
    meshRef.current.rotation.y = t * 0.06 + scrollY * 0.15;
  });

  return (
    <Float speed={0.6} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        {geometry === 'octahedron' && <octahedronGeometry args={[1]} />}
        {geometry === 'icosahedron' && <icosahedronGeometry args={[0.85]} />}
        {geometry === 'dodecahedron' && <dodecahedronGeometry args={[0.8]} />}
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.48}
        />
      </mesh>
    </Float>
  );
}

function ParticleField({ color, scrollY }) {
  const count = 60;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.1) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 26;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 26;
    }
    return pos;
  }, []);

  const pointsRef = useRef();

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.006 + scrollY * 0.2;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.07} color={color} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

function Scene({ colors, scrollY }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[8, 6, 6]} intensity={0.5} color={colors.primary} />
      <pointLight position={[-4, -2, 4]} intensity={0.35} color={colors.secondary} />

      {/* No torus / torus-knot — those read as crescent rings */}
      <FloatingShape position={[6.5, 1.5, -5]} color={colors.secondary} geometry="icosahedron" scrollY={scrollY} />
      <FloatingShape position={[5, -3, -4]} color={colors.primary} geometry="octahedron" scrollY={scrollY} />
      <FloatingShape position={[7.5, 3.5, -6]} color={colors.primary} geometry="dodecahedron" scrollY={scrollY} />
      <ParticleField color={colors.secondary} scrollY={scrollY} />
    </>
  );
}

const Scene3D = () => {
  const { isDark } = useTheme();
  const [scrollY, setScrollY] = useState(0);

  const colors = isDark
    ? { primary: '#f0a060', secondary: '#c4b5fd' }
    : { primary: '#c45c26', secondary: '#7c3aed' };

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollY(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scene-3d-bg fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [3, 0, 10], fov: 48 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <Scene colors={colors} scrollY={scrollY} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
