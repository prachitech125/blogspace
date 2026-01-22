import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto reading-width rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] p-8 text-center">
      <h1 className="serif-title text-3xl font-semibold">404</h1>
      <p className="mt-2 text-[var(--muted)]">
        This page feels like a missing diary page.
      </p>
      <Link
        to="/"
        className="mt-5 inline-block px-5 py-2 rounded-xl bg-[#b79cff] text-[#1b1530]"
      >
        Go home
      </Link>
    </div>
  );
}
