# Coding Agent Instructions (KAMO_AGENTS.md)

This document provides strict technical guidelines and implementation patterns for AI agents working on the Kamo, Inc. B2B Enterprise Corporate Site Renewal.

## 🏗️ Framework & Architecture

- **Core Architecture**: High-performance, portable bilingual static multi-page HTML website with parallel English (root) and Japanese (`/ja/`) directory structures.
- **Key Files & Parallel Page Hierarchy**:
  - **English Pages (Root Directory / `en`)**:
    - `index.html` (Home, Hero, Metrics, Selected Clients Marquee)
    - `bio.html` (Who we are / Executive details)
    - `services.html` (What we do / Consulting verticals)
    - `experience.html` (How you can benefit / Case studies)
    - `resources.html` (Publications / Insights)
    - `contact.html` (Inquiries / Local coordinates / Contact form)
  - **Japanese Pages (`/ja/` Subdirectory / `ja`)**:
    - `ja/index.html` (日本語トップページ)
    - `ja/bio.html` (経歴)
    - `ja/services.html` (業務内容)
    - `ja/experience.html` (実績)
    - `ja/resources.html` (資料)
    - `ja/contact.html` (お問い合わせ)
- **Styling**: Tailwind CSS v4 compiled using `@tailwindcss/cli` from `src/styles.css`.
- **Build & Compilation**: Managed by a custom `build-static.js` script that handles:
  - Asset cleanup and directory synchronization between `/src/assets`, `/assets`, and `/dist/assets`.
  - Copying all root static HTML files, the `/ja/` directory, and CNAME to the `./dist` directory.
  - Generating `.nojekyll` to disable GitHub Pages Jekyll processing.
  - Compiling production-ready Tailwind CSS with CLI utilities to both local `css/` and build `dist/css/` paths.
- **Local Dev Server**: Handled using Vite as a fast static asset server. The start command triggers `node build-static.js && vite` to ensure styles are built prior to startup.

## 🌐 Bilingual (JP/EN) Structure & Localization Protocol

### 📁 Asset & Navigation Path Rules
- **Root English Pages**: Reference assets via relative root paths (`css/styles.css`, `js/main.js`, `assets/filename.svg`).
- **Japanese (`/ja/`) Pages**: Reference assets and root links via parent-relative paths (`../css/styles.css`, `../js/main.js`, `../assets/filename.svg`, `../bio.html`).
- **Subdirectory Deployment Compatibility**: Never use root-absolute paths (`/css/...` or `/assets/...`). Always use strictly relative paths to support root domain and subfolder deployments (e.g. GitHub Pages `username.github.io/repo/`).

### 🔄 Language Detection, Switching & State Management
- **Persistence Layer (`js/main.js`)**:
  - Stores user language preference in `localStorage` under both `kamo_lang` and `kamo-lang` keys (`"en"` or `"ja"`).
  - **Browser Auto-Detection**: When no user-explicit `localStorage` preference (`kamo_lang_user_chosen`) exists, checks `navigator.languages` or `navigator.language` in priority order for the user's primary language (`en` or `ja`). Defaults to Japanese (`"ja"`) only if `ja` is preferred ahead of `en`, otherwise defaults to English (`"en"`).
  - **Interactive Switchers**: Buttons with `data-lang-switch="en"` or `data-lang-switch="ja"` trigger `setLang(lang)` to update `localStorage` and smoothly redirect to the target language page.
- **Pre-Render Flash Prevention (FOUC)**:
  - Both `/index.html` and `/ja/index.html` include an inline `<script>` block in `<head>` executing before DOM rendering. `/index.html` redirects to `ja/` if Japanese is preferred/saved, while `/ja/index.html` strictly stays on Japanese unless the user explicitly chose English previously (`kamo_lang_user_chosen === true`).

### 🏷️ SEO & Hreflang Canonical Standards
Every English and Japanese page includes symmetric canonical and `hreflang` tags in `<head>`:
```html
<link rel="canonical" href="https://www.kamoinc.com/page.html" />
<link rel="alternate" hreflang="en" href="https://www.kamoinc.com/page.html" />
<link rel="alternate" hreflang="ja" href="https://www.kamoinc.com/ja/page.html" />
<link rel="alternate" hreflang="x-default" href="https://www.kamoinc.com/page.html" />
```

## 🚦 Session Start Protocol

1. **Consult Brand Guidelines**: Review `kamo_design.md` for layout structures, spacing tokens, color values, and responsive constraints before generating components or styling changes.
2. **Strict Output Execution**: Ensure any edits are applied directly to the correct HTML page (`index.html`, `ja/index.html`, etc.) or script files (`js/main.js`, etc.). Never leave incomplete code placeholders or omit translated bilingual content.

## 🎨 Implementation Patterns

### Typography & Iconography

- **Corporate Typefaces**: Utilize clean geometric sans-serif typefaces (`Inter` or system-optimized sans font stacks) paired natively with structured `Noto Sans JP` weights.
- **Icon Assets**: Exclusively utilize `lucide-react` via CDN or appropriate client-side svg icons as established in the HTML files. Maintain uniform icon sizes and clean alignment.

### Native SEO & Metadata

- **Metadata Rules**: Ensure accurate `<title>` and metadata descriptions are defined within each page's `<head>` tag.
- **JSON-LD Schema**: Maintain valid `ConsultingBusiness` or `Organization` Schema.org structures in the head of core pages to pass geo-targeting arrays natively.

## 🛠️ Performance & Accessibility (Core Web Vitals)

- **Asset Control**: Enforce explicit layout properties (`width`, `height`, and `loading="lazy"`) on structural B2B graphics to prevent layout shifts.
- **Aria Roles**: Every interactive element, navigation anchor, and localized language switch control must include explicit descriptive `aria-label` declarations.

## ⚠️ Framework Anti-Patterns

- **No Static Entry Targets (Obsolete)**: The project is a static site. Modifying `/index.html`, `/ja/*.html`, and other page HTML files directly is the expected behavior.
- **No Absolute Path Assets**: Do NOT use absolute root-relative asset URLs (like `/css/styles.css` or `/assets/logo.png`). Always use relative paths (e.g., `css/styles.css`, `assets/logo.png`, `../css/styles.css`) to support subfolder deployments on GitHub Pages or custom subdirectories.

