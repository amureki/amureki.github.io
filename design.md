# Design — amureki.me

A locked design system for this site. Page redesigns share its typography,
palette, spacing, interaction voice, and restrained editorial character.

## Genre

Editorial.

## Macrostructure family

- Personal landing pages: Long Document with typographic sections and hairline rules.
- Service pages: Split Studio with an asymmetric offer/proof pair and one closing action.
- Utility pages: Index-First or Catalogue with ruled rows and grouped inventories.
- Articles: Long Document with a 45–75ch reading measure.

## Theme

- `--page-bg`: `oklch(98% 0.008 85)`
- `--page-text`: `oklch(20% 0.014 85)`
- `--secondary-text`: `oklch(43% 0.012 85)`
- `--tertiary-text`: `oklch(55% 0.01 85)`
- `--divider-color`: `oklch(82% 0.012 85)`
- `--focus-color`: `oklch(56% 0.17 50)`

Dark mode keeps the same warm hue and reverses the lightness hierarchy. The
canonical values live in `tokens.css`.

## Typography

- Display: Space Grotesk, weight 700, roman.
- Body: Instrument Sans, weights 400, 600, and 700.
- Display tracking: `-0.035em` for the site title and `-0.01em` for section heads.
- Body anchor: `1rem`; display anchor: `clamp(2.25rem, 4vw, 3.25rem)`.

## Spacing

Use the 4-point named scale in `tokens.css`. Page CSS references named tokens;
raw spacing values are reserved for print layout.

## Motion

- Reveal pattern: none.
- Interaction feedback: color and background only.
- Reduced-motion fallback: unnecessary while no spatial motion ships.

## Microinteractions stance

- Success is silent.
- Focus rings appear instantly and clear 3:1 contrast.
- Links invert ink and paper on hover or active; prose links retain underlines.

## CTA voice

- Primary action: one underlined typographic link inside a ruled closing block.
- Secondary action: ordinary inline link; no pills or boxed buttons.

## Per-page allowances

- Personal and utility pages are typography-only.
- Notes may contain user-supplied screenshots or code blocks.
- No decorative imagery, cards, gradients, or ambient motion.

## What pages must share

- Rust Saiargaliev wordmark and primary navigation.
- Warm paper, ink hierarchy, Space Grotesk/Instrument Sans pairing.
- Hairline divider language and square geometry.
- Link, focus, external-link, and print behavior.

## What pages may differ on

- Macrostructure within the family assigned above.
- One-column or two-column composition according to content.
- Section density: compact for CV/reference pages, more open for service pages.

## Exports

### tokens.css

`tokens.css` is the source of truth. Its core portable roles are:

```css
:root {
  --page-bg: oklch(98% 0.008 85);
  --page-text: oklch(20% 0.014 85);
  --secondary-text: oklch(43% 0.012 85);
  --tertiary-text: oklch(55% 0.01 85);
  --divider-color: oklch(82% 0.012 85);
  --focus-color: oklch(56% 0.17 50);
  --font-display: "Space Grotesk", "Avenir Next", "Segoe UI", sans-serif;
  --font-body: "Instrument Sans", "Avenir Next", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  --space-3xs: 0.25rem;
  --space-2xs: 0.5rem;
  --space-xs: 0.75rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4.5rem;
}
```

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper: oklch(98% 0.008 85);
  --color-ink: oklch(20% 0.014 85);
  --color-muted: oklch(43% 0.012 85);
  --color-rule: oklch(82% 0.012 85);
  --color-focus: oklch(56% 0.17 50);
  --font-display: "Space Grotesk", "Avenir Next", "Segoe UI", sans-serif;
  --font-body: "Instrument Sans", "Avenir Next", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  --spacing-xs: 0.75rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --text-sm: 0.9375rem;
  --text-md: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.5rem;
}
```

### DTCG tokens.json

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "paper": { "$value": "oklch(98% 0.008 85)", "$type": "color" },
    "ink": { "$value": "oklch(20% 0.014 85)", "$type": "color" },
    "muted": { "$value": "oklch(43% 0.012 85)", "$type": "color" },
    "rule": { "$value": "oklch(82% 0.012 85)", "$type": "color" },
    "focus": { "$value": "oklch(56% 0.17 50)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Space Grotesk, Avenir Next, Segoe UI, sans-serif", "$type": "fontFamily" },
    "body": { "$value": "Instrument Sans, Avenir Next, Segoe UI, Helvetica Neue, Arial, sans-serif", "$type": "fontFamily" }
  },
  "space": {
    "xs": { "$value": "0.75rem", "$type": "dimension" },
    "sm": { "$value": "1rem", "$type": "dimension" },
    "md": { "$value": "1.5rem", "$type": "dimension" },
    "lg": { "$value": "2rem", "$type": "dimension" },
    "xl": { "$value": "3rem", "$type": "dimension" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background: 98% 0.008 85;
  --foreground: 20% 0.014 85;
  --card: 98% 0.008 85;
  --card-foreground: 20% 0.014 85;
  --primary: 20% 0.014 85;
  --primary-foreground: 98% 0.008 85;
  --secondary: 82% 0.012 85;
  --secondary-foreground: 20% 0.014 85;
  --muted: 82% 0.012 85;
  --muted-foreground: 43% 0.012 85;
  --border: 82% 0.012 85;
  --input: 82% 0.012 85;
  --ring: 56% 0.17 50;
  --radius: 0;
}
```
