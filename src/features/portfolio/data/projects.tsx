import { BlocksIcon, Gamepad2Icon } from "lucide-react"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "smartseva",
    title: "SmartSeva",
    period: {
      start: "2025",
    },
    link: "https://github.com/VikasKSingh05",
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
    period: {
      start: "2024",
    },
    link: "https://github.com/VikasKSingh05",
    skills: [
      "MERN",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
    ],
    description: `A gamified learning platform that makes studying addictive.
- Quizzes, daily streaks, XP, and leaderboards to keep learners engaged.
- REST API with JWT auth, progress tracking, and role-based dashboards.
- Designed a responsive, dynamic UI to make learning feel like a game.`,
    icon: <Gamepad2Icon />,
  },
]
