"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Monitor, Moon, Sun } from "./Icons";

type Theme = "light" | "dark" | "system";

// --- A tiny store around localStorage, so every switcher on the page stays in sync ---
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function readTheme(): Theme {
  try {
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : "system";
  } catch {
    return "system";
  }
}

function applyTheme(theme: Theme) {
  const dark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

function setTheme(theme: Theme) {
  try {
    if (theme === "system") localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);
  } catch {
    /* storage blocked: the change still applies for this visit */
  }
  applyTheme(theme);
  listeners.forEach((l) => l());
}

function useTheme() {
  // null on the server, so the first client render matches the HTML
  const theme = useSyncExternalStore<Theme | null>(subscribe, readTheme, () => null);

  // Follow the operating system while "system" is selected
  useEffect(() => {
    if (theme !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  return theme;
}

/** One-click toggle for the navbar. The icon is picked by CSS, so it never flickers. */
export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={() => setTheme(document.documentElement.classList.contains("dark") ? "light" : "dark")}
      className="grid h-8 w-8 place-items-center rounded-full text-muted transition-colors hover:bg-subtle hover:text-fg"
      aria-label="Toggle light or dark theme"
    >
      <Moon className="h-4 w-4 dark:hidden" />
      <Sun className="hidden h-4 w-4 dark:block" />
    </button>
  );
}

/** Three-way switcher for the footer: system, light, dark. */
export function ThemeSwitcher() {
  const theme = useTheme();
  const options: { value: Theme; label: string; Icon: typeof Sun }[] = [
    { value: "system", label: "System theme", Icon: Monitor },
    { value: "light", label: "Light theme", Icon: Sun },
    { value: "dark", label: "Dark theme", Icon: Moon },
  ];

  return (
    <div role="radiogroup" aria-label="Theme" className="flex items-center gap-0.5 rounded-full border border-line p-0.5">
      {options.map(({ value, label, Icon }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            onClick={() => setTheme(value)}
            className={`grid h-7 w-7 place-items-center rounded-full transition-colors ${
              active ? "bg-subtle text-fg ring-1 ring-line-strong" : "text-faint hover:text-fg"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
          </button>
        );
      })}
    </div>
  );
}
