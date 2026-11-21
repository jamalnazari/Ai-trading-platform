import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";
import { formatNumber } from "@/lib/utils";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  page: number;
  pageCount: number;
  total: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

function pageRange(page: number, pageCount: number): number[] {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }
  const window = [page - 1, page, page + 1].filter(
    (p) => p >= 1 && p <= pageCount,
  );
  const set = new Set<number>([1, pageCount, ...window]);
  return [...set].sort((a, b) => a - b);
}

export function Pagination({
  page,
  pageCount,
  total,
  pageSize,
  onPageChange,
}: PaginationProps) {
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3">
      <p className="text-xs text-zinc-500">
        نمایش{" "}
        <span className="font-medium text-zinc-400 tabular-nums">
          {formatNumber(start)}–{formatNumber(end)}
        </span>{" "}
        از{" "}
        <span className="font-medium text-zinc-400 tabular-nums">
          {formatNumber(total)}
        </span>{" "}
        کاربر
      </p>
      <nav className="flex items-center gap-1" aria-label="صفحه‌بندی">
        <Button
          variant="ghost"
          size="sm"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          aria-label="صفحه قبلی"
        >
          <ChevronLeft className="size-4 rtl:-scale-x-100" aria-hidden />
          قبلی
        </Button>
        {pageRange(page, pageCount).map((p, index, arr) => (
          <span key={p} className="flex items-center">
            {index > 0 && p - arr[index - 1]! > 1 ? (
              <span className="px-1 text-xs text-zinc-600">…</span>
            ) : null}
            <button
              type="button"
              onClick={() => onPageChange(p)}
              aria-current={p === page ? "page" : undefined}
              className={cn(
                "size-8 rounded-lg text-xs font-medium transition-colors",
                p === page
                  ? "bg-white/10 text-white"
                  : "text-zinc-500 hover:bg-white/5 hover:text-zinc-200",
              )}
            >
              {formatNumber(p)}
            </button>
          </span>
        ))}
        <Button
          variant="ghost"
          size="sm"
          disabled={page >= pageCount}
          onClick={() => onPageChange(page + 1)}
          aria-label="صفحه بعدی"
        >
          بعدی
          <ChevronRight className="size-4 rtl:-scale-x-100" aria-hidden />
        </Button>
      </nav>
    </div>
  );
}
