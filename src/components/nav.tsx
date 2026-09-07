import { useState } from "react";
import { Menu, Phone, Sparkles, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/#co-giao", label: "Về Cô Hoa", highlight: true },
  { href: "/#chuong-trinh", label: "Chương trình học" },
  { href: "/#lien-he", label: "Địa chỉ" },
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
              className={cn(
                "text-sm font-medium no-underline transition-colors duration-150 flex items-center gap-1.5",
                item.highlight
                  ? "text-navy font-semibold hover:text-gold"
                  : "text-ink-muted hover:text-navy",
              )}
            >
              {item.label}
              {item.highlight && (
                <span className="inline-block size-1.5 rounded-full bg-gold animate-pulse" />
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Nút Gọi điện (Nền xanh Navy lấp lánh như cũ) */}
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex group shimmer-btn-navy bg-navy text-cream border border-gold/40 shadow-md hover:bg-navy-mid transition-all hover:scale-105 active:scale-95"
          >
            <a href={SITE.tel}>
              <Phone className="size-4 animate-phone-ring text-gold-soft" />
              <span>{SITE.phoneDisplay}</span>
            </a>
          </Button>

          {/* Nút Đăng ký học nổi bật (Primary Action) */}
          <Button
            asChild
            size="sm"
            className="shimmer-btn-gold font-display font-bold shadow-md shadow-gold/25 hover:shadow-lg hover:shadow-gold/40 hover:scale-105 active:scale-95 transition-all duration-200 border border-gold-soft/60 px-3.5"
          >
            <a href="/#dang-ky" className="flex items-center gap-1.5 text-xs sm:text-sm">
              <Sparkles className="size-3.5 fill-current text-navy-deep animate-pulse" />
              <span>Đăng ký học</span>
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
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-4 py-4 space-y-1" aria-label="Di động">
          {LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center text-base font-medium text-ink hover:text-navy no-underline"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-line flex flex-col gap-2.5">
            <Button
              asChild
              className="shimmer-btn-gold w-full font-display font-bold shadow-md justify-center py-2.5 text-sm"
              onClick={() => setOpen(false)}
            >
              <a href="/#dang-ky" className="flex items-center justify-center gap-2">
                <Sparkles className="size-4 fill-current text-navy-deep animate-pulse" />
                <span>Đăng ký học ngay</span>
              </a>
            </Button>
            <a
              href={SITE.tel}
              className="flex min-h-11 items-center justify-center gap-2 text-sm font-medium text-navy bg-cream/70 rounded-md border border-line no-underline group"
            >
              <Phone className="size-4 animate-phone-ring text-gold" />
              Gọi Cô Hoa: {SITE.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
