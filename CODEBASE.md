# TOÁN THCS TRẦN HOÀNG VŨ (CÔ HOA) — CODEBASE ARCHIVE

> **Mô tả dự án**: Website giới thiệu & cổng thông tin tuyển sinh cho Cơ sở dạy thêm môn Toán THCS (Lớp 6–9, Ôn HSG, Luyện thi vào lớp 10) của Cô Hoa tại Ea Kiết, Cư M'gar, Đắk Lắk.
> **Thư mục dự án**: `hoangvu-math-portal`
> **Kiến trúc**: React 19, Vite, TanStack Router, Tailwind CSS v4, Radix UI, Lucide Icons, Sonner.

---

## MỤC LỤC

1. [Tổng quan Kiến trúc & Công nghệ](#1-tổng-quan-kiến-trúc--công-nghệ)
2. [Cấu trúc Thư mục (Tree)](#2-cấu-trúc-thư-mục)
3. [Cấu hình Dự án & Build](#3-cấu-hình-dự-án--build)
   - [`package.json`](#packagejson)
   - [`tsconfig.json`](#tsconfigjson)
   - [`vite.config.ts`](#viteconfigts)
   - [`eslint.config.mjs`](#eslintconfigmjs)
   - [`.prettierrc`](#prettierrc)
4. [Giao diện & Theme Hệ thống](#4-giao-diện--theme-hệ-thống)
   - [`src/styles.css`](#srcstylescss)
   - [`src/lib/utils.ts`](#srclibutilsts)
   - [`src/lib/error-component.tsx`](#srcliberror-componenttsx)
5. [Dữ liệu & Cấu hình Trang](#5-dữ-liệu--cấu-hình-trang)
   - [`src/lib/site.ts`](#srclibsitets)
6. [Router & Shell Ứng dụng](#6-router--shell-ứng-dụng)
   - [`src/router.tsx`](#srcroutertsx)
   - [`src/routes/__root.tsx`](#srcroutes__roottsx)
7. [Trang & Tuyến đường (Routes)](#7-trang--tuyến-đường-routes)
   - [`src/routes/index.tsx` (Trang chủ)](#srcroutesindextsx-trang-chủ)
8. [Thành phần Giao diện (Components)](#8-thành-phần-giao-diện-components)
   - [`src/components/nav.tsx`](#srccomponentsnavtsx)
   - [`src/components/footer.tsx`](#srccomponentsfootertsx)
   - [`src/components/logo.tsx`](#srccomponentslogotsx)
   - [`src/components/enroll-form.tsx`](#srccomponentsenroll-formtsx)
   - [`src/components/today-problem.tsx`](#srccomponentstoday-problemtsx)
9. [UI Primitives (`src/components/ui/`)](#9-ui-primitives)
   - [`src/components/ui/button.tsx`](#srccomponentsuibuttontsx)
   - [`src/components/ui/input.tsx`](#srccomponentsuiinputtsx)
   - [`src/components/ui/label.tsx`](#srccomponentsuilabeltsx)
   - [`src/components/ui/textarea.tsx`](#srccomponentsuitextareatsx)
10. [Hướng dẫn Chạy & Triển khai](#10-hướng-dẫn-chạy--triển-khai)

---

## 1. TỔNG QUAN KIẾN TRÚC & CÔNG NGHỆ

- **Triết lý giao diện**: Phong cách Academic kết hợp truyền thống và hiện đại (Navy `#0e3b7a`, Gold `#c4961a`, Cream `#faf7f1`), font chữ tiêu đề Fraunces (Serif cổ điển) và font nội dung Be Vietnam Pro.
- **Tính năng trọng tâm**:
  - **Hero & Giới thiệu**: Giới thiệu lớp học kèm sát, không gian học tại nhà cô giáo.
  - **Chương trình học 6 lớp**: Lớp 6 (Nền tảng), Lớp 7 (Tư duy), Lớp 8 (Bứt phá), Lớp 9 (Về đích), HSG (Nâng cao), Luyện đề vào 10.
  - **Form đăng ký 1 chạm**: Soạn tin nhắn tự động mở Zalo / gọi điện thoại gửi cho cô Hoa.
  - **Widget bài toán hôm nay**: Tính giá trị biểu thức, giải phương trình, hằng đẳng thức, hàm số kèm gợi ý & đáp án.

---

## 2. CẤU TRÚC THƯ MỤC

```text
hoangvu-math-portal/
├── public/
│   ├── images/
│   │   ├── chalkboard.jpg
│   │   ├── classroom.jpg
│   │   ├── desk.jpg
│   │   ├── emblem.jpg
│   │   └── house.jpg
│   ├── favicon.svg
│   └── og.jpg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   └── textarea.tsx
│   │   ├── enroll-form.tsx
│   │   ├── footer.tsx
│   │   ├── logo.tsx
│   │   ├── nav.tsx
│   │   └── today-problem.tsx
│   ├── lib/
│   │   ├── error-component.tsx
│   │   ├── site.ts
│   │   └── utils.ts
│   ├── routes/
│   │   ├── __root.tsx
│   │   └── index.tsx
│   ├── routeTree.gen.ts
│   ├── router.tsx
│   └── styles.css
├── .prettierrc
├── eslint.config.mjs
├── package.json
├── tsconfig.json
├── vite.config.ts
├── CODEBASE.md
└── IMPROVEMENTS.md
```

---

## 3. CẤU HÌNH DỰ ÁN & BUILD

### `package.json`

```json
{
  "name": "toan-thcs-hoang-vu",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit",
    "lint": "eslint .",
    "format": "prettier --write ."
  },
  "dependencies": {
    "@hookform/resolvers": "^5.7.0",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.8",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@tailwindcss/vite": "^4.3.0",
    "@tanstack/react-query": "^5.101.0",
    "@tanstack/react-router": "^1.170.0",
    "@tanstack/react-start": "^1.168.0",
    "@tanstack/react-table": "^8.21.0",
    "@tanstack/router-plugin": "^1.168.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.0.0",
    "lucide-react": "^0.510.0",
    "react": "^19.2.0",
    "react-day-picker": "^9.14.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.54.0",
    "react-resizable-panels": "^4.6.5",
    "recharts": "^2.13.0",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.5.0",
    "tailwindcss": "^4.3.0",
    "tw-animate-css": "^1.3.4",
    "vaul": "^1.1.2",
    "zod": "^4.4.0",
    "zustand": "^5.0.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.20.0",
    "@types/node": "^22.16.5",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@vitejs/plugin-react": "^5.2.0",
    "eslint": "^9.20.0",
    "eslint-config-prettier": "^10.1.1",
    "eslint-plugin-prettier": "^5.2.6",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "lightningcss": "^1.28.0",
    "prettier": "^3.4.0",
    "typescript": "^5.7.0",
    "typescript-eslint": "^8.56.1",
    "vite": "^8.2.0"
  }
}
```

---

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": [
      "ES2022",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "noEmit": true,
    "types": [
      "vite/client",
      "node"
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    "allowImportingTsExtensions": true
  },
  "include": [
    "src"
  ]
}
```

---

### `vite.config.ts`

```typescript
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
});
```

---

### `eslint.config.mjs`

```javascript
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

/** Flat ESLint config for the TanStack Start app-builder template. */
export default tseslint.config(
  {
    ignores: [
      "dist/**",
      ".output/**",
      ".vercel/**",
      ".nitro/**",
      "node_modules/**",
      "src/routeTree.gen.ts",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  // Disable rules that conflict with Prettier formatting.
  prettier,
);
```

---

### `.prettierrc`

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all",
  "printWidth": 100
}
```

---

## 4. GIAO DIỆN & THEME HỆ THỐNG

### `src/styles.css`

```css
@import "tailwindcss";

@theme {
  --font-sans: "Be Vietnam Pro", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Fraunces", "Times New Roman", serif;

  --color-navy: #0e3b7a;
  --color-navy-deep: #081f45;
  --color-navy-mid: #164a96;
  --color-gold: #c4961a;
  --color-gold-soft: #e0b84a;
  --color-cream: #f3ede0;
  --color-paper: #faf7f1;
  --color-ink: #1c1916;
  --color-ink-muted: #5c564c;
  --color-chalk: #e8e2d4;
  --color-line: color-mix(in oklab, var(--color-ink) 12%, transparent);
  --color-line-strong: color-mix(in oklab, var(--color-ink) 22%, transparent);

  --color-background: var(--color-paper);
  --color-foreground: var(--color-ink);
  --color-primary: var(--color-navy);
  --color-accent: var(--color-gold);

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-full: 9999px;

  --shadow-card:
    0 0 0 1px color-mix(in oklab, var(--color-ink) 6%, transparent),
    0 1px 2px -1px color-mix(in oklab, var(--color-ink) 8%, transparent),
    0 8px 24px -12px color-mix(in oklab, var(--color-navy) 18%, transparent);
}

@layer base {
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  button:not(:disabled),
  [role="button"]:not(:disabled) {
    cursor: pointer;
  }

  body {
    background: var(--color-paper);
    color: var(--color-ink);
    font-family: var(--font-sans);
  }

  h1,
  h2,
  h3 {
    text-wrap: balance;
  }

  summary {
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  img {
    outline: 1px solid color-mix(in oklab, var(--color-ink) 10%, transparent);
    outline-offset: -1px;
  }
}

@layer utilities {
  .font-display {
    font-family: var(--font-display);
  }

  .paper-grid {
    background-image:
      linear-gradient(
        to right,
        color-mix(in oklab, var(--color-navy) 7%, transparent) 1px,
        transparent 1px
      ),
      linear-gradient(
        to bottom,
        color-mix(in oklab, var(--color-navy) 7%, transparent) 1px,
        transparent 1px
      );
    background-size: 28px 28px;
  }

  .gold-rule {
    height: 3px;
    background: var(--color-gold);
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@media print {
  .no-print {
    display: none !important;
  }

  @page {
    size: A3 landscape;
    margin: 10mm;
  }

  body {
    background: white;
  }
}
```

---

### `src/lib/utils.ts`

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

### `src/lib/error-component.tsx`

```tsx
import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main
      className={
        "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center " +
        "bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50"
      }
    >
      <span className="text-red-500" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={2} />
      </span>
      <h1 className="text-lg font-semibold">Something went wrong</h1>
      <p className="max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400">
        {errorMessage(error)}
      </p>
    </main>
  );
}
```

---

## 5. DỮ LIỆU & CẤU HÌNH TRANG

### `src/lib/site.ts`

```typescript
export const SITE = {
  name: "Trần Hoàng Vũ",
  kind: "Cơ sở dạy thêm",
  subject: "Bồi dưỡng kiến thức môn Toán THCS",
  tagline: "Toán THCS — dạy thật, hiểu thật.",
  teacher: "Cô Hoa",
  phone: "0978170900",
  phoneDisplay: "0978 170 900",
  tel: "tel:+84978170900",
  zalo: "https://zalo.me/0978170900",
  addressLine: "Số nhà 65, Thôn 8, Xã Ea Kiết, Tỉnh Đắk Lắk",
  maps: "https://maps.google.com/?q=S%E1%BB%91+nh%C3%A0+65,+Th%C3%B4n+8,+X%C3%A3+Ea+Ki%E1%BA%BFt,+%C4%90%E1%BA%AFk+L%E1%BA%AFk",
  grades: "6 · 7 · 8 · 9",
} as const;

export const PROGRAMS = [
  {
    id: "lop-6",
    grade: "6",
    title: "Lớp 6",
    kicker: "Nền tảng",
    body: "Số học, phân số, tỉ lệ và hình học cơ bản. Xây chắc tư duy để các năm sau không bị hổng.",
  },
  {
    id: "lop-7",
    grade: "7",
    title: "Lớp 7",
    kicker: "Tư duy",
    body: "Số hữu tỉ, đại số, đường thẳng song song và tam giác. Rèn lập luận, không học vẹt.",
  },
  {
    id: "lop-8",
    grade: "8",
    title: "Lớp 8",
    kicker: "Bứt phá",
    body: "Đa thức, phương trình, tứ giác, định lý Thalès. Chữa từng bước, trình bày sạch.",
  },
  {
    id: "lop-9",
    grade: "9",
    title: "Lớp 9",
    kicker: "Về đích",
    body: "Hàm số, hệ thức lượng, đường tròn. Bám chương trình, nhắm thẳng kỳ thi vào 10.",
  },
  {
    id: "hsg",
    grade: "HSG",
    title: "Học sinh giỏi",
    kicker: "Nâng cao",
    body: "Dạng chuyên, mẹo giải nhanh, luyện đề HSG cấp trường và cấp huyện theo sức từng em.",
  },
  {
    id: "vao-10",
    grade: "10",
    title: "Luyện thi vào 10",
    kicker: "Đề thật",
    body: "Ôn theo chuyên đề, giải đề minh họa và đề các năm. Kỹ năng trình bày để không mất điểm oan.",
  },
] as const;

export const HOURS = [
  { day: "Thứ 2 – Thứ 6", time: "17:30 – 20:30" },
  { day: "Thứ 7 – Chủ nhật", time: "08:00 – 11:00" },
] as const;

export const FAQS = [
  {
    q: "Lớp đông không cô?",
    a: "Lớp nhỏ. Cô Hoa kèm sát từng em, chữa bài tại chỗ, phụ huynh nắm được tiến độ sau mỗi tuần.",
  },
  {
    q: "Có học thử không?",
    a: "Có. Gọi hoặc nhắn Zalo để xếp một buổi phù hợp lớp của con. Học phí và lịch cụ thể cô tư vấn trực tiếp.",
  },
  {
    q: "Học phí tính thế nào?",
    a: "Theo lớp và theo số buổi trong tháng. Không thu phí ẩn. Liên hệ cô Hoa để nghe mức phù hợp với con.",
  },
  {
    q: "Con yếu Toán từ trước thì sao?",
    a: "Bắt đầu từ chỗ đang hổng, không nhảy cóc. Mục tiêu trước hết là hiểu — điểm số sẽ theo sau.",
  },
] as const;

export const PROBLEMS = [
  {
    grade: "Lớp 6",
    prompt: "Tính giá trị của biểu thức",
    latex: "2/3 + 5/6",
    hint: "Quy đồng mẫu số 6.",
    answer: "3/2  (hay 1,5)",
  },
  {
    grade: "Lớp 7",
    prompt: "Giải phương trình",
    latex: "2x − 5 = 11",
    hint: "Chuyển vế, đổi dấu, rồi chia hai vế cho 2.",
    answer: "x = 8",
  },
  {
    grade: "Lớp 8",
    prompt: "Rút gọn",
    latex: "(x + 1)(x − 1)",
    hint: "Hằng đẳng thức (a + b)(a − b) = a² − b².",
    answer: "x² − 1",
  },
  {
    grade: "Lớp 9",
    prompt: "Cho f(x) = 2x − 3. Tính",
    latex: "f(5)",
    hint: "Thay x = 5 vào công thức hàm số.",
    answer: "f(5) = 7",
  },
] as const;

export function composeMessage(input: {
  parent: string;
  student: string;
  program: string;
  phone: string;
  note: string;
}) {
  const lines = [
    `Dạ cô Hoa, em muốn đăng ký học Toán tại cơ sở Trần Hoàng Vũ.`,
    input.student ? `Học sinh: ${input.student}.` : "",
    input.program ? `Chương trình: ${input.program}.` : "",
    input.parent ? `Phụ huynh: ${input.parent}.` : "",
    input.phone ? `SĐT: ${input.phone}.` : "",
    input.note ? `Ghi chú: ${input.note}.` : "",
  ].filter(Boolean);
  return lines.join(" ");
}
```

---

## 6. ROUTER & SHELL ỨNG DỤNG

### `src/router.tsx`

```tsx
import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return createRouter({ routeTree, defaultErrorComponent: AppErrorComponent });
}
```

---

### `src/routes/__root.tsx`

```tsx
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const APP_NAME = "Cơ sở dạy thêm Trần Hoàng Vũ";
const APP_DESC =
  "Lớp Toán THCS tại Ea Kiết, Đắk Lắk. Cô Hoa dạy học sinh lớp 6–9, ôn HSG và luyện thi vào 10.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: APP_DESC },
      { name: "theme-color", content: "#0E3B7A" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&display=swap",
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="vi" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-paper text-ink font-sans">
        <Outlet />
        <Toaster
          position="bottom-center"
          toastOptions={{
            className: "font-sans",
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}
```

---

## 7. TRANG & TUYẾN ĐƯỜNG (ROUTES)

### `src/routes/index.tsx` (Trang chủ)

```tsx
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import { EnrollForm } from "@/components/enroll-form";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { TodayProblem } from "@/components/today-problem";
import { Button } from "@/components/ui/button";
import { FAQS, HOURS, PROGRAMS, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh">
      <Nav />
      <Hero />
      <GoldRibbon />
      <Why />
      <Programs />
      <Teacher />
      <TodayProblem />
      <EnrollSection />
      <Place />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-cream">
      <img
        src="/images/classroom.jpg"
        alt="Phòng học Toán buổi chiều, bàn gỗ và bảng xanh"
        className="absolute inset-0 size-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,31,69,0.94)_0%,rgba(8,31,69,0.78)_55%,rgba(8,31,69,0.45)_100%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:flex-row lg:items-end lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft">
            {SITE.kind} · Ea Kiết, Đắk Lắk
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.6rem,8vw,5.4rem)] font-semibold leading-[0.95] tracking-tight text-cream">
            Trần Hoàng Vũ
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-chalk sm:text-xl">
            {SITE.tagline} Cô Hoa kèm từng em lớp {SITE.grades} — ôn học sinh
            giỏi và luyện thi vào 10.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg">
              <a href={SITE.tel}>
                <Phone className="size-4" />
                Gọi {SITE.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="cream" size="lg">
              <a href="#dang-ky">
                Đăng ký học
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
        <ul className="grid w-full max-w-md grid-cols-3 gap-2 self-stretch sm:gap-3">
          {[
            ["6–9", "Lớp THCS"],
            ["HSG", "Nâng cao"],
            ["Vào 10", "Luyện đề"],
          ].map(([k, v]) => (
            <li
              key={k}
              className="flex flex-col justify-end rounded-lg bg-navy/55 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-5"
            >
              <span className="font-display text-2xl font-semibold text-gold-soft sm:text-3xl">
                {k}
              </span>
              <span className="mt-1 text-xs text-chalk sm:text-sm">{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function GoldRibbon() {
  return (
    <div className="bg-gold px-4 py-3 text-center sm:py-3.5">
      <p className="font-display text-base font-semibold tracking-wide text-navy-deep sm:text-xl">
        {SITE.subject}
      </p>
    </div>
  );
}

function Why() {
  const items = [
    {
      icon: Users,
      title: "Lớp nhỏ, kèm sát",
      body: "Không phải trung tâm đông. Cô ngồi sát từng bài, chữa từng bước cho đến khi em hiểu.",
    },
    {
      icon: BookOpen,
      title: "Đúng chương trình THCS",
      body: "Bám sách giáo khoa, bổ sung dạng thi. Học trên lớp đã chắc thì về nhà không sợ.",
    },
    {
      icon: Sparkles,
      title: "Từ hổng kiến thức đến vào 10",
      body: "Yếu thì bù nền. Khỏe thì luyện HSG. Gần thi thì giải đề — mỗi em một nhịp.",
    },
  ];
  return (
    <section className="paper-grid bg-cream">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-xl bg-paper p-6 shadow-[var(--shadow-card)]"
          >
            <item.icon className="size-6 text-gold" strokeWidth={1.6} />
            <h2 className="mt-4 font-display text-2xl font-semibold text-navy">
              {item.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="chuong-trinh" className="bg-paper scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
          Chương trình
        </p>
        <h2 className="mt-2 max-w-xl font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
          Sáu hướng học, một cô giáo
        </h2>
        <p className="mt-3 max-w-xl text-ink-muted">
          Chọn đúng lớp của con. Cô Hoa xếp lịch và giáo án theo sức từng em.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-xl bg-cream p-6 shadow-[var(--shadow-card)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-1 -top-3 font-display text-6xl font-semibold text-navy/10"
              >
                {p.grade}
              </span>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold">
                {p.kicker}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Teacher() {
  return (
    <section id="co-giao" className="bg-navy text-cream scroll-mt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src="/images/desk.jpg"
            alt="Bàn học với compa, thước và giấy ly"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-soft">
            Giáo viên
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Cô Hoa
          </h2>
          <p className="mt-5 text-base leading-relaxed text-chalk sm:text-lg">
            Người cầm lớp tại {SITE.kind.toLowerCase()} {SITE.name}. Không hô
            khẩu hiệu — chỉ ngồi xuống, mở vở, và đi từng bước với con cho đến
            khi bài toán sáng ra.
          </p>
          <p className="mt-4 text-base leading-relaxed text-chalk">
            Phụ huynh cần biết con đang đâu, tuần này yếu chỗ nào, buổi sau làm
            gì: gọi trực tiếp cho cô.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gold">
              <a href={SITE.tel}>
                <Phone className="size-4" />
                {SITE.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href={SITE.zalo} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" />
                Nhắn Zalo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnrollSection() {
  return (
    <section id="dang-ky" className="bg-paper scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:py-20">
        <div className="lg:col-span-2">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
            Câu hỏi thường gặp
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-navy">
            Trước khi gửi con tới lớp
          </h2>
          <div className="mt-6 divide-y divide-line">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-3">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 text-left font-medium text-navy">
                  {f.q}
                  <span className="text-gold transition-transform duration-150 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 pb-2 text-sm leading-relaxed text-ink-muted">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-8 space-y-2 text-sm text-ink-muted">
            {HOURS.map((h) => (
              <p key={h.day} className="flex items-center gap-2">
                <Clock className="size-4 text-gold" />
                <span>
                  {h.day}: <span className="text-ink">{h.time}</span>
                </span>
              </p>
            ))}
            <p className="pt-1 text-xs">
              Lịch cụ thể xếp theo từng lớp — gọi cô trước khi đến.
            </p>
          </div>
        </div>
        <div className="lg:col-span-3">
          <EnrollForm />
        </div>
      </div>
    </section>
  );
}

function Place() {
  return (
    <section id="lien-he" className="relative isolate overflow-hidden bg-navy-deep text-cream">
      <img
        src="/images/house.jpg"
        alt="Nhà mái ngói ở Tây Nguyên, nơi đặt lớp học"
        className="absolute inset-0 size-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-navy-deep/70" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-soft">
          Địa chỉ
        </p>
        <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Số nhà 65, Thôn 8
          <br />
          Xã Ea Kiết, Đắk Lắk
        </h2>
        <p className="mt-4 max-w-md text-chalk">
          Lớp học ngay nhà — phụ huynh đưa đón gần, con không phải đi xa.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="gold">
            <a href={SITE.maps} target="_blank" rel="noreferrer">
              <MapPin className="size-4" />
              Mở bản đồ
            </a>
          </Button>
          <Button asChild variant="cream">
            <a href={SITE.tel}>
              <Phone className="size-4" />
              Gọi chỉ đường
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
```

---

## 8. THÀNH PHẦN GIAO DIỆN (COMPONENTS)

### `src/components/nav.tsx`

```tsx
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/#chuong-trinh", label: "Chương trình" },
  { href: "/#co-giao", label: "Cô giáo" },
  { href: "/#dang-ky", label: "Đăng ký" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-40 bg-paper/92 backdrop-blur-md shadow-[0_1px_0_color-mix(in_oklab,var(--color-ink)_10%,transparent)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Chính">
          {LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-ink-muted no-underline hover:text-navy transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={SITE.tel}>
              <Phone className="size-4" />
              {SITE.phoneDisplay}
            </a>
          </Button>
          <button
            type="button"
            className="md:hidden inline-flex size-11 items-center justify-center rounded-md text-navy"
            aria-expanded={open}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-line bg-paper transition-[max-height,opacity] duration-200 ease-out",
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-4 py-3" aria-label="Di động">
          {LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center text-base font-medium text-ink no-underline"
            >
              {item.label}
            </a>
          ))}
          <a
            href={SITE.tel}
            className="mt-1 flex min-h-11 items-center gap-2 text-base font-medium text-navy no-underline"
          >
            <Phone className="size-4" />
            Gọi {SITE.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
```

---

### `src/components/footer.tsx`

```tsx
import { MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="no-print bg-navy-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo tone="cream" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-chalk">
            Lớp Toán nhỏ tại Ea Kiết. Cô Hoa kèm học sinh lớp 6–9, ôn HSG và
            luyện thi vào 10.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold-soft">
            Liên hệ
          </p>
          <a
            href={SITE.tel}
            className="mt-3 flex items-start gap-2 text-sm text-cream no-underline hover:text-gold-soft"
          >
            <Phone className="mt-0.5 size-4 shrink-0" />
            {SITE.teacher} · {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.maps}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex items-start gap-2 text-sm text-cream no-underline hover:text-gold-soft"
          >
            <MapPin className="mt-0.5 size-4 shrink-0" />
            {SITE.addressLine}
          </a>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold-soft">
            Trên trang
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <a href="/#chuong-trinh" className="text-cream no-underline hover:text-gold-soft">
              Chương trình
            </a>
            <a href="/#dang-ky" className="text-cream no-underline hover:text-gold-soft">
              Đăng ký học
            </a>
          </div>
        </div>
      </div>
      <div className="gold-rule" />
      <p className="px-4 py-4 text-center text-xs text-chalk/80">
        {SITE.kind} {SITE.name} · {SITE.addressLine}
      </p>
    </footer>
  );
}
```

---

### `src/components/logo.tsx`

```tsx
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("size-9 shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="8" fill="currentColor" className="text-navy" />
      <g fill="none" stroke="#c4961a" strokeWidth="1.6">
        <circle cx="24" cy="24" r="12.5" />
        <path d="M24 12.5 L34.8 32.2 H13.2 Z" />
        <path d="M10 24h28" strokeWidth="1.1" />
        <path d="M24 10v28" strokeWidth="1.1" />
      </g>
    </svg>
  );
}

export function Logo({
  tone = "navy",
  compact = false,
}: {
  tone?: "navy" | "cream";
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn(
        "flex items-center gap-2.5 no-underline min-h-11",
        tone === "cream" ? "text-cream" : "text-navy",
      )}
    >
      <Mark className={tone === "cream" ? "text-navy-deep" : "text-navy"} />
      <span className="leading-tight">
        <span className="block font-display text-[1.05rem] font-semibold tracking-tight">
          Trần Hoàng Vũ
        </span>
        {!compact ? (
          <span
            className={cn(
              "block text-[0.68rem] uppercase tracking-[0.16em] font-medium",
              tone === "cream" ? "text-gold-soft" : "text-ink-muted",
            )}
          >
            Toán THCS
          </span>
        ) : null}
      </span>
    </Link>
  );
}
```
```

---

### `src/components/enroll-form.tsx`

```tsx
import { useState, type FormEvent } from "react";
import { Check, Copy, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PROGRAMS, SITE, composeMessage } from "@/lib/site";

const STORAGE_KEY = "thv-enrollments";

type Draft = {
  parent: string;
  student: string;
  program: string;
  phone: string;
  note: string;
};

const empty: Draft = {
  parent: "",
  student: "",
  program: "Lớp 9",
  phone: "",
  note: "",
};

export function EnrollForm() {
  const [draft, setDraft] = useState<Draft>(empty);
  const [message, setMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!draft.student.trim() || !draft.phone.trim()) {
      toast.error("Nhập tên học sinh và số điện thoại giúp cô liên hệ.");
      return;
    }
    const text = composeMessage(draft);
    try {
      const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as unknown[];
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([
          { ...draft, at: new Date().toISOString() },
          ...(Array.isArray(prev) ? prev : []),
        ]),
      );
    } catch {
      /* ignore quota */
    }
    setMessage(text);
    setCopied(false);
    toast.success("Đã soạn tin. Gọi hoặc nhắn Zalo cô Hoa để chốt lịch.");
  }

  async function copyText() {
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      toast.success("Đã sao chép tin nhắn.");
    } catch {
      toast.error("Không sao chép được. Hãy bôi đen và copy tay.");
    }
  }

  return (
    <div className="rounded-xl bg-cream p-5 shadow-[var(--shadow-card)] sm:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
        Đăng ký học
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy">
        Để cô Hoa xếp lớp cho con
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        Form soạn sẵn tin nhắn. Gửi qua Zalo hoặc gọi điện — không cần tài khoản,
        không mất phí ẩn.
      </p>

      <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="student">Họ tên học sinh</Label>
            <Input
              id="student"
              value={draft.student}
              onChange={(e) => setDraft({ ...draft, student: e.target.value })}
              placeholder="Nguyễn Văn A"
              autoComplete="name"
            />
          </div>
          <div>
            <Label htmlFor="parent">Phụ huynh</Label>
            <Input
              id="parent"
              value={draft.parent}
              onChange={(e) => setDraft({ ...draft, parent: e.target.value })}
              placeholder="Chị / anh …"
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="program">Chương trình</Label>
            <select
              id="program"
              value={draft.program}
              onChange={(e) => setDraft({ ...draft, program: e.target.value })}
              className="h-11 w-full rounded-md bg-paper px-3.5 text-base text-ink shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ink)_14%,transparent)] outline-none focus-visible:shadow-[0_0_0_2px_var(--color-gold)]"
            >
              {PROGRAMS.map((p) => (
                <option key={p.id} value={p.title}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="phone">Số điện thoại</Label>
            <Input
              id="phone"
              type="tel"
              inputMode="tel"
              value={draft.phone}
              onChange={(e) => setDraft({ ...draft, phone: e.target.value })}
              placeholder="09xx …"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="note">Ghi chú (không bắt buộc)</Label>
          <Textarea
            id="note"
            value={draft.note}
            onChange={(e) => setDraft({ ...draft, note: e.target.value })}
            placeholder="Con đang yếu phân số, muốn học thử buổi tối…"
          />
        </div>
        <Button type="submit" size="lg">
          Soạn tin đăng ký
        </Button>
      </form>

      {message ? (
        <div className="mt-6 rounded-lg bg-paper p-4">
          <p className="text-sm leading-relaxed text-ink">{message}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button type="button" variant="gold" size="sm" onClick={copyText}>
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? "Đã sao chép" : "Sao chép tin"}
            </Button>
            <Button asChild variant="navy" size="sm">
              <a href={SITE.zalo} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" />
                Mở Zalo
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={SITE.tel}>
                <Phone className="size-4" />
                Gọi cô Hoa
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
```

---

### `src/components/today-problem.tsx`

```tsx
import { useMemo, useState } from "react";
import { Eye, EyeOff, RefreshCw } from "lucide-react";
import { PROBLEMS } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function TodayProblem() {
  const seed = useMemo(() => {
    const d = new Date();
    return d.getFullYear() * 400 + d.getMonth() * 32 + d.getDate();
  }, []);
  const [index, setIndex] = useState(seed % PROBLEMS.length);
  const [show, setShow] = useState(false);
  const problem = PROBLEMS[index]!;

  return (
    <section id="cau-hoi" className="bg-navy-deep text-cream scroll-mt-20">
      <div className="mx-auto grid max-w-6xl items-stretch gap-0 lg:grid-cols-2">
        <div className="relative min-h-64 overflow-hidden">
          <img
            src="/images/chalkboard.jpg"
            alt="Bảng xanh với hình học compass"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/35" />
        </div>
        <div className="px-4 py-12 sm:px-10 sm:py-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
            Câu hỏi hôm nay · {problem.grade}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            {problem.prompt}
          </h2>
          <p className="mt-6 font-display text-2xl text-gold-soft sm:text-3xl">
            {problem.latex}
          </p>
          <p className="mt-4 text-sm text-chalk">Gợi ý: {problem.hint}</p>
          <div
            className="mt-6 min-h-14 rounded-md bg-navy px-4 py-3 text-base"
            aria-live="polite"
          >
            {show ? (
              <span>
                Đáp án: <strong className="text-gold-soft">{problem.answer}</strong>
              </span>
            ) : (
              <span className="text-chalk">Ẩn đáp án — thử làm trước đã.</span>
            )}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Button
              variant="gold"
              size="sm"
              type="button"
              onClick={() => setShow((v) => !v)}
            >
              {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              {show ? "Ẩn đáp án" : "Xem đáp án"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              type="button"
              onClick={() => {
                setShow(false);
                setIndex((i) => (i + 1) % PROBLEMS.length);
              }}
            >
              <RefreshCw className="size-4" />
              Câu khác
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 9. UI PRIMITIVES

### `src/components/ui/button.tsx`

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight no-underline select-none outline-offset-2 focus-visible:outline-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] transition-[scale,background-color,color,box-shadow] duration-150 ease-out",
  {
    variants: {
      variant: {
        navy:
          "bg-navy text-cream hover:bg-navy-mid shadow-[0_1px_0_color-mix(in_oklab,white_18%,transparent)_inset]",
        gold:
          "bg-gold text-navy-deep hover:bg-gold-soft",
        cream:
          "bg-cream text-navy hover:bg-chalk",
        ghost:
          "bg-transparent text-cream hover:bg-cream/10",
        outline:
          "bg-transparent text-navy shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-navy)_28%,transparent)] hover:bg-navy hover:text-cream",
        ink:
          "bg-ink text-cream hover:bg-navy-deep",
      },
      size: {
        sm: "h-10 px-3.5 text-sm rounded-sm",
        md: "h-11 px-4 text-sm rounded-md",
        lg: "h-12 px-5 text-base rounded-md",
      },
    },
    defaultVariants: {
      variant: "navy",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
```

---

### `src/components/ui/input.tsx`

```tsx
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md bg-paper px-3.5 text-base text-ink placeholder:text-ink-muted",
        "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ink)_14%,transparent)]",
        "outline-none focus-visible:shadow-[0_0_0_2px_var(--color-gold)]",
        className,
      )}
      {...props}
    />
  );
}
```

---

### `src/components/ui/label.tsx`

```tsx
import type { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Label({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "block text-sm font-medium text-ink mb-1.5",
        className,
      )}
      {...props}
    />
  );
}
```

---

### `src/components/ui/textarea.tsx`

```tsx
import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full rounded-md bg-paper px-3.5 py-3 text-base text-ink placeholder:text-ink-muted",
        "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ink)_14%,transparent)]",
        "outline-none focus-visible:shadow-[0_0_0_2px_var(--color-gold)]",
        className,
      )}
      {...props}
    />
  );
}
```

---

## 10. HƯỚNG DẪN CHẠY & TRIỂN KHAI

### Cài đặt môi trường

```bash
# Di chuyển vào thư mục dự án
cd hoangvu-math-portal

# Cài đặt toàn bộ dependencies
npm install
```

### Chạy Development Server

```bash
npm run dev
```
Truy cập tại: `http://localhost:5173/` (hoặc cổng Vite khởi chạy)

### Kiểm tra TypeScript & Lint

```bash
npm run typecheck
npm run lint
```

### Build Production

```bash
npm run build
```

---
*File lưu trữ toàn bộ mã nguồn dự án Toán THCS Trần Hoàng Vũ (Cô Hoa) — Codebase chuẩn hóa, độc lập và sạch sẽ.*
