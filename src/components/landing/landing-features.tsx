"use client"

import { Users, CreditCard, Link2, Search, Bot, Lock, FileText, BarChart3, TrendingUp, type LucideIcon } from "lucide-react"
import { ImageWithFallback } from "./image-with-fallback"
import { useLanguage } from "@/components/language-provider"
import type { LandingFeatureFloatingLabel, LandingFeatureItem } from "@/lib/i18n"

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  creditcard: CreditCard,
  link: Link2,
  search: Search,
  bot: Bot,
  lock: Lock,
  file: FileText,
  barchart: BarChart3,
  trending: TrendingUp,
}

const featureImages = [
  "https://images.unsplash.com/photo-1739722275318-bd52d0c135fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwY29udGVudCUyMGNyZWF0b3IlMjBmaWxtaW5nJTIwdmlkZW8lMjBzbWFydHBob25lfGVufDF8fHx8MTc3Mjc0NTg1NXww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1684337399050-0412ebed8005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZsdWVuY2VyJTIwY3JlYXRpbmclMjBzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBsYXB0b3B8ZW58MXx8fHwxNzcyNzQ1ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1702047076267-6719aadd2807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMG1hcmtldGluZyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwbWVldGluZ3xlbnwxfHx8fDE3NzI3NDU4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1760900051041-90417b9c110e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBtb2JpbGUlMjBwaG9uZSUyMHNjcmVlbnxlbnwxfHx8fDE3NzI3NDU4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
]

function FloatingLabelPill({ label }: { label: LandingFeatureFloatingLabel }) {
  const Icon = iconMap[label.iconName]
  return (
    <div className={`absolute ${label.position} z-10`}>
      <div
        className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 shadow-lg border border-gray-100"
        style={{ fontSize: "10px", fontWeight: 600, whiteSpace: "nowrap" }}
      >
        {Icon && <Icon className="w-3 h-3 text-[#0019DA]" />}
        <span className="text-gray-800">{label.text}</span>
      </div>
    </div>
  )
}

function PhoneMockup({ feature, imageUrl }: { feature: LandingFeatureItem; imageUrl: string }) {
  return (
    <div className="relative w-full max-w-[240px] mx-auto">
      <div
        className="relative rounded-[40px] overflow-hidden bg-[#1a1a1a] p-[3px]"
        style={{ aspectRatio: "393/852" }}
      >
        <div
          className="absolute inset-0 rounded-[40px] pointer-events-none z-30"
          style={{ boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.25), 0 8px 20px rgba(0,0,0,0.15)" }}
        />
        <div className="relative w-full h-full rounded-[37px] overflow-hidden bg-black">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20" />
          <div className="absolute -right-[3px] top-[120px] w-[3px] h-[50px] bg-[#2a2a2a] rounded-l-sm z-30" />
          <div className="absolute -left-[3px] top-[100px] w-[3px] h-[28px] bg-[#2a2a2a] rounded-r-sm z-30" />
          <div className="absolute -left-[3px] top-[138px] w-[3px] h-[28px] bg-[#2a2a2a] rounded-r-sm z-30" />
          <ImageWithFallback
            src={imageUrl}
            alt={feature.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
          <div className="absolute bottom-4 left-3 flex items-center gap-1.5 z-10">
            <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden">
              <ImageWithFallback src={imageUrl} alt="" className="w-full h-full object-cover" />
            </div>
            <span className="text-white" style={{ fontSize: "10px", fontWeight: 600 }}>@creador_ugc</span>
          </div>
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[80px] h-[4px] bg-white/30 rounded-full z-20" />
        </div>
      </div>
      {feature.floatingLabels.map((label, i) => (
        <FloatingLabelPill key={i} label={label} />
      ))}
    </div>
  )
}

function FeatureBlock({ feature, reversed, imageUrl }: { feature: LandingFeatureItem; reversed: boolean; imageUrl: string }) {
  return (
    <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}>
      <div className="flex-1 max-w-lg">
        <div
          className="inline-block px-4 py-1.5 rounded-full mb-6"
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            backgroundColor: "rgba(0, 25, 218, 0.07)",
            color: "#0019DA",
          }}
        >
          {feature.badge}
        </div>
        <h2
          className="text-gray-900 mb-5"
          style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          {feature.title}
        </h2>
        <p className="text-gray-500" style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.8 }}>
          {feature.description}
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <PhoneMockup feature={feature} imageUrl={imageUrl} />
      </div>
    </div>
  )
}

export function LandingFeatures() {
  const { dictionary } = useLanguage()
  const t = dictionary.home.landingFeatures

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-20 lg:mb-28">
          <div
            className="inline-block px-5 py-2 rounded-full mb-6"
            style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.05em", backgroundColor: "rgba(0, 25, 218, 0.08)", color: "#0019DA" }}
          >
            {t.badge}
          </div>
          <h2
            className="text-gray-900 mb-5 whitespace-pre-line"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            {t.title}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto" style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.7 }}>
            {t.description}
          </p>
        </div>
        <div className="flex flex-col gap-28 lg:gap-36">
          {t.items.map((feature, i) => (
            <FeatureBlock key={feature.badge} feature={feature} reversed={i % 2 !== 0} imageUrl={featureImages[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
