import type { Accent, Art } from "@/content/projects";

// Drawn previews for each project. They illustrate the kind of work,
// not real figures, since most of the dashboards use confidential data.

export const accentHex: Record<Accent, string> = {
  blue: "#0070f3",
  violet: "#8b5cf6",
  amber: "#f5a623",
  green: "#22c55e",
  pink: "#f43f8e",
  cyan: "#06b6d4",
};

function Segments({ c }: { c: string }) {
  // Donut split like the four FYP donor segments
  const parts = [0.33, 0.26, 0.24, 0.17];
  const r = 58;
  const circ = 2 * Math.PI * r;
  let offset = 0;
  const dots = [
    [250, 70], [272, 92], [300, 60], [318, 110], [262, 132], [345, 80], [290, 150], [335, 145], [370, 118], [240, 100],
  ];
  return (
    <>
      <g transform="translate(120 110) rotate(-90)">
        {parts.map((p, i) => {
          const len = p * circ;
          const el = (
            <circle
              key={i}
              r={r}
              fill="none"
              stroke={c}
              strokeOpacity={1 - i * 0.22}
              strokeWidth={22}
              strokeDasharray={`${len - 4} ${circ - len + 4}`}
              strokeDashoffset={-offset}
            />
          );
          offset += len;
          return el;
        })}
      </g>
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 6 : 4} fill={c} fillOpacity={i % 3 === 0 ? 0.9 : 0.35} />
      ))}
    </>
  );
}

function Bars({ c }: { c: string }) {
  const heights = [96, 120, 84, 132, 108, 150, 126];
  return (
    <>
      <line x1="40" y1="180" x2="360" y2="180" stroke="currentColor" strokeOpacity={0.25} />
      {heights.map((h, i) => (
        <rect
          key={i}
          x={52 + i * 44}
          y={180 - h}
          width={28}
          height={h}
          rx={4}
          fill={i === 5 ? c : "currentColor"}
          fillOpacity={i === 5 ? 1 : 0.16}
        />
      ))}
    </>
  );
}

function Scatter({ c }: { c: string }) {
  const pts = Array.from({ length: 46 }, (_, i) => {
    const x = 50 + i * 6.6;
    const y = 180 - (x - 40) * 0.42 - ((i * 37) % 17);
    return [x, y];
  });
  const outliers = [[190, 150], [212, 158], [256, 146], [300, 162]];
  return (
    <>
      <path d="M48 176 L352 48" stroke="currentColor" strokeOpacity={0.25} strokeDasharray="4 6" />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={3.2} fill="currentColor" fillOpacity={0.3} />
      ))}
      {outliers.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={6} fill="none" stroke={c} strokeWidth={2.5} />
      ))}
    </>
  );
}

function Flow({ c, id }: { c: string; id: string }) {
  const nodes = [60, 170, 280];
  return (
    <>
      {nodes.map((x, i) => (
        <g key={i}>
          <rect x={x} y={84} width={70} height={52} rx={10} fill="currentColor" fillOpacity={i === 1 ? 0 : 0.08}
            stroke={i === 1 ? c : "currentColor"} strokeOpacity={i === 1 ? 1 : 0.3} strokeWidth={i === 1 ? 2.5 : 1.5} />
          <rect x={x + 14} y={102} width={42} height={5} rx={2.5} fill={i === 1 ? c : "currentColor"} fillOpacity={i === 1 ? 0.9 : 0.3} />
          <rect x={x + 14} y={114} width={28} height={5} rx={2.5} fill="currentColor" fillOpacity={0.2} />
        </g>
      ))}
      <path d="M130 110 H170 M240 110 H280" stroke={c} strokeWidth={2} markerEnd={`url(#${id})`} />
    </>
  );
}

function Line({ c }: { c: string }) {
  const d = "M40 160 C80 150 100 120 130 128 S180 60 210 66 S250 140 280 120 S330 90 360 104";
  return (
    <>
      <rect x="180" y="40" width="60" height="140" fill={c} fillOpacity={0.1} />
      <line x1="40" y1="180" x2="360" y2="180" stroke="currentColor" strokeOpacity={0.25} />
      <path d={d} fill="none" stroke={c} strokeWidth={3} strokeLinecap="round" />
      <path d={`${d} L360 180 L40 180 Z`} fill={c} fillOpacity={0.08} />
    </>
  );
}

function Matrix({ c }: { c: string }) {
  const vals = [0.2, 0.5, 0.8, 0.35, 0.6, 0.15, 0.9, 0.4, 0.25, 0.7, 0.55, 0.3, 0.45, 0.85, 0.1, 0.65, 0.5, 0.75, 0.3, 0.6, 0.95, 0.2, 0.4, 0.7];
  return (
    <>
      {vals.map((v, i) => (
        <rect key={i} x={70 + (i % 6) * 44} y={36 + Math.floor(i / 6) * 38} width={38} height={32} rx={5} fill={c} fillOpacity={v * 0.9 + 0.05} />
      ))}
    </>
  );
}

function Chain({ c }: { c: string }) {
  const xs = [70, 157, 244, 331];
  return (
    <>
      <path d="M70 110 H331" stroke="currentColor" strokeOpacity={0.25} strokeWidth={2} strokeDasharray="2 6" />
      {xs.map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={110} r={26} fill="currentColor" fillOpacity={0.06} stroke={c} strokeOpacity={0.4 + i * 0.2} strokeWidth={2} />
          <circle cx={x} cy={110} r={7} fill={c} fillOpacity={0.4 + i * 0.2} />
        </g>
      ))}
    </>
  );
}

export default function ProjectArt({ art, accent, className = "" }: { art: Art; accent: Accent; className?: string }) {
  const c = accentHex[accent];
  const markerId = `arrow-${art}-${accent}`;
  return (
    <div className={`relative overflow-hidden bg-subtle text-fg ${className}`} aria-hidden>
      <div
        className="absolute inset-0 opacity-70"
        style={{ background: `radial-gradient(60% 80% at 70% 0%, ${c}33, transparent 70%)` }}
      />
      <div className="bg-grid absolute inset-0" style={{ backgroundSize: "32px 32px" }} />
      <svg viewBox="0 0 400 220" className="relative h-full w-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker id={markerId} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill={c} />
          </marker>
        </defs>
        {art === "segments" && <Segments c={c} />}
        {art === "bars" && <Bars c={c} />}
        {art === "scatter" && <Scatter c={c} />}
        {art === "flow" && <Flow c={c} id={markerId} />}
        {art === "line" && <Line c={c} />}
        {art === "matrix" && <Matrix c={c} />}
        {art === "chain" && <Chain c={c} />}
      </svg>
    </div>
  );
}
