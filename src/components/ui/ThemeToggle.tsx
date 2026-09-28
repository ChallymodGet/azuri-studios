"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

/** Keep in sync with the inline init script in src/app/layout.tsx. */
export const THEME_STORAGE_KEY = "azuri-theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// On the server (and during hydration) we don't know the theme yet.
function getServerSnapshot(): Theme | null {
  return null;
}

// The theme lives on <html> (set by the init script and by this toggle), so treat it as
// an external store: watch the class attribute and follow OS changes while no explicit
// choice has been saved.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const handleMediaChange = (event: MediaQueryListEvent) => {
    if (localStorage.getItem(THEME_STORAGE_KEY)) return;
    applyTheme(event.matches ? "dark" : "light");
  };
  media.addEventListener("change", handleMediaChange);

  return () => {
    observer.disconnect();
    media.removeEventListener("change", handleMediaChange);
  };
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const next: Theme = getSnapshot() === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
  };

  const label =
    theme === "dark" ? "Switch to light mode" : theme === "light" ? "Switch to dark mode" : "Toggle theme";

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {/* Moon: shown in light mode (visibility handled in globals.css) */}
      <svg
        className="icon-moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
      </svg>

      {/* Sun: shown in dark mode */}
      <svg
        className="icon-sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  );
}
