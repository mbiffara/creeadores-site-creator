"use client"

import { ImageWithFallback } from "./image-with-fallback"
import { Star, Award } from "lucide-react"

interface CreatorCardProps {
  name: string
  category: string
  followers: string
  image: string
  rating: number
  badge?: "bronce" | "plata" | "oro"
}

const badgeConfig = {
  bronce: {
    gradient: "linear-gradient(135deg, #92400E, #B45309)",
    shadow: "0 1px 4px rgba(146, 64, 14, 0.35)",
    label: "Bronce",
  },
  plata: {
    gradient: "linear-gradient(135deg, #6B7280, #9CA3AF)",
    shadow: "0 1px 4px rgba(107, 114, 128, 0.35)",
    label: "Plata",
  },
  oro: {
    gradient: "linear-gradient(135deg, #B45309, #F59E0B)",
    shadow: "0 1px 4px rgba(245, 158, 11, 0.35)",
    label: "Oro",
  },
}

export function CreatorCard({ name, category, followers, image, rating, badge = "bronce" }: CreatorCardProps) {
  const b = badgeConfig[badge]

  return (
    <div className="w-[200px] bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0">
      <div className="h-[220px] overflow-hidden relative">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full"
          style={{ background: b.gradient, boxShadow: b.shadow }}
        >
          <Award size={9} color="white" strokeWidth={2.5} />
          <span className="text-white" style={{ fontSize: "8px", fontWeight: 700 }}>{b.label}</span>
        </div>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between mb-0.5">
          <p className="text-[#0019DA] truncate flex-1" style={{ fontSize: "13px", fontWeight: 600 }}>{name}</p>
          <div className="flex items-center gap-0.5 ml-1.5">
            <Star size={11} fill="#FBBF24" color="#FBBF24" strokeWidth={1.5} />
            <span className="text-gray-700" style={{ fontSize: "11px", fontWeight: 600 }}>{rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-gray-500 truncate" style={{ fontSize: "11px", fontWeight: 400 }}>
          {category} · {followers} seguidores
        </p>
      </div>
    </div>
  )
}
