"use client"

import type React from "react"
import { MeshGradient } from "@paper-design/shaders-react"

interface ShaderBackgroundProps {
  children: React.ReactNode
  className?: string
  variant?: "hero" | "section"
}

export function ShaderBackground({ children, className = "", variant = "hero" }: ShaderBackgroundProps) {
  const colorsPrimary =
    variant === "hero"
      ? ["#0B3B6F", "#1E6BB8", "#3FA9F5", "#0B3B6F", "#083661"]
      : ["#E8F2FB", "#3FA9F5", "#1E6BB8", "#E8F2FB"]

  const colorsOverlay =
    variant === "hero"
      ? ["#0B3B6F", "#3FA9F5", "#FFFFFF", "#1E6BB8"]
      : ["#FFFFFF", "#3FA9F5", "#E8F2FB", "#FFFFFF"]

  return (
    <div className={`relative w-full overflow-hidden bg-[color:var(--brand-deep)] ${className}`}>
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
        speed={0.25}
        distortion={0.85}
        swirl={0.6}
      />
      <MeshGradient
        className="absolute inset-0 h-full w-full opacity-50 mix-blend-screen"
        colors={colorsOverlay}
        speed={0.18}
        distortion={1}
        swirl={0.3}
      />

      {children}
    </div>
  )
}
