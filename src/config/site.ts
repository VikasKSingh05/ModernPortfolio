import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: "Vikas Portfolio",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://www.vikas-singh.me",
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const GITHUB_USERNAME = SOCIAL.github.handle
