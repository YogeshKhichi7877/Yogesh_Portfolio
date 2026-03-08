import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Center, Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

// Pre-load the GLB so it's cached immediately
useGLTF.preload('/yjk2.glb');

const LogoModel = () => {
  const { scene } = useGLTF('/yjk2.glb');

  // Traverse meshes and apply better material settings for studio look
  React.useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) => {
            (mat as THREE.MeshStandardMaterial).envMapIntensity = 2;
            (mat as THREE.MeshStandardMaterial).needsUpdate = true;
          });
        } else {
          (mesh.material as THREE.MeshStandardMaterial).envMapIntensity = 2;
          (mesh.material as THREE.MeshStandardMaterial).needsUpdate = true;
        }
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={1.5}
      position={[0, 0, 0]}
    />
  );
};

const ModelControls = () => {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const idleTimer = useRef<number>(0);
  const isInteracting = useRef(false);

  useFrame((_state, delta) => {
    if (!controlsRef.current) return;

    if (isInteracting.current) {
      idleTimer.current = 0;
    } else {
      idleTimer.current += delta;
      if (idleTimer.current > 2) {
        // Smoothly interpolate back to origin (front-facing view)
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
        shadows
        dpr={window.devicePixelRatio > 1 ? 1.5 : 1}
      >
        <ambientLight intensity={0.4} />

        {/* Key light — strong white from top-front */}
        <directionalLight position={[5, 10, 5]} intensity={3.5} color="#ffffff" castShadow />

        {/* Fill light — soft pink from left */}
        <directionalLight position={[-5, 5, -5]} intensity={2.5} color="#f472b6" />

        {/* Rim light — cyan from above */}
        <spotLight position={[0, 12, 0]} intensity={5} angle={0.4} penumbra={1} color="#38bdf8" castShadow />

        {/* Ground bounce — purple from below */}
        <spotLight position={[0, -10, 2]} intensity={3} angle={0.5} penumbra={1} color="#a855f7" />

        {/* Back highlight */}
        <pointLight position={[0, 0, -8]} intensity={2} color="#818cf8" />

        <Suspense fallback={null}>
          <Center>
            <LogoModel />
          </Center>
        </Suspense>

        <Environment preset="studio" />
        <ModelControls />
      </Canvas>
    </div>
  );
};

export default About3D;

