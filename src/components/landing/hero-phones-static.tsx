"use client"

interface HeroPhonesStaticProps {
  scrollY: number
  onPlayClick: () => void
}

export function HeroPhonesStatic({ scrollY, onPlayClick }: HeroPhonesStaticProps) {
  return (
    <div className="flex w-full lg:w-1/2 items-center justify-center -space-x-6 sm:-space-x-8 lg:-space-x-10 relative" style={{ perspective: "1200px" }}>
      {/* Background glow */}
      <div className="absolute pointer-events-none -z-10" style={{ width: "900px", height: "900px", borderRadius: "50%", background: "radial-gradient(circle, rgba(237, 75, 0, 0.12) 0%, rgba(0, 25, 218, 0.08) 40%, rgba(0, 25, 218, 0.03) 60%, transparent 75%)", filter: "blur(80px)" }} />
      {/* Left phone - hidden on mobile */}
      <div className="relative flex-shrink-0 overflow-hidden z-10 hidden sm:block transition-transform duration-100" style={{ width: "clamp(120px, 18vw, 170px)", height: "clamp(250px, 38vw, 360px)", border: "2px solid #2c2c2e", borderRadius: "clamp(22px, 3vw, 32px)", background: "#2c2c2e", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.5), 0 20px 50px rgba(0,0,0,0.3), 0 8px 20px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)", transform: `rotateY(12deg) translateY(${scrollY * -0.15}px)` }}>
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-20" style={{ width: "clamp(30px, 4vw, 42px)", height: "clamp(8px, 1.2vw, 12px)", backgroundColor: "#2c2c2e", borderRadius: "10px" }} />
        <div className="absolute inset-[3px] overflow-hidden" style={{ borderRadius: "clamp(19px, 2.7vw, 29px)" }}>
          <video src="/videos/hero-reel-3.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} />
        </div>
      </div>
      {/* Center phone */}
      <div
        className="relative flex-shrink-0 overflow-hidden z-20 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        style={{ width: "clamp(180px, 24vw, 220px)", height: "clamp(390px, 52vw, 484px)", border: "2px solid #2c2c2e", borderRadius: "clamp(28px, 4vw, 38px)", background: "#2c2c2e", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.5), 0 30px 80px rgba(0,0,0,0.35), 0 12px 30px rgba(0,0,0,0.2), 0 4px 10px rgba(0,0,0,0.12)", transform: "translateY(0)" }}
        onClick={onPlayClick}
      >
        <div className="absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2 z-20" style={{ width: "clamp(40px, 5vw, 56px)", height: "clamp(11px, 1.5vw, 16px)", backgroundColor: "#2c2c2e", borderRadius: "12px" }} />
        <div className="absolute inset-[3px] overflow-hidden" style={{ borderRadius: "clamp(25px, 3.7vw, 37px)", animation: "subtleGlow 4s ease-in-out infinite" }}>
          <video src="/videos/hero-reel-2.mp4" muted playsInline className="w-full h-full object-cover" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.25)", animation: "playRipple 2.5s ease-out 0s infinite" }} />
              <div className="absolute inset-0 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.2)", animation: "playRipple 2.5s ease-out 0.8s infinite" }} />
              <div className="w-full h-full rounded-full flex items-center justify-center backdrop-blur-md" style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", boxShadow: "0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(255,255,255,0.9)"><path d="M8 5.14v13.72a1 1 0 001.5.86l11.25-6.86a1 1 0 000-1.72L9.5 4.28a1 1 0 00-1.5.86z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right phone - hidden on mobile */}
      <div className="relative flex-shrink-0 overflow-hidden z-10 hidden sm:block transition-transform duration-100" style={{ width: "clamp(120px, 18vw, 170px)", height: "clamp(250px, 38vw, 360px)", border: "2px solid #2c2c2e", borderRadius: "clamp(22px, 3vw, 32px)", background: "#2c2c2e", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.5), 0 20px 50px rgba(0,0,0,0.3), 0 8px 20px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)", transform: `rotateY(-12deg) translateY(${scrollY * -0.15}px)` }}>
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-20" style={{ width: "clamp(30px, 4vw, 42px)", height: "clamp(8px, 1.2vw, 12px)", backgroundColor: "#2c2c2e", borderRadius: "10px" }} />
        <div className="absolute inset-[3px] overflow-hidden" style={{ borderRadius: "clamp(19px, 2.7vw, 29px)" }}>
          <video src="/videos/hero-reel.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} />
        </div>
      </div>
    </div>
  )
}
