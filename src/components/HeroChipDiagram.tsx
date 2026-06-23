/* ----------------------------------------------------------------------------
   Hero chip visual — memory/compute die, bandwidth arrows and
   callout stats. Rendered as a self-contained SVG so it scales crisply.
---------------------------------------------------------------------------- */

import type { ReactElement } from "react";

const ARROW_COUNT = 7;
const ARROW_TOP = 252;
const ARROW_BOTTOM = 378;
const ARROW_X_START = 205;
const ARROW_X_END = 395;

function gridLines() {
  const lines: ReactElement[] = [];
  const x0 = 150;
  const y0 = 110;
  const w = 300;
  const h = 350;
  const step = 22;
  for (let x = x0 + step; x < x0 + w; x += step) {
    lines.push(
      <line key={`v${x}`} x1={x} y1={y0} x2={x} y2={y0 + h} stroke="#cfeaf2" strokeOpacity={0.35} strokeWidth={1} />,
    );
  }
  for (let y = y0 + step; y < y0 + h; y += step) {
    lines.push(
      <line key={`h${y}`} x1={x0} y1={y} x2={x0 + w} y2={y} stroke="#cfeaf2" strokeOpacity={0.35} strokeWidth={1} />,
    );
  }
  return lines;
}

function arrows() {
  const out: ReactElement[] = [];
  const step = (ARROW_X_END - ARROW_X_START) / (ARROW_COUNT - 1);
  for (let i = 0; i < ARROW_COUNT; i++) {
    const cx = ARROW_X_START + step * i;
    out.push(
      <g key={i} fill="#ff5500" stroke="#ff5500">
        <line x1={cx} y1={ARROW_TOP + 12} x2={cx} y2={ARROW_BOTTOM - 12} strokeWidth={7} strokeLinecap="round" />
        <polygon points={`${cx - 9},${ARROW_TOP + 15} ${cx + 9},${ARROW_TOP + 15} ${cx},${ARROW_TOP}`} stroke="none" />
        <polygon
          points={`${cx - 9},${ARROW_BOTTOM - 15} ${cx + 9},${ARROW_BOTTOM - 15} ${cx},${ARROW_BOTTOM}`}
          stroke="none"
        />
      </g>,
    );
  }
  return out;
}

export default function HeroChipDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 912 572"
      className={className}
      role="img"
      aria-label="Memory and compute die showing 10 TB capacity and 240 TB/s bandwidth"
    >
      <defs>
        <linearGradient id="die" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3f7d97" />
          <stop offset="100%" stopColor="#2a5a70" />
        </linearGradient>
        <clipPath id="dieClip">
          <rect x="150" y="110" width="300" height="350" rx="8" />
        </clipPath>
      </defs>

      {/* Backdrop */}
      <rect x="0" y="0" width="912" height="572" fill="#000000" />

      {/* Die */}
      <g clipPath="url(#dieClip)">
        <rect x="150" y="110" width="300" height="350" fill="url(#die)" />
        {gridLines()}
        {/* lighter corner accent like a partial die */}
        <rect x="150" y="370" width="300" height="90" fill="#6fb3c9" fillOpacity={0.18} />
      </g>
      <rect x="150" y="110" width="300" height="350" rx="8" fill="none" stroke="#cfeaf2" strokeOpacity={0.25} />

      {/* Memory pill */}
      <rect x="215" y="162" width="170" height="48" rx="24" fill="#0a1417" fillOpacity={0.55} stroke="#ffffff" strokeWidth={2} />
      <text x="300" y="193" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="26" fontWeight="700" fill="#ffffff">
        Memory
      </text>

      {/* Bandwidth arrows */}
      {arrows()}

      {/* Compute pill */}
      <rect x="205" y="396" width="190" height="48" rx="24" fill="#0a1417" fillOpacity={0.55} stroke="#ffffff" strokeWidth={2} />
      <text x="300" y="427" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="26" fontWeight="700" fill="#ffffff">
        Compute
      </text>

      {/* Callout lines */}
      <line x1="455" y1="186" x2="600" y2="186" stroke="#ffffff" strokeWidth={2} />
      <line x1="455" y1="315" x2="600" y2="315" stroke="#ffffff" strokeWidth={2} />

      {/* Memory capacity */}
      <text x="615" y="210" fontFamily="system-ui, sans-serif" fontSize="78" fontWeight="800" fill="#ff5500">
        10
        <tspan fontSize="34" fontWeight="700" fill="#ffffff" dx="8">
          TB
        </tspan>
      </text>

      {/* Bandwidth */}
      <text x="615" y="340" fontFamily="system-ui, sans-serif" fontSize="78" fontWeight="800" fill="#ff5500">
        240
        <tspan fontSize="34" fontWeight="700" fill="#ffffff" dx="8">
          TB/s
        </tspan>
      </text>
    </svg>
  );
}
