/**
 * Tests for the contact / booking endpoint.
 *
 * Runs on Node's built-in test runner with type stripping, so it needs no
 * transpile step and no dev dependencies. `wrangler pages dev` cannot run on
 * this machine (it needs GLIBC >= 2.29), so these tests are what actually
 * executes the Function's logic rather than merely typechecking it.
 *
 * Resend is stubbed: nothing here sends mail or touches the network.
 */

import { strict as assert } from "node:assert";
import { afterEach, describe, it } from "node:test";

import { onRequestPost } from "./contact.ts";

/** Minimal stand-in for the Pages Function context; only these fields are read. */
type Handler = typeof onRequestPost;
type Env = Record<string, string | undefined>;

const VALID_ENV: Env = {
  RESEND_API_KEY: "test-key",
  MAIL_TO: "info@dentalrepic.com",
  MAIL_FROM: "web@dentalrepic.com",
};

/** A form body that passes validation, so tests only vary what they care about. */
const validFields = (): Record<string, string> => ({
  name: "Ana Horvat",
  email: "ana@example.com",
  phone: "+385 91 123 4567",
  reason: "Implantologija",
  preferredTime: "Jutro",
  message: "Molim termin sljedeći tjedan.",
  locale: "hr",
});

interface Call {
  url: string;
  body: Record<string, unknown>;
}

/** Captured Resend requests, plus the response the stub should return. */
let calls: Call[] = [];
const realFetch = globalThis.fetch;

/**
 * Replace global fetch with a stub that records Resend calls.
 *
 * @param respond - Response the stubbed provider returns. Defaults to 200.
 */
function stubFetch(respond: () => Response = () => new Response("{}", { status: 200 })) {
  calls = [];
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === "string" ? input : input.toString();
    let body: Record<string, unknown> = {};
    if (typeof init?.body === "string") body = JSON.parse(init.body);
    calls.push({ url, body });
    return respond();
  }) as typeof fetch;
}

/** Invoke the handler with the given form fields, as the browser would. */
async function post(
  fields: Record<string, string>,
  env: Env = VALID_ENV,
  headers: Record<string, string> = {}
): Promise<{ status: number; body: { ok?: boolean; error?: string } }> {
  const form = new FormData();
  for (const [key, value] of Object.entries(fields)) form.append(key, value);

  const request = new Request("https://dentalrepic.com/api/contact", {
    method: "POST",
    body: form,
    headers,
  });

  // The handler reads only request and env; the rest of the Pages context is
  // irrelevant here, so it is not constructed.
  const response = await (onRequestPost as unknown as (ctx: {
    request: Request;
    env: Env;
  }) => Promise<Response>)({ request, env });

  return { status: response.status, body: await response.json() };
}

/** The HTML body the endpoint handed to Resend in the most recent call. */
const sentHtml = (): string => String(calls[0]?.body.html ?? "");

afterEach(() => {
  globalThis.fetch = realFetch;
});

describe("configuration", () => {
  it("refuses to run, without saying which variable is missing", async () => {
    stubFetch();
    for (const missing of ["RESEND_API_KEY", "MAIL_TO", "MAIL_FROM"]) {
      const env = { ...VALID_ENV, [missing]: undefined };
      const { status, body } = await post(validFields(), env);

      assert.equal(status, 500, `${missing} unset should be a 500`);
      assert.equal(body.error, "not_configured");
      // The response must not name the absent variable: that would tell an
      // attacker how the deployment is configured.
      assert.equal(JSON.stringify(body).includes(missing), false);
      assert.equal(calls.length, 0, "must not call the provider unconfigured");
    }
  });
});

describe("validation", () => {
  it("requires a name and an email", async () => {
    for (const field of ["name", "email"]) {
      stubFetch();
      const fields = { ...validFields(), [field]: "" };
      const { status, body } = await post(fields);

      assert.equal(status, 400);
      assert.equal(body.error, "missing_fields");
      assert.equal(calls.length, 0);
    }
  });

  it("rejects addresses that are not plausibly email addresses", async () => {
    for (const email of ["ana", "ana@", "@example.com", "ana@example", "a b@c.com"]) {
      stubFetch();
      const { status, body } = await post({ ...validFields(), email });

      assert.equal(status, 400, `${email} should be rejected`);
      assert.equal(body.error, "invalid_email");
      assert.equal(calls.length, 0);
    }
  });

  it("accepts the messier addresses that real people have", async () => {
    for (const email of ["ana+termin@example.co.uk", "ana.horvat@sub.example.hr"]) {
      stubFetch();
      const { status } = await post({ ...validFields(), email });
      assert.equal(status, 200, `${email} should be accepted`);
    }
  });

  it("treats optional fields as optional", async () => {
    stubFetch();
    const { status } = await post({ name: "Ana", email: "ana@example.com" });
    assert.equal(status, 200);
    // Blanks are shown as "-" rather than as empty table cells.
    assert.match(sentHtml(), /-/);
  });

  it("defaults the locale to Croatian when absent", async () => {
    stubFetch();
    await post({ name: "Ana", email: "ana@example.com" });
    assert.match(sentHtml(), /hr/);
  });
});

describe("spam handling", () => {
  it("silently discards submissions that fill the honeypot", async () => {
    stubFetch();
    const { status, body } = await post({ ...validFields(), company: "Acme Corp" });

    // Reports success so the bot does not learn it was caught, but sends nothing.
    assert.equal(status, 200);
    assert.equal(body.ok, true);
    assert.equal(calls.length, 0, "honeypot hit must not send mail");
  });

  it("still accepts a submission that leaves the honeypot empty", async () => {
    stubFetch();
    const { status } = await post({ ...validFields(), company: "" });
    assert.equal(status, 200);
    assert.equal(calls.length, 1);
  });

  it("requires a Turnstile token only once the secret is configured", async () => {
    stubFetch();
    const env = { ...VALID_ENV, TURNSTILE_SECRET: "secret" };
    const { status, body } = await post(validFields(), env);

    assert.equal(status, 400);
    assert.equal(body.error, "captcha_missing");
  });

  it("rejects a token that Cloudflare does not accept", async () => {
    stubFetch(() => Response.json({ success: false }));
    const env = { ...VALID_ENV, TURNSTILE_SECRET: "secret" };
    const fields = { ...validFields(), "cf-turnstile-response": "bad-token" };
    const { status, body } = await post(fields, env);

    assert.equal(status, 400);
    assert.equal(body.error, "captcha_failed");
    assert.equal(
      calls.some((c) => c.url.includes("api.resend.com")),
      false,
      "a failed captcha must not send mail"
    );
  });
});

describe("the email that gets sent", () => {
  it("posts to Resend with the configured sender and recipient", async () => {
    stubFetch();
    await post(validFields());

    assert.equal(calls.length, 1);
    assert.equal(calls[0].url, "https://api.resend.com/emails");
    assert.equal(calls[0].body.from, "web@dentalrepic.com");
    assert.deepEqual(calls[0].body.to, ["info@dentalrepic.com"]);
  });

  it("sets reply-to to the patient, so replying reaches them", async () => {
    stubFetch();
    await post(validFields());
    assert.equal(calls[0].body.reply_to, "ana@example.com");
  });

  it("includes every submitted field in the body", async () => {
    stubFetch();
    await post(validFields());
    const html = sentHtml();

    for (const value of Object.values(validFields())) {
      assert.ok(html.includes(value), `body should contain ${value}`);
    }
  });

  it("escapes submitted HTML rather than embedding it", async () => {
    stubFetch();
    const attack = '<img src=x onerror="alert(1)">';
    await post({ ...validFields(), name: attack, message: attack });
    const html = sentHtml();

    assert.equal(html.includes("<img"), false, "raw tag must not survive");
    assert.equal(html.includes("onerror=\"alert"), false);
    assert.ok(html.includes("&lt;img"), "should appear escaped");
  });

  it("strips newlines from the subject, so headers cannot be injected", async () => {
    stubFetch();
    await post({ ...validFields(), name: "Ana\r\nBcc: attacker@example.com" });
    const subject = String(calls[0].body.subject);

    assert.equal(/[\r\n]/.test(subject), false, "subject must be a single line");
    assert.ok(subject.includes("Ana"));
  });

  it("caps field length so a client cannot post megabytes", async () => {
    stubFetch();
    await post({ ...validFields(), message: "x".repeat(10_000) });

    // Match a long run specifically: a short one also occurs in "example.com".
    const xs = sentHtml().match(/x{100,}/)?.[0] ?? "";
    assert.equal(xs.length, 4000, "message should be capped at 4000 characters");
  });
});

describe("provider failures", () => {
  it("reports a generic failure when Resend refuses the send", async () => {
    stubFetch(() => new Response("domain is not verified", { status: 403 }));
    const { status, body } = await post(validFields());

    assert.equal(status, 502);
    assert.equal(body.error, "send_failed");
    // The provider's wording must not reach the browser.
    assert.equal(JSON.stringify(body).includes("domain"), false);
  });

  it("survives the provider being unreachable", async () => {
    stubFetch(() => {
      throw new Error("network down");
    });
    const { status, body } = await post(validFields());

    assert.equal(status, 502);
    assert.equal(body.error, "send_failed");
  });
});

describe("malformed requests", () => {
  it("rejects a body that is not form data", async () => {
    stubFetch();
    const request = new Request("https://dentalrepic.com/api/contact", {
      method: "POST",
      body: "not form data",
      headers: { "content-type": "application/json" },
    });

    const response = await (onRequestPost as unknown as (ctx: {
      request: Request;
      env: Env;
    }) => Promise<Response>)({ request, env: VALID_ENV });

    const body = (await response.json()) as { error?: string };
    assert.equal(response.status, 400);
    assert.equal(body.error, "bad_request");
  });
});

// Keeps the unused type alias meaningful to readers rather than dead code.
export type { Handler };
