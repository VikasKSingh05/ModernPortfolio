import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Vikas",
  lastName: "Kumar Singh",
  /** Preferred public-facing name */
  displayName: "Vikas Kumar Singh",
  /** Handle/username used in links or mentions */
  username: "VikasKSingh05",
  gender: "male",
  /** e.g. "he/him", "she/her", "they/them" */
  pronouns: "he/him",
  bio: "B.Tech CSE (AI & ML) Student | Full Stack Developer",
  /** Short phrases rotated in UI (e.g., homepage flip effect) */
  flipSentences: [
    "Full Stack Developer",
    "AI & ML Enthusiast",
    "Blockchain Developer",
    "Problem Solver",
  ],
  /** General location for display */
  address: "Delhi NCR, India",
  /** base64 encoded (https://t.io.vn/base64-string-converter) */
  emailB64: "dmlrYXNzaW5naC5kMmVAZ21haWwuY29t",
  /** Personal/homepage URL */
  website: "",
  /** Primary/current role shown on profile */
  jobTitle: "B.Tech CSE (AI & ML) Student",
  /** Work history entries */
  jobs: [],
  /** Rich about section; supports Markdown */
  about: `- I'm Vikas Kumar Singh, a builder at heart, endlessly curious by nature.
- Drawn to ideas that make me stop and think, "Could this actually work?"
- Always learning. Always building. Usually working on something I probably didn't need to start.`,
  /** Public URL to avatar image */
  avatar: "https://api.dicebear.com/9.x/initials/svg?seed=Vikas%20KS",
  /** Open Graph image URL for social sharing */
  ogImage: "https://your-domain.com/og.png",
  /** Audio URL for name pronunciation */
  namePronunciationUrl: "",
  /** SEO keywords list for metadata */
  keywords: [
    "Vikas Kumar Singh",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js",
    "TypeScript",
    "Artificial Intelligence",
    "Machine Learning",
    "Blockchain",
    "C++",
    "Java",
  ],
  /** Time zone in IANA format */
  timeZone: "Asia/Kolkata",
  /** Profile/site start date in YYYY-MM-DD */
  dateCreated: "2024-09-01",
}
