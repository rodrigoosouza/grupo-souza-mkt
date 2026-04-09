type BadgeVariant = "live" | "status" | "neutral";

type BadgeProps = {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
};

export function Badge({ variant = "neutral", children, className = "" }: BadgeProps) {
  if (variant === "live") {
    return (
      <span
        className={`text-[10px] uppercase text-neutral-400 border border-white/10 px-2 py-1 rounded bg-white/5 inline-flex items-center gap-1.5 ${className}`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        {children}
      </span>
    );
  }

  if (variant === "status") {
    return (
      <span
        className={`text-[11px] rounded-md bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 px-2 py-0.5 uppercase ${className}`}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={`text-[10px] rounded-md bg-white/5 text-neutral-300 ring-1 ring-white/10 px-2 py-0.5 ${className}`}
    >
      {children}
    </span>
  );
}
