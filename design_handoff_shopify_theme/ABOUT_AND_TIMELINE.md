# About Page + Timeline — Build Notes

Companion to `../README.md`. Covers the two pieces added after the initial
handoff: the **About page** (the Katie & Tobey founders letter) and the
**horizontal Timeline section**. Source files live in `prototype/`:

- `prototype/jsx/about-workshops.jsx` → `AboutPage` (and `WorkshopsPage`)
- `prototype/jsx/timeline.jsx` → `Timeline` component
- `prototype/app.css` → all `.tl-*` timeline styles (search "Horizontal timeline")
- `prototype/image-slot.js` → the drag-and-drop founders-photo placeholder

As with the rest of the package, these are **design references to recreate as a
Shopify OS 2.0 section/template** — not code to ship. Translate each into Liquid
sections with `{% schema %}` settings.

---

## About page (`templates/page.about.json`)

Vertical order, top to bottom (all on the **Cream** scheme unless noted):

1. **Intro — two columns.**
   - Left: eyebrow "Our story", H1 *"Two friends, sewing in the high country."*,
     and a lead (Lora italic) *"We're Katie and Tobey — friends, neighbors,
     sewists, and the women behind High Country Women."*
   - Right: a **landscape founders photo** in a hairline frame (`--radius-sm`,
     `--shadow-sm`) with an italic serif caption *"Katie & Tobey — Lander, Wyoming"*.
   - Grid `1fr 1fr`, `align-items:center`; stacks on mobile (≤860px).
   - In the prototype the photo is an `<image-slot>` placeholder so the user can
     drop their real photo in. **In Shopify, make this an `image_picker` setting**
     on the section (and the caption a `text` setting).
   - Padding is intentionally tight at the bottom so the letter starts close.

2. **The letter.** A single narrow reading column (`max-width:720px`). Opens with
   a Lora-italic lead "Hi there,", then six body paragraphs (Hanken Grotesk,
   ~16.5px, `line-height:1.78`, `--text-soft`), and closes with a small "xoxo,"
   over a large **Amsterdam One script** signature *"Katie & Tobey"* in barn red
   (`--accent`). Full copy is in `AboutPage`'s `story[]` array — expose it as a
   `richtext` setting (and the signature as a `text` setting) so the merchant can
   edit it. Top padding is reduced (`clamp(12px,2vw,28px)`) to sit near the intro.

3. **Timeline section.** See below.

4. **Values band — Prairie Blue scheme.** Three numbered items (Natural fibers /
   Beginner friendly / Made to last) with stitch dividers. Repeatable blocks.

5. **Newsletter band** (shared `NewsletterBand`, Wheat scheme).

---

## Timeline section (the new piece)

An **irregular, editorial, horizontally-scrolling history rail.** Photos vary in
size and float at different heights along one continuous baseline; dates are
anchored centered below. Milestones **without** a photo render as a serif
"moment" card so a date never looks blank. Built to be updated often (new pattern
launches, business news).

### Data model
`Timeline` takes `events` (array) plus `eyebrow` and `title` strings. Each event:

| Field | Type | Notes |
|---|---|---|
| `date` | string | Shown as red uppercase tracked label below the line (e.g. "January 2025"). |
| `caption` | string | One sentence. Under the photo for photo events; **inside the card** for photo-less events. |
| `photo` | string? | Filename in `images/`. Omit → renders a serif "moment" card. |
| `focus` | string? | `background-position` Y for the photo crop (e.g. `'22%'`, `'bottom'`). |
| `size` | string? | `portrait` \| `tall` \| `square` \| `landscape` \| `wide` — controls the media's width + aspect. |
| `offset` | number? | `0`–`1`: how high the media floats above the baseline (0 = resting on the line). |

The current About-page `milestones[]` (in `about-workshops.jsx`) is the reference
content: 2021 (meet) → 2024 (wedding) → Dec 2024 (lightbulb, *card*) → Jan 2025
(founded) → Jun 2025 (first pattern) → Aug 2025 (second pattern, *card*) →
Sep 2025 (babies) → Today.

### Layout mechanics (`.tl-*` in `app.css`)
- `--tl-zone` (≈520px) is the vertical room above the baseline. Each item is a
  flex column: a `.tl-figure` of height `--tl-zone` bottom-aligns its `.tl-media`,
  raised by `margin-bottom` = `offset × (zone − mediaHeight)` — this keeps every
  photo inside the zone (no top clipping) while still floating irregularly.
- `.tl-baseline` is one absolutely-positioned hairline across the whole track at
  `top:--tl-zone`. `.tl-tick` is the thin vertical connector; `.tl-dot` is the
  barn-red node sitting on the line.
- `.tl-photo` = framed image (`--radius-sm`, hairline, `--shadow-sm`).
  `.tl-card` = the photo-less "moment" tile (paper bg, hairline, a small red
  star mark `✦`, caption in Lora italic).
- Media widths/aspects come from the `TL_SIZE` map in `timeline.jsx`
  (portrait 300×4:5, tall 280×3:4, square 330², landscape 460×3:2, wide 500×16:10).
- The rail is `overflow-x:auto` with hidden scrollbar, `scroll-snap`, **drag-to-scroll**
  (pointer events), and prev/next **arrow buttons** that auto-disable at each end.

### Shopify implementation
- Build as a **section with repeatable blocks**, one block per milestone. Block
  settings: `text` (date), `text`/`richtext` (caption), `image_picker` (photo,
  optional), `select` (size), `range` (offset 0–1). Section settings: `text`
  (eyebrow), `text` (title).
- Render the rail as a horizontal flex track inside an `overflow-x:auto` wrapper;
  port the `.tl-*` CSS as-is. Re-implement drag-scroll + arrow nav in the section's
  JS (vanilla or the theme's existing carousel helper).
- A block with no image should output the `.tl-card` markup (caption inside),
  matching the prototype — this is the "never blank" requirement.
- Lazy-load images (`loading="lazy"`); use Shopify's responsive `image_url`/`srcset`.

---

## Quick reference — to see it running
Open `prototype/High Country Women Theme.html`, click **About** in the header.
The intro (text + founders photo), the letter, and the scrolling timeline are all
there. Drag the timeline or use its arrows; drop an image on the founders slot to
test the photo placeholder.
