import { readFile } from "node:fs/promises"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { GET } from "./route"

vi.mock("node:fs/promises", () => ({
  readFile: vi.fn(),
}))

describe("GET /resume", () => {
  beforeEach(() => {
    vi.mocked(readFile).mockReset()
  })

  it("serves the resume PDF inline", async () => {
    const pdf = Buffer.from("%PDF-1.4 mozjpeg test")
    vi.mocked(readFile).mockResolvedValue(pdf)

    const res = await GET()

    expect(res.status).toBe(200)
    expect(res.headers.get("content-type")).toBe("application/pdf")
    expect(res.headers.get("content-disposition")).toContain("inline")

    const bytes = Buffer.from(await res.arrayBuffer())
    expect(bytes.equals(pdf)).toBe(true)
  })

  it("returns 404 when the file is missing", async () => {
    vi.mocked(readFile).mockRejectedValue(new Error("ENOENT"))

    const res = await GET()

    expect(res.status).toBe(404)
    expect(await res.text()).toContain("not found")
  })
})
