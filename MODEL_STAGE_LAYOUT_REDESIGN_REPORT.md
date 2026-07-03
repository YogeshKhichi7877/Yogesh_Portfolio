# Model Stage Layout Redesign Report

## Goal

Refine the portfolio layout so each approved homepage model has a dedicated open visual stage, while keeping the single global canvas architecture and the Interactive Developer OS / 3D Creative Portfolio theme.

This pass focused on layout balance, model scale, model anchoring, and text readability. It did not reintroduce multiple homepage canvases.

## Layout Changes

### Hero

- Kept a clean two-column hero layout.
- Reduced text column width to keep the headline and CTAs away from the model.
- Added a transparent right-side model stage using `ModelStageSlot`.
- Removed the visible rectangular visual placeholder.
- Hero model composition is now anchored to the right-side stage.

Model behavior:

- `hero-laptop.glb` is the main object.
- `keyboard.glb` and `mouse.glb` are secondary props.
- Keyboard and mouse scales were reduced so they no longer dominate the laptop.
- Added a subtle neon ring/platform below the setup inside the global canvas.

### About

- Kept content on the left and created a dedicated avatar stage on the right.
- Removed the boxed avatar placeholder.
- `developer-avatar.glb` now anchors to the transparent right-side stage.
- Added only subtle ring/glow accents through the stage slot.

### Skills

- No real 3D model is used.
- The section remains CSS/Tailwind-based with tabs, glass cards, and an orbit-style stack visual.
- It no longer participates in the global model scene.

### Projects / Case Studies

- No homepage Canvas is used.
- The global canvas no longer shows a project device model by default.
- Project sections now rely on screenshots, case-study cards, and CSS visual treatment instead of adding model clutter.

### Journey / Education

- Timeline content stays on the left.
- A dedicated rocket stage is reserved on the right.
- `journey-rocket.glb` is scaled down and anchored to that stage.
- The model is not placed behind timeline cards.

### Services

- No real 3D model is used.
- The section remains clean card-based glassmorphism with spacing and hierarchy.
- It no longer participates in the global model scene.

### Certifications

- Certification content stays on the right.
- Trophy stage is reserved on the left.
- `trophy.glb` anchors to the left-side stage and is scaled down.
- The trophy is no longer positioned behind certification cards.

### Contact

- Desktop layout is now form/content on the left and model/contact info area on the right.
- `contact-globe.glb` anchors to the right-side stage.
- `paper-plane.glb` is a small secondary accent.
- The form remains readable and does not overlap the model.

## Global Canvas Changes

- Homepage still uses only `src/components/three/GlobalGalaxyCanvas.tsx`.
- Added stage-aware placement based on transparent DOM markers: `[data-model-stage="..."]`.
- The canvas converts each stage slot's viewport center into a world-space target position.
- Models now follow actual layout stage areas instead of broad hardcoded positions.
- Active model fades and slides into its stage.
- Previous models fade out cleanly.
- Skills, projects, and services were removed from the global model scene to reduce clutter.

## Model Scale / Position Changes

| Model | Change |
| --- | --- |
| `hero-laptop.glb` | Reduced setup scale and anchored to hero stage |
| `keyboard.glb` | Reduced significantly; placed in front of laptop |
| `mouse.glb` | Reduced; placed as side prop |
| `developer-avatar.glb` | Reduced and anchored to About stage |
| `journey-rocket.glb` | Reduced and anchored beside timeline |
| `trophy.glb` | Reduced and moved to left certification stage |
| `contact-globe.glb` | Reduced and anchored to right contact stage |
| `paper-plane.glb` | Small accent near contact globe |

## Overlap Fixes

- Model sections now use transparent `ModelStageSlot` regions.
- Text cards and model stages are separated by grid columns.
- Removed visible placeholder model boxes that made the layout feel cluttered.
- Non-model sections no longer trigger model visuals.
- Mobile non-hero model stages are hidden to avoid blank gaps and overlap.

## Scroll Behavior

Models appear when their stage slot intersects the viewport:

- Hero stage: laptop, keyboard, mouse
- About stage: developer avatar
- Journey stage: rocket
- Certifications stage: trophy
- Contact stage: globe and paper plane

Only the relevant model loads/appears as its stage becomes active. Hero remains the initial model.

## Mobile Behavior

- Galaxy background stays lightweight.
- Hero model remains available on mobile.
- About, journey, certifications, and contact model stages are hidden on mobile.
- This prevents heavy objects from covering text or creating awkward vertical gaps.
- Cards and content remain the priority on mobile.

## Files Changed

### Added

- `src/components/ui/ModelStageSlot.tsx`
- `MODEL_STAGE_LAYOUT_REDESIGN_REPORT.md`

### Updated

- `src/components/three/GlobalGalaxyCanvas.tsx`
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Education.tsx`
- `src/components/sections/Certifications.tsx`
- `src/components/Contact.tsx`

## Build Status

Commands run:

```powershell
npm.cmd run build
npm.cmd run lint
```

Result:

- Build passed
- Lint passed

## Remaining Visual Concerns

- Exact final model orientation still depends on the GLB origins and dimensions.
- A live browser visual QA pass is recommended for tiny positional adjustments on the actual display size.
- Route-specific privacy, terms, and 404 canvases remain separate, but the homepage still uses one global canvas.
