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
    type: "English learning and student management platform",
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
      "A Laravel-based English-learning platform that connects a public course site, guided enrolment, secure student access, course delivery, session scheduling, payments, review moderation, notifications, and administrative operations in one product system.",
    features: [
      "Public learning and course pages",
      "Guided enrolment flow",
      "Secure student portal",
      "Admin dashboard",
      "Course catalogue and capacity management",
      "Session scheduling and meeting workflows",
      "Homework, grading, and feedback workflows",
      "Payment and invoice tracking",
      "Review moderation and notifications",
      "Progress visibility and gamification",
      "Role-based access and account verification",
    ],
    privacyNote:
      "Private client project. The portfolio visual translates the public learning experience and operational system—courses, sessions, enrolment, review moderation, notifications, and administration—without exposing student information, client configuration, or implementation details.",
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
      "A programmatic local-search system that combines city-level service pages with structured setup, controlled page generation, and an operational workspace for managing coverage and publishing readiness.",
    features: [
      "City and service coverage setup",
      "Structured public-service pages",
      "Controlled page-generation batches",
      "Page-readiness and quality checks",
      "Publishing-status workspace",
      "Internal-linking architecture",
      "Data-driven content structure",
    ],
    privacyNote:
      "Private system currently under testing. Portfolio visuals represent the product surface without exposing live customer data, implementation details, or release-ready mechanics.",
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