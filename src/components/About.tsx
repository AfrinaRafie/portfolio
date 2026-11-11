import { about, certifications, education, experience, leadership, site, skills } from "@/content/site";
import { MapPin } from "./Icons";
import { SectionHeading, Tag } from "./ui";

function Card({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-line bg-surface p-5 sm:p-6 ${className}`}>
      <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading id="about" eyebrow="01 · About me" title="From big data coursework to real plant data." />

        {/* Bio + profile card */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-muted text-pretty sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <ul className="flex flex-wrap gap-2 pt-2" aria-label="Strengths">
              {about.strengths.map((s) => (
                <li key={s} className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-fg">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-line bg-surface p-6">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-fg font-mono text-lg font-semibold text-bg">
                {site.initials}
              </span>
              <div>
                <p className="font-semibold">{site.name}</p>
                <p className="text-sm text-muted">{site.role}</p>
              </div>
            </div>
            <dl className="mt-6 divide-y divide-line border-t border-line text-sm">
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-muted">Currently</dt>
                <dd className="text-right">Business Analyst, Cypark Resources</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-muted">Degree</dt>
                <dd className="text-right">B.IT (Hons) Big Data Analytics, UTP</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-muted">Languages</dt>
                <dd className="text-right">Malay, English</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-muted">Looking for</dt>
                <dd className="text-right">Graduate data analyst roles</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-muted">Based in</dt>
                <dd className="flex items-center gap-1.5 text-right">
                  <MapPin className="h-3.5 w-3.5 text-muted" /> Sungai Buloh, Selangor
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Experience timeline */}
        <div className="mt-20">
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Experience</h3>
          <ol className="mt-6 divide-y divide-line rounded-xl border border-line bg-surface">
            {experience.map((job) => (
              <li key={job.org} className="grid gap-3 p-5 sm:p-7 md:grid-cols-[220px_1fr] md:gap-8">
                <div>
                  <p className="font-mono text-xs text-muted">{job.period}</p>
                  <p className="mt-2 font-semibold">{job.org}</p>
                  <p className="mt-0.5 text-sm text-muted">{job.team}</p>
                </div>
                <div>
                  <p className="font-medium">{job.title}</p>
                  <ul className="mt-3 space-y-2.5">
                    {job.points.map((pt) => (
                      <li key={pt.slice(0, 30)} className="relative pl-5 text-sm leading-relaxed text-muted sm:text-base">
                        <span className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-line-strong" aria-hidden />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Skills */}
        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((g) => (
            <div key={g.group} className="bg-surface p-5 sm:p-6">
              <h3 className="text-sm font-semibold">{g.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education, certifications, leadership */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Card title="Education" className="lg:col-span-1">
            <ul className="space-y-5">
              {education.map((e) => (
                <li key={e.title}>
                  <p className="font-mono text-xs text-muted">{e.period}</p>
                  <p className="mt-1 font-medium leading-snug">{e.title}</p>
                  <p className="text-sm text-muted">{e.org}</p>
                  {e.detail && <p className="mt-2 text-xs leading-relaxed text-faint">{e.detail}</p>}
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Certifications">
            <ul className="divide-y divide-line">
              {certifications.map((c) => (
                <li key={c.name} className="py-3 first:pt-0 last:pb-0">
                  <p className="font-medium leading-snug">{c.name}</p>
                  <p className="text-sm text-muted">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Leadership">
            <ul className="divide-y divide-line">
              {leadership.map((l) => (
                <li key={l} className="py-3 text-sm leading-snug first:pt-0 last:pb-0">
                  {l}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
