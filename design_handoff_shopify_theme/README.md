# Handoff: High Country Women — Shopify Theme

## Overview

This package contains the **approved design direction** for the High Country Women
(HCW) storefront — a women-led indie sewing-pattern company in small-town Wyoming
selling **PDF sewing patterns, natural-fiber fabric, and in-person workshops**.

The goal of the build is to turn this design into a **real, production Shopify
theme** (Online Store 2.0 — Liquid sections, blocks, JSON templates, and native
color schemes). The aesthetic is *warm heirloom prairie-modern*: a cream paper
ground, one loud barn-red voice, calm earth tones, and photography that does the
emotional work.

> **Brand voice reminder for any copy you generate:** warm, plain-spoken,
> encouraging — "a friend who sews teaching you, never a corporation." Use
> "we/our" for the makers and "you/your" for the sewist. **No emoji, ever.**

---

## About the Design Files

The files in `prototype/` are **design references built in HTML/React (Babel-JSX)** —
a clickable prototype showing the intended look, layout, type, color, and
interactions. **They are not the Shopify theme and should not be shipped as-is.**

Your task is to **recreate these designs as a Shopify Online Store 2.0 theme**,
using Shopify's established patterns:

- **Liquid** templates + **sections/blocks** (not React components)
- **JSON templates** (`templates/*.json`) composing sections
- Shopify **`{% schema %}`** settings so the merchant can edit content/imagery
- Shopify-native **color schemes** (Theme editor → Colors) — these map 1:1 to the
  six CSS schemes defined here (see *Color Schemes* below)
- Liquid objects for real data: `product`, `collection`, `cart`, `section.settings`,
  `{{ product.price | money }}`, etc.

The prototype's React structure (Header, Hero, CollectionTiles, ShopSection, …) is
a **content map**, not an implementation spec. Translate each React "section" into a
Shopify **section** with appropriate schema settings and blocks.

The simplest path: start from a clean OS 2.0 base (e.g. Shopify's **Dawn**), strip
its styling, drop in `tokens.css` as the foundation, define the six color schemes
in `settings_schema.json`, then rebuild each section to match this prototype.

### How to run the prototype
Open `prototype/High Country Women Theme.html` in a browser (it loads React +
Babel from CDN and the local `jsx/`, `app.css`, `tokens.css`, `fonts/`, `images/`,
`assets/`). The on-screen **Tweaks panel** lets you toggle hero layouts and card
styles — these are prototype-only exploration controls, **not** features to build.

---

## Fidelity

**High-fidelity.** Colors, typography, spacing, radii, and interactions are final
and should be reproduced precisely. All exact values are in `prototype/tokens.css`
and summarized under *Design Tokens* below. Build pixel-faithfully; do not
re-interpret the visual language.

---

## Templates / Pages in this design

The prototype is a single-page React app that swaps "pages." In Shopify these
become separate **JSON templates**, each composing reusable sections:

| Prototype page | Shopify template | Key sections |
|---|---|---|
| Home | `templates/index.json` | Announcement bar, Header, **Hero (card)**, Collection tiles, Featured patterns, Heritage band, Fabric teaser, Newsletter, Footer |
| Patterns collection | `templates/collection.json` (Sewing Patterns) | Header, collection banner, filter/sort bar, product grid |
| Fabric collection | `templates/collection.fabric.json` | Same grid, fabric imagery/copy |
| Product detail | `templates/product.json` | Gallery, buy box, sewalong/description, related |
| About | `templates/page.about.json` | Editorial story sections |
| Workshops | `templates/page.workshops.json` | Class listing / editorial |

Source files for each: `prototype/jsx/pages.jsx` (home + hero + tiles + featured +
heritage + fabric teaser), `prototype/jsx/collection.jsx`, `prototype/jsx/product-page.jsx`,
`prototype/jsx/about-workshops.jsx`, `prototype/jsx/ui.jsx` (header, footer, buttons,
icons, product card, cart drawer, newsletter), `prototype/jsx/products.jsx` (sample data).

---

## Global chrome

### Announcement bar (top)
Full-width **Terracotta** scheme (barn-red ground, cream text). Centered, ALL-CAPS,
Hanken Grotesk 600, `letter-spacing: .14em`, `font-size: 11.5px`, padding `8px 16px`.
Copy: *"Free pillow-cover pattern with every order · Beginner-friendly PDF patterns"*.
Build as an editable announcement-bar section.

### Header (sticky)
- **Cream** scheme, solid, `position: sticky; top: 0`, `border-bottom: 1px solid var(--line)`.
- Three-column grid `1fr auto 1fr`, vertical padding `18px`, inside `.hcw-wrap` (max-width container, ~1280–1440px).
- **Left:** primary nav — Patterns → patterns collection, Fabric → fabric collection,
  Workshops, About. Hanken Grotesk 500, 13px, `letter-spacing: .04em`, UPPERCASE.
  Active/hover = barn red with a 1.5px red underline.
- **Center:** logo (`assets/logo-full-red.png`), 26px tall, links home.
- **Right utilities:** currency selector ("USD ⌄", 12px), search, account (`user-round`),
  cart (`shopping-bag`) with a red count badge (17px circle, white 700 10px).
- **Mobile (≤860px):** hamburger (`menu`) opens a left drawer; nav items become
  Goudy Old Style 26px with dashed dividers; footer line in Lora italic.

### Footer
Built in `prototype/jsx/ui.jsx` — uses the **Ink** scheme (warm near-black ground,
cream text). Reproduce its column layout from the source.

### Icons
**Lucide** (thin 1.5–1.6px outline, rounded). Map: search→`search`, account→`user-round`,
cart→`shopping-bag`, menu→`menu`, close→`x`, expand→`plus`/`minus`, carousel→
`arrow-left`/`arrow-right`, currency→`chevron-down`. In Shopify, inline the needed
Lucide SVGs as snippets (don't ship the whole CDN library). **Never** draw custom
SVG icons; **never** use emoji or dingbats. The Ohio-Star **quilt mark** is a brand
symbol (PNG in `assets/`), not an icon — barn red on light, cream on dark, never recolored.

---

## Home page — section-by-section

### 1. Hero — "card" layout  *(the approved hero)*
Source: `prototype/jsx/pages.jsx` → `Hero`, `variant === 'card'`; layout CSS in
`prototype/app.css` (`.hero-cardleft`).

- **Scheme:** Cream. Section vertical padding `clamp(24px,3.5vw,56px)`.
- **Structure:** a relatively-positioned wrap containing (a) a large **portrait
  photo on the right** and (b) a **small content card overlapping the photo's left edge**.
- **Photo (`.hcl-img`):** width **66%**, right-aligned (`margin-left:auto`). Inner
  `.bg` div height `clamp(552px, 83vh, 782px)`, `background: url(images/DSCF1659.jpg) center 16% / cover`,
  `border-radius: var(--radius-sm)` (3px). Top-right badge: **Sage** chip, cream text,
  Hanken 600 11.5px `letter-spacing:.18em` UPPERCASE, padding `8px 14px`, copy
  *"Heirloom Pieces · No. 01"*.
- **Card (`.hcl-card`):** **absolutely positioned**, `left:0; top:50%; transform:translateY(-50%)`,
  width **40%** (so it overlaps the photo's left edge by ~6%). Surface = `var(--hcw-paper)`,
  `1px solid var(--hcw-line)`, `box-shadow: var(--shadow-md)`, padding `clamp(22px,2vw,32px)`.
  Card contents, in order:
  1. **H1** (Goudy Old Style): *"sewing patterns & fabric for **heirloom** pieces."*
     — "heirloom" set in **Lora italic** (`var(--font-serif)`). Font-size
     `clamp(2.8rem, 2.3rem + 1.8vw, 4rem)`, `line-height:1.08`.
     ⚠️ Always put spaces around `+`/`-` in any `clamp()`/`calc()` — an unspaced
     value is invalid CSS and silently falls back to the default huge size.
  2. A short **red rule**: `border-top:2px solid var(--accent)`, `width:40px`, `margin:14px 0`.
  3. **Subtitle** (Hanken Grotesk, `var(--text-soft)`, `max-width:30ch`):
     *"Everything you need to make pieces worth keeping."*
  4. **Inline link row** below the subtitle (Hanken 600, `var(--step--1)`,
     `letter-spacing:.2em`, UPPERCASE, `var(--text-soft)`): a 7px red dot, then
     **Patterns** · **Fabric** · **Workshops** as three links to the patterns
     collection, fabric collection, and workshops page. The `·` separators use
     `color: var(--hcw-line)`. Links use the `.ulink` hover (→ barn red).
- **Mobile (≤860px):** photo goes full width; card becomes static, pulled up
  `margin: -56px 14px 0`.
- **There are no "Shop" buttons in the hero** and **no tagline marquee** — both
  were intentionally removed.

### 2. Collection tiles
Source: `pages.jsx` → `CollectionTiles`. **Cream** scheme, tight padding.
Three equal tiles in a `repeat(3,1fr)` grid, gap `clamp(16px,2vw,26px)`, each
`aspect-ratio: 3/4`, `border-radius: var(--radius-sm)`:

| Tile | Photo | Sub copy | Links to |
|---|---|---|---|
| **FABRIC** | `images/DSCF2423.jpg` | Natural-fiber florals & linens | fabric collection |
| **SEWING PATTERNS** | `images/DSCF0938.jpg` (pos `center 22%`) | Beginner-friendly PDF patterns | patterns collection |
| **WORKSHOPS** | `images/DSCF2467.jpg` (pos `center 60%`) | In-person classes in Lander | workshops |

Each tile: full-bleed photo + bottom-anchored gradient scrim
(`linear-gradient(180deg, rgba(46,42,36,.04), rgba(46,42,36,.52))`), label in
Goudy Old Style UPPERCASE `clamp(2rem,1.3rem+2.2vw,3.2rem)` cream, sub line in
Hanken with a trailing `arrow-right` icon. Slow 1.03 image zoom on hover.

### 3. Featured patterns — "Shop our sewing patterns"
Source: `pages.jsx` → `ShopSection`. **Wheat** scheme (this was deliberately
changed from Cream → Wheat to visually separate it from the Cream collection tiles
above, now that the dividing marquee is gone). Standard `.sec` padding.
- Header row: eyebrow *"The Pattern Library"* + H2 *"Shop our sewing patterns"*,
  with a right-aligned **"View all patterns"** link (barn red, UPPERCASE 13px).
- Grid: `repeat(4,1fr)`, gap `clamp(18px,2.5vw,30px)`, first 4 products.
- **Product card** (`prototype/jsx/products.jsx` → `ProductCard`): near-square image,
  sans title, price, minimal/catalog style sitting on the scheme surface with a
  hairline. In Shopify, drive from `product` objects + `{{ product.price | money }}`.

### 4. Heritage band
Source: `pages.jsx` → `HeritageBand`. **Prairie Blue** scheme. Centered: eyebrow
*"Named for the women before us"*, a large Goudy statement *"Each pattern is named
after a high country woman in Wyoming."* (`max-width:20ch`), a Lora-italic lead
*"Classic, well-used, and made to become heirloom."*, and a centered stitch divider.

### 5. Fabric teaser
Source: `pages.jsx` → `FabricTeaser`. **Cream** scheme. Reversed split (image left,
copy right on desktop), `grid-template-columns: 1fr 1.1fr`. Eyebrow *"By the yard"*,
H2 *"Vintage-floral cottons for your next make"*, lead copy, primary **"Shop fabric"**
button with `arrow-right`. Photo `images/DSCF2426.jpg`, `aspect-ratio:5/4`.

### 6. Newsletter band — free pattern capture
Source: `prototype/jsx/ui.jsx` → `NewsletterBand`. **Wheat** scheme, 2-column split.
Left: eyebrow *"Ready for an easy sewing project?"*, H2 *"Download the Free Pillow
Cover Pattern"*, lead copy, and an email form (input + **"Email me the pattern"**
button). Right: photo `images/DSCF1546.jpg`. Wire to Shopify customer/email capture.

### Home page vertical color rhythm (final, approved)
`Cream (hero) → Cream (tiles) → Wheat (featured) → Blue (heritage) → Cream (fabric teaser) → Wheat (newsletter) → Ink (footer)`.
Preserve this rhythm when assigning Shopify color schemes section-by-section.

---

## Other pages
- **Collection (Patterns / Fabric):** `prototype/jsx/collection.jsx` — banner +
  filter/sort bar + responsive product grid (`grid-4`, 2-up on mobile).
- **Product detail:** `prototype/jsx/product-page.jsx` — gallery, buy box
  (Add to cart), description/sewalong, related. Product naming convention:
  `<Person Name> <Garment> PDF Sewing Pattern` (e.g. "Nellie Tank + Dress PDF
  Sewing Pattern"); per-product hashtags like `#hcwnellie`.
- **About / Workshops:** `prototype/jsx/about-workshops.jsx`.

Read these source files for exact layout before building each template.

---

## Interactions & Behavior
- **Motion:** restrained. Transitions `220ms` on `cubic-bezier(0.22,0.61,0.36,1)`
  (`var(--dur)`, `var(--ease)`). Soft fades; **no bounce, no parallax**.
- **Image hover:** slow zoom to **scale 1.03** + faint darken on photo tiles.
- **Links (`.ulink`):** underline-reveal / color → barn red on hover.
- **Buttons:** primary darkens to `--hcw-red-deep`; outline fills with `--text`
  (text flips to `--bg`); press = subtle ~1px nudge / 0.99 scale.
- **Cart:** slide-in drawer (`CartDrawer` in `ui.jsx`) + transient toast on add —
  in Shopify use the cart drawer + AJAX cart or theme app behavior.
- **Reveal-on-scroll:** prototype fades sections in (`Reveal`); optional, keep gentle.
- **Responsive:** breakpoints at **860px** (nav → drawer, splits stack, 4-up → 2-up)
  and **560px**. See `prototype/app.css` media queries.

---

## Design Tokens

All tokens live in `prototype/tokens.css` — port this file (CSS custom properties)
into the theme as the foundation, and expose the palette + schemes through
`settings_schema.json`.

### Core palette
| Token | Hex | Use |
|---|---|---|
| `--hcw-red` | `#D33F2B` | Barn red — primary accent (buttons, links, rules) |
| `--hcw-red-bright` | `#DD3A29` | Literal brand red — small accents |
| `--hcw-red-deep` | `#A6341F` | Hover / red text on cream |
| `--hcw-cream` | `#F5EFE5` | Default page ground |
| `--hcw-wheat` | `#EADFCC` | Deeper warm ground for alt sections |
| `--hcw-paper` | `#FBF8F1` | Lifted surface above cream (cards) |
| `--hcw-blue` | `#6D84AE` | Prairie blue band |
| `--hcw-blue-deep` | `#50658B` | Blue text / hover |
| `--hcw-ink` | `#2E2A24` | Warm near-black — primary text, footer |
| `--hcw-charcoal` | `#4B4B4B` | Secondary text |
| `--hcw-ochre` | `#C2913B` | Goldenrod earth accent |
| `--hcw-sage` | `#888A66` | Sage earth accent (hero badge) |
| `--hcw-clay` | `#B5957C` | Clay/taupe earth accent |
| `--hcw-brick` | `#9E4129` | Weathered barn-board red |
| `--hcw-line` | `#E2D8C6` | Hairline on cream |
| `--hcw-line-soft` | `#ECE3D4` | Faintest divider |
| `--hcw-mute` | `#8C8275` | Captions / meta |
| `--hcw-mute-2` | `#B3A795` | Placeholder / disabled |

### Color schemes (map 1:1 to Shopify "Color schemes")
Each flips `--bg / --surface / --text / --text-soft / --text-mute / --accent / --accent-text / --line`:
- **Cream** — bg cream, surface paper, text ink, accent red *(default)*
- **Wheat** — bg wheat, surface cream, text ink, accent red
- **Blue** — bg prairie blue, text cream, accent cream
- **Ink** — bg near-black, text cream, accent bright red *(footer)*
- **Terracotta** — bg barn red, text cream, accent cream *(announcement bar / CTA bands)*
- **Sage** — bg sage, text cream, accent cream *(badges / seasonal)*

### Typography
| Role | Family | Notes |
|---|---|---|
| Display / headings | **Goudy Old Style** (`--font-display`) | Brand serif, **self-hosted** (`fonts/GOUDOS.ttf`, `GOUDOSI.TTF`, `GOUDOSB.TTF`). Weight 400, `line-height 1.06`, `letter-spacing -0.01em`. |
| Warm voice (leads, quotes, "heirloom") | **Lora italic** (`--font-serif`) | Brand serif, **self-hosted** (`fonts/Lora-*.ttf`). |
| Body / UI / labels / prices | **Hanken Grotesk** (`--font-sans`) | The NEW sans for "professional polish" — **Google Fonts** (`Hanken Grotesk:wght@300..700`), not a brand asset. |
| Decorative flourish | **Amsterdam One** (`--font-script`) | Brand script, **self-hosted** (`fonts/AmsterdamOne-*.ttf`). Use sparingly, product art / hero accent, **always red**. |

Self-host all three brand families in the theme's `assets/` and declare with
`@font-face` (see the block at the top of `tokens.css`). Load Hanken Grotesk from
Google. **Type scale** (fluid `clamp`, 1.250 major third): `--step--1` … `--step-5`
(see `tokens.css`). H1=`--step-5`, H2=`--step-4`, H3=`--step-3`, H4=`--step-2`,
body=`--step-0`. Overline/eyebrow = `.overline` (Hanken 600, `.16em`, UPPERCASE, accent).
Lead = `.lead` (Lora italic, `--step-1`, `--text-soft`).

### Spacing — 8pt scale
`--space-1:4` `-2:8` `-3:12` `-4:16` `-5:24` `-6:32` `-7:48` `-8:64` `-9:96` `-10:128` (px).
Section padding is large (96–128px desktop). Container = `.hcw-wrap` (~1280–1440px max).

### Radii
`--radius-sm:3px` (hero tiles, large blocks, images) · `--radius-md:6px` (cards, inputs)
· `--radius-lg:10px` · `--radius-pill:999px` (tags/badges only). Avoid the over-rounded "app" look.

### Borders & shadows
Hairline `--border-hair` (1px `--hcw-line`); ink keyline `--border-ink` (1.5px ink, inputs/outline).
Shadows are soft/warm/low-opacity brown: `--shadow-sm/md/lg` (`rgba(56,44,30,.05–.12)`).
Cards lean on the cream/paper value step over heavy shadow. **No gradients as
decoration, no glows, no hard drop shadows.**

---

## Assets (in `prototype/assets/` and `prototype/images/`)

**Brand marks** (`assets/`): `logo-full-red.png` (primary horizontal logotype),
`wordmark-cream.png` (for dark/photo bg), `quilt-mark-cream.png` &
`quilt-mark-inverse.png` (Ohio-Star block — brand symbol), `email-header.png`.

**Photography** (`images/` — current stand-ins; commission per-product shots later):
`DSCF1659.jpg` (hero — striped linen skirt crop), `DSCF0938.jpg` (patterns tile),
`DSCF2423.jpg` / `DSCF2426.jpg` (fabric bolts), `DSCF2467.jpg` (studio/workshops),
`DSCF1546.jpg` (pillows — newsletter). Also `assets/photo-*.jpg` originals
(fabric stack/bolts, pillows, sewing machine, studio, sweater, skirt).

Imagery vibe: **warm, soft, natural light** — creamy whites, golden hour, gentle
shadows, film-like softness. Editorial/intimate crops (necklines, hands, a swishing
skirt, fabric bolts), often headless. Never cold, never high-contrast, never b&w.

In the Shopify build, expose all hero/tile/teaser images and copy as **section
settings** so the merchant can swap them in the Theme editor.

---

## Files in this package
```
design_handoff_shopify_theme/
├── README.md                       ← this document (self-sufficient spec)
└── prototype/
    ├── High Country Women Theme.html   ← open this to run the prototype
    ├── tokens.css                      ← design tokens + @font-face + color schemes (PORT THIS)
    ├── app.css                         ← layout/util CSS (.hcw-wrap, .hero-cardleft, media queries, etc.)
    ├── tweaks-panel.jsx                ← prototype-only exploration controls (ignore for build)
    ├── jsx/
    │   ├── ui.jsx                       ← header, footer, buttons, icons, product card, cart drawer, newsletter
    │   ├── pages.jsx                    ← home: hero (card), collection tiles, featured, heritage, fabric teaser
    │   ├── products.jsx                 ← sample product data + ProductCard
    │   ├── collection.jsx               ← collection/listing page
    │   ├── product-page.jsx             ← product detail page
    │   └── about-workshops.jsx          ← about + workshops pages
    ├── fonts/                          ← self-hosted brand faces (Goudy, Lora, Amsterdam One)
    ├── images/                         ← hero + section photography (stand-ins)
    └── assets/                         ← logos, quilt marks, source photography
```

**Start here:** run the prototype → read `tokens.css` → scaffold an OS 2.0 theme →
port tokens + define the six color schemes → rebuild sections in Liquid, matching
this spec section-by-section.
