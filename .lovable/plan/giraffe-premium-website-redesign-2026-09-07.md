# Giraffe premium website redesign

## Context and goals

Replace the starter blank screen at `/` with a premium, award-level public website for Giraffe – Advertising & Marketing. The experience will present Giraffe as a creative studio through a warm editorial art direction, selected work, capabilities, and a clear project-contact path.

Design direction is locked to the selected “Gilded Editorial Gold” reference:
- Warm cream canvas with dark brand ink, clay neutrals, and gold accents.
- Editorial typography with a condensed display face, serif emphasis, and restrained sans-serif interface copy.
- Spacious, image-led case-study grid with premium rounded media frames.
- Subtle, deliberate motion and visible focus states rather than constant animation.

## Build scope

1. Rewrite `src/routes/index.tsx` as the complete public-facing Giraffe page.
2. Preserve the selected reference composition:
   - Header with brand lockup, primary navigation, and “Start a project” action.
   - Hero statement, supporting copy, work link, and scroll cue.
   - Three case-study cards.
   - Four capability blocks.
   - Wide studio image moment.
   - Dark contact call-to-action section.
   - Compact footer with social links.
3. Generate and use cohesive campaign/studio imagery for every selected visual placeholder; no placeholder blocks will ship.
4. Use semantic design tokens in `src/styles.css` for the palette, typography, radii, borders, and motion, keeping component markup token-driven.
5. Load the chosen web fonts through the root route head rather than CSS URL imports.
6. Add accessible keyboard and focus-visible behavior, descriptive image alt text, semantic sections/headings, high-contrast text, responsive layouts, and reduced-motion fallbacks.
7. Add unique route metadata for `/` including title, description, Open Graph, and Twitter card values.
8. Validate the finished page at desktop and mobile widths, including navigation anchors, contact links, image rendering, focus states, and absence of runtime errors.

## Content and edge cases

- Use concise, confident agency copy aligned to advertising, campaigns, film, identity, digital, and motion.
- Treat the current starter content as disposable; the page should not retain the blank-page marker or starter metadata.
- Keep long project names, descriptions, and narrow mobile layouts from overflowing.
- Use graceful image loading and meaningful empty/fallback behavior if an image cannot load.
- Avoid introducing authentication, dashboard workflows, or backend persistence because this request is presentation-only.

## Technical notes

- The implementation will stay within the existing TanStack Start route structure.
- `src/routes/__root.tsx` will be updated only where needed for shared font links or global metadata support; the leaf route will own its page-specific metadata.
- `src/styles.css` will receive the selected theme tokens and base typography/motion rules without remote `@import` statements.
- Any generated media will be stored as project assets and imported into the page.
