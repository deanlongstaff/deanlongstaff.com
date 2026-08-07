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
    <button className="grid size-8 shrink-0 cursor-pointer touch-manipulation select-none place-items-center justify-center gap-1.5 rounded-[50%] p-0 align-middle text-[14px] font-semibold text-ink shrink-0 outline-ink outline-offset-2 border border-[color-mix(in_srgb,var(--ink)_14%,var(--line))] bg-[linear-gradient(145deg,var(--surface),color-mix(in_srgb,var(--surface-soft)_72%,var(--surface)))] shadow-[0_3px_0_color-mix(in_srgb,var(--ink)_22%,transparent),inset_0_1px_0_rgba(255,255,255,.65)] transition-[transform,border-color,color] duration-[180ms] ease-[ease] hover:-translate-y-px hover:rotate-12 hover:border-signal hover:text-signal active:translate-y-0.5 active:shadow-[0_1px_0_color-mix(in_srgb,var(--ink)_22%,transparent),inset_0_1px_0_rgba(255,255,255,.45)] [&_svg]:m-auto [&_svg]:block md:size-[38px]" type="button" onClick={toggleTheme} aria-label={`Switch to ${isDark ? "light" : "dark"} mode`} title={`Switch to ${isDark ? "light" : "dark"} mode`}>
      {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </button>
  );
}

export default ThemeToggle;
