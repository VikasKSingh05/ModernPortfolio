"use client"

import { useId } from "react"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

const VIEWBOX_WIDTH = 1024
const VIEWBOX_HEIGHT = 320

const BLOCKS = [
  // V
  [0, 0, 64, 64],
  [64, 64, 64, 64],
  [128, 128, 64, 64],
  [192, 64, 64, 64],
  [256, 0, 64, 64],
  // K
  [384, 0, 64, 320],
  [448, 0, 128, 64],
  [576, 64, 64, 64],
  [512, 128, 64, 64],
  [576, 192, 64, 64],
  [448, 256, 128, 64],
  // S
  [768, 0, 256, 64],
  [704, 64, 64, 64],
  [704, 128, 256, 64],
  [960, 192, 64, 64],
  [768, 256, 256, 64],
] as const

export function SiteFooterLogotype() {
  const gradientId = useId()
  const shouldReduceMotion = useReducedMotion()

  const gradientX1Raw = useMotionValue(0.5)
  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, VIEWBOX_WIDTH]),
    {
      stiffness: 150,
      damping: 25,
    }
  )

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return

    const containerRect = event.currentTarget.getBoundingClientRect()
    gradientX1Raw.set(
      (event.clientX - containerRect.left) / containerRect.width
    )
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    gradientX1Raw.set(0.5)
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full justify-center py-4">
          <svg
            className="h-36 w-auto"
            viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <g fill={`url(#${gradientId})`}>
              {BLOCKS.map(([x, y, width, height], index) => (
                <rect key={index} x={x} y={y} width={width} height={height} />
              ))}
            </g>

            <g className="stroke-foreground/10" strokeWidth="2">
              {BLOCKS.map(([x, y, width, height], index) => (
                <rect
                  key={index}
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill="none"
                />
              ))}
            </g>

            <defs>
              <motion.linearGradient
                id={gradientId}
                x1={gradientX1}
                y1="1"
                x2={VIEWBOX_WIDTH / 2}
                y2={VIEWBOX_HEIGHT}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
