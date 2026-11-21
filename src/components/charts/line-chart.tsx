"use client";

import { useId } from "react";
import { faDigits } from "@/lib/utils";

/**
 * Minimal area/line chart — pure SVG, deliberately dependency-free.
 * Data: array of values, oldest first.
 */
export function LineChart({
  data,
  height = 240,
  className,
}: {
  data: number[];
  height?: number;
  className?: string;
}) {
  const gradientId = useId();
  const width = 720;
  const padX = 10;
  const padTop = 14;
  const padBottom = 26;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const innerHeight = height - padTop - padBottom;

  const pointAt = (value: number, index: number) => {
    const x = padX + (index / (data.length - 1)) * (width - padX * 2);
    const y =
      padTop + innerHeight - ((value - min) / range) * innerHeight;
    return [x, y] as const;
  };

  const points = data.map((value, index) => pointAt(value, index));
  const line = points
    .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
  const area = `${padX},${padTop + innerHeight} ${line} ${width - padX},${
    padTop + innerHeight
  }`;

  const gridValues = [max, min + range / 2, min];
  const last = points[points.length - 1]!;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label="نمودار خطی بازدیدها"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(59,130,246,0.28)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0)" />
        </linearGradient>
      </defs>

      {/* horizontal gridlines with value labels */}
      {gridValues.map((value, index) => {
        const [, y] = pointAt(value, 0);
        return (
          <g key={index}>
            <line
              x1={padX}
              x2={width - padX}
              y1={y}
              y2={y}
              stroke="rgba(255,255,255,0.06)"
              strokeDasharray="3 4"
            />
            <text
              x={width - padX}
              y={y - 5}
              textAnchor="end"
              className="fill-zinc-600"
              fontSize="10"
            >
              {faDigits(Math.round(value))}
            </text>
          </g>
        );
      })}

      <polygon points={area} fill={`url(#${gradientId})`} />
      <polyline
        points={line}
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={last[0]} cy={last[1]} r="3.5" fill="#3b82f6" />
      <circle cx={last[0]} cy={last[1]} r="6.5" fill="rgba(59,130,246,0.25)" />
    </svg>
  );
}
