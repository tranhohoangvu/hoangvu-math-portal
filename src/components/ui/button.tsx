import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight no-underline select-none outline-offset-2 focus-visible:outline-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] transition-[scale,background-color,color,box-shadow] duration-150 ease-out",
  {
    variants: {
      variant: {
        navy:
          "bg-navy text-cream hover:bg-navy-mid shadow-[0_1px_0_color-mix(in_oklab,white_18%,transparent)_inset]",
        gold:
          "bg-gold text-navy-deep hover:bg-gold-soft",
        cream:
          "bg-cream text-navy hover:bg-chalk",
        ghost:
          "bg-transparent text-cream hover:bg-cream/10",
        outline:
          "bg-transparent text-navy shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-navy)_28%,transparent)] hover:bg-navy hover:text-cream",
        ink:
          "bg-ink text-cream hover:bg-navy-deep",
      },
      size: {
        sm: "h-10 px-3.5 text-sm rounded-sm",
        md: "h-11 px-4 text-sm rounded-md",
        lg: "h-12 px-5 text-base rounded-md",
      },
    },
    defaultVariants: {
      variant: "navy",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
