import { decodeEmail } from "@/utils/string"
import { describe, expect, it } from "vitest"

describe("decodeEmail", () => {
  it("decodes a base64-encoded string", () => {
    expect(decodeEmail("aGVsbG8=")).toBe("hello")
  })

  it("decodes an empty string", () => {
    expect(decodeEmail("")).toBe("")
  })
})
