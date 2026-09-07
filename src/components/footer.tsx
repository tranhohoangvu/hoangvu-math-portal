import { MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="no-print bg-navy-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo tone="cream" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-chalk text-justify">
            Trung tâm Bồi dưỡng Kiến thức {SITE.name} Toán THCS tại Ea Kiết do cô Hồ Thị Hoa (Giáo viên Trường TH & THCS Hoàng Văn Thụ) trực tiếp giảng dạy và kèm cặp.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold-soft">
            Liên hệ
          </p>
          <a
            href={SITE.tel}
            className="mt-3 flex items-start gap-2 text-sm text-cream no-underline hover:text-gold-soft group"
          >
            <Phone className="mt-0.5 size-4 shrink-0 animate-phone-ring text-gold-soft" />
            {SITE.teacher} · {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.maps}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex items-start gap-2 text-sm text-cream no-underline hover:text-gold-soft"
          >
            <MapPin className="mt-0.5 size-4 shrink-0" />
            <span>
              {SITE.addressNew}
              <span className="block text-xs text-gold-soft/90 font-normal">
                (Trước sáp nhập: {SITE.addressOld})
              </span>
            </span>
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
      <p className="px-4 py-4 pb-24 text-center text-xs text-chalk/80 sm:pb-4">
        {SITE.kind} {SITE.name} · {SITE.addressLine}
      </p>
    </footer>
  );
}
