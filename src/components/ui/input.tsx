import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Leading icon — decorative. */
  icon?: React.ReactNode;
}

export const inputClasses = cn(
  "h-9 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-zinc-100",
  "placeholder:text-zinc-600 transition-colors",
  "focus:border-accent/60 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-accent/25",
  "disabled:cursor-not-allowed disabled:opacity-50",
);

export function Input({ className, icon, type = "text", ...props }: InputProps) {
  if (icon) {
    return (
      <div className="relative">
        <span className="pointer-events-none absolute top-1/2 start-3 -translate-y-1/2 text-zinc-500 [&_svg]:size-4">
          {icon}
        </span>
        <input
          type={type}
          className={cn(inputClasses, "ps-9", className)}
          {...props}
        />
      </div>
    );
  }
  return <input type={type} className={cn(inputClasses, className)} {...props} />;
}

export function PasswordInput({
  className,
  ...props
}: InputProps) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative">
      <input
        type={visible ? "text" : "password"}
        className={cn(inputClasses, "pe-10", className)}
        {...props}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? "پنهان کردن رمز" : "نمایش رمز"}
        className="absolute top-1/2 end-2 -translate-y-1/2 rounded-md p-1.5 text-zinc-500 transition-colors hover:text-zinc-300"
      >
        {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
      </button>
    </div>
  );
}

export function Field({
  label,
  hint,
  className,
  children,
}: {
  label: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label className="text-sm font-medium text-zinc-300">{label}</label>
      {children}
      {hint ? <p className="text-xs text-zinc-600">{hint}</p> : null}
    </div>
  );
}

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        className={cn(
          inputClasses,
          "appearance-none bg-elevated pe-9",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <svg
        aria-hidden
        viewBox="0 0 16 16"
        className="pointer-events-none absolute top-1/2 end-3 size-3.5 -translate-y-1/2 fill-none stroke-zinc-500 stroke-[1.5]"
      >
        <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function Checkbox({
  label,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label
      className={cn(
        "inline-flex cursor-pointer items-center gap-2 text-sm text-zinc-300 select-none",
        className,
      )}
    >
      <input
        type="checkbox"
        className="size-4 rounded border-white/20 bg-white/5 accent-accent"
        {...props}
      />
      {label}
    </label>
  );
}
