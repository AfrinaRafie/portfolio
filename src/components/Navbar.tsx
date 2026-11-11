"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";
import { Close, LinkedIn, Menu } from "./Icons";
import { ThemeToggle } from "./Theme";

const links = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/75 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main">
        <Link href="/#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-7 w-7 place-items-center rounded-md bg-fg font-mono text-[11px] font-semibold text-bg">
            {site.initials}
          </span>
          <span className="text-sm font-semibold tracking-tight">{site.name}</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:bg-subtle hover:text-fg"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="hidden h-8 w-8 place-items-center rounded-full text-muted transition-colors hover:bg-subtle hover:text-fg sm:grid"
          >
            <LinkedIn className="h-4 w-4" />
          </a>
          <Link
            href="/#contact"
            className="hidden rounded-full bg-fg px-4 py-1.5 text-sm font-medium text-bg transition-opacity hover:opacity-85 md:inline-block"
          >
            Get in touch
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full border border-line md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <Close className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg px-4 pb-5 pt-2 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3.5 text-base text-fg"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2">
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-fg py-2.5 text-center text-sm font-medium text-bg"
            >
              Get in touch
            </Link>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-line py-2.5 text-sm"
            >
              <LinkedIn className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
