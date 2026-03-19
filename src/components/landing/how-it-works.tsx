"use client"

import React, { useRef } from "react"
import {
  UserPlus,
  Inbox,
  Handshake,
  Layers,
  ShieldCheck,
  Sparkles,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import { motion, useInView } from "motion/react"
import { useLanguage } from "@/components/language-provider"
import { appLink } from "@/lib/links"
import ShinyText from "@/components/ui/shiny-text"
import type { HowItWorksStep } from "@/lib/i18n"

const iconMap: Record<string, LucideIcon> = {
  "user-plus": UserPlus,
  inbox: Inbox,
  handshake: Handshake,
  layers: Layers,
  "shield-check": ShieldCheck,
}

/* ─── Step Card ─── */
function StepCard({
  step,
  index,
  isLeft,
}: {
  step: HowItWorksStep
  index: number
  isLeft: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const Icon = iconMap[step.iconName] ?? ShieldCheck

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      className="relative rounded-2xl p-6 lg:p-8 overflow-hidden group cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: `1.5px solid ${step.accentColor}40`,
        boxShadow: `0 4px 24px ${step.accentColor}12, 0 2px 8px rgba(0,0,0,0.04)`,
      }}
    >
      {/* Spotlight hover effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-40"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${step.accentColor}30, transparent 80%)`,
        }}
      />

      {/* Watermark number */}
      <span
        className="absolute -top-4 -right-2 select-none pointer-events-none"
        style={{
          fontSize: "120px",
          fontWeight: 800,
          color: `${step.accentColor}14`,
          lineHeight: 1,
        }}
      >
        {step.number}
      </span>

      <div className="relative z-10">
        {/* Icon + label */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${step.accentColor}, ${step.accentColor}DD)`,
              boxShadow: `0 4px 16px ${step.accentColor}50`,
            }}
          >
            <Icon size={20} color="#fff" strokeWidth={1.8} />
          </div>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: step.accentColor,
            }}
          >
            {step.number}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-gray-900 mb-2"
          style={{ fontSize: "20px", fontWeight: 700, lineHeight: 1.25 }}
        >
          {step.title}
        </h3>

        {/* Description */}
        <p
          className="text-gray-500 mb-4"
          style={{ fontSize: "14px", lineHeight: 1.7 }}
        >
          {step.description}
        </p>

        {/* Bullet checklist */}
        <ul className="flex flex-col gap-2">
          {step.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: `${step.accentColor}25` }}
              >
                <Check size={12} style={{ color: step.accentColor }} strokeWidth={2.5} />
              </div>
              <span className="text-gray-600" style={{ fontSize: "13px", lineHeight: 1.5 }}>
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

/* ─── Timeline Circle ─── */
function TimelineCircle({
  step,
  index,
}: {
  step: HowItWorksStep
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={inView ? { scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
      className="w-12 h-12 rounded-full flex items-center justify-center relative z-10"
      style={{
        background: `linear-gradient(135deg, ${step.accentColor}, ${step.accentColor}DD)`,
        border: "3px solid #fff",
        boxShadow: `0 4px 20px ${step.accentColor}50`,
      }}
    >
      <span style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>
        {step.number}
      </span>
    </motion.div>
  )
}

/* ─── Social Proof Section ─── */
function SocialProof() {
  const { dictionary } = useLanguage()
  const t = dictionary.home.howItWorks
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className="mt-20 lg:mt-28">
      {/* Reputation badges grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
        {t.socialProof.stats.map((stat, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-5 relative overflow-hidden cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: `1.5px solid ${stat.accentColor}40`,
                boxShadow: `0 4px 16px ${stat.accentColor}15, 0 2px 8px rgba(0,0,0,0.04)`,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${stat.accentColor}28, ${stat.accentColor}14)`,
                    border: `1.5px solid ${stat.accentColor}35`,
                  }}
                >
                  <span style={{ fontSize: "20px", lineHeight: 1 }}>{stat.iconName}</span>
                </div>
                <div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: stat.accentColor }}>
                    {stat.label}
                  </div>
                  <div className="text-gray-400" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.03em" }}>
                    {stat.value}
                  </div>
                </div>
              </div>
              <p className="text-gray-500" style={{ fontSize: "12px", lineHeight: 1.5 }}>
                {stat.description}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {t.socialProof.testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
            className="rounded-2xl p-6 lg:p-8 relative cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1.5px solid rgba(0, 25, 218, 0.18)",
              boxShadow: "0 4px 16px rgba(0, 25, 218, 0.08), 0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <Quote
              size={24}
              className="mb-3"
              style={{ color: "rgba(0, 25, 218, 0.25)" }}
              strokeWidth={1.5}
            />
            <p
              className="text-gray-700 mb-5"
              style={{ fontSize: "15px", lineHeight: 1.7, fontStyle: "italic" }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, #0019DA35, #7C3AED35)`,
                }}
              />
              <div>
                <div className="text-gray-900" style={{ fontSize: "14px", fontWeight: 600 }}>
                  {testimonial.name}
                </div>
                <div className="text-gray-400" style={{ fontSize: "12px", fontWeight: 500 }}>
                  {testimonial.handle}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ─── CTA Section ─── */
function CtaSection() {
  const { dictionary } = useLanguage()
  const t = dictionary.home.howItWorks.cta
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mt-12 sm:mt-20 lg:mt-28 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-14 text-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0019DA 0%, #030870 50%, #0019DA 100%)",
        boxShadow: "0 12px 48px rgba(0, 25, 218, 0.25)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
      }}
    >
      {/* Subtle radial overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(237,75,0,0.08) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10">
        <h3
          className="text-white mb-3"
          style={{
            fontSize: "clamp(20px, 2.8vw, 34px)",
            fontWeight: 700,
            lineHeight: 1.2,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
          }}
        >
          {t.title}
        </h3>
        <p
          className="text-white/60 mb-8 max-w-lg mx-auto text-[14px] sm:text-[16px]"
          style={{ lineHeight: 1.7 }}
        >
          {t.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <motion.a
            href={appLink("/creator/register")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-white text-[#0019DA] px-6 py-2.5 sm:px-8 sm:py-3 rounded-full cursor-pointer"
            style={{ fontSize: "14px", fontWeight: 600 }}
          >
            {t.primaryButton}
            <ArrowRight size={16} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Main Component ─── */
export function HowItWorks() {
  const { dictionary } = useLanguage()
  const t = dictionary.home.howItWorks
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Dot texture background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0, 25, 218, 0.07) 1.2px, transparent 1.2px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        {/* ─── Header (matches CampaignFeatures UI) ─── */}
        <div ref={heroRef} className="text-center mb-12 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm"
            style={{
              background: "linear-gradient(135deg, rgba(0, 25, 218, 0.08) 0%, rgba(99, 60, 255, 0.08) 100%)",
              border: "1px solid rgba(0, 25, 218, 0.12)",
              boxShadow: "0 2px 8px rgba(0, 25, 218, 0.06)",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "#0019DA",
            }}
          >
            <Sparkles size={13} />
            <ShinyText text={t.badge} color="#0019DA" shineColor="#93C5FD" speed={2} spread={90} />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: "clamp(22px, 3.5vw, 42px)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#0A0A1A",
              whiteSpace: "pre-line",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 mx-auto max-w-2xl text-gray-500 text-[14px] sm:text-[16px]"
            style={{ lineHeight: 1.7 }}
          >
            {t.subtitle}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            href={appLink("/creator/register")}
            className="inline-flex items-center gap-2 mt-6 bg-[#0019DA] text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full hover:bg-[#0014B0] transition-colors cursor-pointer"
            style={{ fontSize: "14px", fontWeight: 600 }}
          >
            {t.cta.primaryButton}
            <ArrowRight size={16} />
          </motion.a>
        </div>

        {/* ─── Desktop Stepper (lg+) ─── */}
        <div className="hidden lg:block">
          <div className="relative" style={{ display: "grid", gridTemplateColumns: "1fr 80px 1fr", gap: "0" }}>
            {/* Vertical timeline line (center column) */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]"
              style={{
                background: "linear-gradient(180deg, #0019DA40 0%, #7C3AED50 25%, #ED4B0050 50%, #05966950 75%, #0891B240 100%)",
              }}
            />

            {t.steps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={step.number}
                  className="contents"
                >
                  {/* Left column */}
                  <div className={`flex items-center ${isLeft ? "justify-end pr-6" : ""}`}>
                    {isLeft ? (
                      <StepCard step={step} index={i} isLeft={true} />
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* Center: timeline circle */}
                  <div className="flex items-center justify-center relative">
                    <TimelineCircle step={step} index={i} />
                  </div>

                  {/* Right column */}
                  <div className={`flex items-center ${!isLeft ? "pl-6" : ""}`}>
                    {!isLeft ? (
                      <StepCard step={step} index={i} isLeft={false} />
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* Spacer row between steps */}
                  {i < t.steps.length - 1 && (
                    <>
                      <div className="h-8" />
                      <div className="h-8" />
                      <div className="h-8" />
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* ─── Mobile Stepper (<lg) ─── */}
        <div className="lg:hidden">
          <div className="relative pl-10">
            {/* Vertical connector line */}
            <div
              className="absolute left-[18px] top-0 bottom-0 w-[2px]"
              style={{
                background: "linear-gradient(180deg, #0019DA40 0%, #0891B240 100%)",
              }}
            />

            <div className="flex flex-col gap-6">
              {t.steps.map((step, i) => {
                const ref = useRef<HTMLDivElement>(null)
                const inView = useInView(ref, { once: true, amount: 0.2 })

                return (
                  <div key={step.number} className="relative" ref={ref}>
                    {/* Timeline circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute -left-10 top-6 w-9 h-9 rounded-full flex items-center justify-center z-10"
                      style={{
                        background: `linear-gradient(135deg, ${step.accentColor}, ${step.accentColor}DD)`,
                        border: "3px solid #fff",
                        boxShadow: `0 3px 14px ${step.accentColor}50`,
                      }}
                    >
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "#fff" }}>
                        {step.number}
                      </span>
                    </motion.div>

                    {/* Card */}
                    <StepCard step={step} index={i} isLeft={false} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ─── CTA ─── */}
        <CtaSection />
      </div>
    </section>
  )
}
