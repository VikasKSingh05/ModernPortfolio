"use client"

import React, { useCallback, useState } from "react"
import { useRouter } from "@bprogress/next/app"
import {
  BoxIcon,
  BriefcaseBusinessIcon,
  CircleCheckBigIcon,
  CornerDownLeftIcon,
  CrownIcon,
  DownloadIcon,
  GraduationCapIcon,
  LayersIcon,
  MonitorIcon,
  MoonStarIcon,
  SunMediumIcon,
  TextInitialIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { useHotkeys } from "react-hotkeys-hook"

import { SOURCE_CODE_GITHUB_URL } from "@/config/site"
import { useMutationObserver } from "@/hooks/use-mutation-observer"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { SOCIAL_ICONS } from "@/features/portfolio/components/social-link-icons"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"

import { GitHubIcon, SearchIcon } from "./icons"
import { Button } from "./ui/button"
import { Kbd, KbdGroup } from "./ui/kbd"

type CommandKind = "command" | "page" | "link"

type CommandLinkItem = {
  title: string
  href: string
  kind: CommandKind
  icon?: React.ReactElement
  shortcut?: string
  keywords?: string[]
  openInNewTab?: boolean
}

const MENU_LINKS: CommandLinkItem[] = [
  {
    title: "Home",
    href: "/",
    kind: "page",
    shortcut: "GH",
  },
]

const PORTFOLIO_LINKS: CommandLinkItem[] = [
  {
    title: "Hello",
    href: "/#hello",
    kind: "page",
    icon: <TextInitialIcon />,
  },
  {
    title: "Stack",
    href: "/#stack",
    kind: "page",
    icon: <LayersIcon />,
  },
  {
    title: "Experience",
    href: "/#experience",
    kind: "page",
    icon: <BriefcaseBusinessIcon />,
  },
  {
    title: "Education",
    href: "/#education",
    kind: "page",
    icon: <GraduationCapIcon />,
  },
  {
    title: "Projects",
    href: "/#projects",
    kind: "page",
    icon: <BoxIcon />,
  },
  {
    title: "Awards",
    href: "/#awards",
    kind: "page",
    icon: <CrownIcon />,
  },
  {
    title: "Certifications",
    href: "/#certs",
    kind: "page",
    icon: <CircleCheckBigIcon />,
  },
]

const SOCIAL_LINK_ITEMS: CommandLinkItem[] = SOCIAL_LINKS.map((item) => ({
  title: item.title,
  href: item.href,
  kind: "link",
  icon: SOCIAL_ICONS[item.name],
  openInNewTab: true,
}))

const OTHER_LINK_ITEMS: CommandLinkItem[] = [
  {
    title: "Download vCard",
    href: "/vcard",
    kind: "command",
    icon: <DownloadIcon />,
  },
  {
    title: "Source code",
    href: SOURCE_CODE_GITHUB_URL,
    kind: "link",
    icon: <GitHubIcon />,
    openInNewTab: true,
  },
]

function InitialsMark(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden {...props}>
      <rect width="40" height="40" rx="8" fill="currentColor" opacity="0.1" />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fontSize="16"
        fontWeight="600"
        fill="currentColor"
      >
        VK
      </text>
    </svg>
  )
}

export function CommandMenu({
  enabledHotkeys = false,
}: {
  enabledHotkeys?: boolean
}) {
  const router = useRouter()

  const { setTheme } = useTheme()

  const [open, setOpen] = useState(false)

  const [selectedCommandKind, setSelectedCommandKind] =
    useState<CommandKind | null>(null)

  useHotkeys(
    "mod+k, slash",
    (e) => {
      e.preventDefault()
      setOpen((prev) => !prev)
    },
    { enabled: enabledHotkeys }
  )

  const handleOpenLink = useCallback(
    (href: string, openInNewTab = false) => {
      setOpen(false)

      if (openInNewTab) {
        window.open(href, "_blank", "noopener")
      } else {
        router.push(href)
      }
    },
    [router]
  )

  const createThemeHandler = useCallback(
    (theme: "light" | "dark" | "system") => () => {
      setOpen(false)
      setTheme(theme)
    },
    [setTheme]
  )

  const handleLinkHighlight = useCallback((link: CommandLinkItem) => {
    setSelectedCommandKind(link.kind)
  }, [])

  const handleCommandHighlight = useCallback(() => {
    setSelectedCommandKind("command")
  }, [])

  return (
    <>
      <CommandMenuTrigger
        onClick={() => {
          setOpen(true)
        }}
      />

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandMenuInput />

        <div className="rounded-xl bg-background ring-1 ring-border">
          <CommandList className="min-h-80 scroll-fade">
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandLinkGroup
              heading="Menu"
              links={MENU_LINKS}
              onLinkHighlight={handleLinkHighlight}
              onLinkSelect={handleOpenLink}
            />

            <CommandLinkGroup
              heading="Portfolio"
              links={PORTFOLIO_LINKS}
              onLinkHighlight={handleLinkHighlight}
              onLinkSelect={handleOpenLink}
            />

            <CommandLinkGroup
              heading="Social Links"
              links={SOCIAL_LINK_ITEMS}
              onLinkHighlight={handleLinkHighlight}
              onLinkSelect={handleOpenLink}
            />

            <CommandGroup heading="Theme">
              <CommandMenuItem
                keywords={["theme"]}
                onHighlight={handleCommandHighlight}
                onSelect={createThemeHandler("light")}
              >
                <SunMediumIcon />
                Light
              </CommandMenuItem>
              <CommandMenuItem
                keywords={["theme"]}
                onHighlight={handleCommandHighlight}
                onSelect={createThemeHandler("dark")}
              >
                <MoonStarIcon />
                Dark
              </CommandMenuItem>
              <CommandMenuItem
                keywords={["theme"]}
                onHighlight={handleCommandHighlight}
                onSelect={createThemeHandler("system")}
              >
                <MonitorIcon />
                System
              </CommandMenuItem>
            </CommandGroup>

            <CommandLinkGroup
              heading="Other"
              links={OTHER_LINK_ITEMS}
              onLinkHighlight={handleLinkHighlight}
              onLinkSelect={handleOpenLink}
            />
          </CommandList>
        </div>

        <CommandMenuFooter selectedCommandKind={selectedCommandKind} />
      </CommandDialog>
    </>
  )
}

export default CommandMenu

function CommandMenuTrigger({ ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="command-menu-trigger"
      className="gap-1.5 border-none px-1.5 text-muted-foreground will-change-[scale] select-none"
      variant="ghost"
      size="sm"
      {...props}
    >
      <SearchIcon />

      <span className="font-sans text-sm/4 font-medium sm:hidden">Search…</span>

      <KbdGroup className="hidden gap-0.75 sm:in-[.os-macos_&]:flex">
        <Kbd className="w-5 min-w-auto">⌘</Kbd>
        <Kbd className="w-5 min-w-auto">K</Kbd>
      </KbdGroup>

      <KbdGroup className="hidden gap-0.75 sm:not-[.os-macos_&]:flex">
        <Kbd>Ctrl</Kbd>
        <Kbd className="w-5 min-w-auto">K</Kbd>
      </KbdGroup>
    </Button>
  )
}

function CommandMenuInput() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <CommandInput
      placeholder="Type a command or search…"
      value={searchValue}
      onValueChange={setSearchValue}
    />
  )
}

function CommandMenuItem({
  children,
  onHighlight,
  ...props
}: React.ComponentProps<typeof CommandItem> & {
  onHighlight?: () => void
  "data-selected"?: string
  "aria-selected"?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  useMutationObserver(ref, (mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "aria-selected" &&
        ref.current?.getAttribute("aria-selected") === "true"
      ) {
        onHighlight?.()
      }
    })
  })

  return (
    <CommandItem ref={ref} {...props}>
      {children}
    </CommandItem>
  )
}

function CommandLinkGroup({
  heading,
  links,
  fallbackIcon,
  onLinkHighlight,
  onLinkSelect,
}: {
  heading: string
  links: CommandLinkItem[]
  fallbackIcon?: React.ReactElement
  onLinkHighlight: (link: CommandLinkItem) => void
  onLinkSelect: (href: string, openInNewTab?: boolean) => void
}) {
  return (
    <CommandGroup heading={heading}>
      {links.map((link) => {
        const icon = link?.icon ?? fallbackIcon ?? <React.Fragment />

        return (
          <CommandMenuItem
            key={link.href}
            keywords={link.keywords}
            onHighlight={() => onLinkHighlight(link)}
            onSelect={() => onLinkSelect(link.href, link.openInNewTab)}
          >
            {icon}

            <p className="line-clamp-1">{link.title}</p>

            {link.shortcut && (
              <CommandShortcut className="font-mono tracking-[0.2em] max-sm:hidden">
                {link.shortcut}
              </CommandShortcut>
            )}
          </CommandMenuItem>
        )
      })}
    </CommandGroup>
  )
}

const ENTER_ACTION_LABELS: Record<CommandKind, string> = {
  command: "Run command",
  page: "Go to page",
  link: "Open link",
}

function CommandMenuFooter({
  selectedCommandKind,
}: {
  selectedCommandKind: CommandKind | null
}) {
  return (
    <>
      <div className="flex h-10" />

      <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between gap-2 rounded-b-2xl px-4 text-xs font-medium">
        <InitialsMark className="size-6 text-muted-foreground" />

        <div className="flex items-center gap-2 max-sm:hidden">
          <span>{ENTER_ACTION_LABELS[selectedCommandKind ?? "page"]}</span>
          <Kbd>
            <CornerDownLeftIcon />
          </Kbd>
        </div>
      </div>
    </>
  )
}
