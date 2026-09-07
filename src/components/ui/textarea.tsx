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
