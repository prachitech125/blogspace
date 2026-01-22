export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={
        "px-4 py-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:translate-y-[-1px] active:translate-y-[0px] shadow-sm " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}
