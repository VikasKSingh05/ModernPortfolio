"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRightIcon, RotateCcwIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="grid min-h-svh place-items-center py-6">
      <section className="flex flex-col items-center gap-6">
        <h1 className="font-mono text-8xl font-medium">Oops</h1>
        <p className="text-muted-foreground">Something went wrong.</p>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={reset}>
            <RotateCcwIcon />
            Try again
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={
              <Link href="/">
                Go to Home
                <ArrowRightIcon />
              </Link>
            }
          />
        </div>
      </section>
    </div>
  )
}
