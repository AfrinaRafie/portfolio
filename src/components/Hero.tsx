import Link from "next/link";
import { projects } from "@/content/projects";
import { site, stats } from "@/content/site";
import { ArrowRight, GitHub, LinkedIn, Mail } from "./Icons";
import { accentHex } from "./ProjectArt";

/** A Vercel-style "deployments" panel that doubles as a quick index of the projects. */
function ProjectsPanel() {
  const rows = projects.slice(0, 5);
  return (
    <div className="animate-rise overflow-hidden rounded-xl border border-line bg-surface shadow-[0_8px_40px_-12px_rgba(0,0,0,0.25)] [animation-delay:120ms]">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          </span>
          <span className="ml-2 font-mono text-xs text-muted">afrina / projects</span>
        </div>
        <span className="font-mono text-[11px] text-faint">{projects.length} total</span>
      </div>
      <ul>
        {rows.map((p) => (
          <li key={p.slug} className="border-b border-line last:border-0">
            <Link
              href={`/projects/${p.slug}`}
              className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-subtle"
            >
              <span
                className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-line font-mono text-[10px] font-semibold"
                style={{ color: accentHex[p.accent] }}
                aria-hidden
              >
                {p.title.split(" ").slice(0, 2).map((w) => w[0]).join("")}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium">{p.title}</span>
                <span className="block truncate font-mono text-[11px] text-faint">{p.label}</span>
              </span>
              <span className="flex shrink-0 items-center gap-1.5 font-mono text-[11px] text-muted">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${p.status === "In progress" ? "animate-pulse-dot bg-building" : "bg-ready"}`}
                  aria-hidden
                />
                <span className="hidden sm:inline">{p.status}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/#projects"
        className="flex items-center justify-center gap-1.5 border-t border-line bg-subtle py-2.5 text-xs text-muted transition-colors hover:text-fg"
      >
        View all projects <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* Background: hairline grid + soft glow */}
      <div className="bg-grid fade-top pointer-events-none absolute inset-0" aria-hidden />
      <div className="glow pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[1000px] -translate-x-1/2" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-24">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1 text-xs text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-ready" aria-hidden />
            {site.availability}
          </span>

          <h1 className="text-gradient mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">
            {site.headline}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg">{site.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#projects"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-fg px-6 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              View my projects <ArrowRight />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex h-11 items-center rounded-full border border-line-strong bg-surface px-6 text-sm font-medium transition-colors hover:bg-subtle"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted">
            <a href={site.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-fg">
              <GitHub className="h-3.5 w-3.5" /> {site.githubHandle}
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-fg">
              <LinkedIn className="h-3.5 w-3.5" /> norafrinarafie
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 hover:text-fg">
              <Mail className="h-3.5 w-3.5" /> {site.email}
            </a>
          </div>
        </div>

        <ProjectsPanel />
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-line bg-bg/60 backdrop-blur">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`border-line px-4 py-6 sm:px-6 ${i % 2 === 1 ? "border-l" : ""} ${i >= 2 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-mono text-2xl font-medium tracking-tight sm:text-3xl">{s.value}</dd>
              <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
