# Nails by Natalia: UI & Animation Prompt (Claude Code)

> **Use with** `nails-by-natalia-claude-code-prompt.md`. This file **replaces its "Design Direction" section** and adds to Phase 2 (public site) and Phase 5 (performance/accessibility). On any conflict, this file wins for visual design; the main prompt wins for architecture, data, security, and PWA.

## Reference
Save the two reference screenshots to `docs/design-reference/` as `home.png` (hero, services, gallery) and `about.png` (about, pricing, contact), then **view them before writing any UI code**. Recreate the *look and feel*: dark burgundy backgrounds, hot-pink gradient accents, glassmorphism cards, a floating icon rail, and soft decorative icons. Do not copy placeholder text or fake data from the screenshots (see "Content rules").

## Visual Language

**Mood**: luxurious, glossy, playful-but-polished. Dark wine-red canvas with glowing pink highlights.

**Design tokens** (CSS variables in `src/styles/tokens.css`; values are approximations, so sample the screenshots and adjust):
```css
--bg-deep:      #3d0a24;   /* page base */
--bg-mid:       #6b0f3a;   /* gradient middle */
--bg-glow:      #8f1148;   /* gradient highlights */
--pink-500:     #ff2d87;   /* primary CTA / accent */
--pink-300:     #ff7ab3;   /* gradient text, icons */
--pink-100:     #ffd3e6;   /* soft text on dark */
--glass-bg:     rgb(255 255 255 / 0.07);
--glass-border: rgb(255 255 255 / 0.14);
--text:         #fff;
--text-muted:   rgb(255 255 255 / 0.72);
--radius-card:  1.25rem;
--radius-pill:  999px;
--shadow-glow:  0 10px 40px -10px rgb(255 45 135 / 0.55);
```
- Page background: vertical gradient `--bg-deep → --bg-mid → --bg-deep` with a few large, blurred radial pink glows (fixed or slowly drifting).
- **Glass cards**: `--glass-bg`, 1px `--glass-border`, `backdrop-filter: blur(14px)`, `--radius-card`. Provide a solid-color fallback when `backdrop-filter` is unsupported.
- **Typography**: bold geometric sans for headings (Poppins or Plus Jakarta Sans, 700–800), Inter for body. Fluid sizes via `clamp()`. Self-host fonts (no Google Fonts request) with `font-display: swap`.
- **Gradient text**: the second word of key headings ("Confident You", "Services", "Gallery") uses a white→pink gradient (`background-clip: text`).
- **Buttons**: pill-shaped. Primary = pink gradient fill with glow shadow and icon; secondary = glass pill with border.
- **Section eyebrow**: small glass pill label above each section title (e.g., "Nuestra historia").
- **Decorative layer**: scattered, low-opacity outline icons (hearts, scissors, sparkles, bows) behind content, `aria-hidden`, `pointer-events: none`, never overlapping text enough to hurt contrast.
- Palette is intentionally dark/pink to match the references. Keep **one** accent family (pink); do not introduce purple or other hues.

## Layout & Sections
The **home page is a single-page scroll** with anchored sections in this order (Spanish UI text from `src/i18n/es.ts`):

1. **Hero**: eyebrow pill ("Estudio de uñas"), large heading with gradient second line (e.g., "Uñas hermosas, / tú con confianza"), short paragraph, CTAs "Reservar cita" (primary, with heart icon) and "Ver galería" (secondary). Background: blurred hero photo under a burgundy overlay. Below the CTAs, a **small stats row** (see Content rules).
2. **Servicios**: title with gradient word. A large glass card containing a collage image (hands/nails, torn-paper or organic-blob mask) with **2–3 floating badge cards** overlapping its edges (e.g., "Cuidado experto", "Higiene primero", "Calidad premium"), each with icon, title, and subtitle.
3. **Galería**: responsive grid (2 cols mobile, 4 cols desktop) of rounded-corner tiles (square or 4:5). Hover/focus shows a bottom gradient + title caption. Clicking opens the accessible lightbox. "Ver todo el portafolio" links to `/portafolio` (the full filterable gallery from the main prompt).
4. **Sobre Natalia**: two columns. Photo/collage with a circular floating icon badge; text with eyebrow "Mi historia", heading, 2 short paragraphs, and a **2×2 grid of feature chips** (icon + title + one-line description).
5. **Precios**: heading "Lujo accesible". **Three glass pricing cards** fed from the `services` table (not hard-coded): name, price ("desde $XX / sesión"), checklist of what's included, and a button. The middle/featured card gets a "Popular" badge, a pink border glow, slightly larger scale, and the gradient button; the others use the secondary style. Include the note "Diseños complejos se cotizan por separado".
6. **Contacto / Reservar**: two columns. Left: glass form card titled "Reserva tu cita" (nombre, correo/teléfono, servicio, mensaje, large gradient submit button). Right: an organic-blob-masked photo. Follow the booking behavior defined in the main prompt (or the WhatsApp booking variant if the hybrid option is chosen). Footer with address, hours, WhatsApp, and social links.

**Navigation (signature element)**: a **fixed floating vertical icon rail** on the left (≥ 768px): glass pill container, logo/sparkle icon on top, then icon buttons: Inicio, Servicios, Galería, Precios, Sobre mí, Contacto.
- Active section is highlighted by a **sliding pink pill indicator** (animated with `transform`), driven by `IntersectionObserver`.
- Each icon has an `aria-label`, a tooltip label on hover/focus, and `aria-current="true"` when active.
- Smooth-scroll to sections; respect `scroll-margin-top`.
- **Mobile (< 768px)**: the rail becomes a **bottom floating dock** (same glass pill, horizontal, safe-area padding via `env(safe-area-inset-bottom)`). Content gets matching bottom padding so nothing is hidden.

## Animations: modern, subtle, professional
Principles: purposeful, fast (150–600 ms), eased (`cubic-bezier(.22,1,.36,1)` or springs), never blocking interaction. **Animate only `transform` and `opacity`** (plus `filter` sparingly for glows). No layout-shifting animations (protects CLS and the Lighthouse targets).

**Implementation**: prefer CSS (keyframes, transitions, `animation-timeline: view()` where supported with an `IntersectionObserver` fallback) plus a tiny shared `reveal` utility. Use the `motion` library **only inside React islands that need orchestration** (lightbox, pricing hover, form states). No GSAP, no large animation libraries. Keep total added JS for animation under ~15 KB gzipped.

| Area | Animation |
|---|---|
| **Page load** | Hero heading reveals line by line (stagger 80–120 ms, translateY + fade); gradient word has a slow one-time shimmer sweep; CTAs fade/scale in after the text |
| **Hero background** | Very slow parallax on the photo (≤ 20 px) and gently drifting blurred pink glows (20–30 s loops) |
| **Decorative icons** | Slow floating bob + slight rotation (6–10 s, randomized delays), low opacity; paused when off-screen |
| **Scroll reveals** | Sections and cards fade-up (24 px) once when entering the viewport; grids stagger children (60 ms); disconnect observers after firing |
| **Side rail / dock** | Sliding active indicator; icon scale + glow on hover; tooltip fades in; rail itself slides in from the left on first load |
| **Buttons** | Primary: lift 2 px + glow intensifies on hover, soft shimmer sweep, press scale 0.97; heart icon pulses once on hover |
| **Service collage badges** | Floating badges gently bob out of phase with each other; parallax offset on scroll (subtle) |
| **Gallery tiles** | Hover/focus: image scale 1.06, caption slides up, pink ring glow; touch devices show the caption on tap |
| **Lightbox** | Shared-element expand from the tile (View Transitions API with graceful fallback to scale+fade); backdrop blur fade; swipe/arrow transitions between items |
| **Pricing cards** | Hover lift + border glow; featured card has a slow ambient glow pulse; optional light 3D tilt on pointer devices only (≤ 4°) |
| **Feature chips (About)** | Stagger in; icon does a small pop on reveal |
| **Form** | Input focus: border turns pink with soft glow and label lift; validation errors shake once (≤ 4 px); submit button shows an inline spinner, then a success check morph |
| **Blob images** | Organic blob mask with a very slow morph (`border-radius` is avoided; use an SVG `clip-path` or mask and animate transform only) |
| **Route / anchor transitions** | Smooth scroll between sections; cross-page fade via View Transitions where supported |
| **PWA touches** | Install button slides in from the bottom; update toast slides up; offline page has a gentle looping sparkle |

**Motion safety & performance (required)**
- Wrap all non-essential motion in `@media (prefers-reduced-motion: no-preference)`. With reduced motion: no parallax, no floating/looping, no shimmer; keep only instant or opacity-only transitions.
- Pause looping animations when the tab is hidden or the element is off-screen (`IntersectionObserver` / `animation-play-state`).
- Use `will-change` only on elements animating at that moment; remove it afterwards.
- Never animate above-the-fold LCP images with opacity from 0 (it delays LCP). The hero photo renders immediately; only the text reveals.
- Disable heavy effects (backdrop blur radius, parallax, ambient glows) on low-end devices: use `@media (hover: none)` / `prefers-reduced-data` / a lightweight `navigator.hardwareConcurrency` check for the tilt and parallax features.
- Keep Lighthouse targets from the main prompt (Performance ≥ 90 mobile). If animation threatens them, cut animation, not the score.

## Content Rules (don't copy the placeholders)
- The references show stats like "1000+ clientes, 50+ artistas" and a multi-artist salon. **Natalia is an independent artist**, so do not show invented numbers. The hero stats row must be driven by real data or omitted: allowed items are things like years of experience (config value), number of designs in the portfolio (live count from Supabase), or "Hecho a mano". If Natalia hasn't provided real figures, render only the live portfolio count.
- Pricing cards use real `services` rows. Don't hard-code "$25 / $45 / $75" outside seed data.
- Replace all stock text ("Premium Nail Salon & Spa", "Crafting Beauty Since 2018") with Spanish placeholders from `es.ts` that Natalia can edit, flagged as placeholders in `docs/MANUAL_STEPS.md`.
- All images need `alt_text`; decorative images and icons use empty `alt` / `aria-hidden`.
- Brand name everywhere: "Nails by Natalia".

## Accessibility with a dark, glossy theme
- Text contrast ≥ WCAG AA on glass cards (check against the *lightest* part of the gradient behind them); raise card opacity if needed.
- Visible `:focus-visible` ring in `--pink-300` on every interactive element, including rail icons and gallery tiles.
- All icon-only buttons have accessible names. The rail is a `<nav aria-label="Secciones">`.
- Gradient text must keep a solid-color fallback (`color` set before `background-clip`).
- Lightbox: focus trap, ESC to close, return focus to the trigger tile.

## Admin panel styling
Use the same tokens and glass components, but **no decorative animation**: keep it fast and utilitarian (only hover/focus feedback, loading spinners, and list-reorder motion). Mobile-first layout.

## Acceptance Criteria (UI)
1. At 375 px and 1280 px, the home page matches the reference structure: hero with gradient heading and CTAs, floating rail (dock on mobile), services collage with badges, 4-up gallery grid, about with feature chips, three pricing cards with a featured center card, and contact with the glass form and blob image.
2. The active rail/dock item tracks the section in view and animates smoothly.
3. All listed animations work, and with `prefers-reduced-motion: reduce` there is no looping/parallax/shimmer motion.
4. No layout shift from animations (CLS < 0.05), and Lighthouse targets still pass on mobile.
5. Pricing cards, gallery, and stats come from live data; no fabricated numbers appear.
6. Contrast, focus visibility, and keyboard navigation pass an axe/Lighthouse accessibility check.

## Start Now
1. View the reference images in `docs/design-reference/`.
2. Create `tokens.css`, the glass/button/pill primitives, and a `/dev/styleguide` page (excluded from the sitemap and the PWA precache) showing them.
3. Build sections in the order above, adding animations per section, and verify at 375 px first.
4. Commit after each section (`feat(ui): ...`) and report what was built and any placeholders needing Natalia's input.
