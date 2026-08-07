# AGENTS.md

## Project purpose

This is Dean Longstaff's personal portfolio site. It should feel like a creative personal workspace: technically capable, curious, playful, warm, and a little nostalgic. The site is not a corporate portfolio and should not become one.

## Visual direction

The current design language is **2000s-inspired skeuomorphism for a modern web**:

- Raised paper cards with bevels, highlights, inset surfaces, and tactile shadows.
- Glossy controls, chunky borders, little stickers, labels, badges, and floating shapes.
- Playful asymmetry, rotated cards, collage layouts, and subtle movement.
- Ambient backgrounds made from layered gradients, grids, stripes, soft colour fields, and occasional dots.
- Keep the interface fun to look at, but preserve readable spacing and hierarchy.
- Use humour and curiosity rather than self-important “expert” language.

Avoid:

- Flat white sections with no material depth.
- Generic SaaS landing-page layouts.
- Excessive purple or a purple-heavy palette.
- Recreating or imitating the Binminder landing page.
- Making every section use the same card, grid, dot pattern, or decoration.
- Describing Dean as knowing everything; the intended message is that curiosity and problem-solving make it possible to learn whatever is needed.

## Palette

The personal site palette is intentionally different from Binminder:

- Ink/navy: `#172b40`
- Warm paper: `#f7f4eb`
- Surface: `#fffefa`
- Soft blue surface: `#e5f1f1`
- Signal orange: `#ee6c4d`
- Deep orange: `#b94736`
- Cyan: `#43b9d2`
- Lemon yellow: `#f5c857`
- Coral: `#ef5b5b`

Theme tokens live in `src/styles/main.css` and the matching daisyUI theme tokens live in `src/styles/index.css`. Dark mode uses navy/blue surfaces with orange, cyan, lemon, and coral accents. Do not reintroduce the previous green/purple personal-site palette.

Binminder is the exception: its featured project card intentionally retains Binminder's own green brand colours so the product is recognisable. Keep that brand treatment scoped to the Binminder spotlight.

## Theme behaviour

- The default theme follows the operating system using `prefers-color-scheme`.
- `src/components/ThemeToggle.tsx` provides the manual override.
- Explicit theme values are stored in `localStorage` under `dean-theme`.
- The document dataset uses `dean-light` and `dean-dark` for daisyUI compatibility.
- Any new colours should work in both themes and should use the existing CSS variables where possible.

## Styling stack

- Tailwind CSS 4 via `@tailwindcss/vite`.
- daisyUI 5 with custom `dean-light` and `dean-dark` themes.
- React Icons for interface and technology icons.
- Native HTML elements plus Tailwind utilities for layout.
- daisyUI primitives are preferred for generic controls: `btn`, `btn-primary`, `btn-ghost`, `btn-circle`, `badge`, `card`, and related utilities.
- Do not re-add Bootstrap. Bootstrap and React-Bootstrap have been removed intentionally because their layout/reset rules conflicted with Tailwind and caused icon/layout issues.

## CSS organisation

`src/styles/index.css` is the stylesheet entry point. It imports, in order:

1. Tailwind and daisyUI configuration.
2. `main.css` for theme tokens and global rules.
3. Component styles.
4. `Skeuo.css` last, so the tactile visual layer can intentionally override generic component rules.

Keep bespoke CSS for personality-specific details: hero portrait framing, photo rotations, background shapes, the Binminder phone preview, playful labels, duck interactions, and custom typography. Use Tailwind/daisyUI for ordinary layout and controls instead of creating another one-off abstraction.

There are some historical/reskin overrides in the section CSS files. When editing, check selector specificity—especially older ID rules such as `#skills`, which have previously overridden newer class-based rules. Prefer removing obsolete rules or using a clear final override rather than adding increasingly fragile selectors.

## Page structure

- `src/components/Home/Welcome.tsx`: hero, portrait, typewriter, personal tags.
- `src/components/Home/AboutMe.tsx`: concise biography plus DIY photo card.
- `src/components/Home/MyWork.tsx`: day-job card, “Anything is possible” manifesto, toolbox skills, GitHub activity, and duck interaction.
- `src/components/Home/SideProjects.tsx`: Binminder showcase. Keep its green product identity isolated.
- `src/components/Home/Hobbies.tsx`: centered, playful photo collage with short humorous copy.
- `src/components/Navbar.tsx`: responsive anchor navigation, theme toggle, GitHub button.
- `src/components/Footer.tsx`: social links and copyright.

## Content tone

Write like a capable builder who is excited by problems, not like a résumé generator. Good themes include:

- “Anything is possible.”
- Curiosity is the real superpower.
- Technology enables problem-solving; it is not the identity itself.
- Learning by picking up whatever tool the problem needs.
- DIY, tinkering, Rex, skiing, and remote-control projects are part of the personality.

Keep copy short, human, and occasionally funny. Prefer a memorable line, visual label, or sticker over a paragraph of explanation.

## Assets

- Existing personal photos are under `src/assets/images/`.
- `binminder-mark.svg` and `binminder-today.png` are used by the Binminder spotlight.
- Do not replace real photos with coloured placeholders or dark overlays that hide the image.
- New image assets should be compressed appropriately and have useful alt text.

## Responsive rules

- Desktop layouts can use wide shells and generous horizontal breathing room.
- The hero and navbar intentionally use a broad desktop composition; do not silently revert them to narrow `max-w-6xl` containers.
- Mobile should return to full-width padded layouts, stack cards, and remove/reduce decorative rotations where they hurt readability.
- Wrapped rows of cards/pills must remain centred; avoid a left-aligned final row.
- Decorative shapes must not cover text, controls, or important parts of photos.

## Verification

Run these before handing off changes:

```bash
npm run build
git diff --check
```

The build may report the existing Vite `configLoader: native` warning; that warning is unrelated to the visual implementation. Do not run destructive Git commands or rewrite unrelated user changes.

