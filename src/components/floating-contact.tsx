import { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  Check,
  Copy,
  MessageCircle,
  Phone,
  QrCode,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  // Xử lý ẩn/hiện nút Scroll To Top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Xử lý click ra ngoài để đóng menu trên Desktop
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(event.target as Node)
      ) {
        setIsDesktopOpen(false);
      }
    };

    if (isDesktopOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDesktopOpen]);

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(SITE.phone);
    setCopied(true);
    toast.success(`Đã sao chép SĐT Cô Hoa: ${SITE.phoneDisplay}`, {
      description: "Quý phụ huynh có thể dán vào danh bạ hoặc Zalo để liên hệ.",
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 1. NÚT CUỘN LÊN ĐẦU TRANG (BACK TO TOP) - Căn chỉnh an toàn không bị che */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Cuộn lên đầu trang"
          className="no-print fixed bottom-[4.75rem] right-3.5 z-30 flex size-10 items-center justify-center rounded-full bg-navy-deep/90 text-gold-soft shadow-lg backdrop-blur-md border border-gold/40 transition-all duration-300 hover:bg-navy-mid hover:text-cream hover:scale-110 active:scale-95 md:bottom-24 md:right-6 md:size-11"
        >
          <ArrowUp className="size-5" />
        </button>
      )}

      {/* 2. GIAO DIỆN DESKTOP (>= 768px / md:block) - Nút Avatar FAB bấm để ẩn/hiện menu */}
      <div
        ref={desktopMenuRef}
        className="no-print fixed bottom-6 right-6 z-40 hidden md:block"
      >
        {/* Popup Menu Liên hệ trên Desktop (Khi được mở) */}
        {isDesktopOpen && (
          <div className="absolute bottom-16 right-0 mb-2 w-72 origin-bottom-right rounded-2xl bg-paper p-4 shadow-2xl border border-gold/40 animate-in fade-in zoom-in-95 duration-200">
            {/* Header Popup */}
            <div className="flex items-start justify-between border-b border-line pb-3">
              <div className="flex items-center gap-2.5">
                <div className="relative size-10 shrink-0 overflow-hidden rounded-full ring-2 ring-gold">
                  <img
                    src="/images/co-hoa.jpg"
                    alt="Cô Hồ Thị Hoa"
                    className="size-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-navy">
                    Cô Hồ Thị Hoa
                  </h4>
                  <p className="text-[11px] text-ink-muted leading-tight">
                    Tư vấn & Tuyển sinh môn Toán
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsDesktopOpen(false)}
                className="rounded-full p-1 text-ink-muted hover:bg-cream hover:text-navy transition-colors"
                aria-label="Đóng bảng liên hệ"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Quick Actions List */}
            <div className="mt-3 space-y-2">
              {/* Nút Gọi Điện */}
              <a
                href={SITE.tel}
                className="flex items-center justify-between rounded-xl bg-gradient-to-r from-gold to-gold-soft px-3.5 py-2.5 text-xs font-bold text-navy-deep shadow hover:brightness-105 active:scale-95 transition-all"
              >
                <div className="flex items-center gap-2">
                  <Phone className="size-4 fill-current animate-phone-ring" />
                  <span>Gọi: {SITE.phoneDisplay}</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80">
                  Bấm gọi
                </span>
              </a>

              {/* Nút Nhắn Zalo */}
              <a
                href={SITE.zalo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl bg-[#0068FF] px-3.5 py-2.5 text-xs font-semibold text-white shadow hover:brightness-110 active:scale-95 transition-all"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="size-4 fill-current" />
                  <span>Nhắn tin Zalo</span>
                </div>
                <span className="text-[10px] font-medium opacity-80">
                  Trực tuyến
                </span>
              </a>

              {/* Hàng nút phụ: Copy SĐT & Xem QR */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-cream py-2 text-xs font-medium text-navy hover:bg-chalk border border-line transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="size-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">
                        Đã chép
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" />
                      <span>Chép SĐT</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setShowQrModal(true)}
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-cream py-2 text-xs font-medium text-navy hover:bg-chalk border border-line transition-colors"
                >
                  <QrCode className="size-3.5" />
                  <span>Quét QR Zalo</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Nút Tròn FAB Avatar (Bấm vào để Bật/Tắt Menu) */}
        <button
          type="button"
          onClick={() => setIsDesktopOpen(!isDesktopOpen)}
          className={cn(
            "group relative flex size-14 items-center justify-center rounded-full bg-navy-deep p-0.5 shadow-2xl ring-4 ring-gold/80 transition-all duration-300 hover:scale-105 hover:ring-gold active:scale-95",
            !isDesktopOpen && "animate-fab-shake animate-pulse-ring",
          )}
          title={isDesktopOpen ? "Đóng menu liên hệ" : "Nhấn để liên hệ Cô Hoa"}
          aria-expanded={isDesktopOpen}
          aria-label="Liên hệ trực tiếp với Cô Hồ Thị Hoa"
        >
          {/* Avatar Cô Hoa */}
          <div className="size-full overflow-hidden rounded-full">
            <img
              src="/images/co-hoa.jpg"
              alt="Cô Hoa"
              className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Chấm xanh trực tuyến nhấp nháy */}
          <span className="absolute bottom-0.5 right-0.5 flex size-3.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-3.5 rounded-full bg-emerald-500 ring-2 ring-navy-deep" />
          </span>

          {/* Badge Tooltip nhỏ khi chưa mở */}
          {!isDesktopOpen && (
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-navy-deep/90 px-3 py-1 text-xs font-semibold text-gold-soft shadow-lg border border-gold/30 backdrop-blur-md opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              Liên hệ Cô Hoa 💬
            </span>
          )}
        </button>
      </div>

      {/* 3. GIAO DIỆN MOBILE & TABLET (< 768px / md:hidden) - Thanh Dock Nổi Tinh Gọn */}
      <aside
        aria-label="Thanh liên hệ trực tiếp Cô Hoa trên di động"
        className="no-print fixed bottom-0 inset-x-0 z-40 md:hidden bg-navy-deep/95 backdrop-blur-xl border-t border-gold/40 shadow-[0_-8px_25px_rgba(0,0,0,0.5)] px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      >
        <div className="mx-auto flex max-w-lg items-center gap-2">
          {/* Avatar nhỏ bấm vào mở QR */}
          <button
            type="button"
            onClick={() => setShowQrModal(true)}
            className="relative size-10 shrink-0 overflow-hidden rounded-full ring-2 ring-gold active:scale-95 transition-transform"
            title="Xem mã QR Zalo Cô Hoa"
          >
            <img
              src="/images/co-hoa.jpg"
              alt="Cô Hoa"
              className="size-full object-cover"
            />
            <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-1 ring-navy-deep" />
          </button>

          {/* Nút Gọi Ngay */}
          <a
            href={SITE.tel}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold via-gold-soft to-gold py-2.5 px-3 text-navy-deep shadow-md font-bold text-xs active:scale-95 transition-all animate-pulse-ring"
            aria-label={`Gọi điện cho Cô Hoa: ${SITE.phoneDisplay}`}
          >
            <Phone className="size-4 fill-current shrink-0 animate-phone-ring" />
            <span className="truncate">Gọi {SITE.phoneDisplay}</span>
          </a>

          {/* Nút Nhắn Zalo */}
          <a
            href={SITE.zalo}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0068FF] py-2.5 px-3 text-white shadow-md font-bold text-xs active:scale-95 transition-all"
            aria-label="Nhắn tin Zalo với Cô Hoa"
          >
            <MessageCircle className="size-4 fill-current shrink-0" />
            <span className="truncate">Nhắn Zalo</span>
          </a>
        </div>
      </aside>

      {/* 4. MODAL QUÉT MÃ QR ZALO */}
      {showQrModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mã QR Zalo Cô Hồ Thị Hoa"
          className="no-print fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/80 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-2xl bg-paper p-6 shadow-2xl border border-gold/40 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowQrModal(false)}
              aria-label="Đóng cửa sổ"
              className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-cream text-navy hover:bg-navy hover:text-cream transition-colors"
            >
              <X className="size-4" />
            </button>

            {/* Teacher Avatar & Header */}
            <div className="mx-auto -mt-2 mb-3 flex flex-col items-center">
              <div className="relative size-16 overflow-hidden rounded-full ring-4 ring-gold shadow-md">
                <img
                  src="/images/co-hoa.jpg"
                  alt="Cô Hồ Thị Hoa"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mt-2 font-display text-xl font-bold text-navy">
                Cô Hồ Thị Hoa
              </h3>
              <p className="text-xs text-ink-muted">
                Giáo viên Toán THCS Hoàng Văn Thụ · SĐT: {SITE.phoneDisplay}
              </p>
            </div>

            {/* QR Code Container */}
            <div className="mx-auto my-3 flex max-w-[220px] flex-col items-center rounded-xl bg-white p-3 shadow-inner border border-line">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(SITE.zalo)}&margin=10`}
                alt={`Mã QR kết bạn Zalo Cô Hoa ${SITE.phoneDisplay}`}
                className="size-44 rounded-lg object-contain"
                loading="lazy"
              />
              <span className="mt-2 text-[11px] font-medium text-ink-muted">
                Quét mã để mở Zalo trực tiếp
              </span>
            </div>

            <p className="mt-2 text-xs leading-relaxed text-ink-muted">
              Dùng ứng dụng Zalo hoặc Camera điện thoại để quét mã kết bạn và trao đổi với cô giáo.
            </p>

            {/* Actions Inside Modal */}
            <div className="mt-5 grid grid-cols-2 gap-2">
              <a
                href={SITE.zalo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-lg bg-[#0068FF] py-2.5 text-xs font-bold text-white shadow hover:brightness-110 active:scale-95 transition-all"
              >
                <MessageCircle className="size-3.5 fill-current" />
                Mở Zalo
              </a>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="flex items-center justify-center gap-1.5 rounded-lg bg-navy py-2.5 text-xs font-semibold text-cream shadow hover:bg-navy-mid active:scale-95 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="size-3.5 text-emerald-400" />
                    <span>Đã chép số</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5" />
                    <span>Chép {SITE.phoneDisplay}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

