# 📐 Hoang Vu Math Portal

[English Version](./README.md) | **Tiếng Việt**

[![Trực tiếp Website](https://img.shields.io/badge/Tr%E1%BB%B1c_ti%E1%BA%BFp-hoangvumathcenter.vercel.app-00DC82?style=for-the-badge&logo=vercel&logoColor=white)](https://hoangvumathcenter.vercel.app/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TanStack Router](https://img.shields.io/badge/TanStack_Router-v1-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/router)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> 🌐 **Địa chỉ truy cập trực tiếp**: [https://hoangvumathcenter.vercel.app/](https://hoangvumathcenter.vercel.app/)

Cổng thông tin trực tuyến và tuyển sinh học thuật hiệu năng cao, xây dựng trên nền tảng **React 19**, **TypeScript**, **Tailwind CSS v4** và **TanStack Router**. Dự án được thiết kế theo hệ thống Design System phong cách Editorial trang nhã, hỗ trợ chuẩn accessibility (a11y), kiểm soát chặt chẽ kiểu dữ liệu (Strict Type Safety) và tốc độ tải trang tức thì.

---

## 📌 Giới Thiệu Tổng Quan

**Hoang Vu Math Portal** là website tuyển sinh & cổng thông tin chính thức của **Trung tâm Bồi dưỡng Kiến thức Trần Hoàng Vũ**, chuyên bồi dưỡng kiến thức môn Toán THCS chất lượng cao.

Trang web đóng vai trò cầu nối số hóa hiện đại giữa trung tâm với phụ huynh và học sinh:
- 📚 **Chương trình học toàn diện**: Chi tiết giáo án Toán THCS các khối 6, 7, 8, 9, bồi dưỡng Học sinh giỏi (HSG) và luyện đề tuyển sinh vào lớp 10.
- 📝 **Form Đăng ký Thông minh**: Tự động tạo nội dung tin nhắn đăng ký học, tích hợp chọn mục tiêu học tập, thời gian mong muốn, nút làm mới biểu mẫu và mã **QR Code Zalo** quét kết bạn tức thì.
- 🧮 **Tương tác Toán học**: Trải nghiệm nhanh các bài toán chọn lọc hàng ngày theo từng khối lớp với cơ chế mở gợi ý và kiểm tra đáp án.
- 📍 **Định vị & Chỉ đường Google Maps**: Nhúng trực tiếp bản đồ định vị chính xác vị trí cơ sở học tập và dẫn đường thuận tiện.
- 📞 **Thanh liên hệ nổi đa kênh (FAB)**: Thanh công cụ liên hệ nhanh (Hotline & Zalo) ở góc màn hình với hiệu ứng chuông rung tinh tế và modal quét mã QR trên máy tính.

---

## ⚡ Điểm Nhấn Kỹ Thuật & Kiến Trúc

- **Strict Type Safety**: Kiểm soát kiểu dữ liệu 100% từ đầu đến cuối với TypeScript 5.7 và cây định tuyến tự động sinh (`routeTree.gen.ts`) của TanStack Router.
- **Engine Tailwind CSS v4**: Cấu hình styling `@theme` CSS-first hiện đại, sử dụng không gian màu OKLab (`--color-navy`, `--color-gold`, `--color-cream`, `--color-paper`), font chữ Fraunces cổ điển và các keyframe animation tối ưu bằng GPU.
- **UI Primitives Chuẩn Accessibility**: Tích hợp các primitive từ [Radix UI](https://www.radix-ui.com/) (`Slot`, `Label`, `Dialog`, v.v.) tuân thủ nghiêm ngặt tiêu chuẩn WAI-ARIA.
- **Các Module Tương Tác Động**:
  - **Dynamic Action Bar / FAB**: Hệ thống nút liên hệ nổi đa trạng thái với hiệu ứng rung chuông điện thoại (`phone-ring`, `fab-shake`, `pulse-ring`).
  - **Client-Side Form Composition**: Module tạo payload tin nhắn động, tự động định dạng dữ liệu để chuyển tiếp nhanh sang Zalo mà không cần backend cồng kềnh.
  - **Interactive Math Widget**: Module giải toán tương tác client-side với cơ chế gợi ý và hiển thị đáp án thông minh.
  - **Dynamic QR Code Integration**: Tạo mã QR tức thì (on-the-fly) phục vụ kết nối nhanh trên điện thoại.
- **Sẵn sàng Triển khai (Deployment Ready)**: Vận hành bởi **TanStack Start** và **Nitro Engine**, tự động build và deploy mượt mà trên **Vercel** và các nền tảng Edge.

---

## 📂 Cấu Trúc Thư Mục Dự Án (Project Structure)

```text
hoangvu-math-portal/
├── public/                             # Tài nguyên tĩnh công khai (Static Assets)
│   ├── favicon.svg                     # Vector favicon biểu tượng thương hiệu
│   ├── og.jpg                          # Ảnh xem trước OpenGraph khi chia sẻ lên mạng xã hội
│   └── images/                         # Thư mục hình ảnh tư liệu & bố cục trang
│       ├── chalkboard.jpg              # Ảnh bảng xanh viết công thức Toán học
│       ├── classroom.jpg               # Không gian lớp học bàn ghế gỗ đón nắng chiều
│       ├── co-hoa.jpg                  # Chân dung Giáo viên phụ trách bộ môn Toán
│       ├── desk.jpg                    # Góc bàn học tập, sách vở & bút thước
│       ├── emblem.jpg                  # Biểu trưng học thuật compa & thước kẻ vàng kim
│       └── house.jpg                   # Khuôn viên cơ sở học tập của trung tâm
├── src/                                # Toàn bộ mã nguồn ứng dụng (Source Code)
│   ├── components/                     # Các UI Component tái sử dụng của ứng dụng
│   │   ├── ui/                         # Hệ thống UI Primitives nguyên tử (Design System)
│   │   │   ├── button.tsx              # Component Button đa biến thể CVA (gold, navy, cream, outline, ghost)
│   │   │   ├── input.tsx               # Ô nhập liệu form với viền sáng focus màu vàng kim
│   │   │   ├── label.tsx               # Wrapper Label chuẩn accessibility từ Radix UI
│   │   │   └── textarea.tsx            # Khung nhập văn bản nhiều dòng đồng bộ theme
│   │   ├── enroll-form.tsx             # Form đăng ký học + Tích hợp QR Zalo & Nút làm mới
│   │   ├── floating-contact.tsx        # Thanh nút liên hệ nổi (FAB) & Hộp thoại QR Zalo máy tính
│   │   ├── footer.tsx                  # Chân trang ngữ nghĩa kèm link điều hướng & chỉ đường
│   │   ├── logo.tsx                    # Logo thương hiệu typography phong cách Academic Serif
│   │   ├── nav.tsx                     # Thanh điều hướng Navbar với nút Đăng ký nổi bật & Menu mobile
│   │   └── today-problem.tsx           # Widget tương tác giải toán hàng ngày theo khối lớp
│   ├── lib/                            # Cấu hình dữ liệu tĩnh, schema và tiện ích dùng chung
│   │   ├── error-component.tsx         # Component hiển thị lỗi định tuyến (Router Error Boundary)
│   │   ├── not-found-component.tsx     # Trang hiển thị khi không tìm thấy đường dẫn (404 Fallback)
│   │   ├── site.ts                     # Dữ liệu trung tâm, thông tin giáo viên, biểu mẫu & bài tập
│   │   └── utils.ts                    # Tiện ích gộp class Tailwind CSS (`clsx` + `tailwind-merge`)
│   ├── routes/                         # Định nghĩa các trang theo cơ chế File-Based Routing
│   │   ├── __root.tsx                  # Khung HTML gốc, Google Fonts, OpenGraph & Toast provider
│   │   └── index.tsx                   # Trang chủ chính (Hero, Chương trình, Giáo viên, Bản đồ, FAQ)
│   ├── router.tsx                      # Khởi tạo instance TanStack Router với các error boundary
│   ├── routeTree.gen.ts                # Cây định tuyến tự động sinh của TanStack Router
│   └── styles.css                      # Cấu hình Tailwind v4 theme, gam màu OKLab & Keyframe Animations
├── .prettierrc                         # Quy tắc định dạng code tự động (Prettier)
├── eslint.config.mjs                   # Cấu hình kiểm tra cú pháp ESLint 9 (Flat Config)
├── IMPROVEMENTS.md                     # Bản kế hoạch phát triển & checklist tính năng
├── package.json                        # Khai báo thư viện, dependencies & danh sách scripts
├── README.md                           # Tài liệu dự án bằng Tiếng Anh (English)
├── README_VN.md                        # Tài liệu dự án bằng Tiếng Việt
├── tsconfig.json                       # Cấu hình TypeScript compiler & alias đường dẫn (`@/*`)
└── vite.config.ts                      # Cấu hình Vite 8 với Tailwind v4, TanStack Start & Nitro
```

---

## 🛠️ Danh Sách Công Nghệ (Tech Stack)

| Phân tầng | Công nghệ | Phiên bản | Mục đích sử dụng |
| :--- | :--- | :--- | :--- |
| **Framework** | [React](https://react.dev/) | `^19.2.0` | Thư viện UI cốt lõi với Concurrent Rendering và React Hooks hiện đại |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `^5.7.0` | Đảm bảo an toàn kiểu dữ liệu tuyệt đối và nâng cao trải nghiệm lập trình (DX) |
| **Build Tool** | [Vite](https://vitejs.dev/) | `^8.2.0` | Máy chủ phát triển siêu tốc với Hot Module Replacement (HMR) |
| **Routing** | [@tanstack/react-router](https://tanstack.com/router) | `^1.170.0` | Hệ thống định tuyến SPA type-safe 100% |
| **Fullstack/SSR** | [@tanstack/react-start](https://tanstack.com/start) | `^1.168.0` | Nền tảng full-stack hiện đại vận hành bởi Nitro Engine |
| **Deployment Engine** | [Nitro](https://nitro.unjs.io/) | `^2.10.0` | Trình biên dịch đầu ra tối ưu cho Vercel Serverless Functions |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | `^4.3.0` | Cấu hình styling trực tiếp qua `@theme` CSS và gam màu OKLab |
| **Icons** | [Lucide React](https://lucide.dev/) | `^0.510.0` | Bộ icon SVG dạng tree-shakeable cực nhẹ |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) | `^2.0.7` | Thư viện toast thông báo trực quan, hiệu năng cao |
| **Code Quality** | [ESLint 9](https://eslint.org/) & [Prettier](https://prettier.io/) | `^9.20.0` / `^3.4.0` | Tự động kiểm tra chất lượng mã nguồn và định dạng code đồng nhất |

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Chạy

### Yêu cầu môi trường
- **Node.js**: Phiên bản `18.0.0` trở lên (khuyên dùng Node 20+)
- **Trình quản lý gói**: `npm` (v9+), `pnpm`, hoặc `yarn`

### Các bước thực hiện

1. **Clone kho mã nguồn về máy:**
   ```bash
   git clone https://github.com/tranhohoangvu/hoangvu-math-portal.git
   cd hoangvu-math-portal
   ```

2. **Cài đặt các thư viện phụ thuộc:**
   ```bash
   npm install
   ```

3. **Khởi chạy máy chủ phát triển (Dev Server):**
   ```bash
   npm run dev
   ```
   Mở trình duyệt tại địa chỉ: `http://localhost:3000`.

---

## 💻 Danh Sách Lệnh Khả Dụng (Scripts)

| Lệnh | Thực thi | Chức năng |
| :--- | :--- | :--- |
| **Dev** | `npm run dev` | Chạy máy chủ phát triển cục bộ với tính năng HMR siêu tốc |
| **Build** | `npm run build` | Kiểm tra kiểu TypeScript và đóng gói mã nguồn production |
| **Preview** | `npm run preview` | Khởi chạy máy chủ cục bộ xem trước bản build production |
| **Typecheck** | `npm run typecheck` | Kiểm tra lỗi kiểu TypeScript toàn bộ dự án (`tsc --noEmit`) |
| **Lint** | `npm run lint` | Quét và kiểm tra chất lượng code với quy tắc ESLint 9 |
| **Format** | `npm run format` | Tự động căn chỉnh và format toàn bộ code bằng Prettier |

---

## 🎨 Hệ Thống Design Tokens & Animations

Các biến màu sắc và kích thước được khai báo trong [`src/styles.css`](src/styles.css) thông qua cú pháp `@theme`:

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
- **`animate-phone-ring`**: Chu kỳ rung xoay 3.2s mô phỏng chuông reo tạo sự chú ý cho nút hotline.
- **`animate-fab-shake`**: Hiệu ứng lắc nhẹ chu kỳ 3.5s kết hợp sóng hào quang lan tỏa (`animate-pulse-ring`).
- **`shimmer-btn-gold`**: Dải tia sáng vàng kim quét ngang liên tục qua nút Đăng ký học chính.
- **`shimmer-btn-navy`**: Tia sáng mượt mà trên nền xanh Navy của nút gọi điện.
- **Cơ chế Pause on Hover**: Tất cả animation tự động tạm dừng khi người dùng đưa con trỏ chuột (`:hover`) vào nút nhằm đảm bảo độ chính xác khi tương tác.

---

## 🚢 Hướng Dẫn Triển Khai (Deployment)

Website hiện đang hoạt động trực tiếp tại: **[https://hoangvumathcenter.vercel.app/](https://hoangvumathcenter.vercel.app/)**

### Triển khai trên Vercel:
1. Kết nối repository `tranhohoangvu/hoangvu-math-portal` với [Vercel](https://vercel.com).
2. **Framework Preset**: Chọn `Other` (hoặc để Vercel tự động nhận diện Nitro).
3. **Build Command**: `npm run build` (Mặc định).
4. **Output Directory**: Để trống / tắt toggle Override (Nitro sẽ xuất trực tiếp vào `.vercel/output`).
5. Mỗi lần `git push origin main`, Vercel sẽ tự động build và cập nhật phiên bản mới nhất lên internet.

---

## 📄 Bản Quyền (License)

Dự án thuộc quyền sở hữu của **Trung tâm Bồi dưỡng Kiến thức Trần Hoàng Vũ**. Bảo lưu mọi quyền.
