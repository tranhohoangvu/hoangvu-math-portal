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
            Toán THCS · Cô Hoa
          </span>
        ) : null}
      </span>
    </Link>
  );
}
