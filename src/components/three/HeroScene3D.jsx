import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, PresentationControls } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';

const M_SPORT_PALETTE = {
  dark: {
    planet: '#1c69d4',
    ring: '#e7222e',
    ringOuter: '#4d9fff',
    emissivePlanet: 0.28,
    emissiveRing: 0.38,
    emissiveOuter: 0.18,
    ringOpacity: 0.82,
    outerOpacity: 0.48,
    metalness: 0.88,
    roughness: 0.18,
  },
  light: {
    planet: '#0066b1',
    ring: '#c41e3a',
    ringOuter: '#1c69d4',
    emissivePlanet: 0.12,
    emissiveRing: 0.18,
    emissiveOuter: 0.1,
    ringOpacity: 0.9,
    outerOpacity: 0.55,
    metalness: 0.55,
    roughness: 0.35,
  },
};

function HeroObject({ palette }) {
  const group = useRef();
  const core = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) group.current.rotation.y = t * 0.15;
    if (core.current) {
      core.current.rotation.x = t * 0.2;
      core.current.rotation.z = t * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
        <Sphere ref={core} args={[0.85, 64, 64]}>
          <MeshDistortMaterial
            color={palette.planet}
            emissive={palette.planet}
            emissiveIntensity={palette.emissivePlanet}
            roughness={palette.roughness}
            metalness={palette.metalness}
            distort={0.28}
            speed={1.8}
          />
        </Sphere>
      </Float>

      <Torus args={[1.35, 0.06, 20, 80]} rotation={[Math.PI / 2.5, 0, 0]}>
        <meshStandardMaterial
          color={palette.ring}
          emissive={palette.ring}
          emissiveIntensity={palette.emissiveRing}
          transparent
          opacity={palette.ringOpacity}
        />
      </Torus>

      <Torus args={[1.6, 0.04, 16, 80]} rotation={[Math.PI / 3, 0.4, 0]}>
        <meshStandardMaterial
          color={palette.ringOuter}
          emissive={palette.ringOuter}
          emissiveIntensity={palette.emissiveOuter}
          transparent
          opacity={palette.outerOpacity}
        />
      </Torus>
    </group>
  );
}

const HeroScene3D = () => {
  const { isDark } = useTheme();
  const palette = M_SPORT_PALETTE[isDark ? 'dark' : 'light'];

  return (
    <div className="hero-3d-wrap pointer-events-auto">
      <div className="hero-3d-frame">
        <Canvas
          camera={{ position: [0, 0, 4.2], fov: 40 }}
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 2]}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={isDark ? 0.55 : 0.85} />
          <pointLight position={[4, 4, 4]} intensity={isDark ? 1.1 : 0.85} color={palette.planet} />
          <pointLight position={[-3, -2, 3]} intensity={isDark ? 0.5 : 0.4} color={palette.ring} />
          <PresentationControls
            global={false}
            snap
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 3, Math.PI / 3]}
          >
            <HeroObject palette={palette} />
          </PresentationControls>
        </Canvas>
      </div>
      <p className="hero-3d-hint font-mono text-[0.6rem] text-slate text-center mt-3">Drag to rotate</p>
    </div>
  );
};

export default HeroScene3D;
