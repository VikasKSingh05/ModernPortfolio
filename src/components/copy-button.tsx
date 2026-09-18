"use client"

import { CheckIcon, CopyIcon, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { Button } from "@/components/ui/button"

export type CopyButtonProps = React.ComponentProps<typeof Button> & {
  text: string | (() => string)
  idleIcon?: React.ReactNode
  successIcon?: React.ReactNode
  errorIcon?: React.ReactNode
  onCopySuccess?: (text: string) => void
}

export function CopyButton({
  text,
  className,
  idleIcon = <CopyIcon />,
  successIcon = <CheckIcon />,
  errorIcon = <XIcon />,
  onCopySuccess,
  ...props
}: CopyButtonProps) {
  const { state, copy } = useCopyToClipboard({
    onCopySuccess: (copiedText) => {
      onCopySuccess?.(copiedText)
    },
  })

  const icon =
    state === "done" ? successIcon : state === "error" ? errorIcon : idleIcon

  return (
    <Button
      aria-label="Copy to clipboard"
      onClick={() => copy(text)}
      className={cn("relative", className)}
      {...props}
    >
      {icon}
    </Button>
  )
}
