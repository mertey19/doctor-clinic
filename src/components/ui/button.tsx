import {
  forwardRef,
  isValidElement,
  cloneElement,
  type ButtonHTMLAttributes,
  type ReactElement,
} from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
};

const variants = {
  primary: "bg-[var(--primary)] text-white shadow-soft hover:bg-[var(--primary-hover)]",
  secondary: "bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--border)]",
  outline: "border border-[var(--border)] bg-transparent hover:bg-[var(--muted)]",
  ghost: "hover:bg-[var(--muted)]",
  danger: "bg-red-600 text-white hover:bg-red-700 shadow-soft",
};

const sizes = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", disabled, asChild, children, type = "button", ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-[transform,box-shadow,background-color,color,opacity] duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]",
      "disabled:pointer-events-none disabled:opacity-50",
      "active:scale-[0.98]",
      variants[variant],
      sizes[size],
      className
    );

    if (asChild && isValidElement(children)) {
      const child = children as ReactElement<{ className?: string; ref?: unknown }>;
      // next/link + React 19: ref birleştirmesi bazı ortamlarda hata / "[object Event]" benzeri
      // anormalliklere yol açabildiği için asChild çocuğa ref aktarmıyoruz.
      return cloneElement(child, {
        className: cn(classes, child.props.className),
      });
    }

    return (
      <button ref={ref} type={type} disabled={disabled} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
