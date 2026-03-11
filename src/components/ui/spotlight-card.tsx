"use client"

import { useRef, type ReactNode } from "react"

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(0, 25, 218, 0.08)",
  hoverBorderColor,
}: {
  children: ReactNode
  className?: string
  spotlightColor?: string
  hoverBorderColor?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
    el.style.setProperty("--spotlight-color", spotlightColor)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-2xl overflow-hidden bg-white ${className}`}
      style={{
        border: `1px solid ${hoverBorderColor ? hoverBorderColor + "40" : "#E8E8F0"}`,
        boxShadow: "0 6px 24px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)",
      }}
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-40"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--spotlight-color, rgba(0,25,218,0.08)), transparent 80%)",
        }}
      />
      {children}
    </div>
  )
}
