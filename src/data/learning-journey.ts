export interface JourneyEntry {
  period: string;
  title: string;
  detail: string;
  tags?: string[];
}

export interface JourneyPhase {
  phaseLabel: string;
  phaseTitle: string;
  entries: JourneyEntry[];
}

// This is the honest, chronological version of how the skillset was built —
// not a resume-style "Education" list. Ordered oldest to newest.
export const journeyPhases: JourneyPhase[] = [
  {
    phaseLabel: "Phase 1",
    phaseTitle: "Fundamentals, self-taught (Grade 9 onward)",
    entries: [
      {
        period: "Grade 9",
        title: "Computer science fundamentals, self-study",
        detail:
          "Started with the fundamentals of computer science independently, working through a book on computer fundamentals by an Indian author covering core hardware and computing concepts — well before any formal coursework touched the subject.",
        tags: ["Self-taught"],
      },
      {
        period: "Grade 9–10",
        title: "C++ from Deitel's How to Program",
        detail:
          "Learned C++ properly from C++ How to Program by Deitel — the book that built the underlying programming discipline everything after this leaned on, including how quickly PHP was picked up later.",
        tags: ["C++", "Deitel"],
      },
      {
        period: "Early web",
        title: "HTML, CSS, and basic web fundamentals",
        detail:
          "Picked up HTML, CSS, and general web fundamentals as a natural next step after C++, before any structured course covered the same ground.",
        tags: ["HTML", "CSS"],
      },
      {
        period: "Self-study",
        title: "Basic assembly language",
        detail:
          "Studied the basics of programming in assembly language independently — closer-to-the-metal exposure that most self-taught web developers skip entirely.",
        tags: ["Assembly"],
      },
    ],
  },
  {
    phaseLabel: "Phase 2",
    phaseTitle: "CS50, CS75, and falling in love with PHP",
    entries: [
      {
        period: "Self-paced, free",
        title: "Harvard CS50, completed twice",
        detail:
          "Took CS50 online in full, twice, entirely for free via YouTube — no certificate, no institutional credit, just doing the actual work both times to make sure the fundamentals actually stuck.",
        tags: ["CS50", "Harvard", "Free / self-paced"],
      },
      {
        period: "Self-paced, free",
        title: "CS75: Building Dynamic Websites (David Malan)",
        detail:
          "Took CS75 (Malan's web course) online, which is where PHP clicked. The C++ background made PHP feel immediately familiar, and this course is the direct root of the eventual move into Laravel.",
        tags: ["CS75", "David Malan", "PHP"],
      },
      {
        period: "SQL",
        title: "SQL — from CS50 and an independent textbook",
        detail:
          "Learned SQL through CS50's coverage, then went deeper with a book borrowed from a local library, independent of any course.",
        tags: ["SQL"],
      },
    ],
  },
  {
    phaseLabel: "Phase 3",
    phaseTitle: "PHP, Laravel, and a wide survey of the ecosystem",
    entries: [
      {
        period: "Self-directed",
        title: "PHP from the official documentation",
        detail:
          "Went straight to the PHP documentation as the primary source — the C++ background made the language easy to pick up quickly and correctly from primary docs rather than tutorials.",
        tags: ["PHP", "Official docs"],
      },
      {
        period: "Self-directed",
        title: "Laravel via Laracasts, to intermediate level",
        detail:
          "Learned Laravel fundamentals through intermediate-level concepts via Laracasts — the foundation that both Huzaifa Portal and the pSEO Engine were later built on.",
        tags: ["Laravel", "Laracasts"],
      },
      {
        period: "Survey / exploratory",
        title: "Python and the basics of machine learning",
        detail:
          "Learned Python and worked through the basics of a few ML algorithms plus supporting theory — not a specialization, but enough to understand the landscape and reason about it.",
        tags: ["Python", "ML basics"],
      },
      {
        period: "Survey / exploratory",
        title: "Framework literacy: ASP.NET, React, and others",
        detail:
          "Spent focused time — a few days each in some cases — understanding the core mechanics of frameworks outside the PHP ecosystem: what ASP.NET actually is and how it's structured, how React's core rendering model works, and others, to be genuinely framework-literate rather than single-stack.",
        tags: ["ASP.NET", "React", "Framework literacy"],
      },
      {
        period: "Ongoing",
        title: "JavaScript — working knowledge, not yet mastered",
        detail:
          "Learned JavaScript to a working level alongside everything else — honestly not at mastery yet, which is part of why the current full-stack track exists.",
        tags: ["JavaScript"],
      },
    ],
  },
  {
    phaseLabel: "Phase 4",
    phaseTitle: "Formal higher-secondary coursework (FSc Computer Science)",
    entries: [
      {
        period: "FSc Computer Science",
        title: "Databases, in full, formally",
        detail:
          "Covered databases comprehensively in the formal curriculum — this overlapped with and reinforced the self-taught SQL work from Phase 2.",
        tags: ["Databases"],
      },
      {
        period: "FSc Computer Science",
        title: "Software development lifecycle",
        detail:
          "Formal coverage of SDLC models and process — the theoretical scaffolding around the practical project work already underway independently.",
        tags: ["SDLC"],
      },
      {
        period: "FSc Computer Science",
        title: "Computer hardware",
        detail:
          "Formal hardware coverage — largely reinforcing ground already covered independently back in Grade 9 through the computer fundamentals book.",
        tags: ["Hardware"],
      },
    ],
  },
  {
    phaseLabel: "Phase 5",
    phaseTitle: "Two real production systems",
    entries: [
      {
        period: "Built and deployed",
        title: "Huzaifa Portal — real student management system",
        detail:
          "Designed and built a full student management system in Laravel, deployed to a self-managed Hetzner VPS, for a real English-learning business. This is a live, private client system — not a tutorial project.",
        tags: ["Laravel", "Production", "Hetzner"],
      },
      {
        period: "Built, in testing",
        title: "pSEO Engine — automated local-service page generation",
        detail:
          "Built an automated system generating local-service pages per city at scale. Never published due to feasibility constraints on generated-page quality — will ship once thoroughly tested rather than rushed out.",
        tags: ["Laravel", "SEO systems"],
      },
    ],
  },
  {
    phaseLabel: "Phase 6",
    phaseTitle: "Post-graduation: structured self-run DevOps and full-stack track",
    entries: [
      {
        period: "After high school graduation",
        title: "Course 1 — Git & GitHub hardening",
        detail:
          "Started a self-directed, multi-course DevOps curriculum immediately after graduating, working with an AI instructor to structure and drill it. Course 1 covered real incident response, history rewriting, and recovery drills on a dedicated project.",
        tags: ["Git", "GitHub"],
      },
      {
        period: "After high school graduation",
        title: "Course 2 — CI/CD with GitHub Actions",
        detail:
          "Built a full CI/CD mental model — test matrices, secrets management, Docker build pipelines, and release engineering with SemVer and changelog automation — against a real Flask project built specifically to exercise it.",
        tags: ["CI/CD", "GitHub Actions", "Docker basics"],
      },
      {
        period: "After high school graduation",
        title: "Course 3 — Docker deep dive",
        detail:
          "Went from kernel-level isolation primitives (namespaces, cgroups, built a bridge network by hand) up through a full five-service production-grade Docker Compose system, complete with hardening, healthchecks, and CI integration.",
        tags: ["Docker", "Linux internals", "Compose"],
      },
      {
        period: "Current",
        title: "Full-stack track — in progress",
        detail:
          "Course 4 (Kubernetes) is deliberately paused to complete a full separate full-stack track first: JS/TS fundamentals, raw SQL before Prisma, Node/Express/Redis/queues, React, Next.js, and NestJS — for breadth across both full-stack and DevOps before returning to orchestration.",
        tags: ["Node.js", "React", "Next.js", "NestJS", "In progress"],
      },
    ],
  },
];
