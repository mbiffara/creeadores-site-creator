export type ThemePreference = "light" | "dark" | "system";

export const THEME_STORAGE_KEY = "creeadores-theme";
export const THEME_COOKIE_NAME = "creeadores-theme";

export function isThemePreference(value: unknown): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}

export function resolveTheme(preference: ThemePreference, system: "light" | "dark" = "light") {
  return preference === "system" ? system : preference;
}
