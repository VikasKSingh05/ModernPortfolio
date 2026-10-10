import { BlocksIcon, Gamepad2Icon } from "lucide-react"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "smartseva",
    title: "SmartSeva",
    link: "https://smart-seva-gamma.vercel.app/",
    skills: [
      "Blockchain",
      "Solidity",
      "Next.js",
      "Ethereum",
      "Smart Contracts",
      "DeFi",
    ],
    description: `A blockchain-based crowdfunding platform that brings transparency and security to fundraisers.
- Smart contracts handle donations and fund release, removing intermediaries.
- Donors can track exactly how funds are used on-chain.
- Built to support social causes with low transaction costs.`,
    icon: <BlocksIcon />,
    isExpanded: true,
  },
  {
    id: "eduquest",
    title: "EduQuest",
    link: "https://eduquest-six-gold.vercel.app/",
    skills: ["React.js", "Tailwind CSS", "Supabase", "PostgreSQL"],
    description: `A gamified learning platform that makes studying addictive.
- Quizzes, daily streaks, XP, and leaderboards to keep learners engaged.
- Supabase for auth, database, progress tracking, and role-based dashboards.
- Designed a responsive, dynamic UI to make learning feel like a game.`,
    icon: <Gamepad2Icon />,
    isExpanded: true,
  },
]
