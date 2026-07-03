# Model Placement Refinement Report

## Goal

Refine the existing single global canvas architecture so the galaxy remains in the background while section models appear visually anchored to their intended section areas without boxed or framed model containers.

This was a placement and integration pass only. The approved Interactive Developer OS / 3D Creative Portfolio theme, content, sections, and single homepage canvas architecture were preserved.

## Section Model Placement

| Section | Model / Visual | Placement | Boxed Container? |
| --- | --- | --- | --- |
| Hero | `hero-laptop.glb`, `keyboard.glb`, `mouse.glb` | Right-side floating developer desk setup with subtle neon platform glow | No |
| About | `developer-avatar.glb` | Right-side / right-center identity visual area | No |
| Skills | Lightweight procedural constellation | Right-side ambient tech visual through the global canvas | No |
| Projects | `smartphone.glb` | Right-side optional project/device accent through the global canvas | No |
| Journey / Education | `journey-rocket.glb` | Right-side floating growth visual next to timeline content | No |
| Services | Lightweight procedural constellation | Right-side ambient service/creative-tech visual | No |
| Certifications | `trophy.glb` | Left-side floating proof/accent visual near certification section | No |
| Contact | `contact-globe.glb`, `paper-plane.glb` | Right-side contact orbit visual; form stays on desktop left | No |
| 404 | `astronaut-404.glb` | Route-specific floating visual accent | No obvious framed model box |
| Privacy | `security-shield.glb` | Route-specific subtle floating legal/security accent | No obvious framed model box |
| Terms | `legal-gavel.glb` | Route-specific subtle floating legal accent | No obvious framed model box |

## What Changed

- Kept the single homepage `GlobalGalaxyCanvas`.
- Removed the visible placeholder model panels from hero, about, projects/case studies, journey, certifications, and contact.
- Converted model areas into transparent composition space with only subtle glow/ring accents.
- Made key homepage section backgrounds transparent so the fixed galaxy canvas and active model remain visible.
- Added hero composition props:
  - laptop as the main object
  - keyboard placed in front
  - mouse placed to the side
  - subtle neon platform/ring below
- Added contact composition props:
  - contact globe as the main object
  - paper plane as a secondary accent
- Moved trophy placement to the left side to match the certification layout.
- Reordered the desktop contact layout so the free-floating model appears on the right while the form stays clean on the left.
- Removed framed container styling from the privacy, terms, and 404 route-specific model previews.

## Mobile Behavior

- The galaxy background remains lightweight on mobile.
- Homepage mobile mode continues to restrict section model rendering to the hero scene only.
- Other homepage section models are disabled on mobile to avoid overlap and performance cost.
- Text/content remains above the canvas and avoids relying on models for readability.
- Route-specific models still have fallback behavior if a GLB fails.

## Lazy Loading Behavior

- The global canvas still preloads only the hero laptop.
- Hero companion props (`keyboard.glb`, `mouse.glb`) load with the hero composition because they are part of the first-viewport setup.
- Other homepage GLB models mount only after their section is near/inside the viewport via `IntersectionObserver`.
- Procedural fallback shapes remain available for model load failure.
- Route-specific previews lazy-render when their preview area intersects.

## Files Changed

### Updated

- `src/components/three/GlobalGalaxyCanvas.tsx`
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Projects.tsx`
- `src/components/sections/TechStackGalaxy.tsx`
- `src/components/sections/ProjectCaseStudies.tsx`
- `src/components/Education.tsx`
- `src/components/sections/Services.tsx`
- `src/components/sections/Certifications.tsx`
- `src/components/Contact.tsx`
- `src/components/three/SecurityShieldPreview.tsx`
- `src/components/three/LegalGavelPreview.tsx`
- `src/components/three/Astronaut404Preview.tsx`

### Added

- `MODEL_PLACEMENT_REFINEMENT_REPORT.md`

## Build Status

Commands run:

```powershell
npm.cmd run build
npm.cmd run lint
```

Result:

- Build passed
- Lint passed

## Remaining Design Limitations

- Exact 3D composition depends on each GLB asset's internal origin, dimensions, and orientation. The current positions are tuned from code-level placement, but a live visual QA pass may still be useful for tiny adjustments.
- Homepage uses one global canvas as required. Privacy, terms, and 404 still use route-specific canvases, but those pages are separate routes and do not add homepage WebGL contexts.
- On mobile, most section models are intentionally disabled for performance and readability.
