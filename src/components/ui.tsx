import type { Status } from "@/content/projects";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p id={id} className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted text-pretty">{description}</p>}
    </div>
  );
}

const statusStyle: Record<Status, { dot: string; pulse: boolean }> = {
  Live: { dot: "bg-ready", pulse: false },
  Completed: { dot: "bg-ready", pulse: false },
  "In progress": { dot: "bg-building", pulse: true },
};

/** Deployment-style status: a coloured dot plus the word, so colour never carries meaning alone. */
export function StatusBadge({ status }: { status: Status }) {
  const s = statusStyle[status];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-0.5 font-mono text-[11px] text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot} ${s.pulse ? "animate-pulse-dot" : ""}`} aria-hidden />
      {status}
    </span>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-subtle px-2 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}
