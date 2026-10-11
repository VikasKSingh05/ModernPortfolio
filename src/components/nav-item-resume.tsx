import { DownloadIcon, FileTextIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"

export function NavItemResume() {
  return (
    <>
      <Button
        className="h-8 gap-1.5 px-2 text-muted-foreground"
        variant="ghost"
        nativeButton={false}
        render={<a href="/resume" aria-label="View resume" />}
      >
        <FileTextIcon aria-hidden />
        <span className="max-sm:hidden">Resume</span>
      </Button>

      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              className="text-muted-foreground"
              variant="ghost"
              size="icon-sm"
              nativeButton={false}
              aria-label="Download resume (.docx)"
              render={<a href="/resume/resume.docx" download />}
            >
              <DownloadIcon aria-hidden />
            </Button>
          }
        />
        <TooltipContent>Download .docx</TooltipContent>
      </Tooltip>
    </>
  )
}
