"use client"

import { Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { TikTokIcon } from "@/components/ui/tiktok-icon"
import { useLanguage } from "@/components/language-provider"
import { appLink } from "@/lib/links"

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
    <footer className="bg-[#0019DA] text-white pt-8 pb-6 sm:pt-10 sm:pb-8">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Main footer content */}
        <div className="flex flex-col items-center gap-5 mb-6 text-center">
          {/* Logo + description */}
          <div className="max-w-[540px]">
            <div className="mb-4 flex justify-center">
              <Logo href="/" variant="white" className="h-5" />
            </div>
            <p className="text-white/60 text-[11px] sm:text-[12px]" style={{ lineHeight: 1.7 }}>
              {t.description}
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {dictionary.home.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href.startsWith("#") ? link.href : appLink(link.href)}
                className="group relative text-white/60 hover:text-white transition-colors pb-1 text-[12px] sm:text-[13px]"
                style={{ fontWeight: 500 }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-1/2 h-[2px] w-0 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"
                  style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))" }}
                />
              </a>
            ))}
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
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid transparent" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)" }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "transparent" }}
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
          <div className="flex flex-wrap items-center gap-6">
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
