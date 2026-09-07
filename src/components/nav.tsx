import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/#co-giao", label: "Về Cô Hoa", highlight: true },
  { href: "/#chuong-trinh", label: "Chương trình học" },
  { href: "/#dang-ky", label: "Đăng ký" },
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
