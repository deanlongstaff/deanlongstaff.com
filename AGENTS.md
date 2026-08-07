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

### Theme tokens

The palette and typefaces are registered as Tailwind theme tokens in
`index.css`, so markup reads `text-muted bg-surface font-mono`, not
`text-[var(--muted)]`. Use the named utilities:

| Token | Utility | Raw variable |
|---|---|---|
| ink / muted | `text-ink` `text-muted` | `--ink` `--muted` |
| paper / surface / surface-soft | `bg-paper` `bg-surface` `bg-surface-soft` | `--paper` … |
| line | `border-line` | `--line` |
| signal / signal-deep | `text-signal` `bg-signal` | `--primary-color` `--primary-deep` |
| aqua / sun / coral | `text-aqua` `bg-sun` | `--secondary-color` `--sun` `--coral` |
| navy / cream / mist / brick / bone | `text-navy` `bg-brick` | fixed, theme-independent |
| bin / bin-deep / bin-ink | `bg-bin` | Binminder brand green only |
| type | `font-mono` `font-display` | DM Mono / Space Grotesk |

They indirect through the raw variables in `main.css`, so light/dark switching
still happens there. Add a token rather than reaching for `[var(--x)]` again.

Note the opacity shorthand (`bg-signal/14`) mixes in **oklab**, while the
existing tints use `color-mix(in srgb, …)`. Those are not the same colour, so
tints stay as arbitrary values where the exact original shade matters.

**Tailwind is the default. CSS is the exception.** Layout, spacing, sizing,
colour, type and simple shadows belong in the component's `className`. A rule
only earns a place in a `.css` file when Tailwind genuinely cannot express it:

- `::before` / `::after` decoration with `content` (the section stickers, the
  "THE DAY JOB" tab, the hobby photo labels).
- `@keyframes` and the animations that use them.
- Multi-layer background paints, gradient meshes and `mask-image`.
- Per-index variation, such as the scattered angles on the skill pills.
- Base and theme rules with no element to attach to (`:root` tokens, `body`).
- Overrides that must beat a daisyUI component (see below).

### Cascade and utility traps

Each of these caused a real regression during the Tailwind migration, and each
one fails *silently* - the class is present and simply does nothing.

1. **Plain CSS beats Tailwind utilities.** Anything in a `.css` file outside a
   `@layer` outranks `@layer utilities`. So if a bespoke class sets
   `margin-bottom`, an `mb-3` on the same element is ignored. Do not declare a
   property in CSS *and* in Tailwind for the same element. Where a shared class
   needs different values per call site, leave the property out of the CSS rule
   entirely and set it in the markup.
   - Base element styles therefore belong in `@layer base`. `a { color: inherit }`
     unlayered defeats every text-colour utility on every link in the site,
     which is why link colours used to need `!important`.
2. **Tailwind class names can collide with daisyUI components.** `table` is a
   display utility *and* a daisyUI component that adds `width: 100%`,
   `text-align: left` and `position: relative`. `footer` is likewise a daisyUI
   grid component. Using `table` to mean `display: table` silently drags the
   component in; write `[display:table]` instead. Check any short, noun-like
   utility name against daisyUI before using it.
3. **Some utilities set more than they say.** `text-base` also sets
   `line-height: 1.5`; an arbitrary size like `text-[1rem]` does not. The
   `transition-*` utilities default to `cubic-bezier(0.4, 0, 0.2, 1)`, not
   `ease` - pass `ease-[ease]` when matching hand-written CSS.
4. **Don't half-use a daisyUI component.** If you find yourself overriding most
   of `btn` or `badge`, drop the component class and write plain Tailwind - the
   binminder controls do this, because they carry Binminder's green brand
   rather than the site theme. Keeping the component *and* fighting it is the
   worst of both.

### Breakpoints

Use Tailwind's `md:` (min-width 768px) and `max-md:` (max-width 767px). Some
older CSS used `max-width: 768px`, which left a one-pixel band where a section
rendered mobile while its neighbours rendered desktop - visible at iPad portrait
width. MyWork was the last section with that bug; it has been normalised. Do not
reintroduce a `768px` max-width media query.

There is a third breakpoint, `desk` (75rem / 1200px), declared in `index.css`.
The tablet band (768-1199px) runs full-bleed; only true desktop gets the narrow
60vw hero shell. Two things to know:

- **Declare custom breakpoints in `rem`.** Tailwind orders media queries by the
  literal declared value, so `--breakpoint-desk: 1200px` sorts *before*
  `48rem` and `md:` then wins at 1440px. `75rem` sorts correctly.
- For the same reason, prefer a registered breakpoint over an arbitrary
  `min-[1200px]:` variant, which has the identical ordering problem.

### Verifying a refactor

`tools/visual-regression/` captures every element's computed style across five
widths and both themes and diffs them. Use it before and after any restyle -
`DIFFS: 0` means nothing moved. `dead-css.cjs` in the same folder lists
selectors that match nothing in the rendered DOM.

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

