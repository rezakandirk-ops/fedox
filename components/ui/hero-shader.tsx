"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"

interface ShaderBackgroundProps {
  children: React.ReactNode
  className?: string
  variant?: "hero" | "section"
}

const MAX_PIXEL_COUNT = 1920 * 1080

export function ShaderBackground({ children, className = "", variant = "hero" }: ShaderBackgroundProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setPrefersReducedMotion(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    const el = wrapperRef.current
    if (!el || typeof IntersectionObserver === "undefined") return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "200px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const shouldAnimate = isVisible && !prefersReducedMotion
  const primarySpeed = shouldAnimate ? 0.4 : 0
  const overlaySpeed = shouldAnimate ? 0.3 : 0

  const colorsPrimary =
    variant === "hero"
      ? ["#0B3B6F", "#1E6BB8", "#3FA9F5", "#0B3B6F", "#083661"]
      : ["#E8F2FB", "#3FA9F5", "#1E6BB8", "#E8F2FB"]

  const colorsOverlay =
    variant === "hero"
      ? ["#0B3B6F", "#3FA9F5", "#FFFFFF", "#1E6BB8"]
      : ["#FFFFFF", "#3FA9F5", "#E8F2FB", "#FFFFFF"]

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full overflow-hidden bg-[color:var(--brand-deep)] ${className}`}
    >
      <svg className="absolute inset-0 h-0 w-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.05
                      0 0 1 0 0.1
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={colorsPrimary}
        speed={primarySpeed}
        distortion={1}
        swirl={0.75}
        maxPixelCount={MAX_PIXEL_COUNT}
      />
      <MeshGradient
        className="absolute inset-0 h-full w-full opacity-60 mix-blend-screen"
        colors={colorsOverlay}
        speed={overlaySpeed}
        distortion={1.15}
        swirl={0.45}
        maxPixelCount={MAX_PIXEL_COUNT}
      />

      {variant === "hero" && <HeroDrops />}

      {children}
    </div>
  )
}

function HeroDrops() {
  const drops = [
    { left: "8%", delay: "0s", size: 14, duration: "9s" },
    { left: "18%", delay: "2s", size: 8, duration: "11s" },
    { left: "32%", delay: "4s", size: 12, duration: "10s" },
    { left: "44%", delay: "1.5s", size: 6, duration: "12s" },
    { left: "58%", delay: "3.5s", size: 10, duration: "9.5s" },
    { left: "70%", delay: "0.8s", size: 14, duration: "11.5s" },
    { left: "82%", delay: "2.8s", size: 7, duration: "10.5s" },
    { left: "92%", delay: "5s", size: 9, duration: "9s" },
  ]
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ filter: "url(#gooey-filter)" }}
    >
      {drops.map((d, i) => (
        <span
          key={i}
          className="hero-drop absolute bottom-0 rounded-full bg-white/40"
          style={{
            left: d.left,
            width: d.size,
            height: d.size,
            animationDelay: d.delay,
            animationDuration: d.duration,
          }}
        />
      ))}
    </div>
  )
}
