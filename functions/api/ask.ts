// Cloudflare Pages Function: POST /api/ask
//
// Requires two bindings, set in wrangler.toml or the Pages dashboard:
//   - AI:        Workers AI binding (free daily allocation, no billing)
//   - ASSISTANT_KV: a KV namespace, used only to track a daily request
//                    count so this can hard-stop before ever costing money
//                    or exhausting the free allocation unexpectedly.
//
// Design intent: this must NEVER be able to incur a charge. If the daily
// cap is hit, if the AI binding errors, or if anything else goes wrong,
// this returns source: "fallback" and the client-side static FAQ takes
// over. There is no retry, no queueing, no external paid API anywhere
// in this file.

export interface Env {
  AI: Ai;
  ASSISTANT_KV: KVNamespace;
}

// Conservative — well inside Workers AI's free daily neuron allocation
// even on a busy day, with margin for other free-tier usage on the account.
const DAILY_REQUEST_CAP = 150;

const SYSTEM_CONTEXT = `You are a small assistant embedded on Abul Yaman's portfolio site. Answer ONLY using the facts below. Keep answers to 2-3 sentences, factual, no marketing language. If something isn't covered below, say you don't have that detail and suggest checking the Projects or Learning Journey page.

PROJECTS:
- Huzaifa Portal: a real, deployed student management system built solo in Laravel for an English-learning business. Public course pages, guided enrolment, student portal, session scheduling, payments, admin workspace. Deployed on a self-managed Hetzner VPS. Live with real enrolled students. Private client project.
- Programmatic SEO Engine (pSEO Engine): an automated system generating local-service pages per city at scale. Built with city/service coverage setup, controlled generation batches, and explicit quality checks before publishing. Never publicly released due to feasibility constraints on page quality — will ship once thoroughly tested.
- Fantivers: an early-stage collaborative storytelling platform, currently in product design and planning, not yet in implementation.

LEARNING JOURNEY (chronological, self-taught unless noted):
- Grade 9: self-studied computer science fundamentals from a book by an Indian author.
- Learned C++ from "C++ How to Program" by Deitel.
- Learned HTML/CSS and basic web fundamentals.
- Learned basics of assembly language.
- Completed Harvard's CS50 online, in full, TWICE, for free via YouTube, no certificate.
- Took CS75 (Building Dynamic Websites, David Malan) online, which is where he fell in love with PHP.
- Learned SQL from CS50 and an independent library book.
- Learned PHP from the official PHP documentation (easy due to C++ background).
- Learned Laravel via Laracasts, up to intermediate level.
- Learned Python and the basics of a few ML algorithms plus theory.
- Surveyed ASP.NET and React (core mechanics), and other frameworks.
- Working knowledge of JavaScript, not yet mastered.
- Formal FSc Computer Science coursework covered databases, software development lifecycle (SDLC), and hardware.
- After high school graduation, started a self-directed DevOps curriculum with an AI instructor: Course 1 (Git/GitHub hardening), Course 2 (CI/CD with GitHub Actions), Course 3 (Docker deep dive - kernel namespaces/cgroups up to a 5-service production Docker Compose system).
- Currently: paused Kubernetes (Course 4) to complete a full-stack track first - JS/TS, raw SQL before Prisma, Node/Express/Redis/queues, React, Next.js, NestJS.

AI PRACTICE METHODOLOGY:
- Every course starts with an overview before any module begins.
- Each module: explain a concept, give a hint, then an immediate small hands-on task.
- Projects are built chunk by chunk; the AI describes what to do in plain English, Abul writes and runs every line himself. No unsolicited code, ever - this is a hard rule.
- Real friction is introduced before the tool that solves it (e.g. manual docker run wiring before Compose).
- Errors are drilled deliberately, not just described - e.g. a reversed Dockerfile COPY order was used on purpose to force a cache-invalidation lesson; a disabled healthcheck was used to force a real race-condition failure.
- Real example drills: a genuine Git incident response (accidental merge into a protected branch, handled via git revert through the real workflow); an OOM-kill that initially failed silently and was root-caused by comparing kernel memory accounting to a script's own counter; a CI pipeline failure root-caused through real error logging rather than assumption.
- Boundaries: no unsolicited code; third-party AI suggestions (e.g. from Copilot) are evaluated on merit, not accepted by default; corrections from Abul are treated as authoritative; claims are verified against real command output/logs, not assumed.

CONTACT: reach via the Contact page - email and WhatsApp both listed there.`;

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  let question: string;
  try {
    const body = await request.json<{ question?: string }>();
    question = (body.question ?? "").trim();
  } catch {
    return jsonResponse({ answer: "", source: "fallback" }, 400);
  }

  if (!question || question.length > 500) {
    return jsonResponse({ answer: "", source: "fallback" }, 400);
  }

  // --- Hard daily cap check, before any AI call is attempted ---
  const capOk = await checkAndIncrementDailyCap(env.ASSISTANT_KV);
  if (!capOk) {
    return jsonResponse({ answer: "", source: "fallback" });
  }

  // --- Workers AI call, free tier only, no external paid API ---
  try {
    const result = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
      messages: [
        { role: "system", content: SYSTEM_CONTEXT },
        { role: "user", content: question },
      ],
      max_tokens: 200,
    });

    const answer =
      typeof result === "object" && result !== null && "response" in result
        ? String((result as { response: unknown }).response ?? "").trim()
        : "";

    if (!answer) {
      return jsonResponse({ answer: "", source: "fallback" });
    }

    return jsonResponse({ answer, source: "ai" });
  } catch {
    // Any Workers AI error (including free-tier exhaustion mid-day) falls
    // straight through to the client-side static fallback.
    return jsonResponse({ answer: "", source: "fallback" });
  }
};

async function checkAndIncrementDailyCap(kv: KVNamespace | undefined): Promise<boolean> {
  // If the KV binding isn't configured yet, skip the cap check rather than
  // erroring — the free-tier guard stays on the client side too.
  if (!kv) return true;

  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const key = `ask-count:${today}`;

  const current = Number((await kv.get(key)) ?? "0");
  if (current >= DAILY_REQUEST_CAP) {
    return false;
  }

  // TTL of 2 days is enough for the key to self-clean without needing a
  // cron job; a new day just gets a new key.
  await kv.put(key, String(current + 1), { expirationTtl: 60 * 60 * 24 * 2 });
  return true;
}

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
