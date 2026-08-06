import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

type Theme = "light" | "dark" | null;

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("dean-theme");
    const initialTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
    setTheme(initialTheme);
    if (initialTheme) document.documentElement.dataset.theme = `dean-${initialTheme}`;
  }, []);

  const followsDarkSystem = typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  const isDark = theme === "dark" || (theme === null && followsDarkSystem);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("dean-theme", nextTheme);
    document.documentElement.dataset.theme = `dean-${nextTheme}`;
  };

  return (
    <button className="theme-toggle btn btn-ghost btn-circle" type="button" onClick={toggleTheme} aria-label={`Switch to ${isDark ? "light" : "dark"} mode`} title={`Switch to ${isDark ? "light" : "dark"} mode`}>
      {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </button>
  );
}

export default ThemeToggle;
