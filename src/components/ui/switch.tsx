"use client";

import { cn } from "@/lib/utils";

export interface SwitchProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  "aria-label"?: string;
  className?: string;
}

export function Switch({
  checked,
  onChange,
  disabled,
  className,
  ...aria
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={cn(
        "relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        checked ? "bg-accent" : "bg-white/12",
        disabled && "cursor-not-allowed opacity-40",
        className,
      )}
      {...aria}
    >
      <span
        className={cn(
          "absolute start-0.5 size-4 rounded-full bg-white shadow transition-transform",
          checked && "translate-x-4 rtl:-translate-x-4",
        )}
      />
    </button>
  );
}
