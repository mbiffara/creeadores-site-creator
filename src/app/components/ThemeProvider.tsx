"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { THEME_COOKIE_NAME, THEME_STORAGE_KEY, type ThemePreference, isThemePreference, resolveTheme } from "@/lib/theme";

type ThemeContextValue = {
  theme: ThemePreference;
  resolvedTheme: "light" | "dark";
  setTheme: (nextTheme: ThemePreference) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readStoredTheme(initialTheme: ThemePreference): ThemePreference {
  if (typeof window === "undefined") {
    return initialTheme;
  }

  const fromStorage = localStorage.getItem(THEME_STORAGE_KEY);
  if (isThemePreference(fromStorage)) {
    return fromStorage;
  }

  const fromCookie = document.cookie
    .split(";")
    .map((chunk) => chunk.trim())
    .find((entry) => entry.startsWith(`${THEME_COOKIE_NAME}=`))
    ?.split("=")?.[1];

  if (isThemePreference(fromCookie)) {
    return fromCookie;
  }

  return initialTheme;
}

function applyThemeAttributes(preference: ThemePreference, effectiveTheme: "light" | "dark") {
  const root = document.documentElement;
  root.dataset.theme = effectiveTheme;
  root.dataset.themePreference = preference;
}

function persistTheme(preference: ThemePreference) {
  localStorage.setItem(THEME_STORAGE_KEY, preference);
  document.cookie = `${THEME_COOKIE_NAME}=${preference}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

export function ThemeProvider({ children, initialTheme = "light" }: { children: React.ReactNode; initialTheme?: ThemePreference }) {
  const [theme, setThemeState] = useState<ThemePreference>(initialTheme);
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() => resolveTheme(initialTheme));

  useEffect(() => {
    const storedPreference = readStoredTheme(initialTheme);
    const initialResolved = resolveTheme(storedPreference, getSystemTheme());
    setThemeState(storedPreference);
    setResolvedTheme(initialResolved);
    applyThemeAttributes(storedPreference, initialResolved);
  }, [initialTheme]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      setResolvedTheme((current) => {
        if (theme !== "system") return current;
        const systemTheme = getSystemTheme();
        applyThemeAttributes(theme, systemTheme);
        return systemTheme;
      });
    };

    if (theme === "system") {
      const systemTheme = getSystemTheme();
      setResolvedTheme(systemTheme);
      applyThemeAttributes(theme, systemTheme);
      mediaQuery.addEventListener("change", handleChange);
    } else {
      applyThemeAttributes(theme, theme);
    }

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const setTheme = (nextTheme: ThemePreference) => {
    setThemeState(nextTheme);
    const effective = resolveTheme(nextTheme, getSystemTheme());
    setResolvedTheme(effective);

    if (typeof window !== "undefined") {
      applyThemeAttributes(nextTheme, effective);
      persistTheme(nextTheme);
    }
  };

  const value = useMemo(() => ({ theme, resolvedTheme, setTheme }), [theme, resolvedTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
