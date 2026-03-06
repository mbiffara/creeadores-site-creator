"use client"

import { type ReactNode } from "react"

interface VerticalMarqueeProps {
  children: ReactNode
  reverse?: boolean
  duration?: number
}

export function VerticalMarquee({ children, reverse = false, duration = 30 }: VerticalMarqueeProps) {
  return (
    <div className="overflow-hidden h-full">
      <div
        className="flex flex-col gap-5"
        style={{
          animation: `marquee-vertical ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
