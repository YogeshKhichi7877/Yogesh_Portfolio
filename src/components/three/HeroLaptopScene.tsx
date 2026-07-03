// import { Suspense, useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Center, Html, useGLTF } from '@react-three/drei';
// import * as THREE from 'three';
// import { modelPaths } from '../../lib/site';

// const LaptopModel = () => {
//   const groupRef = useRef<THREE.Group>(null);
//   const { scene } = useGLTF(modelPaths.heroLaptop);

//   useFrame(({ clock }) => {
//     if (!groupRef.current) return;
//     groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.85) * 0.035;
//     groupRef.current.rotation.y = -0.46 + Math.sin(clock.elapsedTime * 0.35) * 0.045;
//   });

//   return (
//     <group ref={groupRef} rotation={[0.08, -0.46, 0]} scale={2.35}>
//       <Center disableY>
//         <primitive object={scene} />
//       </Center>
//     </group>
//   );
// };

// const LoadingCore = () => (
//   <Html center>
//     <div className="rounded-full border border-os-cyan/30 bg-os-bg/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-os-cyan shadow-glow backdrop-blur-xl">
//       Loading 3D
//     </div>
//   </Html>
// );

// export const HeroLaptopScene = () => {
//   return (
//     <Canvas
//       camera={{ position: [0.6, 1.2, 5.2], fov: 34 }}
//       dpr={[1, 1.35]}
//       gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
//     >
//       <ambientLight intensity={0.95} />
//       <directionalLight position={[3.5, 4.2, 3]} intensity={2.1} color="#E0F2FE" />
//       <pointLight position={[-2.5, 1.8, 2.4]} intensity={2.8} color="#8B5CF6" />
//       <pointLight position={[2.8, -0.6, 2.1]} intensity={2.1} color="#22D3EE" />
//       <spotLight position={[0, 3.4, 4.6]} angle={0.38} penumbra={0.85} intensity={1.8} color="#38BDF8" />
//       <Suspense fallback={<LoadingCore />}>
//         <LaptopModel />
//       </Suspense>
//     </Canvas>
//   );
// };

// useGLTF.preload(modelPaths.heroLaptop);
















// import { Suspense, useMemo, useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Bounds, Center, Html, useGLTF } from '@react-three/drei';
// import * as THREE from 'three';
// import { modelPaths } from '../../lib/site';

// const MODEL_VISUAL_SCALE = 1;

// const LaptopModel = () => {
//   const groupRef = useRef<THREE.Group>(null);
//   const { scene } = useGLTF(modelPaths.heroLaptop);

//   const clonedScene = useMemo(() => {
//     const clone = scene.clone(true);

//     clone.traverse((child) => {
//       if (!(child instanceof THREE.Mesh)) return;

//       child.castShadow = false;
//       child.receiveShadow = false;

//       const materials = Array.isArray(child.material) ? child.material : [child.material];

//       materials.forEach((material) => {
//         if (!material) return;
//         material.needsUpdate = true;
//       });
//     });

//     return clone;
//   }, [scene]);

//   useFrame(({ clock }) => {
//     if (!groupRef.current) return;

//     groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.75) * 0.025;
//     groupRef.current.rotation.y = -0.52 + Math.sin(clock.elapsedTime * 0.28) * 0.035;
//     groupRef.current.rotation.x = 0.16 + Math.sin(clock.elapsedTime * 0.22) * 0.012;
//   });

//   return (
//     <Bounds fit clip observe margin={1.18}>
//       <Center>
//         <group
//           ref={groupRef}
//           rotation={[0.16, -0.52, 0.02]}
//           position={[0, -0.12, 0]}
//           scale={MODEL_VISUAL_SCALE}
//         >
//           <primitive object={clonedScene} />
//         </group>
//       </Center>
//     </Bounds>
//   );
// };

// const LoadingCore = () => (
//   <Html center>
//     <div className="rounded-full border border-os-cyan/30 bg-os-bg/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-os-cyan shadow-glow backdrop-blur-xl">
//       Loading 3D
//     </div>
//   </Html>
// );

// export const HeroLaptopScene = () => {
//   return (
//     <Canvas
//       className="h-full w-full"
//       camera={{ position: [1.4, 1.05, 6.5], fov: 31 }}
//       dpr={[1, 1.4]}
//       resize={{ scroll: false, debounce: { scroll: 80, resize: 0 } }}
//       gl={{
//         antialias: true,
//         alpha: true,
//         powerPreference: 'high-performance',
//       }}
//     >
//       <ambientLight intensity={0.85} />
//       <hemisphereLight args={['#E0F2FE', '#050816', 1.1]} />

//       <directionalLight
//         position={[4.5, 5, 4]}
//         intensity={2.25}
//         color="#E0F2FE"
//       />

//       <pointLight
//         position={[-3.2, 1.8, 2.4]}
//         intensity={3.1}
//         color="#8B5CF6"
//       />

//       <pointLight
//         position={[3.2, -0.4, 2.8]}
//         intensity={2.6}
//         color="#22D3EE"
//       />

//       <spotLight
//         position={[0, 4.2, 5.4]}
//         angle={0.42}
//         penumbra={0.9}
//         intensity={2}
//         color="#38BDF8"
//       />

//       <Suspense fallback={<LoadingCore />}>
//         <LaptopModel />
//       </Suspense>
//     </Canvas>
//   );
// };

// useGLTF.preload(modelPaths.heroLaptop);





















// import { Suspense, useMemo, useRef } from 'react';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { Center, Html, useGLTF ,Environment} from '@react-three/drei';
// import * as THREE from 'three';
// import { modelPaths } from '../../lib/site';

// const BASE_ROT_X = 0.22;
// const BASE_ROT_Y = -0.22;
// const BASE_ROT_Z = 0.02;

// const BASE_POS_X = 0.00;
// const BASE_POS_Y = -0.05;
// const BASE_POS_Z = 0;

// const BASE_SCALE = 1.25;

// const LaptopModel = () => {
//   const groupRef = useRef<THREE.Group>(null);
//   const { scene } = useGLTF(modelPaths.heroLaptop);
//   const { mouse } = useThree();

//   const clonedScene = useMemo(() => {
//     const clone = scene.clone(true);

//     clone.traverse((child) => {
//       if (!(child instanceof THREE.Mesh)) return;

//       child.castShadow = false;
//       child.receiveShadow = false;

//       const materials = Array.isArray(child.material)
//         ? child.material
//         : [child.material];

//       materials.forEach((material) => {
//         if (!material) return;

//         // texture color handling
//         if ('map' in material && material.map) {
//           material.map.colorSpace = THREE.SRGBColorSpace;
//           material.map.needsUpdate = true;
//         }

//         // make dark PBR models more visible
//         if ('envMapIntensity' in material) {
//           material.envMapIntensity = 2.2;
//         }

//         if ('roughness' in material && typeof material.roughness === 'number') {
//           material.roughness = Math.min(material.roughness, 0.9);
//         }

//         if ('metalness' in material && typeof material.metalness === 'number') {
//           material.metalness = Math.max(material.metalness, 0.15);
//         }

//         if ('color' in material && material.color) {
//           material.color.multiplyScalar(1.08);
//         }

//         material.needsUpdate = true;
//       });
//     });

//     return clone;
//   }, [scene]);

//   useFrame(({ clock }) => {
//     if (!groupRef.current) return;

//     const t = clock.elapsedTime;

//     // very subtle floating
//     const floatY = Math.sin(t * 0.9) * 0.025;

//     // reduced mouse movement
//     const targetRotX = BASE_ROT_X + mouse.y * 0.035;
//     const targetRotY = BASE_ROT_Y + mouse.x * 0.07;
//     const targetRotZ = BASE_ROT_Z + mouse.x * 0.015;

//     const targetPosX = BASE_POS_X + mouse.x * 0.06;
//     const targetPosY = BASE_POS_Y + floatY + mouse.y * 0.025;

//     groupRef.current.rotation.x = THREE.MathUtils.lerp(
//       groupRef.current.rotation.x,
//       targetRotX,
//       0.035
//     );
//     groupRef.current.rotation.y = THREE.MathUtils.lerp(
//       groupRef.current.rotation.y,
//       targetRotY,
//       0.035
//     );
//     groupRef.current.rotation.z = THREE.MathUtils.lerp(
//       groupRef.current.rotation.z,
//       targetRotZ,
//       0.035
//     );

//     groupRef.current.position.x = THREE.MathUtils.lerp(
//       groupRef.current.position.x,
//       targetPosX,
//       0.035
//     );
//     groupRef.current.position.y = THREE.MathUtils.lerp(
//       groupRef.current.position.y,
//       targetPosY,
//       0.035
//     );
//     groupRef.current.position.z = THREE.MathUtils.lerp(
//       groupRef.current.position.z,
//       BASE_POS_Z,
//       0.035
//     );
//   });

//   return (
//     <group
//       ref={groupRef}
//       rotation={[BASE_ROT_X, BASE_ROT_Y, BASE_ROT_Z]}
//       position={[BASE_POS_X, BASE_POS_Y, BASE_POS_Z]}
//       scale={BASE_SCALE}
//     >
//       <Center disableY>
//         <primitive object={clonedScene} />
//       </Center>
//     </group>
//   );
// };

// const LoadingCore = () => (
//   <Html center>
//     <div className="rounded-full border border-os-cyan/30 bg-os-bg/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-os-cyan shadow-glow backdrop-blur-xl">
//       Loading 3D
//     </div>
//   </Html>
// );

// export const HeroLaptopScene = () => {
//   return (
//     <Canvas
//       camera={{ position: [0.45, 1.0, 5.6], fov: 31 }}
//       dpr={[1, 1.5]}
//       gl={{
//         antialias: true,
//         alpha: true,
//         powerPreference: 'high-performance',
//         toneMapping: THREE.ACESFilmicToneMapping,
//       }}
//       onCreated={({ gl }) => {
//         gl.outputColorSpace = THREE.SRGBColorSpace;
//         gl.toneMappingExposure = 1.3;
//       }}
//     >
//       {/* strong base fill */}
//       <ambientLight intensity={1.75} />
//       <hemisphereLight args={['#c4f1ff', '#0a0818', 1.65]} />

//       {/* main front light */}
//       <directionalLight
//         position={[4.5, 5.5, 5]}
//         intensity={3.2}
//         color="#ffffff"
//       />

//       {/* cool cyan fill */}
//       <directionalLight
//         position={[-4, 2.8, 3]}
//         intensity={1.8}
//         color="#4fdcff"
//       />

//       {/* violet rim */}
//       <directionalLight
//         position={[3, 1.8, -2.5]}
//         intensity={1.6}
//         color="#9d5cff"
//       />

//       {/* extra side fills */}
//       <pointLight position={[-2.8, 1.6, 2.8]} intensity={2.8} color="#8B5CF6" />
//       <pointLight position={[2.8, -0.2, 2.5]} intensity={2.4} color="#22D3EE" />
//       <pointLight position={[0, 2.4, 3.8]} intensity={2.2} color="#ffffff" />

//       {/* focused spotlight */}
//       <spotLight
//         position={[0.4, 3.8, 4.8]}
//         angle={0.42}
//         penumbra={0.9}
//         intensity={2.1}
//         color="#7dd3fc"
//       />

//       <Suspense fallback={<LoadingCore />}>
//         <LaptopModel />
//       </Suspense>
//     </Canvas>
//   );
// };

// useGLTF.preload(modelPaths.heroLaptop);


















import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Center, Environment, Html, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { modelPaths } from '../../lib/site';

const BASE_ROT_X = 0.22;
const BASE_ROT_Y = -0.32;
const BASE_ROT_Z = 0.02;

const BASE_POS_X = 0.0;
const BASE_POS_Y = -0.15;
const BASE_POS_Z = 0;

const BASE_SCALE = 7.12;

const LaptopModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPaths.heroLaptop);
  const { mouse } = useThree();

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      child.castShadow = false;
      child.receiveShadow = false;

      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];

      // materials.forEach((material) => {
      //   if (!material) return;

      //   // Keep original texture colors accurate.
      //   if ('map' in material && material.map) {
      //     material.map.colorSpace = THREE.SRGBColorSpace;
      //     material.map.needsUpdate = true;
      //   }

      //   // Keep original model material color. Do not tint/brighten manually.
      //   if ('envMapIntensity' in material) {
      //     material.envMapIntensity = 1.05;
      //   }

      //   material.needsUpdate = true;
      // });
      materials.forEach((material) => {
  if (!material) return;

  const hasTexture = 'map' in material && material.map;

  if (hasTexture) {
    material.map.colorSpace = THREE.SRGBColorSpace;
    material.map.needsUpdate = true;
  }

  if ('envMapIntensity' in material) {
    material.envMapIntensity = 0.75;
  }

  // If material has no texture and is too bright, make it graphite/silver.
  // This mainly fixes the laptop body becoming pure white.
  if (!hasTexture && 'color' in material && material.color) {
    const color = material.color as THREE.Color;
    const hsl = { h: 0, s: 0, l: 0 };
    color.getHSL(hsl);

    if (hsl.l > 0.55) {
      color.set('#6f7782');
    }
  }

  material.needsUpdate = true;
});
    });

    return clone;
  }, [scene]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const t = clock.elapsedTime;
    const floatY = Math.sin(t * 0.85) * 0.018;

    // Very subtle mouse movement only.
    const targetRotX = BASE_ROT_X + mouse.y * 0.018;
    const targetRotY = BASE_ROT_Y + mouse.x * 0.035;
    const targetRotZ = BASE_ROT_Z + mouse.x * 0.008;

    const targetPosX = BASE_POS_X + mouse.x * 0.025;
    const targetPosY = BASE_POS_Y + floatY + mouse.y * 0.012;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      0.035,
    );

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY,
      0.035,
    );

    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      targetRotZ,
      0.035,
    );

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetPosX,
      0.035,
    );

    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetPosY,
      0.035,
    );

    groupRef.current.position.z = THREE.MathUtils.lerp(
      groupRef.current.position.z,
      BASE_POS_Z,
      0.035,
    );
  });

  return (
    <group
      ref={groupRef}
      rotation={[BASE_ROT_X, BASE_ROT_Y, BASE_ROT_Z]}
      position={[BASE_POS_X, BASE_POS_Y, BASE_POS_Z]}
      scale={BASE_SCALE}
    >
      <Center disableY>
        <primitive object={clonedScene} />
      </Center>
    </group>
  );
};

const LoadingCore = () => (
  <Html center>
    <div className="rounded-full border border-os-cyan/30 bg-os-bg/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-os-cyan shadow-glow backdrop-blur-xl">
      Loading 3D
    </div>
  </Html>
);

export const HeroLaptopScene = () => {
  return (
    <Canvas
      camera={{ position: [0.45, 0.95, 6.0], fov: 31 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
      onCreated={({ gl }) => {
        gl.outputColorSpace = THREE.SRGBColorSpace;
        gl.toneMappingExposure = 0.9;
      }}
    >
      {/* Neutral base lighting */}
     <ambientLight intensity={0.75} />
<hemisphereLight args={['#ffffff', '#050816', 0.85]} />

<directionalLight
  position={[4.5, 5.5, 5]}
  intensity={1.65}
  color="#ffffff"
/>

<directionalLight
  position={[-3.5, 2.5, 3]}
  intensity={0.45}
  color="#dbeafe"
/>

<pointLight
  position={[-2.5, 1.2, 2.2]}
  intensity={0.45}
  color="#8b5cf6"
/>

<pointLight
  position={[2.5, -0.3, 2.3]}
  intensity={0.4}
  color="#22d3ee"
/>

<Environment preset="city" />

      <Suspense fallback={<LoadingCore />}>
        <LaptopModel />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload(modelPaths.heroLaptop);