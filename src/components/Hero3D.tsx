import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Center, Stars, useTexture, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Jupiter = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture('/jupiter.jpg');
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // Rotating about its axis
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.2) * 3;
      meshRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.2) * 3 - 2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={2.5} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          map={texture}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
};

// Several small drifting particles in the background
const Particles = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh 
          key={i} 
          position={[
            (Math.random() - 0.5) * 15, 
            (Math.random() - 0.5) * 15, 
            (Math.random() - 0.5) * 15
          ]}
          scale={Math.random() * 0.05 + 0.02}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial 
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={1}
          />
        </mesh>
      ))}
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-[110vh] pointer-events-auto cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        shadows
        dpr={1}
      >
        <ambientLight intensity={0.15} />
        <directionalLight 
          position={[10, 5, 5]} 
          intensity={3.5} 
          color="#ffffff" 
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#00f2fe" />
        
        <Suspense fallback={null}>
          <Center>
            <Jupiter />
          </Center>
        </Suspense>
        
        <Particles />
        
        <Stars radius={50} depth={50} count={5000} factor={6} saturation={1} fade speed={1.5} />
        <Sparkles count={150} scale={20} size={2.5} speed={0.4} opacity={0.6} color="#4facfe" />
        
        <Environment preset="city" />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2 + 0.3} // limit vertical rotation
          minPolarAngle={Math.PI / 2 - 0.3}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;
