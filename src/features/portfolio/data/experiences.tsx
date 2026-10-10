import { CodeXmlIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "tendr",
    companyName: "Tendr",
    companyWebsite: "https://tendr.in",
    location: "India",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Frontend Developer Intern",
        employmentPeriod: {
          start: "09.2025",
          end: "09.2025",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description: `- Implemented new UI components and features in a React-based web app.
- Worked in an agile team; reviewed code and fixed cross-browser UI bugs.
- Gained hands-on experience shipping features to production.`,
        skills: ["React", "JavaScript", "HTML", "CSS", "Git"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "cpbyte",
    companyName: "CPBYTE",
    companyWebsite: "https://cpbyte.com",
    location: "India",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "04.2025",
          end: "04.2025",
        },
        employmentType: "Part-time",
        icon: <CodeXmlIcon />,
        description: `- Built responsive, production-ready UIs with React, Next.js, and Tailwind CSS.
- Collaborated with designers and backend engineers to ship client features end-to-end.
- Maintained component quality and performance across the frontend codebase.`,
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST API"],
        isExpanded: true,
      },
    ],
  },
]
