# AGENTS.md

## Tech Stack
- Vite
- React
- Typescript

## Conventions
- Use Conventional Commits:
  feat:, fix:, docs:, style:, refactor:, perf:, test:, etc
- Put `BREAKING CHANGE:` in the commit footer (or use `!` after the commit type according to the Conventional Commits specification).
- Never use `--legacy-peer-deps`; update packages instead.

# STYLE GUIDE — Meal's Recipe

## Typography (desktop)

Fonts: Fraunces (headings, 600) / Inter (body, 400; 500 for emphasis)

| Role | Token | Size / Line-height |
|---|---|---|
| H1 (page title) | Title / 2xl | 56 / 64 |
| H2 (section heading) | Title / xl | 40 / 48 |
| H3 (subsection) | Title / lg | 32 / 36 |
| Body — lead/intro | Body / large | 24 / 28 |
| Body — emphasis | Body / medium | 20 / 28 |
| Body — default | Body / base | 18 / 28 |
| Small labels (tags, meta, timestamps) | font / xs | 12 / 16, uppercase, 0.03em letter-spacing |

## Colors

- Text: `#2A2320`
- Background: `#FBF7F2`
- Main: `#C1613D`
- Accent (saved/selected/success only): `#5F7A5A`
- Links: `#C1613D`, underline on hover

## Spacing

Base unit: 8px, all margins/padding as multiples.

- Between sections: 64px
- Heading to body: 16px
- Between unrelated elements: 24px
- Page side margins: 24px mobile, 64px desktop

## Buttons

### Primary
| State | Background | Text | Border |
|---|---|---|---|
| Default | `#C1613D` | `#FBF7F2` | `#C1613D` |
| Hover | `#A84F30` | `#FBF7F2` | `#A84F30` |
| Active | `#8F4127` | `#FBF7F2` | `#8F4127` |
| Focus | `#C1613D` | `#FBF7F2` | `#2A2320` (2px ring, 2px offset) |
| Disabled | `#E8C9B8` | `#FBF7F2` | `#E8C9B8` |

### Success
| State | Background | Text | Border |
|---|---|---|---|
| Default | `#5F7A5A` | `#FBF7F2` | `#5F7A5A` |
| Hover | `#4E6549` | `#FBF7F2` | `#4E6549` |
| Active | `#3F5239` | `#FBF7F2` | `#3F5239` |
| Focus | `#5F7A5A` | `#FBF7F2` | `#2A2320` (2px ring, 2px offset) |
| Disabled | `#C7D2C0` | `#FBF7F2` | `#C7D2C0` |

### Warning
| State | Background | Text | Border |
|---|---|---|---|
| Default | `#C98A3E` | `#2A2320` | `#C98A3E` |
| Hover | `#B3762E` | `#2A2320` | `#B3762E` |
| Active | `#986324` | `#FBF7F2` | `#986324` |
| Focus | `#C98A3E` | `#2A2320` | `#2A2320` (2px ring, 2px offset) |
| Disabled | `#EAD4B0` | `#2A2320` | `#EAD4B0` |

### Danger
| State | Background | Text | Border |
|---|---|---|---|
| Default | `#B3402D` | `#FBF7F2` | `#B3402D` |
| Hover | `#973524` | `#FBF7F2` | `#973524` |
| Active | `#7C2B1D` | `#FBF7F2` | `#7C2B1D` |
| Focus | `#B3402D` | `#FBF7F2` | `#2A2320` (2px ring, 2px offset) |
| Disabled | `#E3BDB3` | `#FBF7F2` | `#E3BDB3` |

## Rules

- One accent color per screen, max.
- No more than 2 font weights per page.
- Buttons: solid background, no gradient, no shadow beyond a 1px border on hover.
- Every focus state uses the same near-black ring (`#2A2320`) for consistent keyboard focus.