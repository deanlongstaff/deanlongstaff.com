# AGENTS.md

## Project purpose

This is a personal portfolio and creative workspace. It should feel technically
capable, curious, playful, warm, and a little nostalgic rather than like a
corporate portfolio or a résumé site.

## Visual direction

The design language is **2000s-inspired skeuomorphism for the modern web**:

- Raised paper cards with bevels, highlights, inset surfaces, and tactile shadows.
- Glossy controls, chunky borders, stickers, labels, badges, and floating shapes.
- Playful asymmetry, collage layouts, and subtle movement.
- Ambient backgrounds made from layered gradients, grids, stripes, and soft colour fields.
- Fun visual details balanced with clear hierarchy, readable spacing, and accessibility.

Avoid:

- Flat, depthless sections.
- Generic SaaS landing-page layouts.
- A purple-heavy palette.
- Reusing the same card, grid, pattern, or decoration everywhere.
- Overstated claims about expertise. The voice should suggest curiosity,
  resourcefulness, and a willingness to learn whatever a problem requires.

## Palette

Use the established personal-site palette:

- Ink/navy: `#172b40`
- Warm paper: `#f7f4eb`
- Surface: `#fffefa`
- Soft blue surface: `#e5f1f1`
- Signal orange: `#ee6c4d`
- Deep orange: `#b94736`
- Cyan: `#43b9d2`
- Lemon yellow: `#f5c857`
- Coral: `#ef5b5b`

Theme tokens are defined in the stylesheet. New colours should work in both
light and dark themes and should use the existing variables or named utilities
where possible.

## Theme behaviour

- The default theme follows the operating system with `prefers-color-scheme`.
- A theme toggle provides a manual override.
- Explicit theme values are stored in `localStorage`.
- The document uses `dean-light` and `dean-dark` theme values for daisyUI.

## Styling stack

- Tailwind CSS 4 with daisyUI 5.
- React Icons for interface and technology icons.
- Native HTML elements and Tailwind utilities for layout and styling.
- daisyUI primitives are preferred for generic controls such as buttons,
  badges, cards, and related components.
- Do not reintroduce Bootstrap or another competing layout system.

## CSS organisation

Keep layout, spacing, sizing, colour, typography, and simple shadows in
component `className` values. Use CSS files when Tailwind cannot express the
requirement cleanly, including:

- Pseudo-element decorations.
- Keyframes and custom animations.
- Multi-layer backgrounds, gradient meshes, and masks.
- Per-item visual variation.
- Global base rules and theme tokens.
- Overrides required to beat a daisyUI component.

Be mindful of CSS cascade order: unlayered component rules can override
Tailwind utilities. Avoid declaring the same property in both a shared CSS rule
and a utility class. Check for daisyUI name collisions when using short,
noun-like utility classes.

Use named theme utilities instead of reaching directly for raw CSS variables.
When exact colour mixing matters, preserve the established colour-mix approach
rather than substituting an approximate opacity utility.

## Responsive design

- Use `md:` for 768px and above, and `max-md:` below 768px.
- Use the registered desktop breakpoint for wide layouts.
- Desktop compositions may use broad shells and generous breathing room.
- Mobile layouts should use full-width padded sections, stack cards, and reduce
  decorative rotations where they affect readability.
- Keep wrapped rows of cards and pills centred.
- Decorative shapes must not cover text, controls, or important parts of images.

## Content tone

Write like a capable builder who is excited by problems, not like a résumé
generator. Keep copy short, human, and occasionally funny. Emphasise curiosity,
experimentation, making things, and learning by picking up the right tool for
the job. Prefer memorable lines, labels, or stickers over dense paragraphs.

## Assets

- Reuse existing personal imagery where appropriate.
- Do not replace real photos with coloured placeholders or overlays that hide them.
- Compress new image assets appropriately and provide useful alt text.

## Verification

Before handing off changes, run:

```bash
npm run build
git diff --check
```

Do not run destructive Git commands or rewrite unrelated user changes.
