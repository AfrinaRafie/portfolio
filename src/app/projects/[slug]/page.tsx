import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "@/components/Icons";
import ProjectArt from "@/components/ProjectArt";
import { StatusBadge, Tag } from "@/components/ui";
import { getProject, projects } from "@/content/projects";

// Build every case-study page ahead of time
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  const meta = [
    { label: "Role", value: project.role },
    { label: "Organisation", value: project.org },
    { label: "Timeline", value: project.period },
    { label: "Type", value: project.label },
  ];

  return (
    <article>
      {/* Header */}
      <header className="relative overflow-hidden border-b border-line">
        <div className="bg-grid fade-top pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
          <Link href="/#projects" className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg">
            <ArrowLeft /> All projects
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{project.category}</span>
            <StatusBadge status={project.status} />
          </div>
          <h1 className="text-gradient mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{project.summary}</p>

          {project.links && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-fg px-6 text-sm font-medium text-bg transition-opacity hover:opacity-85"
                >
                  {l.label} <ArrowUpRight />
                </a>
              ))}
            </div>
          )}

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label} className="bg-surface p-4 sm:p-5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">{m.label}</dt>
                <dd className="mt-1.5 text-sm font-medium leading-snug">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_320px] lg:gap-16">
        <div className="min-w-0 space-y-14">
          <ProjectArt art={project.art} accent={project.accent} className="aspect-[16/9] rounded-xl border border-line" />

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">The problem</h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty">{project.problem}</p>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">What I built</h2>
            <ul className="mt-5 space-y-4">
              {project.built.map((b) => (
                <li key={b.slice(0, 32)} className="flex gap-3 leading-relaxed text-muted">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-line bg-subtle">
                    <Check className="h-3 w-3 text-fg" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Results</h2>
            <dl className="mt-5 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
              {project.results.map((r) => (
                <div key={r.label} className="bg-surface p-5">
                  <dt className="sr-only">{r.label}</dt>
                  <dd className="font-mono text-3xl font-medium tracking-tight">{r.value}</dd>
                  <dd className="mt-1 text-sm text-muted">{r.label}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="rounded-xl border border-line bg-subtle p-6 sm:p-8">
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">What I learned</h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty">{project.learned}</p>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-line bg-surface p-5">
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Tools & stack</h2>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li key={s}>
                  <Tag>{s}</Tag>
                </li>
              ))}
            </ul>
          </div>
          {project.note && (
            <p className="rounded-xl border border-dashed border-line-strong p-5 text-sm leading-relaxed text-muted">
              {project.note}
            </p>
          )}
          <Link
            href={`/projects/${next.slug}`}
            className="group block rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-strong"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">Next project</span>
            <span className="mt-2 flex items-center justify-between gap-3 font-medium">
              {next.title}
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </aside>
      </div>
    </article>
  );
}
