import { faDigits } from "@/lib/utils";

/** Minimal vertical bar chart — pure SVG, server-renderable. */

export interface BarDatum {
  label: string;
  value: number;
}

export function BarChart({
  data,
  height = 180,
  className,
}: {
  data: BarDatum[];
  height?: number;
  className?: string;
}) {
  const width = 360;
  const padTop = 22;
  const labelSpace = 20;
  const chartHeight = height - padTop - labelSpace;
  const max = Math.max(...data.map((d) => d.value)) || 1;
  const slot = width / data.length;
  const barWidth = Math.min(28, slot * 0.5);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label="نمودار میله‌ای"
    >
      {data.map((datum, index) => {
        const barHeight = (datum.value / max) * chartHeight;
        const x = slot * index + (slot - barWidth) / 2;
        const y = padTop + chartHeight - barHeight;
        const isPeak = datum.value === max;
        return (
          <g key={datum.label}>
            <text
              x={x + barWidth / 2}
              y={y - 6}
              textAnchor="middle"
              fontSize="10"
              className="fill-zinc-500"
            >
              {faDigits(datum.value)}
            </text>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              rx="4"
              fill={isPeak ? "#3b82f6" : "rgba(255,255,255,0.14)"}
            />
            <text
              x={x + barWidth / 2}
              y={height - 6}
              textAnchor="middle"
              fontSize="10"
              className="fill-zinc-500"
            >
              {datum.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
