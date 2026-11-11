import { site } from "@/content/site";
import CopyEmail from "./CopyEmail";
import { ArrowUpRight, GitHub, LinkedIn, Mail, MapPin } from "./Icons";

export default function Contact() {
  const channels = [
    { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
    { label: "LinkedIn", value: "in/norafrinarafie", href: site.linkedin, Icon: LinkedIn },
    { label: "GitHub", value: site.githubHandle, href: site.github, Icon: GitHub },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="glow pointer-events-none absolute -bottom-40 left-1/2 h-[380px] w-[900px] -translate-x-1/2 opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p id="contact" className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            03 · Contact
          </p>
          <h2 className="text-gradient mt-3 text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
            Let’s turn your data into decisions.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted text-pretty sm:text-lg">
            I’m looking for a graduate data analyst role in Malaysia. The fastest way to reach me is email, and I usually reply within a day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}?subject=Opportunity%20for%20Afrina`}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-fg px-6 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              <Mail /> Email me
            </a>
            <CopyEmail email={site.email} />
          </div>
          <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="h-3.5 w-3.5" /> {site.location}
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {channels.map(({ label, value, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-strong"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-subtle">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-muted">{label}</span>
                  <span className="block truncate text-sm font-medium">{value}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-faint transition-colors group-hover:text-fg" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
