import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-32 text-center">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">This page doesn’t exist.</h1>
      <p className="mt-3 text-muted">The link may be old, or the project may have moved.</p>
      <Link href="/" className="mt-8 rounded-full bg-fg px-6 py-2.5 text-sm font-medium text-bg">
        Back to the portfolio
      </Link>
    </section>
  );
}
