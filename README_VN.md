# 📐 Hoang Vu Math Portal

[English Version](./README.md) | **Tiếng Việt**

[![Trực tiếp Website](https://img.shields.io/badge/Tr%E1%BB%B1c_ti%E1%BA%BFp-hoangvumathcenter.vercel.app-00DC82?style=for-the-badge&logo=vercel&logoColor=white)](https://hoangvumathcenter.vercel.app/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TanStack Router](https://img.shields.io/badge/TanStack_Router-v1-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/router)

> 🌐 **Địa chỉ truy cập trực tiếp**: [https://hoangvumathcenter.vercel.app/](https://hoangvumathcenter.vercel.app/)

Ứng dụng web Single Page Application (SPA) hiệu năng cao, xây dựng trên nền tảng **React 19**, **TypeScript**, **Tailwind CSS v4**, và **TanStack Router**. Dự án được thiết kế theo hệ thống Design System phong cách Editorial, tối ưu trải nghiệm người dùng, hỗ trợ đầy đủ accessibility (a11y) và kiểm soát chặt chẽ kiểu dữ liệu (Strict Type Safety).

---

## 📌 Giới Thiệu Tổng Quan

**Hoang Vu Math Portal** là cổng thông tin và tuyển sinh trực tuyến cho **Trung tâm Bồi dưỡng Kiến thức Trần Hoàng Vũ**.

Trang web đóng vai trò cầu nối số hóa giữa trung tâm với phụ huynh và học sinh:
- **Tra cứu chương trình học**: Xem chi tiết lộ trình Toán các khối 6, 7, 8, 9, bồi dưỡng HSG và ôn thi vào 10.
- **Đăng ký tuyển sinh trực tuyến**: Biểu mẫu thông minh tự động soạn tin nhắn mẫu để gửi qua Zalo hoặc gọi hotline.
- **Tương tác học tập**: Thử sức nhanh với widget *"Câu hỏi hôm nay"* theo từng khối lớp.
- **Chỉ đường & Liên hệ nhanh**: Tích hợp Google Maps định vị trung tâm và thanh công cụ liên hệ đa kênh (Hotline, Zalo, QR Code) tối ưu cho cả máy tính và điện thoại.

---

## ⚡ Điểm Nhấn Kỹ Thuật & Kiến Trúc

- **Strict Type Safety**: Kiểm soát kiểu dữ liệu toàn diện từ đầu đến cuối với TypeScript 5.7 và cây định tuyến tự động sinh (`routeTree.gen.ts`) của TanStack Router.
- **Engine Tailwind CSS v4**: Xây dựng trên cơ chế `@theme` thuần CSS mới nhất, hỗ trợ không gian màu OKLab và các animation keyframe tối ưu hóa bằng phần cứng (GPU-accelerated).
- **UI Primitives Chuẩn Accessibility**: Tích hợp các primitive từ [Radix UI](https://www.radix-ui.com/) (`Slot`, `Label`, `Dialog`, v.v.) tuân thủ nghiêm ngặt tiêu chuẩn WAI-ARIA.
- **Các Module Tương Tác Động**:
  - **Dynamic Action Bar / FAB**: Hệ thống nút liên hệ nổi đa trạng thái với animation rung lắc mô phỏng chuông điện thoại thật và tự động dừng khi rê chuột (`:hover`).
  - **Client-Side Form Composition**: Module tạo payload tin nhắn động, tự động định dạng dữ liệu để chuyển tiếp nhanh sang các ứng dụng nhắn tin.
  - **Interactive Math Widget**: Module trắc nghiệm toán học tương tác client-side với cơ chế gợi ý và hiển thị đáp án thông minh.
  - **Dynamic QR Code Integration**: Tạo mã QR tức thì (on-the-fly) phục vụ kết nối nhanh trên thiết bị di động.
- **Tối Ưu Hiệu Năng & Hỗ Trợ In Ấn**: Bundle gọn nhẹ, lazy loading tài nguyên thông minh, hiệu ứng cuộn mượt mà và tích hợp sẵn `@media print` cho nhu cầu xuất tài liệu in ấn.

---

## 🛠️ Danh Sách Công Nghệ (Tech Stack)

| Phân tầng | Công nghệ | Mục đích sử dụng |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | Thư viện UI cốt lõi với Concurrent Rendering và React Hooks hiện đại |
| **Language** | [TypeScript 5.7](https://www.typescriptlang.org/) | Đảm bảo an toàn kiểu dữ liệu và nâng cao trải nghiệm lập trình (DX) |
| **Bundler** | [Vite 8](https://vitejs.dev/) | Công cụ build siêu tốc với HMR và Rollup đóng gói mã nguồn |
| **Routing** | [@tanstack/react-router](https://tanstack.com/router) | Hệ thống định tuyến SPA type-safe 100% |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Cấu hình styling trực tiếp qua `@theme` CSS và gam màu OKLab |
| **Icons** | [Lucide React](https://lucide.dev/) | Bộ icon SVG dạng tree-shakeable gọn nhẹ |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) | Thư viện toast thông báo trực quan, hiệu năng cao |
| **Lint & Format** | [ESLint 9](https://eslint.org/) (Flat Config) & [Prettier 3](https://prettier.io/) | Tự động kiểm tra chất lượng mã nguồn và định dạng code đồng nhất |

---

## 📂 Cấu Trúc Thư Mục Dự Án

```text
hoangvu-math-portal/
├── public/                     # Tài nguyên tĩnh công khai (hình ảnh, favicon, OpenGraph)
│   ├── favicon.svg
│   ├── og.jpg
│   └── images/
├── src/
│   ├── components/             # Các UI Components của ứng dụng
│   │   ├── ui/                 # UI Primitives nguyên tử tái sử dụng (button, input, label, textarea)
│   │   ├── enroll-form.tsx     # Form đăng ký tuyển sinh
│   │   ├── floating-contact.tsx# Nút liên hệ nổi (FAB) & Modal mã QR
│   │   ├── footer.tsx          # Chân trang & liên kết bản đồ
│   │   ├── logo.tsx            # Logo thương hiệu typography
│   │   ├── nav.tsx              # Navbar cố định tích hợp menu di động
│   │   └── today-problem.tsx   # Widget tương tác câu hỏi toán học
│   ├── lib/                    # Cấu hình dữ liệu tĩnh, schema và utilities dùng chung
│   │   ├── site.ts             # Dữ liệu cấu hình cổng thông tin & nội dung tĩnh
│   │   ├── utils.ts            # Hàm tiện ích Tailwind (`clsx` + `twMerge`)
│   │   └── error-component.tsx # Component hiển thị lỗi định tuyến (Router Error Boundary)
│   ├── routes/                 # Định nghĩa các trang theo file-based routing
│   │   ├── __root.tsx          # Layout gốc bọc ngữ cảnh TanStack Router
│   │   └── index.tsx           # Trang chủ (Landing Page chính)
│   ├── router.tsx              # Khởi tạo instance của router
│   ├── routeTree.gen.ts        # File tự động sinh của TanStack Router
│   └── styles.css              # Cấu hình Tailwind v4, keyframes & design system tokens
├── .prettierrc                 # Cấu hình định dạng Prettier
├── eslint.config.mjs           # Cấu hình ESLint 9 (Flat Config)
├── tsconfig.json               # Cấu hình TypeScript compiler
└── vite.config.ts              # Cấu hình Vite & plugin TanStack Router
```

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Chạy

### Yêu cầu môi trường
- **Node.js**: Phiên bản `18.0.0` trở lên
- **Trình quản lý gói**: `npm` (v9+), `pnpm`, hoặc `yarn`

### Các bước thực hiện

1. Clone kho mã nguồn về máy:
   ```bash
   git clone https://github.com/tranhohoangvu/hoangvu-math-portal.git
   cd hoangvu-math-portal
   ```

2. Cài đặt các thư viện phụ thuộc:
   ```bash
   npm install
   ```

3. Khởi chạy máy chủ phát triển (Dev Server):
   ```bash
   npm run dev
   ```
   Truy cập vào địa chỉ hiển thị trên terminal (mặc định: `http://localhost:3000`).

---

## 💻 Danh Sách Lệnh Khả Dụng (Scripts)

| Lệnh | Chức năng |
| :--- | :--- |
| `npm run dev` | Chạy máy chủ phát triển cục bộ với tính năng HMR |
| `npm run build` | Kiểm tra kiểu TypeScript và đóng gói mã nguồn production vào `dist/` |
| `npm run preview` | Chạy máy chủ tĩnh cục bộ để xem trước bản build production |
| `npm run typecheck` | Kiểm tra lỗi kiểu TypeScript toàn bộ dự án (`tsc --noEmit`) |
| `npm run lint` | Quét và kiểm tra chất lượng code với ESLint 9 |
| `npm run format` | Tự động căn chỉnh và format toàn bộ code bằng Prettier |

---

## 🎨 Hệ Thống Design Tokens & Animations

Các biến màu sắc và kích thước được khai báo trong [`src/styles.css`](src/styles.css) thông qua cú pháp `@theme`:

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

### Keyframes & Micro-Animations
- **`animate-phone-ring`**: Chu kỳ rung xoay 3.2s tạo sự chú ý cho nút gọi hotline.
- **`animate-fab-shake`**: Hiệu ứng lắc nhẹ chu kỳ 3.5s kết hợp sóng hào quang lan tỏa (`animate-pulse-ring`).
- **Cơ chế Pause on Hover**: Tất cả animation tự động tạm dừng khi người dùng đưa con trỏ chuột (`:hover`) vào nút nhằm đảm bảo độ chính xác khi click.

---

## 🚢 Hướng Dẫn Triển Khai (Deployment)

Website hiện đang hoạt động trực tiếp tại: **[https://hoangvumathcenter.vercel.app/](https://hoangvumathcenter.vercel.app/)**

Dự án được vận hành bởi **TanStack Start** cùng **Nitro Engine** trên nền tảng **Vercel**:
- **Địa chỉ Online**: [https://hoangvumathcenter.vercel.app/](https://hoangvumathcenter.vercel.app/)
- **Vercel**: Tự động triển khai Serverless Functions và Static Assets qua Nitro plugin khi đẩy code lên nhánh `main`.
- **Cloudflare Pages / Netlify**: Hỗ trợ sẵn sàng qua các preset của Nitro.

---

## 📄 Bản Quyền (License)

Dự án được quản lý và bảo lưu mọi quyền bởi đội ngũ phát triển.
