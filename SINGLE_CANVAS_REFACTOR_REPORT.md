# Single Canvas Refactor Report

## Goal

Refactor the portfolio's homepage 3D architecture from multiple section-level WebGL canvases into one fixed global canvas behind the approved HTML/Tailwind website.

The visual theme remains the same: Interactive Developer OS / 3D Creative Portfolio. Sections, content, route structure, and overall styling were preserved.

## Canvas Components Before vs After

### Before

Homepage and route canvases existed across several independent components:

| Component | Purpose | Status |
| --- | --- | --- |
| `src/components/Hero3D.tsx` | Hero laptop canvas | Removed |
| `src/components/About3D.tsx` | About avatar canvas | Removed |
| `src/components/three/SmartphonePreview.tsx` | Project case study device canvas | Removed |
| `src/components/three/RocketPreview.tsx` | Education journey rocket canvas | Removed |
| `src/components/three/TrophyPreview.tsx` | Certifications trophy canvas | Removed |
| `src/components/three/ContactGlobePreview.tsx` | Contact globe canvas | Removed |
| `src/components/Footer3D.tsx` | Old unused footer canvas | Removed |
| `src/components/three/SecurityShieldPreview.tsx` | Privacy page shield canvas | Kept as route-specific |
| `src/components/three/LegalGavelPreview.tsx` | Terms page gavel canvas | Kept as route-specific |
| `src/components/three/Astronaut404Preview.tsx` | 404 page astronaut canvas | Kept as route-specific |

### After

Homepage now uses one global canvas:

| Component | Purpose |
| --- | --- |
| `src/components/three/GlobalGalaxyCanvas.tsx` | Single fixed homepage canvas for galaxy particles and section-based models |

Current Canvas audit:

- Homepage: one `<Canvas>` in `GlobalGalaxyCanvas.tsx`
- Route-specific pages: optional canvases remain only in privacy, terms, and 404 pages
- No homepage section component mounts its own `<Canvas>` anymore

## New Global Canvas Architecture

`GlobalGalaxyCanvas` is mounted once in `src/App.tsx` inside the homepage route, behind the normal HTML content.

Key architecture details:

- Fixed full-screen canvas: `fixed inset-0 z-0`
- Non-interactive canvas layer: `pointer-events-none`
- HTML sections stay above it through normal page stacking
- Uses a persistent galaxy/stars/particle background
- Uses `ScrollSceneManager` inside the same canvas to decide which section model should be visible
- Uses one shared camera, lights, fog, stars, and low-count particle field
- Avoids per-section `Environment`, `ContactShadows`, `OrbitControls`, and repeated `Sparkles`

## Section Model Mapping

| Section | Section ID | Model / Visual |
| --- | --- | --- |
| Hero | `home` | `hero-laptop.glb` |
| About | `about` | `developer-avatar.glb` |
| Skills | `skills` | Lightweight procedural constellation |
| Projects | `projects` | `smartphone.glb` |
| Journey | `education` | `journey-rocket.glb` |
| Services | `services` | Lightweight procedural constellation |
| Certifications | `certifications` | `trophy.glb` |
| Contact | `contact` | `contact-globe.glb` |

## Model Loading Strategy

- `hero-laptop.glb` is the only preloaded model.
- Other GLB models are not mounted until their associated section intersects near the viewport.
- `IntersectionObserver` updates the active scene and adds nearby sections to a loaded model set.
- `useGLTF` is only called when a model stage is allowed to mount.
- Procedural fallback shapes are available while models load or if a model errors.
- GLTF materials are configured for opacity transitions and lower-cost rendering.

## Scroll Animation Strategy

- Scroll detection uses `IntersectionObserver`, avoiding React state updates on every scroll frame.
- `useFrame` handles smooth model opacity, scale, rotation, and position interpolation inside the existing render loop.
- Models fade in/out as the active section changes.
- The galaxy background remains persistent across the whole homepage.
- Animations are intentionally subtle and avoid heavy postprocessing.

## Mobile Optimization Strategy

- Mobile mode is detected with `max-width: 767px` and `prefers-reduced-motion`.
- Mobile keeps the galaxy lightweight:
  - lower star count
  - lower particle count
  - only the hero model is shown
  - section models are disabled
- Canvas DPR is controlled with `dpr={[1, 1.5]}`.
- Shadows are disabled for the global model scenes.
- Antialiasing is disabled on the global canvas for better performance.
- No bloom/postprocessing is used.

## HTML Section Changes

The approved sections and content remain in place:

- Navbar
- Hero
- Trust / stats strip
- About
- Tech Stack Galaxy
- Featured Projects
- Project Case Studies
- Education & Journey
- Services
- Certifications
- Contact
- Footer
- Privacy
- Terms
- 404

Section-level 3D preview slots were replaced with lightweight glass/OS visual panels so the layout still feels premium without creating extra WebGL contexts.

## Files Changed

### Added

- `src/components/three/GlobalGalaxyCanvas.tsx`
- `SINGLE_CANVAS_REFACTOR_REPORT.md`

### Updated

- `src/App.tsx`
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/sections/ProjectCaseStudies.tsx`
- `src/components/Education.tsx`
- `src/components/sections/Certifications.tsx`
- `src/components/Contact.tsx`

### Removed

- `src/components/Hero3D.tsx`
- `src/components/About3D.tsx`
- `src/components/Footer3D.tsx`
- `src/components/three/SmartphonePreview.tsx`
- `src/components/three/RocketPreview.tsx`
- `src/components/three/TrophyPreview.tsx`
- `src/components/three/ContactGlobePreview.tsx`

## Build Status

Commands run:

```powershell
npm.cmd run build
npm.cmd run lint
```

Result:

- Build passed
- Lint passed
- No Vite chunk-size warning appeared

## Browser Verification Note

A local browser verification was attempted at `http://localhost:5174/`. The Vite dev server starts correctly in the foreground, but the sandboxed command timeout stops that foreground process before the browser check can complete. Production build and lint verification both passed.

## Remaining Performance Concerns

- Three.js and Drei remain the largest vendor chunk, which is expected for a 3D portfolio.
- Privacy, terms, and 404 still use route-specific canvases. They are not mounted on the homepage, so they do not contribute to homepage WebGL context count.
- If future optimization is needed, the next best step is replacing route-specific legal/404 canvases with static shared visual panels or using the global canvas system on those routes too.
