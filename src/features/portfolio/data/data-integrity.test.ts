import { decodeEmail } from "@/utils/string"
import { describe, expect, it } from "vitest"

import { SOCIAL, SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

describe("user profile data", () => {
  it("emailB64 decodes to a valid email address", () => {
    const email = decodeEmail(USER.emailB64)
    expect(email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)
  })

  it("exposes non-empty identity fields", () => {
    expect(USER.displayName.trim()).not.toBe("")
    expect(USER.username.trim()).not.toBe("")
    expect(USER.bio.trim()).not.toBe("")
  })
})

describe("social links", () => {
  it("every profile points to an https URL with a handle", () => {
    for (const link of SOCIAL_LINKS) {
      expect(link.href).toMatch(/^https:\/\//)
      expect(link.title.trim()).not.toBe("")
      expect(link.handle.trim()).not.toBe("")
      expect(typeof link.sameAs).toBe("boolean")
    }
  })

  it("SOCIAL_LINKS mirrors the SOCIAL registry", () => {
    expect(SOCIAL_LINKS.map((link) => link.name)).toEqual(Object.keys(SOCIAL))
  })
})
