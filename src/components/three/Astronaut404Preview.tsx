import React, { Component, Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, Environment, Float, Html, OrbitControls, Sparkles, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { modelPaths } from '../../lib/site';
import { ModelFallback } from './ModelFallback';

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class Astronaut404ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ModelFallback label="Astronaut 404 model fallback" />;
    }

    return this.props.children;
  }
}

const AstronautModel = () => {
  const { scene } = useGLTF(modelPaths.astronaut404);

  useEffect(() => {
    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      child.castShadow = true;
      child.receiveShadow = true;

      const materials = Array.isArray(child.material) ? child.material : [child.material];
      materials.forEach((material) => {
        if (material && 'envMapIntensity' in material) {
          material.envMapIntensity = 1.75;
          material.needsUpdate = true;
        }
      });
    });
  }, [scene]);

  return (
    <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.38}>
      <Center>
        <primitive object={scene} scale={2.2} rotation={[0.05, -0.28, 0]} />
      </Center>
    </Float>
  );
};

const LoadingState = () => (
  <Html center>
    <div className="rounded-full border border-os-line bg-os-surface/85 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-os-muted backdrop-blur-xl">
      Locating route
    </div>
  </Html>
);

export const Astronaut404Preview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <Astronaut404ErrorBoundary>
      <div
        ref={containerRef}
        className="relative min-h-[24rem] overflow-visible"
      >
        <div className="pointer-events-none absolute inset-x-8 bottom-10 h-24 rounded-full bg-os-cyan/12 blur-3xl" />
        {shouldRender ? (
          <Canvas
            camera={{ position: [0, 0.65, 5.7], fov: 38 }}
            dpr={[1, 1.35]}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            shadows
          >
            <ambientLight intensity={0.74} />
            <directionalLight position={[4, 6, 5]} intensity={3} castShadow />
            <pointLight position={[-3, 1.4, 3]} intensity={2.4} color="#38BDF8" />
            <pointLight position={[3, -1, 2]} intensity={2.3} color="#8B5CF6" />
            <Suspense fallback={<LoadingState />}>
              <AstronautModel />
              <Sparkles count={58} scale={[4.3, 3.4, 4.3]} size={1.2} speed={0.18} opacity={0.38} color="#22D3EE" />
              <Environment preset="night" />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
          </Canvas>
        ) : (
          <ModelFallback label="Astronaut 404 preview loading area" className="absolute inset-4 min-h-0" />
        )}
      </div>
    </Astronaut404ErrorBoundary>
  );
};
