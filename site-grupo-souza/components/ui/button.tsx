import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "primary-glow" | "secondary" | "ghost" | "text";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<Variant, string> = {
  "primary-glow":
    "bg-gradient-to-t from-emerald-300 via-emerald-500 to-emerald-600 text-emerald-950 font-medium shadow-[0_0_40px_-5px_rgba(16,185,129,0.6)] ring-1 ring-inset ring-white/40 hover:scale-105 hover:shadow-[0_0_60px_-5px_rgba(16,185,129,0.8)]",
  primary:
    "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium border-t border-white/20 shadow-[0_4px_15px_rgba(16,185,129,0.4)] hover:brightness-110",
  secondary:
    "bg-white text-black font-medium hover:bg-neutral-200",
  ghost:
    "bg-transparent text-neutral-400 ring-1 ring-white/10 hover:text-white hover:ring-white/20",
  text:
    "text-neutral-400 hover:text-white bg-transparent",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs rounded-lg",
  md: "px-6 py-3 text-sm rounded-full",
  lg: "px-8 py-3 text-lg rounded-full",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
