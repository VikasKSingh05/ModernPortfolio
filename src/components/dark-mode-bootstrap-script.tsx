"use client"

import { useSyncExternalStore } from "react"

const subscribe = () => () => {}

// Emits the inline script only on the server render and the matching hydration
// render, then renders null afterward (same pattern as MUI's
// InitColorSchemeScript). React never creates the script during a client-only
// render, so React 19's dev-only "script tag" warning never fires, while the
// script still runs before paint from the server-rendered HTML.
export function DarkModeBootstrapScript({ html }: { html: string }) {
  const shouldRender = useSyncExternalStore(
    subscribe,
    () => false,
    () => true
  )

  if (!shouldRender) {
    return null
  }

  return <script dangerouslySetInnerHTML={{ __html: html }} />
}
