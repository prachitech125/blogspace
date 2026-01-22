export default function Input({ className = "", ...props }) {
  return (
    <input
      className={
        "w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] placeholder:text-[var(--muted)] soft-focus " +
        className
      }
      {...props}
    />
  );
}
