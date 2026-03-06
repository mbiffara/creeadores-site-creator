"use client"

import { Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { TikTokIcon } from "@/components/ui/tiktok-icon"
import { useLanguage } from "@/components/language-provider"

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: TikTokIcon, href: "#", label: "TikTok" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

const legalPaths = ["/privacy", "/terms", "/cookies"]

export function LandingFooter() {
  const { dictionary } = useLanguage()
  const t = dictionary.home.landingFooter

  return (
    <footer className="bg-[#0019DA] text-white pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Main footer content */}
        <div className="flex flex-col items-center gap-10 mb-12 text-center">
          {/* Logo + description */}
          <div className="max-w-[420px]">
            <div className="mb-4 flex justify-center">
              <Logo href="/" variant="white" className="h-5" />
            </div>
            <p className="text-white/60" style={{ fontSize: "14px", lineHeight: 1.7 }}>
              {t.description}
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-white/20"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-6" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-6">
            {t.legal.map((item, i) => (
              <Link
                key={item}
                href={legalPaths[i] || "#"}
                className="text-white/40 hover:text-white/70 transition-colors"
                style={{ fontSize: "12px", fontWeight: 400 }}
              >
                {item}
              </Link>
            ))}
          </div>
          <p className="text-white/40" style={{ fontSize: "12px", fontWeight: 400 }}>
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
