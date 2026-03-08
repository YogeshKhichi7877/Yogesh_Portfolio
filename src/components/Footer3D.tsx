import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Center, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// An abstract 3D representation of the Indian Map utilizing a creative dot/point-cloud approach
// We represent the map via a hardcoded set of normalized coordinates that form the rough silhouette of India,
// scaled and extruded to create a tech-style glowing 3D map.
const IndianMap3D = () => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // Approximate normalized map coordinates (0-1 range) to form the rough shape of India
  const mapData = useMemo(() => {
    // Basic silhouette points representing India's shape 
    // Format: [x, y]
    const rawPoints = [
      [0.2, 0.8], [0.35, 0.95], [0.45, 1.0], [0.55, 0.9], [0.5, 0.8], 
      [0.6, 0.75], [0.7, 0.75], [0.8, 0.7], [0.9, 0.65], [0.95, 0.55],
      [0.85, 0.5], [0.75, 0.55], [0.7, 0.45], [0.65, 0.35], [0.6, 0.25], 
      [0.55, 0.15], [0.5, 0.05], [0.45, 0.0], [0.4, 0.1], [0.35, 0.2], 
      [0.3, 0.3], [0.25, 0.4], [0.2, 0.5], [0.15, 0.55], [0.05, 0.6], 
      [0.1, 0.7], [0.15, 0.75], 
      // Internal fill points (randomly scattered within bounds)
      ...Array.from({ length: 150 }).map(() => [Math.random() * 0.8 + 0.1, Math.random() * 0.9 + 0.05])
    ];

    // Filter points to roughly fit within the triangular peninsula shape
    const filteredPoints = rawPoints.filter(([x, y]) => {
      // Rough bounding box checks
      if (y < 0.4 && (x < 0.3 || x > 0.7)) return false;
      if (y > 0.8 && (x < 0.2 || x > 0.6)) return false;
      return true;
    });

    return filteredPoints;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Set up instance colors (Saffron, White, Green - Indian Flag Colors)
  const colorArray = useMemo(() => {
    const colors = new Float32Array(mapData.length * 3);
    const color = new THREE.Color();
    
    mapData.forEach((_, i) => {
      // Pick color based on height/index to simulate the tricolor randomly or smoothly
      const rand = Math.random();
      if (rand > 0.66) color.setHex(0xFF9933); // Saffron
      else if (rand > 0.33) color.setHex(0xFFFFFF); // White
      else color.setHex(0x138808); // Green
      
      color.toArray(colors, i * 3);
    });
    return colors;
  }, [mapData]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3; // Gentle slow sway
    }

    if (meshRef.current) {
      mapData.forEach(([x, y], i) => {
        // Map normalize 0-1 coords to -5 to 5 world space
        const posX = (x - 0.5) * 8;
        const posY = (y - 0.5) * 8;
        
        // Add a gentle floating wave effect to the Z axis
        const posZ = Math.sin(state.clock.elapsedTime * 2 + posX + posY) * 0.2;

        dummy.position.set(posX, posY, posZ);
        
        // Pulsing scale effect
        const scale = 1 + Math.sin(state.clock.elapsedTime * 3 + i) * 0.2;
        dummy.scale.set(scale, scale, scale);
        
        dummy.updateMatrix();
        meshRef.current!.setMatrixAt(i, dummy.matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, mapData.length]}>
        {/* We use small glowing boxes/spheres for the point cloud */}
        <boxGeometry args={[0.2, 0.2, 0.2]}>
          <instancedBufferAttribute attach="attributes-color" args={[colorArray, 3]} />
        </boxGeometry>
        <meshStandardMaterial 
          vertexColors 
          emissiveIntensity={6.0}
          toneMapped={false}
          roughness={0.2}
          metalness={0.8}
        />
      </instancedMesh>
    </group>
  );
};

const Footer3D = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-100 pointer-events-none sm:pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        dpr={1}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={4} color="#ffffff" />
        <pointLight position={[0, 0, 5]} intensity={3} color="#4facfe" />
        
        <Center>
          <IndianMap3D />
        </Center>
        
        <Sparkles 
          count={40} 
          scale={12} 
          size={2} 
          speed={0.2} 
          opacity={0.8} 
          color="#FF9933" 
        />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 2 - 0.2}
          maxAzimuthAngle={0.5}
          minAzimuthAngle={-0.5}
        />
      </Canvas>
    </div>
  );
};

export default Footer3D;
