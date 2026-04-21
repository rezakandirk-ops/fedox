interface WaveDividerProps {
  color?: string
  flip?: boolean
  className?: string
}

const STATIC_PATH =
  "M0,60 C240,20 480,20 720,60 C960,100 1200,100 1440,60 L1440,120 L0,120 Z"

export function WaveDivider({
  color = "#ffffff",
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`pointer-events-none w-full leading-none ${className}`}
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[60px] w-full sm:h-[90px] md:h-[120px]"
      >
        <path d={STATIC_PATH} fill={color} />
      </svg>
    </div>
  )
}
