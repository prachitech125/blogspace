export default function Footer() {
  return (
    <footer className="mt-10 border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-[var(--muted)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Blogspace · slow blogs, warm thoughts</p>
        <p className="italic">made for calm writing ✍️</p>
      </div>
    </footer>
  );
}
