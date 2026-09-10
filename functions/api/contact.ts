/**
 * Cloudflare Pages Function: contact / booking form endpoint.
 *
 * Deployed automatically by Cloudflare Pages from the `functions/` directory:
 * this file becomes POST /api/contact. No separate Worker to manage.
 *
 * Required environment variables (Pages > Settings > Variables and Secrets):
 *   RESEND_API_KEY   Secret. API key from https://resend.com
 *   MAIL_TO          Where enquiries are delivered, e.g. the clinic inbox
 *   MAIL_FROM        Verified sender on your domain, e.g. web@dentalrepic.com.hr
 *   TURNSTILE_SECRET Optional. Enables Turnstile spam checking when set.
 *
 * MailChannels is deliberately not used: its free tier for Cloudflare Workers
 * was withdrawn in 2024. Any provider with an HTTP API works here; swap the
 * sendEmail() body to change provider.
 */

interface Env {
  RESEND_API_KEY?: string;
  MAIL_TO?: string;
  MAIL_FROM?: string;
  TURNSTILE_SECRET?: string;
}

interface Submission {
  name: string;
  email: string;
  phone: string;
  reason: string;
  preferredTime: string;
  message: string;
  locale: string;
}

/** Cap each field so a hostile client cannot post megabytes of text. */
const LIMITS: Record<keyof Submission, number> = {
  name: 120,
  email: 200,
  phone: 40,
  reason: 120,
  preferredTime: 60,
  message: 4000,
  locale: 5,
};

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

/**
 * Escape text for safe interpolation into the HTML email body.
 *
 * Submitted values are untrusted, so they must never be dropped into markup raw.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Strip CR/LF so a submitted value cannot inject extra email headers. */
const singleLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

/** Verify a Turnstile token with Cloudflare, if spam checking is configured. */
async function turnstileOk(
  secret: string,
  token: string,
  ip: string | null
): Promise<boolean> {
  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body }
  );
  if (!res.ok) return false;
  const result = (await res.json()) as { success?: boolean };
  return result.success === true;
}

async function sendEmail(env: Env, data: Submission): Promise<Response> {
  const rows: Array<[string, string]> = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "-"],
    ["Reason", data.reason || "-"],
    ["Preferred time", data.preferredTime || "-"],
    ["Language", data.locale],
  ];

  const html = `
    <h2>Novi upit s web stranice / New website enquiry</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="color:#666">${label}</td><td><strong>${escapeHtml(
              value
            )}</strong></td></tr>`
        )
        .join("")}
    </table>
    <h3>Napomena / Notes</h3>
    <p style="white-space:pre-wrap">${escapeHtml(data.message || "-")}</p>
  `;

  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: env.MAIL_FROM,
      to: [env.MAIL_TO],
      // Replies go straight to the patient rather than to the sending address.
      reply_to: data.email,
      subject: `Upit s web stranice: ${singleLine(data.name)}`,
      html,
    }),
  });
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  // Fail loudly in logs if the deployment is missing its configuration, but do
  // not leak which variable is absent to the caller.
  if (!env.RESEND_API_KEY || !env.MAIL_TO || !env.MAIL_FROM) {
    console.error("contact: missing RESEND_API_KEY, MAIL_TO or MAIL_FROM");
    return json({ ok: false, error: "not_configured" }, 500);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: "bad_request" }, 400);
  }

  const read = (key: keyof Submission): string => {
    const raw = form.get(key);
    return typeof raw === "string" ? raw.slice(0, LIMITS[key]).trim() : "";
  };

  const data: Submission = {
    name: singleLine(read("name")),
    email: singleLine(read("email")),
    phone: singleLine(read("phone")),
    reason: singleLine(read("reason")),
    preferredTime: singleLine(read("preferredTime")),
    message: read("message"),
    locale: singleLine(read("locale")) || "hr",
  };

  // Honeypot: a field hidden from users, so anything filling it is a bot.
  // Report success so the bot does not learn it was rejected.
  if (typeof form.get("company") === "string" && form.get("company")) {
    return json({ ok: true }, 200);
  }

  if (!data.name || !data.email) {
    return json({ ok: false, error: "missing_fields" }, 400);
  }
  // Deliberately loose: real addresses vary more than most patterns allow.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return json({ ok: false, error: "invalid_email" }, 400);
  }

  if (env.TURNSTILE_SECRET) {
    const token = form.get("cf-turnstile-response");
    if (typeof token !== "string" || !token) {
      return json({ ok: false, error: "captcha_missing" }, 400);
    }
    const ip = request.headers.get("CF-Connecting-IP");
    if (!(await turnstileOk(env.TURNSTILE_SECRET, token, ip))) {
      return json({ ok: false, error: "captcha_failed" }, 400);
    }
  }

  try {
    const res = await sendEmail(env, data);
    if (!res.ok) {
      // Log the provider's reason; return a generic failure to the browser.
      console.error("contact: provider error", res.status, await res.text());
      return json({ ok: false, error: "send_failed" }, 502);
    }
  } catch (error) {
    console.error("contact: send threw", error);
    return json({ ok: false, error: "send_failed" }, 502);
  }

  return json({ ok: true }, 200);
};
