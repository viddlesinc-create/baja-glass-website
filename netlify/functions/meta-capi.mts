// Meta Conversions API relay (Netlify Functions v2).
//
// Receives Lead / Contact events from src/lib/metaPixel.ts, hashes user data (SHA-256,
// after normalizing), and forwards to the Graph API with the same event_id the browser
// Pixel used, so Meta deduplicates the pair.
//
// Env (Netlify UI, never VITE_-prefixed):
//   META_PIXEL_ID          — server copy of the Pixel/Dataset ID (never read from the client)
//   META_CAPI_ACCESS_TOKEN — SECRET
//   META_GRAPH_VERSION     — e.g. v26.0
//   META_TEST_EVENT_CODE   — optional; set only while testing in Events Manager
//
// Always answers 202 once a request passes validation: a Meta outage or misconfig must
// never surface as an error on the site. Never logs PII or the token.

import { createHash } from "node:crypto";

type Context = {
  ip?: string;
  deploy?: { context?: string };
};

const ALLOWED_EVENTS = new Set(["Lead", "Contact"]);
const ALLOWED_ORIGINS = new Set(["https://bajaglass.com", "https://www.bajaglass.com"]);
const LOCALHOST_ORIGIN = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;
const MAX_BODY_BYTES = 10_000;
const META_TIMEOUT_MS = 3000;

const isDev = (context: Context) =>
  context?.deploy?.context === "dev" || process.env.NETLIFY_DEV === "true";

const originAllowed = (origin: string | null, context: Context) => {
  if (!origin) return false;
  if (ALLOWED_ORIGINS.has(origin)) return true;
  return isDev(context) && LOCALHOST_ORIGIN.test(origin);
};

const sha256 = (value: string) => createHash("sha256").update(value).digest("hex");

const str = (value: unknown, max = 200): string | undefined => {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, max) : undefined;
};

export const normalizeEmail = (v?: string) => {
  const s = v?.trim().toLowerCase();
  return s && s.includes("@") ? s : undefined;
};

export const normalizePhone = (v?: string) => {
  const digits = v?.replace(/\D/g, "") ?? "";
  if (!digits) return undefined;
  return digits.length === 10 ? `1${digits}` : digits;
};

export const normalizeName = (v?: string) => {
  const s = v?.trim().toLowerCase();
  return s || undefined;
};

export const normalizeZip = (v?: string) => {
  const digits = v?.replace(/\D/g, "").slice(0, 5) ?? "";
  return digits.length === 5 ? digits : undefined;
};

// Meta's ct format: lowercase, no spaces or punctuation.
export const normalizeCity = (v?: string) => {
  const s = v?.toLowerCase().replace(/[^a-z]/g, "");
  return s || undefined;
};

const hashed = (v?: string) => (v ? [sha256(v)] : undefined);

const accepted = () => new Response(null, { status: 202 });
const reject = (status: number) => new Response(null, { status });

export default async (req: Request, context: Context) => {
  if (req.method !== "POST") return reject(405);
  if (!originAllowed(req.headers.get("origin"), context)) return reject(403);

  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) return reject(413);

  let body: Record<string, unknown>;
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return reject(400);
    body = parsed as Record<string, unknown>;
  } catch {
    return reject(400);
  }

  const eventName = str(body.event_name, 20);
  if (!eventName || !ALLOWED_EVENTS.has(eventName)) return reject(400);

  const eventId = str(body.event_id, 100);
  if (!eventId) return reject(400);

  const pixelId = process.env.META_PIXEL_ID;
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  const graphVersion = process.env.META_GRAPH_VERSION;
  if (!pixelId || !token || !graphVersion) {
    console.error("[meta-capi] config missing:", {
      META_PIXEL_ID: !!pixelId,
      META_CAPI_ACCESS_TOKEN: !!token,
      META_GRAPH_VERSION: !!graphVersion,
    });
    return accepted();
  }

  const userData: Record<string, unknown> = {
    em: hashed(normalizeEmail(str(body.email))),
    ph: hashed(normalizePhone(str(body.phone, 40))),
    fn: hashed(normalizeName(str(body.first_name))),
    ln: hashed(normalizeName(str(body.last_name))),
    zp: hashed(normalizeZip(str(body.zip, 20))),
    ct: hashed(normalizeCity(str(body.city))),
    fbp: str(body.fbp),
    fbc: str(body.fbc, 500),
    client_ip_address: context?.ip,
    client_user_agent: str(req.headers.get("user-agent") ?? undefined, 500),
  };
  for (const key of Object.keys(userData)) if (userData[key] === undefined) delete userData[key];

  const customIn = body.custom_data as Record<string, unknown> | undefined;
  const contentName = customIn && typeof customIn === "object" ? str(customIn.content_name, 100) : undefined;

  const event: Record<string, unknown> = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId,
    action_source: "website",
    user_data: userData,
  };
  const sourceUrl = str(body.event_source_url, 1000);
  if (sourceUrl) event.event_source_url = sourceUrl;
  if (contentName) event.custom_data = { content_name: contentName };

  const payload: Record<string, unknown> = { data: [event] };
  const testCode = process.env.META_TEST_EVENT_CODE;
  if (testCode) payload.test_event_code = testCode;

  const url = `https://graph.facebook.com/${graphVersion}/${pixelId}/events?access_token=${encodeURIComponent(token)}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), META_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const json = (await res.json().catch(() => ({}))) as {
      events_received?: number;
      fbtrace_id?: string;
      error?: { message?: string; code?: number; fbtrace_id?: string };
    };
    if (res.ok) {
      console.log("[meta-capi]", eventName, res.status, "events_received:", json.events_received ?? 0);
    } else {
      console.error("[meta-capi]", eventName, res.status, "error:", json.error?.code, json.error?.message, json.error?.fbtrace_id);
    }
  } catch (err) {
    console.error("[meta-capi]", eventName, "request failed:", (err as Error)?.name);
  } finally {
    clearTimeout(timer);
  }

  return accepted();
};
