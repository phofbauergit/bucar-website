# Design System — Arztpraxis Bucar

Source: `ui-ux-pro-max` design-system search (query: "holistic medicine TCM practice calm editorial").
Adapted away from the tool's default SaaS pink accent toward natural/wellness palettes that fit a Bavarian holistic TCM practice.

## Reference alignment
Inspiration site (Staude Design / Curth): white + light sage panels, muted green buttons, warm wood photography tones, clean sans-serif, frosted hero panel, white Schwerpunkte cards on light gray.

## Version A — Curth Calm (`/v1`)
| Role | Hex | Token |
|------|-----|-------|
| Background | `#FAF8F5` | `--v1-bg` |
| Surface | `#FFFFFF` | `--v1-surface` |
| Surface muted | `#F0EFEC` | `--v1-muted` |
| Ink | `#2D4A3E` | `--v1-ink` |
| Sage | `#8FA898` | `--v1-sage` |
| Clay | `#C4A484` | `--v1-clay` |
| Forest | `#1F3A30` | `--v1-forest` |
| Border | `#E2DFD8` | `--v1-border` |

Typography: **Lora** (display) + **Raleway** (body).

## Version B — Alpine Meridian (`/v2`)
| Role | Hex | Token |
|------|-----|-------|
| Ink | `#1A1F1C` | `--v2-ink` |
| Parchment | `#F3EDE4` | `--v2-parchment` |
| Terracotta | `#B85C38` | `--v2-terracotta` |
| Jade | `#5B8A72` | `--v2-jade` |
| Mist | `#E8E2D6` | `--v2-mist` |
| Bone | `#FBF8F2` | `--v2-bone` |

Typography: **Fraunces** (display) + **Source Sans 3** (body).

## Version C — Pulse Editorial (`/v3`)
| Role | Hex | Token |
|------|-----|-------|
| Paper | `#FAFAF7` | `--v3-paper` |
| Graphite | `#1C1E1B` | `--v3-graphite` |
| Signal | `#1D7A75` | `--v3-signal` |
| Muted | `#E8E8E4` | `--v3-muted` |
| Subtle | `#6B7068` | `--v3-subtle` |
| Border | `#D4D4CF` | `--v3-border` |
| Surface | `#FFFFFF` | `--v3-surface` |

Typography: **Space Grotesk** (display) + **IBM Plex Sans** (body) + **JetBrains Mono** (readouts).

Interactive elements: Puls-Linie (section divider + easter egg), Meridian-Grid (hero ambient), Readout-Chips (animated counters), Befund-Karten (expandable), Atem-Widget, Puls-CTA on hover.

## Pass bars (apply to both)
- Body text contrast ≥ 4.5:1 (WCAG AA)
- 8px spacing rhythm
- Hover/focus/active states, no layout shift on hover
- Micro-interactions 150–300ms
- 375px + 1440px responsive
- Keyboard reachable; visible focus ring
- `prefers-reduced-motion` disables non-essential animation
- No emoji icons — custom SVG only
- No purple-gradient SaaS hero, no generic 3-col feature template
