import Link from "next/link";
import { site } from "@/content/site";
import { GitHub, LinkedIn, Mail } from "./Icons";
import { ThemeSwitcher } from "./Theme";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-fg font-mono text-[11px] font-semibold text-bg">
            {site.initials}
          </span>
          <p className="text-sm text-muted">
            © 2026 {site.name}. Built with Next.js and Tailwind CSS.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-fg">
            <GitHub />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-fg">
            <LinkedIn />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className="text-muted hover:text-fg">
            <Mail />
          </a>
          <Link href="/#top" className="text-sm text-muted hover:text-fg">
            Back to top ↑
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}
