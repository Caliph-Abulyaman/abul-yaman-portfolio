// Cloudflare Pages Function: POST /api/contact
//
// Sends the contact form via Resend's free tier (100 emails/day, 3,000/month
// free, no card required for the free tier). Requires one secret, set via:
//   wrangler pages secret put RESEND_API_KEY
// (or the Pages dashboard, Settings -> Environment variables -> Encrypt)
//
// If RESEND_API_KEY isn't set, this returns a clear "not configured" error
// rather than failing silently — the frontend falls back to a mailto: link
// in that case so the form is never a dead end.

export interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL: string; // e.g. "abulyaman101@gmail.com" — set as a plain var
}

interface ContactPayload {
  name: string;
  email: string;
  projectType: string;
  timeline: string;
  budget: string;
  message: string;
  website: string; // honeypot — must be empty
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  let payload: Partial<ContactPayload>;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ ok: false, error: "invalid request body" }, 400);
  }

  // Honeypot check — silently "succeed" so bots don't learn anything.
  if (payload.website && payload.website.trim() !== "") {
    return jsonResponse({ ok: true });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const message = (payload.message ?? "").trim();

  if (!name || !email || !message) {
    return jsonResponse({ ok: false, error: "name, email, and message are required" }, 400);
  }

  if (!env.RESEND_API_KEY) {
    return jsonResponse(
      { ok: false, error: "not configured", fallback: "mailto" },
      503,
    );
  }

  const subject = `Portfolio inquiry from ${name}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Project type: ${payload.projectType ?? "Not specified"}`,
    `Timeline: ${payload.timeline ?? "Not specified"}`,
    `Budget range: ${payload.budget ?? "Not specified"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Resend's free tier requires sending from a verified domain, or
        // from their shared onboarding@resend.dev sender for testing.
        // Swap this once a domain is verified on the Resend account.
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: env.CONTACT_TO_EMAIL,
        reply_to: email,
        subject,
        text: body,
      }),
    });

    if (!res.ok) {
      return jsonResponse({ ok: false, error: "send failed", fallback: "mailto" }, 502);
    }

    return jsonResponse({ ok: true });
  } catch {
    return jsonResponse({ ok: false, error: "send failed", fallback: "mailto" }, 502);
  }
};

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
