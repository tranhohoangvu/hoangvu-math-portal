import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const APP_NAME = "Cơ sở dạy thêm Trần Hoàng Vũ · Toán THCS Cô Hoa";
const APP_DESC =
  "Cơ sở dạy thêm môn Toán THCS tại Ea Kiết, Đắk Lắk do cô Hồ Thị Hoa (Giáo viên Trường TH & THCS Hoàng Văn Thụ) trực tiếp giảng dạy, bồi dưỡng học sinh lớp 6–9, ôn HSG và luyện thi vào 10.";

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
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400;1,9..144,500;1,9..144,600;1,9..144,700&display=swap",
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
      <body className="min-h-dvh bg-paper text-ink font-serif">
        <Outlet />
        <Toaster
          position="bottom-center"
          toastOptions={{
            className: "font-serif",
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}

