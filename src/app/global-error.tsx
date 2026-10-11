"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          fontFamily: "system-ui, sans-serif",
          background: "#09090b",
          color: "#fafafa",
        }}
      >
        <div style={{ textAlign: "center", padding: "24px" }}>
          <h1 style={{ fontSize: "32px", margin: 0 }}>Something went wrong</h1>
          <p style={{ color: "#a1a1aa" }}>
            {error.message || "An unexpected error occurred."}
          </p>
          <button
            onClick={reset}
            style={{
              marginTop: "16px",
              padding: "8px 16px",
              borderRadius: "8px",
              border: "1px solid #3f3f46",
              background: "transparent",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
