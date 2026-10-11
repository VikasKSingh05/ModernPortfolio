import { readFile } from "node:fs/promises"
import path from "node:path"
import { NextResponse } from "next/server"

import { USER } from "@/features/portfolio/data/user"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

const RESUME_PATH = path.join(process.cwd(), "public", "resume", "resume.pdf")

export async function GET() {
  const resume = await readFile(RESUME_PATH).catch(() => null)

  if (!resume) {
    return new NextResponse("Resume not found", { status: 404 })
  }

  return new NextResponse(new Uint8Array(resume), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${USER.displayName.replace(/\s+/g, "-")}-Resume.pdf"`,
    },
  })
}
