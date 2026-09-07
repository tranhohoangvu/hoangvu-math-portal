import { Link } from "@tanstack/react-router";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotFoundComponent() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 text-center bg-paper text-ink">
      <div className="flex size-16 items-center justify-center rounded-full bg-cream text-gold ring-4 ring-gold/30">
        <Compass className="size-8 animate-pulse" strokeWidth={2} />
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-gold">
        404 · Không tìm thấy trang
      </span>
      <h1 className="font-display text-3xl font-bold text-navy">
        Trang bạn tìm kiếm không tồn tại
      </h1>
      <p className="max-w-md text-sm text-ink-muted leading-relaxed">
        Đường dẫn có thể đã thay đổi hoặc không còn khả dụng. Vui lòng quay lại
        trang chủ để tra cứu thông tin khóa học Toán THCS và đăng ký tuyển sinh.
      </p>
      <div className="mt-2 flex items-center gap-3">
        <Button asChild>
          <Link to="/">
            <ArrowLeft className="size-4 mr-1.5" />
            Về trang chủ
          </Link>
        </Button>
      </div>
    </main>
  );
}
