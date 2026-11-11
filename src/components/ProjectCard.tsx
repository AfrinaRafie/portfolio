import Link from "next/link";
import type { Project } from "@/content/projects";
import { ArrowUpRight } from "./Icons";
import ProjectArt from "./ProjectArt";
import { StatusBadge, Tag } from "./ui";

export default function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.35)] ${
        wide ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      <ProjectArt
        art={project.art}
        accent={project.accent}
        className={`border-b border-line ${wide ? "aspect-[16/9] md:aspect-auto md:w-1/2 md:border-b-0 md:border-r" : "aspect-[16/9]"}`}
      />
      <div className={`flex flex-1 flex-col p-5 sm:p-6 ${wide ? "md:p-8" : ""}`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{project.label}</span>
          <StatusBadge status={project.status} />
        </div>
        <h3 className={`mt-3 font-semibold tracking-tight ${wide ? "text-2xl sm:text-3xl" : "text-lg"}`}>
          {project.title}
        </h3>
        <p className={`mt-2 leading-relaxed text-muted text-pretty ${wide ? "text-base" : "text-sm"}`}>{project.summary}</p>

        {wide && (
          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {project.results.slice(0, 4).map((r) => (
              <div key={r.label} className="bg-surface p-3.5">
                <dt className="sr-only">{r.label}</dt>
                <dd className="font-mono text-xl font-medium">{r.value}</dd>
                <dd className="mt-0.5 text-xs leading-snug text-muted">{r.label}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-auto pt-5">
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, wide ? 6 : 3).map((s) => (
              <li key={s}>
                <Tag>{s}</Tag>
              </li>
            ))}
          </ul>
          <span className="mt-5 flex items-center justify-between gap-4 border-t border-line pt-4 text-sm">
            <span className="font-mono text-xs text-faint">{project.period}</span>
            <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap font-medium text-fg">
              Case study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
