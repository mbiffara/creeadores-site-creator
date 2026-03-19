"use client"

import { motion } from "motion/react"

const phones = [
  { videoSrc: "/videos/phone-demo-1.mp4" },
  { videoSrc: "/videos/phone-demo-2.mp4" },
  { videoSrc: "/videos/phone-demo-3.mp4" },
]

export function PhoneShowcase() {
  return (
    <div className="relative z-30 -mt-16 sm:-mt-24 lg:-mt-36">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Mockup frame - base layer */}
          <img
            src="/iphone-mockup.png"
            alt=""
            className="relative w-full pointer-events-none select-none"
            draggable={false}
          />

          {/* Left phone video */}
          <video
            src={phones[0].videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute object-cover"
            style={{
              top: "5.8%",
              left: "1.3%",
              width: "30.2%",
              height: "88.6%",
              borderRadius: "clamp(8px, 2vw, 28px)",
              zIndex: 10,
            }}
          />

          {/* Center phone video - highest z to cover side overlaps */}
          <video
            src={phones[1].videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute object-cover"
            style={{
              top: "1.5%",
              left: "22.2%",
              width: "55.6%",
              height: "97%",
              borderRadius: "clamp(14px, 3.5vw, 44px)",
              zIndex: 20,
            }}
          />

          {/* Right phone video */}
          <video
            src={phones[2].videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute object-cover"
            style={{
              top: "5.8%",
              right: "1.3%",
              width: "30.2%",
              height: "88.6%",
              borderRadius: "clamp(8px, 2vw, 28px)",
              zIndex: 10,
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
