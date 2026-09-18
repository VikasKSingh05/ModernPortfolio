import { urlToName } from "@/utils/url"
import { describe, expect, it } from "vitest"

describe("urlToName", () => {
  it("strips https:// scheme", () => {
    expect(urlToName("https://chanhdai.com")).toBe("chanhdai.com")
  })

  it("strips http:// scheme and keeps path", () => {
    expect(urlToName("http://x.com/y")).toBe("x.com/y")
  })

  it("strips protocol-relative //", () => {
    expect(urlToName("//cdn.x.com")).toBe("cdn.x.com")
  })

  it("leaves a bare host unchanged", () => {
    expect(urlToName("chanhdai.com")).toBe("chanhdai.com")
  })
})
