"use client"

import { Heart, MessageCircle, Send, Bookmark, Music, Play } from "lucide-react"

const ITEMS = [
  {
    videoSrc: "/videos/hero-reel-3.mp4",
    platform: "ig" as const,
    user: "sofi.creates",
    verified: true,
    likes: "12.4K",
    comments: "248",
    category: "💄 Belleza",
    tag: "📢 Influencer",
    tagColor: "#0019DA",
    caption: "Nuevo unboxing ✨ #skincare #collab",
  },
  {
    videoSrc: "/videos/hero-reel-2.mp4",
    platform: "tiktok" as const,
    user: "juanperez_ugc",
    verified: false,
    likes: "8.2K",
    comments: "1.2K",
    category: "📱 Tecnología",
    tag: "🎬 UGC",
    tagColor: "#16A34A",
    caption: "Mi primer brief de marca 🎬 #ugccreator",
  },
  {
    videoSrc: "/videos/hero-reel.mp4",
    platform: "ig" as const,
    user: "mkt.lucia",
    verified: true,
    likes: "5.7K",
    comments: "412",
    category: "💪 Fitness",
    tag: "⭐ UGC + Influencer",
    tagColor: "#DB2777",
    caption: "Review completa 💪 #fitness #ad",
  },
  {
    videoSrc: "/videos/phone-demo-1.mp4",
    platform: "tiktok" as const,
    user: "creeadores.ok",
    verified: true,
    likes: "22.1K",
    comments: "3.4K",
    category: "📚 Educación",
    tag: "⚡ Flex",
    tagColor: "#EA580C",
    caption: "Así monetizo mi contenido 💰 #creador",
  },
  {
    videoSrc: "/videos/phone-demo-2.mp4",
    platform: "ig" as const,
    user: "dani.lifestyle",
    verified: false,
    likes: "3.9K",
    comments: "187",
    category: "👗 Moda",
    tag: "📢 Influencer",
    tagColor: "#0019DA",
    caption: "Haul de productos 🛍️ #beauty #unboxing",
  },
]

export function HeroCarousel() {
  const phones = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div className="w-full overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, white, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, white, transparent)" }} />

      <div className="flex gap-4 sm:gap-5 animate-hero-marquee" style={{ width: "max-content" }}>
        {phones.map((item, i) => (
          <div key={i} className="flex-shrink-0">
            <PhoneMockup {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}

type PhoneProps = typeof ITEMS[number]

function PhoneMockup({ videoSrc, platform, user, verified, likes, comments, category, tag, tagColor, caption }: PhoneProps) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: "clamp(130px, 16vw, 180px)",
        height: "clamp(280px, 35vw, 390px)",
        border: "2px solid #2c2c2e",
        borderRadius: "clamp(18px, 3vw, 30px)",
        background: "#2c2c2e",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4), 0 12px 32px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      {/* Notch */}
      <div
        className="absolute top-1.5 left-1/2 -translate-x-1/2 z-20"
        style={{
          width: "clamp(20px, 3vw, 40px)",
          height: "clamp(5px, 1vw, 10px)",
          backgroundColor: "#2c2c2e",
          borderRadius: "10px",
        }}
      />

      {/* Screen */}
      <div
        className="absolute inset-[3px] overflow-hidden"
        style={{ borderRadius: "clamp(15px, 2.7vw, 28px)" }}
      >
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Bottom gradient */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 30%, transparent 50%)" }} />

        {/* Campaign type badge — top left */}
        <div className="absolute top-6 left-1.5 z-10">
          <span
            className="px-1.5 py-0.5 rounded-md backdrop-blur-md"
            style={{ fontSize: "8px", fontWeight: 700, color: "white", backgroundColor: `${tagColor}99`, letterSpacing: "0.03em", border: `0.5px solid ${tagColor}66` }}
          >
            {tag}
          </span>
        </div>

        {/* Category badge — top right */}
        <div className="absolute top-6 right-1.5 z-10">
          <span
            className="px-1.5 py-0.5 rounded-md backdrop-blur-md"
            style={{ fontSize: "7px", fontWeight: 600, color: "white", backgroundColor: "rgba(255,255,255,0.15)", border: "0.5px solid rgba(255,255,255,0.25)" }}
          >
            {category}
          </span>
        </div>

        {/* Right side actions */}
        <div className="absolute right-1.5 bottom-20 flex flex-col items-center gap-2.5 z-10">
          {/* Profile pic */}
          <div className="relative">
            <div className="w-7 h-7 rounded-full border border-white/60" style={{ background: "linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)" }}>
              <div className="absolute inset-[2px] rounded-full bg-gray-300" />
            </div>
          </div>
          <ActionButton icon={<Heart size={16} fill="white" color="white" />} label={likes} />
          <ActionButton icon={<MessageCircle size={16} color="white" />} label={comments} />
          <ActionButton icon={<Send size={14} color="white" />} />
          {platform === "ig" && <ActionButton icon={<Bookmark size={14} color="white" />} />}
          {platform === "tiktok" && (
            <div className="w-5 h-5 rounded-md border border-white/40 overflow-hidden" style={{ background: "linear-gradient(135deg, #25F4EE, #FE2C55)" }}>
              <Music size={10} color="white" className="m-auto mt-[3px]" />
            </div>
          )}
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-2.5 left-2 right-7 z-10">
          {/* User info */}
          <div className="flex items-center gap-1 mb-1">
            <span style={{ fontSize: "9px", color: "white", fontWeight: 700 }}>{user}</span>
            {verified && (
              <svg width="9" height="9" viewBox="0 0 24 24" fill="#3B82F6">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            )}
          </div>

          {/* Caption */}
          <p style={{ fontSize: "8px", color: "rgba(255,255,255,0.9)", lineHeight: 1.4 }}>
            {caption}
          </p>

        </div>
      </div>
    </div>
  )
}

function ActionButton({ icon, label }: { icon: React.ReactNode; label?: string }) {
  return (
    <div className="flex flex-col items-center gap-[1px]">
      {icon}
      {label && <span style={{ fontSize: "8px", color: "white", fontWeight: 600 }}>{label}</span>}
    </div>
  )
}
