import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "kiet",
    school: "KIET Group of Institutions",
    degree: "Bachelor of Technology",
    fieldOfStudy: "Computer Science and Engineering (AI & ML)",
    period: {
      start: "08.2024",
      end: "06.2028",
    },
    description: `- CGPA: 9.38/10
- Core coursework: Data Structures, Algorithms, Operating Systems, DBMS, AI & ML, Blockchain, OOP (Java), Web Development`,
    skills: [
      "C",
      "C++",
      "Java",
      "Data Structures",
      "Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Machine Learning",
      "Blockchain",
    ],
    isExpanded: true,
  },
]
