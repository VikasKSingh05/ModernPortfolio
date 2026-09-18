import Link from "next/link"

import { SOURCE_CODE_GITHUB_URL } from "@/config/site"
import { GitHubIcon } from "@/components/icons"

export function NavItemGitHub() {
  return (
    <Link
      className="flex items-center p-1.5 text-muted-foreground transition-[color] hover:text-foreground"
      href={SOURCE_CODE_GITHUB_URL}
      target="_blank"
      rel="noopener"
      aria-label="Source code on GitHub"
    >
      <GitHubIcon className="size-4.5" />
    </Link>
  )
}
