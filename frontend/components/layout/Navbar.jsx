import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function getInitialTheme() {
  const saved = localStorage.getItem("blogspace_theme");
  if (saved === "dark" || saved === "light") return saved;

  // fallback to system preference
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    // Apply theme using attribute selector (matches globals.css)
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("blogspace_theme", theme);
  }, [theme]);

  const navClass = ({ isActive }) =>
    `text-sm px-3 py-1.5 rounded-full border transition-all duration-300 ${isActive
      ? "bg-[var(--bg-card)] border-[var(--border-subtle)] shadow-sm"
      : "border-transparent hover:bg-[var(--bg-card)]"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-primary)]/70 backdrop-blur border-b border-[var(--border-subtle)]">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="serif-title text-lg font-semibold">
            blogspace<span className="opacity-70">.</span>
          </span>
          <span className="hidden sm:block text-xs text-[var(--text-muted)] italic">
            slow blogs
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>
          <NavLink to="/write" className={navClass}>
            Write
          </NavLink>
          <NavLink to="/profile" className={navClass}>
            Profile
          </NavLink>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className="px-3 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:translate-y-[-1px] active:translate-y-[0px] transition-all duration-300"
            title="Toggle theme"
          >
            <span className="text-sm">
              {theme === "dark" ? "🌙" : "☕"}
            </span>
          </button>

          {/* CTA */}
          <Link
            to="/write"
            className="text-sm px-4 py-1.5 rounded-full bg-[var(--accent-primary)] text-white hover:translate-y-[-1px] active:translate-y-[0px] shadow-sm transition-all duration-300"
          >
            New Post
          </Link>
        </div>
      </div>
    </header>
  );
}
