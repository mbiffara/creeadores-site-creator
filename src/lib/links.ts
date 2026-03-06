/**
 * Resolves a path to the main creeadores-app.
 * In production this points to the app domain; in dev it falls back to localhost:4000.
 */
const APP_URL = (process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:4000").replace(/\/$/, "")

export function appLink(path: string) {
  return `${APP_URL}${path}`
}
