interface WaveDividerProps {
  color?: string
  flip?: boolean
  className?: string
  animated?: boolean
}

const STATIC_PATH =
  "M0,64 C240,112 480,16 720,48 C960,80 1200,128 1440,80 L1440,120 L0,120 Z"

export function WaveDivider({
  color = "#ffffff",
  flip = false,
  className = "",
  animated = true,
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
        <path d={STATIC_PATH} fill={color}>
          {animated && (
            <animate
              attributeName="d"
              dur="9s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              values="
                M0,64 C240,112 480,16 720,48 C960,80 1200,128 1440,80 L1440,120 L0,120 Z;
                M0,88 C240,40 480,120 720,80 C960,40 1200,24 1440,64 L1440,120 L0,120 Z;
                M0,64 C240,112 480,16 720,48 C960,80 1200,128 1440,80 L1440,120 L0,120 Z
              "
            />
          )}
        </path>
      </svg>
    </div>
  )
}
