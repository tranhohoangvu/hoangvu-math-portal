# 📐 Hoang Vu Math Portal

**English** | [Tiếng Việt](./README_VN.md)

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TanStack Router](https://img.shields.io/badge/TanStack_Router-v1-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/router)

A modern, high-performance, responsive single-page web portal built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **TanStack Router**. Designed with an editorial design system, strict type safety, accessible UI primitives, and optimized client-side performance.

---

## 📌 Project Overview

**Hoang Vu Math Portal** is an online admissions and informational web portal built for **Tran Hoang Vu Math Knowledge Enrichment Center**.

The portal serves as a digital bridge connecting the education center with students and parents:
- **Curriculum & Programs**: Explore mathematics curricula for Grades 6–9, Gifted Olympiad preparation, and High School Entrance Exam prep.
- **Online Admission**: Dynamic enrollment form that auto-formats messaging payloads for quick Zalo / direct phone inquiries.
- **Interactive Math Widget**: Engaging daily math practice module tailored to each grade level.
- **Location & Fast Contact**: Embedded interactive Google Maps routing and an adaptive floating contact bar optimized for desktop and mobile.

---

## ⚡ Technical Highlights & Architecture

- **Strict Type Safety**: Fully end-to-end typechecked using TypeScript 5.7 and TanStack Router's type-safe routing tree (`routeTree.gen.ts`).
- **Tailwind CSS v4 Engine**: Built on the new `@theme` CSS configuration with custom OKLab color gamuts, editorial typography tokens, and GPU-accelerated CSS keyframe animations.
- **Accessible UI Primitives**: Integrated with [Radix UI](https://www.radix-ui.com/) primitives (`Slot`, `Label`, `Dialog`, etc.) adhering to WAI-ARIA guidelines.
- **Dynamic Interaction Modules**:
  - **Dynamic Action Bar / FAB**: Adaptive contact docking system with custom vibration/ring CSS keyframes and hover-pause states.
  - **Client-Side Form Composition**: Dynamic payload generator formatting localized messages for third-party messaging integrations.
  - **Interactive Math Widget**: State-driven quiz/math renderer with progressive disclosure and instant hint feedback.
  - **Dynamic QR Code Integration**: On-the-fly QR code generation for rapid mobile device handoff.
- **Performance & Print Optimization**: Zero heavy runtime dependencies, responsive image handling, smooth scroll behaviors, and custom `@media print` style overrides for paper exports.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | Core UI library utilizing modern hooks and concurrent rendering |
| **Language** | [TypeScript 5.7](https://www.typescriptlang.org/) | Static type safety and developer tooling |
| **Build Tool** | [Vite 8](https://vitejs.dev/) | Ultra-fast HMR and Rollup-powered production bundling |
| **Routing** | [@tanstack/react-router](https://tanstack.com/router) | 100% type-safe client-side routing & code-splitting |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | CSS-first configuration via `@theme` and OKLab color space |
| **Icons** | [Lucide React](https://lucide.dev/) | Lightweight, tree-shakeable SVG icon set |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) | Headless, accessible toast notification stack |
| **Lint & Format** | [ESLint 9](https://eslint.org/) (Flat Config) & [Prettier 3](https://prettier.io/) | Automated code quality, formatting, and style enforcement |

---

## 📂 Project Structure

```text
hoangvu-math-portal/
├── public/                     # Static public assets (images, icons, OpenGraph)
│   ├── favicon.svg
│   ├── og.jpg
│   └── images/
├── src/
│   ├── components/             # Application UI components
│   │   ├── ui/                 # Atomic UI primitives (button, input, label, textarea)
│   │   ├── enroll-form.tsx     # Admission registration form logic
│   │   ├── floating-contact.tsx# Floating Action Button (FAB) & QR dialog
│   │   ├── footer.tsx          # Site footer & external map actions
│   │   ├── logo.tsx            # Brand vector typography component
│   │   ├── nav.tsx             # Sticky navbar with mobile navigation drawer
│   │   └── today-problem.tsx   # Interactive client-side math problem widget
│   ├── lib/                    # Shared utilities, schemas, and site configuration
│   │   ├── site.ts             # Static content configuration & structured data
│   │   ├── utils.ts            # Tailwind class merger (`clsx` + `twMerge`)
│   │   └── error-component.tsx # Fallback boundary for router errors
│   ├── routes/                 # File-based route definitions
│   │   ├── __root.tsx          # Root layout with TanStack router context
│   │   └── index.tsx           # Home page entry & landing layout
│   ├── router.tsx              # Router instance bootstrap
│   ├── routeTree.gen.ts        # Auto-generated type-safe route tree
│   └── styles.css              # Tailwind v4 theme, keyframes & design system tokens
├── .prettierrc                 # Prettier configuration
├── eslint.config.mjs           # ESLint 9 flat configuration
├── tsconfig.json               # TypeScript compiler options
└── vite.config.ts              # Vite & TanStack Router plugin configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **Package Manager**: `npm` (v9+), `pnpm`, or `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tranhohoangvu/hoangvu-math-portal.git
   cd hoangvu-math-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000` (or the port specified by Vite).

---

## 💻 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite local development server with HMR |
| `npm run build` | Compiles TypeScript and builds the production bundle in `dist/` |
| `npm run preview` | Runs a local static server to preview the production build |
| `npm run typecheck` | Validates TypeScript types across the codebase (`tsc --noEmit`) |
| `npm run lint` | Lints files using ESLint 9 flat config rules |
| `npm run format` | Auto-formats all source files using Prettier |

---

## 🎨 Design System & Animation Tokens

The design tokens are declared in [`src/styles.css`](src/styles.css) via `@theme`:

```css
@theme {
  --color-navy: #0e3b7a;
  --color-navy-deep: #081f45;
  --color-gold: #c4961a;
  --color-gold-soft: #e0b84a;
  --color-paper: #faf7f1;
  --color-ink: #1c1916;
}
```

### Micro-Animations
- **`animate-phone-ring`**: Periodic 3.2s rotational vibration cycle for CTA callouts.
- **`animate-fab-shake`**: Periodic gentle wobble with radial wave pulse (`animate-pulse-ring`).
- **Hover Playback Pause**: Animations automatically pause on `:hover` to ensure seamless user interaction and pointer precision.

---

## 🚢 Deployment

The project builds as a purely static Single Page Application (SPA) compatible with any static hosting platform:

- **Vercel**: Connect the GitHub repository; build command: `npm run build`, output directory: `dist`.
- **Cloudflare Pages / Netlify / GitHub Pages**: Deploy using `dist` as the build output directory.

---

## 📄 License

This project is proprietary and maintained for internal operations. All rights reserved.
