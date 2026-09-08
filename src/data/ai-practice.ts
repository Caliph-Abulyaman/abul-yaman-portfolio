export interface MethodologyStep {
  step: string;
  title: string;
  detail: string;
}

export interface DrillExample {
  title: string;
  context: string;
  outcome: string;
}

export interface BoundaryPoint {
  title: string;
  detail: string;
}

export const aiPracticeThesis = {
  eyebrow: "How I actually work with AI",
  title: "AI as instructor and collaborator, not autopilot.",
  lead:
    "The AI-assisted part of this portfolio isn't a code-completion habit — it's a structured, multi-month self-directed curriculum run with an AI instructor, covering DevOps and now a full-stack track. This page shows the actual methodology, not a claim about it.",
};

export const methodology: MethodologyStep[] = [
  {
    step: "01",
    title: "Overview, before anything else",
    detail:
      "Every course starts with a course-level overview and rationale before a single module begins — what's being built, why this project shape specifically forces the right lessons, and how it connects to what came before.",
  },
  {
    step: "02",
    title: "Explain → hint → small task, per module",
    detail:
      "Each module follows the same discipline: a concept is explained, a hint or direction is given, then a small hands-on task is attached immediately — never a long lecture block before any hands-on work.",
  },
  {
    step: "03",
    title: "The project is built chunk by chunk, by hand",
    detail:
      "The AI describes what to do in plain English. I write every line of code and run every command myself. No unsolicited code is ever generated for me — this is a hard rule, not a preference.",
  },
  {
    step: "04",
    title: "Real friction before the tool that solves it",
    detail:
      "Problems are always introduced before their solution — manual docker run wiring before Compose, raw SQL before an ORM, manual namespace isolation before Docker is even opened. The tool's value has to be self-evident, not asserted.",
  },
  {
    step: "05",
    title: "Errors are drilled, not just described",
    detail:
      "Real breakages are planted deliberately — a reversed COPY instruction to force a cache-invalidation lesson, a disabled healthcheck to force a real race-condition failure — so the failure is observed directly, not summarized in prose.",
  },
];

export const drillExamples: DrillExample[] = [
  {
    title: "Git incident response, for real",
    context:
      "During the Git & GitHub hardening course, an accidental merge into a protected branch was handled as a genuine incident — full response via git revert through the actual protected-branch workflow, not a simulated walkthrough.",
    outcome:
      "Direct, hands-on fluency in recovery operations most developers only read about: reflog recovery, branch-deletion recovery, and a real multi-branch divergence resolved live.",
  },
  {
    title: "Reversed COPY, deliberate cache-invalidation drill",
    context:
      "In the Docker course, a Dockerfile's COPY order was deliberately written backwards — source before the dependency manifest — specifically to force a full cache invalidation on a trivial source change.",
    outcome:
      "The fix, and the cache hit that followed, were observed directly rather than taken on faith — this is the difference between knowing a rule and having verified it.",
  },
  {
    title: "A real OOM-kill, chased down properly",
    context:
      "An early attempt to trigger a memory limit failure failed silently, because Buffer.alloc() without touching pages doesn't register as real resident memory. The discrepancy was diagnosed by comparing the kernel's own memory accounting against the script's internal counter.",
    outcome:
      "Fixed by forcing real page commitment, then a genuine OOM kill was triggered and confirmed via OOMKilled: true and exit code 137 — a signature worth recognizing in any real production incident.",
  },
  {
    title: "A CI break, root-caused through actual logs",
    context:
      "A production integration-test pipeline failed for a subtle reason: two files had been refactored to read new environment variables, but the CI workflow's env-file generation step still wrote the old shape. The API silently fell through to a default host with nothing listening on it.",
    outcome:
      "Root-caused by adding real error logging to a health endpoint that had been swallowing the actual database error — a genuine permanent fix in its own right — then confirmed directly against the actual Pool config rather than trusting a stale assumption.",
  },
];

export const boundaries: BoundaryPoint[] = [
  {
    title: "No unsolicited code",
    detail:
      "The AI describes what to do in plain English. I write and run the code myself. This is a standing rule across every course, not a case-by-case choice.",
  },
  {
    title: "Suggestions are evaluated, not accepted by default",
    detail:
      "Third-party AI suggestions (including from tools like GitHub Copilot encountered mid-project) are judged on merit. A suggestion that correctly diagnosed a real problem but proposed fixing the wrong layer was rejected in favor of fixing the actual broken piece — with a clear, respectful reason recorded either way.",
  },
  {
    title: "Corrections are authoritative",
    detail:
      "When I catch an error or misstep in the AI's direction, that correction is treated as final and the work adjusts immediately — no re-litigating a decision I've already made with better information.",
  },
  {
    title: "Real evidence over assumed correctness",
    detail:
      "Claims get verified against actual command output, actual file contents, and actual logs — not assumed from a mental model. This shows up as a repeated pattern across every course: check first, then act.",
  },
];

export const aiInPracticeTieIn =
  "This same discipline — real friction before the tool that solves it, errors drilled rather than described, decisions verified against evidence — is the same approach carried into Huzaifa Portal and the pSEO Engine: build it by hand first, understand exactly why a tool or abstraction earns its place, then adopt it deliberately.";
