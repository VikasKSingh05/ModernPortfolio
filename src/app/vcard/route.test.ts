import { describe, expect, it } from "vitest"

import { GET } from "./route"

describe("GET /vcard", () => {
  it("returns a downloadable vCard", async () => {
    const res = await GET()

    expect(res.status).toBe(200)
    expect(res.headers.get("content-type")).toMatch(/^text\/x-vcard/)
    expect(res.headers.get("content-disposition")).toContain("attachment")

    const body = await res.text()
    expect(body).toContain("BEGIN:VCARD")
    expect(body).toContain("Vikas")
    expect(body).toContain("END:VCARD")
  })
})
