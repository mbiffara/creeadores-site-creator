"use client"

import React, { useRef } from "react"
import { ShieldCheck } from "lucide-react"
import { motion, useInView } from "motion/react"
import { useLanguage } from "@/components/language-provider"
import ShinyText from "@/components/ui/shiny-text"

function ReputationCard({ stat, index, inView }: { stat: { value: string; label: string; description: string; accentColor: string; iconName: string }; index: number; inView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="rounded-2xl p-5 sm:p-6 relative overflow-hidden cursor-pointer group"
      style={{
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: `2px solid ${stat.accentColor}70`,
        boxShadow: `0 4px 16px ${stat.accentColor}20, 0 2px 8px rgba(0,0,0,0.06)`,
      }}
    >
      {/* Spotlight hover effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-40"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${stat.accentColor}30, transparent 80%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${stat.accentColor}28, ${stat.accentColor}14)`,
              border: `1.5px solid ${stat.accentColor}35`,
            }}
          >
            <span className="text-[20px] sm:text-[24px]" style={{ lineHeight: 1 }}>{stat.iconName}</span>
          </div>
          <div>
            <div className="text-[15px] sm:text-[18px]" style={{ fontWeight: 700, color: stat.accentColor }}>
              {stat.label}
            </div>
            <div className="text-gray-400 text-[10px] sm:text-[12px]" style={{ fontWeight: 600, letterSpacing: "0.03em" }}>
              {stat.value}
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-[12px] sm:text-[14px]" style={{ lineHeight: 1.5 }}>
          {stat.description}
        </p>
      </div>
    </motion.div>
  )
}

export function Pricing() {
  const { dictionary } = useLanguage()
  const t = dictionary.home.pricing
  const stats = dictionary.home.howItWorks.socialProof.stats
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="pricing" className="relative py-12 sm:py-24 px-4 sm:px-6 lg:px-16 bg-[#FAFAFE] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0, 25, 218, 0.07) 1.2px, transparent 1.2px)", backgroundSize: "16px 16px" }} />
      <div ref={ref} className="relative max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-4 sm:mb-5 backdrop-blur-sm"
            style={{
              background: "linear-gradient(135deg, rgba(0, 25, 218, 0.08) 0%, rgba(99, 60, 255, 0.08) 100%)",
              border: "1px solid rgba(0, 25, 218, 0.12)",
              boxShadow: "0 2px 8px rgba(0, 25, 218, 0.06)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "#0019DA",
            }}
          >
            <ShieldCheck size={12} />
            <ShinyText text={t.badge} color="#0019DA" shineColor="#93C5FD" speed={2} spread={90} />
          </span>
          <h2 style={{ fontSize: "clamp(20px, 3.5vw, 42px)", fontWeight: 700, lineHeight: 1.2, color: "#0A0A1A", textTransform: "uppercase", letterSpacing: "-0.02em", whiteSpace: "pre-line" }}>
            {t.title}
          </h2>
          <p className="mt-3 sm:mt-4 mx-auto max-w-[520px] text-gray-500 text-[13px] sm:text-[16px]" style={{ lineHeight: 1.7 }}>
            {t.description}
          </p>
        </div>

        {/* Reputation badge cards — 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-[700px] mx-auto">
          {stats.map((stat, i) => (
            <ReputationCard key={i} stat={stat} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="https://app.creeadores.com/auth/register?role=creator"
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#0019DA] text-white text-[13px] sm:text-[15px] font-semibold transition-colors hover:bg-[#0014B0] cursor-pointer"
          >
            ✨ {t.ctaButton} ✨
          </a>
        </motion.div>
      </div>
    </section>
  )
}
