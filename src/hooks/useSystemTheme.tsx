import { useEffect } from "react";

/**
 * Syncs the `dark` class on <html> with the user's OS color scheme preference.
 * Updates live when the system theme changes.
 */
export const useSystemTheme = () => {
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = (isDark: boolean) => {
      document.documentElement.classList.toggle("dark", isDark);
    };

    apply(mql.matches);

    const handler = (e: MediaQueryListEvent) => apply(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);
};
