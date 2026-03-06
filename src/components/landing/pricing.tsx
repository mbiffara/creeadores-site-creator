"use client"

import { Check, Rocket, TrendingUp, Building2, Users, Megaphone, Percent, ArrowRight, Phone, type LucideIcon } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { appLink } from "@/lib/links"
import type { PricingPlan } from "@/lib/i18n"

const planIconMap: Record<string, LucideIcon> = {
  check: Check,
  rocket: Rocket,
  trending: TrendingUp,
  building: Building2,
}

const featureIconMap: Record<string, LucideIcon> = {
  users: Users,
  megaphone: Megaphone,
  percent: Percent,
}

export function Pricing() {
  const { dictionary } = useLanguage()
  const t = dictionary.home.pricing

  return (
    <section className="py-24 px-6 lg:px-16 bg-[#FAFAFE]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-white mb-5"
            style={{ backgroundColor: "#0019DA", fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em" }}
          >
            {t.badge}
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, lineHeight: 1.2, color: "#0A0A1A" }}>
            {t.title}
          </h2>
          <p className="mt-4 mx-auto max-w-[520px] text-gray-500" style={{ fontSize: "16px", lineHeight: 1.7 }}>
            {t.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
          {t.plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PlanCard({ plan }: { plan: PricingPlan }) {
  const PlanIcon = planIconMap[plan.iconName] || Check

  return (
    <div
      className="relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: plan.popular ? "#0019DA" : "#FFFFFF",
        border: plan.popular ? "none" : "1px solid #E8E8F0",
        boxShadow: plan.popular
          ? "0 20px 60px rgba(0, 25, 218, 0.25)"
          : "0 4px 20px rgba(0, 0, 0, 0.04)",
      }}
    >
      {plan.popular && plan.popularLabel && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full"
          style={{
            backgroundColor: "#FFD700",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.05em",
            color: "#0A0A1A",
          }}
        >
          {plan.popularLabel}
        </div>
      )}

      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
        style={{ backgroundColor: plan.popular ? "rgba(255,255,255,0.15)" : "#EEF0FF" }}
      >
        <PlanIcon size={20} style={{ color: plan.popular ? "#FFFFFF" : "#0019DA" }} />
      </div>

      <h3
        style={{
          fontSize: "22px",
          fontWeight: 700,
          color: plan.popular ? "#FFFFFF" : "#0A0A1A",
          marginBottom: "4px",
        }}
      >
        {plan.name}
      </h3>
      <p
        style={{
          fontSize: "13px",
          color: plan.popular ? "rgba(255,255,255,0.7)" : "#888",
          marginBottom: "24px",
        }}
      >
        {plan.description}
      </p>

      <div className="mb-6">
        {plan.price ? (
          <div className="flex items-baseline gap-1">
            <span
              style={{
                fontSize: "42px",
                fontWeight: 800,
                color: plan.popular ? "#FFFFFF" : "#0A0A1A",
                lineHeight: 1,
              }}
            >
              {plan.price}
            </span>
            <span
              style={{
                fontSize: "15px",
                color: plan.popular ? "rgba(255,255,255,0.6)" : "#999",
                fontWeight: 500,
              }}
            >
              {plan.period}
            </span>
          </div>
        ) : (
          <span style={{ fontSize: "20px", fontWeight: 700, color: "#0A0A1A" }}>
            {plan.customPriceLabel}
          </span>
        )}
      </div>

      <div className="h-px w-full mb-6" style={{ backgroundColor: plan.popular ? "rgba(255,255,255,0.15)" : "#E8E8F0" }} />

      <ul className="flex flex-col gap-4 mb-8 flex-1">
        {plan.features.map((feature) => {
          const FeatureIcon = featureIconMap[feature.iconName] || Check
          return (
            <li key={feature.text} className="flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: plan.popular ? "rgba(255,255,255,0.12)" : "#F3F4FF" }}
              >
                <FeatureIcon size={14} style={{ color: plan.popular ? "#FFFFFF" : "#0019DA" }} />
              </div>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: plan.popular ? "rgba(255,255,255,0.9)" : "#555",
                }}
              >
                {feature.text}
              </span>
            </li>
          )
        })}
      </ul>

      <a
        href={plan.price ? appLink("/creator/register") : appLink("/companies/new")}
        className="w-full py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer hover:opacity-90"
        style={{
          backgroundColor: plan.popular ? "#FFFFFF" : plan.price ? "#0019DA" : "transparent",
          color: plan.popular ? "#0019DA" : plan.price ? "#FFFFFF" : "#0019DA",
          fontSize: "14px",
          fontWeight: 600,
          border: !plan.price ? "2px solid #0019DA" : "none",
        }}
      >
        {!plan.price && <Phone size={15} />}
        {plan.cta}
        {plan.price !== null && <ArrowRight size={15} />}
      </a>
    </div>
  )
}
