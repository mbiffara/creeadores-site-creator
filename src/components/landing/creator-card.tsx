"use client"

import { ImageWithFallback } from "./image-with-fallback"
import { Star, Award, MapPin } from "lucide-react"

interface CreatorCardProps {
  name: string
  category: string
  followers: string
  image: string
  rating: number
  badge?: "bronce" | "plata" | "oro"
  price?: string
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

export function CreatorCard({ name, category, followers, image, rating, badge = "bronce", price }: CreatorCardProps) {
  const b = badgeConfig[badge]

  return (
    <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0">
      <div className="aspect-[4/5] overflow-hidden relative">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 flex items-center gap-1.5">
          <div
            className="flex items-center gap-1 px-1.5 py-0.5 rounded-full"
            style={{ background: b.gradient, boxShadow: b.shadow }}
          >
            <Award size={10} color="white" strokeWidth={2.5} />
            <span className="text-white" style={{ fontSize: "9px", fontWeight: 500 }}>{b.label}</span>
          </div>
          {price && (
            <div
              className="flex items-center gap-0.5 px-2 py-0.5 rounded-full"
              style={{ backgroundColor: "rgba(220, 252, 231, 0.95)", boxShadow: "0 1px 4px rgba(22, 101, 52, 0.25)" }}
            >
              <span style={{ color: "#166534", fontSize: "9px", fontWeight: 600 }}>+ AR${price}</span>
            </div>
          )}
        </div>
      </div>
      <div className="p-3">
        <div className="flex items-center gap-1 mb-0.5">
          <p className="text-[#0019DA] truncate" style={{ fontSize: "13px", fontWeight: 600 }}>{name}</p>
          <Star size={11} fill="#FBBF24" color="#FBBF24" strokeWidth={1.5} className="flex-shrink-0" />
          <span className="text-gray-700 flex-shrink-0" style={{ fontSize: "11px", fontWeight: 600 }}>{rating.toFixed(1)}</span>
        </div>
        <p className="text-gray-500 truncate flex items-center gap-0.5" style={{ fontSize: "11px", fontWeight: 400 }}>
          <MapPin size={10} className="flex-shrink-0" /> {category} · {followers}
        </p>
      </div>
    </div>
  )
}
