# 📐 Hoang Vu Math Portal

**English** | [Tiếng Việt](./README_VN.md)

[![Live Demo](https://img.shields.io/badge/Live_Demo-hoangvumathcenter.vercel.app-00DC82?style=for-the-badge&logo=vercel&logoColor=white)](https://hoangvumathcenter.vercel.app/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TanStack Router](https://img.shields.io/badge/TanStack_Router-v1-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/router)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> 🌐 **Production Website**: [https://hoangvumathcenter.vercel.app/](https://hoangvumathcenter.vercel.app/)

A modern, high-performance, responsive academic web portal built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **TanStack Router**. Built with an editorial design system, strict type safety, accessible UI primitives, and zero-dependency client-side speed.

---

## 📌 Project Overview

**Hoang Vu Math Portal** is an admissions and informational web platform for **Tran Hoang Vu Math Knowledge Enrichment Center**.

The portal serves as an interactive digital gateway for parents and secondary school students:
- 📚 **Comprehensive Curriculum**: Detailed curricula for Grades 6, 7, 8, 9, Gifted Olympiad preparation (HSG), and High School Entrance Exam prep (Luyện thi vào 10).
- 📝 **Smart Enrollment Form**: Dynamic form generator that builds formatted admission messages with selectable learning goals, schedule preferences, reset capabilities, and instant Zalo QR code handoff.
- 🧮 **Interactive Math Widget**: Engaging daily math practice module with progressive hint revelation and answer checking for each grade.
- 📍 **Interactive Maps & Navigation**: Live embedded Google Maps showing the center facility location and driving directions.
- 📞 **Adaptive Floating Contact Bar (FAB)**: Multi-channel quick contact dock (Hotline & Zalo) with custom ringing micro-animations and desktop QR modal.

---

## ⚡ Technical Highlights & Architecture

- **Strict Type Safety**: Fully end-to-end typechecked using TypeScript 5.7 and TanStack Router's auto-generated tree (`routeTree.gen.ts`).
- **Tailwind CSS v4 Engine**: Built on the `@theme` CSS configuration with custom OKLab color tokens (`--color-navy`, `--color-gold`, `--color-cream`, `--color-paper`), Fraunces serif typography, and GPU-accelerated keyframe animations.
- **Accessible UI Primitives**: Integrated with [Radix UI](https://www.radix-ui.com/) primitives (`Slot`, `Label`, `Dialog`, etc.) adhering to WAI-ARIA standards.
- **Interactive Modules**:
  - **Dynamic Action Bar / FAB**: Adaptive contact docking system with custom vibration/ring CSS keyframes (`phone-ring`, `fab-shake`, `pulse-ring`).
  - **Client-Side Form Composition**: Dynamic payload generator formatting localized messages for third-party messaging integrations without backend database overhead.
  - **Interactive Math Widget**: State-driven quiz/math renderer with progressive disclosure and instant hint feedback.
  - **Dynamic QR Code Integration**: On-the-fly QR code generation for rapid mobile device handoff.
- **Deployment Ready**: Powered by **TanStack Start** with **Nitro Engine** for seamless zero-config deployment on **Vercel** and edge hosting providers.

---

## 📂 Project Structure

```text
hoangvu-math-portal/
├── public/                             # Static public assets served directly
│   ├── favicon.svg                     # Vector favicon brand icon
│   ├── og.jpg                          # OpenGraph social share card image
│   └── images/                         # Curated photography & branding images
│       ├── chalkboard.jpg              # Mathematical formulas on green chalkboard
│       ├── classroom.jpg               # Sunlight classroom hero background
│       ├── co-hoa.jpg                  # Portrait of Lead Mathematics Teacher
│       ├── desk.jpg                    # Wood study desk with books & notebook
│       ├── emblem.jpg                  # Golden academic compass & compass seal
│       └── house.jpg                   # Center building facility & study space
├── src/                                # Application source code
│   ├── components/                     # Reusable React UI components
│   │   ├── ui/                         # Atomic UI primitives (Design System)
│   │   │   ├── button.tsx              # CVA-styled button (gold, navy, cream, outline, ghost)
│   │   │   ├── input.tsx               # Accessible form text input with gold focus ring
│   │   │   ├── label.tsx               # Radix UI label primitive wrapper
│   │   │   └── textarea.tsx            # Multi-line text area with theme border styling
│   │   ├── enroll-form.tsx             # Admission registration form + Zalo QR & Reset button
│   │   ├── floating-contact.tsx        # Floating Action Bar (FAB) & Zalo QR modal dialog
│   │   ├── footer.tsx                  # Semantic footer with navigation links & directions
│   │   ├── logo.tsx                    # Brand vector typography component with serif badge
│   │   ├── nav.tsx                     # Sticky navbar with prominent gold CTA button & mobile drawer
│   │   └── today-problem.tsx           # Interactive client-side daily math practice widget
│   ├── lib/                            # Core configuration, schemas, and shared utilities
│   │   ├── error-component.tsx         # Global error fallback boundary for TanStack Router
│   │   ├── not-found-component.tsx     # Custom 404 Not Found fallback component
│   │   ├── site.ts                     # Central site metadata, curricula data, teacher bio & helpers
│   │   └── utils.ts                    # Class name utility helper (`clsx` + `tailwind-merge`)
│   ├── routes/                         # File-based routing definitions
│   │   ├── __root.tsx                  # Root HTML shell, Google Fonts, OpenGraph & Toast provider
│   │   └── index.tsx                   # Main landing page (Hero, Programs, Teacher, Map, FAQs)
│   ├── router.tsx                      # Router factory initializing TanStack Router instance
│   ├── routeTree.gen.ts                # Auto-generated type-safe route tree definitions
│   └── styles.css                      # Tailwind v4 theme, OKLab colors, design tokens & keyframes
├── .prettierrc                         # Code formatting rules (Prettier)
├── eslint.config.mjs                   # ESLint 9 flat configuration
├── IMPROVEMENTS.md                     # Roadmap tracking & enhancement checklist
├── package.json                        # Project dependencies, scripts & metadata
├── README.md                           # Project documentation (English)
├── README_VN.md                        # Project documentation (Tiếng Việt)
├── tsconfig.json                       # TypeScript compiler configuration & path aliases (`@/*`)
└── vite.config.ts                      # Vite 8 config with Tailwind v4, TanStack Start & Nitro
```

---

## 🛠️ Technology Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | [React](https://react.dev/) | `^19.2.0` | Core UI library utilizing concurrent rendering and modern hooks |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `^5.7.0` | Strict static type checking and enhanced developer experience (DX) |
| **Build Tool** | [Vite](https://vitejs.dev/) | `^8.2.0` | Lightning-fast development server with Hot Module Replacement (HMR) |
| **Routing** | [@tanstack/react-router](https://tanstack.com/router) | `^1.170.0` | 100% type-safe client-side routing & code-splitting |
| **Fullstack/SSR** | [@tanstack/react-start](https://tanstack.com/start) | `^1.168.0` | Universal runtime powered by Nitro server engine |
| **Deployment Engine** | [Nitro](https://nitro.unjs.io/) | `^2.10.0` | Universal output compiler for Vercel Serverless Functions |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | `^4.3.0` | CSS-first configuration via `@theme` and OKLab color gamut |
| **Icons** | [Lucide React](https://lucide.dev/) | `^0.510.0` | Lightweight, tree-shakeable SVG icon set |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) | `^2.0.7` | Headless, accessible toast notification stack |
| **Code Quality** | [ESLint 9](https://eslint.org/) & [Prettier](https://prettier.io/) | `^9.20.0` / `^3.4.0` | Automated linting, code formatting, and style consistency |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm` (v9+), `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tranhohoangvu/hoangvu-math-portal.git
   cd hoangvu-math-portal
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser to view the application.

---

## 💻 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **Dev** | `npm run dev` | Launches the Vite local dev server with instant HMR on port `3000` |
| **Build** | `npm run build` | Compiles TypeScript and packages the production build |
| **Preview** | `npm run preview` | Starts a local server to preview the production build output |
| **Typecheck** | `npm run typecheck` | Validates TypeScript types across all source files (`tsc --noEmit`) |
| **Lint** | `npm run lint` | Analyzes code for quality and potential errors via ESLint 9 |
| **Format** | `npm run format` | Formats all files automatically according to Prettier rules |

---

## 🎨 Design System & Animation Tokens

The design system is declared in [`src/styles.css`](src/styles.css) via `@theme`:

```css
@theme {
  --font-serif: "Fraunces", "Times New Roman", Georgia, serif;
  --color-navy: #0e3b7a;
  --color-navy-deep: #081f45;
  --color-navy-mid: #164a96;
  --color-gold: #c4961a;
  --color-gold-soft: #e0b84a;
  --color-cream: #f3ede0;
  --color-paper: #faf7f1;
  --color-ink: #1c1916;
  --color-ink-muted: #5c564c;
}
```

### Keyframe Micro-Animations
- **`animate-phone-ring`**: Periodic 3.2s rotational vibration cycle for CTA callouts.
- **`animate-fab-shake`**: Periodic gentle wobble with radial wave pulse (`animate-pulse-ring`).
- **`shimmer-btn-gold`**: Continuous diagonal golden light beam sweep across primary CTA buttons.
- **`shimmer-btn-navy`**: Polished translucent light beam sweep for secondary dark action buttons.
- **Pause on Hover**: All micro-animations automatically pause on `:hover` for click precision and accessibility.

---

## 🚢 Deployment

The project is deployed and live at: **[https://hoangvumathcenter.vercel.app/](https://hoangvumathcenter.vercel.app/)**

### Deployment with Vercel:
1. Connect the GitHub repository `tranhohoangvu/hoangvu-math-portal` to [Vercel](https://vercel.com).
2. **Framework Preset**: Select `Other` (or auto-detected Nitro).
3. **Build Command**: `npm run build` (Default).
4. **Output Directory**: Leave empty / toggle OFF (Nitro outputs directly to `.vercel/output`).
5. Every `git push origin main` triggers an automatic continuous deployment.

---

## 📄 License

This project is proprietary and maintained for **Trung tâm Bồi dưỡng Kiến thức Trần Hoàng Vũ**. All rights reserved.
