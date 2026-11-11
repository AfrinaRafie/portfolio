"use client";

import { useState } from "react";
import { projects, type Category } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import { SectionHeading } from "./ui";

const filters: ("All" | Category)[] = ["All", "Work", "University", "Programme"];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="border-b border-line bg-subtle">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="projects"
            eyebrow="02 · Projects"
            title="Work that replaced a messy process."
            description="Dashboards, analysis and machine learning from my placement, internship and degree. Open any card for the full case study."
          />
          <div role="tablist" aria-label="Filter projects" className="flex w-fit gap-1 rounded-full border border-line bg-surface p-1">
            {filters.map((f) => {
              const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
              const active = filter === f;
              return (
                <button
                  key={f}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors sm:px-4 ${
                    active ? "bg-fg text-bg" : "text-muted hover:text-fg"
                  }`}
                >
                  {f}
                  <span className={`ml-1.5 font-mono text-[11px] ${active ? "opacity-70" : "text-faint"}`}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <ProjectCard key={p.slug} project={p} wide={p.featured && filter !== "Work" && filter !== "Programme"} />
          ))}
        </div>
      </div>
    </section>
  );
}
