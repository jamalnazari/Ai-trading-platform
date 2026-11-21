import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names with Tailwind conflict resolution. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** 12345 -> "12,345" (deterministic across server/client). */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

/** ISO date -> "Nov 21, 2026" (UTC — deterministic across server/client). */
export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

/** "kenji.watanabe" -> "KW" */
export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
}

/** "james.oconnor@…" -> "JO" — first letters of an email local part. */
export function initialsFromEmail(email: string): string {
  const local = email.split("@")[0] ?? "";
  return initials(local.replace(/[._-]+/g, " "));
}
