export type ProjectPreviewVariant = "dashboard" | "pseo" | "fantivers";

export interface PortfolioProject {
  slug: string;
  title: string;
  status: string;
  type: string;
  stack: string[];
  description: string;
  features: string[];
  privacyNote: string;
  previewVariant: ProjectPreviewVariant;
  accent: "bronze" | "olive" | "navy";
}

export const projects: PortfolioProject[] = [
  {
    slug: "huzaifa-portal",
    title: "Huzaifa Portal",
    status: "Private client project",
    type: "Student management platform",
    stack: [
      "Laravel",
      "PHP",
      "Livewire",
      "Tailwind CSS",
      "MySQL",
      "Queues",
      "Email Workflows",
    ],
    description:
      "A Laravel-based student and tuition management platform designed to handle students, courses, classes, homework, payments, progress tracking, administration, and gamified student engagement.",
    features: [
      "Student dashboard",
      "Admin dashboard",
      "Course and class management",
      "Homework workflows",
      "Payment tracking",
      "Notifications",
      "Progress visibility",
      "Gamification",
      "Queue-driven emails",
      "Role-based access",
      "Secure account verification",
    ],
    privacyNote:
      "Private client project. Screens and technical details are available on request.",
    previewVariant: "dashboard",
    accent: "bronze",
  },
  {
    slug: "pseo-engine",
    title: "Programmatic SEO Engine",
    status: "Private system under testing",
    type: "Search-driven content system",
    stack: [
      "Laravel",
      "PHP",
      "Database Architecture",
      "SEO Systems",
      "Content Templates",
    ],
    description:
      "A programmatic SEO engine designed to create structured local-service pages for businesses operating across multiple cities and service areas.",
    features: [
      "Location page generation",
      "Service page generation",
      "Structured content templates",
      "Internal-linking strategy",
      "Scalable page architecture",
      "SEO quality controls",
      "Data-driven content structure",
    ],
    privacyNote:
      "Private system currently under testing. Public examples are not available yet.",
    previewVariant: "pseo",
    accent: "olive",
  },
  {
    slug: "fantivers",
    title: "Fantivers",
    status: "In design and development",
    type: "Collaborative storytelling platform",
    stack: [
      "Product Design",
      "System Planning",
      "World Building",
      "Laravel-Oriented Architecture",
    ],
    description:
      "Fantivers is an emerging collaborative storytelling platform built around shared fictional worlds, evolving stories, and participant-driven creation.",
    features: [
      "Shared fictional worlds",
      "Participant-driven creation",
      "Story and world exploration",
      "Public visitor-facing platform concept",
    ],
    privacyNote:
      "Internal product mechanics, planning, and architecture remain private during design.",
    previewVariant: "fantivers",
    accent: "navy",
  },
];