import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const AmbientParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 320;

  const positions = useMemo(() => {
    const values = new Float32Array(particleCount * 3);

    for (let index = 0; index < particleCount; index += 1) {
      values[index * 3] = (Math.random() - 0.5) * 9;
      values[index * 3 + 1] = (Math.random() - 0.5) * 5.4;
      values[index * 3 + 2] = -Math.random() * 4.8 - 1;
    }

    return values;
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.012;
    pointsRef.current.rotation.x += delta * 0.004;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.016} color="#22D3EE" transparent opacity={0.58} sizeAttenuation />
    </points>
  );
};

const AtmosphereRings = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.z += delta * 0.025;
  });

  return (
    <group ref={groupRef} position={[0.1, -0.25, -2.2]}>
      <mesh rotation={[Math.PI / 2.35, 0.1, 0.2]}>
        <torusGeometry args={[2.4, 0.004, 8, 160]} />
        <meshBasicMaterial color="#38BDF8" transparent opacity={0.12} />
      </mesh>
      <mesh rotation={[Math.PI / 2.8, -0.18, -0.45]} scale={1.25}>
        <torusGeometry args={[2.1, 0.004, 8, 160]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.1} />
      </mesh>
    </group>
  );
};

const GalaxyScene = () => {
  return (
    <>
      <fog attach="fog" args={['#050816', 4.5, 12]} />
      <ambientLight intensity={0.42} />
      <Stars radius={48} depth={26} count={1600} factor={2.2} saturation={0} fade speed={0.055} />
      <AmbientParticles />
      <AtmosphereRings />
    </>
  );
};

export const GlobalGalaxyCanvas = () => {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.25, 5.6], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      >
        <GalaxyScene />
      </Canvas>
    </div>
  );
};
