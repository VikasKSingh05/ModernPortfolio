import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export function createHeadingUrl(id: string) {
  if (typeof window === "undefined") {
    return `#${id}`
  }

  const url = new URL(window.location.href)

  url.hash = id

  return url.toString()
}
