export type ProjectPreviewVariant = "dashboard" | "pseo" | "fantivers";
export type ProjectStatus = "shipped-private" | "in-testing" | "in-development";

export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  tagline: string; // one-line outcome, shown on the grid card
  status: ProjectStatus;
  statusLabel: string; // display text for the status badge
  type: string;
  stack: string[];
  description: string;
  problem: string; // what problem the project solves — detail page only
  approach: string; // how it was approached/built — detail page only
  features: string[];
  highlights: ProjectHighlight[]; // small stat/fact chips, e.g. "5 tables", "12 endpoints"
  privacyNote: string;
  previewVariant: ProjectPreviewVariant;
  accent: "bronze" | "olive" | "navy";
  featured: boolean; // pinned to the top of the grid, like Fiverr's pinned items
}

export const projects: PortfolioProject[] = [
  {
    slug: "huzaifa-portal",
    title: "Huzaifa Portal",
    tagline: "A real, deployed student management system built end-to-end in Laravel.",
    status: "shipped-private",
    statusLabel: "Live · Private client project",
    type: "English learning and student management platform",
    stack: [
      "Laravel",
      "PHP",
      "Livewire",
      "Tailwind CSS",
      "MySQL",
      "Queues",
      "Email Workflows",
      "Hetzner (VPS deployment)",
    ],
    description:
      "A Laravel-based English-learning platform that connects a public course site, guided enrolment, secure student access, course delivery, session scheduling, payments, review moderation, notifications, and administrative operations in one product system.",
    problem:
      "The client needed a single system to replace scattered spreadsheets, manual scheduling, and ad-hoc payment tracking for an online English-learning business — something that could handle public marketing pages, guided enrolment, and a full internal operations workspace without duct-taping together separate tools.",
    approach:
      "Built solo, from database design through deployment. Started with schema design for the full entity set (students, courses, sessions, payments, reviews) before writing a single route, then layered in the public site, the student portal, and the admin workspace as three distinct surfaces sharing one data model. Deployed to a self-managed Hetzner VPS rather than a managed PaaS, which meant owning the full stack: web server config, queue workers for email, and backups.",
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
    highlights: [
      { label: "Status", value: "Live in production" },
      { label: "Hosting", value: "Self-managed Hetzner VPS" },
      { label: "Users", value: "Real enrolled students" },
      { label: "Role", value: "Solo developer, DB to deploy" },
    ],
    privacyNote:
      "Private client project. The portfolio visual translates the public learning experience and operational system—courses, sessions, enrolment, review moderation, notifications, and administration—without exposing student information, client configuration, or implementation details.",
    previewVariant: "dashboard",
    accent: "bronze",
    featured: true,
  },
  {
    slug: "pseo-engine",
    title: "Programmatic SEO Engine",
    tagline: "An automated system generating local-service pages at city scale.",
    status: "in-testing",
    statusLabel: "In testing · Unreleased",
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
    problem:
      "Local service businesses that operate across many cities need a dedicated, well-structured page for each city/service combination to rank in local search — but hand-writing hundreds of near-duplicate pages doesn't scale and hand-templating them naively produces thin, low-quality pages that search engines penalize.",
    approach:
      "Designed a data-first system: city and service coverage are configured once, pages are generated in controlled batches (not all at once), and every generated page passes through explicit quality checks before it's eligible to publish — closer to a content pipeline with review gates than a mail-merge script. Deliberately not yet released publicly: the feasibility and quality bar needed to be proven internally first, and it will ship once that bar is consistently met.",
    features: [
      "City and service coverage setup",
      "Structured public-service pages",
      "Controlled page-generation batches",
      "Page-readiness and quality checks",
      "Publishing-status workspace",
      "Internal-linking architecture",
      "Data-driven content structure",
    ],
    highlights: [
      { label: "Status", value: "Feasibility testing" },
      { label: "Scope", value: "Per-city × per-service pages" },
      { label: "Release", value: "Pending quality bar" },
      { label: "Role", value: "Solo developer, system design" },
    ],
    privacyNote:
      "Private system currently under testing. Never publicly released due to feasibility constraints on generated-page quality — it will ship once thoroughly tested. Portfolio visuals represent the product surface without exposing live customer data or implementation details.",
    previewVariant: "pseo",
    accent: "olive",
    featured: true,
  },
  {
    slug: "fantivers",
    title: "Fantivers",
    tagline: "An early-stage collaborative storytelling platform, in active design.",
    status: "in-development",
    statusLabel: "In design",
    type: "Collaborative storytelling platform",
    stack: [
      "Product Design",
      "System Planning",
      "World Building",
      "Laravel-Oriented Architecture",
    ],
    description:
      "Fantivers is an emerging collaborative storytelling platform built around shared fictional worlds, evolving stories, and participant-driven creation.",
    problem:
      "Collaborative fiction communities currently rely on forums and generic wikis that weren't designed for shared-world continuity — Fantivers is exploring what a platform purpose-built for that would need.",
    approach:
      "Currently in product design and planning rather than implementation — working through the core mechanics (world structure, story/character relationships, contribution model) before committing to a build, deliberately avoiding building the wrong architecture early.",
    features: [
      "Shared fictional worlds",
      "Participant-driven creation",
      "Story and world exploration",
      "Public visitor-facing platform concept",
    ],
    highlights: [
      { label: "Status", value: "Design phase" },
      { label: "Stage", value: "Pre-implementation" },
    ],
    privacyNote:
      "Internal product mechanics, planning, and architecture remain private during design.",
    previewVariant: "fantivers",
    accent: "navy",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
