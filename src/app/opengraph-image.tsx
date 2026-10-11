import { ImageResponse } from "next/og"

import { SITE_INFO } from "@/config/site"
import { USER } from "@/features/portfolio/data/user"

export const alt = `${USER.displayName} — ${USER.jobTitle}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  const host = new URL(SITE_INFO.url).host

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "80px",
        background: "#09090b",
        color: "#fafafa",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "88px",
          height: "88px",
          borderRadius: "22px",
          background: "#ffffff",
          color: "#09090b",
          fontSize: "52px",
          fontWeight: 700,
        }}
      >
        V
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div
          style={{
            fontSize: "76px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          {USER.displayName}
        </div>
        <div style={{ fontSize: "34px", color: "#a1a1aa" }}>
          {USER.jobTitle}
        </div>
      </div>

      <div style={{ display: "flex", fontSize: "28px", color: "#a1a1aa" }}>
        {host}
      </div>
    </div>,
    { ...size }
  )
}
