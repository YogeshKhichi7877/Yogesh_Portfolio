import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Center, Environment } from '@react-three/drei';
import * as THREE from 'three';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

const AttractiveModel = () => {
  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
      <mesh scale={1.2}>
        <torusKnotGeometry args={[1, 0.3, 256, 64]} />
        <meshPhysicalMaterial 
          color="#a855f7"
          emissive="#2e1065"
          emissiveIntensity={0.2}
          metalness={0.9}
          roughness={0.1}
          transmission={0.9}
          thickness={0.5}
          ior={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
};

const ModelControls = () => {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const idleTimer = useRef<number>(0);
  const isInteracting = useRef(false);

  useFrame((state, delta) => {
    if (!controlsRef.current) return;
    
    if (isInteracting.current) {
      idleTimer.current = 0;
    } else {
      idleTimer.current += delta;
      if (idleTimer.current > 2) {
        // smoothly interpolate back to 0 azimuth and PI/2 polar (origin)
        const currentAzimuth = controlsRef.current.getAzimuthalAngle();
        const currentPolar = controlsRef.current.getPolarAngle();
        
        controlsRef.current.setAzimuthalAngle(THREE.MathUtils.lerp(currentAzimuth, 0, 0.05));
        controlsRef.current.setPolarAngle(THREE.MathUtils.lerp(currentPolar, Math.PI / 2, 0.05));
        controlsRef.current.update();
      }
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      autoRotate={false}
      onStart={() => { isInteracting.current = true; }}
      onEnd={() => { isInteracting.current = false; }}
    />
  );
};

const About3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-10 pointer-events-auto cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={1}
      >
        <ambientLight intensity={0.5} />
        {/* Studio Lightings */}
        <directionalLight position={[5, 10, 5]} intensity={3} color="#ffffff" castShadow />
        <directionalLight position={[-5, 5, -5]} intensity={2.5} color="#f472b6" />
        <spotLight position={[0, 10, 0]} intensity={4} angle={0.4} penumbra={1} color="#38bdf8" />
        <spotLight position={[0, -10, 0]} intensity={3} angle={0.4} penumbra={1} color="#a855f7" />
        
        <Center>
          <AttractiveModel />
        </Center>
        
        <Environment preset="studio" />
        <ModelControls />
      </Canvas>
    </div>
  );
};

export default About3D;
