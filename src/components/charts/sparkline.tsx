/** Minimal deterministic sparkline — pure SVG, no chart library. */

export function Sparkline({
  data,
  width = 120,
  height = 36,
  className,
}: {
  data: number[];
  width?: number;
  height?: number;
  className?: string;
}) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const pad = 3;
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * (width - pad * 2) + pad;
    const y =
      height - pad - ((value - min) / range) * (height - pad * 2);
    return [x, y] as const;
  });
  const line = points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${pad},${height - pad} ${line} ${width - pad},${height - pad}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label="Trend sparkline"
    >
      <polygon points={area} fill="rgba(59,130,246,0.10)" />
      <polyline
        points={line}
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
