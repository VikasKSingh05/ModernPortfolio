"use client"

import { ProgressProvider } from "@bprogress/next/app"
import { ThemeProvider } from "next-themes"

import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/base/ui/tooltip"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      disableTransitionOnChange
      enableColorScheme
      storageKey="theme"
      defaultTheme="system"
      attribute="class"
      scriptProps={{ suppressHydrationWarning: true }}
    >
      <ProgressProvider
        color="var(--foreground)"
        height="2px"
        delay={500}
        options={{ showSpinner: false }}
      >
        <TooltipProvider>{children}</TooltipProvider>
      </ProgressProvider>

      <Toaster position="top-center" />
    </ThemeProvider>
  )
}
