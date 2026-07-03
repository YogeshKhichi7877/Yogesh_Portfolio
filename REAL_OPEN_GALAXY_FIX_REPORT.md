# Real Open Galaxy Fix Report

## Summary

This pass made the homepage read as one continuous galaxy scene instead of a stack of boxed slides. The shared galaxy is now mounted once at the home route level, section shells no longer force clipping, and section-level local backgrounds were removed from the main homepage sections.

## Exact wrappers/classes removed or reworked

- Reworked `src/components/layout/SectionShell.tsx`
  - Removed the default section-wide `overflow-hidden`.
  - Kept section id, spacing, max-width wrapper, heading, eyebrow, title, and description.
  - SectionShell no longer behaves like a clipping slab.
- Reworked homepage root in `src/App.tsx`
  - Replaced direct `GlobalGalaxyCanvas` mount with `HomeGalaxyBackground`.
  - The background is mounted once before `Navigation`, `main`, and `Footer`.
- Removed repeated section-level background layers from active section code:
  - `pointer-events-none absolute inset-0 -z-10` radial/grid layers in Skills, Projects, Case Studies, Education, Services, Certifications, Contact, and Footer.
  - Removed/reworked section-level `overflow-hidden bg-transparent` class usage in Skills, Projects, Case Studies, Education, Services, Certifications, and Contact.
- Reworked large opaque card surfaces:
  - `bg-[#070d1d]/80`, `bg-[#070d1d]/78`, `bg-[#070d1d]/72`, and `bg-[#070d1d]/68` active section cards were changed to lighter `bg-white/[0.045]`, `bg-white/[0.055]`, or `bg-white/[0.06]`.
  - Heavy `backdrop-blur-2xl` on active large visual cards was reduced to `backdrop-blur-md` or `backdrop-blur-sm` where appropriate.
  - Case Study outer panel was changed from `rounded-[2rem] bg-[#070d1d]/68 backdrop-blur-2xl` to a lighter floating panel.

## Shared background

- Added `src/components/layout/HomeGalaxyBackground.tsx`.
- It mounts one fixed full-page galaxy layer with:
  - deep navy/black base
  - shared Three.js star canvas
  - visible CSS star fields
  - cyan, blue, violet, and magenta nebula glows
  - faint full-page orbit rings
  - subtle dust/grid texture
- Updated `src/components/three/GlobalGalaxyCanvas.tsx`
  - Increased stars from `980` to `1600`.
  - Increased ambient particles from `180` to `320`.
  - Changed the canvas wrapper from `fixed` to `absolute` so `HomeGalaxyBackground` owns the fixed page layer.

## About

- Removed section-level local radial/grid backgrounds.
- Removed section-wide clipping.
- Kept a single floating text card rather than a full section slab.
- `public/about_me.png` remains the main avatar image and is large/visible.
- Avatar area has bright rings, a platform glow, code panels, crystals, and visible galaxy behind it.

## Skills

- Removed the old enclosing stage feel by keeping the skills stage background-free and `overflow-visible`.
- Skill cards now float directly over the shared galaxy.
- Orbit rings/arcs remain behind the cards without being inside a boxed panel.
- Skill cards were lightened to `bg-white/[0.065]` with `backdrop-blur-md`.

## Featured Projects

- Removed section-level local radial/grid background.
- Individual project cards remain, but their backgrounds were lightened from dark opaque slabs to transparent floating cards.
- Stars and orbit lines are visible around and between cards.

## Project Case Studies

- Kept the main case study structure and image/details layout.
- Reduced the heavy outer panel by changing the main article to a lighter translucent floating panel.
- Side arrows and preview cards remain polished and readable.

## Education / Journey

- `public/rocket.png` is visible on the right and not inside a box.
- Galaxy background is visible behind the timeline and rocket.
- Timeline cards remain readable as internal cards.
- Fixed a visual QA issue where the first timeline card text overlapped at desktop width.

## Certifications

- `public/trophy.png` is visible on the right and not inside a box.
- Galaxy background is visible behind trophy and cards.
- Certification cards remain readable.
- Fixed a visual QA issue where the certification card grid was too narrow and clipped text.

## Contact

- Contact now has three floating desktop areas:
  - left contact info
  - center form card
  - right globe visual
- Rebuilt `ContactGlobeVisual` into a brighter procedural globe with:
  - glowing sphere
  - longitude/latitude lines
  - orbit rings
  - neon platform
  - cyan/violet glow
- The globe is clearly visible on desktop and no longer reads as an empty right column.

## Footer

- Removed footer-local section background overlays.
- Footer remains readable over the shared galaxy.
- Preview cards are floating cards, not a massive footer slab.
- Mini globe was strengthened with brighter rings/lines.

## Files changed in this pass

- `src/App.tsx`
- `src/components/layout/HomeGalaxyBackground.tsx`
- `src/components/layout/SectionShell.tsx`
- `src/components/three/GlobalGalaxyCanvas.tsx`
- `src/components/About.tsx`
- `src/components/sections/TechStackGalaxy.tsx`
- `src/components/Projects.tsx`
- `src/components/sections/ProjectCaseStudies.tsx`
- `src/components/Education.tsx`
- `src/components/sections/Services.tsx`
- `src/components/sections/Certifications.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/components/ui/ReferenceVisuals.tsx`

## Verification

- `npm.cmd run build` passed.
- `npm.cmd run lint` passed.
- Local visual check completed at `http://127.0.0.1:5177/`.
- Checked rendered About, Skills, Featured Projects, Case Studies, Education, Services, Certifications, Contact, and Footer.

## Remaining issues

- No blocking issues found after the second build/lint pass and visual check.
- Existing commented-out legacy component versions still exist in several files from earlier work; they are not active render paths, but they make future audits noisier.
