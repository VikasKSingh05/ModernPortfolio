import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /**
   * Stamped once per build and inlined. Reading the clock at render time would
   * instead report whenever a page was regenerated, which drifts on fully
   * static routes.
   */
  env: {
    BUILD_TIMESTAMP: new Date().toISOString(),
  },
  reactStrictMode: true,
  typedRoutes: true,
  allowedDevOrigins: ["ncdai.localhost", "ncdai.local"],
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        port: "",
      },
    ],
    qualities: [75, 100],
  },
  compiler:
    process.env.NODE_ENV === "production"
      ? {
          removeConsole: {
            exclude: ["error"],
          },
        }
      : undefined,
}

export default nextConfig
