"use client";

import { useState } from "react";
import { Check, Copy } from "./Icons";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong bg-surface px-5 font-mono text-sm transition-colors hover:bg-subtle"
      aria-live="polite"
    >
      {copied ? <Check className="h-4 w-4 text-ready" /> : <Copy className="h-4 w-4 text-muted" />}
      {copied ? "Copied to clipboard" : email}
    </button>
  );
}
