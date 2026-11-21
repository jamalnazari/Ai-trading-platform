import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden
      className={cn("size-7 rounded-lg", className)}
    >
      <rect width="32" height="32" rx="8" fill="#3B82F6" />
      <path
        d="M7.5 21.5l5.5-5.5 4 3.5 7-8.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="11" r="1.7" fill="#ffffff" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  href,
}: {
  className?: string;
  markClassName?: string;
  href?: string;
}) {
  const content = (
    <>
      <LogoMark className={markClassName} />
      <span className="text-[15px] font-semibold text-zinc-100">
        تریدر اینسایت
      </span>
    </>
  );
  if (href) {
    return (
      <a href={href} className={cn("inline-flex items-center gap-2.5", className)}>
        {content}
      </a>
    );
  }
  return <div className={cn("inline-flex items-center gap-2.5", className)}>{content}</div>;
}
