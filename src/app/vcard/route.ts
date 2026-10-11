import { NextResponse } from "next/server"
import { decodeEmail } from "@/utils/string"
import VCard from "vcard-creator"

import { USER } from "@/features/portfolio/data/user"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export async function GET() {
  const card = new VCard()

  card
    .addName(USER.lastName, USER.firstName)
    .addAddress(USER.address)
    .addEmail(decodeEmail(USER.emailB64))

  if (USER.website) {
    card.addURL(USER.website)
  }

  if (USER.jobs.length > 0) {
    const company = USER.jobs[0]
    card.addCompany(company.company).addJobtitle(company.title)
  }

  return new NextResponse(card.toString(), {
    status: 200,
    headers: {
      "Content-Type": "text/x-vcard",
      "Content-Disposition": `attachment; filename=${USER.username}-vcard.vcf`,
    },
  })
}
