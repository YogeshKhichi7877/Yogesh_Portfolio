// import * as THREE from 'three';

// export const initThreeJS = () => {
//   // Hero Scene - Floating Geometric Shapes
//   const initHeroScene = () => {
//     const container = document.querySelector('#threejs-hero') as HTMLElement;
//     const canvas = document.querySelector('#hero-canvas') as HTMLCanvasElement;
    
//     if (!container || !canvas) return;
    
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    
//     const renderer = new THREE.WebGLRenderer({ 
//       canvas, 
//       antialias: true, 
//       alpha: true,
//       powerPreference: 'high-performance'
//     });
    
//     renderer.setSize(container.clientWidth, container.clientHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.setClearColor(0x000000, 0);

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0x4f46e5, 1);
//     directionalLight.position.set(10, 10, 5);
//     scene.add(directionalLight);

//     const pointLight = new THREE.PointLight(0x8b5cf6, 0.8, 100);
//     pointLight.position.set(-10, -10, -5);
//     scene.add(pointLight);

//     // Create floating geometric shapes
//     const shapes: THREE.Mesh[] = [];
    
//     // Torus Knot
//     const torusKnotGeometry = new THREE.TorusKnotGeometry(8, 3, 100, 16);
//     const torusKnotMaterial = new THREE.MeshPhongMaterial({ 
//       color: 0x4f46e5,
//       transparent: true,
//       opacity: 0.7,
//       wireframe: false
//     });
//     const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
//     torusKnot.position.set(-30, 10, -20);
//     scene.add(torusKnot);
//     shapes.push(torusKnot);

//     // Dodecahedron
//     const dodecahedronGeometry = new THREE.DodecahedronGeometry(12);
//     const dodecahedronMaterial = new THREE.MeshPhongMaterial({ 
//       color: 0x8b5cf6,
//       transparent: true,
//       opacity: 0.6
//     });
//     const dodecahedron = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
//     dodecahedron.position.set(40, -15, -30);
//     scene.add(dodecahedron);
//     shapes.push(dodecahedron);

//     // Icosahedron
//     const icosahedronGeometry = new THREE.IcosahedronGeometry(10);
//     const icosahedronMaterial = new THREE.MeshPhongMaterial({ 
//       color: 0x06b6d4,
//       transparent: true,
//       opacity: 0.8
//     });
//     const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
//     icosahedron.position.set(20, 25, -40);
//     scene.add(icosahedron);
//     shapes.push(icosahedron);

//     camera.position.set(0, 0, 50);

//     // Animation
//     const animate = () => {
//       requestAnimationFrame(animate);

//       shapes.forEach((shape, index) => {
//         shape.rotation.x += 0.005 + index * 0.002;
//         shape.rotation.y += 0.008 + index * 0.001;
//         shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.02;
//       });

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       const width = container.clientWidth;
//       const height = container.clientHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   };

//   // About Scene - Interactive 3D Model (Controllable Cube with Wireframe)
//   const initAboutScene = () => {
//     const container = document.querySelector('#about-threejs') as HTMLElement;
//     const canvas = document.querySelector('#about-canvas') as HTMLCanvasElement;
    
//     if (!container || !canvas) return;
    
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    
//     const renderer = new THREE.WebGLRenderer({ 
//       canvas, 
//       antialias: true, 
//       alpha: true 
//     });
    
//     renderer.setSize(container.clientWidth, container.clientHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.setClearColor(0x000000, 0);

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
//     scene.add(ambientLight);

//     const pointLight = new THREE.PointLight(0x4f46e5, 1, 100);
//     pointLight.position.set(0, 0, 20);
//     scene.add(pointLight);

//     // Create interactive 3D model - Complex geometric structure
//     const group = new THREE.Group();

//     // Main cube with wireframe
//     const cubeGeometry = new THREE.BoxGeometry(15, 15, 15);
//     const cubeMaterial = new THREE.MeshPhongMaterial({ 
//       color: 0x4f46e5,
//       transparent: true,
//       opacity: 0.3
//     });
//     const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
//     group.add(cube);

//     // Wireframe overlay
//     const wireframeGeometry = new THREE.EdgesGeometry(cubeGeometry);
//     const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x8b5cf6 });
//     const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
//     group.add(wireframe);

//     // Orbiting spheres
//     const sphereGeometry = new THREE.SphereGeometry(2, 16, 16);
//     const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0x06b6d4 });
    
//     for (let i = 0; i < 8; i++) {
//       const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
//       const angle = (i / 8) * Math.PI * 2;
//       sphere.position.set(
//         Math.cos(angle) * 25,
//         Math.sin(angle) * 25,
//         Math.sin(angle * 2) * 10
//       );
//       group.add(sphere);
//     }

//     scene.add(group);
//     camera.position.z = 50;

//     // Mouse interaction variables
//     let mouseX = 0;
//     let mouseY = 0;
//     let isMouseDown = false;
//     let targetRotationX = 0;
//     let targetRotationY = 0;

//     const handleMouseMove = (event: MouseEvent) => {
//       const rect = canvas.getBoundingClientRect();
//       mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
//       mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;

//       if (isMouseDown) {
//         targetRotationY = mouseX * Math.PI;
//         targetRotationX = mouseY * Math.PI;
//       }
//     };

//     const handleMouseDown = () => {
//       isMouseDown = true;
//       canvas.style.cursor = 'grabbing';
//     };

//     const handleMouseUp = () => {
//       isMouseDown = false;
//       canvas.style.cursor = 'grab';
//     };

//     canvas.addEventListener('mousemove', handleMouseMove);
//     canvas.addEventListener('mousedown', handleMouseDown);
//     canvas.addEventListener('mouseup', handleMouseUp);
//     canvas.addEventListener('mouseleave', handleMouseUp);
//     canvas.style.cursor = 'grab';

//     // Animation
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Smooth rotation interpolation
//       group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;
//       group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;

//       // Auto rotation when not interacting
//       if (!isMouseDown) {
//         group.rotation.x += 0.005;
//         group.rotation.y += 0.01;
//       }

//       // Animate orbiting spheres
//       const time = Date.now() * 0.001;
//       group.children.forEach((child, index) => {
//         if (index > 1) { // Skip cube and wireframe
//           const angle = (index / 8) * Math.PI * 2 + time;
//           child.position.set(
//             Math.cos(angle) * 25,
//             Math.sin(angle) * 25,
//             Math.sin(angle * 2) * 10
//           );
//         }
//       });

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       const width = container.clientWidth;
//       const height = container.clientHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       canvas.removeEventListener('mousemove', handleMouseMove);
//       canvas.removeEventListener('mousedown', handleMouseDown);
//       canvas.removeEventListener('mouseup', handleMouseUp);
//       canvas.removeEventListener('mouseleave', handleMouseUp);
//     };
//   };

//   // Education Scene - Floating Books and Academic Elements
//   const initEducationScene = () => {
//     const container = document.querySelector('#education-threejs') as HTMLElement;
//     const canvas = document.querySelector('#education-canvas') as HTMLCanvasElement;
    
//     if (!container || !canvas) return;
    
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    
//     const renderer = new THREE.WebGLRenderer({ 
//       canvas, 
//       antialias: true, 
//       alpha: true 
//     });
    
//     renderer.setSize(container.clientWidth, container.clientHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.setClearColor(0x000000, 0);

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0x4f46e5, 1);
//     directionalLight.position.set(5, 5, 5);
//     scene.add(directionalLight);

//     // Create floating books and academic elements
//     const books: THREE.Mesh[] = [];
    
//     // Book geometry
//     const bookGeometry = new THREE.BoxGeometry(3, 4, 0.5);
//     const bookMaterials = [
//       new THREE.MeshPhongMaterial({ color: 0x4f46e5 }),
//       new THREE.MeshPhongMaterial({ color: 0x8b5cf6 }),
//       new THREE.MeshPhongMaterial({ color: 0x06b6d4 }),
//       new THREE.MeshPhongMaterial({ color: 0x10b981 }),
//       new THREE.MeshPhongMaterial({ color: 0xf59e0b })
//     ];

//     // Create multiple floating books
//     for (let i = 0; i < 15; i++) {
//       const book = new THREE.Mesh(bookGeometry, bookMaterials[i % bookMaterials.length]);
//       book.position.set(
//         (Math.random() - 0.5) * 80,
//         (Math.random() - 0.5) * 60,
//         (Math.random() - 0.5) * 40
//       );
//       book.rotation.set(
//         Math.random() * Math.PI,
//         Math.random() * Math.PI,
//         Math.random() * Math.PI
//       );
//       scene.add(book);
//       books.push(book);
//     }

//     // Add graduation cap
//     const capGeometry = new THREE.CylinderGeometry(8, 8, 1, 8);
//     const capMaterial = new THREE.MeshPhongMaterial({ color: 0x1f2937 });
//     const cap = new THREE.Mesh(capGeometry, capMaterial);
//     cap.position.set(0, 0, 0);
//     scene.add(cap);

//     // Add cap top (square)
//     const capTopGeometry = new THREE.BoxGeometry(12, 0.2, 12);
//     const capTop = new THREE.Mesh(capTopGeometry, capMaterial);
//     capTop.position.set(0, 0.6, 0);
//     scene.add(capTop);

//     // Add tassel
//     const tasselGeometry = new THREE.CylinderGeometry(0.1, 0.3, 3, 8);
//     const tasselMaterial = new THREE.MeshPhongMaterial({ color: 0xfbbf24 });
//     const tassel = new THREE.Mesh(tasselGeometry, tasselMaterial);
//     tassel.position.set(6, 2, 6);
//     scene.add(tassel);

//     camera.position.z = 60;

//     // Animation
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Animate floating books
//       books.forEach((book, index) => {
//         book.rotation.x += 0.01 + index * 0.001;
//         book.rotation.y += 0.008 + index * 0.0005;
//         book.position.y += Math.sin(Date.now() * 0.001 + index) * 0.02;
//       });

//       // Animate graduation cap
//       cap.rotation.y += 0.005;
//       capTop.rotation.y += 0.005;
//       tassel.rotation.z += 0.02;

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       const width = container.clientWidth;
//       const height = container.clientHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   };

//   // Contact Scene - Animated Globe
//   const initContactScene = () => {
//     const container = document.querySelector('#contact-threejs') as HTMLElement;
//     const canvas = document.querySelector('#contact-canvas') as HTMLCanvasElement;
    
//     if (!container || !canvas) return;
    
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    
//     const renderer = new THREE.WebGLRenderer({ 
//       canvas, 
//       antialias: true, 
//       alpha: true 
//     });
    
//     renderer.setSize(container.clientWidth, container.clientHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.setClearColor(0x000000, 0);

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0x4f46e5, 1);
//     directionalLight.position.set(5, 5, 5);
//     scene.add(directionalLight);

//     // Create wireframe sphere (globe)
//     const sphereGeometry = new THREE.SphereGeometry(15, 32, 32);
//     const sphereMaterial = new THREE.MeshPhongMaterial({ 
//       color: 0x4f46e5,
//       wireframe: true,
//       transparent: true,
//       opacity: 0.6
//     });
//     const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
//     scene.add(sphere);

//     // Add orbiting rings
//     const ringGeometry = new THREE.RingGeometry(18, 20, 32);
//     const ringMaterial = new THREE.MeshBasicMaterial({ 
//       color: 0x8b5cf6,
//       transparent: true,
//       opacity: 0.4,
//       side: THREE.DoubleSide
//     });
    
//     const ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
//     ring1.rotation.x = Math.PI / 2;
//     scene.add(ring1);

//     const ring2 = new THREE.Mesh(ringGeometry, ringMaterial);
//     ring2.rotation.z = Math.PI / 2;
//     scene.add(ring2);

//     camera.position.z = 40;

//     // Animation
//     const animate = () => {
//       requestAnimationFrame(animate);

//       sphere.rotation.y += 0.005;
//       ring1.rotation.z += 0.01;
//       ring2.rotation.x += 0.008;

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       const width = container.clientWidth;
//       const height = container.clientHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   };

//   // Initialize all scenes
//   const cleanupFunctions: (() => void)[] = [];
  
//   // Wait for DOM to be ready
//   setTimeout(() => {
//     const heroCleanup = initHeroScene();
//     const aboutCleanup = initAboutScene();
//     const educationCleanup = initEducationScene();
//     const contactCleanup = initContactScene();
    
//     if (heroCleanup) cleanupFunctions.push(heroCleanup);
//     if (aboutCleanup) cleanupFunctions.push(aboutCleanup);
//     if (educationCleanup) cleanupFunctions.push(educationCleanup);
//     if (contactCleanup) cleanupFunctions.push(contactCleanup);
//   }, 100);

//   return () => {
//     cleanupFunctions.forEach(cleanup => cleanup());
//   };
// };





































import * as THREE from 'three';

const handleResize = (container: HTMLElement, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) => {
  const width = container.clientWidth;
  const height = container.clientHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

/**
 * HERO SCENE - Objects follow mouse movement
 */
export const initHeroScene = (container: HTMLElement, canvas: HTMLCanvasElement) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);

  const shapes: THREE.Mesh[] = [];
  const geometries = [new THREE.TorusKnotGeometry(8, 2.5, 100, 16), new THREE.DodecahedronGeometry(10), new THREE.IcosahedronGeometry(12)];

  geometries.forEach((geo, i) => {
    const mat = new THREE.MeshPhongMaterial({ color: i === 0 ? 0x4f46e5 : i === 1 ? 0x8b5cf6 : 0x06b6d4, transparent: true, opacity: 0.7 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(i === 0 ? -30 : i === 1 ? 40 : 15, i === 0 ? 10 : -15, -20);
    scene.add(mesh);
    shapes.push(mesh);
  });

  scene.add(new THREE.AmbientLight(0xffffff, 0.5), new THREE.PointLight(0x4f46e5, 1.5, 100));
  camera.position.z = 60;

  // Interaction Logic
  let mouseX = 0, mouseY = 0;
  const onMouseMove = (e: MouseEvent) => {
    mouseX = (e.clientX / window.innerWidth) - 0.5;
    mouseY = (e.clientY / window.innerHeight) - 0.5;
  };
  window.addEventListener('mousemove', onMouseMove);

  const animate = () => {
    const animId = requestAnimationFrame(animate);
    shapes.forEach((shape, i) => {
      // Auto rotation + Mouse follow
      shape.rotation.x += 0.005 + (mouseY * 0.05);
      shape.rotation.y += 0.008 + (mouseX * 0.05);
      shape.position.y += Math.sin(Date.now() * 0.001 + i) * 0.02;
    });
    renderer.render(scene, camera);
    return animId;
  };

  const animId = animate();
  const resizeObserver = new ResizeObserver(() => handleResize(container, camera, renderer));
  resizeObserver.observe(container);

  return () => {
    window.removeEventListener('mousemove', onMouseMove);
    cancelAnimationFrame(animId);
    renderer.dispose();
  };
};

/**
 * ABOUT SCENE - Drag to Rotate Cube
 */
export const initAboutScene = (container: HTMLElement, canvas: HTMLCanvasElement) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const group = new THREE.Group();

  // 1. The Outer Glass Octahedron
  const outerGeo = new THREE.OctahedronGeometry(12, 0);
  const outerMat = new THREE.MeshPhongMaterial({
    color: 0x4f46e5,
    transparent: true,
    opacity: 0.2,
    flatShading: true,
  });
  const outerMesh = new THREE.Mesh(outerGeo, outerMat);

  // 2. The Wireframe Shell
  const wireframe = new THREE.LineSegments(
    new THREE.EdgesGeometry(outerGeo),
    new THREE.LineBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.5 })
  );

  // 3. The Inner Floating Core (Small glowing octahedron)
  const innerGeo = new THREE.OctahedronGeometry(5, 0);
  const innerMat = new THREE.MeshPhongMaterial({
    color: 0x06b6d4,
    emissive: 0x06b6d4,
    emissiveIntensity: 0.5,
    flatShading: true,
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);

  group.add(outerMesh, wireframe, innerMesh);
  scene.add(group);

  // Lighting
  const light1 = new THREE.PointLight(0x4f46e5, 2, 100);
  light1.position.set(20, 20, 20);
  const light2 = new THREE.PointLight(0x8b5cf6, 2, 100);
  light2.position.set(-20, -20, 20);
  scene.add(light1, light2, new THREE.AmbientLight(0xffffff, 0.4));

  camera.position.z = 45;

  // Interaction Logic
  let isDragging = false;
  let previousMouseX = 0;
  let previousMouseY = 0;
  let rotationVelocityX = 0;
  let rotationVelocityY = 0;

  const onMouseDown = (e: MouseEvent) => {
    isDragging = true;
    previousMouseX = e.clientX;
    previousMouseY = e.clientY;
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMouseX;
    const deltaY = e.clientY - previousMouseY;
    
    rotationVelocityY = deltaX * 0.005;
    rotationVelocityX = deltaY * 0.005;

    previousMouseX = e.clientX;
    previousMouseY = e.clientY;
  };

  const onMouseUp = () => { isDragging = false; };

  canvas.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);

  const animate = () => {
    const animId = requestAnimationFrame(animate);
    const time = Date.now() * 0.001;

    // Apply rotation inertia
    group.rotation.y += rotationVelocityY;
    group.rotation.x += rotationVelocityX;

    // Dampen the velocity for a smooth "spin-down" feel
    rotationVelocityX *= 0.95;
    rotationVelocityY *= 0.95;

    // Auto-drift if not being touched
    if (!isDragging) {
      group.rotation.y += 0.005;
    }

    // Independent animation for the inner core
    innerMesh.rotation.x -= 0.02;
    innerMesh.rotation.z += 0.01;
    innerMesh.position.y = Math.sin(time * 2) * 1.5; // Bobs up and down

    renderer.render(scene, camera);
    return animId;
  };

  const animId = animate();

  return () => {
    canvas.removeEventListener('mousedown', onMouseDown);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    cancelAnimationFrame(animId);
    renderer.dispose();
  };
};
/**
 * EDUCATION SCENE - Books react to Scroll
 */
export const initEducationScene = (container: HTMLElement, canvas: HTMLCanvasElement) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));

  const books: THREE.Mesh[] = [];
  const bookGeo = new THREE.BoxGeometry(3, 4, 0.5);
  for (let i = 0; i < 15; i++) {
    const book = new THREE.Mesh(bookGeo, new THREE.MeshPhongMaterial({ color: new THREE.Color(`hsl(${Math.random() * 360}, 70%, 60%)`) }));
    book.position.set((Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 20);
    scene.add(book);
    books.push(book);
  }
  camera.position.z = 40;

  // Scroll Interaction
  let scrollPos = 0;
  const onScroll = () => { scrollPos = window.scrollY; };
  window.addEventListener('scroll', onScroll);

  const animate = () => {
    const animId = requestAnimationFrame(animate);
    books.forEach((b, i) => { 
        b.rotation.x += 0.01; 
        b.position.z = Math.sin(scrollPos * 0.002 + i) * 10; // Books move forward/back on scroll
    });
    renderer.render(scene, camera);
    return animId;
  };

  const animId = animate();
  const resizeObserver = new ResizeObserver(() => handleResize(container, camera, renderer));
  resizeObserver.observe(container);

  return () => {
    window.removeEventListener('scroll', onScroll);
    cancelAnimationFrame(animId);
    renderer.dispose();
  };
};

/**
 * CONTACT SCENE - Globe follows cursor
 */
/**
 * CONTACT SCENE - Multi-colored Cyberpunk Globe
 */
export const initContactScene = (container: HTMLElement, canvas: HTMLCanvasElement) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const group = new THREE.Group();

  // 1. The Core (Deep Indigo/Dark depth)
  const coreGeo = new THREE.SphereGeometry(14, 32, 32);
  const coreMat = new THREE.MeshPhongMaterial({
    color: 0x1e1b4b, // Deep dark blue
    transparent: true,
    opacity: 0.4,
  });
  const core = new THREE.Mesh(coreGeo, coreMat);

  // 2. The Outer Wireframe (Neon Cyan)
  const wireframeGeo = new THREE.SphereGeometry(15, 32, 32);
  const wireframeMat = new THREE.MeshPhongMaterial({
    color: 0x06b6d4, // Bright Cyan
    wireframe: true,
    transparent: true,
    opacity: 0.8,
    emissive: 0x4f46e5, // Purple glow
    emissiveIntensity: 0.4
  });
  const wireframe = new THREE.Mesh(wireframeGeo, wireframeMat);

  group.add(core, wireframe);
  scene.add(group);

  // 3. Lighting - Using opposing colors to create a gradient look
  // Cyan light from the top right
  const cyanLight = new THREE.PointLight(0x00f2ff, 2, 50);
  cyanLight.position.set(20, 15, 10);
  
  // Magenta/Pink light from the bottom left
  const pinkLight = new THREE.PointLight(0xff00cc, 2, 50);
  pinkLight.position.set(-20, -15, 10);

  scene.add(cyanLight, pinkLight, new THREE.AmbientLight(0xffffff, 0.3));
  
  camera.position.z = 45;

  // Interaction Logic
  let targetX = 0, targetY = 0;
  const onMouseMove = (e: MouseEvent) => {
    // Normalizing mouse coordinates
    targetX = (e.clientX / window.innerWidth - 0.5) * 1.5;
    targetY = (e.clientY / window.innerHeight - 0.5) * 1.5;
  };
  window.addEventListener('mousemove', onMouseMove);

  const animate = () => {
    const animId = requestAnimationFrame(animate);
    
    // Smooth LERP follow movement
    group.rotation.y += (targetX - group.rotation.y) * 0.05 + 0.005;
    group.rotation.x += (targetY - group.rotation.x) * 0.05;

    // Subtle "Breathing" effect for the glow
    const time = Date.now() * 0.002;
    wireframe.material.opacity = 0.6 + Math.sin(time) * 0.2;
    
    // Optional: Slow color shift for the core
    const hue = (time * 0.05) % 1;
    cyanLight.color.setHSL(hue, 0.8, 0.5);

    renderer.render(scene, camera);
    return animId;
  };

  const animId = animate();
  
  const handleResize = () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const resizeObserver = new ResizeObserver(handleResize);
  resizeObserver.observe(container);

  return () => {
    window.removeEventListener('mousemove', onMouseMove);
    cancelAnimationFrame(animId);
    resizeObserver.disconnect();
    renderer.dispose();
  };
};