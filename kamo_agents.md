# Coding Agent Instructions (KAMO_AGENTS.md)

This document provides strict technical guidelines and implementation patterns for AI agents working on the Kamo, Inc. B2B Enterprise Corporate Site Renewal.

## 🏗️ Framework & Architecture
- **Core Framework**: TanStack Start (Server-Side Rendered / SSR) running on the Nitro server engine.
- **Routing Engine**: TanStack Route file-based directory (`src/routes/*`).
- **Data Hydration**: Code must be optimized for server-side generation. Ensure all dynamic data properties are server-safe and fully compliant with React hydration boundaries.

## 🚦 Session Start Protocol
1. **Consult Brand Guidelines**: Review `KAMO_DESIGN.md` for layout structures, spacing tokens, and color values before generating components.
2. **Strict Output Execution**: Adhere to the single-file full-compilation protocol. State the target file path clearly (e.g., `📄 src/routes/services.tsx`) before the markdown code block. Do not truncate components or omit code blocks using placeholders.

## 🎨 Implementation Patterns

### Typography & Iconography
- **Corporate Typefaces**: Utilize clean geometric sans-serif typefaces (`Inter` or system-optimized sans font stacks) paired natively with structured `Noto Sans JP` weights.
- **Icon Assets**: Exclusively utilize `lucide-react` for iconography. Ensure proper icon semantic mapping (e.g., global network icons for international business modules, secure lock icons for partnership segments).

### TanStack Native SEO & Metas
- **Routing Metas**: Do not inject raw HTML `<head>` markup inside page routes. Utilize native TanStack Route `meta` arrays or configuration hooks to map titles, target meta descriptions, and complete Open Graph schemas dynamically.
- **JSON-LD Schema**: Inject valid, minified `ConsultingBusiness` or `Organization` Schema.org structures directly inside a script element in the component layout block to pass geo-targeting arrays natively.

## 🛠️ Performance & Accessibility (Core Web Vitals)
- **Asset Control**: Enforce explicit layout properties (`width`, `height`, and `loading="lazy"`) on structural B2B graphics to prevent layout shifts during SSR initialization.
- **Aria Roles**: Every interactive element, navigation anchor, and localized interface control must include explicit descriptive `aria-label` declarations.

## ⚠️ Framework Anti-Patterns
- **No Static Entry Targets**: Do not attempt to modify or reference a root `index.html` file. All core HTML page shells must reside in `src/routes/__root.tsx`.
- **No Dynamic Hydration Disruptions**: Avoid raw client-side window or browser API calls at the root execution layer of components without proper wrapper guards or useEffect blocks.