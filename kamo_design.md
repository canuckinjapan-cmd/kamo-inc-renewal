# Design System Specification (KAMO_DESIGN.md)

## 🎯 Brand Identity
**"High-Tech Marketing Catalyst: Bridging Western High-Tech Firms with the Japanese Enterprise Market."**
The Kamo, Inc. visual architecture is engineered for enterprise trust, clarity, and authoritative presence. The aesthetic takes inspiration from premium financial publications and global technology advisory firms. It prioritizes balanced layout grids, sophisticated dark editorial ink layers, and high-density information architecture.

## 🎨 Color Tokens
| Token | HSL / Hex | Corporate Usage |
| :--- | :--- | :--- |
| `--background` | `210 20% 98%` (#F8FAFC) | Pristine, high-clarity corporate light base. |
| `--foreground` | `222 47% 11%` (#0F172A) | Deep slate editorial ink for primary typography and borders. |
| `--accent-brand`| `oklch(0.508 0.214 22)` (#BC002D) | Sophisticated high-tech crimson red for structural elements, primary CTA actions, and corporate indicators. |
| `--surface-card` | `0 0% 100%` (#FFFFFF) | High-contrast stark background fields for corporate data and services modules. |
| `--border-rule`  | `222 47% 11%` / 10% opacity | Fine structural grid rules to segment consulting tracks. |

## 🖋️ Corporate Typography
| Role | Family / Stack | Weights | Application |
| :--- | :--- | :--- | :--- |
| **Corporate Headers** | `Inter`, Sans-Serif | 600, 700, 800 | Authoritative, clean header typography with controlled `tracking-tight` tracking. |
| **Bilingual Body Text**| `Inter`, `Noto Sans JP` | 400, 500 | High-legibility data hierarchy. Standardized line height matching for cross-border reading. |
| **Technical Plates**  | `JetBrains Mono` | 500 | Technical identifiers, location markers, and data points. |

## 📐 Layout Grid & Structural Spacing
- **Grid Schema**: Clean 12-column desktop infrastructure bounded inside a `max-w-7xl` corporate container shell.
- **Borders**: Highly structured, sharp 0.125rem radius (`--radius`) properties for service blocks to emphasize technical discipline.
- **Whitespace**: Generous layout margins between B2B strategic blocks to preserve visual authority and readability.
- **Device-Specific Adaptive Spacing**:
  - **Hero Section**: Responsive paddings are calibrated per device. For mobile and tablet portrait modes, spacing above and below the hero is compressed by at least 50% (`max-height` limits on hero-section, auto-margins, and calibrated `py` classes) to ensure immediate visual connection with content and prevent expansive void spaces. Spacing below the primary CTA buttons is set to 3rem padding to balance visibility and readability. In mobile portrait display specifically, the hero metrics section (containing the 100%, 35+, 20+ indicators) is completely hidden (`display: none`) to optimize vertical space and immediate readability.
  - **Grid Responsive Columns & Cards**: The main menu cards grid adapts to a clean 2-column layout in tablet portrait display and mobile landscape display (`#menu-cards-grid` with `grid-template-columns: repeat(2, minmax(0, 1fr))`) to elegantly present the secondary content blocks (including the corporate Kamo hanko/inkan crest card). On mobile portrait displays, the padding inside these cards is decreased slightly to `1.25rem` (`p-5`), card title font-sizes are reduced to `1.4rem` to prevent text wrapping/clipping on long titles (such as "Experience" and "Resources"), and the vertical line-height leading is tightened (`line-height: 1.15` for headings, `line-height: 1.25` for descriptions) to provide a unified, comfortable editorial presentation.
  - **Multilingual Footer Alignment**: The site footer background color is set to `#FBF9F3` (`bg-paper`) across all pages to preserve a uniform visual signature. In mobile portrait layout, the footer text wraps neatly into exactly three structured lines (Line 1: Copyright & Establishment, Line 2: Location and Rights, Line 3: inline social icons like LinkedIn, X, Facebook) to maintain precise alignment without overlapping or visual clipping, while resolving to standard single-row layout on tablet, desktop, and landscape displays.

## 🎞️ Component Patterns

### 1. Executive Advisory Panels
- **Layout**: Clean grid structures presenting high-tech advisory verticals (e.g., cross-border business entry, technology transfer, strategic matching).
- **Presentation**: High-contrast whitespace framing, minimalist technical iconography, and strict hierarchy layout rules.

### 2. Geographic / Geo-Target Footprint
- **Target Location**: Sakaki-machi, Hanishina District, Nagano Prefecture, Japan (〒389-0601).
- **Execution**: Clear typographic presentation of international coordinate routing, corporate registration information, and embedded JSON-LD schemas mapped precisely to local coordinates for local B2B discoverability.

## 🏗️ Interaction Guidelines
- **Micro-interactions**: Subtle color values shifts on action elements (e.g., default transitions from dark slate to crimson red) using hardware-accelerated transitions. 
- **Restraint**: Interactive layouts must feel controlled and secure. Animations are restricted to smooth opacity transitions during route initialization to preserve structural layout rendering times.